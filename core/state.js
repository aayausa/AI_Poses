export function initState(data) {
  const state = {
    poseType: null,
    camera: null,
    location: null,
    wardrobe: null,
    color: null,

    useIdentity: false,
    useOwnClothes: false, // ← ВАЖНО
    emotion: null,        // ← ВАЖНО

    onChange() {}
  };

  return state;
}
