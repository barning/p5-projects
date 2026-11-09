import { cp, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { defineConfig } from 'vite';

function sketchRoutes() {
  return {
    name: 'sketch-routes',
    async writeBundle() {
      const sketchesDir = join(process.cwd(), 'src', 'sketches');
      const files = (await readdir(sketchesDir)).filter((file) => file.endsWith('.js'));
      const indexPath = join(process.cwd(), 'dist', 'index.html');
      await Promise.all(files.map(async (file) => {
        const routeDir = join(process.cwd(), 'dist', 'sketch', file.replace(/\.js$/, ''));
        await mkdir(routeDir, { recursive: true });
        await cp(indexPath, join(routeDir, 'index.html'));
      }));
    },
  };
}

export default defineConfig({
  base: '/p5-projects/',
  plugins: [sketchRoutes()],
  server: { port: 5173, open: true },
  build: { target: 'es2022', sourcemap: true },
});
