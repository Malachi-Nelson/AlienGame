// A browser that cannot give the page WebGL: the game cannot run there, and the page has to say so rather than sit dead.
import { chromium } from 'playwright-core';
import { serveDist, out } from './lib.mjs';
import { join } from 'node:path';
const srv = await serveDist();
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: true, args: ['--no-sandbox', '--disable-gpu', '--disable-3d-apis'] });
const page = await browser.newPage({ viewport: { width: 1000, height: 640 } });
await page.goto(srv.url + 'index.html'); await page.waitForTimeout(2500);
const r = await page.evaluate(() => ({ started: !!window.__los, notice: document.getElementById('notice').hidden ? '' : document.getElementById('notice').textContent, soloOff: document.getElementById('m-solo').disabled }));
await page.screenshot({ path: join(out, 'n-nowebgl.png') });
let fail = 0; const ok = (c, m) => { console.log((c ? 'ok   ' : 'FAIL ') + m); if (!c) fail++; };
ok(!r.started, 'with WebGL switched off the game does not start');
ok(/could not start in this browser/.test(r.notice) && /WebGL 2/.test(r.notice), `and the page says why ("${r.notice.slice(0, 70)}…")`);
ok(r.soloOff, 'and the button that would do nothing is greyed out');
await browser.close(); srv.close(); process.exit(fail ? 1 : 0);
