// core/promptEngine.js

export function buildFinalPrompt(state, data) {
  const positive = [];
  const negative = [];

  /* ================= POSITIVE ================= */

  // ПОЗА
  if (state.selectedPose) {
    const pose = data.poses.find(p => p.id === state.selectedPose);
    if (pose?.prompt?.base) {
      positive.push(pose.prompt.base);
    }
  }

  // КАМЕРА
  if (state.camera && data.cameras[state.camera]?.prompt) {
    positive.push(data.cameras[state.camera].prompt);
  }

  // ЛОКАЦИЯ
  if (state.location && data.locations[state.location]?.prompt) {
    positive.push(data.locations[state.location].prompt);
  }

  // ГАРДЕРОБ
  if (!state.useOwnClothes && state.wardrobe && data.wardrobe[state.wardrobe]?.prompt) {
    positive.push(data.wardrobe[state.wardrobe].prompt);
  }

  // ЦВЕТ
  if (state.color && data.colors[state.color]?.prompt) {
    positive.push(data.colors[state.color].prompt);
  }

  // ЭМОЦИЯ
  if (state.emotion && data.emotions[state.emotion]?.prompt) {
    positive.push(data.emotions[state.emotion].prompt);
  }

  // СВОЁ ФОТО
  if (state.useIdentity) {
    positive.push(
      'use the same person from the reference image, preserve facial identity, same face structure'
    );
  }

  // СВОЯ ОДЕЖДА
  if (state.useOwnClothes) {
    positive.push(
      'wearing the same clothes as in the reference image'
    );
  }

  /* ================= NEGATIVE ================= */

  negative.push(
    'blurry',
    'low quality',
    'bad anatomy',
    'extra limbs',
    'extra fingers',
    'deformed body',
    'distorted face',
    'wrong proportions'
  );

  /* ================= FINAL ================= */

  const positiveText = clean(positive.join(', '));
  const negativeText = clean(negative.join(', '));

  if (!positiveText) return '';

  return `${positiveText}\n\n--negative ${negativeText}`;
}

/* ================= HELPERS ================= */

function clean(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/,\s*,/g, ',')
    .replace(/^,|,$/g, '')
    .trim();
}
