import * as Y from 'yjs';
import { generateKeyBetween } from 'fractional-indexing';
import { createId } from './ids';
import {
  VOID_TAGS,
  isStyleProp,
  isValidTag,
  type ArtboardFrame,
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
  attributes?: Record<string, string | null>;
}

export interface Snapshot {
  format: 'weft';
  version: 1;
  nodes: SceneNode[];
}

export class GridError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GridError';
  }
}

const ATTRIBUTE_NAME = /^[a-zA-Z_:][-a-zA-Z0-9_:.]*$/;
const UNSAFE_STYLE_VALUE = /[;{}<>]/;
const DEFAULT_FRAME: ArtboardFrame = { x: 0, y: 0, width: 1280, height: 800 };

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
  for (const v of Object.values(frame)) {
    if (!Number.isFinite(v)) throw new GridError('Artboard frame values must be finite numbers');
  }
  return {
    x: frame.x,
    y: frame.y,
    width: Math.max(1, frame.width),
    height: Math.max(1, frame.height),
  };
}

function assertStyles(styles: Partial<Record<string, string | null>>): void {
  for (const [key, value] of Object.entries(styles)) {
    if (!isStyleProp(key)) throw new GridError(`Unknown style property "${key}"`);
    if (value === null || value === undefined) continue;
    if (typeof value !== 'string') throw new GridError(`Style "${key}" must be a string`);
    if (UNSAFE_STYLE_VALUE.test(value)) throw new GridError(`Style "${key}" contains forbidden characters`);
  }
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
        y.set('frame', normalizeFrame({ ...(y.get('frame') as ArtboardFrame), ...patch.frame }));
      }
      if (patch.styles) {
        const styles = y.get('styles') as Y.Map<string>;
        for (const [k, v] of Object.entries(patch.styles)) {
          if (v === null || v === undefined || v.trim() === '') styles.delete(k);
          else styles.set(k, v.trim());
        }
      }
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

function defaultName(type: NodeType, tag: string): string {
  if (type === 'text') return 'Text';
  return tag === 'div' ? 'Frame' : tag.charAt(0).toUpperCase() + tag.slice(1);
}
