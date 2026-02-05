// core/render.js

export function initRenderer(root, data, state) {
  const grid = root.querySelector('#poseGrid');
  const stats = root.querySelector('#stats');

  function render() {
    let poses = data.poses;

    // фильтр по типу позы
    if (state.poseType) {
      poses = poses.filter(p => p.type === state.poseType);
    }

    // очистка
    grid.innerHTML = '';

    if (!poses.length) {
      grid.innerHTML = `<div class="empty">Нет поз (пока)</div>`;
    } else {
      poses.forEach(pose => {
        const card = document.createElement('div');
        card.className = 'pose-card';

        card.innerHTML = `
          <div class="pose-name">${pose.name}</div>
          <div class="pose-meta">
            ${pose.type} · ${pose.composition}
          </div>
        `;

        card.onclick = () => {
          state.selectedPose = pose.id;
          renderStats(pose);
        };

        grid.appendChild(card);
      });
    }

    renderStats();
  }

  function renderStats(selectedPose = null) {
    const parts = [];

    if (selectedPose) {
      parts.push(`Поза: <b>${selectedPose.name}</b>`);
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

  // подписка
  state.onChange = render;

  // первый рендер
  render();
}
