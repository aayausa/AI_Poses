// data/poses.db.js

export const posesDB = [

  /* =====================================================
     STANDING — SOLO
  ===================================================== */

  {
    id: "standing_confident_001",
    name: "Уверенная стойка",

    type: "standing",
    composition: "solo",

    body: {
      joints: {
        spine: "straight",
        shoulders: "open",
        arms: "relaxed",
        legs: "shoulder_width"
      },
      people: null
    },

    prompt: {
      base: "confident person standing upright, balanced posture, relaxed but strong presence"
    }
  },

  {
    id: "standing_arms_crossed_002",
    name: "Руки скрещены",

    type: "standing",
    composition: "solo",

    body: {
      joints: {
        spine: "straight",
        arms: "crossed",
        shoulders: "neutral",
        legs: "neutral"
      },
      people: null
    },

    prompt: {
      base: "person standing with arms crossed, calm and self-assured posture"
    }
  },

  /* =====================================================
     SITTING — SOLO
  ===================================================== */

  {
    id: "sitting_relaxed_003",
    name: "Расслабленно сидя",

    type: "sitting",
    composition: "solo",

    body: {
      joints: {
        spine: "slightly_relaxed",
        arms: "resting",
        legs: "bent"
      },
      people: null
    },

    prompt: {
      base: "person sitting in a relaxed pose, natural posture, comfortable position"
    }
  },

  /* =====================================================
     PORTRAIT — SOLO
  ===================================================== */

  {
    id: "portrait_neutral_004",
    name: "Нейтральный портрет",

    type: "portrait",
    composition: "solo",

    body: {
      joints: {
        head: "straight",
        shoulders: "neutral"
      },
      people: null
    },

    prompt: {
      base: "neutral portrait pose, head facing forward, natural facial expression"
    }
  },

  /* =====================================================
     ACTION — SOLO
  ===================================================== */

  {
    id: "action_step_forward_005",
    name: "Шаг вперёд",

    type: "action",
    composition: "solo",

    body: {
      joints: {
        torso: "slightly_forward",
        legs: "stepping",
        arms: "natural_motion"
      },
      people: null
    },

    prompt: {
      base: "person stepping forward, dynamic motion, sense of movement"
    }
  },

  /* =====================================================
     COUPLE — STANDING
  ===================================================== */

  {
    id: "couple_back_to_back_006",
    name: "Спина к спине",

    type: "standing",
    composition: "couple",

    body: {
      joints: null,
      people: [
        { posture: "standing", orientation: "back_to_back" },
        { posture: "standing", orientation: "back_to_back" }
      ]
    },

    prompt: {
      base: "two people standing back to back, confident and balanced composition"
    }
  },

  /* =====================================================
     GROUP — STANDING
  ===================================================== */

  {
    id: "group_three_standing_007",
    name: "Группа из трёх",

    type: "standing",
    composition: "group",

    body: {
      joints: null,
      people: [
        { posture: "standing", position: "left" },
        { posture: "standing", position: "center" },
        { posture: "standing", position: "right" }
      ]
    },

    prompt: {
      base: "group of three people standing together, cohesive and balanced arrangement"
    }
  }

];
