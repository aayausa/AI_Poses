export function initState() {
  return {
    poseType: null,
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
