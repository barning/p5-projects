import { getSketches } from './sketches.js';

const base = import.meta.env.BASE_URL;

function coverMarkup(sketch) {
  if (sketch.cover) return `<img src="${sketch.cover}" alt="" loading="lazy" />`;
  return `<div class="cover cover--${sketch.slug}" aria-hidden="true"><span>${sketch.title}</span></div>`;
}

export function renderGallery(app) {
  const sketches = getSketches();
  app.innerHTML = `
    <header class="site-header page-width">
      <div><a class="wordmark" href="${base}">Sketchbook</a><p class="subtitle">Creative coding experiments</p></div>
      <nav aria-label="External links"><a href="https://github.com/barning/p5-projects" rel="noreferrer">GitHub</a><a href="https://niklasbarning.de" rel="noreferrer">niklasbarning.de</a></nav>
    </header>
    <main class="page-width">
      <div class="intro"><p>${sketches.length} experiments, collected from 2018 to today.</p></div>
      <section class="gallery" aria-label="Sketches">
        ${sketches.map((sketch) => `<a class="sketch-card" href="${base}sketch/${sketch.slug}/"><div class="sketch-cover">${coverMarkup(sketch)}</div><div class="sketch-card__meta"><h2>${sketch.title}</h2><p>${sketch.description}</p></div></a>`).join('')}
      </section>
    </main>
    <footer class="page-width site-footer"><span>Made with p5.js</span><span>More experiments soon.</span></footer>
  `;
}
