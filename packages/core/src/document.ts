import * as Y from 'yjs';
import { generateKeyBetween } from 'fractional-indexing';
import { createId } from './ids';
import { defaultTokens } from './default-tokens';
import { MAX_DOCUMENT_TOKENS, MAX_THEMES, documentTokenIssues, themeIssues, themeNameIssue, withDocumentTokens } from './document-tokens';
import { defaultWeights, findFont, fontSlug, withFontTokens, type DocumentFont } from './fonts';
import { flattenTokens, mergeTokenGroups, type TokenGroup, type TokenSet } from './tokens';
import { ASSET_NAME, MAX_IMAGE_BYTES, altIssue, imageSrcIssue, loadableSrc } from './assets';
import {
  BREAKPOINTS,
  VOID_TAGS,
  getStyleMeta,
  isBreakpointId,
  isStyleProp,
  isValidTag,
  tagsFor,
  BREAKPOINT_IDS,
  STYLE_PROPS,
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
  /** A theme (`getThemeNames`) for this frame and everything in it. */
  theme?: string;
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
  /** null removes the frame's theme. */
  theme?: string | null;
}

export interface Snapshot {
  format: 'weft';
  version: 1;
  nodes: SceneNode[];
  /** Google Fonts the document uses (absent in older snapshots). */
  fonts?: DocumentFont[];
  /** The document's own design tokens by path (absent in older snapshots). */
  tokens?: Record<string, string>;
  /** The document's themes: token overrides by path, by theme name (absent in older snapshots). */
  themes?: Record<string, Record<string, string>>;
  /**
   * The images its layers use, base64 by asset name (`<sha256>.<ext>`). Only in
   * files saved from the editor; the server keeps assets beside its documents.
   */
  assets?: Record<string, string>;
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
/** Values that would make the browser fetch something: url(), image-set(), …, or escapes that could hide them. */
const EXTERNAL_STYLE_VALUE = /\b(?:url|image|image-set|-webkit-image-set|cross-fade|element|expression)\s*\(|\\/i;
const GRADIENT = /\b(?:repeating-)?(?:linear|radial|conic)-gradient\s*\(/i;
/** A gradient in a color property is dropped by CSS: the element paints nothing. */
const isColorProp = (prop: StyleProp) => getStyleMeta(prop).tokenGroups?.includes('color') ?? false;
const DEFAULT_FRAME: ArtboardFrame = { x: 0, y: 0, width: 1280, height: 800, heightMode: 'hug' };
/** Space left between an artboard and a duplicate placed beside it. */
const ARTBOARD_GAP = 100;
/** Bounds on pasted clipboard content, which may come from anywhere. */
const CLIPBOARD_MAX_NODES = 5000;
const CLIPBOARD_MAX_DEPTH = 64;
const FILE_MAX_NODES = 50_000;

/** What the editor puts on the clipboard for copied layers. */
export interface ClipboardPayload {
  format: 'weft-clipboard';
  version: 1;
  nodes: SceneTree[];
}

/**
 * Fixes images from before `src` and `alt` were checked: a source that won't be
 * loaded (a remote URL) is dropped, and missing alt text becomes "" (the image
 * is announced as decorative, as it effectively was).
 */
function repairImages(trees: readonly SceneTree[]): void {
  const visit = (tree: SceneTree) => {
    // Shape-checked only: attributes may be missing.
    const attrs = (tree.attributes ??= {});
    if (attrs.src !== undefined && loadableSrc(attrs.src) === undefined) delete attrs.src;
    if (attrs.srcset !== undefined) delete attrs.srcset;
    if (altIssue(tree.tag, attrs)) attrs.alt = '';
    tree.children.forEach(visit);
  };
  trees.forEach(visit);
}

/** Layers from outside the document, brought up to today's rules before they're validated. */
function repairLayers(trees: readonly SceneTree[]): void {
  repairGradients(trees);
  repairImages(trees);
}

/**
 * Checks the shape of layers from outside the document (clipboard, files):
 * types, nesting and size only. Content is validated by `insertTrees` like any
 * other create.
 */
function checkLayerShapes(nodes: readonly unknown[], where: string, maxNodes: number): void {
  let count = 0;
  const check = (node: unknown, depth: number): void => {
    const n = node as Partial<SceneTree> | null;
    const record = (v: unknown) => v === undefined || (typeof v === 'object' && v !== null && !Array.isArray(v));
    const text = (v: unknown) => v === undefined || typeof v === 'string';
    if (
      !n ||
      typeof n !== 'object' ||
      (n.type !== 'frame' && n.type !== 'text') ||
      !Array.isArray(n.children) ||
      !text(n.name) ||
      !text(n.text) ||
      !text(n.tag) ||
      !text(n.theme) ||
      !record(n.styles) ||
      !record(n.attributes) ||
      !record(n.breakpoints) ||
      !record(n.frame)
    ) {
      throw new GridError(`Malformed layers ${where}`);
    }
    if (++count > maxNodes || depth > CLIPBOARD_MAX_DEPTH) throw new GridError(`Too many layers ${where}`);
    for (const child of n.children) check(child, depth + 1);
  };
  for (const node of nodes) check(node, 0);
}

/** The style patch that `repairGradients` applies to one style set, or null when it's fine. */
function gradientRepair(styles: Partial<Record<string, string>> | undefined): Record<string, string | null> | null {
  let patch: Record<string, string | null> | null = null;
  for (const [key, value] of Object.entries(styles ?? {})) {
    if (typeof value !== 'string' || !isStyleProp(key) || !isColorProp(key) || !GRADIENT.test(value)) continue;
    patch ??= {};
    patch[key] = null;
    if (key === 'backgroundColor' && styles!.backgroundImage === undefined) patch.backgroundImage = value;
  }
  return patch;
}

/**
 * Fixes layers saved before gradients in color properties were rejected: a
 * background gradient moves to backgroundImage (where it was meant to be), and
 * text or border gradients, which never painted, are dropped.
 */
function repairGradients(trees: readonly SceneTree[]): void {
  const repair = (styles: Partial<Record<string, string>> | undefined) => {
    for (const [key, value] of Object.entries(gradientRepair(styles) ?? {})) {
      if (value === null) delete styles![key];
      else styles![key] = value;
    }
  };
  const visit = (tree: SceneTree) => {
    repair(tree.styles);
    for (const styles of Object.values(tree.breakpoints ?? {})) repair(styles);
    tree.children.forEach(visit);
  };
  trees.forEach(visit);
}

/**
 * Parses clipboard JSON into subtrees, checking only their shape: content is
 * validated by `insertTrees` like any other create.
 */
export function readClipboard(json: string): SceneTree[] {
  let data: unknown;
  try {
    data = JSON.parse(json);
  } catch {
    throw new GridError('Clipboard does not contain Weft layers');
  }
  const payload = data as Partial<ClipboardPayload> | null;
  if (payload?.format !== 'weft-clipboard' || payload.version !== 1 || !Array.isArray(payload.nodes)) {
    throw new GridError('Clipboard does not contain Weft layers');
  }
  checkLayerShapes(payload.nodes, 'on the clipboard', CLIPBOARD_MAX_NODES);
  repairLayers(payload.nodes);
  return payload.nodes;
}

/** A saved document (`.weft`, or the server's `.weft.json`), as artboard trees ready for `importFile`. */
export interface WeftFile {
  artboards: SceneTree[];
  fonts: DocumentFont[];
  tokens: Record<string, string>;
  themes: Record<string, Record<string, string>>;
  /** Images by asset name, base64; to be stored (and their hashes checked) before importing. */
  assets: Record<string, string>;
}

/** Longest base64 an asset can be in a file. */
const MAX_ASSET_BASE64 = Math.ceil(MAX_IMAGE_BYTES / 3) * 4;

/**
 * Parses a saved document. Like the clipboard, it may come from anywhere: this
 * checks the shape, and `importFile` validates the content. Fonts that this
 * build's catalog doesn't know are dropped (their text falls back).
 */
export function readWeftFile(json: string): WeftFile {
  let data: unknown;
  try {
    data = JSON.parse(json);
  } catch {
    throw new GridError('Not a Weft file');
  }
  const file = data as Partial<Snapshot> | null;
  const format = file?.format as string | undefined;
  if ((format !== 'weft' && format !== 'gridforge') || file?.version !== 1 || !Array.isArray(file.nodes)) {
    throw new GridError('Not a Weft file');
  }
  if (file.nodes.length > FILE_MAX_NODES) throw new GridError('Too many layers in the file');
  const byParent = new Map<string | null, SceneNode[]>();
  for (const n of file.nodes as unknown[]) {
    const node = n as Partial<SceneNode> | null;
    if (!node || typeof node !== 'object' || typeof node.id !== 'string' || typeof node.index !== 'string') {
      throw new GridError('Malformed layers in the file');
    }
    const parentId = typeof node.parentId === 'string' ? node.parentId : null;
    const list = byParent.get(parentId) ?? [];
    list.push(node as SceneNode);
    byParent.set(parentId, list);
  }
  // Built from the roots down, so cycles and orphans are never reached.
  const build = (node: SceneNode): SceneTree => {
    const { parentId: _parent, index: _index, ...rest } = node;
    return { ...rest, children: sortSiblings(byParent.get(node.id) ?? []).map(build) };
  };
  const artboards = sortSiblings(byParent.get(null) ?? []).map(build);
  checkLayerShapes(artboards, 'in the file', FILE_MAX_NODES);
  if (artboards.some((a) => !a.frame)) throw new GridError('Malformed layers in the file: a top-level layer is not an artboard');
  repairLayers(artboards);
  const fonts: DocumentFont[] = [];
  for (const f of Array.isArray(file.fonts) ? (file.fonts as unknown[]) : []) {
    const font = findFont((f as Partial<DocumentFont> | null)?.family ?? '');
    if (!font) continue;
    const asked = (f as Partial<DocumentFont>).weights;
    const weights = Array.isArray(asked) ? asked.filter((w) => font.weights.includes(w)) : [];
    fonts.push({ family: font.family, weights: weights.length ? weights : defaultWeights(font) });
  }
  // Checked when imported, against the document they join.
  const tokens: Record<string, string> = {};
  const rawTokens = file.tokens as unknown;
  if (rawTokens && typeof rawTokens === 'object' && !Array.isArray(rawTokens)) {
    for (const [path, value] of Object.entries(rawTokens).slice(0, MAX_DOCUMENT_TOKENS)) if (typeof value === 'string') tokens[path] = value;
  }
  const themes: Record<string, Record<string, string>> = {};
  const rawThemes = file.themes as unknown;
  if (rawThemes && typeof rawThemes === 'object' && !Array.isArray(rawThemes)) {
    for (const [name, raw] of Object.entries(rawThemes).slice(0, MAX_THEMES)) {
      if (!raw || typeof raw !== 'object' || Array.isArray(raw)) continue;
      const theme: Record<string, string> = {};
      for (const [path, value] of Object.entries(raw).slice(0, MAX_DOCUMENT_TOKENS)) if (typeof value === 'string') theme[path] = value;
      themes[name] = theme;
    }
  }
  const assets: Record<string, string> = {};
  const rawAssets = file.assets as unknown;
  if (rawAssets && typeof rawAssets === 'object' && !Array.isArray(rawAssets)) {
    for (const [name, data] of Object.entries(rawAssets)) {
      if (ASSET_NAME.test(name) && typeof data === 'string' && data.length <= MAX_ASSET_BASE64) assets[name] = data;
    }
  }
  return { artboards, fonts, tokens, themes, assets };
}

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
  const theme = y.get('theme');
  if (typeof theme === 'string') node.theme = theme;
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

/**
 * Real CSS properties Weft doesn't take, and what to use instead. Agents are
 * told about these by name; anything else they know from CSS is checked
 * against the allowlist (`STYLE_PROPS`).
 */
export const UNSUPPORTED_STYLES: Readonly<Record<string, string>> = {
  background: 'use backgroundColor, or backgroundImage for a gradient',
  font: 'use fontFamily, fontSize, fontWeight and lineHeight',
  transition: 'Weft has no hover states or animation yet',
  animation: 'Weft has no hover states or animation yet',
  content: 'add a text node instead',
  float: 'use flex or grid',
  clear: 'use flex or grid',
};

function editDistance(a: string, b: string): number {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]!;
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const next = Math.min(row[j]! + 1, row[j - 1]! + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = row[j]!;
      row[j] = next;
    }
  }
  return row[b.length]!;
}

/** A short "what to use instead" for an unknown style property, or ''. */
function styleHint(key: string): string {
  const alias = UNSUPPORTED_STYLES[key];
  if (alias) return ` (${alias})`;
  const camel = key.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
  if (camel !== key && isStyleProp(camel)) return ` (use "${camel}")`;
  const lower = key.toLowerCase();
  let best: string | null = null;
  let bestDistance = 3;
  for (const prop of STYLE_PROPS) {
    const d = editDistance(lower, prop.toLowerCase());
    if (d < bestDistance) [best, bestDistance] = [prop, d];
  }
  return best ? ` (did you mean "${best}"?)` : '';
}

/** Every problem with a style map, so a caller can fix them all in one go. */
export function styleIssues(styles: Partial<Record<string, string | null>>): string[] {
  const issues: string[] = [];
  for (const [key, value] of Object.entries(styles)) {
    if (!isStyleProp(key)) issues.push(`Unknown style property "${key}"${styleHint(key)}`);
    else if (value === null || value === undefined) continue;
    else if (typeof value !== 'string') issues.push(`Style "${key}" must be a string`);
    else if (UNSAFE_STYLE_VALUE.test(value)) issues.push(`Style "${key}" contains forbidden characters`);
    else if (EXTERNAL_STYLE_VALUE.test(value)) issues.push(`Style "${key}" can't load external resources (url(), image-set()); gradients are fine`);
    else if (GRADIENT.test(value) && isColorProp(key)) {
      issues.push(`Style "${key}" takes a color, not a gradient${key === 'backgroundColor' ? ': put the gradient in backgroundImage' : ''}`);
    }
  }
  return issues;
}

export function breakpointIssues(breakpoints: Record<string, Partial<Record<string, string | null>> | null | undefined>): string[] {
  return Object.entries(breakpoints).flatMap(([bp, styles]) =>
    !isBreakpointId(bp) ? [`Unknown breakpoint "${bp}" (use ${BREAKPOINT_IDS.join(' or ')})`] : styles ? styleIssues(styles).map((m) => `${bp}: ${m}`) : [],
  );
}

export function attributeIssues(attributes: Record<string, string | null>): string[] {
  const issues: string[] = [];
  for (const [name, value] of Object.entries(attributes)) {
    if (!ATTRIBUTE_NAME.test(name)) issues.push(`Invalid attribute name "${name}"`);
    else if (/^on/i.test(name)) issues.push(`Event handler attributes are not allowed ("${name}")`);
    else if (name === 'style' || name === 'class') issues.push(`Use styles instead of the "${name}" attribute`);
    else if (value !== null && typeof value !== 'string') issues.push(`Attribute "${name}" must be a string`);
    else if (typeof value === 'string' && /^\s*javascript:/i.test(value)) issues.push(`Unsafe URL in "${name}"`);
    else if (name === 'srcset') issues.push('Use "src" (one image) instead of "srcset"');
    else if (name === 'src' && typeof value === 'string') {
      const issue = imageSrcIssue(value);
      if (issue) issues.push(issue);
    }
  }
  return issues;
}

/** Tag check with a hint: the other node type, or the tags this type allows. */
export function tagIssue(type: NodeType, tag: string): string | null {
  if (isValidTag(type, tag)) return null;
  const other: NodeType = type === 'text' ? 'frame' : 'text';
  const hint = isValidTag(other, tag) ? `use type "${other}"` : `allowed: ${tagsFor(type).join(', ')}`;
  return `Tag <${tag}> is not valid for a ${type} node (${hint})`;
}

/** The shape `treeIssues` checks: a node to create with its subtree. */
export interface TreeInput {
  type: NodeType;
  tag?: string;
  styles?: Partial<Record<string, string | null>>;
  breakpoints?: Record<string, Partial<Record<string, string | null>> | null | undefined>;
  attributes?: Record<string, string | null>;
  children?: readonly TreeInput[];
}

const MAX_REPORTED_ISSUES = 25;

/**
 * Every validation problem in a batch of subtrees, each prefixed with where it
 * is (`nodes[1].children[0]`), so an agent can fix them all in one retry.
 */
export function treeIssues(nodes: readonly TreeInput[], path = 'nodes'): string[] {
  const issues: string[] = [];
  const visit = (node: TreeInput, at: string) => {
    const tag = node.tag ?? (node.type === 'text' ? 'p' : 'div');
    const add = (list: string[]) => issues.push(...list.map((m) => `${at}: ${m}`));
    const bad = tagIssue(node.type, tag);
    if (bad) add([bad]);
    if (node.styles) add(styleIssues(node.styles));
    if (node.breakpoints) add(breakpointIssues(node.breakpoints));
    if (node.attributes) add(attributeIssues(node.attributes));
    add([altIssue(tag, node.attributes ?? {}) ?? []].flat());
    const children = node.children ?? [];
    if (children.length && (node.type === 'text' || VOID_TAGS.has(tag))) {
      add([node.type === 'text' ? 'Text nodes cannot have children (make it a frame with the same tag and span text children)' : `<${tag}> cannot contain other layers`]);
    }
    children.forEach((child, i) => visit(child, `${at}.children[${i}]`));
  };
  nodes.forEach((node, i) => visit(node, `${path}[${i}]`));
  return issues;
}

/** Throws one GridError listing every issue (capped). */
export function throwIssues(issues: readonly string[]): void {
  if (issues.length === 0) return;
  const shown = issues.slice(0, MAX_REPORTED_ISSUES);
  const more = issues.length - shown.length;
  throw new GridError(
    issues.length === 1 ? issues[0]! : `${issues.length} problems:\n- ${shown.join('\n- ')}${more > 0 ? `\n- …and ${more} more` : ''}`,
  );
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


/**
 * The scene graph. All reads and writes go through this class so that the
 * canvas UI, keyboard shortcuts and AI agents share one validated command set.
 */
export class GridDocument {
  readonly ydoc: Y.Doc;
  readonly nodes: Y.Map<YNode>;

  /** Fonts the document uses, by family. */
  readonly fonts: Y.Map<DocumentFont>;

  /** The document's own design tokens (`withDocumentTokens`), value by path. */
  readonly tokens: Y.Map<string>;
  /** The document's themes: token overrides (path → value) by theme name. */
  readonly themes: Y.Map<Record<string, string>>;

  constructor(ydoc: Y.Doc = new Y.Doc()) {
    this.ydoc = ydoc;
    this.nodes = ydoc.getMap<YNode>('nodes');
    this.fonts = ydoc.getMap<DocumentFont>('fonts');
    this.tokens = ydoc.getMap<string>('tokens');
    this.themes = ydoc.getMap<Record<string, string>>('themes');
  }

  /** The Yjs types a per-user undo stack should track. */
  get undoScope(): Y.AbstractType<any>[] {
    return [this.nodes, this.fonts, this.tokens, this.themes];
  }

  getTokens(): Record<string, string> {
    return Object.fromEntries([...this.tokens.entries()].sort(([a], [b]) => a.localeCompare(b)));
  }

  /**
   * The tokens every consumer uses (canvas, Inspector, export, agents):
   * `base` (the defaults), the document's own tokens, then its fonts.
   */
  tokenSet(base: TokenSet = defaultTokens): TokenSet {
    const set = withFontTokens(withDocumentTokens(base, this.getTokens()), this.getFonts());
    const known = new Set(flattenTokens(set.tokens).map((t) => t.name));
    const modes: Record<string, TokenGroup> = { ...base.modes };
    for (const [name, overrides] of Object.entries(this.getThemes())) {
      // A token removed after the theme overrode it is skipped, not brought back.
      const entries = Object.fromEntries(Object.entries(overrides).filter(([path]) => known.has(path)));
      modes[name] = mergeTokenGroups(modes[name] ?? {}, withDocumentTokens({ tokens: {} }, entries).tokens);
    }
    return { ...set, modes };
  }

  /** The document's own themes, by name; built-in ones (`dark`) appear only once the document overrides them. */
  getThemes(): Record<string, Record<string, string>> {
    return Object.fromEntries([...this.themes.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([name, t]) => [name, { ...t }]));
  }

  /** Every theme a frame can use: the built-in ones and the document's. */
  getThemeNames(): string[] {
    return [...new Set([...Object.keys(defaultTokens.modes ?? {}), ...this.themes.keys()])].sort();
  }

  /**
   * Creates theme `name` or changes its overrides (token path → value; null
   * removes one). Themes override existing tokens only. All are checked first.
   */
  setTheme(name: string, entries: Readonly<Record<string, string | null>>, origin: Origin = ORIGIN_LOCAL): void {
    const current = this.themes.get(name) ?? {};
    const issues = themeIssues(name, entries, current, this.tokenSet());
    if (!this.themes.has(name) && !this.getThemeNames().includes(name) && this.themes.size >= MAX_THEMES) {
      issues.push(`A document can have at most ${MAX_THEMES} themes`);
    }
    throwIssues(issues);
    const next: Record<string, string> = { ...current };
    for (const [path, value] of Object.entries(entries)) {
      if (value === null) delete next[path];
      else next[path] = value.trim();
    }
    this.transact(() => this.themes.set(name, next), origin);
  }

  /**
   * Removes a document theme. Frames that use it lose their theme, unless a
   * built-in theme of that name remains (removing `dark` resets it to the default).
   */
  removeTheme(name: string, origin: Origin = ORIGIN_LOCAL): void {
    if (!this.themes.has(name)) throw new GridError(`"${name}" isn't one of this document's themes`);
    const builtIn = name in (defaultTokens.modes ?? {});
    this.transact(() => {
      this.themes.delete(name);
      if (builtIn) return;
      for (const y of this.nodes.values()) if (y.get('theme') === name) y.delete('theme');
    }, origin);
  }

  /** Why a node can't take `theme`, or null. */
  private themeIssue(type: NodeType, theme: string): string | null {
    if (type !== 'frame') return 'Only frames take a theme';
    if (!this.getThemeNames().includes(theme)) {
      return `Unknown theme "${theme}" (themes: ${this.getThemeNames().join(', ')}; create one with set_tokens and a theme)`;
    }
    return null;
  }

  /**
   * Adds or changes the document's own tokens; null removes one, bringing back
   * the default it overrode, if any. All are checked before any changes.
   */
  setTokens(entries: Readonly<Record<string, string | null>>, origin: Origin = ORIGIN_LOCAL): void {
    const base = withFontTokens(defaultTokens, this.getFonts());
    throwIssues(documentTokenIssues(entries, this.getTokens(), base));
    this.transact(() => {
      for (const [path, value] of Object.entries(entries)) {
        if (value === null) this.tokens.delete(path);
        else this.tokens.set(path, value.trim());
      }
    }, origin);
  }

  getFonts(): DocumentFont[] {
    return [...this.fonts.values()].sort((a, b) => a.family.localeCompare(b.family));
  }

  /**
   * Adds Google Fonts to the document (or more weights to one it has). Each
   * family must be in the bundled catalog; weights default to its usual text
   * weights. Returns the fonts as stored.
   */
  addFonts(inputs: readonly { family: string; weights?: readonly number[] }[], origin: Origin = ORIGIN_LOCAL): DocumentFont[] {
    const issues: string[] = [];
    const resolved = inputs.map(({ family, weights }) => {
      const font = findFont(family);
      if (!font) {
        issues.push(`Unknown font "${family}" (search_fonts lists the available families)`);
        return null;
      }
      const missing = (weights ?? []).filter((w) => !font.weights.includes(w));
      if (missing.length) issues.push(`${font.family} has no weight ${missing.join(', ')} (available: ${font.weights.join(', ')})`);
      return { font, weights: weights?.length ? [...weights] : defaultWeights(font) };
    });
    throwIssues(issues);
    return this.transact(
      () =>
        resolved.map((r) => {
          const { font, weights } = r!;
          const current = this.fonts.get(font.family)?.weights ?? [];
          const next: DocumentFont = { family: font.family, weights: [...new Set([...current, ...weights])].sort((a, b) => a - b) };
          if (next.weights.length !== current.length) this.fonts.set(font.family, next);
          return next;
        }),
      origin,
    );
  }

  /**
   * Removes fonts by family. Styles that use them fall back to the token's
   * fallback stack; a font role (or a theme's) that points at one must move first.
   */
  removeFonts(families: readonly string[], origin: Origin = ORIGIN_LOCAL): void {
    const names = families.map((f) => findFont(f)?.family ?? f);
    const missing = names.filter((f) => !this.fonts.has(f));
    if (missing.length) throw new GridError(`Not in this document: ${missing.join(', ')}`);
    const refs = new Set(names.map((f) => `{font-family.${fontSlug(f)}}`));
    const sets: Array<[string, Record<string, string>]> = [['', this.getTokens()], ...Object.entries(this.getThemes())];
    throwIssues(
      sets.flatMap(([theme, tokens]) =>
        Object.entries(tokens)
          .filter(([, value]) => refs.has(value))
          .map(([path, value]) => `${path}${theme && ` in the ${theme} theme`} uses ${value}: point it at another font first`),
      ),
    );
    this.transact(() => names.forEach((f) => this.fonts.delete(f)), origin);
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
    throwIssues([
      ...[tagIssue(input.type, tag) ?? []].flat(),
      ...(input.styles ? styleIssues(input.styles) : []),
      ...(input.breakpoints ? breakpointIssues(input.breakpoints) : []),
      ...(input.attributes ? attributeIssues(input.attributes) : []),
      ...[altIssue(tag, input.attributes ?? {}) ?? []].flat(),
      ...(input.theme !== undefined ? [this.themeIssue(input.type, input.theme) ?? []].flat() : []),
    ]);
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
      if (input.theme !== undefined) y.set('theme', input.theme);
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
      throwIssues([tagIssue(type, patch.tag) ?? []].flat());
      if (VOID_TAGS.has(patch.tag) && this.getDescendantIds(id).length > 0) {
        throw new GridError(`<${patch.tag}> cannot have children`);
      }
    }
    if (patch.text !== undefined && type !== 'text') throw new GridError('Only text nodes have text');
    if (patch.frame && y.get('parentId') !== null) throw new GridError('Only artboards have a canvas frame');
    throwIssues([
      ...(patch.styles ? styleIssues(patch.styles) : []),
      ...(patch.breakpoints ? breakpointIssues(patch.breakpoints) : []),
      ...(patch.attributes ? attributeIssues(patch.attributes) : []),
      ...(patch.tag !== undefined || patch.attributes
        ? [altIssue(patch.tag ?? (y.get('tag') as string), { ...(y.get('attributes') as Y.Map<string>).toJSON(), ...patch.attributes }) ?? []].flat()
        : []),
      ...(typeof patch.theme === 'string' ? [this.themeIssue(type, patch.theme) ?? []].flat() : []),
    ]);

    this.transact(() => {
      if (patch.name !== undefined) y.set('name', patch.name);
      if (patch.tag !== undefined) y.set('tag', patch.tag);
      if (patch.text !== undefined) y.set('text', patch.text);
      for (const flag of ['hidden', 'locked'] as const) {
        if (patch[flag] === true) y.set(flag, true);
        else if (patch[flag] === false) y.delete(flag);
      }
      if (patch.theme === null || patch.theme === '') y.delete('theme');
      else if (patch.theme !== undefined) y.set('theme', patch.theme);
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
      if (options.frame?.x === undefined) frame = this.besideRow(frame);
    }
    // A copy is validated like a create: old layers must not make the original uncopyable.
    repairLayers([tree!]);
    return this.transact(() => this.copyTree(tree!, source.parentId, beforeId, { name: options.name, frame }, origin), origin);
  }

  /**
   * Repairs gradients saved in color properties before they were rejected (as
   * opening a file does), so stored documents stop failing validation on copy.
   * Returns how many layers changed.
   */
  repairGradients(origin: Origin = ORIGIN_SEED): number {
    let changed = 0;
    this.transact(() => {
      for (const node of this.getNodes()) {
        const styles = gradientRepair(node.styles);
        const breakpoints = Object.fromEntries(
          Object.entries(node.breakpoints ?? {}).flatMap(([bp, bpStyles]) => {
            const patch = gradientRepair(bpStyles);
            return patch ? [[bp, patch]] : [];
          }),
        );
        if (!styles && Object.keys(breakpoints).length === 0) continue;
        const y = this.requireY(node.id);
        const map = y.get('styles') as Y.Map<string>;
        for (const [k, v] of Object.entries(styles ?? {})) {
          if (v === null) map.delete(k);
          else map.set(k, v);
        }
        if (Object.keys(breakpoints).length > 0) writeBreakpoints(y, breakpoints);
        changed++;
      }
    }, origin);
    return changed;
  }

  /** Subtrees of `ids` for the clipboard: outermost nodes only, in document order. */
  copyNodes(ids: readonly string[]): SceneTree[] {
    const wanted = new Set(ids.filter((id) => this.has(id)));
    const out: SceneTree[] = [];
    const walk = (trees: SceneTree[]) => {
      for (const t of trees) {
        if (wanted.has(t.id)) out.push(t);
        else walk(t.children);
      }
    };
    walk(this.getTree());
    return out;
  }

  /**
   * Inserts copies of `trees` (e.g. pasted) with fresh ids, validated like any
   * create, and returns the new roots. Artboards (trees with a `frame`) land on
   * the page to the right of their row; other nodes go into `target.parentId`
   * before `target.beforeId`.
   */
  insertTrees(trees: readonly SceneTree[], target: { parentId: string | null; beforeId?: string | null }, origin: Origin = ORIGIN_LOCAL): string[] {
    // Validate everything first: a transaction does not roll back, and a paste must not land halfway.
    throwIssues(treeIssues(trees));
    for (const tree of trees) {
      if (tree.frame) normalizeFrame(tree.frame);
      else if (target.parentId === null) throw new GridError('Select a layer or artboard to paste into');
    }
    if (target.parentId !== null && trees.some((t) => !t.frame)) this.assertCanContain(target.parentId);
    return this.transact(
      () =>
        trees.map((tree) => {
          if (tree.frame) return this.copyTree(tree, null, null, { frame: this.besideRow(normalizeFrame(tree.frame)) }, origin);
          if (target.parentId === null) throw new GridError('Select a layer or artboard to paste into');
          return this.copyTree(tree, target.parentId, target.beforeId ?? null, {}, origin);
        }),
      origin,
    );
  }

  /** `frame` moved to the right of the artboards it vertically overlaps. */
  private besideRow(frame: ArtboardFrame): ArtboardFrame {
    const row = this.getChildren(null).flatMap((n) => (n.frame && n.frame.y < frame.y + frame.height && n.frame.y + n.frame.height > frame.y ? [n.frame] : []));
    return row.length ? { ...frame, x: Math.max(...row.map((r) => r.x + r.width)) + ARTBOARD_GAP } : frame;
  }

  private copyTree(
    node: SceneTree,
    parentId: string | null,
    beforeId: string | null,
    root: { name?: string; frame?: ArtboardFrame },
    origin: Origin,
  ): string {
    const newId = this.createNode(
      {
        type: node.type,
        tag: node.tag,
        name: root.name ?? node.name,
        parentId,
        beforeId,
        text: node.text,
        styles: node.styles,
        breakpoints: node.breakpoints,
        attributes: node.attributes,
        frame: root.frame ?? node.frame,
        // Layers from another document may name a theme this one lacks.
        ...(node.theme && node.type === 'frame' && this.getThemeNames().includes(node.theme) && { theme: node.theme }),
      },
      origin,
    );
    if (node.hidden || node.locked) this.updateNode(newId, { hidden: node.hidden, locked: node.locked }, origin);
    for (const child of node.children) this.copyTree(child, newId, null, {}, origin);
    return newId;
  }

  /**
   * Adds a saved document's artboards beside the existing ones, with its fonts,
   * as one undoable step. Everything is validated before anything changes.
   * Returns the new artboard ids.
   */
  importFile(file: WeftFile, origin: Origin = ORIGIN_LOCAL): string[] {
    if (file.artboards.length === 0) throw new GridError('The file has no artboards');
    throwIssues(treeIssues(file.artboards));
    return this.transact(() => {
      if (file.fonts.length) this.addFonts(file.fonts, origin);
      this.importTokens(file.tokens, origin);
      this.importThemes(file.themes, origin);
      return this.insertTrees(file.artboards, { parentId: null }, origin);
    }, origin);
  }

  /**
   * A file's tokens that this document doesn't have; the document's own win, so
   * importing never restyles what's already here. Invalid ones are dropped.
   */
  private importTokens(tokens: Readonly<Record<string, string>>, origin: Origin): void {
    let entries = Object.entries(tokens).filter(([path]) => !this.tokens.has(path));
    const base = withFontTokens(defaultTokens, this.getFonts());
    // Dropping one can break another's alias, so repeat until the rest are valid.
    while (entries.length) {
      const issues = documentTokenIssues(Object.fromEntries(entries), this.getTokens(), base);
      if (issues.length === 0) return this.setTokens(Object.fromEntries(entries), origin);
      const kept = entries.filter(([path]) => !issues.some((i) => i.startsWith(`"${path}"`)));
      // An issue with no token named (too many tokens): import none.
      entries = kept.length < entries.length ? kept : [];
    }
  }

  /**
   * A file's themes that this document doesn't have (the document's own win);
   * overrides that aren't valid here are dropped.
   */
  private importThemes(themes: Readonly<Record<string, Record<string, string>>>, origin: Origin): void {
    for (const [name, overrides] of Object.entries(themes)) {
      if (this.themes.has(name) || themeNameIssue(name) || this.themes.size >= MAX_THEMES) continue;
      const set = this.tokenSet();
      const valid = Object.fromEntries(Object.entries(overrides).filter(([path, value]) => themeIssues(name, { [path]: value }, {}, set).length === 0));
      this.setTheme(name, valid, origin);
    }
  }

  toSnapshot(): Snapshot {
    const fonts = this.getFonts();
    const tokens = this.getTokens();
    const themes = this.getThemes();
    return {
      format: 'weft',
      version: 1,
      nodes: sortSiblings(this.getNodes()),
      ...(fonts.length && { fonts }),
      ...(Object.keys(tokens).length && { tokens }),
      ...(Object.keys(themes).length && { themes }),
    };
  }

  loadSnapshot(snapshot: Snapshot, origin: Origin = ORIGIN_LOCAL): void {
    // 'gridforge' is the pre-rename format tag; still accepted on load.
    if ((snapshot.format as string) !== 'weft' && (snapshot.format as string) !== 'gridforge' || snapshot.version !== 1) throw new GridError('Unsupported snapshot');
    this.transact(() => {
      this.nodes.clear();
      this.fonts.clear();
      this.tokens.clear();
      this.themes.clear();
      if (snapshot.fonts?.length) this.addFonts(snapshot.fonts, origin);
      if (snapshot.tokens) this.setTokens(snapshot.tokens, origin);
      for (const [name, overrides] of Object.entries(snapshot.themes ?? {})) this.setTheme(name, overrides, origin);
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
