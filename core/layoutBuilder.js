// core/layoutBuilder.js

export function buildLayout(root, data, state) {
  root.innerHTML = `
    <div class="app">

      <aside class="sidebar">
        <div class="logo">AI Poses <span>MASTER</span></div>

        <section id="poseTypeSection">
          <h3>Тип позы</h3>
          <div class="filters" id="poseTypeFilters"></div>
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

        <footer id="stats"></footer>
      </aside>

      <main>
        <div id="poseGrid" class="grid"></div>
      </main>

    </div>
  `;

  buildPoseTypeFilters(data, state);

  buildSelect('cameraSelect', data.cameras, state, 'camera');
  buildSelect('locationSelect', data.locations, state, 'location');
  buildSelect('wardrobeSelect', data.wardrobe, state, 'wardrobe');
  buildSelect('colorSelect', data.colors, state, 'color');
  buildSelect('emotionSelect', data.emotions, state, 'emotion');

  bindToggles(state);
}

/* =====================================================
   FILTERS
===================================================== */

function buildPoseTypeFilters(data, state) {
  const container = document.getElementById('poseTypeFilters');
  container.innerHTML = '';

  const types = [...new Set(data.poses.map(p => p.type))];

  types.forEach(type => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.textContent = type;

    btn.onclick = () => {
      state.poseType = type;

      container
        .querySelectorAll('.filter-btn')
        .forEach(b => b.classList.remove('active'));

      btn.classList.add('active');
      state.onChange();
    };

    container.appendChild(btn);
  });
}

/* =====================================================
   SELECT BUILDERS
===================================================== */

function buildSelect(selectId, source, state, stateKey) {
  const select = document.getElementById(selectId);
  select.innerHTML = '';

  const emptyOption = document.createElement('option');
  emptyOption.value = '';
  emptyOption.textContent = '— не выбрано —';
  select.appendChild(emptyOption);

  Object.entries(source).forEach(([key, item]) => {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = item.name;
    select.appendChild(option);
  });

  select.onchange = e => {
    state[stateKey] = e.target.value || null;
    state.onChange();
  };
}

/* =====================================================
   TOGGLES
===================================================== */

function bindToggles(state) {
  const identityToggle = document.getElementById('identityToggle');
  const ownClothesToggle = document.getElementById('ownClothesToggle');

  identityToggle.onchange = e => {
    state.useIdentity = e.target.checked;
    state.onChange();
  };

  ownClothesToggle.onchange = e => {
    state.useOwnClothes = e.target.checked;
    state.onChange();
  };
}
