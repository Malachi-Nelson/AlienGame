// Phone and tablet controls: a stick that appears under the left thumb, drag anywhere else to look, and buttons that can
// be moved, resized and faded. The layout is saved on the device. Everything feeds the same actions as the keyboard
// (controls.js), so the rest of the game does not know which one is in use.
const BUTTONS = [      // id, label, centre as a share of the screen's width and height, and how it works
  ['use', 'USE', 0.865, 0.6, 'hold'],          // hold: down while the finger is on it (doors and tags on the press, reviving while held)
  ['run', 'RUN', 0.755, 0.8, 'run'],           // run: on until the stick is let go
  ['crouch', 'CROUCH', 0.9, 0.86, 'tap'],
  ['throw', 'THROW', 0.745, 0.52, 'tap'],
  ['scan', 'SCAN', 0.83, 0.32, 'toggle'],      // toggle: the right thumb has to be free to turn while the scanner is up
  ['lamp', 'LAMP', 0.94, 0.34, 'tap'],
  ['map', 'MAP', 0.62, 0.09, 'hold'],
  ['pause', 'II', 0.38, 0.09, 'pause'],
];
const SMALL = { map: 0.7, pause: 0.7 };
export const defaultTouch = () => ({ size: 1, opacity: 0.55, look: 1, flip: false, layout: Object.fromEntries(BUTTONS.map(([id, , x, y]) => [id, [x, y, 1]])) });

export class Touch {
  // on.pause(): the pause button was pressed. on.edited(): the layout changed and should be saved. on.editDone(): the editor was closed.
  constructor(input, settings, on) {
    this.input = input; this.settings = settings; this.on = on;
    const d = defaultTouch(), saved = settings.touch || {};
    settings.touch = Object.assign({}, d, saved); settings.touch.layout = Object.assign({}, d.layout, saved.layout || {});
    this.root = document.getElementById('touch'); this.base = document.getElementById('t-base'); this.knob = document.getElementById('t-knob');
    this.bar = document.getElementById('t-bar'); this.zone = document.getElementById('t-zone');
    this.ptrs = new Map(); this.editing = false; this.sel = null; this.running = false; this.enabled = false; this.shown = false; this.stickR = 40;
    this.btns = {};
    for (const [id, label, , , kind] of BUTTONS) {
      const b = document.createElement('button'); b.type = 'button'; b.className = 't-btn'; b.dataset.id = id; b.textContent = label; b.tabIndex = -1;
      b.setAttribute('aria-label', id === 'pause' ? 'Pause' : label);
      this.root.appendChild(b); this.btns[id] = { el: b, kind };
    }
    this.root.addEventListener('pointerdown', e => this.down(e), { passive: false });
    // without this the browser follows a touch with a click on whatever is under the finger by then, such as a button on the pause card
    this.root.addEventListener('touchstart', e => { if (!this.inBar(e.target)) e.preventDefault(); }, { passive: false });
    window.addEventListener('pointermove', e => this.moveP(e), { passive: false });
    window.addEventListener('pointerup', e => this.up(e)); window.addEventListener('pointercancel', e => this.up(e));
    this.bar.addEventListener('click', e => { const k = e.target.dataset && e.target.dataset.k; if (k) this.editCmd(k); });
    window.addEventListener('resize', () => this.layout());
    this.layout();
  }
  inBar(el) { return !!(el && el.closest && el.closest('#t-bar')); }
  setEnabled(on) { this.enabled = on; document.body.classList.toggle('touch', on); }
  show(on) { on = !!on; if (on === this.shown) return; this.shown = on; this.root.hidden = !on; if (!on) this.release(); }
  // let go of everything: used when the controls go away (a menu came up) so nothing stays held
  release() {
    this.ptrs.clear(); this.input.touch.clear(); this.input.move.x = this.input.move.y = 0; this.base.hidden = true; this.running = false;
    for (const b of Object.values(this.btns)) b.el.classList.remove('on', 'lit');
    this.bar.classList.remove('ghost');
  }
  layout() {
    const t = this.settings.touch, W = window.innerWidth, H = window.innerHeight, unit = Math.min(W, H) * 0.155;
    for (const [id, b] of Object.entries(this.btns)) {
      const [x, y, s] = t.layout[id], d = Math.round(Math.max(36, unit * t.size * s * (SMALL[id] || 1)));
      Object.assign(b.el.style, { left: Math.round(x * W - d / 2) + 'px', top: Math.round(y * H - d / 2) + 'px', width: d + 'px', height: d + 'px', fontSize: Math.max(9, Math.round(d * 0.2)) + 'px', opacity: this.editing ? 0.95 : t.opacity });
      b.el.classList.toggle('sel', this.editing && this.sel === id);
    }
    this.stickR = unit * 0.75 * t.size;
    Object.assign(this.base.style, { width: this.stickR * 2 + 'px', height: this.stickR * 2 + 'px', opacity: Math.min(1, t.opacity + 0.1) });
    this.knob.style.width = this.knob.style.height = this.stickR * 0.9 + 'px';
    this.zone.style.left = t.flip ? '58%' : '0';
    const lv = document.getElementById('t-lookv'); if (lv) lv.textContent = 'Look ' + t.look.toFixed(1) + 'x';
  }
  // the use button lights when there is something in reach to use
  setLive(live) { this.btns.use.el.classList.toggle('lit', !!live); }
  setToggle(id, on) { if (this.input.touch.has(id) === on) return; this.input.hold(id, on); this.btns[id].el.classList.toggle('lit', on); }

  btnOf(el) { while (el && el !== this.root) { if (el.dataset && el.dataset.id) return el.dataset.id; el = el.parentElement; } return null; }
  centre(id) { const r = this.btns[id].el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }
  down(e) {
    if (this.inBar(e.target)) return;                                   // the editor's own buttons work by click
    if (e.pointerType === 'mouse' && !this.editing) return;
    e.preventDefault();
    const id = this.btnOf(e.target);
    if (this.editing) {
      if (!id) { this.sel = null; this.layout(); return; }
      const [cx, cy] = this.centre(id); this.sel = id; this.ptrs.set(e.pointerId, { kind: 'drag', id, dx: e.clientX - cx, dy: e.clientY - cy }); this.bar.classList.add('ghost'); this.layout();
      return;
    }
    if (id) {
      const b = this.btns[id]; b.el.classList.add('on'); this.ptrs.set(e.pointerId, { kind: 'btn', id, x: e.clientX, y: e.clientY, far: 0 });
      if (b.kind === 'pause') this.on.pause();
      else if (b.kind === 'run') { this.running = !this.running; b.el.classList.toggle('lit', this.running); }
      else if (b.kind === 'toggle') this.setToggle(id, !this.input.touch.has(id));
      else if (b.kind === 'hold') this.input.hold(id, true);
      else this.input.press(id);
      return;
    }
    const W = window.innerWidth, t = this.settings.touch, stickSide = t.flip ? e.clientX > W * 0.58 : e.clientX < W * 0.42;
    if (stickSide && ![...this.ptrs.values()].some(p => p.kind === 'stick')) {
      this.ptrs.set(e.pointerId, { kind: 'stick', x0: e.clientX, y0: e.clientY });
      this.base.hidden = false; this.base.style.left = (e.clientX - this.stickR) + 'px'; this.base.style.top = (e.clientY - this.stickR) + 'px'; this.knob.style.transform = 'translate(-50%, -50%)';
    } else this.ptrs.set(e.pointerId, { kind: 'look', x: e.clientX, y: e.clientY });
  }
  moveP(e) {
    const p = this.ptrs.get(e.pointerId); if (!p) return; e.preventDefault();
    if (p.kind === 'stick') {
      let dx = e.clientX - p.x0, dy = e.clientY - p.y0; const d = Math.hypot(dx, dy), r = this.stickR;
      if (d > r) { dx *= r / d; dy *= r / d; }
      const dead = 0.12, m = Math.min(1, d / r), g = m < dead ? 0 : (m - dead) / (1 - dead) / (m || 1);     // a small dead zone, so a resting thumb does not creep
      this.input.move.x = dx / r * g; this.input.move.y = -dy / r * g;
      this.knob.style.transform = `translate(calc(-50% + ${dx.toFixed(1)}px), calc(-50% + ${dy.toFixed(1)}px))`;
    } else if (p.kind === 'look' || p.kind === 'btn') {
      // a thumb that came down on a button can still turn the view: past a few pixels the drag counts as looking
      const k = 2.1 * this.settings.touch.look, dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
      if (p.kind === 'btn') { p.far += Math.hypot(dx, dy); if (p.far < 10 || this.btns[p.id].kind === 'pause') return; }
      this.input.look.x += dx * k; this.input.look.y += dy * k;
    } else if (p.kind === 'drag') {
      const W = window.innerWidth, H = window.innerHeight, l = this.settings.touch.layout[p.id];
      l[0] = Math.min(0.97, Math.max(0.03, (e.clientX - p.dx) / W)); l[1] = Math.min(0.95, Math.max(0.05, (e.clientY - p.dy) / H)); this.layout();
    }
  }
  up(e) {
    const p = this.ptrs.get(e.pointerId); if (!p) return; this.ptrs.delete(e.pointerId);
    if (p.kind === 'stick') { this.input.move.x = this.input.move.y = 0; this.base.hidden = true; if (this.running) { this.running = false; this.btns.run.el.classList.remove('lit'); } }
    else if (p.kind === 'btn') { const b = this.btns[p.id]; b.el.classList.remove('on'); if (b.kind === 'hold') this.input.hold(p.id, false); }
    else if (p.kind === 'drag') { this.bar.classList.remove('ghost'); this.on.edited(); }
  }

  // ---- moving the buttons about
  edit(on) {
    this.release(); this.editing = on; this.sel = null;
    this.bar.hidden = !on; this.zone.hidden = !on; this.root.classList.toggle('editing', on);
    if (on) { this.shown = true; this.root.hidden = false; }
    this.layout();
  }
  editCmd(k) {
    const t = this.settings.touch;
    if (k === 'done') { this.edit(false); this.on.edited(); if (this.on.editDone) this.on.editDone(); return; }
    if (k === 's+' || k === 's-') { const f = k === 's+' ? 1.12 : 1 / 1.12; if (this.sel) t.layout[this.sel][2] = Math.min(2, Math.max(0.6, t.layout[this.sel][2] * f)); else t.size = Math.min(1.8, Math.max(0.6, t.size * f)); }
    if (k === 'o+') t.opacity = Math.min(1, t.opacity + 0.1);
    if (k === 'o-') t.opacity = Math.max(0.15, t.opacity - 0.1);
    if (k === 'l+') t.look = Math.min(3, t.look * 1.15);
    if (k === 'l-') t.look = Math.max(0.3, t.look / 1.15);
    if (k === 'flip') { t.flip = !t.flip; for (const id in t.layout) if (!SMALL[id]) t.layout[id][0] = 1 - t.layout[id][0]; }
    if (k === 'reset') { Object.assign(t, defaultTouch()); this.sel = null; }
    this.layout(); this.on.edited();
  }
}
