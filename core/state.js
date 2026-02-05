// core/state.js

export function initState(data) {
  const state = {
    poseType: null,
    camera: null,
    location: null,
    wardrobe: null,
    color: null,
    identity: false,

    onChange() {}
  };

  return state;
}
