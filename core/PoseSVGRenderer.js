// core/PoseSVGRenderer.js

const COLORS = ['#2563EB', '#DC2626', '#059669', '#D97706'];

export function renderPoseSVG(pose) {
  // ЖЁСТКАЯ ЗАЩИТА
  if (!pose) return '';

  const type = pose.type || 'standing';
  const composition = pose.composition || 'solo';

  const people =
    composition === 'group' ? 3 :
    composition === 'couple' ? 2 : 1;

  const isLying = type === 'lying';
  const isSitting = type === 'sitting';
  const isPortrait = type === 'portrait';

  const width = 120;
  const height = isLying ? 80 : 140;

  let persons = '';

  for (let i = 0; i < people; i++) {
    const color = COLORS[i % COLORS.length];

    if (isLying) {
      persons += drawLying(10, 20 + i * 18, color);
    } else if (isSitting) {
      persons += drawSitting((width / (people + 1)) * (i + 1), 30, color);
    } else if (isPortrait) {
      persons += drawPortrait((width / (people + 1)) * (i + 1), 20, color);
    } else {
      // standing + action
      persons += drawStanding((width / (people + 1)) * (i + 1), 20, color);
    }
  }

  return `
    <svg
      viewBox="0 0 ${width} ${height}"
      width="100%"
      height="120"
      style="display:block"
    >
      ${persons}
    </svg>
  `;
}

/* ================== FIGURES ================== */

function drawStanding(cx, top, color) {
  return `
    <circle cx="${cx}" cy="${top + 10}" r="7" fill="${color}" />
    <rect x="${cx - 6}" y="${top + 18}" width="12" height="42" rx="6" fill="${color}" />

    <line x1="${cx - 10}" y1="${top + 30}" x2="${cx - 20}" y2="${top + 52}"
      stroke="${color}" stroke-width="4" stroke-linecap="round" />
    <line x1="${cx + 10}" y1="${top + 30}" x2="${cx + 20}" y2="${top + 52}"
      stroke="${color}" stroke-width="4" stroke-linecap="round" />

    <line x1="${cx - 4}" y1="${top + 60}" x2="${cx - 10}" y2="${top + 90}"
      stroke="${color}" stroke-width="4" stroke-linecap="round" />
    <line x1="${cx + 4}" y1="${top + 60}" x2="${cx + 10}" y2="${top + 90}"
      stroke="${color}" stroke-width="4" stroke-linecap="round" />
  `;
}

function drawSitting(cx, top, color) {
  return `
    <circle cx="${cx}" cy="${top + 8}" r="7" fill="${color}" />
    <rect x="${cx - 6}" y="${top + 16}" width="12" height="28" rx="6" fill="${color}" />

    <line x1="${cx}" y1="${top + 44}" x2="${cx + 20}" y2="${top + 64}"
      stroke="${color}" stroke-width="4" stroke-linecap="round" />
    <line x1="${cx}" y1="${top + 44}" x2="${cx - 20}" y2="${top + 64}"
      stroke="${color}" stroke-width="4" stroke-linecap="round" />
  `;
}

function drawPortrait(cx, top, color) {
  return `
    <circle cx="${cx}" cy="${top + 18}" r="14" fill="${color}" />
    <rect x="${cx - 10}" y="${top + 34}" width="20" height="18" rx="9" fill="${color}" />
  `;
}

function drawLying(x, y, color) {
  return `
    <circle cx="${x + 10}" cy="${y + 10}" r="6" fill="${color}" />
    <rect x="${x + 18}" y="${y + 6}" width="46" height="8" rx="4" fill="${color}" />
    <line x1="${x + 64}" y1="${y + 10}" x2="${x + 78}" y2="${y + 18}"
      stroke="${color}" stroke-width="4" stroke-linecap="round" />
  `;
}
