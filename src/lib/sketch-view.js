import { getSketches, loadSketch } from './sketches.js';
import { createSketchTools } from './sketch-tools.js';

const base = import.meta.env.BASE_URL;

export async function renderSketch(app, slug) {
  const sketch = getSketches().find((item) => item.slug === slug);
  if (!sketch) { app.innerHTML = `<main class="page-width not-found"><p>That sketch does not exist.</p><a href="${base}">Back to the gallery</a></main>`; return; }
  app.innerHTML = `<main class="sketch-page page-width"><header class="sketch-page__header"><a class="back-link" href="${base}">← Gallery</a><div><p class="eyebrow">${sketch.date || 'Experiment'}</p><h1>${sketch.title}</h1><p class="sketch-page__description">${sketch.description}</p></div><a class="source-link" href="https://github.com/barning/p5-projects/blob/main/src/sketches/${slug}.js" rel="noreferrer">Source ↗</a></header><section class="canvas-shell" aria-label="${sketch.title}"><div class="canvas-host"></div></section><div class="sketch-controls" role="toolbar" aria-label="Sketch controls"></div></main>`;
  const host = app.querySelector('.canvas-host');
  const controls = app.querySelector('.sketch-controls');
  const sketchFunction = await loadSketch(slug);
  if (!sketchFunction) return;
  const { default: P5 } = await import('p5');
  let instance;
  const start = () => { instance?.remove(); instance = new P5(sketchFunction, host); };
  start();
  createSketchTools(controls, { getInstance: () => instance, restart: start, regenerate: () => (instance?.redraw ? instance.redraw() : start()) });
  window.addEventListener('pagehide', () => instance?.remove(), { once: true });
}
