// Loss of Signal — the page. Ties the pieces together: input, the local player, the session, the 3D scene, sound and the HUD.
import * as THREE from 'three';
import { buildLevel, T, C, CREW_LOGS, ZONES } from './level.js';
import { sight } from './nav.js';
import { CFG } from './config.js';
import { ST, PH, LIFT, CS, F, TRAITS, PWR } from './sim/defs.js';
import { Scene3D } from './client/scene.js';
import { Gfx } from './client/fx.js';
import { CreatureModel } from './client/creatureModel.js';
import { Avatars } from './client/avatars.js';
import { Sound } from './client/audio.js';
import { LocalPlayer } from './client/player.js';
import { Hud } from './client/hud.js';
import { Session } from './net/session.js';
import { layoutMatch } from './sim/world.js';
import { Input, ACTIONS } from './client/controls.js';
import { Touch } from './client/touch.js';
import { Scares, Lights, Sparks } from './client/scares.js';
import { clamp, clamp01, wrapAngle, yawOf, lerpAngle } from './util.js';

const BUILD = typeof __BUILD__ === 'string' ? __BUILD__ : 'dev';
const query = new URLSearchParams(location.search);
const NOLOCK = query.has('nolock');                 // for automated checks: play without capturing the mouse

// ---------------------------------------------------------------------------------------------- settings
const settings = { name: '', sens: 1, vol: 0.8, bri: 1, q: 'high', auto: true, touchMode: 'auto', invertY: false, holdCrouch: false, scares: true };
let stored = null; try { stored = localStorage.getItem('los-settings'); } catch (e) { /* private browsing: defaults */ }
try { Object.assign(settings, JSON.parse(stored || '{}')); } catch (e) { /* unreadable: defaults */ }
const save = () => { try { localStorage.setItem('los-settings', JSON.stringify(settings)); } catch (e) { /* not kept, that is all */ } };
if (query.get('q')) { settings.q = query.get('q'); settings.auto = false; }
const input = new Input(settings);
const canvas = document.getElementById('view');
// Touch controls come on by themselves where a finger is the main pointer (phones, tablets), or where the mouse cannot be
// captured at all. The Controls screen can force them on or off.
const mq = q => !!(window.matchMedia && window.matchMedia(q).matches);
const coarse = () => (window.matchMedia ? mq('(pointer: coarse)') : 'ontouchstart' in window);
const noMouseLock = !canvas.requestPointerLock;
let autoTouch = false, lastPointer = '';
const touchOn = () => query.has('touch') || settings.touchMode === 'on' || (settings.touchMode === 'auto' && (coarse() || noMouseLock || autoTouch));
if (!stored && touchOn() && !query.get('q')) settings.q = 'medium';      // a phone starts one step down; it drops further by itself if that is still too much

// ---------------------------------------------------------------------------------------------- the pieces
const L = buildLevel();
const gfx = new Gfx(canvas); gfx.setQuality(settings.q);
const s3 = new Scene3D(L);
const creature = new CreatureModel(s3);
const avatars = new Avatars(s3);
const sound = new Sound(); sound.vol = settings.vol;
const player = new LocalPlayer(L);
const cam = new THREE.PerspectiveCamera(72, 1, 0.06, 95); cam.rotation.order = 'YXZ';
const lamp = new THREE.SpotLight(0xdfeaff, 0, 38, 0.5, 0.6, 1.6);
lamp.shadow.mapSize.set(1024, 1024); lamp.shadow.camera.near = 0.25; lamp.shadow.camera.far = 38; lamp.shadow.bias = -0.002; lamp.shadow.normalBias = 0.03;
s3.scene.add(lamp); s3.scene.add(lamp.target);
gfx.renderer.shadowMap.autoUpdate = false;        // the lamp's shadows are redrawn only on frames when the lamp is lit (see frame)
const applyQuality = () => { gfx.setQuality(settings.q); lamp.castShadow = gfx.q.shadow > 0; if (gfx.q.shadow) { lamp.shadow.mapSize.set(gfx.q.shadow, gfx.q.shadow); if (lamp.shadow.map) { lamp.shadow.map.dispose(); lamp.shadow.map = null; } } };
applyQuality();

let wantPause = false, spectate = null, cycle = false, lampGain = 1, slowAcc = 0, slowN = 0, fade = 0, matchT = 0, crMuffled = false, muffT = 0, rattleT = 14, klaxT = 0, scanT = 0, lastStatus = ST.ALIVE, ejectT = 0, endShown = false, netT = 0;
let growlT = 2, recorded = -1, crNear = 1.3, crackN = 0, crawlT = 0, ventAnim = { kind: 0, t: 9 };
const stWas = new Float32Array(L.stations.length), stT = new Float32Array(L.stations.length);      // how far along each station was a moment ago, so its work can be heard
const crView = {};       // the creature as this player's view draws it
let catchT = -1, quakeT = 0, briefed = false, nearCr = 0;      // being caught (seconds since the lunge, -1 when not); the hull shuddering; whether this match's conditions have been read out; how close the creature is, 0..1
const beeps = new Map(), steps = new Map(), others = [], tmpV = new THREE.Vector3(), eye = { x: 0, y: 0, z: 0 };
const GEN = { x: 30, z: 19 };          // the reactor: its hum, and where the creature first stirs

const session = new Session(L, {
  onLayout: lay => { if (lay) { s3.setLayout(lay); sparks.setLayout(lay); } },
  onPhase: (old, ph) => {
    if (ph === PH.PLAY) { fade = 0; matchT = 0; endShown = false; spectate = null; hud.roomName = ''; hud.banner(L.sections[0].name.toUpperCase() + ' · restart the reactor', 5, 'title'); briefed = false; stWas.fill(0); ventAnim.kind = 0; catchT = -1; quakeT = 0; scares.reset(); lights.reset(session.rep.zonesNow()); }
    if (ph === PH.END) showEnd();
    if (ph === PH.LOBBY && old !== PH.LOBBY) { player.mid = -1; if (session.mode === 'solo') leave(); }
  },
  onEvent: e => onEvent(e),
  onNotice: t => hud.notice(t),
  onKicked: () => { player.mid = -1; },
  onNet: () => { netT = 0; },
});
session.name = settings.name || 'Crew';
session.plain = query.has('plain');               // for automated checks: matches with nothing sealed, all power on and no incidents
const scares = new Scares(s3, sound, L), lights = new Lights(), sparks = new Sparks(s3, sound);
// what this player has done so far, kept between visits: runs, escapes, the best time out, and which kinds of creature they have met
const record = { runs: 0, out: 0, best: 0, kinds: {} };
try { Object.assign(record, JSON.parse(localStorage.getItem('los-record') || '{}')); } catch (e) { /* starts again from nothing */ }
const recordLine = () => { const met = Object.keys(record.kinds || {}).length; return record.runs ? `Runs ${record.runs} · escapes ${record.out}${record.best ? ' · best ' + Math.floor(record.best / 60) + ':' + String(record.best % 60).padStart(2, '0') : ''} · kinds of creature met ${met} of ${TRAITS.length}` : ''; };
// things worth being told once
const tip = (key, text) => { if (!settings.tips) settings.tips = {}; if (settings.tips[key]) return; settings.tips[key] = 1; save(); hud.feed(text, 'tip', 11); };
scares.onRadio = line => hud.feed('Radio: “…' + line + '…”', 'radio');

// keep a phone's screen on while a match is running: hiding in a locker means not touching it for a while
let wake = null;
async function keepAwake(on) {
  try {
    if (on && !wake && navigator.wakeLock && document.visibilityState === 'visible') { wake = await navigator.wakeLock.request('screen'); wake.addEventListener('release', () => { wake = null; }); }
    else if (!on && wake) { const w = wake; wake = null; await w.release(); }
  } catch (e) { wake = null; }
}
const buzz = pattern => { if (TOUCH && navigator.vibrate) { try { navigator.vibrate(pattern); } catch (e) { /* not allowed here */ } } };
// the mouse could not be captured. If that followed a tap, this is a touch device that did not say so: bring up the touch controls.
function lockFailed() {
  if (lastPointer !== 'touch' || settings.touchMode !== 'auto' || TOUCH) return;
  autoTouch = true; applyTouch(); wantPause = false; hud.notice('Touch controls turned on. Controls has the setting.');
}
const lock = () => {
  sound.cheap = TOUCH; sound.start(); wantPause = false; input.clear();
  if (TOUCH) {          // phones: full screen and sideways where the browser allows it; there is no mouse to capture
    const el = document.documentElement; keepAwake(true);
    try { if (!document.fullscreenElement && el.requestFullscreen) { const p = el.requestFullscreen({ navigationUI: 'hide' }); if (p && p.then) p.then(() => { try { const o = screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape'); if (o && o.catch) o.catch(() => {}); } catch (e) { /* not offered here */ } }, () => {}); } } catch (e) { /* not offered here */ }
    return;
  }
  if (!NOLOCK && document.pointerLockElement !== canvas && canvas.requestPointerLock) { try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(lockFailed); } catch (e) { lockFailed(); } }
};
const unlock = () => { if (document.pointerLockElement === canvas) document.exitPointerLock(); input.clear(); };
function leave() { session.leave(); player.mid = -1; avatars.clear(); creature.setVisible(false); unlock(); wantPause = false; keepAwake(false); }

const hud = new Hud(L, {
  solo: () => { session.name = settings.name || 'Crew'; session.solo(); lock(); },
  host: () => { sound.start(); session.name = settings.name || 'Crew'; session.host(); },
  join: () => { sound.start(); const g = session.joinable(); if (!g) return; session.name = settings.name || 'Crew'; if (session.join(g.gid) && g.ph === PH.PLAY) lock(); },
  start: () => { session.start(); lock(); },
  ready: () => { session.ready = !session.ready; sound.ui(); },
  leave: () => leave(),
  resume: () => lock(),
  again: () => { if (session.mode === 'solo') { session.solo(); lock(); } },
  name: v => { settings.name = v.trim().slice(0, 14); session.name = settings.name || 'Crew'; save(); },
  setting: (k, v) => { settings[k] = v; if (k === 'q') settings.auto = false; save(); hud.setSettings(settings); if (k === 'vol') sound.setVolume(v); if (k === 'q') applyQuality(); },
  controls: () => { controlsOpen = true; showControls(); },
  controlsBack: () => { controlsOpen = false; input.listen = null; save(); },
  bind: (a, slot) => { input.listen = [a, slot]; showControls(); },
  resetBinds: () => { input.reset(); save(); showControls(); },
  touchMode: v => { settings.touchMode = v; autoTouch = false; save(); applyTouch(); showControls(); },
  option: (k, v) => { settings[k] = !!v; save(); showControls(); },
  editTouch: () => { controlsOpen = false; touch.edit(true); },
  privateRoom: () => { if (session.private) location.hash = ''; else location.hash = Math.random().toString(36).slice(2, 8); },
});
hud.setSettings(settings); hud.setBuild('Build ' + BUILD + '.'); hud.setRecord(recordLine());
hud.setLink(location.href.split('#')[0].split('?')[0] + (session.private ? '#' + session.code : ''), session.private);
window.addEventListener('hashchange', () => location.reload());
session.connect();

// ---------------------------------------------------------------------------------------------- input
let mdx = 0, mdy = 0, locked = NOLOCK, controlsOpen = false, TOUCH = false, swallowClick = false;
const typing = () => { const a = document.activeElement; return a && ((a.tagName === 'INPUT' && a.type !== 'checkbox' && a.type !== 'range') || a.tagName === 'SELECT'); };
const inMatch = () => session.mode !== 'menu' && session.rep.phase === PH.PLAY;
document.addEventListener('keydown', e => {
  if (input.listen) { e.preventDefault(); input.codeDown(e.code); return; }
  if (typing()) return;
  if (e.repeat) { if (input.isBound(e.code) && (locked || inMatch())) e.preventDefault(); return; }
  const used = input.codeDown(e.code);
  if (used && (locked || inMatch() || e.code === 'Tab')) e.preventDefault();
});
document.addEventListener('keyup', e => input.codeUp(e.code));
window.addEventListener('blur', () => input.clear());
document.addEventListener('mousemove', e => { if (document.pointerLockElement === canvas) { mdx += clamp(e.movementX || 0, -160, 160); mdy += clamp(e.movementY || 0, -160, 160); } });
document.addEventListener('pointerdown', e => { lastPointer = e.pointerType || ''; }, true);
document.addEventListener('mousedown', e => {
  if (input.listen) {       // waiting for a new binding: any mouse button counts, except a click on another binding's own button
    if (e.target.closest && e.target.closest('[data-bind]')) return;
    e.preventDefault(); input.codeDown('Mouse' + e.button); swallowClick = true; setTimeout(() => { swallowClick = false; }, 400); return;
  }
  if (document.pointerLockElement === canvas) input.codeDown('Mouse' + e.button);
});
document.addEventListener('click', e => { if (swallowClick) { swallowClick = false; e.stopPropagation(); e.preventDefault(); } }, true);     // the click that set a binding must not also press what was under it
document.addEventListener('mouseup', e => input.codeUp('Mouse' + e.button));
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('gesturestart', e => e.preventDefault());       // iOS pinch
document.addEventListener('pointerlockchange', () => { if (TOUCH) return; locked = NOLOCK || document.pointerLockElement === canvas; if (!locked && inMatch()) wantPause = true; input.clear(); });
document.addEventListener('pointerlockerror', () => lockFailed());
canvas.addEventListener('click', () => { if (!TOUCH && inMatch() && !locked) lock(); });
document.addEventListener('visibilitychange', () => {
  if (!TOUCH) return;
  if (document.hidden) { if (inMatch()) { wantPause = true; input.clear(); touch.release(); } }      // the phone was locked or another app came up
  else if (inMatch()) keepAwake(true);
});

const touch = new Touch(input, settings, {
  pause: () => { wantPause = true; input.clear(); },
  edited: () => save(),
  editDone: () => { controlsOpen = true; showControls(); },
});
function applyTouch() {
  const was = TOUCH; TOUCH = touchOn(); touch.setEnabled(TOUCH); hud.setTouch(TOUCH, input); sound.cheap = TOUCH;
  if (was && !TOUCH) { locked = NOLOCK || document.pointerLockElement === canvas; if (!locked && inMatch()) wantPause = true; input.clear(); }
}
input.onBound = () => { save(); showControls(); };
function showControls() { hud.setControls(input, ACTIONS, settings, TOUCH); }
applyTouch();
if (window.matchMedia) { try { window.matchMedia('(pointer: coarse)').addEventListener('change', () => applyTouch()); } catch (e) { /* older browsers: the Controls screen still has the switch */ } }

// ---------------------------------------------------------------------------------------------- what the host reports
function nameOf(slot) { for (const p of session.rep.players.values()) if (p.slot === slot) return p.name; return 'Someone'; }
function muffled(x, z) { return !sight(L, session.rep.doorOpen, cam.position.x, cam.position.z, 1.5, x, z, 1.5, true); }
function onEvent(e) {
  const rep = session.rep, me = rep.me, mine = me && e[2] === me.slot, cr = rep.creature;
  switch (e[1]) {
    case 'tag': {
      const t = rep.layout && rep.layout.tags[e[2]], mineTag = me && e[3] === me.slot, n = e[4];
      if (mineTag) { sound.pickupTag(); if (t) { const lg = CREW_LOGS[t.log]; hud.log(lg[0], lg[1], lg[2]); setTimeout(() => sound.garble(1.3), 700); } } else hud.feed(`${nameOf(e[3])} recovered a tag (${n} of ${CFG.TAGS})`);
      break;
    }
    case 'item': if (me && e[3] === me.slot) sound.pickupItem(); break;
    case 'door': { const d = L.doors[e[2]]; if (d) { const mf = muffled(d.x, d.z); if (e[4] === 2) sound.fault(d.x, d.z, mf); sound.door(d.x, d.z, !!e[3], e[4] === 1, mf); } break; }       // e[4]: 1 forced by the creature, 2 moved by itself
    case 'throw': if (mine) sound.throwSound(); break;
    case 'alert': if (cr.has) sound.voice('alert', cr.x, cr.z, crMuffled); break;
    case 'spot': if (cr.has) sound.voice('screech', cr.x, cr.z, crMuffled); if (mine) { hud.banner('It has seen you', 2.5, 'bad'); player.shake = 0.6; buzz([70, 50, 140]); lights.dip(0.7); scares.fx.static = Math.max(scares.fx.static, 0.45); } break;
    case 'lost': if (cr.has) sound.voice('hiss', cr.x, cr.z, crMuffled); break;
    case 'lunge': if (cr.has) sound.voice('lunge', cr.x, cr.z, crMuffled); if (mine) caught(); break;
    case 'lockchk': {
      const k = L.lockers[e[2]]; if (k && e[3] !== 2) sound.locker(k.x, k.z, true, muffled(k.x, k.z));
      // it is at your locker; then it has the door open, or, if you held your breath and it believed the silence, it turns away
      if (player.hidden === e[2]) { if (e[3] === 1) caught(); else if (e[3] === 2) { hud.banner('It did not find you', 3); if (cr.has) sound.voice('hiss', cr.x, cr.z, false); } else { player.shake = 1.0; buzz(120); } }
      break;
    }
    case 'wake': sound.wakeCall(cr.has ? cr.x : GEN.x, cr.has ? cr.z : GEN.z); lights.dip(1.5); hud.feed('Something aboard has started to move.'); break;
    // the ship
    case 'station': {
      const st = L.stations[e[2]]; if (!st) break; sound.stationDone(st.x, st.z);
      const n = L.stations.filter(o => o.kind === st.kind && rep.stProg[o.id] >= 1).length + (rep.stProg[st.id] >= 1 ? 0 : 1);
      if (st.kind === 'pump') hud.feed(`Coolant pump ${n} of 3 is running.${n >= 3 ? ' Now the reactor lever.' : ''}`);
      else if (st.kind === 'terminal') hud.feed(`Launch codes: ${n} of 3 downloaded.`);
      else if (st.kind === 'uplink') hud.feed('The bridge has the codes.');
      break;
    }
    case 'reactor': sound.reactor(); hud.banner('The reactor is running', 4); hud.feed('Power is back in engineering.'); break;
    case 'bulkopen': {
      const sc = L.sections[e[2]], d = L.doors[sc.bulkOut], nx = L.sections[e[2] + 1];
      sound.bulkhead(d.x, d.z, clamp01(1 - Math.hypot(d.x - cam.position.x, d.z - cam.position.z) / 60));
      hud.banner(`The bulkhead to the ${nx.name} is open`, 6); hud.feed('It heard that. Get everyone through: it shuts behind the last of you.');
      break;
    }
    case 'section': {
      const sc = L.sections[e[2]]; sound.pickupTag();
      hud.banner(sc.name.toUpperCase(), 5, 'title'); hud.feed({ tags: 'The crew tags are somewhere in the cargo hold. Their codes open the next bulkhead.', terminals: 'Three terminals on this deck hold the launch codes.', launch: 'The bridge is at the bow. The escape pod is in the pod bay.' }[sc.task] || '');
      break;
    }
    case 'ventin': case 'ventout': {
      const v = L.vents[e[2]]; if (!v) break; const d = Math.hypot(v.x - cam.position.x, v.z - cam.position.z);
      sound.ventBang(v.x, v.z, muffled(v.x, v.z)); s3.ventKick(e[2]); ventAnim.kind = e[1] === 'ventin' ? 1 : 2; ventAnim.t = 0;
      if (e[1] === 'ventout' && d < 14 && !muffled(v.x, v.z)) { player.shake = Math.max(player.shake, 0.8 * (1 - d / 14)); lights.dip(0.5); scares.fx.static = Math.max(scares.fx.static, 0.5 * (1 - d / 14)); buzz(80); }
      if (d < 20) tip('vents', 'It uses the vents. Listen to the ceiling: you can hear it crawling, and the hatches bang when it goes in or comes out.');
      break;
    }
    case 'pwr': {
      const z = e[2], here = z === 9 || L.zoneOf[L.cellOf(cam.position.x, cam.position.z)] === z;
      if (e[3]) { sound.powerUp(here ? 1 : 0.12); hud.feed(z === 9 ? 'The power is back.' : e[4] ? `The ${ZONES[z]} has power for now.` : `Power is back in the ${ZONES[z]}.`); }
      else { sound.powerDown(here ? 1 : 0.12); hud.feed(z === 9 ? 'Blackout. Every circuit is down.' : e[4] ? `What the breaker gave the ${ZONES[z]} has run out.` : `The power has tripped in the ${ZONES[z]}.`); if (here) buzz(60); }
      break;
    }
    case 'breaker': { const b = L.breakers[e[2]]; if (b) sound.breaker(b.x, b.z, muffled(b.x, b.z)); if (me && e[3] !== me.slot && e[3] >= 0) hud.feed(`${nameOf(e[3])} threw the ${ZONES[e[2]]} breaker`); break; }
    case 'gasp': if (mine) { player.breath = 0; player.gaspT = CFG.breath.gasp; player.hold = false; sound.gasp(); hud.banner('You had to breathe', 2.2, 'warn'); buzz(90); } else { const o = [...rep.players.values()].find(p => p.slot === e[2]), k = o && o.hidden >= 0 ? L.lockers[o.hidden] : null; if (k && Math.hypot(k.x - cam.position.x, k.z - cam.position.z) < 12) hud.feed(`${nameOf(e[2])} could not hold their breath`); } break;
    case 'fault': hud.feed(`Door fault. ${e[2]} doors have moved by themselves.`); break;
    case 'quake': sound.quake(6.5); quakeT = 6.5; lights.dip(1.0); hud.feed('The hull is groaning. Nothing carries far over that.'); buzz([200, 100, 200, 100, 300]); break;
    case 'down': if (mine) { sound.downed(); player.shake = 1.4; buzz(350); } else hud.feed(`${nameOf(e[2])} is down`); break;
    case 'dead': if (!mine) hud.feed(`${nameOf(e[2])} is gone`); break;
    case 'rev': if (mine) { sound.revived(); hud.banner('Back on your feet', 3); } else hud.feed(`${nameOf(e[3])} picked up ${nameOf(e[2])}`); break;
    case 'wind': if (mine) { sound.revived(); hud.banner('It left you for dead. You will not survive another.', 6, 'warn'); } break;
    case 'liftready': hud.banner('Codes uploaded. Prime the escape pod in the pod bay.', 7); sound.pickupTag(); break;
    case 'liftcall': hud.banner(`Pod primed. ${e[3] || CFG.lift.call} seconds to launch. It will hear the alarm.`, 6, 'warn'); break;
    case 'liftarr': hud.banner('The pod hatch is open. Get in.', 6); sound.liftArrive(L.lift.x, L.lift.z); break;
    case 'liftgo': sound.podLaunch(); break;
    case 'join': hud.feed(`${nameOf(e[2])} joined`); break;
    case 'leave': hud.feed('A crew member dropped out'); break;
  }
}
// what the crew has to do now, in a sentence, and the pips under the section's name
function objectiveText(rep, lf) {
  const sc = L.sections[rep.sec], useK = TOUCH ? 'USE' : input.label('use'), scanK = TOUCH ? 'SCAN' : input.label('scan');
  const done = kind => L.stations.filter(o => o.kind === kind && o.sec === rep.sec && rep.stProg[o.id] >= 1).length;
  if (rep.secDone && sc.bulkOut >= 0) return `The bulkhead to the ${L.sections[rep.sec + 1].name} is open. Everyone through: it shuts behind the last of you.`;
  if (sc.task === 'reactor') return done('pump') < 3 ? `Restart the reactor: bring the coolant pumps back online (${done('pump')} of 3). Hold ${useK} at each. ${scanK} finds them.` : 'The pumps are running. Throw the reactor lever in Reactor Control.';
  if (sc.task === 'tags') return `Find the crew tags in the cargo hold (${rep.tagCount()} of ${CFG.TAGS}). Their codes open the next bulkhead. ${scanK} finds them.`;
  if (sc.task === 'terminals') return `Download the launch codes from three terminals (${done('terminal')} of 3). Hold ${useK} at each. ${scanK} finds them.`;
  if (lf.state === LIFT.LOCKED) return 'Upload the launch codes at the uplink on the bridge, at the bow.';
  if (lf.state === LIFT.READY) return 'Prime the escape pod from its console in the pod bay.';
  if (lf.state === LIFT.CALLED) return `The pod launches in ${Math.ceil(lf.timer)} s. Stay alive.`;
  if (lf.state === LIFT.ARRIVED) return `Get in the pod. It goes in ${Math.max(0, Math.ceil(lf.board))} s.`;
  return '';
}
function pipsNow(rep) {
  const sc = L.sections[rep.sec], n = (kind) => L.stations.filter(o => o.kind === kind && o.sec === rep.sec && rep.stProg[o.id] >= 1).length;
  if (sc.task === 'reactor') return { n: 4, done: n('pump') + n('lever') };
  if (sc.task === 'tags') return { n: CFG.TAGS, done: rep.tagCount() };
  if (sc.task === 'terminals') return { n: 3, done: n('terminal') };
  return { n: 2, done: n('uplink') + (rep.lift.state >= LIFT.CALLED ? 1 : 0) };
}
const tg0Sealed = t => !!t && t.dead && /^Sealed/.test(t.text);
// It has you. For a second the view is not yours: it turns to face what caught you.
function caught() { catchT = 0; sound.sting(settings.scares ? 1 : 0.5); buzz([40, 30, 220]); }
const zoneNames = (lay, kind) => { const n = []; lay.zones.forEach((p, z) => { if (p === kind) n.push('the ' + ZONES[z]); }); return n.length > 1 ? n.slice(0, -1).join(', ') + ' and ' + n[n.length - 1] : n[0] || ''; };
// what is different about this match, read out once it has started
function brief(lay) {
  if (lay.plain) return;
  hud.feed('The ship is dark: the reactor is down. Bring the coolant pumps back, then throw the reactor lever.');
  const z2 = Object.assign({}, lay, { zones: lay.zones.map((p, z) => (z === 0 ? PWR.ON : p)) }), dead = zoneNames(z2, PWR.DEAD), fail = zoneNames(z2, PWR.FAILING);
  if (dead) hud.feed(`Further in, no power on the ${dead.replace(/^the /, '')}.`); if (fail) hud.feed(`The lights are failing on the ${fail.replace(/^the /, '')}.`);
  if (lay.sealed.length) hud.feed(`${lay.sealed.length} doors are sealed shut. The schematic marks them in red.`);
}
function showEnd() {
  const rep = session.rep, r = rep.result || { win: 0, t: 0, out: [], tags: 0 }, me = rep.me, out = me && me.status === ST.OUT, n = rep.players.size;
  const mm = Math.floor(r.t / 60), ss = String(r.t % 60).padStart(2, '0');
  hud.setEnd({
    eyebrow: r.win ? 'Pod away' : 'No signal',
    title: out ? 'You made it out' : r.win ? 'Left behind' : 'Signal lost',
    text: out ? 'The pod falls away from the hull. Behind you, the Ymir goes dark again.' : r.win ? 'The pod went without you.' : 'Nobody reached the pod. The Ymir keeps drifting.',
    stats: [[`${mm}:${ss}`, 'Time'], [L.sections[r.sec | 0].name, r.win ? 'Got off from' : 'Got as far as'], [`${r.out.length} / ${n}`, 'Got out']],
    again: session.mode === 'solo' ? 'Go again' : '',
    extra: endExtra(rep.layout),
  });
  // keep count: runs, escapes, best time out, and which kinds of creature this player has now met
  if (rep.layout && !rep.layout.plain && recorded !== rep.mid && me) {
    recorded = rep.mid; const key = (TRAITS[rep.layout.trait] || TRAITS[0]).key, k = record.kinds[key] || (record.kinds[key] = { met: 0, out: 0 });
    record.runs++; k.met++; if (out) { record.out++; k.out++; if (!record.best || r.t < record.best) record.best = r.t; }
    try { localStorage.setItem('los-record', JSON.stringify(record)); } catch (e) { /* not kept */ }
    hud.setRecord(recordLine());
  }
  if (r.win && out) sound.win(); else sound.lose();
  endShown = true; unlock();
}

// which creature it was and what state the ship was in, for the end card
function endExtra(lay) {
  if (!lay || lay.plain) return null;
  const tr = TRAITS[lay.trait] || TRAITS[0], dead = zoneNames(lay, PWR.DEAD), fail = zoneNames(lay, PWR.FAILING), bits = [];
  if (dead) bits.push(`No power in ${dead}.`); if (fail) bits.push(`Failing lights in ${fail}.`); if (lay.sealed.length) bits.push(`${lay.sealed.length} doors sealed.`);
  return { head: 'What was aboard', name: tr.name, line: tr.line, cond: bits.join(' ') };
}

// ---------------------------------------------------------------------------------------------- one frame
let last = performance.now();
function frame() {
  requestAnimationFrame(frame);
  const now = performance.now(), raw = (now - last) / 1000, dt = clamp(raw, 0, 0.1); last = now;
  let rep = session.rep; const inGame = session.mode !== 'menu';
  const upright = TOUCH && window.innerHeight > window.innerWidth;       // a phone held the tall way: the game waits for it to be turned
  if (TOUCH) locked = !wantPause && !touch.editing && !controlsOpen;
  // if this machine cannot keep up, turn the detail down rather than leave the player with a slideshow
  if (settings.auto && inGame && rep.phase === PH.PLAY && (document.pointerLockElement === canvas || TOUCH) && !document.hidden && raw < 0.25) {      // only while someone is really playing: a background tab is slow for other reasons
    slowAcc += raw; slowN++;
    if (slowAcc > 5) { if (slowAcc / slowN > 0.031 && settings.q !== 'low') { settings.q = settings.q === 'high' ? 'medium' : 'low'; applyQuality(); hud.setSettings(settings); save(); hud.notice(TOUCH ? 'Detail turned down to keep things smooth. Pause has the setting.' : 'Detail turned down to keep things smooth. Esc has the setting.'); } slowAcc = 0; slowN = 0; }
  }
  const playing = inGame && rep.phase === PH.PLAY && !!rep.me;
  const active = playing && locked && !session.paused;

  // --- the local player
  if (playing) {
    const me = rep.me;
    // a new match (going again alone restarts the count, so the seed tells it apart): back to the start
    if (player.mid !== rep.mid || player.seed !== rep.seed) { player.spawn(me.slot, rep.sec); player.mid = rep.mid; player.seed = rep.seed; lastStatus = ST.ALIVE; }
    if (me.status !== lastStatus) { lastStatus = me.status; if (me.status === ST.DEAD || me.status === ST.OUT) spectate = null; }
    player.status = me.status;
    const inp = { fwd: 0, right: 0, run: false, crouchToggle: false, dx: 0, dy: 0 };
    if (active) {
      inp.fwd = (input.held('fwd') ? 1 : 0) - (input.held('back') ? 1 : 0) + input.move.y;
      inp.right = (input.held('right') ? 1 : 0) - (input.held('left') ? 1 : 0) + input.move.x;
      inp.run = input.held('run') || touch.running; inp.crouchToggle = input.hit('crouch'); inp.crouchHold = settings.holdCrouch && !TOUCH ? input.held('crouch') : null;
      inp.dx = mdx + input.look.x; inp.dy = (mdy + input.look.y) * (settings.invertY ? -1 : 1);
    }
    if (catchT >= 0 && catchT < 1.1) { inp.dx = 0; inp.dy = 0; }
    const step = player.update(dt, inp, rep, 0.0022 * settings.sens);
    if (step) sound.step(step);
    if (catchT >= 0) {
      catchT += dt; const c = rep.creature;
      // the view goes up to its head: it is a good deal taller than you
      if (c.has && catchT < 1.1) { player.eyePos(eye, 0); const dx = c.x - eye.x, dz = c.z - eye.z, d = Math.hypot(dx, dz), k = Math.min(1, dt * 12); if (d > 0.3) { player.yaw = lerpAngle(player.yaw, yawOf(dx, dz), k); player.pitch += (Math.atan2((me.status === ST.ALIVE ? 1.75 : 1.5) - eye.y, Math.max(d, 0.8)) - player.pitch) * k; } }
      if (catchT > 1.7 || (catchT > 0.75 && me.status === ST.ALIVE)) catchT = -1;        // it is over, or it missed
    }
    if (quakeT > 0) { quakeT -= dt; player.shake = Math.max(player.shake, 0.1 + 0.5 * Math.sin(Math.PI * clamp01(quakeT / 6.5))); }
    session.others(now, others);
    player.findTarget(rep, others);
    const alive = me.status === ST.ALIVE; player.rv = -1; player.ws = -1;
    if (active && alive) {
      const tg = player.target;
      if (input.hit('use') && tg && !tg.dead) {
        if (tg.kind === 'tag') session.act('T', tg.i); else if (tg.kind === 'item') session.act('I', tg.i); else if (tg.kind === 'door') session.act('D', tg.i); else if (tg.kind === 'lift') session.act('L'); else if (tg.kind === 'breaker') session.act('B', tg.i);
        else if (tg.kind === 'hide') { player.enterLocker(tg.i); sound.locker(L.lockers[tg.i].x, L.lockers[tg.i].z, false, false); ejectT = 0; }
        else if (tg.kind === 'unhide') { const k = L.lockers[player.hidden]; player.leaveLocker(); if (k) sound.locker(k.x, k.z, false, false); }
      }
      if (input.held('use') && tg && tg.kind === 'revive') player.rv = tg.slot;
      if (input.held('use') && tg && tg.kind === 'station') { player.ws = tg.i; tip('station', 'Keep holding until the lamp goes green. Letting go keeps what you have done, but the noise carries.'); }
      if (player.hidden < 0) {
        if (input.hit('lamp')) { player.light = !player.light; sound.lamp(player.light); }
        if (input.hit('throw') && me.decoys > 0) session.act('G', Math.round(player.yaw * 1000), Math.round(player.pitch * 1000));
        player.scan = input.held('scan');
      } else player.scan = false;
    } else if (!alive) player.scan = false;
    if (TOUCH && (!alive || player.hidden >= 0)) touch.setToggle('scan', false);
    // shut in a locker: holding the run key holds your breath, for as long as there is air
    const hiding = alive && player.hidden >= 0; if (TOUCH) touch.setHiding(hiding);
    // The host keeps the real count and says when the air has run out ('gasp'); the bar here follows the same rule so it
    // moves without waiting to be told.
    player.hold = hiding && active && input.held('run') && player.gaspT <= 0;
    if (player.hold) player.breath = Math.max(0, player.breath - dt / CFG.breath.hold);
    else { player.breath = Math.min(1, player.breath + dt / CFG.breath.recover); player.gaspT = hiding ? Math.max(0, player.gaspT - dt) : 0; }
    if (hiding) tip('hide', TOUCH ? 'Hold BREATH while it is outside the locker. It listens. Let go before your air runs out.' : `Hold ${input.label('run')} to hold your breath while it is outside the locker. It listens. Let go before your air runs out.`);
    if (tg0Sealed(player.target)) tip('sealed', 'A door with bars and a red lamp is sealed for this match. The schematic marks them in red.');
    // two people went for the same locker: the host says who got it
    if (player.hidden >= 0 && me.hidden !== player.hidden) { ejectT += dt; if (ejectT > 1 && others.some(o => o.hidden === player.hidden)) { player.leaveLocker(); hud.feed('Someone is already in there'); } } else ejectT = 0;
    session.local.x = player.x; session.local.z = player.z; session.local.yaw = player.yaw; session.local.pitch = player.pitch; session.local.f = player.flags(); session.local.lk = player.hidden; session.local.rv = player.rv; session.local.ws = player.ws;
    if ((me.status === ST.DEAD || me.status === ST.OUT) && (input.hit('throw') || input.hit('use'))) cycle = true;          // click: watch someone else
    matchT += dt;
    if (!briefed && matchT > 2.6 && rep.layout) { briefed = true; brief(rep.layout); }
  } else { session.others(now, others); player.scan = false; catchT = -1; }
  if (session.mode === 'solo') session.paused = (wantPause && !locked) || (upright && playing);
  mdx = mdy = 0;

  // --- the match itself
  session.tick(now);
  rep = session.rep;
  const showWorld = inGame && rep.phase !== PH.LOBBY;
  s3.zones = rep.zonesNow ? rep.zonesNow() : s3.zones;
  lights.update(dt, showWorld && rep.layout ? rep.zonesNow() : null, showWorld ? rep.zoneOff : 0, showWorld ? nearCr : 0, !settings.scares);
  s3.setPower(lights.lv, lights.all);
  s3.update(dt, inGame ? rep : null);

  // --- camera
  const me = rep.me; let watching = null, camYaw = 0, camPitch = 0, lampOn = false, crouched = false;
  const punch = catchT < 0 ? 0 : catchT < 0.12 ? catchT / 0.12 : clamp01(1 - (catchT - 0.12) / 0.6);       // the view lurches in as it lands
  gfx.resize(window.innerWidth, window.innerHeight); cam.aspect = window.innerWidth / window.innerHeight; cam.fov = 72 - 14 * punch; cam.updateProjectionMatrix();
  if (!showWorld || !me) {                // the menu: a slow walk round the reactor
    const a = now / 1000 * 0.05, px = s3.pit.x + Math.cos(a) * 9.6, pz = s3.pit.z + Math.sin(a) * 9.6;
    cam.position.set(px, 2.1, pz); camYaw = yawOf(s3.pit.x - px, s3.pit.z - pz) + 0.5; camPitch = 0.12; cam.rotation.set(camPitch, camYaw, 0);
  } else if ((me.status === ST.DEAD || me.status === ST.OUT) && others.some(o => o.status === ST.ALIVE || o.status === ST.DOWN)) {
    const cands = others.filter(o => o.status === ST.ALIVE || o.status === ST.DOWN);
    if (cycle || !cands.some(o => o.id === spectate)) { const i = cands.findIndex(o => o.id === spectate); spectate = cands[(i + 1) % cands.length].id; cycle = false; }
    watching = cands.find(o => o.id === spectate);
    crouched = !!(watching.f & F.CROUCH); cam.position.set(watching.x, watching.status === ST.DOWN ? 0.4 : crouched ? 0.95 : 1.6, watching.z);
    camYaw = watching.yaw; camPitch = watching.pitch; cam.rotation.set(camPitch, camYaw, 0); lampOn = !!(watching.f & F.LIGHT) && watching.status === ST.ALIVE;
  } else {
    player.eyePos(eye, now / 1000); cam.position.set(eye.x, eye.y, eye.z); camYaw = player.yaw; camPitch = player.pitch;
    cam.rotation.set(camPitch - player.dropT * 0.25, camYaw, player.dropT * 0.9 + Math.sin(player.bob) * 0.006 * clamp01(player.speed / 3));
    lampOn = player.light && me.status === ST.ALIVE; crouched = player.crouch;
  }
  const fx = -Math.sin(camYaw) * Math.cos(camPitch), fy = Math.sin(camPitch), fz = -Math.cos(camYaw) * Math.cos(camPitch);
  // a lamp held close to a wall would white the whole view out, so it dims itself as whatever is ahead gets nearer
  let aheadD = 12; const hx = -Math.sin(camYaw), hz = -Math.cos(camYaw), cp = Math.max(0.2, Math.cos(camPitch));
  if (lampOn) {
    for (let t = 0.5; t <= 12; t += 0.5) { const i = L.cellOf(cam.position.x + hx * t, cam.position.z + hz * t), c = L.cells[i], dr = L.doorAt[i]; if (c === C.SOLID || c === C.TALL || c === C.LOCKER || c === C.DUCT || c === undefined || (dr >= 0 && rep.doorOpen[dr] < 0.5)) { aheadD = t / cp; break; } }
    if (fy < -0.05) aheadD = Math.min(aheadD, cam.position.y / -fy); else if (fy > 0.05) aheadD = Math.min(aheadD, (3.2 - cam.position.y) / fy);
    const near = (x, z) => { const dx = x - cam.position.x, dz = z - cam.position.z, d = Math.hypot(dx, dz); if (d > 0.4 && d < aheadD && (dx * hx + dz * hz) / d > 0.93) aheadD = d; };
    for (const o of others) if (o.hidden < 0) near(o.x, o.z);
    if (rep.creature.has) { near(rep.creature.x, rep.creature.z); if (aheadD === Math.hypot(rep.creature.x - cam.position.x, rep.creature.z - cam.position.z)) aheadD *= 0.55; }      // its husk is pale: a lamp at full strength would white it out
  }
  lampGain += (clamp(aheadD / 8, 0.1, 1) - lampGain) * Math.min(1, dt * 7);
  lamp.intensity += ((lampOn ? 200 * lampGain * lights.lamp : 0) - lamp.intensity) * Math.min(1, dt * 22);
  gfx.renderer.shadowMap.needsUpdate = lamp.castShadow && lamp.intensity > 1;
  lamp.position.set(cam.position.x + Math.cos(camYaw) * 0.2, cam.position.y - 0.16, cam.position.z - Math.sin(camYaw) * 0.2);
  lamp.target.position.set(cam.position.x + fx * 10, cam.position.y + fy * 10, cam.position.z + fz * 10);
  sound.listener(cam.position.x, cam.position.y, cam.position.z, fx, fy, fz);

  // --- the creature and the crew
  const cr = rep.creature, crIn = cr.has && cr.vent && !cr.climb, crOn = showWorld && cr.has && rep.phase !== PH.LOBBY && !crIn;
  if (crOn !== creature.root.visible) creature.setVisible(crOn);
  let dist = 999;
  ventAnim.t += dt;
  if (showWorld && cr.has && rep.phase !== PH.LOBBY) dist = Math.hypot(cr.x - cam.position.x, cr.z - cam.position.z);
  if (showWorld && crIn && rep.phase === PH.PLAY && dist < 32) { crawlT -= dt; if (crawlT <= 0) { crawlT = 0.32 + Math.random() * 0.4; sound.ventCrawl(cr.x, cr.z); } }       // overhead, moving
  if (crOn) {
    muffT -= dt; if (muffT <= 0) { muffT = 0.2; crMuffled = muffled(cr.x, cr.z); }
    const ahead = dist > 0.05 ? ((cr.x - cam.position.x) * hx + (cr.z - cam.position.z) * hz) / dist : 1, onMe = me && cr.tgt === me.slot, st = cr.state;
    cr.shine = lampOn && !crMuffled && dist < 26 && ahead > 0.88 ? 1 : 0;                  // your lamp is on it: with its own lights out, they still glint
    // its head follows you: when it is looking for you, waiting for you or after you, and as soon as it starts to notice you
    cr.watch = !crMuffled && st !== CS.IDLE && ((dist < 18 && (st === CS.SUSPECT || st === CS.AMBUSH || st === CS.BAIT || st === CS.LOCKER || ((st === CS.HUNT || st === CS.ATTACK) && onMe))) || (dist < 24 && me && me.status === ST.ALIVE && me.aware > 0.2)) ? cam.position : null;
    // It leans a long way forward when it strikes. Drawn where it really stands, a metre off, its head would be behind your
    // eyes; so in this view it is held back to arm's length, and what you get is its face.
    crNear += ((st === CS.ATTACK || catchT >= 0 ? 2.4 : 1.3) - crNear) * Math.min(1, dt * 9);
    Object.assign(crView, cr);
    crView.climb = 0; crView.lift = 0;
    if (cr.climb && ventAnim.kind === 1) { crView.climb = 1; crView.lift = clamp01(ventAnim.t / CFG.creature.climb); }           // reaching up into the hatch, and drawn up through it
    else if (ventAnim.kind === 2 && ventAnim.t < 1.3) { crView.climb = 2; crView.lift = clamp01(1 - ventAnim.t / 0.22); }       // dropped out of one, and landed in a crouch
    if (dist < crNear && dist > 0.05) { const k = crNear / dist; crView.x = cam.position.x + (cr.x - cam.position.x) * k; crView.z = cam.position.z + (cr.z - cam.position.z) * k; }
    creature.update(dt, crView, (x, z, sp) => { if (dist < 55) sound.tick(x, z, sp, crMuffled); });
    if (creature.cracks !== crackN) { crackN = creature.cracks; if (dist < 16 && !cr.lampsOut || dist < 8) sound.crack(cr.x, cr.z, crMuffled); }
    // close enough to hear it breathe; on a hunt, to hear what it sounds like when it means it
    if (st !== CS.IDLE && !cr.lampsOut && dist < 17) { growlT -= dt; if (growlT <= 0) { const h = st === CS.HUNT || st === CS.ATTACK; growlT = h ? 1.5 + Math.random() * 0.9 : 2.6 + Math.random() * 1.8; sound.voice(h ? 'snarl' : 'breath', cr.x, cr.z, crMuffled); } }
    if (cr.state === CS.ROAM && dist < 40) { rattleT -= dt; if (rattleT <= 0) { rattleT = 10 + Math.random() * 16; sound.voice('rattle', cr.x, cr.z, crMuffled); } }
  }
  avatars.sync(showWorld ? (watching ? others.filter(o => o.id !== watching.id) : others) : [], dt, cam.position);
  for (const o of others) {            // their footsteps
    let s = steps.get(o.id); if (!s) { s = { x: o.x, z: o.z, acc: 0 }; steps.set(o.id, s); }
    const d = Math.hypot(o.x - s.x, o.z - s.z); s.x = o.x; s.z = o.z;
    if (showWorld && o.status === ST.ALIVE && o.hidden < 0 && d < 2) { s.acc += d; const run = d / Math.max(dt, 1e-3) > 3.7, cro = !!(o.f & F.CROUCH); if (s.acc > (run ? 2 : cro ? 1.2 : 1.5)) { s.acc = 0; sound.stepAt(o.x, o.z, run, cro); } }
  }
  if (showWorld) {
    for (const [id, d] of rep.decoys) { if (d.state !== 1) continue; let t = (beeps.get(id) || 0) - dt; if (t <= 0) { t = 0.55; sound.beep(d.x, d.z, muffled(d.x, d.z)); } beeps.set(id, t); }
    if (rep.lift.state === LIFT.CALLED && rep.phase === PH.PLAY) { klaxT -= dt; if (klaxT <= 0) { klaxT = 1.35; sound.klaxon(L.lift.alarm.x, L.lift.alarm.z); } }
  }

  // --- how close it is, as the suit shows it
  const awake = crOn && cr.state !== CS.IDLE && rep.phase === PH.PLAY;
  const stat = awake ? Math.pow(clamp01(1 - (dist - 4) / 24), 1.8) : 0;
  let bars = !awake ? 5 : dist > 34 ? 5 : dist > 26 ? 4 : dist > 19 ? 3 : dist > 13 ? 2 : dist > 8 ? 1 : 0;
  if (bars > 0 && bars < 5 && Math.sin(now / 130) * Math.sin(now / 370) > 0.75) bars--;
  const hunted = awake && me && cr.tgt === me.slot && (cr.state === CS.HUNT || cr.state === CS.ATTACK);
  const down = me && me.status === ST.DOWN;
  nearCr = awake ? clamp01(1 - (dist - 3) / 11) : 0;          // the lights start to catch when it is within fourteen metres
  const hereZ = L.zoneOf[L.cellOf(clamp(cam.position.x, 0, 137), clamp(cam.position.z, 0, 97))], inDark = showWorld && lights.want[hereZ] < 0.5;
  sound.update(dt, { static: showWorld ? stat : 0, danger: showWorld && me && me.status === ST.ALIVE ? clamp01((hunted ? 0.7 : 0) + stat * 0.5 + (player.hold ? 0.4 + 0.5 * (1 - player.breath) : 0)) : 0, winded: playing ? clamp01(1 - player.stamina / 45) : 0, gen: showWorld ? clamp01(1 - Math.hypot(cam.position.x - GEN.x, cam.position.z - GEN.z) / 30) : 0,
    tension: showWorld ? clamp01(stat * 0.9 + (hunted ? 0.45 : 0) + (inDark ? 0.21 : 0.05)) : 0.04, hiding: playing && !!me && me.status === ST.ALIVE && player.hidden >= 0, holding: playing && player.hold });
  if (showWorld) sparks.update(dt, cam.position, !settings.scares, muffled);
  if (showWorld && rep.phase === PH.PLAY) for (const st of L.stations) {
    const p = rep.stProg[st.id]; if (p > stWas[st.id] && p < 1) { stT[st.id] -= dt; if (stT[st.id] <= 0) { stT[st.id] = st.kind === 'pump' ? 1.0 : 0.7; sound.stationWork(st.kind, st.x, st.z, muffled(st.x, st.z)); } } else stT[st.id] = 0;
    stWas[st.id] = p;
  }
  if (playing && me && me.status === ST.ALIVE) {
    if (nearCr > 0.2) tip('near', 'The lights stutter when it is close. Crouch, lamp off, and listen for the tapping.');
    if (inDark) tip('dark', 'No power here. The red lamps are emergency lighting. Every deck has a yellow breaker box that can bring its power back for a while.');
  }
  scares.update(dt, { playing, alive: !!me && me.status === ST.ALIVE && !watching, hidden: player.hidden, scares: settings.scares, calm: !awake || dist > 28, cam: cam.position, yaw: camYaw, fx: hx, fz: hz, lampOn, rep, others });
  if (scares.fx.shake) player.shake = Math.max(player.shake, scares.fx.shake); if (scares.fx.dip) lights.dip(scares.fx.dip);
  if (playing && player.scan && me.status === ST.ALIVE) { scanT -= dt; } else scanT = 0.15;

  // --- read-outs
  let scan = null;
  if (playing && player.scan && me.status === ST.ALIVE && rep.layout) {
    let tx = 0, tz = 0, bd = 1e9, label = 'TAG';
    const sc = L.sections[rep.sec], near = (x, z, lab) => { const d = Math.hypot(x - player.x, z - player.z); if (d < bd) { bd = d; tx = x; tz = z; label = lab; } };
    if (rep.secDone && sc.bulkOut >= 0) { const d = L.doors[sc.bulkOut]; near(d.x, d.z, 'BULKHEAD'); }
    else if (rep.lift.state >= LIFT.READY) { const c = rep.lift.state >= LIFT.ARRIVED ? L.lift : L.lift.console; near(c.x, c.z, 'POD'); }
    else if (sc.task === 'tags') rep.layout.tags.forEach((t, i) => { if (!(rep.tagBits & (1 << i))) near(t.x, t.z, 'TAG'); });
    else { const pumps = L.stations.every(o => o.kind !== 'pump' || rep.stProg[o.id] >= 1); for (const st of L.stations) { if (st.sec !== rep.sec || rep.stProg[st.id] >= 1 || !rep.layout.stations.includes(st.id) || (st.kind === 'lever' && !pumps)) continue; near(st.ax, st.az, st.kind.toUpperCase()); } }
    if (bd < 1e9) { const rel = wrapAngle(player.yaw - yawOf(tx - player.x, tz - player.z)); scan = { angle: rel, label: `${label} · ${Math.max(5, Math.round(bd / 5) * 5)} m` }; if (scanT <= 0) { scanT = 1.3; sound.scanPing(clamp01(1 - Math.abs(rel) / Math.PI)); } }
  }
  const lf = rep.lift; let objective = '';
  if (playing) {
    if (me.status === ST.DEAD) objective = watching ? `You are gone. Watching ${watching.name}. ${TOUCH ? 'Tap USE' : 'Press ' + input.label('use')} to switch.` : 'You are gone.';
    else if (me.status === ST.OUT) objective = 'You are out.';
    else objective = objectiveText(rep, lf);
  }
  const marks = [];
  if (playing) for (const o of others) {
    if (o.status !== ST.DOWN || (watching && watching.id === o.id)) continue;
    tmpV.set(o.x, 0.9, o.z).project(cam); let sx = tmpV.x, sy = tmpV.y; const behind = tmpV.z > 1;
    if (behind) { sx = -sx; sy = -1; } sx = clamp(sx, -0.92, 0.92); sy = clamp(sy, -0.85, 0.85);
    const pl = rep.players.get(o.id);
    marks.push({ text: `${o.name} down · ${Math.max(0, Math.ceil(pl ? pl.timer : 0))} s · ${Math.round(Math.hypot(o.x - cam.position.x, o.z - cam.position.z))} m`, x: (sx * 0.5 + 0.5) * window.innerWidth, y: (-sy * 0.5 + 0.5) * window.innerHeight });
  }
  const tg = playing && active ? player.target : null, revT = tg && tg.kind === 'revive' ? [...rep.players.values()].find(p => p.slot === tg.slot) : null;
  const mapPlayers = []; if (playing) { mapPlayers.push({ x: player.x, z: player.z, yaw: player.yaw, slot: me.slot, status: me.status, me: true }); for (const o of others) mapPlayers.push({ x: o.x, z: o.z, slot: o.slot, status: o.status }); }
  const roster = []; if (playing) for (const p of rep.players.values()) if (p.id !== session.id) roster.push(p);
  hud.update(dt, {
    show: playing && rep.phase === PH.PLAY, pips: pipsNow(rep), cap: L.sections[rep.sec].name, objective, bars, roster, room: playing ? L.roomName(cam.position.x, cam.position.z) : '',
    prompt: tg, hold: revT ? revT.revProg : tg && tg.kind === 'station' ? rep.stProg[tg.i] : 0, hidden: playing && player.hidden >= 0, seen: playing && me ? me.aware : 0,
    stamina: playing && player.hidden >= 0 ? player.breath : player.stamina / CFG.player.stamina, spent: playing && player.hidden >= 0 ? player.gaspT > 0 : player.spent, holding: player.hold, lamp: player.light, crouch: player.crouch, sounders: me ? me.decoys : 0,
    scan, marks, map: playing && input.held('map') && !upright, mapPlayers, sealed: rep.layout ? rep.layout.sealed : null, dark: lights.want, sec: rep.sec, secDone: rep.secDone, stations: rep.layout ? { act: rep.layout.stations, prog: rep.stProg } : null,
    down: down ? { title: 'Down', text: session.mode === 'solo' ? (me.wind ? 'Hold still.' : 'That was your second wind.') : (me.revProg > 0 ? 'Someone is picking you up' : 'A crewmate can pick you up'), frac: me.revProg > 0 ? me.revProg : me.timer / CFG.down.bleed } : null,
  });

  // --- menus
  let screen = null;
  if (touch.editing) screen = null;
  else if (controlsOpen) screen = 'controls';
  else if (!inGame) screen = 'title';
  else if (rep.phase === PH.LOBBY) { screen = 'lobby'; if (locked && !NOLOCK) unlock(); }
  else if (rep.phase === PH.END) screen = 'end';
  else if (!locked) screen = wantPause ? 'pause' : 'click';
  touch.show(touch.editing || (TOUCH && screen === null && playing));
  if (TOUCH) touch.setLive(playing && player.target && !player.target.dead);
  hud.portrait(upright && (touch.editing || (screen === null && playing)));
  if (screen !== hud.screen) { hud.setScreen(screen); if (screen === 'pause') hud.setPause(session.mode === 'solo'); if (screen === 'end' && !endShown) showEnd(); }
  if (screen === 'lobby') { const list = [...rep.players.values()].sort((a, b) => a.slot - b.slot).map(p => ({ id: p.id, slot: p.slot, name: p.name, ready: p.ready, host: p.id === session.hostId })); hud.setLobby(list, session.id, session.mode === 'host', session.ready); }
  netT -= dt;
  if (screen === 'title' && netT <= 0) {
    netT = 1; const r = session.relay, up = r ? r.upCount : 0, n = session.hereCount() - 1, g = session.joinable();
    const where = session.private ? 'private room ' + session.code : 'public room';
    const text = up ? `Online · ${where} · ${n === 0 ? 'nobody else here yet' : n === 1 ? '1 other here' : n + ' others here'} · relays ${up}/${r.total}` : (navigator.onLine === false ? 'No internet connection. You can still go in alone.' : 'Connecting to the relays… You can go in alone meanwhile.');
    hud.setNet(text, up ? (up === 1 && r.total > 1 ? 1 : 2) : 0, up > 0 && !g, g ? `Join ${g.host}'s crew (${g.n}/${CFG.MAX_PLAYERS}${g.ph === PH.PLAY ? ', under way' : ''})` : '');
  }

  // --- draw
  fade = Math.min(1, fade + dt * 0.7);
  const u = gfx.uni; u.uTime.value = now / 1000;
  u.uExposure.value = settings.bri * (settings.scares && catchT >= 0 && catchT < 0.1 ? 1 + 1.4 * (1 - catchT / 0.1) : 1);      // one flash as it lands
  let snow = clamp01(stat + (down ? 0.2 : 0) + (playing && matchT < 1.2 ? 0.8 * (1 - matchT / 1.2) : 0) + scares.fx.static);
  if (catchT >= 0) snow = catchT < 0.1 ? 0.8 : Math.min(snow, 0.3 + 0.5 * clamp01((catchT - 1.0) / 0.7));      // a burst as it lands, then the picture clears: you get a good look at what has you
  u.uStatic.value = showWorld ? snow : 0.06;
  u.uHurt.value = down ? 0.65 + 0.2 * Math.sin(now / 240) : me && me.status === ST.DEAD && !watching ? 0.8 : clamp01(player.shake * 0.6);
  u.uFade.value = showWorld ? fade * (me && me.status === ST.DEAD && !watching ? 0.3 : 1) : 0.55;
  u.uDesat.value = watching ? 0.55 : 0; u.uSlats.value += (((playing && player.hidden >= 0 && !watching) ? 1 : 0) - u.uSlats.value) * Math.min(1, dt * 9);
  gfx.render(s3.scene, cam);
  input.endFrame();
}

// A hidden tab stops drawing, but a host must keep the match running for everyone else: a worker's timer is not slowed down.
try {
  const w = new Worker(URL.createObjectURL(new Blob(['setInterval(() => postMessage(0), 50);'], { type: 'text/javascript' })));
  w.onmessage = () => { if (session.mode !== 'menu' && (document.hidden || performance.now() - session.lastT > 90)) session.tick(performance.now()); };     // also covers a visible page whose drawing has been slowed right down
} catch (e) { /* no workers: the match pauses while the host's tab is hidden */ }

window.__los = { ZONES, session, player, hud, gfx, sound, Sound, L, cam, settings, input, touch, s3, scares, lights, sparks, creature, record, layoutMatch, build: BUILD };
requestAnimationFrame(frame);
