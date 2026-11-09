# Sketchbook

My very own p5.js sketchbook: a casual place to explore ideas, make generative art, and publish small experiments.

## Run locally

```bash
npm install
npm run dev
```

Other useful commands are `npm run build`, `npm run preview`, and `npm test`.

## Add a sketch

Create a date-based file in `src/sketches/`, or run:

```bash
npm run new:sketch -- 20261109-waves
```

Export one p5.js instance-mode function. Vite discovers the file automatically and creates a gallery card plus a shareable route at `/p5-projects/sketch/<filename>/`. The filename supplies the date; optional metadata can live in a matching `filename.meta.js` file and export a default object with `title`, `date`, `description`, or `cover`.

Sketches remain self-contained. Use the dedicated page's Restart, Regenerate, and Save PNG controls where applicable. The gallery uses lightweight static covers, so it does not run every animation at once.

## Compatibility and shaders

The project uses p5.js 2.3.4. Existing sketches retain their original instance-mode code; no algorithm rewrites were needed during the upgrade. New shader experiments can use p5's native `WEBGL` and `loadShader` APIs in their own sketch module, without adding a rendering framework.

## Deploy

Push to `main` to run `.github/workflows/pages.yml`. In the repository settings, set Pages → Build and deployment → Source to **GitHub Actions**. Vite is configured for the existing public path: https://barning.github.io/p5-projects/.

The build emits static `sketch/<name>/index.html` entry points so direct navigation and refresh work on GitHub Pages without server rewrites.
