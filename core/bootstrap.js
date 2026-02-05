// core/bootstrap.js

import { loadAllData } from './dataLoader.js';
import { initState } from './state.js';
import { buildLayout } from './layoutBuilder.js';
import { initRenderer } from './render.js';

export async function bootstrap(rootSelector) {
  const root = document.querySelector(rootSelector);
  if (!root) throw new Error('Root container not found');

  // 1. загрузка всех баз
  const data = await loadAllData();

  // 2. инициализация состояния
  const state = initState(data);

  // 3. построение интерфейса
  buildLayout(root, data, state);

  // 4. инициализация рендера
  initRenderer(root, data, state);
}
