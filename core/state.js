// core/state.js

export function initState() {
  return {
    poseType: null,        // ← ВАЖНО: НИКАКОГО ФИЛЬТРА ПО УМОЛЧАНИЮ
    selectedPose: null,

    camera: null,
    location: null,
    wardrobe: null,
    color: null,
    emotion: null,

    useIdentity: false,
    useOwnClothes: false,

    onChange() {}
  };
}
