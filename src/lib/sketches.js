const modules = import.meta.glob('../sketches/*.js');
const metadata = import.meta.glob('../sketches/*.meta.js', { eager: true, import: 'default' });

const descriptions = {
  '20180510': 'A loose polygon drawn from a noisy ring of points.',
  '20190516': 'A wandering line that keeps finding its way from the center.',
  '20190529': 'Build a shape one click at a time.',
  '20190531': 'A small study in shifting circles and accumulated motion.',
  '20210104': 'A quiet network of colored lines between random points.',
  '20210426': 'An evolving contour carried slowly across the canvas.',
  '20241201': 'A blocky color study in warm and cool gradients.',
  medienfarben: 'An early color experiment with overlapping bubbles.',
};

function titleFromSlug(slug) {
  if (slug === 'medienfarben') return 'Medienfarben';
  return slug.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1.$2.$3');
}

export function getSketches() {
  return Object.keys(modules).map((path) => {
    const slug = path.split('/').pop().replace('.js', '');
    const custom = metadata[`${path.replace('.js', '')}.meta.js`] || {};
    return {
      slug,
      title: custom.title || titleFromSlug(slug),
      date: custom.date || (/^\d{8}$/.test(slug) ? slug : ''),
      description: custom.description || descriptions[slug] || '',
      cover: custom.cover || null,
    };
  }).sort((a, b) => b.date.localeCompare(a.date));
}

export function loadSketch(slug) {
  return modules[`../sketches/${slug}.js`]?.().then((module) => module.default);
}
