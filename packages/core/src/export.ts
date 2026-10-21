import { compileBreakpointCSS, GridError, type GridDocument } from './document';
import { ARTBOARD_RESET_CSS } from './defaults';
import { VOID_TAGS, type SceneNode, type SceneTree } from './schema';
import { compileTokensCSS, type TokenSet } from './tokens';
import { defaultTokens } from './default-tokens';

/**
 * Standalone HTML for one artboard: the same tokens, reset, inline styles and
 * breakpoint rules the canvas renders, with breakpoints as `@media` queries
 * (the page is as wide as the artboard). The base for code export, and what
 * the server screenshots for agents.
 */

const escapeText = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = (s: string) => escapeText(s).replace(/"/g, '&quot;');
const kebab = (prop: string) => prop.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

function styleAttr(node: SceneTree, isRoot: boolean): string {
  const styles: Record<string, string> = { ...node.styles };
  if (isRoot) {
    styles.width = '100%';
    styles.height = '100%';
  }
  if (node.hidden) styles.display = 'none';
  const css = Object.entries(styles)
    .map(([prop, value]) => `${kebab(prop)}: ${value}`)
    .join('; ');
  return css ? ` style="${escapeAttr(css)}"` : '';
}

function renderNode(node: SceneTree, isRoot: boolean): string {
  const attrs = Object.entries(node.attributes)
    .map(([name, value]) => ` ${name}="${escapeAttr(value)}"`)
    .join('');
  const open = `<${node.tag} data-gf-id="${escapeAttr(node.id)}"${attrs}${styleAttr(node, isRoot)}>`;
  if (VOID_TAGS.has(node.tag)) return open;
  const inner = node.type === 'text' ? escapeText(node.text ?? '') : node.children.map((c) => renderNode(c, false)).join('');
  return `${open}${inner}</${node.tag}>`;
}

export interface ArtboardHTMLOptions {
  tokens?: TokenSet;
  /** Render at this width instead of the artboard's (e.g. 390 to preview mobile). */
  width?: number;
  title?: string;
}

export function exportArtboardHTML(doc: GridDocument, artboardId: string, options: ArtboardHTMLOptions = {}): string {
  const [tree] = doc.getTree(artboardId);
  if (!tree?.frame) throw new GridError(`Node ${artboardId} is not an artboard`);
  const width = options.width ?? tree.frame.width;
  const height = tree.frame.heightMode === 'hug' ? 'auto' : `${tree.frame.height}px`;
  const subtree: SceneNode[] = [];
  const walk = (t: SceneTree, parentId: string | null) => {
    const { children, ...rest } = t;
    subtree.push({ ...rest, parentId, index: '' });
    children.forEach((c) => walk(c, t.id));
  };
  walk(tree, null);
  const css = [
    compileTokensCSS(options.tokens ?? defaultTokens),
    'html, body { margin: 0; }',
    ARTBOARD_RESET_CSS.trim(),
    `.weft-artboard { width: ${width}px; height: ${height}; overflow: hidden; }`,
    compileBreakpointCSS(subtree),
  ]
    .filter(Boolean)
    .join('\n');
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeText(options.title ?? tree.name)}</title>
<style>
${css}
</style>
</head>
<body>
<div class="weft-artboard">${renderNode(tree, true)}</div>
</body>
</html>
`;
}
