// Loss of Signal — the page. Ties the pieces together: input, the local player, the session, the 3D scene, sound and the HUD.
import * as THREE from 'three';
import { buildLevel, T, C, CREW_LOGS } from './level.js';
import { sight } from './nav.js';
import { CFG } from './config.js';
import { ST, PH, LIFT, CS, F } from './sim/defs.js';
import { Scene3D } from './client/scene.js';
import { Gfx } from './client/fx.js';
import { CreatureModel } from './client/creatureModel.js';
import { Avatars } from './client/avatars.js';
import { Sound } from './client/audio.js';
import { LocalPlayer } from './client/player.js';
import { Hud } from './client/hud.js';
import { Session } from './net/session.js';
import { clamp, clamp01, wrapAngle, yawOf } from './util.js';

const BUILD = typeof __BUILD__ === 'string' ? __BUILD__ : 'dev';
const query = new URLSearchParams(location.search);
const NOLOCK = query.has('nolock');                 // for automated checks: play without capturing the mouse

// ---------------------------------------------------------------------------------------------- settings
const settings = { name: '', sens: 1, vol: 0.8, bri: 1, q: 'high', auto: true };
try { Object.assign(settings, JSON.parse(localStorage.getItem('los-settings') || '{}')); } catch (e) { /* private browsing: defaults */ }
const save = () => { try { localStorage.setItem('los-settings', JSON.stringify(settings)); } catch (e) { /* not kept, that is all */ } };
if (query.get('q')) { settings.q = query.get('q'); settings.auto = false; }

// ---------------------------------------------------------------------------------------------- the pieces
const L = buildLevel();
const canvas = document.getElementById('view');
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
const applyQuality = () => { gfx.setQuality(settings.q); lamp.castShadow = gfx.q.shadow > 0; if (gfx.q.shadow) { lamp.shadow.mapSize.set(gfx.q.shadow, gfx.q.shadow); if (lamp.shadow.map) { lamp.shadow.map.dispose(); lamp.shadow.map = null; } } };
applyQuality();

let wantPause = false, spectate = null, cycle = false, lampGain = 1, slowAcc = 0, slowN = 0, fade = 0, matchT = 0, crMuffled = false, muffT = 0, rattleT = 14, klaxT = 0, scanT = 0, lastStatus = ST.ALIVE, ejectT = 0, endShown = false, netT = 0;
const beeps = new Map(), steps = new Map(), others = [], tmpV = new THREE.Vector3(), eye = { x: 0, y: 0, z: 0 };
const GEN = { x: 114, z: 76 };

const session = new Session(L, {
  onLayout: lay => { if (lay) s3.setLayout(lay); },
  onPhase: (old, ph) => {
    if (ph === PH.PLAY) { fade = 0; matchT = 0; endShown = false; spectate = null; hud.roomName = ''; hud.banner('Find the eight crew tags', 5); }
    if (ph === PH.END) showEnd();
    if (ph === PH.LOBBY && old !== PH.LOBBY) { player.mid = -1; if (session.mode === 'solo') leave(); }
  },
  onEvent: e => onEvent(e),
  onNotice: t => hud.notice(t),
  onKicked: () => { player.mid = -1; },
  onNet: () => { netT = 0; },
});
session.name = settings.name || 'Crew';

const lock = () => { sound.start(); wantPause = false; if (!NOLOCK && document.pointerLockElement !== canvas && canvas.requestPointerLock) { try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* the browser will ask again on the next click */ } } };
const unlock = () => { if (document.pointerLockElement === canvas) document.exitPointerLock(); };
function leave() { session.leave(); player.mid = -1; avatars.clear(); creature.setVisible(false); unlock(); wantPause = false; }

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
  privateRoom: () => { if (session.private) location.hash = ''; else location.hash = Math.random().toString(36).slice(2, 8); },
});
hud.setSettings(settings); hud.setBuild('Build ' + BUILD + '.');
hud.setLink(location.href.split('#')[0].split('?')[0] + (session.private ? '#' + session.code : ''), session.private);
window.addEventListener('hashchange', () => location.reload());
session.connect();

// ---------------------------------------------------------------------------------------------- input
const keys = new Set(), pressed = new Set(); let mdx = 0, mdy = 0, locked = NOLOCK;
const typing = () => { const a = document.activeElement; return a && (a.tagName === 'INPUT' || a.tagName === 'SELECT'); };
document.addEventListener('keydown', e => {
  if (typing()) return;
  if (e.code === 'Tab' || e.code === 'Space' || (locked && e.code.startsWith('Arrow'))) e.preventDefault();
  if (e.repeat) return; keys.add(e.code); pressed.add(e.code);
});
document.addEventListener('keyup', e => keys.delete(e.code));
window.addEventListener('blur', () => keys.clear());
document.addEventListener('mousemove', e => { if (document.pointerLockElement === canvas) { mdx += clamp(e.movementX || 0, -160, 160); mdy += clamp(e.movementY || 0, -160, 160); } });
document.addEventListener('mousedown', e => { if (document.pointerLockElement !== canvas) return; if (e.button === 0) pressed.add('Mouse0'); if (e.button === 2) keys.add('Mouse2'); });
document.addEventListener('mouseup', e => { if (e.button === 2) keys.delete('Mouse2'); });
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('pointerlockchange', () => { locked = NOLOCK || document.pointerLockElement === canvas; if (!locked && session.mode !== 'menu' && session.rep.phase === PH.PLAY) wantPause = true; keys.clear(); });
canvas.addEventListener('click', () => { if (session.mode !== 'menu' && session.rep.phase === PH.PLAY && !locked) lock(); });

// ---------------------------------------------------------------------------------------------- what the host reports
function nameOf(slot) { for (const p of session.rep.players.values()) if (p.slot === slot) return p.name; return 'Someone'; }
function muffled(x, z) { return !sight(L, session.rep.doorOpen, cam.position.x, cam.position.z, 1.5, x, z, 1.5, true); }
function onEvent(e) {
  const rep = session.rep, me = rep.me, mine = me && e[2] === me.slot, cr = rep.creature;
  switch (e[1]) {
    case 'tag': {
      const t = rep.layout && rep.layout.tags[e[2]], mineTag = me && e[3] === me.slot, n = e[4];
      if (mineTag) { sound.pickupTag(); if (t) { const lg = CREW_LOGS[t.log]; hud.log(lg[0], lg[1], lg[2]); } } else hud.feed(`${nameOf(e[3])} recovered a tag (${n} of ${CFG.TAGS})`);
      break;
    }
    case 'item': if (me && e[3] === me.slot) sound.pickupItem(); break;
    case 'door': { const d = L.doors[e[2]]; if (d) sound.door(d.x, d.z, !!e[3], !!e[4], muffled(d.x, d.z)); break; }
    case 'throw': if (mine) sound.throwSound(); break;
    case 'alert': if (cr.has) sound.voice('alert', cr.x, cr.z, crMuffled); break;
    case 'spot': if (cr.has) sound.voice('screech', cr.x, cr.z, crMuffled); if (mine) { hud.banner('It has seen you', 2.5, 'bad'); player.shake = 0.6; } break;
    case 'lost': if (cr.has) sound.voice('hiss', cr.x, cr.z, crMuffled); break;
    case 'lunge': if (cr.has) sound.voice('lunge', cr.x, cr.z, crMuffled); break;
    case 'lockchk': { const k = L.lockers[e[2]]; if (k) sound.locker(k.x, k.z, true, muffled(k.x, k.z)); if (e[3] && me && me.hidden === e[2]) player.shake = 1.4; break; }
    case 'down': if (mine) { sound.downed(); player.shake = 1.4; } else hud.feed(`${nameOf(e[2])} is down`); break;
    case 'dead': if (!mine) hud.feed(`${nameOf(e[2])} is gone`); break;
    case 'rev': if (mine) { sound.revived(); hud.banner('Back on your feet', 3); } else hud.feed(`${nameOf(e[3])} picked up ${nameOf(e[2])}`); break;
    case 'wind': if (mine) { sound.revived(); hud.banner('It left you for dead. You will not survive another.', 6, 'warn'); } break;
    case 'liftready': hud.banner('All eight tags. Get back to the Dock and call the lift.', 7); sound.pickupTag(); break;
    case 'liftcall': hud.banner(`Lift called. ${CFG.lift.call} seconds. It will hear the alarm.`, 6, 'warn'); break;
    case 'liftarr': hud.banner('The lift is here. Get on.', 6); sound.liftArrive(L.lift.x, L.lift.z); break;
    case 'join': hud.feed(`${nameOf(e[2])} joined`); break;
    case 'leave': hud.feed('A crew member dropped out'); break;
  }
}
function showEnd() {
  const rep = session.rep, r = rep.result || { win: 0, t: 0, out: [], tags: 0 }, me = rep.me, out = me && me.status === ST.OUT, n = rep.players.size;
  const mm = Math.floor(r.t / 60), ss = String(r.t % 60).padStart(2, '0');
  hud.setEnd({
    eyebrow: r.win ? 'Lift away' : 'No signal',
    title: out ? 'You made it out' : r.win ? 'Left behind' : 'Signal lost',
    text: out ? 'The lift is climbing. Below you, Outpost Ymir goes quiet again.' : r.win ? 'The lift went without you.' : 'Nobody reached the surface. The outpost keeps its tags.',
    stats: [[`${mm}:${ss}`, 'Time'], [`${r.tags} / ${CFG.TAGS}`, 'Tags'], [`${r.out.length} / ${n}`, 'Got out']],
    again: session.mode === 'solo' ? 'Go again' : '',
  });
  if (r.win && out) sound.win(); else sound.lose();
  endShown = true; unlock();
}

// ---------------------------------------------------------------------------------------------- one frame
let last = performance.now();
function frame() {
  requestAnimationFrame(frame);
  const now = performance.now(), raw = (now - last) / 1000, dt = clamp(raw, 0, 0.1); last = now;
  let rep = session.rep; const inGame = session.mode !== 'menu';
  // if this machine cannot keep up, turn the detail down rather than leave the player with a slideshow
  if (settings.auto && inGame && rep.phase === PH.PLAY && locked && !document.hidden && raw < 0.5) {
    slowAcc += raw; slowN++;
    if (slowAcc > 5) { if (slowAcc / slowN > 0.031 && settings.q !== 'low') { settings.q = settings.q === 'high' ? 'medium' : 'low'; applyQuality(); hud.setSettings(settings); save(); hud.notice('Detail turned down to keep things smooth. Esc has the setting.'); } slowAcc = 0; slowN = 0; }
  }
  const playing = inGame && rep.phase === PH.PLAY && !!rep.me;
  const active = playing && locked && !session.paused;

  // --- the local player
  if (playing) {
    const me = rep.me;
    if (player.mid !== rep.mid) { player.spawn(me.slot); player.mid = rep.mid; lastStatus = ST.ALIVE; }
    if (me.status !== lastStatus) { lastStatus = me.status; if (me.status === ST.DEAD || me.status === ST.OUT) spectate = null; }
    player.status = me.status;
    const inp = { fwd: 0, right: 0, run: false, crouchToggle: false, dx: 0, dy: 0 };
    if (active) {
      inp.fwd = (keys.has('KeyW') || keys.has('ArrowUp') ? 1 : 0) - (keys.has('KeyS') || keys.has('ArrowDown') ? 1 : 0);
      inp.right = (keys.has('KeyD') || keys.has('ArrowRight') ? 1 : 0) - (keys.has('KeyA') || keys.has('ArrowLeft') ? 1 : 0);
      inp.run = keys.has('ShiftLeft') || keys.has('ShiftRight'); inp.crouchToggle = pressed.has('KeyC'); inp.dx = mdx; inp.dy = mdy;
    }
    const step = player.update(dt, inp, rep, 0.0022 * settings.sens);
    if (step) sound.step(step);
    session.others(now, others);
    player.findTarget(rep, others);
    const alive = me.status === ST.ALIVE; player.rv = -1;
    if (active && alive) {
      const tg = player.target;
      if (pressed.has('KeyE') && tg && !tg.dead) {
        if (tg.kind === 'tag') session.act('T', tg.i); else if (tg.kind === 'item') session.act('I', tg.i); else if (tg.kind === 'door') session.act('D', tg.i); else if (tg.kind === 'lift') session.act('L');
        else if (tg.kind === 'hide') { player.enterLocker(tg.i); sound.locker(L.lockers[tg.i].x, L.lockers[tg.i].z, false, false); ejectT = 0; }
        else if (tg.kind === 'unhide') { const k = L.lockers[player.hidden]; player.leaveLocker(); if (k) sound.locker(k.x, k.z, false, false); }
      }
      if (keys.has('KeyE') && tg && tg.kind === 'revive') player.rv = tg.slot;
      if (player.hidden < 0) {
        if (pressed.has('KeyF')) { player.light = !player.light; sound.lamp(player.light); }
        if ((pressed.has('KeyG') || pressed.has('Mouse0')) && me.decoys > 0) session.act('G', Math.round(player.yaw * 1000), Math.round(player.pitch * 1000));
        player.scan = keys.has('KeyQ') || keys.has('Mouse2');
      } else player.scan = false;
    } else if (!alive) player.scan = false;
    // two people went for the same locker: the host says who got it
    if (player.hidden >= 0 && me.hidden !== player.hidden) { ejectT += dt; if (ejectT > 1 && others.some(o => o.hidden === player.hidden)) { player.leaveLocker(); hud.feed('Someone is already in there'); } } else ejectT = 0;
    session.local.x = player.x; session.local.z = player.z; session.local.yaw = player.yaw; session.local.pitch = player.pitch; session.local.f = player.flags(); session.local.lk = player.hidden; session.local.rv = player.rv;
    if ((me.status === ST.DEAD || me.status === ST.OUT) && pressed.has('Mouse0')) cycle = true;          // click: watch someone else
    matchT += dt;
  } else { session.others(now, others); player.scan = false; }
  if (session.mode === 'solo') session.paused = wantPause && !locked;
  mdx = mdy = 0;

  // --- the match itself
  session.tick(now);
  rep = session.rep;
  const showWorld = inGame && rep.phase !== PH.LOBBY;
  s3.update(dt, inGame ? rep : null);

  // --- camera
  const me = rep.me; let watching = null, camYaw = 0, camPitch = 0, lampOn = false, crouched = false;
  gfx.resize(window.innerWidth, window.innerHeight); cam.aspect = window.innerWidth / window.innerHeight; cam.updateProjectionMatrix();
  if (!showWorld || !me) {                // the menu: a slow walk round the borehole
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
    if (rep.creature.has) near(rep.creature.x, rep.creature.z);
  }
  lampGain += (clamp(aheadD / 8, 0.1, 1) - lampGain) * Math.min(1, dt * 7);
  lamp.intensity += ((lampOn ? 200 * lampGain : 0) - lamp.intensity) * Math.min(1, dt * 22);
  lamp.position.set(cam.position.x + Math.cos(camYaw) * 0.2, cam.position.y - 0.16, cam.position.z - Math.sin(camYaw) * 0.2);
  lamp.target.position.set(cam.position.x + fx * 10, cam.position.y + fy * 10, cam.position.z + fz * 10);
  sound.listener(cam.position.x, cam.position.y, cam.position.z, fx, fy, fz);

  // --- the creature and the crew
  const cr = rep.creature, crOn = showWorld && cr.has && rep.phase !== PH.LOBBY;
  if (crOn !== creature.root.visible) creature.setVisible(crOn);
  let dist = 999;
  if (crOn) {
    muffT -= dt; if (muffT <= 0) { muffT = 0.2; crMuffled = muffled(cr.x, cr.z); }
    dist = Math.hypot(cr.x - cam.position.x, cr.z - cam.position.z);
    creature.update(dt, cr, (x, z, sp) => { if (dist < 55) sound.tick(x, z, sp, crMuffled); });
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
    if (rep.lift.state === LIFT.CALLED && rep.phase === PH.PLAY) { klaxT -= dt; if (klaxT <= 0) { klaxT = 1.35; sound.klaxon(L.lift.x + 6, L.lift.z); } }
  }

  // --- how close it is, as the suit shows it
  const awake = crOn && cr.state !== CS.IDLE && rep.phase === PH.PLAY;
  const stat = awake ? Math.pow(clamp01(1 - (dist - 4) / 24), 1.8) : 0;
  let bars = !awake ? 5 : dist > 34 ? 5 : dist > 26 ? 4 : dist > 19 ? 3 : dist > 13 ? 2 : dist > 8 ? 1 : 0;
  if (bars > 0 && bars < 5 && Math.sin(now / 130) * Math.sin(now / 370) > 0.75) bars--;
  const hunted = awake && me && cr.tgt === me.slot && (cr.state === CS.HUNT || cr.state === CS.ATTACK);
  const down = me && me.status === ST.DOWN;
  sound.update(dt, { static: showWorld ? stat : 0, danger: showWorld && me && me.status === ST.ALIVE ? clamp01((hunted ? 0.7 : 0) + stat * 0.5) : 0, winded: playing ? clamp01(1 - player.stamina / 45) : 0, gen: showWorld ? clamp01(1 - Math.hypot(cam.position.x - GEN.x, cam.position.z - GEN.z) / 30) : 0 });
  if (playing && player.scan && me.status === ST.ALIVE) { scanT -= dt; } else scanT = 0.15;

  // --- read-outs
  let scan = null;
  if (playing && player.scan && me.status === ST.ALIVE && rep.layout) {
    let tx = 0, tz = 0, bd = 1e9, label = 'TAG';
    if (rep.lift.state >= LIFT.READY) { const c = rep.lift.state >= LIFT.ARRIVED ? L.lift : L.lift.console; tx = c.x; tz = c.z; bd = Math.hypot(tx - player.x, tz - player.z); label = 'LIFT'; }
    else rep.layout.tags.forEach((t, i) => { if (rep.tagBits & (1 << i)) return; const d = Math.hypot(t.x - player.x, t.z - player.z); if (d < bd) { bd = d; tx = t.x; tz = t.z; } });
    if (bd < 1e9) { const rel = wrapAngle(player.yaw - yawOf(tx - player.x, tz - player.z)); scan = { angle: rel, label: `${label} · ${Math.max(5, Math.round(bd / 5) * 5)} m` }; if (scanT <= 0) { scanT = 1.3; sound.scanPing(clamp01(1 - Math.abs(rel) / Math.PI)); } }
  }
  const lf = rep.lift; let objective = '';
  if (playing) {
    if (me.status === ST.DEAD) objective = watching ? `You are gone. Watching ${watching.name}. Click to switch.` : 'You are gone.';
    else if (me.status === ST.OUT) objective = 'You are out.';
    else if (lf.state === LIFT.LOCKED) objective = 'Find the crew tags. Hold Q for the scanner.';
    else if (lf.state === LIFT.READY) objective = 'Every tag is in. Call the lift from the panel in the Dock.';
    else if (lf.state === LIFT.CALLED) objective = `Lift arrives in ${Math.ceil(lf.timer)} s. Stay alive.`;
    else if (lf.state === LIFT.ARRIVED) objective = `Get on the lift. It leaves in ${Math.max(0, Math.ceil(lf.board))} s.`;
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
    show: playing && rep.phase === PH.PLAY, tags: rep.tagCount(), objective, bars, roster, room: playing ? L.roomName(cam.position.x, cam.position.z) : '',
    prompt: tg, hold: revT ? revT.revProg : 0, hidden: playing && player.hidden >= 0, seen: playing && me ? me.aware : 0,
    stamina: player.stamina / CFG.player.stamina, spent: player.spent, lamp: player.light, crouch: player.crouch, sounders: me ? me.decoys : 0,
    scan, marks, map: playing && (keys.has('Tab') || keys.has('KeyM')), mapPlayers,
    down: down ? { title: 'Down', text: session.mode === 'solo' ? (me.wind ? 'Hold still.' : 'That was your second wind.') : (me.revProg > 0 ? 'Someone is picking you up' : 'A crewmate can pick you up'), frac: me.revProg > 0 ? me.revProg : me.timer / CFG.down.bleed } : null,
  });

  // --- menus
  let screen = null;
  if (!inGame) screen = 'title';
  else if (rep.phase === PH.LOBBY) { screen = 'lobby'; if (locked && !NOLOCK) unlock(); }
  else if (rep.phase === PH.END) screen = 'end';
  else if (!locked) screen = wantPause ? 'pause' : 'click';
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
  const u = gfx.uni; u.uTime.value = now / 1000; u.uExposure.value = settings.bri;
  u.uStatic.value = showWorld ? clamp01(stat + (down ? 0.2 : 0) + (playing && matchT < 1.2 ? 0.8 * (1 - matchT / 1.2) : 0)) : 0.06;
  u.uHurt.value = down ? 0.65 + 0.2 * Math.sin(now / 240) : me && me.status === ST.DEAD && !watching ? 0.8 : clamp01(player.shake * 0.6);
  u.uFade.value = showWorld ? fade * (me && me.status === ST.DEAD && !watching ? 0.3 : 1) : 0.55;
  u.uDesat.value = watching ? 0.55 : 0; u.uSlats.value += (((playing && player.hidden >= 0 && !watching) ? 1 : 0) - u.uSlats.value) * Math.min(1, dt * 9);
  gfx.render(s3.scene, cam);
  pressed.clear();
}

// A hidden tab stops drawing, but a host must keep the match running for everyone else: a worker's timer is not slowed down.
try {
  const w = new Worker(URL.createObjectURL(new Blob(['setInterval(() => postMessage(0), 50);'], { type: 'text/javascript' })));
  w.onmessage = () => { if (document.hidden && session.mode !== 'menu') session.tick(performance.now()); };
} catch (e) { /* no workers: the match pauses while the host's tab is hidden */ }

window.__los = { session, player, hud, gfx, sound, L, cam, settings, keys, pressed, build: BUILD };
requestAnimationFrame(frame);
