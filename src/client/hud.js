// Everything drawn over the 3D view: the menus, the lobby, and the read-outs inside the suit.
import { T, W, H, C } from '../level.js';
import { CFG } from '../config.js';
import { ST, LIFT } from '../sim/defs.js';
import { SLOT_COLORS } from './avatars.js';

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export class Hud {
  constructor(L, on) {
    this.L = L; this.on = on; this.screen = 'title'; this.cache = {}; this.roomName = ''; this.roomT = 0; this.bannerT = 0; this.logT = 0; this.noticeT = 0;
    const click = (id, fn) => $(id).addEventListener('click', e => { e.preventDefault(); fn(); });
    click('m-solo', () => on.solo()); click('m-host', () => on.host()); click('m-join', () => on.join());
    click('l-start', () => on.start()); click('l-ready', () => on.ready()); click('l-leave', () => on.leave());
    click('p-resume', () => on.resume()); click('p-leave', () => on.leave());
    click('e-again', () => on.again()); click('e-leave', () => on.leave());
    document.querySelector('[data-screen=click]').addEventListener('click', () => on.resume());
    const copy = (btn, input) => click(btn, () => { const b = $(btn), done = () => { b.textContent = 'Copied'; setTimeout(() => (b.textContent = 'Copy link'), 1500); }; if (navigator.clipboard) navigator.clipboard.writeText($(input).value).then(done, () => $(input).select()); else $(input).select(); });
    copy('m-copy', 'm-link'); copy('l-copy', 'l-link');
    click('m-priv', () => on.privateRoom());
    $('m-name').addEventListener('input', () => on.name($('m-name').value));
    for (const p of ['s', 'p']) {
      $(p + '-sens').addEventListener('input', e => on.setting('sens', +e.target.value));
      $(p + '-vol').addEventListener('input', e => on.setting('vol', +e.target.value));
      $(p + '-bri').addEventListener('input', e => on.setting('bri', +e.target.value));
      $(p + '-q').addEventListener('change', e => on.setting('q', e.target.value));
    }
    const tags = $('h-tags'); for (let i = 0; i < CFG.TAGS; i++) tags.appendChild(document.createElement('i'));
    this.mapCtx = $('h-map').getContext('2d'); this.mapBase = null;
  }
  set(id, key, val, fn) { const k = id + key; if (this.cache[k] === val) return; this.cache[k] = val; fn($(id), val); }
  text(id, val) { this.set(id, 't', val, (e, v) => (e.textContent = v)); }
  cls(id, name, on) { this.set(id, 'c' + name, !!on, (e, v) => e.classList.toggle(name, v)); }
  show(id, on) { this.set(id, 'h', !!on, (e, v) => (e.hidden = !v)); }
  width(id, frac) { this.set(id, 'w', Math.round(frac * 100), (e, v) => (e.style.width = v + '%')); }

  // which card is up: 'title', 'lobby', 'pause', 'end', 'click', or null for none
  setScreen(name) {
    this.screen = name;
    for (const c of document.querySelectorAll('#overlay .card')) c.hidden = c.dataset.screen !== name;
    $('overlay').hidden = !name; $('overlay').classList.toggle('clear', name === 'click');
  }
  setSettings(s) { for (const p of ['s', 'p']) { $(p + '-sens').value = s.sens; $(p + '-vol').value = s.vol; $(p + '-bri').value = s.bri; $(p + '-q').value = s.q; } if (document.activeElement !== $('m-name')) $('m-name').value = s.name || ''; }
  setLink(url, priv) { $('m-link').value = url; $('l-link').value = url; $('m-priv').textContent = priv ? 'Back to the public room' : 'Make a private room'; }
  setBuild(b) { $('m-build').textContent = b; }
  setNet(text, level, canHost, joinLabel) {
    this.text('m-status', text); this.cls('m-status', 'on', level === 2); this.cls('m-status', 'part', level === 1);
    this.set('m-host', 'd', !canHost, (e, v) => (e.disabled = v)); this.set('m-join', 'd', !joinLabel, (e, v) => (e.disabled = v));
    this.text('m-join', joinLabel || 'Join a crew'); this.text('m-host', 'Open a crew');
  }
  setLobby(players, myId, isHost, ready) {
    const html = players.map(p => `<li><i style="background:${SLOT_COLORS[p.slot % SLOT_COLORS.length]}"></i><span>${esc(p.name)}${p.id === myId ? ' (you)' : ''}</span><em class="${p.host || p.ready ? 'ok' : ''}">${p.host ? 'Leader' : p.ready ? 'Ready' : 'Not ready'}</em></li>`).join('');
    this.set('l-roster', 'html', html, (e, v) => (e.innerHTML = v));
    this.show('l-start', isHost); this.show('l-ready', !isHost); this.text('l-ready', ready ? 'Not ready' : 'Ready');
    const waiting = players.filter(p => !p.host && !p.ready).length;
    this.text('l-text', isHost ? (players.length === 1 ? 'Nobody else has joined yet. You can start alone, or wait.' : waiting ? `Waiting on ${waiting} of the crew. You can start anyway.` : 'Everyone is ready.') : 'Waiting for the crew leader to start.');
  }
  setEnd(o) { this.text('e-eyebrow', o.eyebrow); this.text('e-title', o.title); this.text('e-text', o.text); $('e-stats').innerHTML = o.stats.map(([v, k]) => `<div><b>${esc(v)}</b><span>${esc(k)}</span></div>`).join(''); this.text('e-again', o.again); this.show('e-again', !!o.again); }
  setPause(solo) { this.text('p-text', solo ? 'The outpost waits while this is open.' : 'The match carries on without you while this is open.'); }

  notice(text) { const n = $('notice'); n.textContent = text; n.hidden = false; this.noticeT = 5; }
  banner(text, secs = 4, kind = '') { const b = $('h-banner'); b.textContent = text; b.className = 'on ' + kind; this.bannerT = secs; }
  log(name, role, text) { const l = $('h-log'); l.querySelector('b').textContent = `${name} · ${role}`; l.querySelector('span').textContent = '"' + text + '"'; l.classList.add('on'); this.logT = 8; }
  feed(text) { const f = $('h-feed'), d = document.createElement('div'); d.textContent = text; f.appendChild(d); while (f.children.length > 5) f.removeChild(f.firstChild); setTimeout(() => d.remove(), 6200); }

  // v: everything the read-outs need this frame
  update(dt, v) {
    if (this.noticeT > 0) { this.noticeT -= dt; if (this.noticeT <= 0) $('notice').hidden = true; }
    this.show('hud', v.show); if (!v.show) return;
    if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) $('h-banner').className = ''; }
    if (this.logT > 0) { this.logT -= dt; if (this.logT <= 0) $('h-log').classList.remove('on'); }
    const tags = $('h-tags').children; for (let i = 0; i < tags.length; i++) { const on = i < v.tags; if (tags[i]._on !== on) { tags[i]._on = on; tags[i].classList.toggle('on', on); } }
    this.text('h-obj', v.objective);
    const bars = $('h-signal').querySelectorAll('i'); for (let i = 0; i < 5; i++) { const on = i < v.bars; if (bars[i]._on !== on) { bars[i]._on = on; bars[i].classList.toggle('on', on); } }
    this.cls('h-signal', 'low', v.bars <= 2); this.cls('h-signal', 'none', v.bars === 0);
    this.set('h-roster', 'html', v.roster.map(p => `<div class="${['', 'down', 'dead', 'out'][p.status] || ''}"><b style="color:${SLOT_COLORS[p.slot % SLOT_COLORS.length]}">■</b> ${esc(p.name)}${p.status === ST.DOWN ? ' · down' : p.status === ST.DEAD ? ' · lost' : p.status === ST.OUT ? ' · out' : ''}</div>`).join(''), (e, x) => (e.innerHTML = x));
    if (v.room && v.room !== this.roomName) { this.roomName = v.room; this.roomT = 3.5; this.text('h-room', v.room); }
    if (this.roomT > 0) this.roomT -= dt; this.cls('h-room', 'on', this.roomT > 0);
    this.cls('h-prompt', 'on', !!v.prompt); this.cls('h-prompt', 'dead', !!(v.prompt && v.prompt.dead));
    if (v.prompt) this.set('h-prompt', 'html', v.prompt.text + '|' + v.prompt.dead, e => (e.innerHTML = (v.prompt.dead ? '' : '<kbd>E</kbd>') + esc(v.prompt.text)));
    this.cls('h-hold', 'on', v.hold > 0); $('h-hold').firstElementChild.style.width = Math.round(v.hold * 100) + '%';
    this.show('h-cross', !v.map && !v.hidden);
    $('h-seen').querySelector('i').style.width = Math.round(Math.min(1, v.seen) * 100) + '%'; this.cls('h-seen', 'hot', v.seen >= 1);
    $('h-stam').firstElementChild.style.width = Math.round(v.stamina * 100) + '%'; this.cls('h-stam', 'spent', v.spent);
    this.text('h-lamp', v.lamp ? 'Lamp ON' : 'Lamp off'); this.cls('h-lamp', 'on', v.lamp);
    this.text('h-stance', v.hidden ? 'Hidden' : v.crouch ? 'Crouched' : 'Standing'); this.text('h-snd', 'Sounders ' + v.sounders);
    this.show('h-scan', v.scan !== null); if (v.scan !== null) { $('h-arrow').style.transform = `rotate(${v.scan.angle}rad)`; this.text('h-dist', v.scan.label); }
    this.show('h-down', !!v.down); if (v.down) { $('h-down').querySelector('b').textContent = v.down.title; $('h-down').querySelector('span').textContent = v.down.text; $('h-down').querySelector('i').style.width = Math.round(v.down.frac * 100) + '%'; $('h-down').querySelector('em').style.visibility = v.down.frac >= 0 ? 'visible' : 'hidden'; }
    // markers for crew who are down, pinned to the edge of the screen when they are off it
    const marks = $('h-marks'); while (marks.children.length < v.marks.length) marks.appendChild(document.createElement('span')); while (marks.children.length > v.marks.length) marks.removeChild(marks.lastChild);
    v.marks.forEach((m, i) => { const e = marks.children[i]; e.textContent = m.text; e.style.left = m.x + 'px'; e.style.top = m.y + 'px'; });
    this.show('h-mapwrap', v.map); if (v.map) this.drawMap(v);
  }

  drawMap(v) {
    const L = this.L, ctx = this.mapCtx, cv = ctx.canvas, s = Math.min(cv.width / W, cv.height / H);
    if (!this.mapBase) {
      const b = this.mapBase = document.createElement('canvas'); b.width = cv.width; b.height = cv.height; const x = b.getContext('2d');
      x.fillStyle = '#05090b'; x.fillRect(0, 0, b.width, b.height);
      for (let i = 0; i < W * H; i++) {
        const c = L.cells[i]; if (c === C.SOLID || c === C.LOCKER) continue; const cx = i % W, cz = (i / W) | 0;
        x.fillStyle = c === C.PIT ? '#02161a' : c === C.DUCT ? '#3b3320' : c === C.LIFT ? '#5a4a12' : L.ice[i] ? '#1f3a48' : c === C.TALL ? '#16242a' : c === C.LOW ? '#1c2e35' : '#243b43';
        x.fillRect(cx * s, cz * s, s + 0.5, s + 0.5);
      }
      x.fillStyle = '#7fe3d4'; for (const d of L.doors) for (const i of d.cells) x.fillRect((i % W) * s + s * 0.2, ((i / W) | 0) * s + s * 0.2, s * 0.6, s * 0.6);
      x.fillStyle = '#4f7f86'; for (const k of L.lockers) x.fillRect(k.cx * s + s * 0.25, k.cz * s + s * 0.25, s * 0.5, s * 0.5);
      x.font = '600 11px "Segoe UI", Arial, sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; const done = new Set();
      for (const r of L.rooms) { if (r.kind !== 'room' || done.has(r.name) || r.x1 - r.x0 < 2) continue; done.add(r.name); const label = r.name.startsWith('Cabin ') ? r.name.slice(6) : r.name.toUpperCase(), px = (r.x0 + r.x1 + 1) / 2 * s, py = (r.z0 + r.z1 + 1) / 2 * s; x.fillStyle = 'rgba(0,0,0,0.55)'; const w = x.measureText(label).width + 6; x.fillRect(px - w / 2, py - 7, w, 14); x.fillStyle = '#cfe0e2'; x.fillText(label, px, py); }
    }
    ctx.drawImage(this.mapBase, 0, 0);
    for (const p of v.mapPlayers) { ctx.fillStyle = SLOT_COLORS[p.slot % SLOT_COLORS.length]; ctx.globalAlpha = p.status === ST.ALIVE ? 1 : 0.5; ctx.beginPath(); ctx.arc(p.x / T * s, p.z / T * s, p.me ? 5 : 4, 0, 7); ctx.fill(); if (p.me) { ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(p.x / T * s, p.z / T * s); ctx.lineTo(p.x / T * s - Math.sin(p.yaw) * 11, p.z / T * s - Math.cos(p.yaw) * 11); ctx.stroke(); } }
    ctx.globalAlpha = 1;
  }
}
