export function initRenderer(root, data, state) {
    const grid = root.querySelector('#poseGrid');
    const stats = root.querySelector('#stats');

    // подсветка активного типа
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === state.poseType);
    });


    function render() {
        let poses = data.poses;

        if (state.poseType) {
            poses = poses.filter(p => p.type === state.poseType);
        }

        grid.innerHTML = '';

        if (!poses.length) {
            grid.innerHTML = '<div class="empty">Нет поз</div>';
        } else {
            poses.forEach(pose => {
                const card = document.createElement('div');
                card.className = 'pose-card';
                if (state.selectedPose === pose.id) {
                    card.classList.add('active');
                }

                card.className = 'col-12 col-sm-6 col-lg-4';

                card.innerHTML = `
  <div class="card h-100 ${state.selectedPose === pose.id ? 'border-dark' : ''}">
    <div class="card-body">
      <h6 class="card-title">${pose.name}</h6>
      <div class="text-muted small">${pose.type} · ${pose.composition}</div>
    </div>
  </div>
`;


                card.onclick = () => {
                    state.selectedPose = pose.id;
                    syncPoseSelect();
                    state.onChange();
                };

                grid.appendChild(card);
            });
        }

        renderStats();
    }

    function syncPoseSelect() {
        const select = document.getElementById('poseSelect');
        if (!select) return;
        select.value = state.selectedPose || '';
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

        stats.innerHTML = parts.length ? parts.join(' · ') : 'Выбери параметры';
    }

    state.onChange = render;
    render();
}
