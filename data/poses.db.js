// data/poses.db.js

export const posesDB = [

/* ===================== STANDING · SOLO ===================== */

{
  id: 'standing_confident_solo',
  name: 'Уверенная стойка',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'confident person standing upright, balanced posture, relaxed but strong presence' }
},
{
  id: 'standing_arms_crossed',
  name: 'Руки скрещены',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with arms crossed, calm and self-assured posture' }
},
{
  id: 'standing_weight_shift',
  name: 'Перенос веса на одну ногу',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with weight shifted to one leg, relaxed natural stance' }
},
{
  id: 'standing_hands_in_pockets',
  name: 'Руки в карманах',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with hands in pockets, casual confident posture' }
},
{
  id: 'standing_back_straight',
  name: 'Прямая осанка',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing straight with perfect posture, aligned spine, confident presence' }
},

/* ===================== STANDING · COUPLE ===================== */

{
  id: 'standing_back_to_back',
  name: 'Спина к спине',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing back to back, confident balanced composition' }
},
{
  id: 'standing_facing_each_other',
  name: 'Лицом друг к другу',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing facing each other, natural interaction, relaxed posture' }
},
{
  id: 'standing_side_by_side',
  name: 'Стоят рядом',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing side by side, balanced symmetrical composition' }
},

/* ===================== STANDING · GROUP ===================== */

{
  id: 'standing_group_triangle',
  name: 'Группа треугольником',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'group of people standing in triangular composition, balanced arrangement' }
},
{
  id: 'standing_group_line',
  name: 'Группа в линию',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'group of people standing in a straight line, evenly spaced composition' }
},

/* ===================== SITTING · SOLO ===================== */

{
  id: 'sitting_relaxed',
  name: 'Расслабленно сидя',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting in a relaxed pose, natural posture, comfortable position' }
},
{
  id: 'sitting_leaning_forward',
  name: 'Наклон вперёд',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting and leaning slightly forward, engaged attentive posture' }
},
{
  id: 'sitting_crossed_legs',
  name: 'Нога на ногу',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting with legs crossed, elegant composed posture' }
},

/* ===================== PORTRAIT · SOLO ===================== */

{
  id: 'portrait_neutral',
  name: 'Нейтральный портрет',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'neutral portrait pose, head facing forward, natural facial expression' }
},
{
  id: 'portrait_slight_turn',
  name: 'Лёгкий поворот головы',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'portrait pose with slight head turn, soft natural expression' }
},
{
  id: 'portrait_confident',
  name: 'Уверенный портрет',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'confident portrait pose, direct gaze, strong presence' }
},

/* ===================== ACTION · SOLO ===================== */

{
  id: 'action_step_forward',
  name: 'Шаг вперёд',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person stepping forward, dynamic motion, sense of movement' }
},
{
  id: 'action_turning',
  name: 'Поворот в движении',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person turning mid-motion, dynamic pose with flowing movement' }
},
{
  id: 'action_running',
  name: 'Бег',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person running, dynamic action pose, energetic movement' }
}
,
/* =========================================================
   STANDING · SOLO (1–40)
========================================================= */

{
  id: 'standing_confident_solo',
  name: 'Уверенная стойка',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'confident person standing upright, balanced posture, relaxed but strong presence' }
},
{
  id: 'standing_arms_crossed',
  name: 'Руки скрещены',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with arms crossed, calm and self-assured posture' }
},
{
  id: 'standing_hands_in_pockets',
  name: 'Руки в карманах',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with hands in pockets, casual confident stance' }
},
{
  id: 'standing_weight_on_one_leg',
  name: 'Перенос веса на одну ногу',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with weight shifted to one leg, relaxed natural posture' }
},
{
  id: 'standing_straight_posture',
  name: 'Прямая осанка',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing straight with aligned spine, confident posture' }
},
{
  id: 'standing_relaxed_shoulders',
  name: 'Расслабленные плечи',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with relaxed shoulders, natural calm posture' }
},
{
  id: 'standing_looking_away',
  name: 'Взгляд в сторону',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing and looking away from camera, thoughtful pose' }
},
{
  id: 'standing_looking_up',
  name: 'Взгляд вверх',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing and looking slightly upward, confident aspirational pose' }
},
{
  id: 'standing_looking_down',
  name: 'Взгляд вниз',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing looking down slightly, calm introspective posture' }
},
{
  id: 'standing_side_profile',
  name: 'Профиль',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing in side profile, clean silhouette pose' }
},
{
  id: 'standing_half_turn',
  name: 'Полуоборот',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing in half turn, dynamic yet balanced posture' }
},
{
  id: 'standing_one_hand_hip',
  name: 'Одна рука на бедре',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with one hand on hip, confident expressive posture' }
},
{
  id: 'standing_two_hands_hips',
  name: 'Две руки на бедрах',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with both hands on hips, assertive confident stance' }
},
{
  id: 'standing_arms_relaxed',
  name: 'Руки свободно опущены',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with arms relaxed at sides, neutral natural posture' }
},
{
  id: 'standing_leaning_back',
  name: 'Лёгкий наклон назад',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing leaning slightly back, relaxed confident attitude' }
},
{
  id: 'standing_leaning_forward',
  name: 'Лёгкий наклон вперёд',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing leaning slightly forward, engaged attentive posture' }
},
{
  id: 'standing_crossed_legs',
  name: 'Скрещенные ноги',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with legs crossed, elegant composed stance' }
},
{
  id: 'standing_feet_apart',
  name: 'Ноги на ширине плеч',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'person standing with feet shoulder width apart, grounded stable posture' }
},
{
  id: 'standing_relaxed_confidence',
  name: 'Спокойная уверенность',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'relaxed confident standing pose, natural body language' }
},
{
  id: 'standing_neutral_balance',
  name: 'Нейтральная стойка',
  type: 'standing',
  composition: 'solo',
  prompt: { base: 'neutral standing pose, balanced posture, natural alignment' }
},

/* =========================================================
   STANDING · COUPLE (41–70)
========================================================= */

{
  id: 'standing_couple_back_to_back',
  name: 'Спина к спине',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing back to back, confident balanced composition' }
},
{
  id: 'standing_couple_side_by_side',
  name: 'Стоят рядом',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing side by side, natural symmetrical pose' }
},
{
  id: 'standing_couple_facing_each_other',
  name: 'Лицом друг к другу',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing facing each other, relaxed interaction' }
},
{
  id: 'standing_couple_one_forward',
  name: 'Один впереди',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing with one slightly forward, layered composition' }
},
{
  id: 'standing_couple_close',
  name: 'Близкое расположение',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing close together, intimate natural pose' }
},
{
  id: 'standing_couple_open_space',
  name: 'Дистанция между людьми',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing with space between them, balanced open composition' }
},
{
  id: 'standing_couple_mirrored',
  name: 'Зеркальная поза',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing in mirrored pose, visual symmetry' }
},
{
  id: 'standing_couple_dynamic',
  name: 'Динамичная пара',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'two people standing in dynamic stance, sense of movement' }
},
{
  id: 'standing_couple_confident',
  name: 'Уверенная пара',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'confident couple standing together, strong presence' }
},
{
  id: 'standing_couple_relaxed',
  name: 'Расслабленная пара',
  type: 'standing',
  composition: 'couple',
  prompt: { base: 'relaxed couple standing naturally, casual posture' }
},

/* =========================================================
   STANDING · GROUP (71–100)
========================================================= */

{
  id: 'standing_group_triangle',
  name: 'Группа треугольником',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'group of people standing in triangular composition, balanced arrangement' }
},
{
  id: 'standing_group_line',
  name: 'Группа в линию',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'group of people standing in a straight line, evenly spaced composition' }
},
{
  id: 'standing_group_cluster',
  name: 'Групповой кластер',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'group of people standing close together, cohesive cluster composition' }
},
{
  id: 'standing_group_depth',
  name: 'Глубина группы',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'group of people standing at different depths, layered composition' }
},
{
  id: 'standing_group_confident',
  name: 'Уверенная группа',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'confident group standing together, strong collective presence' }
},
{
  id: 'standing_group_relaxed',
  name: 'Расслабленная группа',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'relaxed group standing naturally, casual body language' }
},
{
  id: 'standing_group_dynamic',
  name: 'Динамичная группа',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'dynamic group standing pose, sense of movement and energy' }
},
{
  id: 'standing_group_formal',
  name: 'Формальная группа',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'formal group standing pose, structured balanced composition' }
},
{
  id: 'standing_group_casual',
  name: 'Неформальная группа',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'casual group standing pose, relaxed natural interaction' }
},
{
  id: 'standing_group_spread',
  name: 'Группа с интервалами',
  type: 'standing',
  composition: 'group',
  prompt: { base: 'group of people standing with spacing, open balanced arrangement' }
}
,

/* =========================================================
   SITTING · SOLO (101–140)
========================================================= */

{
  id: 'sitting_relaxed_chair',
  name: 'Расслабленно на стуле',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting relaxed on a chair, natural posture, comfortable position' }
},
{
  id: 'sitting_crossed_legs',
  name: 'Нога на ногу',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting with legs crossed, elegant composed posture' }
},
{
  id: 'sitting_leaning_forward',
  name: 'Наклон вперёд',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting and leaning slightly forward, attentive engaged posture' }
},
{
  id: 'sitting_leaning_back',
  name: 'Откинувшись назад',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting leaning back, relaxed confident posture' }
},
{
  id: 'sitting_hands_on_knees',
  name: 'Руки на коленях',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting with hands on knees, calm balanced posture' }
},
{
  id: 'sitting_arms_crossed',
  name: 'Скрещенные руки',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting with arms crossed, composed confident posture' }
},
{
  id: 'sitting_side_profile',
  name: 'Сидя в профиль',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting in side profile, clean silhouette pose' }
},
{
  id: 'sitting_straight_posture',
  name: 'Прямая осанка сидя',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting upright with straight posture, balanced alignment' }
},
{
  id: 'sitting_relaxed_shoulders',
  name: 'Расслабленные плечи',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'person sitting with relaxed shoulders, natural calm pose' }
},
{
  id: 'sitting_casual',
  name: 'Неформальная посадка',
  type: 'sitting',
  composition: 'solo',
  prompt: { base: 'casual sitting pose, relaxed body language' }
},

/* =========================================================
   SITTING · COUPLE (141–160)
========================================================= */

{
  id: 'sitting_couple_side_by_side',
  name: 'Сидят рядом',
  type: 'sitting',
  composition: 'couple',
  prompt: { base: 'two people sitting side by side, relaxed balanced composition' }
},
{
  id: 'sitting_couple_facing',
  name: 'Сидят лицом друг к другу',
  type: 'sitting',
  composition: 'couple',
  prompt: { base: 'two people sitting facing each other, natural interaction' }
},
{
  id: 'sitting_couple_close',
  name: 'Близкая посадка',
  type: 'sitting',
  composition: 'couple',
  prompt: { base: 'two people sitting close together, intimate relaxed posture' }
},
{
  id: 'sitting_couple_relaxed',
  name: 'Расслабленная пара сидя',
  type: 'sitting',
  composition: 'couple',
  prompt: { base: 'relaxed couple sitting naturally, casual body language' }
},
{
  id: 'sitting_couple_confident',
  name: 'Уверенная пара сидя',
  type: 'sitting',
  composition: 'couple',
  prompt: { base: 'confident couple sitting together, strong presence' }
},

/* =========================================================
   PORTRAIT · SOLO (161–200)
========================================================= */

{
  id: 'portrait_neutral_front',
  name: 'Нейтральный портрет анфас',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'neutral portrait pose, head facing forward, natural facial expression' }
},
{
  id: 'portrait_slight_head_turn',
  name: 'Лёгкий поворот головы',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'portrait pose with slight head turn, soft natural expression' }
},
{
  id: 'portrait_confident_gaze',
  name: 'Уверенный взгляд',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'confident portrait pose, direct gaze, strong presence' }
},
{
  id: 'portrait_relaxed_expression',
  name: 'Расслабленное выражение',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'portrait with relaxed facial expression, calm mood' }
},
{
  id: 'portrait_serious',
  name: 'Серьёзный портрет',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'serious portrait pose, focused expression' }
},
{
  id: 'portrait_soft_smile',
  name: 'Лёгкая улыбка',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'portrait pose with soft smile, friendly expression' }
},
{
  id: 'portrait_side_profile',
  name: 'Портрет в профиль',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'side profile portrait, clean silhouette, elegant composition' }
},
{
  id: 'portrait_three_quarter',
  name: 'Три четверти',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'three-quarter portrait pose, natural head angle' }
},
{
  id: 'portrait_low_angle',
  name: 'Низкий угол',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'portrait shot from low angle, confident powerful presence' }
},
{
  id: 'portrait_high_angle',
  name: 'Высокий угол',
  type: 'portrait',
  composition: 'solo',
  prompt: { base: 'portrait shot from slightly high angle, soft approachable mood' }
}
,

/* =========================================================
   ACTION · SOLO (201–260)
========================================================= */

{
  id: 'action_step_forward',
  name: 'Шаг вперёд',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person stepping forward, dynamic motion, sense of movement' }
},
{
  id: 'action_walking',
  name: 'Идёт вперёд',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person walking forward, natural stride, dynamic posture' }
},
{
  id: 'action_turning_motion',
  name: 'Поворот в движении',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person turning mid-motion, fluid dynamic movement' }
},
{
  id: 'action_running',
  name: 'Бег',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person running, energetic action pose, strong motion blur impression' }
},
{
  id: 'action_jump',
  name: 'Прыжок',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person jumping, frozen mid-air action pose' }
},
{
  id: 'action_reaching_forward',
  name: 'Тянется вперёд',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person reaching forward with arm, dynamic expressive motion' }
},
{
  id: 'action_hand_gesture',
  name: 'Активный жест рукой',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person making expressive hand gesture, dynamic body language' }
},
{
  id: 'action_turning_head',
  name: 'Резкий поворот головы',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person turning head quickly, captured moment of motion' }
},
{
  id: 'action_leaning_forward_run',
  name: 'Наклон в беге',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person leaning forward while running, strong forward momentum' }
},
{
  id: 'action_balance_shift',
  name: 'Смещение баланса',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person shifting balance mid-motion, dynamic unstable pose' }
},
{
  id: 'action_spin',
  name: 'Вращение',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person spinning, flowing dynamic motion captured' }
},
{
  id: 'action_stop_motion',
  name: 'Резкая остановка',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person stopping suddenly, frozen dynamic action pose' }
},
{
  id: 'action_recoil',
  name: 'Отдача назад',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person recoiling backward, dynamic reaction pose' }
},
{
  id: 'action_side_step',
  name: 'Шаг в сторону',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person stepping sideways, agile dynamic movement' }
},
{
  id: 'action_turn_back',
  name: 'Обернуться назад',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'person turning back mid-step, dynamic captured moment' }
},
{
  id: 'action_lower_body_motion',
  name: 'Акцент на ноги',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'dynamic lower body movement, active leg motion' }
},
{
  id: 'action_upper_body_motion',
  name: 'Акцент на корпус',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'dynamic upper body motion, expressive torso movement' }
},
{
  id: 'action_casual_motion',
  name: 'Лёгкое движение',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'casual dynamic movement, relaxed action pose' }
},
{
  id: 'action_confident_stride',
  name: 'Уверенный шаг',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'confident stride forward, purposeful motion' }
},
{
  id: 'action_dynamic_pause',
  name: 'Динамическая пауза',
  type: 'action',
  composition: 'solo',
  prompt: { base: 'dynamic pause mid-movement, tension and balance' }
},

/* =========================================================
   ACTION · COUPLE (261–290)
========================================================= */

{
  id: 'action_couple_walking',
  name: 'Идут вместе',
  type: 'action',
  composition: 'couple',
  prompt: { base: 'two people walking together, synchronized dynamic movement' }
},
{
  id: 'action_couple_turning',
  name: 'Поворот пары',
  type: 'action',
  composition: 'couple',
  prompt: { base: 'two people turning in motion, coordinated dynamic pose' }
},
{
  id: 'action_couple_interaction',
  name: 'Движение с взаимодействием',
  type: 'action',
  composition: 'couple',
  prompt: { base: 'two people interacting in motion, dynamic expressive action' }
},
{
  id: 'action_couple_opposite_motion',
  name: 'Движение в разные стороны',
  type: 'action',
  composition: 'couple',
  prompt: { base: 'two people moving in opposite directions, dynamic contrast' }
},
{
  id: 'action_couple_follow',
  name: 'Один следует за другим',
  type: 'action',
  composition: 'couple',
  prompt: { base: 'two people in motion, one following the other' }
},
{
  id: 'action_couple_dynamic_balance',
  name: 'Динамический баланс',
  type: 'action',
  composition: 'couple',
  prompt: { base: 'two people balancing movement together, coordinated action pose' }
},

/* =========================================================
   ACTION · GROUP (291–320)
========================================================= */

{
  id: 'action_group_walking',
  name: 'Группа в движении',
  type: 'action',
  composition: 'group',
  prompt: { base: 'group of people walking together, dynamic group motion' }
},
{
  id: 'action_group_dynamic',
  name: 'Динамичная группа',
  type: 'action',
  composition: 'group',
  prompt: { base: 'dynamic group action pose, collective movement' }
},
{
  id: 'action_group_depth_motion',
  name: 'Движение в глубину',
  type: 'action',
  composition: 'group',
  prompt: { base: 'group moving at different depths, layered dynamic composition' }
},
{
  id: 'action_group_scattered',
  name: 'Разрозненное движение',
  type: 'action',
  composition: 'group',
  prompt: { base: 'group of people moving in scattered directions, energetic chaos' }
},
{
  id: 'action_group_sync',
  name: 'Синхронное движение',
  type: 'action',
  composition: 'group',
  prompt: { base: 'group moving in synchronized motion, coordinated action pose' }
},
{
  id: 'action_group_forward',
  name: 'Группа вперёд',
  type: 'action',
  composition: 'group',
  prompt: { base: 'group moving forward together, strong collective momentum' }
}
,

];
