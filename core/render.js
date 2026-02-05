// core/render.js

import { buildFinalPrompt } from './promptEngine.js';

export function initRenderer(root, data, state) {
  const grid = root.querySelector('#poseGrid');
  const stats = root.querySelector('#stats');

  function render() {
    // ===== 1. ФИЛЬТРАЦИЯ (БЕЗ ВОЗМОЖНОСТИ ПУСТОТЫ) =====
    let poses = data.poses;

    if (state.poseType) {
      const filtered = poses.filter(p => p.type === state.poseType);
      poses = filtered.length ? filtered : poses;
    }

    // ===== 2. РЕНДЕР КАРТОЧЕК =====
    grid.innerHTML = '';

    poses.forEach(pose => {
      const col = document.createElement('div');
      col.className = 'col-12 col-sm-6 col-lg-4';

      const isActive = state.selectedPose === pose.id;

      col.innerHTML = `
        <div class="card h-100 ${isActive ? 'border-dark shadow-sm' : ''}" style="cursor:pointer">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title mb-1">${pose.name}</h6>

            <div class="small text-muted mb-2">
              ${pose.type} · ${pose.composition}
            </div>

            <div class="small fst-italic text-secondary mt-auto">
              ${pose.prompt?.base || ''}
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

    // ===== 3. СИНХРОНИЗАЦИЯ SELECT ПОЗЫ =====
    const poseSelect = document.getElementById('poseSelect');
    if (poseSelect) {
      poseSelect.value = state.selectedPose || '';
    }

    // ===== 4. СТАТУС + PROMPT =====
    renderStats();
  }

  function renderStats() {
    const info = [];

    if (state.selectedPose) {
      const pose = data.poses.find(p => p.id === state.selectedPose);
      if (pose) info.push(`Поза: ${pose.name}`);
    }

    if (state.camera) info.push(`Камера: ${state.camera}`);
    if (state.location) info.push(`Локация: ${state.location}`);
    if (state.wardrobe) info.push(`Одежда: ${state.wardrobe}`);
    if (state.color) info.push(`Цвет: ${state.color}`);
    if (state.emotion) info.push(`Эмоция: ${state.emotion}`);
    if (state.useIdentity) info.push(`Своё фото`);
    if (state.useOwnClothes) info.push(`Своя одежда`);

    const finalPrompt = buildFinalPrompt(state, data);

    stats.innerHTML = `
      <div class="mb-2 small">
        ${info.length ? info.join(' · ') : 'Выбери параметры'}
      </div>

      ${
        finalPrompt
          ? `<pre class="small bg-light p-2 border rounded">${finalPrompt}</pre>`
          : ''
      }
    `;
  }

  // ===== 5. ПОДПИСКА НА STATE =====
  state.onChange = render;

  // ===== 6. ПЕРВЫЙ РЕНДЕР =====
  render();
}
