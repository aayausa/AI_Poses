// core/promptEngine.js

/**
 * Собирает финальный prompt из state и data
 * Ничего не знает про UI
 */

export function buildFinalPrompt(state, data) {
  const parts = [];

  // 1) ПОЗА
  if (state.selectedPose) {
    const pose = data.poses.find(p => p.id === state.selectedPose);
    if (pose?.prompt?.base) {
      parts.push(pose.prompt.base);
    }
  }

  // 2) КАМЕРА
  if (state.camera && data.cameras[state.camera]?.prompt) {
    parts.push(data.cameras[state.camera].prompt);
  }

  // 3) ЛОКАЦИЯ
  if (state.location && data.locations[state.location]?.prompt) {
    parts.push(data.locations[state.location].prompt);
  }

  // 4) ГАРДЕРОБ
  if (!state.useOwnClothes && state.wardrobe && data.wardrobe[state.wardrobe]?.prompt) {
    parts.push(data.wardrobe[state.wardrobe].prompt);
  }

  // 5) ЦВЕТ
  if (state.color && data.colors[state.color]?.prompt) {
    parts.push(data.colors[state.color].prompt);
  }

  // 6) ЭМОЦИЯ
  if (state.emotion && data.emotions[state.emotion]?.prompt) {
    parts.push(data.emotions[state.emotion].prompt);
  }

  // 7) СВОЁ ФОТО
  if (state.useIdentity) {
    parts.push('use the exact same person from the reference image, preserve facial identity');
  }

  // 8) СВОЯ ОДЕЖДА
  if (state.useOwnClothes) {
    parts.push('wearing the same clothing as in the reference image');
  }

  // финальная строка
  return cleanPrompt(parts.join(', '));
}

/* ================= HELPERS ================= */

function cleanPrompt(text) {
  return text
    .replace(/\s+/g, ' ')
    .replace(/,\s*,/g, ',')
    .replace(/^,|,$/g, '')
    .trim();
}
