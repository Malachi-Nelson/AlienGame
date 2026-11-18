// Shared by the headless checks: a file server for dist/, a stand-in for the public relays, and a browser.
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { readFileSync, mkdirSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..');
export const out = join(root, 'tools/out');
mkdirSync(out, { recursive: true });

export async function serveDist() {
  const dist = join(root, 'dist'), types = { '.html': 'text/html', '.js': 'text/javascript' };
  const srv = createServer((req, res) => { let p = req.url.split('?')[0]; if (p.endsWith('/')) p += 'index.html'; let data; try { data = readFileSync(join(dist, p)); } catch { res.writeHead(404); return res.end(); } res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' }); res.end(data); });
  await new Promise(r => srv.listen(0, r));
  return { url: `http://localhost:${srv.address().port}/`, close: () => srv.close() };
}

// A local MQTT broker over web sockets, standing in for the public relays (which the build sandbox cannot reach).
export async function standInRelay() {
  const { Aedes } = await import('aedes'); const { WebSocketServer, createWebSocketStream } = await import('ws');
  const broker = await Aedes.createBroker(), http = createServer(), wss = new WebSocketServer({ server: http });
  wss.on('connection', ws => broker.handle(createWebSocketStream(ws)));
  await new Promise(r => http.listen(0, r));
  let count = 0, bytes = 0; broker.on('publish', p => { count++; bytes += p.payload.length; });
  return { url: `ws://localhost:${http.address().port}`, stats: () => ({ count, bytes }), close: () => { wss.close(); http.close(); broker.close(); } };
}

export async function launch() {
  return chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--mute-audio'] });
}

// Opens the game in a fresh browser profile. errors collects anything the page logs as an error.
export async function openGame(browser, url, { relay, name, size = [1280, 720], query = 'nolock&q=low' } = {}) {
  const ctx = await browser.newContext({ viewport: { width: size[0], height: size[1] } });
  const page = await ctx.newPage(), errors = [];
  page.on('console', m => { if (m.type() === 'error' && !/favicon|GPU stall|404/.test(m.text())) errors.push(m.text().slice(0, 300)); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message + '\n' + (e.stack || '').split('\n').slice(0, 4).join('\n')));
  await page.addInitScript(([r, n]) => { window.MQ_SERVERS = r ? [r] : ['ws://localhost:9']; try { localStorage.setItem('los-settings', JSON.stringify({ name: n || 'Tester', sens: 1, vol: 0.5, q: 'low' })); } catch (e) {} }, [relay || '', name || '']);
  await page.goto(url + 'index.html?' + (/(^|&)varied(&|$)/.test(query) ? query.replace(/(^|&)varied(?=&|$)/, '') : query + '&plain'));      // plain: nothing sealed, all power on, no incidents, so a check can rely on the map
  await page.waitForFunction('window.__los && document.getElementById("m-solo")', null, { timeout: 60000 });
  return { page, ctx, errors, shot: n => page.screenshot({ path: join(out, n + '.png') }) };
}
