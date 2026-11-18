// Builds the page GitHub Pages serves: dist/index.html, dist/game.js and dist/mqtt.min.js.
//   node tools/build.mjs            production build
//   node tools/build.mjs --dev      also builds dist/view.html, a fly-through used for looking at the level
//   node tools/build.mjs --serve    build, then serve dist/ on http://localhost:8123 and rebuild on change
import { build, context } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createServer } from 'node:http';
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const args = process.argv.slice(2), dev = args.includes('--dev') || args.includes('--serve'), serve = args.includes('--serve');
const BUILD = process.env.BUILD || new Date().toISOString().slice(0, 16).replace('T', ' ');
const PROTO = process.env.PROTO || 'v3';
mkdirSync(dist, { recursive: true });

const common = { bundle: true, format: 'iife', target: 'es2020', minify: !serve, sourcemap: serve ? 'inline' : false, legalComments: 'none', define: { __BUILD__: JSON.stringify(BUILD), __PROTO__: JSON.stringify(PROTO) }, logLevel: 'warning' };

function page() {
  const js = readFileSync(join(dist, 'game.js'));
  const v = createHash('sha1').update(js).digest('hex').slice(0, 10);
  let html = readFileSync(join(root, 'src/page.html'), 'utf8');
  html = html.replace('/*CSS*/', readFileSync(join(root, 'src/style.css'), 'utf8')).replaceAll('__V__', v).replaceAll('__BUILD__', BUILD);
  writeFileSync(join(dist, 'index.html'), html);
  copyFileSync(join(root, 'vendor/mqtt.min.js'), join(dist, 'mqtt.min.js'));
  writeFileSync(join(dist, '.nojekyll'), '');
  if (dev && existsSync(join(root, 'tools/view.html'))) copyFileSync(join(root, 'tools/view.html'), join(dist, 'view.html'));
  return v;
}

await build({ ...common, entryPoints: [join(root, 'src/main.js')], outfile: join(dist, 'game.js') });
if (dev && existsSync(join(root, 'tools/view.js'))) await build({ ...common, entryPoints: [join(root, 'tools/view.js')], outfile: join(dist, 'view.js') });
const v = page();
const size = f => (readFileSync(join(dist, f)).length / 1024).toFixed(0) + ' kB';
console.log(`built ${BUILD} (${v}): index.html ${size('index.html')}, game.js ${size('game.js')}, mqtt.min.js ${size('mqtt.min.js')}`);

if (serve) {
  const ctx = await context({ ...common, entryPoints: [join(root, 'src/main.js')], outfile: join(dist, 'game.js'), plugins: [{ name: 'page', setup(b) { b.onEnd(() => { try { page(); } catch (e) { console.error(e.message); } }); } }] });
  await ctx.watch();
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
  createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]); if (p.endsWith('/')) p += 'index.html';
    try { const data = readFileSync(join(dist, p)); res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream', 'cache-control': 'no-store' }); res.end(data); }
    catch { res.writeHead(404); res.end('not found'); }
  }).listen(8123, () => console.log('http://localhost:8123'));
}
