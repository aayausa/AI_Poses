// core/render.js

import { buildFinalPrompt } from './promptEngine.js';
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
  const lines = [];

  // человекочитаемое состояние
  if (state.selectedPose) {
    const pose = data.poses.find(p => p.id === state.selectedPose);
    if (pose) lines.push(`Поза: ${pose.name}`);
  }

  if (state.camera) lines.push(`Камера: ${state.camera}`);
  if (state.location) lines.push(`Локация: ${state.location}`);
  if (state.wardrobe) lines.push(`Одежда: ${state.wardrobe}`);
  if (state.color) lines.push(`Цвет: ${state.color}`);
  if (state.emotion) lines.push(`Эмоция: ${state.emotion}`);

  if (state.useIdentity) lines.push(`Использовать своё фото`);
  if (state.useOwnClothes) lines.push(`Использовать свою одежду`);

  // ===== ФИНАЛЬНЫЙ PROMPT =====
  const finalPrompt = buildFinalPrompt(state, data);

  stats.innerHTML = `
    <div class="mb-2">
      ${lines.length ? lines.join(' · ') : 'Выбери параметры'}
    </div>

    ${
      finalPrompt
        ? `<pre class="small bg-light p-2 border rounded">${finalPrompt}</pre>`
        : ''
    }
  `;
}


  state.onChange = render;
  render();
}
