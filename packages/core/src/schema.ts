export type NodeType = 'frame' | 'text';

export const CONTAINER_TAGS = [
  'div', 'section', 'header', 'footer', 'main', 'nav', 'aside', 'article',
  'form', 'ul', 'ol', 'li', 'button', 'a', 'label', 'dialog', 'figure',
  // Text blocks as containers, for mixed inline styles: an h1 frame holding span text nodes.
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'blockquote', 'figcaption',
] as const;

export const TEXT_TAGS = [
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'a', 'button', 'label',
  'li', 'strong', 'em', 'small', 'blockquote', 'figcaption',
] as const;

export const VOID_TAGS: ReadonlySet<string> = new Set(['input', 'img', 'hr']);

export type SemanticTag =
  | (typeof CONTAINER_TAGS)[number]
  | (typeof TEXT_TAGS)[number]
  | 'input' | 'img' | 'hr'
  | `ds-${string}`;

const CUSTOM_ELEMENT = /^ds-[a-z0-9]+(-[a-z0-9]+)*$/;

export function isValidTag(type: NodeType, tag: string): tag is SemanticTag {
  if (CUSTOM_ELEMENT.test(tag)) return true;
  if (type === 'text') return (TEXT_TAGS as readonly string[]).includes(tag);
  return (CONTAINER_TAGS as readonly string[]).includes(tag) || VOID_TAGS.has(tag);
}

export function tagsFor(type: NodeType): readonly string[] {
  return type === 'text' ? TEXT_TAGS : [...CONTAINER_TAGS, ...VOID_TAGS];
}

export type StyleGroup =
  | 'layout' | 'grid' | 'child' | 'position' | 'size' | 'spacing' | 'fill' | 'border' | 'type' | 'effects';

export interface StylePropMeta {
  group: StyleGroup;
  /** Token groups (top-level token keys) suggested for this property. */
  tokenGroups?: readonly string[];
  options?: readonly string[];
}

const ALIGN = ['stretch', 'start', 'center', 'end', 'baseline'] as const;
const JUSTIFY = ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly', 'stretch'] as const;
const SPACE = ['space'] as const;
const COLOR = ['color'] as const;

export const STYLE_PROP_META = {
  display: { group: 'layout', options: ['block', 'flex', 'grid', 'inline-flex', 'inline-grid', 'inline', 'none'] },
  flexDirection: { group: 'layout', options: ['row', 'column', 'row-reverse', 'column-reverse'] },
  flexWrap: { group: 'layout', options: ['nowrap', 'wrap'] },
  alignItems: { group: 'layout', options: ALIGN },
  justifyContent: { group: 'layout', options: JUSTIFY },
  justifyItems: { group: 'layout', options: ['stretch', 'start', 'center', 'end'] },
  gap: { group: 'layout', tokenGroups: SPACE },
  rowGap: { group: 'layout', tokenGroups: SPACE },
  columnGap: { group: 'layout', tokenGroups: SPACE },
  gridTemplateColumns: { group: 'grid' },
  gridTemplateRows: { group: 'grid' },
  gridTemplateAreas: { group: 'grid' },
  gridAutoFlow: { group: 'grid', options: ['row', 'column', 'dense', 'row dense', 'column dense'] },
  gridColumn: { group: 'child' },
  gridRow: { group: 'child' },
  gridArea: { group: 'child' },
  alignSelf: { group: 'child', options: ['auto', ...ALIGN] },
  justifySelf: { group: 'child', options: ['auto', 'stretch', 'start', 'center', 'end'] },
  flex: { group: 'child' },
  flexGrow: { group: 'child' },
  flexShrink: { group: 'child' },
  flexBasis: { group: 'child' },
  order: { group: 'child' },
  position: { group: 'position', options: ['static', 'relative', 'absolute', 'sticky', 'fixed'] },
  top: { group: 'position', tokenGroups: SPACE },
  right: { group: 'position', tokenGroups: SPACE },
  bottom: { group: 'position', tokenGroups: SPACE },
  left: { group: 'position', tokenGroups: SPACE },
  inset: { group: 'position', tokenGroups: SPACE },
  zIndex: { group: 'position' },
  width: { group: 'size' },
  height: { group: 'size' },
  minWidth: { group: 'size' },
  minHeight: { group: 'size' },
  maxWidth: { group: 'size' },
  maxHeight: { group: 'size' },
  aspectRatio: { group: 'size' },
  padding: { group: 'spacing', tokenGroups: SPACE },
  paddingInline: { group: 'spacing', tokenGroups: SPACE },
  paddingBlock: { group: 'spacing', tokenGroups: SPACE },
  paddingTop: { group: 'spacing', tokenGroups: SPACE },
  paddingRight: { group: 'spacing', tokenGroups: SPACE },
  paddingBottom: { group: 'spacing', tokenGroups: SPACE },
  paddingLeft: { group: 'spacing', tokenGroups: SPACE },
  margin: { group: 'spacing', tokenGroups: SPACE },
  marginInline: { group: 'spacing', tokenGroups: SPACE },
  marginBlock: { group: 'spacing', tokenGroups: SPACE },
  marginTop: { group: 'spacing', tokenGroups: SPACE },
  marginRight: { group: 'spacing', tokenGroups: SPACE },
  marginBottom: { group: 'spacing', tokenGroups: SPACE },
  marginLeft: { group: 'spacing', tokenGroups: SPACE },
  backgroundColor: { group: 'fill', tokenGroups: COLOR },
  /** Gradients only: url() and other external images are rejected. */
  backgroundImage: { group: 'fill' },
  opacity: { group: 'fill' },
  border: { group: 'border' },
  borderTop: { group: 'border' },
  borderRight: { group: 'border' },
  borderBottom: { group: 'border' },
  borderLeft: { group: 'border' },
  borderWidth: { group: 'border' },
  borderStyle: { group: 'border', options: ['none', 'solid', 'dashed', 'dotted'] },
  borderColor: { group: 'border', tokenGroups: COLOR },
  borderRadius: { group: 'border', tokenGroups: ['radius'] },
  color: { group: 'type', tokenGroups: COLOR },
  fontFamily: { group: 'type', tokenGroups: ['font-family'] },
  fontSize: { group: 'type', tokenGroups: ['font-size'] },
  fontWeight: { group: 'type', tokenGroups: ['font-weight'] },
  lineHeight: { group: 'type', tokenGroups: ['line-height'] },
  letterSpacing: { group: 'type' },
  textAlign: { group: 'type', options: ['start', 'center', 'end', 'justify'] },
  textTransform: { group: 'type', options: ['none', 'uppercase', 'lowercase', 'capitalize'] },
  textDecoration: { group: 'type', options: ['none', 'underline', 'line-through'] },
  fontStyle: { group: 'type', options: ['normal', 'italic'] },
  whiteSpace: { group: 'type', options: ['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line'] },
  textOverflow: { group: 'type', options: ['clip', 'ellipsis'] },
  boxShadow: { group: 'effects', tokenGroups: ['shadow'] },
  overflow: { group: 'effects', options: ['visible', 'hidden', 'auto', 'clip'] },
  transform: { group: 'effects' },
  objectFit: { group: 'effects', options: ['fill', 'contain', 'cover', 'none', 'scale-down'] },
  objectPosition: { group: 'effects' },
  cursor: { group: 'effects', options: ['auto', 'default', 'pointer', 'text', 'not-allowed'] },
} as const satisfies Record<string, StylePropMeta>;

export type StyleProp = keyof typeof STYLE_PROP_META;
export const STYLE_PROPS = Object.keys(STYLE_PROP_META) as StyleProp[];
export type StyleMap = Partial<Record<StyleProp, string>>;

export function isStyleProp(key: string): key is StyleProp {
  return Object.hasOwn(STYLE_PROP_META, key);
}

export function getStyleMeta(prop: StyleProp): StylePropMeta {
  return STYLE_PROP_META[prop];
}

/**
 * Responsive breakpoints (desktop-first). A node's override styles for a
 * breakpoint apply when the artboard (canvas) or viewport (export) is at most
 * `maxWidth` wide. Keep this widest-first: later blocks win the cascade, so a
 * narrower breakpoint overrides a wider one.
 */
export const BREAKPOINTS = [
  { id: 'tablet', label: 'Tablet', maxWidth: 1024 },
  { id: 'mobile', label: 'Mobile', maxWidth: 600 },
] as const;

/** Artboard widths that preview each layout, for quick resizing. */
export const ARTBOARD_PRESETS = [
  { label: 'Desktop', width: 1440 },
  { label: 'Tablet', width: 768 },
  { label: 'Mobile', width: 390 },
] as const;
export type BreakpointId = (typeof BREAKPOINTS)[number]['id'];
export const BREAKPOINT_IDS = BREAKPOINTS.map((b) => b.id) as BreakpointId[];
export type BreakpointStyles = Partial<Record<BreakpointId, StyleMap>>;

export function isBreakpointId(key: string): key is BreakpointId {
  return (BREAKPOINT_IDS as string[]).includes(key);
}

/** Align commands, named by the edge or center they line up. */
export const ALIGNMENTS = ['left', 'center', 'right', 'top', 'middle', 'bottom'] as const;
export type Alignment = (typeof ALIGNMENTS)[number];
export const AXES = ['horizontal', 'vertical'] as const;
export type Axis = (typeof AXES)[number];

/** Canvas-space placement; only top-level nodes (artboards) have one. */
export interface ArtboardFrame {
  x: number;
  y: number;
  width: number;
  /** Fixed height, or the last measured content height when `heightMode` is 'hug'. */
  height: number;
  /** 'hug' sizes the artboard to its content; omitted means fixed (overflow is clipped). */
  heightMode?: 'fixed' | 'hug';
}

export interface SceneNode {
  id: string;
  type: NodeType;
  name: string;
  tag: SemanticTag;
  /** null = top-level artboard on the page. */
  parentId: string | null;
  /** Fractional index key; siblings sort by (index, id). */
  index: string;
  text?: string;
  styles: StyleMap;
  /** Style overrides per breakpoint, layered over `styles`. */
  breakpoints?: BreakpointStyles;
  attributes: Record<string, string>;
  frame?: ArtboardFrame;
  hidden?: boolean;
  locked?: boolean;
}

export interface SceneTree extends Omit<SceneNode, 'parentId' | 'index'> {
  children: SceneTree[];
}
