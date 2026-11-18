// Online play without a game server.
// Every player keeps one ordinary outbound connection to each of a few free public message relays (MQTT over a web socket)
// and posts to all of them; a message carries a running number so the copies that arrive by the other relays are dropped.
// Nothing connects browser to browser, so home routers and shared wifi are not in the way. As long as two players share
// any one working relay, they see each other. This is the same arrangement the Zombies page uses.
export const DEFAULT_SERVERS = ['wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt', 'wss://test.mosquitto.org:8081'];

export class Relay {
  // base: the topic everything for this room lives under. onMsg(suffix, data, from): data is null when `from` has gone.
  constructor(base, onMsg, onChange) {
    this.base = base; this.onMsg = onMsg; this.onChange = onChange || (() => {});
    this.id = 'p' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
    const servers = (typeof window !== 'undefined' && window.MQ_SERVERS) || DEFAULT_SERVERS;
    this.conns = servers.map((url, i) => ({ url, i, c: null, up: false, fails: 0, timer: null, gen: 0 }));
    this.seq = 0; this.seen = new Map(); this.started = false;
  }
  get upCount() { let n = 0; for (const k of this.conns) if (k.up) n++; return n; }
  get online() { return this.upCount > 0; }
  get total() { return this.conns.length; }
  start() {
    if (this.started) return; this.started = true;
    for (const k of this.conns) this.connect(k);
    // phones and laptops drop sockets when they sleep or change network: come straight back instead of waiting out the backoff
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') this.reconnect(); });
    window.addEventListener('online', () => this.reconnect());
    window.addEventListener('pagehide', () => this.bye());
  }
  reconnect() { for (const k of this.conns) if (!k.up) { k.fails = 0; this.connect(k); } }
  connect(k) {
    clearTimeout(k.timer);
    if (typeof mqtt === 'undefined') { k.timer = setTimeout(() => this.connect(k), 1500); return; }      // the library is still loading
    const g = ++k.gen, me = this.id; let c;
    const lost = () => {
      if (g !== k.gen) return; k.gen++; const was = k.up; k.up = false; try { c.end(true); } catch (e) { /* already closed */ } k.c = null; k.fails++;
      this.onChange(); k.timer = setTimeout(() => this.connect(k), was ? 600 : Math.min(15000, 800 * Math.pow(1.6, k.fails)));
    };
    try { c = k.c = mqtt.connect(k.url, { clientId: 'los_' + me + '_' + k.i + '_' + g, clean: true, keepalive: 15, reconnectPeriod: 0, connectTimeout: 7000, will: { topic: this.base + 'p/' + me, payload: '', qos: 0, retain: false } }); }
    catch (e) { c = { end() {} }; return lost(); }
    c.on('connect', () => { if (g !== k.gen) return; c.subscribe(this.base + '#', { qos: 0 }, err => { if (g !== k.gen) return; if (err) return lost(); k.up = true; k.fails = 0; this.onChange(); }); });
    c.on('message', (topic, payload) => { if (g === k.gen) this.receive(topic, payload); });
    c.on('close', lost); c.on('error', lost); c.on('offline', lost);
  }
  receive(topic, payload) {
    if (topic.slice(0, this.base.length) !== this.base) return;
    const suffix = topic.slice(this.base.length), txt = payload.toString();
    if (!txt) { if (suffix.startsWith('p/') && suffix.slice(2) !== this.id) this.onMsg(suffix, null, suffix.slice(2)); return; }
    if (txt.length > 6000) return;
    let m; try { m = JSON.parse(txt); } catch (e) { return; }
    if (!m || typeof m !== 'object' || typeof m.f !== 'string' || typeof m.s !== 'number' || !m.d || typeof m.d !== 'object' || m.f === this.id) return;
    const key = m.f + '|' + suffix, last = this.seen.get(key);
    if (last !== undefined && m.s <= last && m.s > last - 5000) return;       // a copy that already came by another relay, or an old one
    this.seen.set(key, m.s);
    try { this.onMsg(suffix, m.d, m.f); } catch (e) { console.error(e); }
  }
  pub(suffix, data) {
    if (!this.online) return;
    const msg = JSON.stringify({ f: this.id, s: ++this.seq, d: data });
    for (const k of this.conns) if (k.up) try { k.c.publish(this.base + suffix, msg, { qos: 0 }); } catch (e) { /* that relay will drop and come back */ }
  }
  bye() { for (const k of this.conns) if (k.up) try { k.c.publish(this.base + 'p/' + this.id, '', { qos: 0 }); } catch (e) { /* leaving anyway */ } }
}
