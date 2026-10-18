import * as Y from 'yjs';
import { generateKeyBetween } from 'fractional-indexing';
import { createId } from './ids';
import {
  BREAKPOINTS,
  VOID_TAGS,
  isBreakpointId,
  isStyleProp,
  isValidTag,
  type Alignment,
  type ArtboardFrame,
  type Axis,
  type BreakpointId,
  type BreakpointStyles,
  type NodeType,
  type SceneNode,
  type SceneTree,
  type SemanticTag,
  type StyleMap,
  type StyleProp,
} from './schema';

/**
 * Transaction origins. Every mutation is tagged so undo, presence and audit
 * can tell a person's edit from an agent's.
 */
export const ORIGIN_LOCAL = 'local';
export const ORIGIN_AGENT = 'agent';
export const ORIGIN_SEED = 'seed';
export type Origin = string;

export type YNode = Y.Map<unknown>;

export interface CreateNodeInput {
  id?: string;
  type: NodeType;
  tag?: SemanticTag;
  name?: string;
  parentId?: string | null;
  /** Insert before this sibling; omitted or null appends. */
  beforeId?: string | null;
  text?: string;
  styles?: StyleMap;
  breakpoints?: BreakpointStyles;
  attributes?: Record<string, string>;
  frame?: ArtboardFrame;
}

export interface NodePatch {
  name?: string;
  tag?: SemanticTag;
  text?: string;
  hidden?: boolean;
  locked?: boolean;
  frame?: Partial<ArtboardFrame>;
  /** null or '' removes the property. */
  styles?: Partial<Record<StyleProp, string | null>>;
  /** Merged per breakpoint like `styles`; a null breakpoint clears all its overrides. */
  breakpoints?: Partial<Record<BreakpointId, Partial<Record<StyleProp, string | null>> | null>>;
  attributes?: Record<string, string | null>;
}

export interface Snapshot {
  format: 'weft';
  version: 1;
  nodes: SceneNode[];
}

/** One node's share of an align or distribute command. */
export interface PlannedPatch {
  id: string;
  patch: NodePatch;
}

export class GridError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GridError';
  }
}

const ATTRIBUTE_NAME = /^[a-zA-Z_:][-a-zA-Z0-9_:.]*$/;
const UNSAFE_STYLE_VALUE = /[;{}<>]/;
const DEFAULT_FRAME: ArtboardFrame = { x: 0, y: 0, width: 1280, height: 800, heightMode: 'hug' };
/** Space left between an artboard and a duplicate placed beside it. */
const ARTBOARD_GAP = 100;

export function readNode(y: YNode): SceneNode {
  const styles = y.get('styles') as Y.Map<string> | undefined;
  const attributes = y.get('attributes') as Y.Map<string> | undefined;
  const node: SceneNode = {
    id: y.get('id') as string,
    type: y.get('type') as NodeType,
    name: (y.get('name') as string | undefined) ?? '',
    tag: y.get('tag') as SemanticTag,
    parentId: (y.get('parentId') as string | null | undefined) ?? null,
    index: (y.get('index') as string | undefined) ?? 'a0',
    styles: styles ? (styles.toJSON() as StyleMap) : {},
    attributes: attributes ? (attributes.toJSON() as Record<string, string>) : {},
  };
  const breakpoints = y.get('breakpoints') as Y.Map<Y.Map<string>> | undefined;
  if (breakpoints) {
    const out: BreakpointStyles = {};
    for (const [bp, map] of breakpoints) if (map.size > 0) out[bp as BreakpointId] = map.toJSON() as StyleMap;
    if (Object.keys(out).length) node.breakpoints = out;
  }
  const text = y.get('text');
  if (typeof text === 'string') node.text = text;
  const frame = y.get('frame') as ArtboardFrame | undefined;
  if (frame) node.frame = { ...frame };
  if (y.get('hidden') === true) node.hidden = true;
  if (y.get('locked') === true) node.locked = true;
  return node;
}

export function sortSiblings<T extends { index: string; id: string }>(list: readonly T[]): T[] {
  return [...list].sort((a, b) =>
    a.index < b.index ? -1 : a.index > b.index ? 1 : a.id < b.id ? -1 : a.id > b.id ? 1 : 0,
  );
}

/** Node ids touched by a batch of observeDeep events on the nodes map. */
export function changedNodeIds(events: ReadonlyArray<Y.YEvent<any>>, nodes: Y.Map<YNode>): Set<string> {
  const ids = new Set<string>();
  for (const event of events) {
    if (event.target === nodes) {
      for (const key of (event as Y.YMapEvent<unknown>).keysChanged) ids.add(key);
    } else {
      const key = event.path[0];
      if (typeof key === 'string') ids.add(key);
    }
  }
  return ids;
}

function normalizeFrame(frame: ArtboardFrame): ArtboardFrame {
  for (const key of ['x', 'y', 'width', 'height'] as const) {
    if (!Number.isFinite(frame[key])) throw new GridError('Artboard frame values must be finite numbers');
  }
  if (frame.heightMode !== undefined && frame.heightMode !== 'fixed' && frame.heightMode !== 'hug') {
    throw new GridError(`Artboard heightMode must be "fixed" or "hug"`);
  }
  const out: ArtboardFrame = {
    x: frame.x,
    y: frame.y,
    width: Math.max(1, frame.width),
    height: Math.max(1, frame.height),
  };
  if (frame.heightMode === 'hug') out.heightMode = 'hug';
  return out;
}

/** Merges a frame patch. Setting a height without a mode makes the artboard fixed. */
function patchFrame(frame: ArtboardFrame, patch: Partial<ArtboardFrame>): ArtboardFrame {
  const heightMode = patch.heightMode ?? (patch.height !== undefined ? 'fixed' : frame.heightMode);
  return normalizeFrame({ ...frame, ...patch, heightMode });
}

function assertStyles(styles: Partial<Record<string, string | null>>): void {
  for (const [key, value] of Object.entries(styles)) {
    if (!isStyleProp(key)) throw new GridError(`Unknown style property "${key}"`);
    if (value === null || value === undefined) continue;
    if (typeof value !== 'string') throw new GridError(`Style "${key}" must be a string`);
    if (UNSAFE_STYLE_VALUE.test(value)) throw new GridError(`Style "${key}" contains forbidden characters`);
  }
}

function assertBreakpoints(breakpoints: Record<string, Partial<Record<string, string | null>> | null | undefined>): void {
  for (const [bp, styles] of Object.entries(breakpoints)) {
    if (!isBreakpointId(bp)) throw new GridError(`Unknown breakpoint "${bp}"`);
    if (styles) assertStyles(styles);
  }
}

/**
 * CSS for breakpoint overrides, keyed by `[data-gf-id]`. `!important` is
 * needed on the canvas, where base styles are inline. `at` wraps each block:
 * the canvas uses an artboard container query, export uses a media query.
 */
export function compileBreakpointCSS(
  nodes: Iterable<SceneNode>,
  at: (maxWidth: number) => string = (w) => `@media (max-width: ${w}px)`,
): string {
  const blocks: string[] = [];
  const list = [...nodes];
  for (const bp of BREAKPOINTS) {
    const rules: string[] = [];
    for (const node of list) {
      const styles = node.breakpoints?.[bp.id];
      // Ids go into a selector; generated ids are always safe, imported ones may not be.
      if (!styles || !/^[\w-]+$/.test(node.id)) continue;
      const decls = Object.entries(styles)
        // Hidden layers stay hidden whatever the breakpoint says.
        .filter(([prop]) => !(node.hidden && prop === 'display'))
        .map(([prop, value]) => `${prop.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}: ${value} !important;`);
      if (decls.length) rules.push(`  [data-gf-id="${node.id}"] { ${decls.join(' ')} }`);
    }
    if (rules.length) blocks.push(`${at(bp.maxWidth)} {\n${rules.join('\n')}\n}`);
  }
  return blocks.join('\n');
}

function assertAttributes(attributes: Record<string, string | null>): void {
  for (const [name, value] of Object.entries(attributes)) {
    if (!ATTRIBUTE_NAME.test(name)) throw new GridError(`Invalid attribute name "${name}"`);
    if (/^on/i.test(name)) throw new GridError(`Event handler attributes are not allowed ("${name}")`);
    if (name === 'style' || name === 'class') throw new GridError(`Use styles instead of the "${name}" attribute`);
    if (value !== null && typeof value !== 'string') throw new GridError(`Attribute "${name}" must be a string`);
    if (typeof value === 'string' && /^\s*javascript:/i.test(value)) throw new GridError(`Unsafe URL in "${name}"`);
  }
}

/**
 * The scene graph. All reads and writes go through this class so that the
 * canvas UI, keyboard shortcuts and AI agents share one validated command set.
 */
export class GridDocument {
  readonly ydoc: Y.Doc;
  readonly nodes: Y.Map<YNode>;

  constructor(ydoc: Y.Doc = new Y.Doc()) {
    this.ydoc = ydoc;
    this.nodes = ydoc.getMap<YNode>('nodes');
  }

  transact<T>(fn: () => T, origin: Origin = ORIGIN_LOCAL): T {
    let result!: T;
    this.ydoc.transact(() => {
      result = fn();
    }, origin);
    return result;
  }

  // ── Reads ────────────────────────────────────────────────────────────────

  has(id: string): boolean {
    return this.nodes.has(id);
  }

  getNode(id: string): SceneNode | undefined {
    const y = this.nodes.get(id);
    return y ? readNode(y) : undefined;
  }

  getNodes(): SceneNode[] {
    return [...this.nodes.values()].map(readNode);
  }

  getChildren(parentId: string | null): SceneNode[] {
    return sortSiblings(this.getNodes().filter((n) => n.parentId === parentId));
  }

  getDescendantIds(id: string): string[] {
    const byParent = this.childIdsByParent();
    const out: string[] = [];
    const stack = [...(byParent.get(id) ?? [])];
    while (stack.length) {
      const next = stack.pop()!;
      out.push(next);
      stack.push(...(byParent.get(next) ?? []));
    }
    return out;
  }

  /** Nested JSON view of a subtree (or every artboard when rootId is omitted). */
  getTree(rootId?: string): SceneTree[] {
    const all = new Map(this.getNodes().map((n) => [n.id, n]));
    const byParent = new Map<string | null, SceneNode[]>();
    for (const n of all.values()) {
      const list = byParent.get(n.parentId) ?? [];
      list.push(n);
      byParent.set(n.parentId, list);
    }
    const build = (n: SceneNode): SceneTree => {
      const { parentId: _p, index: _i, ...rest } = n;
      return { ...rest, children: sortSiblings(byParent.get(n.id) ?? []).map(build) };
    };
    if (rootId) {
      const root = all.get(rootId);
      if (!root) throw new GridError(`Node ${rootId} not found`);
      return [build(root)];
    }
    return sortSiblings(byParent.get(null) ?? []).map(build);
  }

  // ── Commands ─────────────────────────────────────────────────────────────

  createNode(input: CreateNodeInput, origin: Origin = ORIGIN_LOCAL): string {
    const parentId = input.parentId ?? null;
    if (parentId === null) {
      if (input.type !== 'frame') throw new GridError('Top-level nodes must be frames (artboards)');
    } else {
      this.assertCanContain(parentId);
    }
    const tag = input.tag ?? (input.type === 'text' ? 'p' : 'div');
    if (!isValidTag(input.type, tag)) throw new GridError(`Tag <${tag}> is not valid for a ${input.type} node`);
    if (input.styles) assertStyles(input.styles);
    if (input.breakpoints) assertBreakpoints(input.breakpoints);
    if (input.attributes) assertAttributes(input.attributes);
    const id = input.id ?? createId(input.type === 'text' ? 't' : 'f');
    if (this.nodes.has(id)) throw new GridError(`Node ${id} already exists`);
    const index = this.indexFor(parentId, input.beforeId ?? null);

    this.transact(() => {
      const y = new Y.Map<unknown>();
      this.nodes.set(id, y);
      y.set('id', id);
      y.set('type', input.type);
      y.set('tag', tag);
      y.set('name', input.name ?? defaultName(input.type, tag));
      y.set('parentId', parentId);
      y.set('index', index);
      if (input.type === 'text') y.set('text', input.text ?? '');
      if (parentId === null) y.set('frame', normalizeFrame(input.frame ?? DEFAULT_FRAME));
      const styles = new Y.Map<string>();
      y.set('styles', styles);
      for (const [k, v] of Object.entries(input.styles ?? {})) if (v) styles.set(k, v.trim());
      if (input.breakpoints) writeBreakpoints(y, input.breakpoints);
      const attributes = new Y.Map<string>();
      y.set('attributes', attributes);
      for (const [k, v] of Object.entries(input.attributes ?? {})) attributes.set(k, v);
    }, origin);
    return id;
  }

  updateNode(id: string, patch: NodePatch, origin: Origin = ORIGIN_LOCAL): void {
    const y = this.requireY(id);
    const type = y.get('type') as NodeType;
    if (patch.tag !== undefined) {
      if (!isValidTag(type, patch.tag)) throw new GridError(`Tag <${patch.tag}> is not valid for a ${type} node`);
      if (VOID_TAGS.has(patch.tag) && this.getDescendantIds(id).length > 0) {
        throw new GridError(`<${patch.tag}> cannot have children`);
      }
    }
    if (patch.text !== undefined && type !== 'text') throw new GridError('Only text nodes have text');
    if (patch.frame && y.get('parentId') !== null) throw new GridError('Only artboards have a canvas frame');
    if (patch.styles) assertStyles(patch.styles);
    if (patch.breakpoints) assertBreakpoints(patch.breakpoints);
    if (patch.attributes) assertAttributes(patch.attributes);

    this.transact(() => {
      if (patch.name !== undefined) y.set('name', patch.name);
      if (patch.tag !== undefined) y.set('tag', patch.tag);
      if (patch.text !== undefined) y.set('text', patch.text);
      for (const flag of ['hidden', 'locked'] as const) {
        if (patch[flag] === true) y.set(flag, true);
        else if (patch[flag] === false) y.delete(flag);
      }
      if (patch.frame) {
        y.set('frame', patchFrame(y.get('frame') as ArtboardFrame, patch.frame));
      }
      if (patch.styles) {
        const styles = y.get('styles') as Y.Map<string>;
        for (const [k, v] of Object.entries(patch.styles)) {
          if (v === null || v === undefined || v.trim() === '') styles.delete(k);
          else styles.set(k, v.trim());
        }
      }
      if (patch.breakpoints) writeBreakpoints(y, patch.breakpoints);
      if (patch.attributes) {
        const attributes = y.get('attributes') as Y.Map<string>;
        for (const [k, v] of Object.entries(patch.attributes)) {
          if (v === null) attributes.delete(k);
          else attributes.set(k, v);
        }
      }
    }, origin);
  }

  /** Deletes nodes and all their descendants. */
  deleteNodes(ids: readonly string[], origin: Origin = ORIGIN_LOCAL): void {
    const doomed = new Set<string>();
    for (const id of ids) {
      if (!this.nodes.has(id)) continue;
      doomed.add(id);
      for (const d of this.getDescendantIds(id)) doomed.add(d);
    }
    if (doomed.size === 0) return;
    this.transact(() => {
      for (const id of doomed) this.nodes.delete(id);
    }, origin);
  }

  moveNode(id: string, parentId: string | null, beforeId: string | null = null, origin: Origin = ORIGIN_LOCAL): void {
    const y = this.requireY(id);
    if (parentId === null) {
      if (y.get('type') !== 'frame') throw new GridError('Top-level nodes must be frames (artboards)');
    } else {
      this.assertCanContain(parentId);
      for (let cur: string | null = parentId; cur !== null; cur = (this.nodes.get(cur)?.get('parentId') as string | null) ?? null) {
        if (cur === id) throw new GridError('Cannot move a node into itself or its descendants');
      }
    }
    if (beforeId === id) return;
    const index = this.indexFor(parentId, beforeId, id);
    this.transact(() => {
      const wasRoot = y.get('parentId') === null;
      y.set('parentId', parentId);
      y.set('index', index);
      if (parentId === null && !wasRoot) y.set('frame', { ...DEFAULT_FRAME });
      if (parentId !== null && wasRoot) y.delete('frame');
    }, origin);
  }

  /**
   * Aligns nodes. Artboards line up by their canvas frames (two or more).
   * Elements are laid out by CSS, so alignment maps to their flex or grid
   * parent: the flex main axis sets the parent's justifyContent, the cross
   * axis the child's alignSelf, and grid children get justifySelf/alignSelf.
   * Returns the ids it changed (which may include parents).
   */
  alignNodes(ids: readonly string[], align: Alignment, origin: Origin = ORIGIN_LOCAL): string[] {
    return this.applyPlan(this.planAlign(ids, align), origin);
  }

  /**
   * Spaces nodes evenly along an axis: artboards (three or more) get equal
   * gaps between their frames, flex children get justifyContent:
   * space-between on their parent when the axis is its main axis.
   */
  distributeNodes(ids: readonly string[], axis: Axis, origin: Origin = ORIGIN_LOCAL): string[] {
    return this.applyPlan(this.planDistribute(ids, axis), origin);
  }

  /** The patches alignNodes would apply; throws a GridError when it doesn't apply. */
  planAlign(ids: readonly string[], align: Alignment): PlannedPatch[] {
    const { artboards, elements } = this.splitForLayout(ids);
    const axis: Axis = align === 'left' || align === 'center' || align === 'right' ? 'horizontal' : 'vertical';
    const edge = align === 'left' || align === 'top' ? 'start' : align === 'right' || align === 'bottom' ? 'end' : 'center';
    const plan = new PatchPlan();

    if (artboards.length === 1) throw new GridError('Select at least two artboards to align them');
    if (artboards.length > 1) {
      const [pos, size] = axis === 'horizontal' ? (['x', 'width'] as const) : (['y', 'height'] as const);
      const lo = Math.min(...artboards.map((n) => n.frame![pos]));
      const hi = Math.max(...artboards.map((n) => n.frame![pos] + n.frame![size]));
      for (const n of artboards) {
        const f = n.frame!;
        const to = edge === 'start' ? lo : edge === 'end' ? hi - f[size] : Math.round((lo + hi - f[size]) / 2);
        if (to !== f[pos]) plan.frame(n.id, { [pos]: to });
      }
    }
    for (const el of elements) {
      const parent = this.getNode(el.parentId!)!;
      const layout = layoutOf(parent);
      if (!layout) throw new GridError(notALayout(parent));
      if (layout.kind === 'grid') plan.style(el.id, axis === 'horizontal' ? 'justifySelf' : 'alignSelf', edge);
      else if (axis === layout.main) plan.style(parent.id, 'justifyContent', edge);
      else plan.style(el.id, 'alignSelf', edge);
    }
    return plan.list();
  }

  /** The patches distributeNodes would apply; throws a GridError when it doesn't apply. */
  planDistribute(ids: readonly string[], axis: Axis): PlannedPatch[] {
    const { artboards, elements } = this.splitForLayout(ids);
    const plan = new PatchPlan();

    if (artboards.length > 0 && artboards.length < 3) throw new GridError('Select at least three artboards to distribute them');
    if (artboards.length >= 3) {
      const [pos, size] = axis === 'horizontal' ? (['x', 'width'] as const) : (['y', 'height'] as const);
      const sorted = [...artboards].sort((a, b) => a.frame![pos] - b.frame![pos]);
      const first = sorted[0]!.frame!;
      const last = sorted.at(-1)!.frame!;
      const total = sorted.reduce((sum, n) => sum + n.frame![size], 0);
      const gap = (last[pos] + last[size] - first[pos] - total) / (sorted.length - 1);
      let cursor = first[pos] + first[size] + gap;
      for (const n of sorted.slice(1, -1)) {
        const to = Math.round(cursor);
        if (to !== n.frame![pos]) plan.frame(n.id, { [pos]: to });
        cursor += n.frame![size] + gap;
      }
    }
    for (const parentId of new Set(elements.map((el) => el.parentId!))) {
      const parent = this.getNode(parentId)!;
      const layout = layoutOf(parent);
      if (!layout) throw new GridError(notALayout(parent));
      if (layout.kind === 'grid') {
        throw new GridError(`"${parent.name}" is a grid: its children follow the tracks, so adjust gap or column sizes instead`);
      }
      if (layout.main !== axis) {
        throw new GridError(`"${parent.name}" lays its children out ${layout.main === 'horizontal' ? 'in a row' : 'in a column'}; distribute along that axis or change its flexDirection`);
      }
      plan.style(parent.id, 'justifyContent', 'space-between');
    }
    return plan.list();
  }

  /**
   * Deep-copies a node and its subtree with fresh ids, returning the copy's id.
   * A copied artboard lands to the right of the artboards on its row unless
   * `frame` places it (pass just `width` to clone it at another breakpoint's
   * width); any other node is inserted right after the original.
   */
  duplicateNode(
    id: string,
    options: { name?: string; frame?: Partial<ArtboardFrame> } = {},
    origin: Origin = ORIGIN_LOCAL,
  ): string {
    const [tree] = this.getTree(id);
    const source = this.getNode(id)!;
    if (options.frame && source.parentId !== null) throw new GridError('Only artboards have a canvas frame');
    const siblings = this.getChildren(source.parentId);
    const beforeId = siblings[siblings.findIndex((n) => n.id === id) + 1]?.id ?? null;
    let frame: ArtboardFrame | undefined;
    if (source.frame) {
      const patch = { ...options.frame };
      // A copy at another width can't keep the original's content height: hug it.
      if (patch.width !== undefined && patch.height === undefined) patch.heightMode ??= 'hug';
      frame = patchFrame(source.frame, patch);
      if (options.frame?.x === undefined) {
        const f = frame;
        const row = siblings.flatMap((n) => (n.frame && n.frame.y < f.y + f.height && n.frame.y + n.frame.height > f.y ? [n.frame] : []));
        frame.x = Math.max(...row.map((r) => r.x + r.width)) + ARTBOARD_GAP;
      }
    }
    const copy = (node: SceneTree, parentId: string | null, before: string | null, root: boolean): string => {
      const newId = this.createNode(
        {
          type: node.type,
          tag: node.tag,
          name: root ? (options.name ?? node.name) : node.name,
          parentId,
          beforeId: before,
          text: node.text,
          styles: node.styles,
          breakpoints: node.breakpoints,
          attributes: node.attributes,
          frame: root ? frame : node.frame,
        },
        origin,
      );
      if (node.hidden || node.locked) this.updateNode(newId, { hidden: node.hidden, locked: node.locked }, origin);
      for (const child of node.children) copy(child, newId, null, false);
      return newId;
    };
    return this.transact(() => copy(tree!, source.parentId, beforeId, true), origin);
  }

  toSnapshot(): Snapshot {
    return { format: 'weft', version: 1, nodes: sortSiblings(this.getNodes()) };
  }

  loadSnapshot(snapshot: Snapshot, origin: Origin = ORIGIN_LOCAL): void {
    // 'gridforge' is the pre-rename format tag; still accepted on load.
    if ((snapshot.format as string) !== 'weft' && (snapshot.format as string) !== 'gridforge' || snapshot.version !== 1) throw new GridError('Unsupported snapshot');
    this.transact(() => {
      this.nodes.clear();
      const byParent = new Map<string | null, SceneNode[]>();
      for (const n of snapshot.nodes) {
        const list = byParent.get(n.parentId) ?? [];
        list.push(n);
        byParent.set(n.parentId, list);
      }
      const insert = (parentId: string | null) => {
        for (const n of sortSiblings(byParent.get(parentId) ?? [])) {
          this.createNode({ ...n, parentId }, origin);
          if (n.hidden || n.locked) this.updateNode(n.id, { hidden: n.hidden, locked: n.locked }, origin);
          insert(n.id);
        }
      };
      insert(null);
    }, origin);
  }

  // ── Internals ────────────────────────────────────────────────────────────

  private requireY(id: string): YNode {
    const y = this.nodes.get(id);
    if (!y) throw new GridError(`Node ${id} not found`);
    return y;
  }

  private applyPlan(plan: PlannedPatch[], origin: Origin): string[] {
    this.transact(() => {
      for (const { id, patch } of plan) this.updateNode(id, patch, origin);
    }, origin);
    return plan.map((p) => p.id);
  }

  private splitForLayout(ids: readonly string[]): { artboards: SceneNode[]; elements: SceneNode[] } {
    if (ids.length === 0) throw new GridError('Nothing to arrange');
    const nodes = [...new Set(ids)].map((id) => {
      const node = this.getNode(id);
      if (!node) throw new GridError(`Node ${id} not found`);
      return node;
    });
    return { artboards: nodes.filter((n) => n.parentId === null), elements: nodes.filter((n) => n.parentId !== null) };
  }

  private assertCanContain(parentId: string): void {
    const parent = this.nodes.get(parentId);
    if (!parent) throw new GridError(`Parent ${parentId} not found`);
    if (parent.get('type') !== 'frame' || VOID_TAGS.has(parent.get('tag') as string)) {
      throw new GridError(`Node ${parentId} cannot contain children`);
    }
  }

  private childIdsByParent(): Map<string | null, string[]> {
    const map = new Map<string | null, string[]>();
    for (const [id, y] of this.nodes) {
      const parentId = (y.get('parentId') as string | null | undefined) ?? null;
      const list = map.get(parentId) ?? [];
      list.push(id);
      map.set(parentId, list);
    }
    return map;
  }

  private indexFor(parentId: string | null, beforeId: string | null, excludeId?: string): string {
    const siblings = sortSiblings(
      [...this.nodes.values()]
        .filter((y) => ((y.get('parentId') as string | null | undefined) ?? null) === parentId && y.get('id') !== excludeId)
        .map((y) => ({ id: y.get('id') as string, index: y.get('index') as string })),
    );
    const last = siblings.at(-1)?.index ?? null;
    if (beforeId === null) return generateKeyBetween(last, null);
    const i = siblings.findIndex((s) => s.id === beforeId);
    if (i < 0) throw new GridError(`${beforeId} is not a child of ${parentId ?? 'the page'}`);
    const prev = siblings[i - 1]?.index ?? null;
    const next = siblings[i]!.index;
    // Concurrent inserts can produce equal keys; fall back to appending.
    return prev !== null && prev >= next ? generateKeyBetween(last, null) : generateKeyBetween(prev, next);
  }
}

/** How a container lays out its children, for align and distribute. */
function layoutOf(parent: SceneNode): { kind: 'flex' | 'grid'; main: Axis } | null {
  const display = parent.styles.display ?? '';
  if (display === 'grid' || display === 'inline-grid') return { kind: 'grid', main: 'horizontal' };
  if (display === 'flex' || display === 'inline-flex') {
    return { kind: 'flex', main: (parent.styles.flexDirection ?? 'row').startsWith('column') ? 'vertical' : 'horizontal' };
  }
  return null;
}

const notALayout = (parent: SceneNode) =>
  `"${parent.name}" isn't a flex or grid container; set its display to flex or grid to arrange its children`;

/** Collects per-node patches, merging several changes to one node. */
class PatchPlan {
  private patches = new Map<string, NodePatch>();

  private get(id: string): NodePatch {
    let patch = this.patches.get(id);
    if (!patch) this.patches.set(id, (patch = {}));
    return patch;
  }

  frame(id: string, frame: Partial<ArtboardFrame>): void {
    const patch = this.get(id);
    patch.frame = { ...patch.frame, ...frame };
  }

  style(id: string, prop: StyleProp, value: string): void {
    const patch = this.get(id);
    patch.styles = { ...patch.styles, [prop]: value };
  }

  list(): PlannedPatch[] {
    return [...this.patches].map(([id, patch]) => ({ id, patch }));
  }
}

function writeBreakpoints(y: YNode, patch: NonNullable<NodePatch['breakpoints']>): void {
  let all = y.get('breakpoints') as Y.Map<Y.Map<string>> | undefined;
  if (!all) {
    all = new Y.Map<Y.Map<string>>();
    y.set('breakpoints', all);
  }
  for (const [bp, styles] of Object.entries(patch)) {
    if (styles === null) {
      all.delete(bp);
      continue;
    }
    if (!styles) continue;
    let map = all.get(bp);
    if (!map) {
      map = new Y.Map<string>();
      all.set(bp, map);
    }
    for (const [k, v] of Object.entries(styles)) {
      if (v === null || v === undefined || v.trim() === '') map.delete(k);
      else map.set(k, v.trim());
    }
    if (map.size === 0) all.delete(bp);
  }
}

function defaultName(type: NodeType, tag: string): string {
  if (type === 'text') return 'Text';
  return tag === 'div' ? 'Frame' : tag.charAt(0).toUpperCase() + tag.slice(1);
}
