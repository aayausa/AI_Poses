// core/render.js

export function initRenderer(root, data, state) {
  const grid = root.querySelector('#poseGrid');
  const stats = root.querySelector('#stats');

  function render() {
    let poses = data.poses;

    if (state.poseType) {
      poses = poses.filter(p => p.type === state.poseType);
    }

    grid.innerHTML = '';

    if (!poses.length) {
      grid.innerHTML = `
        <div class="col-12 text-muted">
          Нет поз
        </div>
      `;
    } else {
      poses.forEach(pose => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-lg-4';

        const isActive = state.selectedPose === pose.id;

        // preview prompt (ПОКА только базовый)
        const previewPrompt = pose.prompt?.base || '';

        col.innerHTML = `
          <div class="card h-100 ${isActive ? 'border-dark' : ''}" style="cursor:pointer">
            <div class="card-body">
              <h6 class="card-title mb-1">${pose.name}</h6>

              <div class="small text-muted mb-2">
                ${pose.type} · ${pose.composition}
              </div>

              <div class="small text-secondary fst-italic">
                ${previewPrompt}
              </div>
            </div>
          </div>
        `;

        col.onclick = () => {
          state.selectedPose = pose.id;

          // синхронизация select позы
          const select = document.getElementById('poseSelect');
          if (select) select.value = pose.id;

          state.onChange();
        };

        grid.appendChild(col);
      });
    }

    renderStats();
  }

  function renderStats() {
    const parts = [];

    if (state.selectedPose) {
      const pose = data.poses.find(p => p.id === state.selectedPose);
      if (pose) parts.push(`Поза: <b>${pose.name}</b>`);
    }

    if (state.camera) parts.push(`Камера: ${state.camera}`);
    if (state.location) parts.push(`Локация: ${state.location}`);
    if (state.wardrobe) parts.push(`Одежда: ${state.wardrobe}`);
    if (state.color) parts.push(`Цвет: ${state.color}`);
    if (state.emotion) parts.push(`Эмоция: ${state.emotion}`);
    if (state.useIdentity) parts.push('Своё фото');
    if (state.useOwnClothes) parts.push('Своя одежда');

    stats.innerHTML = parts.length
      ? parts.join(' · ')
      : 'Выбери параметры';
  }

  state.onChange = render;
  render();
}
