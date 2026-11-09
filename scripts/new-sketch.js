import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const slug = process.argv[2] || new Date().toISOString().slice(0, 10).replaceAll('-', '');
if (!/^\d{8}[a-z0-9-]*$/i.test(slug)) throw new Error('Use a date-based sketch name, for example 20261109 or 20261109-waves.');
const path = join(process.cwd(), 'src', 'sketches', `${slug}.js`);
await mkdir(join(process.cwd(), 'src', 'sketches'), { recursive: true });
await writeFile(path, `export default function sketch(p) {\n  p.setup = () => {\n    p.createCanvas(600, 600);\n  };\n\n  p.draw = () => {\n    p.background(240);\n    p.circle(p.mouseX, p.mouseY, 40);\n  };\n}\n`);
console.log(`Created ${path}`);
