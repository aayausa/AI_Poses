export function buildLayout(root, data, state) {
  root.innerHTML = `
    <div class="app">

      <aside class="sidebar">
        <div class="logo">AI Poses <span>MASTER</span></div>

        <section>
          <h3>Тип позы</h3>
          <div id="poseTypeFilters" class="filters"></div>
        </section>

        <section>
          <h3>Поза</h3>
          <select id="poseSelect"></select>
        </section>

        <section>
          <h3>Камера</h3>
          <select id="cameraSelect"></select>
        </section>

        <section>
          <h3>Локация</h3>
          <select id="locationSelect"></select>
        </section>

        <section>
          <h3>Гардероб</h3>
          <select id="wardrobeSelect"></select>
        </section>

        <section>
          <h3>Цвет</h3>
          <select id="colorSelect"></select>
        </section>

        <section>
          <h3>Эмоция</h3>
          <select id="emotionSelect"></select>
        </section>

        <section class="toggles">
          <label>
            <input type="checkbox" id="identityToggle">
            Использовать своё фото
          </label>

          <label>
            <input type="checkbox" id="ownClothesToggle">
            Использовать свою одежду
          </label>
        </section>

        <footer id="stats">Выбери параметры</footer>
      </aside>

      <main>
        <div id="poseGrid" class="grid"></div>
      </main>

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

/* ---------- helpers ---------- */

function buildPoseTypeFilters(data, state) {
  const wrap = document.getElementById('poseTypeFilters');
  wrap.innerHTML = '';

  const types = [...new Set(data.poses.map(p => p.type))];

  types.forEach(type => {
    const btn = document.createElement('button');
    btn.textContent = type;
    btn.className = 'filter-btn';

    btn.onclick = () => {
      state.poseType = type;
      state.selectedPose = null;
      buildPoseSelect(data, state);
      state.onChange();
    };

    wrap.appendChild(btn);
  });
}

function buildPoseSelect(data, state) {
  const select = document.getElementById('poseSelect');
  select.innerHTML = '<option value="">— не выбрано —</option>';

  data.poses
    .filter(p => !state.poseType || p.type === state.poseType)
    .forEach(pose => {
      const opt = document.createElement('option');
      opt.value = pose.id;
      opt.textContent = pose.name;
      if (state.selectedPose === pose.id) opt.selected = true;
      select.appendChild(opt);
    });

  select.onchange = e => {
    state.selectedPose = e.target.value || null;
    state.onChange();
  };
}

function buildSelect(id, source, state, key) {
  const select = document.getElementById(id);
  select.innerHTML = '<option value="">— не выбрано —</option>';

  Object.entries(source).forEach(([k, v]) => {
    const opt = document.createElement('option');
    opt.value = k;
    opt.textContent = v.name;
    select.appendChild(opt);
  });

  select.onchange = e => {
    state[key] = e.target.value || null;
    state.onChange();
  };
}
