// core/render.js

export function initRenderer(root, data, state) {
  const grid = root.querySelector('#poseGrid');
  const stats = root.querySelector('#stats');

  stats.textContent = 'Готово. Базы подключаются…';
  grid.innerHTML = '<div style="opacity:.6">Нет поз (пока)</div>';

  state.onChange = () => {
    // позже тут будет рендер
  };
}
