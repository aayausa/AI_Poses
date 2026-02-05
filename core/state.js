export function initState() {
  return {
    poseType: 'standing', // ← ВАЖНО
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
