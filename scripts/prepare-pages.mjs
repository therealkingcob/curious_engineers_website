import { copyFile, mkdir, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');

// GitHub Pages reliably serves directory indexes. Vinext emits route.html when
// trailingSlash is false, so mirror each route to route/index.html as well.
for (const entry of await readdir(outputDirectory, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.html')) continue;
  if (entry.name === 'index.html' || entry.name === '404.html') continue;

  const route = entry.name.slice(0, -'.html'.length);
  const routeDirectory = join(outputDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(
    join(outputDirectory, entry.name),
    join(routeDirectory, 'index.html'),
  );
}

await writeFile(join(outputDirectory, '.nojekyll'), '');
