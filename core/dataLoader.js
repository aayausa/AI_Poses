// core/dataLoader.js

import { posesDB } from '../data/poses.db.js';
import { cameraDB } from '../data/camera.db.js';
import { locationDB } from '../data/location.db.js';
import { wardrobeDB } from '../data/wardrobe.db.js';
import { colorDB } from '../data/color.db.js';
import { emotionDB } from '../data/emotion.db.js';

export async function loadAllData() {
  return {
    poses: posesDB,
    cameras: cameraDB,
    locations: locationDB,
    wardrobe: wardrobeDB,
    colors: colorDB,
    emotions: emotionDB
  };
}
