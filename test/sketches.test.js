import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import test from 'node:test';
import assert from 'node:assert/strict';

const root = process.cwd();

test('all original sketches remain discoverable', async () => {
  const files = (await readdir(join(root, 'src', 'sketches'))).filter((file) => file.endsWith('.js')).sort();
  assert.deepEqual(files, [
    '20180510.js', '20190516.js', '20190529.js', '20190531.js',
    '20210104.js', '20210426.js', '20241201.js', 'medienfarben.js',
  ]);
});

test('all sketches keep an instance-mode default export', async () => {
  const files = (await readdir(join(root, 'src', 'sketches'))).filter((file) => file.endsWith('.js'));
  for (const file of files) {
    const source = await readFile(join(root, 'src', 'sketches', file), 'utf8');
    assert.match(source, /export default function sketch\s*\(/, file);
  }
});

test('GitHub Pages configuration uses the repository subpath', async () => {
  const config = await readFile(join(root, 'vite.config.js'), 'utf8');
  assert.match(config, /base:\s*['"]\/p5-projects\/['"]/);
});
