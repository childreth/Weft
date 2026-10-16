export type NodeType = 'frame' | 'text';

export const CONTAINER_TAGS = [
  'div', 'section', 'header', 'footer', 'main', 'nav', 'aside', 'article',
  'form', 'ul', 'ol', 'li', 'button', 'a', 'label', 'dialog', 'figure',
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
  | 'layout' | 'grid' | 'child' | 'size' | 'spacing' | 'fill' | 'border' | 'type' | 'effects';

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
  margin: { group: 'spacing', tokenGroups: SPACE },
  backgroundColor: { group: 'fill', tokenGroups: COLOR },
  opacity: { group: 'fill' },
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
  boxShadow: { group: 'effects', tokenGroups: ['shadow'] },
  overflow: { group: 'effects', options: ['visible', 'hidden', 'auto', 'clip'] },
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

/** Canvas-space placement; only top-level nodes (artboards) have one. */
export interface ArtboardFrame {
  x: number;
  y: number;
  width: number;
  height: number;
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
  attributes: Record<string, string>;
  frame?: ArtboardFrame;
  hidden?: boolean;
  locked?: boolean;
}

export interface SceneTree extends Omit<SceneNode, 'parentId' | 'index'> {
  children: SceneTree[];
}
