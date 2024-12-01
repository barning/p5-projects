import p5 from 'p5';

// Load all sketches
const context = require.context('./sketches', false, /\.js$/);
const sketches = context.keys().map(key => ({
  name: key.replace('./', '').replace('.js', ''),
  sketch: context(key).default
}));

// Create placeholder
const body = document.querySelector('body');
sketches.forEach((sketch, index) => {
  const placeholder = document.createElement('div');
  placeholder.id = `sketch-placeholder-${index}`;
  placeholder.className = 'sketch-placeholder';
  body.appendChild(placeholder);
});

// Initialize new sketch
function loadSketch(sketch, containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    new p5(sketch, container);
  }
}

// configure Intersection Observer
const observerOptions = {
  root: null,
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const index = entry.target.id.split('-').pop();
      const { sketch } = sketches[index];
      loadSketch(sketch, entry.target.id);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Watch placeholder
sketches.forEach((_, index) => {
  const element = document.getElementById(`sketch-placeholder-${index}`);
  if (element) {
    observer.observe(element);
  }
});