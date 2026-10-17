import type { Camera, Collaborator } from '../editor/store';

/**
 * Agent cursor choreography. Agents act in batched tool calls, so motion here
 * visualizes real events only: the cursor moves to nodes the agent actually
 * read or edited, and after a create it visits every new node in document order.
 * Between calls it wanders over real content inside that node (children's
 * boxes), all computed here in the editor — no model tokens are spent on motion.
 */

/** Lifecycle timings, measured from the agent's latest tool call. Mutable for tests. */
export const agentTiming = { workingMs: 3000, thinkingMs: 15000, fadeMs: 400 };

const VISIT_MIN_MS = 60;
const VISIT_MAX_MS = 120;
const TOUR_MAX_MS = 1500;
const MAX_STOPS = Math.floor(TOUR_MAX_MS / VISIT_MIN_MS);
const GLIDE_MIN_MS = 150;
const GLIDE_MAX_MS = 500;
const GLIDE_MS_PER_PX = 0.5;
/** The label trails the arrow slightly, so long moves read as travel. */
const LABEL_LAG_MS = 70;
const STACK_PX = 24;
const MAX_OUTLINES = 20;

/** Wandering inside the focused node: first pause after arriving, then hops. */
const WANDER_SETTLE_MS = 900;
const WANDER_MAX_HOP_PX = 260;
const WANDER_CANDIDATES = 60;
const WANDER = {
  working: { glide: [400, 900], dwell: [250, 700] },
  thinking: { glide: [700, 1400], dwell: [1200, 2400] },
} as const;

const reducedMotion = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : null;

export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Point {
  x: number;
  y: number;
}

export type CursorState = 'working' | 'thinking' | 'gone';

export interface AgentCursor {
  id: number;
  /** Arrow tip, screen space relative to the canvas. */
  x: number;
  y: number;
  /** Label offset from the arrow tip (the trailing effect). */
  labelDx: number;
  labelDy: number;
  name: string;
  model?: string;
  action?: string;
  color: string;
  state: CursorState;
  /** Dashed outlines around what the agent is working on. */
  outlines: Box[];
  /** The node being visited right now during a create. */
  visit: { key: string; id: string; box: Box } | null;
}

/** Canvas-space motion, so camera moves never animate. */
interface Glide {
  from: Point;
  to: Point;
  start: number;
  duration: number;
  /** 'out' for tours and corrections (snappy); 'inOut' for wandering (human-like). */
  ease: 'out' | 'inOut';
}

interface Tour {
  seq: number;
  stops: string[];
  start: number;
  stepMs: number;
}

/** A spot inside a node, relative to its box so it follows layout changes. */
interface Spot {
  id: string;
  fx: number;
  fy: number;
}

interface Wander {
  focusSeq: number;
  random: () => number;
  spot: Spot | null;
  nextAt: number;
}

interface Track {
  glide: Glide | null;
  tour: Tour | null;
  wander: Wander | null;
}

export interface Measure {
  box(id: string): Box | null;
  /** Descendants of a node, nearest first, for wandering over real content. */
  descendants(id: string, limit: number): string[];
  /** End of a text node's last line, for caret-like placement. */
  textEnd(id: string): Point | null;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

function position(g: Glide, now: number): Point {
  const t = g.duration <= 0 ? 1 : clamp((now - g.start) / g.duration, 0, 1);
  const e = g.ease === 'inOut' ? (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2) : 1 - (1 - t) ** 3;
  return { x: g.from.x + (g.to.x - g.from.x) * e, y: g.from.y + (g.to.y - g.from.y) * e };
}

/** Evenly samples at most `max` stops, always keeping the first and last. */
function sampleStops(ids: string[], max: number): string[] {
  if (ids.length <= max) return ids;
  return Array.from({ length: max }, (_, i) => ids[Math.round((i * (ids.length - 1)) / (max - 1))]!);
}

/** Small seeded PRNG (mulberry32): the same agent + focus wanders the same way. */
function seeded(seed: number): () => number {
  let t = seed >>> 0;
  return () => {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

const between = (random: () => number, [lo, hi]: readonly [number, number]) => lo + random() * (hi - lo);

export function cursorState(activeAt: number, now: number, touring: boolean): CursorState | null {
  const idle = now - activeAt;
  if (touring || idle < agentTiming.workingMs) return 'working';
  if (idle < agentTiming.thinkingMs) return 'thinking';
  if (idle < agentTiming.thinkingMs + agentTiming.fadeMs) return 'gone';
  return null;
}

export class CursorTracks {
  private readonly tracks = new Map<number, Track>();

  /**
   * Advances every agent's cursor to `now` (a rAF timestamp) and returns what
   * to draw. `fallbackId` is where an agent with no focus yet appears.
   */
  update(agents: Collaborator[], now: number, camera: Camera, measure: Measure, fallbackId: string | null): AgentCursor[] {
    for (const id of this.tracks.keys()) if (!agents.some((a) => a.clientId === id)) this.tracks.delete(id);
    const toWorld = (p: Point): Point => ({ x: (p.x - camera.x) / camera.zoom, y: (p.y - camera.y) / camera.zoom });
    const toScreen = (p: Point): Point => ({ x: p.x * camera.zoom + camera.x, y: p.y * camera.zoom + camera.y });
    const stacked = new Map<string, number>();
    const out: AgentCursor[] = [];

    for (const a of agents) {
      const view = a.agent;
      if (!view) continue;
      let track = this.tracks.get(a.clientId);
      if (!track) this.tracks.set(a.clientId, (track = { glide: null, tour: null, wander: null }));
      const focus = view.focus;

      // A create that arrived while we were watching becomes a visiting tour.
      if (focus?.kind === 'create' && focus.at > -Infinity && track.tour?.seq !== focus.seq) {
        const stops = sampleStops(focus.ids, MAX_STOPS);
        track.tour = { seq: focus.seq, stops, start: focus.at, stepMs: clamp(TOUR_MAX_MS / stops.length, VISIT_MIN_MS, VISIT_MAX_MS) };
      }
      const tour = track.tour && track.tour.seq === focus?.seq ? track.tour : null;
      const step = tour ? Math.floor((now - tour.start) / tour.stepMs) : -1;
      const touring = !!tour && step >= 0 && step < tour.stops.length;

      const state = cursorState(view.activeAt, now, touring);
      if (!state) continue;

      // Where the arrow is headed this frame: tour stop, wander spot, or the focus itself.
      let targetId: string | null;
      if (tour) targetId = tour.stops[clamp(step, 0, tour.stops.length - 1)]!;
      else targetId = focus?.ids[0] ?? null;
      const area = focus ? (focus.roots?.[0] ?? focus.ids[0]!) : null;
      if (focus && (track.wander?.focusSeq !== focus.seq || touring)) {
        track.wander = { focusSeq: focus.seq, random: seeded(a.clientId * 31 + focus.seq), spot: null, nextAt: now + WANDER_SETTLE_MS };
      }
      const wander = track.wander;
      if (wander && area && track.glide && state !== 'gone' && !touring && !reducedMotion?.matches && now >= wander.nextAt) {
        this.hop(track.glide, wander, area, state, now, camera, measure, toWorld);
      }
      let target: Point | null = null;
      if (wander?.spot && !touring) {
        const b = measure.box(wander.spot.id);
        if (b) target = { x: b.x + b.w * wander.spot.fx, y: b.y + b.h * wander.spot.fy };
        else wander.spot = null;
      }
      if (!target && targetId && focus?.kind === 'text' && !tour) target = measure.textEnd(targetId);
      if (!target && targetId) {
        const b = measure.box(targetId);
        if (b) target = { x: b.x, y: b.y };
      }
      if (!target && !track.glide && fallbackId) {
        const b = measure.box(fallbackId);
        if (b) target = { x: b.x, y: b.y };
      }

      if (target) {
        const to = toWorld(target);
        const g = track.glide;
        if (!g) track.glide = { from: to, to, start: now, duration: 0, ease: 'out' };
        else if (Math.abs(g.to.x - to.x) + Math.abs(g.to.y - to.y) > 0.5) {
          const from = position(g, now);
          const px = Math.hypot(to.x - from.x, to.y - from.y) * camera.zoom;
          let duration = clamp(GLIDE_MIN_MS + px * GLIDE_MS_PER_PX, GLIDE_MIN_MS, GLIDE_MAX_MS);
          if (touring) duration = Math.min(duration, tour!.stepMs);
          track.glide = { from, to, start: now, duration, ease: 'out' };
        }
      }
      const glide = track.glide;
      if (!glide) continue;

      const tip = toScreen(position(glide, now));
      const trail = toScreen(position(glide, now - LABEL_LAG_MS));
      // Agents parked on the same spot stack instead of overlapping.
      const spot = `${Math.round(glide.to.x)},${Math.round(glide.to.y)}`;
      const stack = stacked.get(spot) ?? 0;
      stacked.set(spot, stack + 1);

      const outlineIds = state === 'working' && focus ? (focus.roots ?? focus.ids).slice(0, MAX_OUTLINES) : [];
      const visitBox = touring ? measure.box(targetId!) : null;
      out.push({
        id: a.clientId,
        x: tip.x,
        y: tip.y + stack * STACK_PX,
        labelDx: trail.x - tip.x,
        labelDy: trail.y - tip.y,
        name: a.name,
        model: view.model,
        action: view.action,
        color: a.color,
        state,
        outlines: outlineIds.map((id) => measure.box(id)).filter((b): b is Box => b !== null),
        visit: visitBox ? { key: `${tour!.seq}:${step}`, id: targetId!, box: visitBox } : null,
      });
    }
    return out;
  }

  /** Picks the next spot to wander to inside `area` and starts gliding there. */
  private hop(
    glide: Glide,
    wander: Wander,
    area: string,
    state: CursorState,
    now: number,
    camera: Camera,
    measure: Measure,
    toWorld: (p: Point) => Point,
  ): void {
    const pace = state === 'working' ? WANDER.working : WANDER.thinking;
    const { random } = wander;
    const areaBox = measure.box(area);
    if (!areaBox) return;
    const here = position(glide, now);
    const hereScreen = { x: here.x * camera.zoom + camera.x, y: here.y * camera.zoom + camera.y };

    // Prefer real content (children's boxes) near the cursor; thinking stays in the area itself.
    const candidates =
      state === 'working'
        ? [area, ...measure.descendants(area, WANDER_CANDIDATES)].filter((id) => {
            const b = measure.box(id);
            return b && b.w > 6 && b.h > 6 && Math.hypot(b.x - hereScreen.x, b.y - hereScreen.y) < WANDER_MAX_HOP_PX * 1.5;
          })
        : [area];
    const id = candidates[Math.floor(random() * candidates.length)] ?? area;
    const box = measure.box(id) ?? areaBox;
    // Toward the start of content, the way a pointer rests on a heading or label.
    let spot: Spot = { id, fx: 0.05 + random() * 0.6, fy: 0.15 + random() * 0.6 };
    let p = { x: box.x + box.w * spot.fx, y: box.y + box.h * spot.fy };
    const dist = Math.hypot(p.x - hereScreen.x, p.y - hereScreen.y);
    if (dist > WANDER_MAX_HOP_PX) {
      // Shorten long hops; both ends are inside the area, so the point stays inside too.
      const k = WANDER_MAX_HOP_PX / dist;
      p = { x: hereScreen.x + (p.x - hereScreen.x) * k, y: hereScreen.y + (p.y - hereScreen.y) * k };
      spot = { id: area, fx: (p.x - areaBox.x) / areaBox.w, fy: (p.y - areaBox.y) / areaBox.h };
    }
    const duration = between(random, pace.glide);
    wander.spot = spot;
    wander.nextAt = now + duration + between(random, pace.dwell);
    Object.assign(glide, { from: here, to: toWorld(p), start: now, duration, ease: 'inOut' });
  }
}
