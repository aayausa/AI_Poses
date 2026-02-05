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

        <section class="identity">
          <label>
            <input type="checkbox" id="identityToggle">
            Использовать своё фото
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
}

function buildPoseTypeFilters(data, state) {
  const container = document.getElementById('poseTypeFilters');
  const types = [...new Set(data.poses.map(p => p.type))];

  types.forEach(type => {
    const btn = document.createElement('button');
    btn.textContent = type;
    btn.className = 'filter-btn';

    btn.onclick = () => {
      state.poseType = type;
      document.querySelectorAll('.filter-btn')
        .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.onChange();
    };

    container.appendChild(btn);
  });
}

function buildSelect(id, source, state, key) {
  const select = document.getElementById(id);
  select.innerHTML = '';

  Object.entries(source).forEach(([id, item]) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = item.name;
    select.appendChild(option);
  });

  select.onchange = e => {
    state[key] = e.target.value;
    state.onChange();
  };
}
