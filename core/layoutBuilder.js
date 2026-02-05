// core/layoutBuilder.js

export function buildLayout(root, data, state) {
  root.innerHTML = `
    <div class="container-fluid">
      <div class="row min-vh-100">

        <!-- SIDEBAR -->
        <aside class="col-12 col-md-4 col-lg-3 border-end bg-light p-3">

          <h5 class="fw-bold mb-3">AI Poses MASTER</h5>

          <!-- TYPE FILTER -->
          <div class="mb-3">
            <label class="form-label">Тип позы</label>
            <div id="poseTypeFilters" class="d-flex flex-wrap gap-1"></div>
          </div>

          <!-- POSE SELECT -->
          <div class="mb-3">
            <label class="form-label">Поза</label>
            <select id="poseSelect" class="form-select"></select>
          </div>

          <!-- CAMERA -->
          <div class="mb-3">
            <label class="form-label">Камера</label>
            <select id="cameraSelect" class="form-select"></select>
          </div>

          <!-- LOCATION -->
          <div class="mb-3">
            <label class="form-label">Локация</label>
            <select id="locationSelect" class="form-select"></select>
          </div>

          <!-- WARDROBE -->
          <div class="mb-3">
            <label class="form-label">Гардероб</label>
            <select id="wardrobeSelect" class="form-select"></select>
          </div>

          <!-- COLOR -->
          <div class="mb-3">
            <label class="form-label">Цвет</label>
            <select id="colorSelect" class="form-select"></select>
          </div>

          <!-- EMOTION -->
          <div class="mb-3">
            <label class="form-label">Эмоция</label>
            <select id="emotionSelect" class="form-select"></select>
          </div>

          <!-- TOGGLES -->
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="identityToggle">
            <label class="form-check-label">Использовать своё фото</label>
          </div>

          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" id="ownClothesToggle">
            <label class="form-check-label">Использовать свою одежду</label>
          </div>

          <!-- STATS -->
          <div id="stats" class="small text-muted">
            Выбери параметры
          </div>

        </aside>

        <!-- MAIN -->
        <main class="col-12 col-md-8 col-lg-9 p-4">
          <div id="poseGrid" class="row g-3"></div>
        </main>

      </div>
    </div>
  `;

  buildPoseTypeFilters(data, state);
  buildPoseSelect(data, state);

  buildSelect('cameraSelect', data.cameras, state, 'camera');
  buildSelect('locationSelect', data.locations, state, 'location');
  buildSelect('wardrobeSelect', data.wardrobe, state, 'wardrobe');
  buildSelect('colorSelect', data.colors, state, 'color');
  buildSelect('emotionSelect', data.emotions, state, 'emotion');

  document.getElementById('identityToggle').onchange = e => {
    state.useIdentity = e.target.checked;
    state.onChange();
  };

  document.getElementById('ownClothesToggle').onchange = e => {
    state.useOwnClothes = e.target.checked;
    state.onChange();
  };
}

/* =====================================================
   TYPE FILTER BUTTONS (BOOTSTRAP)
===================================================== */

function buildPoseTypeFilters(data, state) {
  const wrap = document.getElementById('poseTypeFilters');
  wrap.innerHTML = '';

  const types = [...new Set(data.poses.map(p => p.type))];

  types.forEach(type => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = type;
    btn.className = 'btn btn-sm btn-outline-dark';

    if (state.poseType === type) {
      btn.classList.add('active');
    }

    btn.onclick = () => {
      state.poseType = type;
      state.selectedPose = null;

      buildPoseTypeFilters(data, state);
      buildPoseSelect(data, state);
      state.onChange();
    };

    wrap.appendChild(btn);
  });
}

/* =====================================================
   POSE SELECT
===================================================== */

function buildPoseSelect(data, state) {
  const select = document.getElementById('poseSelect');
  select.innerHTML = '<option value="">— не выбрано —</option>';

  data.poses
    .filter(p => !state.poseType || p.type === state.poseType)
    .forEach(pose => {
      const opt = document.createElement('option');
      opt.value = pose.id;
      opt.textContent = pose.name;

      if (state.selectedPose === pose.id) {
        opt.selected = true;
      }

      select.appendChild(opt);
    });

  select.onchange = e => {
    state.selectedPose = e.target.value || null;
    state.onChange();
  };
}

/* =====================================================
   GENERIC SELECT BUILDER
===================================================== */

function buildSelect(id, source, state, key) {
  const select = document.getElementById(id);
  select.innerHTML = '<option value="">— не выбрано —</option>';

  Object.entries(source).forEach(([value, item]) => {
    const opt = document.createElement('option');
    opt.value = value;
    opt.textContent = item.name;
    select.appendChild(opt);
  });

  select.onchange = e => {
    state[key] = e.target.value || null;
    state.onChange();
  };
}
