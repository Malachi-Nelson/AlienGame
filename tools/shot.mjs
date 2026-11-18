// Screenshots of the level viewer, for checking the look without a graphics card.
//   node tools/shot.mjs name "x=26&z=49&yaw=90" [name2 "params2" ...]
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..'), dist = join(root, 'dist'), out = join(root, 'tools/out');
mkdirSync(out, { recursive: true });
const types = { '.html': 'text/html', '.js': 'text/javascript' };
const srv = createServer((req, res) => { let p = req.url.split('?')[0]; if (p.endsWith('/')) p += 'index.html'; let data; try { data = readFileSync(join(dist, p)); } catch { res.writeHead(404); return res.end(); } res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); res.end(data); });
await new Promise(r => srv.listen(0, r)); const port = srv.address().port;
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: +(process.env.W || 1280), height: +(process.env.H || 720) } });
page.on('console', m => { if ((m.type() === 'error' || m.type() === 'warning') && !/GPU stall|favicon/.test(m.text())) console.log('[' + m.type() + ']', m.text().slice(0, 400)); });
page.on('pageerror', e => console.log('[pageerror]', e.message));
const a = process.argv.slice(2);
for (let i = 0; i + 1 < a.length; i += 2) {
  await page.goto(`http://localhost:${port}/view.html?${a[i + 1]}`);
  await page.waitForFunction('window.ready === true', null, { timeout: 120000 });
  await page.waitForTimeout(+(process.env.WAIT || 600));
  await page.screenshot({ path: join(out, a[i] + '.png') });
  console.log(a[i], JSON.stringify(await page.evaluate('window.info()')));
}
await browser.close(); srv.close();
