// Ways to break a good layout, what a person would say about each, and how to
// tell from the measured page whether a fix put it right.
//
// A breakage is applied to a copy of a real document, so the layout it starts
// from is one somebody made on purpose. Checks read measured boxes (get_layout),
// not stored styles, so any fix that looks right passes: a row put back with
// flexDirection or with a grid, a gap restored with a token or with margins.
import type { GridDocument, SceneNode } from '../../packages/core/src/index';

export interface Measured {
  id: string;
  box?: { x: number; y: number; width: number; height: number };
  computed?: Record<string, string>;
  overflowing?: boolean;
  visible?: boolean;
  error?: string;
}
export type Layout = Map<string, Measured>;

export interface CheckContext {
  target: string;
  /** The target's parent (its container) and its children, by id. */
  parent?: string;
  children: string[];
  /** The page before it was broken, once broken, and after the model's turn. */
  before: Layout;
  broken: Layout;
  after: Layout;
  /** Undo steps the turn left. */
  edits: number;
}

export interface Breakage {
  name: string;
  /** How often it's picked, relative to the others. */
  weight: number;
  /** Layers this breakage can be applied to. */
  candidates(doc: GridDocument): SceneNode[];
  /** Breaks `node`; returns words the prompts can use (`{n}`). */
  apply(doc: GridDocument, node: SceneNode, before: Layout): Record<string, string> | void;
  /** The prompts read as well with the children selected as with the layer ("these"): a person may select either. */
  childrenSelectable?: boolean;
  /** Nothing to see when it's applied (the control): skip the check that it changed the page. */
  invisible?: boolean;
  /** What a person would say, vague to specific. */
  prompts: string[];
  /** Why the fix didn't work, or undefined when it did. */
  check(ctx: CheckContext): string | undefined;
}

const ORIGIN = 'local';

// ── Reading the doc ──────────────────────────────────────────────────────────

const isFlex = (n: SceneNode) => /flex/.test(n.styles.display ?? '');
const isGrid = (n: SceneNode) => /grid/.test(n.styles.display ?? '');
const shown = (doc: GridDocument, n: SceneNode) => doc.getChildren(n.id).filter((c) => !c.hidden);

/** Inside a main component, or one: breaking it would change every instance, which is a different task. */
function inComponent(doc: GridDocument, n: SceneNode): boolean {
  for (let cur: SceneNode | undefined = n; cur; cur = cur.parentId ? doc.getNode(cur.parentId) : undefined) if (cur.component) return true;
  return false;
}

/** Ordinary layers in artboards: not artboards, instances, hidden or component layers. */
function layers(doc: GridDocument): SceneNode[] {
  return doc.getNodes().filter((n) => n.parentId !== null && n.type !== 'text' && !n.instance && !n.hidden && !inComponent(doc, n));
}

// ── Reading the measured page ────────────────────────────────────────────────

type Box = NonNullable<Measured['box']>;
const boxes = (layout: Layout, ids: string[]): Box[] => ids.flatMap((id) => (layout.get(id)?.visible && layout.get(id)?.box ? [layout.get(id)!.box!] : []));

/** How the first two children sit: side by side, or one under the other. */
function orientation(kids: Box[]): 'row' | 'column' | undefined {
  if (kids.length < 2) return undefined;
  const [a, b] = kids;
  return Math.abs(a!.y - b!.y) < Math.min(a!.height, b!.height) / 2 && b!.x > a!.x ? 'row' : 'column';
}

/** The smallest space between neighbours along the way they're laid out. */
function spacing(kids: Box[]): number | undefined {
  const o = orientation(kids);
  if (!o) return undefined;
  let min = Infinity;
  for (let i = 1; i < kids.length; i++) {
    const [a, b] = [kids[i - 1]!, kids[i]!];
    // Only neighbours in the same row (rows wrap) or column.
    if (o === 'row' && Math.abs(a.y - b.y) < Math.min(a.height, b.height) / 2) min = Math.min(min, b.x - (a.x + a.width));
    if (o === 'column') min = Math.min(min, b.y - (a.y + a.height));
  }
  return Number.isFinite(min) ? min : undefined;
}

/** How far the children sit in from the container's edges, at the closest. */
function inset(container: Box, kids: Box[]): number | undefined {
  if (!kids.length) return undefined;
  const left = Math.min(...kids.map((k) => k.x)) - container.x;
  const top = Math.min(...kids.map((k) => k.y)) - container.y;
  return Math.min(left, top);
}

/** Children in the first row. */
const columns = (kids: Box[]) => (kids.length ? kids.filter((k) => Math.abs(k.y - kids[0]!.y) < 2).length : 0);

const sameOrientation = (ctx: CheckContext) => {
  const [was, now] = [orientation(boxes(ctx.before, ctx.children)), orientation(boxes(ctx.after, ctx.children))];
  return was === now ? undefined : `children are laid out as a ${now ?? 'nothing'}, were a ${was}`;
};

const spacedAgain = (ctx: CheckContext) => {
  const was = spacing(boxes(ctx.before, ctx.children)) ?? 0;
  const now = spacing(boxes(ctx.after, ctx.children));
  if (now === undefined) return 'children not measured';
  return now >= Math.max(4, was / 2) ? undefined : `children are ${Math.round(now)}px apart, were ${Math.round(was)}px`;
};

// ── The breakages ────────────────────────────────────────────────────────────

export const BREAKAGES: Breakage[] = [
  {
    name: 'stacked-row',
    childrenSelectable: true,
    weight: 3,
    candidates: (doc) => layers(doc).filter((n) => isFlex(n) && (n.styles.flexDirection ?? 'row') === 'row' && shown(doc, n).length >= 2),
    apply: (doc, n) => doc.updateNode(n.id, { styles: { flexDirection: 'column' } }, ORIGIN),
    prompts: [
      'These should be side by side, not stacked.',
      'Put these in a row.',
      'This got stacked vertically by mistake, fix it.',
      'Lay these out horizontally.',
      'Why is this a column? It should be a row.',
    ],
    check: sameOrientation,
  },
  {
    name: 'no-gap',
    childrenSelectable: true,
    weight: 3,
    candidates: (doc) => layers(doc).filter((n) => (isFlex(n) || isGrid(n)) && n.styles.gap && shown(doc, n).length >= 2),
    apply: (doc, n) => doc.updateNode(n.id, { styles: { gap: null, rowGap: null, columnGap: null } }, ORIGIN),
    prompts: [
      'The items are touching, add some space between them.',
      'Too cramped. Space these out.',
      "There's no gap between these.",
      'Add spacing between the items.',
      'These are jammed together.',
    ],
    check: (ctx) => sameOrientation(ctx) ?? spacedAgain(ctx),
  },
  {
    name: 'no-padding',
    weight: 2,
    candidates: (doc) =>
      layers(doc).filter((n) => Object.entries(n.styles).some(([k, v]) => k.startsWith('padding') && v && !/^0(px)?$/.test(v)) && shown(doc, n).length >= 1),
    apply: (doc, n) =>
      doc.updateNode(n.id, { styles: Object.fromEntries(Object.keys(n.styles).filter((k) => k.startsWith('padding')).map((k) => [k, null])) }, ORIGIN),
    prompts: [
      'The content is jammed against the edges.',
      'Give this some breathing room inside.',
      'Add padding.',
      'The content touches the edge here, fix it.',
      'This needs space around its contents.',
    ],
    check: (ctx) => {
      const box = ctx.after.get(ctx.target)?.box;
      const was = inset(ctx.before.get(ctx.target)!.box!, boxes(ctx.before, ctx.children)) ?? 0;
      const now = box && inset(box, boxes(ctx.after, ctx.children));
      if (now === undefined) return 'not measured';
      return now >= Math.max(4, was / 2) ? undefined : `content is ${Math.round(now)}px from the edge, was ${Math.round(was)}px`;
    },
  },
  {
    name: 'too-wide',
    weight: 2,
    // A child in a container, made wider than it: it spills out.
    candidates: (doc) => layers(doc).filter((n) => n.parentId && doc.getNode(n.parentId)?.parentId !== null && shown(doc, doc.getNode(n.parentId)!).length >= 1),
    apply: (doc, n, before) => {
      const parent = before.get(n.parentId!)?.box;
      if (!parent) return;
      doc.updateNode(n.id, { styles: { width: `${Math.round(parent.width * 1.6)}px`, flexShrink: '0', maxWidth: null, minWidth: null } }, ORIGIN);
    },
    prompts: [
      'This is spilling out of its container.',
      'This is too wide, it runs off the edge.',
      'Fix the overflow here.',
      'Make this fit inside its parent.',
      'Something here is wider than the layout.',
    ],
    check: (ctx) => {
      const node = ctx.after.get(ctx.target)?.box;
      const parent = ctx.parent ? ctx.after.get(ctx.parent)?.box : undefined;
      const was = ctx.before.get(ctx.target)?.box;
      if (!node || !parent || !was) return 'not measured';
      if (node.x + node.width > parent.x + parent.width + 1 || node.x < parent.x - 1) return `still ${Math.round(node.width)}px wide in ${Math.round(parent.width)}px`;
      return node.width >= was.width / 2 ? undefined : `squashed to ${Math.round(node.width)}px, was ${Math.round(was.width)}px`;
    },
  },
  {
    name: 'lost-flex',
    childrenSelectable: true,
    weight: 2,
    candidates: (doc) => layers(doc).filter((n) => isFlex(n) && shown(doc, n).length >= 2),
    apply: (doc, n) => doc.updateNode(n.id, { styles: { display: 'block' } }, ORIGIN),
    prompts: [
      'The layout here broke.',
      'This used to be laid out properly, fix it.',
      'The items here lost their layout.',
      'Something is off with how these are arranged.',
    ],
    check: (ctx) => sameOrientation(ctx) ?? spacedAgain(ctx),
  },
  {
    name: 'one-column',
    childrenSelectable: true,
    weight: 2,
    candidates: (doc) => layers(doc).filter((n) => isGrid(n) && (n.styles.gridTemplateColumns ?? '').trim().split(/\s+(?![^(]*\))/).length >= 2 && shown(doc, n).length >= 2),
    apply: (doc, n, before) => {
      const n0 = columns(boxes(before, shown(doc, n).map((c) => c.id)));
      doc.updateNode(n.id, { styles: { gridTemplateColumns: '1fr' } }, ORIGIN);
      return { n: String(n0) };
    },
    prompts: [
      'This grid collapsed into one column.',
      'These should be in columns again.',
      'Put these back into a grid with {n} columns.',
      'Why is everything in a single column here?',
    ],
    check: (ctx) => {
      const [was, now] = [columns(boxes(ctx.before, ctx.children)), columns(boxes(ctx.after, ctx.children))];
      return now === was ? undefined : `${now} columns, were ${was}`;
    },
  },
  {
    // Nothing broken: a model must learn to leave a good layout alone.
    name: 'none',
    weight: 1,
    candidates: (doc) => layers(doc).filter((n) => (isFlex(n) || isGrid(n)) && shown(doc, n).length >= 2),
    apply: () => {},
    invisible: true,
    prompts: [
      'Does this lay out correctly? Fix anything that is actually wrong.',
      'Check the layout of this.',
      'Is anything broken here?',
    ],
    check: (ctx) => (ctx.edits === 0 ? undefined : `edited a layout that wasn't broken (${ctx.edits} edits)`),
  },
];
