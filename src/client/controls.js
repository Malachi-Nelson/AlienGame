// Every control in the game is an action. Keys and mouse buttons are bound to actions (two per action, rebindable and
// saved), and the touch layout feeds the same actions, so the rest of the game never looks at a key code.
export const ACTIONS = [
  ['fwd', 'Move forward', ['KeyW', 'ArrowUp']],
  ['back', 'Move back', ['KeyS', 'ArrowDown']],
  ['left', 'Move left', ['KeyA', 'ArrowLeft']],
  ['right', 'Move right', ['KeyD', 'ArrowRight']],
  ['run', 'Run (loud)', ['ShiftLeft', 'ShiftRight']],
  ['crouch', 'Crouch (quiet)', ['KeyC', 'ControlLeft']],
  ['use', 'Use · hide · pick up (hold to revive)', ['KeyE', '']],
  ['lamp', 'Lamp', ['KeyF', '']],
  ['scan', 'Tag scanner (hold)', ['KeyQ', 'Mouse2']],
  ['throw', 'Throw a sounder', ['KeyG', 'Mouse0']],
  ['map', 'Schematic (hold)', ['Tab', 'KeyM']],
];
export const defaultBinds = () => Object.fromEntries(ACTIONS.map(([a, , b]) => [a, b.slice()]));
const RESERVED = new Set(['Escape', 'Backquote']);   // Esc frees the mouse; nothing may take it

const NAMES = { ShiftLeft: 'L Shift', ShiftRight: 'R Shift', ControlLeft: 'L Ctrl', ControlRight: 'R Ctrl', AltLeft: 'L Alt', AltRight: 'R Alt', Space: 'Space', Tab: 'Tab', Enter: 'Enter', CapsLock: 'Caps',
  ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Mouse0: 'Left click', Mouse1: 'Middle click', Mouse2: 'Right click', Mouse3: 'Mouse 4', Mouse4: 'Mouse 5', Backspace: 'Backspace' };
export function keyName(code) {
  if (!code) return '—';
  if (NAMES[code]) return NAMES[code];
  if (code.startsWith('Key')) return code.slice(3);
  if (code.startsWith('Digit')) return code.slice(5);
  if (code.startsWith('Numpad')) return 'Num ' + code.slice(6);
  return code.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export class Input {
  constructor(settings) {
    this.settings = settings;
    const d = defaultBinds(); settings.binds = Object.assign(d, settings.binds || {});
    for (const a in settings.binds) if (!d[a]) delete settings.binds[a];
    this.down = new Set();        // raw key codes and mouse buttons held
    this.touch = new Set();       // actions held on the touch layout
    this.hits = new Set();        // actions started this frame
    this.listen = null;           // [action, slot] waiting for a key to bind
    this.onBound = null;
    this.move = { x: 0, y: 0 };   // touch stick, -1..1
    this.look = { x: 0, y: 0 };   // touch look, pixels since last frame
  }
  get binds() { return this.settings.binds; }
  actionsFor(code) { const out = []; for (const a in this.binds) if (this.binds[a].includes(code)) out.push(a); return out; }
  isBound(code) { return this.actionsFor(code).length > 0; }
  // a key or button went down; returns true if the game used it
  codeDown(code) {
    if (this.listen) return this.bindNow(code);
    if (this.down.has(code)) return this.isBound(code);
    this.down.add(code);
    const acts = this.actionsFor(code); for (const a of acts) this.hits.add(a);
    return acts.length > 0;
  }
  codeUp(code) { this.down.delete(code); }
  bindNow(code) {
    const [a, slot] = this.listen; this.listen = null;
    if (code === 'Escape') { if (this.onBound) this.onBound(); return true; }                     // cancel
    if (code === 'Backspace' || code === 'Delete') this.binds[a][slot] = '';                     // clear
    else if (!RESERVED.has(code)) {
      for (const b in this.binds) this.binds[b] = this.binds[b].map(c => (c === code ? '' : c));   // one key, one job
      this.binds[a][slot] = code;
    }
    if (this.onBound) this.onBound();
    return true;
  }
  held(a) { return this.touch.has(a) || this.binds[a].some(c => c && this.down.has(c)); }
  hit(a) { return this.hits.has(a); }
  endFrame() { this.hits.clear(); this.look.x = this.look.y = 0; }
  clear() { this.down.clear(); this.touch.clear(); this.hits.clear(); this.move.x = this.move.y = 0; }
  reset() { this.settings.binds = defaultBinds(); }
  label(a) { const b = this.binds[a]; return keyName(b[0] || b[1]); }
  // for the automated checks
  press(a) { this.hits.add(a); }
  hold(a, on) { if (on) { this.touch.add(a); this.hits.add(a); } else this.touch.delete(a); }
}
