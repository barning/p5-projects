import './styles.css';
import { renderGallery } from './lib/gallery.js';
import { renderSketch } from './lib/sketch-view.js';

const app = document.querySelector('#app');
const sketchSlug = window.location.pathname.match(/\/sketch\/([^/]+)\/?$/)?.[1];

if (sketchSlug) renderSketch(app, sketchSlug);
else renderGallery(app);
