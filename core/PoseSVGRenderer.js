// core/PoseSVGRenderer.js

const COLORS = ['#2563EB', '#DC2626', '#059669'];

export function renderPoseSVG(pose) {
  if (!pose || !pose.prompt || !pose.prompt.base) return '';

  const text = pose.prompt.base.toLowerCase();

  const people =
    pose.composition === 'group' ? 3 :
    pose.composition === 'couple' ? 2 : 1;

  const cfg = parsePose(text);

  const width = 120;
  const height = cfg.orientation === 'lying' ? 80 : 150;

  let persons = '';

  for (let i = 0; i < people; i++) {
    const color = COLORS[i % COLORS.length];
    persons += drawPerson(
      cfg,
      people === 1 ? width / 2 : (width / (people + 1)) * (i + 1),
      20 + i * 10,
      color
    );
  }

  return `
    <svg viewBox="0 0 ${width} ${height}" width="100%" height="120">
      ${persons}
    </svg>
  `;
}

/* ================== PARSER ================== */

function parsePose(text) {
  return {
    orientation: text.includes('lying') ? 'lying' :
                 text.includes('sitting') ? 'sitting' : 'standing',

    arms: text.includes('arms crossed') ? 'crossed' :
          text.includes('arms raised') ? 'up' :
          text.includes('hands in pockets') ? 'down' :
          'relaxed',

    legs: text.includes('legs crossed') ? 'crossed' :
          text.includes('step') || text.includes('walking') ? 'step' :
          'neutral',

    body: text.includes('leaning forward') ? 'forward' :
          text.includes('leaning back') ? 'back' :
          'upright',

    head: text.includes('head tilted') ? 'tilted' :
          text.includes('head turned') ? 'turned' :
          'neutral'
  };
}

/* ================== DRAW ================== */

function drawPerson(cfg, cx, top, color) {
  if (cfg.orientation === 'lying') {
    return drawLying(cx - 30, top + 20, color);
  }
  if (cfg.orientation === 'sitting') {
    return drawSitting(cfg, cx, top, color);
  }
  return drawStanding(cfg, cx, top, color);
}

function drawStanding(cfg, cx, top, color) {
  return `
    ${head(cfg, cx, top, color)}
    <rect x="${cx - 6}" y="${top + 20}" width="12" height="40" rx="6" fill="${color}" />
    ${arms(cfg, cx, top + 30, color)}
    ${legs(cfg, cx, top + 60, color)}
  `;
}

function drawSitting(cfg, cx, top, color) {
  return `
    ${head(cfg, cx, top, color)}
    <rect x="${cx - 6}" y="${top + 20}" width="12" height="28" rx="6" fill="${color}" />
    ${legs(cfg, cx, top + 48, color)}
  `;
}

function drawLying(x, y, color) {
  return `
    <circle cx="${x}" cy="${y}" r="6" fill="${color}" />
    <rect x="${x + 10}" y="${y - 4}" width="40" height="8" rx="4" fill="${color}" />
  `;
}

/* ================== PARTS ================== */

function head(cfg, cx, top, color) {
  let dx = cfg.head === 'turned' ? 4 : 0;
  let dy = cfg.head === 'tilted' ? 3 : 0;

  return `<circle cx="${cx + dx}" cy="${top + 10 + dy}" r="7" fill="${color}" />`;
}

function arms(cfg, cx, y, color) {
  if (cfg.arms === 'crossed') {
    return `
      <line x1="${cx - 10}" y1="${y}" x2="${cx + 10}" y2="${y + 12}"
        stroke="${color}" stroke-width="4" />
      <line x1="${cx + 10}" y1="${y}" x2="${cx - 10}" y2="${y + 12}"
        stroke="${color}" stroke-width="4" />
    `;
  }
  if (cfg.arms === 'up') {
    return `
      <line x1="${cx - 6}" y1="${y}" x2="${cx - 6}" y2="${y - 20}"
        stroke="${color}" stroke-width="4" />
      <line x1="${cx + 6}" y1="${y}" x2="${cx + 6}" y2="${y - 20}"
        stroke="${color}" stroke-width="4" />
    `;
  }
  return `
    <line x1="${cx - 10}" y1="${y}" x2="${cx - 18}" y2="${y + 20}"
      stroke="${color}" stroke-width="4" />
    <line x1="${cx + 10}" y1="${y}" x2="${cx + 18}" y2="${y + 20}"
      stroke="${color}" stroke-width="4" />
  `;
}

function legs(cfg, cx, y, color) {
  if (cfg.legs === 'step') {
    return `
      <line x1="${cx}" y1="${y}" x2="${cx + 14}" y2="${y + 30}"
        stroke="${color}" stroke-width="4" />
    `;
  }
  return `
    <line x1="${cx - 4}" y1="${y}" x2="${cx - 8}" y2="${y + 30}"
      stroke="${color}" stroke-width="4" />
    <line x1="${cx + 4}" y1="${y}" x2="${cx + 8}" y2="${y + 30}"
      stroke="${color}" stroke-width="4" />
  `;
}
