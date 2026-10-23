import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
  ALIGNMENTS,
  AXES,
  BREAKPOINTS,
  BREAKPOINT_IDS,
  DEFAULT_ARTBOARD_STYLES,
  GridError,
  STYLE_PROPS,
  attributeIssues,
  breakpointIssues,
  defaultTokens,
  exportArtboardHTML,
  fontSlug,
  ICON_FONTS,
  ICON_STYLES,
  isIconName,
  searchIcons,
  searchFonts,
  withFontTokens,
  type FontCategory,
  styleIssues,
  tagIssue,
  throwIssues,
  treeIssues,
  flattenTokens,
  readWeftFile,
  type ArtboardFrame,
  type BreakpointStyles,
  type NodePatch,
  type SceneTree,
  type SemanticTag,
  type StyleMap,
} from '@weft/core';
import type { AgentIdentity, AgentPresence, FocusKind } from './agents';
import type { FontCache } from './fonts';
import type { Renderer } from './render';
import { ROOM_NAME, type Room, type RoomRegistry } from './room';
import { readSkill, skillFiles } from './skill';

export const SERVER_INSTRUCTIONS = `Weft is a design canvas whose artboards are real HTML + CSS rendered by the browser. You edit a scene graph of semantic HTML nodes; the user sees your changes live.

Model:
- Top-level nodes are artboards (type "frame" with a canvas "frame" {x, y, width, height, heightMode}). Everything inside is laid out by CSS (flex/grid), not absolute coordinates.
- Artboard height: heightMode "hug" (the default for new artboards and clones at another width) grows and shrinks with the content, like a real page; "fixed" keeps the set height and clips overflow. Passing a height without heightMode makes it fixed. A hugging artboard's stored height can lag the content; use get_layout for the exact box.
- Node types: "frame" (container; tag div/section/header/nav/main/article/ul/li/button/a/form/figure/… or a ds-* custom element) and "text" (tag p/h1–h6/span/a/button/label/li/…; has "text").
- Mixed styles in one line of text (a heading with one colored word): make the heading a frame with tag h1 (p, h2… and span work too) and give it text children with tag span.
- styles are camelCase CSS properties (e.g. gridTemplateColumns, backgroundColor, marginTop). Values are CSS strings. Only the properties listed in create_nodes are allowed, so check that list instead of guessing; pass null to remove one. backgroundImage takes gradients (linear-gradient(…)); url() and other external resources are rejected. Images aren't supported yet. Fonts: any Google Font via search_fonts → add_fonts, then fontFamily var(--font-family-<slug>). Icons: Material Symbols via search_icons (a text span whose text is the icon name, in the icon font added with add_fonts).
- A rejected call lists every problem with its path (nodes[0].children[2]) and applies nothing: fix them all, then resend.
- Prefer design tokens over raw values: var(--space-4), var(--color-accent), var(--font-size-lg), var(--radius-md). Call list_tokens to see them.
- Prefer CSS Grid/Flexbox with gap over margins and nested wrappers. Keep trees flat and semantic.
- Responsive: "breakpoints" holds per-node style overrides, e.g. {"mobile": {"gridTemplateColumns": "1fr"}}. ${BREAKPOINTS.map((b) => `"${b.id}" applies at ≤ ${b.maxWidth}px`).join('; ')} — on the canvas that is the artboard's width, so resize an artboard to preview it.

- Responsive comparison: duplicate_node with frame {"width": 390} (or 768) clones an artboard at mobile (or tablet) width beside the original, so both layouts show side by side.
- Arranging: align_nodes / distribute_nodes line artboards up by their frames; for elements they set CSS alignment on the flex or grid parent (justifyContent) or the child (alignSelf/justifySelf), never coordinates.

Always pass your model name in "model" (e.g. "Claude Opus 5.5", "Qwen3 Coder 30B") — at least on your first call. The user sees it on your cursor, which follows the nodes you read and edit.

Before designing or restyling anything, call read_skill with no path: it returns Weft's whole design guide (layout recipes, style and taste rules, how to check your work). Read it again when you start a new design.

Workflow: get_selection or get_canvas (detail "outline" first) to orient → create_nodes / update_nodes (batched; each call is atomic and undoable via undo_agent_change) → get_screenshot to see the result (works with no editor open; pass width 390 to check mobile) → select_nodes to show the user what you changed.`;

const AUTHORED_STYLES = `camelCase CSS properties. Allowed: ${STYLE_PROPS.join(', ')}`;

const docParam = z.string().regex(ROOM_NAME).default('default').describe('Document name; omit for the default document');
const modelParam = z
  .string()
  .max(60)
  .optional()
  .describe('Your model name, e.g. "Claude Opus 5.5" — shown on your cursor in the editor');
const BREAKPOINT_STYLES = `Style overrides per breakpoint (${BREAKPOINT_IDS.join(', ')}), layered over styles`;
const breakpointKey = z.enum(BREAKPOINT_IDS as [string, ...string[]]);

const frameSchema = z
  .object({
    x: z.number(),
    y: z.number(),
    width: z.number().positive(),
    height: z.number().positive().describe('Fixed height; setting it without heightMode makes the artboard fixed'),
    heightMode: z
      .enum(['fixed', 'hug'])
      .describe('"hug" sizes the artboard to its content (height is then the last measured value); "fixed" clips overflow'),
  })
  .partial();

interface NodeSpec {
  type: 'frame' | 'text';
  tag?: string;
  name?: string;
  text?: string;
  styles?: Record<string, string>;
  breakpoints?: Partial<Record<string, Record<string, string>>>;
  attributes?: Record<string, string>;
  frame?: Partial<ArtboardFrame>;
  children?: NodeSpec[];
}

type NodeSpecInput = Omit<NodeSpec, 'type' | 'children'> & { type?: NodeSpec['type']; children?: NodeSpecInput[] };

/** Small models often leave `type` out: a node with text and no children is text, anything else a frame. */
const withTypes = ({ children, ...spec }: NodeSpecInput): NodeSpec => ({
  ...spec,
  type: spec.type ?? (spec.text !== undefined && !children?.length ? 'text' : 'frame'),
  ...(children && { children: children.map(withTypes) }),
});

const nodeSpec: z.ZodType<NodeSpecInput> = z.lazy(() =>
  z.object({
    type: z
      .enum(['frame', 'text'])
      .optional()
      .describe('Inferred when left out: "text" for a node with text and no children, otherwise "frame"'),
    tag: z.string().optional().describe('Semantic HTML tag; defaults to div (frame) or p (text)'),
    name: z.string().optional().describe('Layer name shown in the layers panel'),
    text: z.string().optional().describe('Text content (text nodes only)'),
    styles: z.record(z.string(), z.string()).optional().describe(AUTHORED_STYLES),
    breakpoints: z.partialRecord(breakpointKey, z.record(z.string(), z.string())).optional().describe(BREAKPOINT_STYLES),
    attributes: z.record(z.string(), z.string()).optional().describe('HTML attributes such as aria-label, href, type, alt'),
    frame: frameSchema.optional().describe('Canvas placement; only for new artboards (parentId null)'),
    children: z.array(nodeSpec).optional().describe('Child nodes (frames only)'),
  }),
);

type ToolResult = { content: Array<{ type: 'text'; text: string }>; isError?: boolean };

const ok = (data: unknown): ToolResult => ({ content: [{ type: 'text', text: JSON.stringify(data, null, 2) }] });
const fail = (message: string): ToolResult => ({ content: [{ type: 'text', text: message }], isError: true });

const OUTLINE_TEXT = 60;

/** Structure only: what each node is and says, for finding ids cheaply. */
export function outline(tree: SceneTree, depth: number): Record<string, unknown> {
  const out: Record<string, unknown> = { id: tree.id, tag: tree.tag };
  // Text layers are usually named after their text; don't send it twice.
  if (tree.text === undefined || !tree.text.startsWith(tree.name)) out.name = tree.name;
  if (tree.text !== undefined) out.text = tree.text.length > OUTLINE_TEXT ? `${tree.text.slice(0, OUTLINE_TEXT)}…` : tree.text;
  if (tree.frame) out.frame = { x: tree.frame.x, y: tree.frame.y, width: tree.frame.width, heightMode: tree.frame.heightMode ?? 'fixed' };
  if (tree.hidden) out.hidden = true;
  if (tree.children.length) {
    if (depth > 0) out.children = tree.children.map((c) => outline(c, depth - 1));
    else out.childCount = tree.children.length;
  }
  return out;
}

/** Drops empty fields and truncates deep trees to keep responses small. */
export function compact(tree: SceneTree, depth: number): Record<string, unknown> {
  const out: Record<string, unknown> = { id: tree.id, type: tree.type, tag: tree.tag, name: tree.name };
  if (tree.text !== undefined) out.text = tree.text;
  if (tree.frame) out.frame = tree.frame;
  if (Object.keys(tree.styles).length) out.styles = tree.styles;
  if (tree.breakpoints) out.breakpoints = tree.breakpoints;
  if (Object.keys(tree.attributes).length) out.attributes = tree.attributes;
  if (tree.hidden) out.hidden = true;
  if (tree.locked) out.locked = true;
  if (tree.children.length) {
    if (depth > 0) out.children = tree.children.map((c) => compact(c, depth - 1));
    else out.childCount = tree.children.length;
  }
  return out;
}

/**
 * Runs an agent mutation as one atomic, undoable step. If it throws halfway,
 * the partial transaction is reverted so the document never sees half an edit.
 */
/** What an edit tells the editors: label, cursor path and what to flash (default: everything touched). */
interface EditReport {
  action: string;
  kind: FocusKind;
  focus?: string[];
  flash?: string[];
  roots?: string[];
}

function mutate<T>(
  room: Room,
  agent: AgentPresence,
  tool: string,
  fn: (touched: Set<string>, report: EditReport) => T,
): ToolResult {
  const touched = new Set<string>();
  const report: EditReport = { action: tool.replace(/_/g, ' '), kind: 'edit' };
  const { undo } = agent;
  undo.stopCapturing();
  const before = undo.undoStack.length;
  try {
    const result = room.doc.transact(() => fn(touched, report), agent.identity.origin);
    undo.stopCapturing();
    const alive = (ids: Iterable<string>) => [...ids].filter((id) => room.doc.has(id));
    agent.reportEdit(
      tool,
      report.action,
      alive(report.flash ?? touched),
      alive(report.focus ?? touched),
      report.kind,
      report.roots && alive(report.roots),
    );
    return ok(result);
  } catch (err) {
    if (undo.undoStack.length > before) {
      undo.undo();
      undo.redoStack.pop();
    }
    if (err instanceof GridError) {
      // An agent that guessed a property name gets the whole list once, not just a hint.
      const list = /Unknown style property/.test(err.message) ? `\nAllowed style properties: ${STYLE_PROPS.join(', ')}` : '';
      return fail(`${err.message} (no changes were applied)${list}`);
    }
    throw err;
  }
}

/**
 * Icon nodes the font can't draw: a name that isn't a Material Symbols icon, or
 * an icon font the document hasn't added. Either way the name shows as text.
 */
function iconWarnings(room: Room, ids: Iterable<string>): string[] {
  const added = new Set(room.doc.getFonts().map((f) => fontSlug(f.family)));
  const missingFonts = new Set<string>();
  const warnings: string[] = [];
  for (const id of ids) {
    const node = room.doc.getNode(id);
    const slug = node?.type === 'text' ? /var\(--font-family-(material-symbols-[a-z]+)\)/.exec(node.styles.fontFamily ?? '')?.[1] : undefined;
    if (!node || !slug) continue;
    if (!added.has(slug)) missingFonts.add(ICON_FONTS.find((f) => fontSlug(f) === slug) ?? slug);
    const name = node.text ?? '';
    if (!isIconName(name)) {
      const near = searchIcons(name, 3).map((i) => i.name);
      warnings.push(`${node.name} (${id}): "${name}" isn't a Material Symbols icon, so it shows as text${near.length ? `. Try ${near.join(', ')}` : ''}; search_icons lists the names`);
    }
  }
  for (const family of missingFonts) warnings.unshift(`The document doesn't have ${family} yet: add it with add_fonts, or icons show as their names`);
  return warnings;
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`;

function nextArtboardPosition(room: Room): { x: number; y: number } {
  const frames = room.doc.getChildren(null).flatMap((n) => (n.frame ? [n.frame] : []));
  if (frames.length === 0) return { x: 0, y: 0 };
  return { x: Math.max(...frames.map((f) => f.x + f.width)) + 120, y: Math.min(...frames.map((f) => f.y)) };
}

interface CreatedNode {
  id: string;
  name: string;
  children?: CreatedNode[];
}

function createTree(
  room: Room,
  origin: string,
  spec: NodeSpec,
  parentId: string | null,
  beforeId: string | null,
  touched: Set<string>,
): CreatedNode {
  let frame: ArtboardFrame | undefined;
  let styles = spec.styles as StyleMap | undefined;
  if (parentId === null) {
    const heightMode = spec.frame?.heightMode ?? (spec.frame?.height === undefined ? 'hug' : 'fixed');
    frame = { ...nextArtboardPosition(room), width: 1280, height: 800, ...spec.frame, heightMode };
    styles ??= DEFAULT_ARTBOARD_STYLES;
  } else if (spec.frame) {
    throw new GridError('Only new artboards (parentId null) take a "frame"; nested nodes are positioned by CSS');
  }
  if (spec.type === 'text' && spec.children?.length) throw new GridError('Text nodes cannot have children');
  const id = room.doc.createNode(
    {
      type: spec.type,
      tag: spec.tag as SemanticTag | undefined,
      name: spec.name,
      text: spec.text,
      styles,
      breakpoints: spec.breakpoints as BreakpointStyles | undefined,
      attributes: spec.attributes,
      frame,
      parentId,
      beforeId,
    },
    origin,
  );
  touched.add(id);
  const node = room.doc.getNode(id)!;
  const created: CreatedNode = { id, name: node.name };
  if (spec.children?.length) created.children = spec.children.map((c) => createTree(room, origin, c, id, null, touched));
  return created;
}

interface LayoutBox {
  id: string;
  artboardId: string;
  box: { x: number; y: number; width: number; height: number };
  [key: string]: unknown;
}

/** One MCP server per agent session; `identity` is who the editors see. */
/** Server-wide services the tools share. */
export interface ToolServices {
  renderer: Renderer;
  fonts: FontCache;
}

/** Where rendered pages fetch fonts from; the renderer answers these itself from the cache. */
const RENDER_FONTS = 'https://fonts.weft.invalid';

/** `remindSkill`: nudge an agent that creates nodes without having read the style guide (off where read_skill isn't offered). */
export interface McpServerOptions {
  remindSkill?: boolean;
}

const SKILL_REMINDER =
  "You haven't read Weft's style guide this session. Call read_skill (no path) before styling further: it covers color, type, composition and the generic looks to avoid.";

export function createMcpServer(
  rooms: RoomRegistry,
  identity: AgentIdentity,
  services: ToolServices,
  { remindSkill = true }: McpServerOptions = {},
): McpServer {
  const server = new McpServer({ name: 'weft', version: '0.1.0' }, { instructions: SERVER_INSTRUCTIONS });
  /** Reading the whole skill, or style.md, counts as reading the style guide. */
  const markRead = (path?: string) => {
    if (path === undefined || path.replace(/^\.\//, '') === 'style.md') identity.readStyleGuide = true;
  };

  server.registerTool(
    'read_skill',
    {
      title: 'Read the Weft design skill',
      description: `Weft's design guide: how to build good pages on this canvas. Call it with no path before designing: that returns the whole guide (${[...skillFiles().keys()].join(', ')}) in one text. Pass a path to reread one file.`,
      inputSchema: { path: z.string().optional().describe('One file from the skill, e.g. "style.md"; omit for the whole guide') },
      annotations: { readOnlyHint: true },
    },
    async ({ path }) => {
      try {
        const text = readSkill(path);
        markRead(path);
        return { content: [{ type: 'text', text }] };
      } catch (err) {
        return fail((err as Error).message);
      }
    },
  );
  for (const name of skillFiles().keys()) {
    server.registerResource(
      `skill-${name.replace(/\.md$/, '')}`,
      `weft://skill/${name}`,
      { title: `Weft design skill: ${name}`, mimeType: 'text/markdown' },
      async (uri) => {
        markRead(name);
        return { contents: [{ uri: uri.href, mimeType: 'text/markdown', text: readSkill(name) }] };
      },
    );
  }

  /** Resolves the document and this agent's presence in it (its cursor). */
  const nameOf = (room: Room, id: string | null | undefined) => (id && room.doc.getNode(id)?.name) || 'node';
  const open = (doc: string, model?: string) => {
    const room = rooms.get(doc);
    const client = server.server.getClientVersion();
    identity.client ??= client?.title ?? client?.name ?? null;
    identity.setModel(model);
    return { room, agent: room.agent(identity) };
  };

  server.registerTool(
    'get_canvas',
    {
      title: 'Get canvas tree',
      description:
        'Returns the scene graph as nested JSON: every artboard, or the subtree under rootId. Deep subtrees are truncated to childCount past maxDepth. detail "outline" returns only id, name, tag and short text per node (far smaller): use it to orient and find ids, then read the parts you will restyle in full.',
      inputSchema: {
        doc: docParam,
        rootId: z.string().optional().describe('Return only this node and its descendants'),
        maxDepth: z.number().int().min(0).max(50).default(12),
        detail: z.enum(['full', 'outline']).default('full').describe('"outline": structure and text only, no styles or attributes'),
        model: modelParam,
      },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, rootId, maxDepth, detail, model }) => {
      try {
        const { room, agent } = open(doc, model);
        agent.look(rootId ? [rootId] : [], rootId ? `Looking at ${nameOf(room, rootId)}` : 'Reading the canvas');
        if (detail === 'outline') {
          // Unindented: the outline exists to be small.
          const nodes = room.doc.getTree(rootId).map((t) => outline(t, maxDepth));
          return { content: [{ type: 'text', text: JSON.stringify({ document: doc, nodes }) }] };
        }
        return ok({ document: doc, nodes: room.doc.getTree(rootId).map((t) => compact(t, maxDepth)) });
      } catch (err) {
        return fail((err as Error).message);
      }
    },
  );

  server.registerTool(
    'get_selection',
    {
      title: 'Get user selection',
      description: 'Returns what each person with the document open has selected, with each selected subtree.',
      inputSchema: { doc: docParam, maxDepth: z.number().int().min(0).max(50).default(6), model: modelParam },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, maxDepth, model }) => {
      const { room, agent } = open(doc, model);
      agent.look(room.humans().flatMap((h) => h.selection.filter((id) => room.doc.has(id))), 'Looking at your selection');
      const users = room.humans().map((h) => ({
        user: h.user.name,
        selection: h.selection.filter((id) => room.doc.has(id)).map((id) => compact(room.doc.getTree(id)[0]!, maxDepth)),
      }));
      if (users.length === 0) return ok({ users, note: 'No editor is connected to this document.' });
      return ok({ users });
    },
  );

  server.registerTool(
    'create_nodes',
    {
      title: 'Create nodes',
      description:
        'Creates one or more node subtrees in a single atomic step. parentId null (or omitted) creates new artboards, auto-placed to the right of existing ones unless frame is given. Returns the new ids.',
      inputSchema: {
        doc: docParam,
        parentId: z.string().nullable().default(null).describe('Container to insert into; null for new artboards'),
        beforeId: z.string().nullable().default(null).describe('Insert before this sibling; null appends'),
        nodes: z.array(nodeSpec).min(1),
        model: modelParam,
      },
    },
    async ({ doc, parentId, beforeId, nodes: input, model }) => {
      const { room, agent } = open(doc, model);
      const nodes = input.map(withTypes);
      return mutate(room, agent, 'create_nodes', (touched, report) => {
        throwIssues(treeIssues(nodes));
        const created = nodes.map((spec) => createTree(room, agent.identity.origin, spec, parentId, beforeId, touched));
        const roots = created.map((c) => c.id);
        // `touched` is in creation (document) order, so the cursor visits parents before children.
        Object.assign(report, {
          kind: 'create',
          roots,
          flash: roots,
          action: parentId
            ? `Adding ${plural(touched.size, 'node')} to ${nameOf(room, parentId)}`
            : `Creating ${created.map((c) => c.name).join(', ')}`,
        });
        const warnings = iconWarnings(room, touched);
        return {
          created,
          ...(warnings.length && { warnings }),
          ...(remindSkill && !identity.readStyleGuide && { note: SKILL_REMINDER }),
        };
      });
    },
  );

  server.registerTool(
    'update_nodes',
    {
      title: 'Update nodes',
      description:
        'Applies patches to existing nodes in one atomic step. styles/attributes are merged; a null value removes that property. frame applies to artboards only.',
      inputSchema: {
        doc: docParam,
        updates: z
          .array(
            z.object({
              id: z.string(),
              name: z.string().optional(),
              tag: z.string().optional(),
              text: z.string().optional(),
              hidden: z.boolean().optional(),
              locked: z.boolean().optional(),
              frame: frameSchema.optional(),
              styles: z.record(z.string(), z.string().nullable()).optional().describe(AUTHORED_STYLES),
              breakpoints: z
                .partialRecord(breakpointKey, z.record(z.string(), z.string().nullable()).nullable())
                .optional()
                .describe(`${BREAKPOINT_STYLES}; merged like styles, null clears a whole breakpoint`),
              attributes: z.record(z.string(), z.string().nullable()).optional(),
            }),
          )
          .min(1),
        model: modelParam,
      },
    },
    async ({ doc, updates, model }) => {
      const { room, agent } = open(doc, model);
      return mutate(room, agent, 'update_nodes', (touched, report) => {
        const only = updates.length === 1 ? updates[0]! : undefined;
        if (only?.text !== undefined) Object.assign(report, { kind: 'text', action: `Writing ${nameOf(room, only.id)}` });
        else if (only) report.action = `${only.styles || only.breakpoints ? 'Styling' : 'Editing'} ${nameOf(room, only.id)}`;
        else report.action = `${updates.every((u) => u.styles || u.breakpoints) ? 'Styling' : 'Editing'} ${plural(updates.length, 'node')}`;
        throwIssues(
          updates.flatMap((u, i) => {
            const node = room.doc.getNode(u.id);
            const issues = [
              ...(node ? [] : [`Node ${u.id} not found`]),
              ...(node && u.tag ? [tagIssue(node.type, u.tag) ?? []].flat() : []),
              ...(u.styles ? styleIssues(u.styles) : []),
              ...(u.breakpoints ? breakpointIssues(u.breakpoints) : []),
              ...(u.attributes ? attributeIssues(u.attributes) : []),
            ];
            return issues.map((m) => `updates[${i}]: ${m}`);
          }),
        );
        for (const { id, ...patch } of updates) {
          room.doc.updateNode(id, patch as NodePatch, agent.identity.origin);
          touched.add(id);
        }
        const warnings = iconWarnings(room, touched);
        return { updated: updates.map((u) => u.id), ...(warnings.length && { warnings }) };
      });
    },
  );

  server.registerTool(
    'move_node',
    {
      title: 'Move node',
      description: 'Moves a node to a new parent and/or position among its siblings.',
      inputSchema: {
        doc: docParam,
        id: z.string(),
        parentId: z.string().nullable().describe('New parent; null makes it a top-level artboard'),
        beforeId: z.string().nullable().default(null).describe('Insert before this sibling; null appends'),
        model: modelParam,
      },
    },
    async ({ doc, id, parentId, beforeId, model }) => {
      const { room, agent } = open(doc, model);
      return mutate(room, agent, 'move_node', (touched, report) => {
        report.action = `Moving ${nameOf(room, id)}`;
        room.doc.moveNode(id, parentId, beforeId, agent.identity.origin);
        touched.add(id);
        return { moved: id };
      });
    },
  );

  server.registerTool(
    'duplicate_node',
    {
      title: 'Duplicate node',
      description:
        'Deep-copies a node and its subtree with fresh ids, and returns ids: a map from every original node id to its copy, so you can edit the copy without reading it again. A copied artboard lands to the right of the artboards on its row; pass frame (e.g. {"width": 390}) to clone it at another width, which previews its breakpoint overrides. Other nodes are inserted right after the original.',
      inputSchema: {
        doc: docParam,
        id: z.string(),
        name: z.string().optional().describe("Name for the copy; defaults to the original's"),
        frame: frameSchema.optional().describe('Artboards only: placement/size overrides for the copy'),
        model: modelParam,
      },
    },
    async ({ doc, id, name, frame, model }) => {
      const { room, agent } = open(doc, model);
      return mutate(room, agent, 'duplicate_node', (touched, report) => {
        const copy = room.doc.duplicateNode(id, { name, frame }, agent.identity.origin);
        touched.add(copy);
        for (const d of room.doc.getDescendantIds(copy)) touched.add(d);
        Object.assign(report, { kind: 'create', roots: [copy], flash: [copy], action: `Duplicating ${nameOf(room, id)}` });
        // The copy has the original's shape, so walking both trees pairs every node with its copy.
        const ids: Record<string, string> = {};
        const pair = (from: SceneTree, to: SceneTree) => {
          ids[from.id] = to.id;
          from.children.forEach((child, i) => pair(child, to.children[i]!));
        };
        pair(room.doc.getTree(id)[0]!, room.doc.getTree(copy)[0]!);
        return { id: copy, ids };
      });
    },
  );

  server.registerTool(
    'align_nodes',
    {
      title: 'Align nodes',
      description:
        "Aligns nodes to an edge or center. Artboards (two or more) line up by canvas frame. Elements are aligned with CSS through their flex or grid parent: the flex main axis sets the parent's justifyContent (affecting all its children), the cross axis sets the child's alignSelf, and grid children get justifySelf/alignSelf. Fails if a parent is not a flex or grid container.",
      inputSchema: {
        doc: docParam,
        ids: z.array(z.string()).min(1),
        align: z.enum(ALIGNMENTS).describe('left/center/right are horizontal, top/middle/bottom vertical'),
        model: modelParam,
      },
    },
    async ({ doc, ids, align, model }) => {
      const { room, agent } = open(doc, model);
      return mutate(room, agent, 'align_nodes', (touched, report) => {
        report.action = `Aligning ${ids.length === 1 ? nameOf(room, ids[0]) : plural(ids.length, 'node')} ${align}`;
        report.focus = ids;
        const changed = room.doc.alignNodes(ids, align, agent.identity.origin);
        for (const id of changed) touched.add(id);
        return { changed };
      });
    },
  );

  server.registerTool(
    'distribute_nodes',
    {
      title: 'Distribute nodes',
      description:
        'Spaces nodes evenly along an axis. Artboards (three or more) get equal gaps between their frames, the outermost staying put. Flex children set justifyContent: space-between on their parent when the axis is its main axis. Fails for grid children and for the flex cross axis.',
      inputSchema: { doc: docParam, ids: z.array(z.string()).min(1), axis: z.enum(AXES), model: modelParam },
    },
    async ({ doc, ids, axis, model }) => {
      const { room, agent } = open(doc, model);
      return mutate(room, agent, 'distribute_nodes', (touched, report) => {
        report.action = `Distributing ${plural(ids.length, 'node')} ${axis}ly`;
        report.focus = ids;
        const changed = room.doc.distributeNodes(ids, axis, agent.identity.origin);
        for (const id of changed) touched.add(id);
        return { changed };
      });
    },
  );

  server.registerTool(
    'delete_nodes',
    {
      title: 'Delete nodes',
      description: 'Deletes nodes and all their descendants in one atomic step.',
      inputSchema: { doc: docParam, ids: z.array(z.string()).min(1), model: modelParam },
      annotations: { destructiveHint: true },
    },
    async ({ doc, ids, model }) => {
      const { room, agent } = open(doc, model);
      const missing = ids.filter((id) => !room.doc.has(id));
      if (missing.length) return fail(`Unknown node ids: ${missing.join(', ')}`);
      return mutate(room, agent, 'delete_nodes', (_touched, report) => {
        // The cursor lands on whatever contained the deleted nodes.
        report.focus = [...new Set(ids.flatMap((id) => room.doc.getNode(id)?.parentId ?? []))];
        report.action = `Deleting ${plural(ids.length, 'node')}`;
        room.doc.deleteNodes(ids, agent.identity.origin);
        return { deleted: ids };
      });
    },
  );

  server.registerTool(
    'undo_agent_change',
    {
      title: 'Undo last agent change',
      description:
        'Reverts your most recent tool call (create/update/move/delete). Edits by people and by other agents are not affected.',
      inputSchema: { doc: docParam, model: modelParam },
    },
    async ({ doc, model }) => {
      const { agent } = open(doc, model);
      agent.look([], 'Undoing last change');
      if (!agent.undo.canUndo()) return fail('Nothing to undo');
      agent.undo.undo();
      return ok({ undone: true, remaining: agent.undo.undoStack.length });
    },
  );

  server.registerTool(
    'list_tokens',
    {
      title: 'List design tokens',
      description: 'Lists design tokens with the CSS value to use in styles, e.g. "var(--space-4)".',
      inputSchema: {
        doc: docParam,
        group: z.string().optional().describe('Filter by top-level group: color, space, radius, font-family, font-size, …'),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, group }) => {
      // The document's Google Fonts appear as font-family tokens.
      const tokens = flattenTokens(withFontTokens(defaultTokens, rooms.get(doc).doc.getFonts()).tokens)
        .filter((t) => !group || t.path[0] === group)
        .map((t) => ({ name: t.name, use: `var(${t.cssVar})`, type: t.type, value: t.value }));
      return ok({ modes: ['light', ...Object.keys(defaultTokens.modes ?? {})], tokens });
    },
  );

  server.registerTool(
    'get_layout',
    {
      title: 'Get rendered layout',
      description:
        'Measures nodes as actually rendered by the browser: boxes relative to their artboard (CSS px), key computed styles, and overflow flags. Requires the editor to be open. Defaults to the user selection, else all artboards.',
      inputSchema: {
        doc: docParam,
        ids: z.array(z.string()).optional(),
        includeDescendants: z.boolean().default(false),
        model: modelParam,
      },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, ids, includeDescendants, model }) => {
      try {
        const { room, agent } = open(doc, model);
        agent.look(ids ?? [], ids?.length === 1 ? `Measuring ${nameOf(room, ids[0])}` : 'Measuring layout');
        const layout = await room.callEditor<LayoutBox[]>('getLayout', { ids, includeDescendants });
        return ok({ nodes: layout });
      } catch (err) {
        return fail((err as Error).message);
      }
    },
  );

  server.registerTool(
    'select_nodes',
    {
      title: 'Select and show nodes',
      description: 'Selects nodes in every open editor and (by default) zooms the viewport to them, to show the user your work.',
      inputSchema: { doc: docParam, ids: z.array(z.string()), focus: z.boolean().default(true), model: modelParam },
    },
    async ({ doc, ids, focus, model }) => {
      const { room, agent } = open(doc, model);
      const missing = ids.filter((id) => !room.doc.has(id));
      if (missing.length) return fail(`Unknown node ids: ${missing.join(', ')}`);
      agent.look(ids, 'Showing you the result');
      const editors = room.notifyEditors('select', { ids, focus });
      return ok({ selected: ids, editors });
    },
  );

  server.registerTool(
    'search_icons',
    {
      title: 'Search Material Symbols icons',
      description:
        'Searches the bundled Material Symbols icon names (works offline) by name or meaning ("heart" finds favorite), most popular first. An icon is a text node whose text is the name, set in an icon font added with add_fonts; the result includes a node to copy.',
      inputSchema: {
        query: z.string().optional().describe('What the icon shows, e.g. "search", "heart", "chevron down"; omit for the most popular'),
        limit: z.number().int().min(1).max(50).default(12),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ query, limit }) =>
      ok({
        icons: searchIcons(query, limit).map(({ name, tags }) => ({ name, tags })),
        fonts: ICON_FONTS,
        node: {
          type: 'text',
          tag: 'span',
          name: 'Icon',
          text: '<icon name>',
          styles: { ...ICON_STYLES, fontFamily: `var(--font-family-${fontSlug(ICON_FONTS[0])})` },
          attributes: { 'aria-hidden': 'true' },
        },
        howTo: `Add the font once (add_fonts "${ICON_FONTS[0]}"), then create the node with the icon's name as its text. Set color and fontSize like text. Keep aria-hidden on decorative icons; an icon-only button needs its own aria-label.`,
      }),
  );

  server.registerTool(
    'search_fonts',
    {
      title: 'Search Google Fonts',
      description:
        'Searches the bundled Google Fonts catalog (works offline), most popular first. Returns each family with its category and available weights. Add the ones you use with add_fonts.',
      inputSchema: {
        query: z.string().optional().describe('Part of a family name, e.g. "playfair"; omit for the most popular'),
        category: z.enum(['sans-serif', 'serif', 'display', 'handwriting', 'monospace', 'icons']).optional(),
        limit: z.number().int().min(1).max(50).default(12),
      },
      annotations: { readOnlyHint: true },
    },
    async ({ query, category, limit }) =>
      ok({ fonts: searchFonts(query, { category: category as FontCategory | undefined, limit }).map(({ family, category, weights, italic }) => ({ family, category, weights, italic })) }),
  );

  server.registerTool(
    'add_fonts',
    {
      title: 'Add Google Fonts',
      description:
        'Adds Google Fonts to the document (or more weights to one it has). Each becomes a token: set fontFamily to var(--font-family-<slug>), e.g. "Playfair Display" → var(--font-family-playfair-display). Weights default to the usual 400–700 the family has. Fonts are cached locally after first use, so they keep working offline.',
      inputSchema: {
        doc: docParam,
        fonts: z.array(z.object({ family: z.string(), weights: z.array(z.number().int()).optional() })).min(1).max(10),
        model: modelParam,
      },
    },
    async ({ doc, fonts, model }) => {
      const { room, agent } = open(doc, model);
      return mutate(room, agent, 'add_fonts', (_touched, report) => {
        const added = room.doc.addFonts(fonts, agent.identity.origin);
        report.action = `Adding ${added.map((f) => f.family).join(', ')}`;
        return { fonts: added, use: Object.fromEntries(added.map((f) => [f.family, `var(--font-family-${fontSlug(f.family)})`])) };
      });
    },
  );

  server.registerTool(
    'remove_fonts',
    {
      title: 'Remove fonts',
      description: 'Removes Google Fonts from the document. Text that used them falls back to the token fallback stack (e.g. system-ui, sans-serif).',
      inputSchema: { doc: docParam, families: z.array(z.string()).min(1), model: modelParam },
    },
    async ({ doc, families, model }) => {
      const { room, agent } = open(doc, model);
      return mutate(room, agent, 'remove_fonts', (_touched, report) => {
        room.doc.removeFonts(families, agent.identity.origin);
        report.action = `Removing ${families.join(', ')}`;
        return { removed: families, fonts: room.doc.getFonts() };
      });
    },
  );

  server.registerTool(
    'import_file',
    {
      title: 'Import a Weft file',
      description:
        "Adds the artboards from a saved Weft document (the JSON of a .weft or .weft.json file) to this document, beside the existing ones, with its fonts. One atomic, undoable step. Returns the new artboard ids.",
      inputSchema: {
        doc: docParam,
        json: z.string().max(20_000_000).describe('The file contents'),
        model: modelParam,
      },
    },
    async ({ doc, json, model }) => {
      const { room, agent } = open(doc, model);
      return mutate(room, agent, 'import_file', (touched, report) => {
        const ids = room.doc.importFile(readWeftFile(json), agent.identity.origin);
        Object.assign(report, { kind: 'create', roots: ids, flash: ids, focus: ids, action: `Importing ${plural(ids.length, 'artboard')}` });
        ids.forEach((id) => touched.add(id));
        return { created: ids };
      });
    },
  );

  server.registerTool(
    'export_html',
    {
      title: 'Export an artboard as HTML',
      description:
        'Returns an artboard as a standalone HTML page: tokens, reset, styles, and breakpoints as @media rules, with the document\'s Google Fonts linked. The same page get_screenshot renders. Use it when the user wants the code.',
      inputSchema: {
        doc: docParam,
        id: z.string().optional().describe('Artboard id; defaults to the first artboard'),
        model: modelParam,
      },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, id, model }) => {
      try {
        const { room, agent } = open(doc, model);
        const targetId = id ?? room.doc.getChildren(null)[0]?.id;
        if (!targetId) return fail('This document has no artboards');
        agent.look([targetId], `Exporting ${nameOf(room, targetId)}`);
        return { content: [{ type: 'text', text: exportArtboardHTML(room.doc, targetId) }] };
      } catch (err) {
        if (err instanceof GridError) return fail(err.message);
        throw err;
      }
    },
  );

  server.registerTool(
    'get_screenshot',
    {
      title: 'Screenshot an artboard or node',
      description:
        'Renders an artboard (or one node within it) to a PNG exactly as the browser lays it out, plus the boxes of its children (x, y, width, height relative to the image, and overflows when content is clipped). Works with no editor open. Pass width to render the artboard at another width (390 mobile, 768 tablet) and check its breakpoints. Use it after each section you build, and to compare with a reference image.',
      inputSchema: {
        doc: docParam,
        id: z.string().optional().describe('Artboard or node id; defaults to the first artboard'),
        width: z.number().int().min(200).max(3840).optional().describe("Render width in CSS px; defaults to the artboard's width"),
        depth: z.number().int().min(0).max(6).default(2).describe('Levels of child boxes to report'),
        model: modelParam,
      },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, id, width, depth, model }) => {
      try {
        const { room, agent } = open(doc, model);
        const targetId = id ?? room.doc.getChildren(null)[0]?.id;
        if (!targetId) return fail('This document has no artboards');
        if (!room.doc.has(targetId)) return fail(`Node ${targetId} not found`);
        let artboard = room.doc.getNode(targetId)!;
        while (artboard.parentId) artboard = room.doc.getNode(artboard.parentId)!;
        agent.look([targetId], `Looking at ${nameOf(room, targetId)}`);
        const renderWidth = width ?? artboard.frame!.width;
        const fonts = room.doc.getFonts();
        const html = exportArtboardHTML(room.doc, artboard.id, {
          width: renderWidth,
          fontCSSUrl: fonts.length ? `${RENDER_FONTS}/fonts.css` : null,
        });
        const shot = await services.renderer.screenshot(html, {
          width: renderWidth,
          resource: async (url) => {
            if (url === `${RENDER_FONTS}/fonts.css`) return { body: await services.fonts.css(fonts, `${RENDER_FONTS}/files`), type: 'text/css' };
            if (url.startsWith(`${RENDER_FONTS}/files/`)) return services.fonts.file(url.slice(`${RENDER_FONTS}/files/`.length));
            return null;
          },
          target: targetId === artboard.id ? undefined : targetId,
          depth,
        });
        const names = new Map(room.doc.getNodes().map((n) => [n.id, n.name]));
        const summary = {
          id: targetId,
          name: nameOf(room, targetId),
          artboard: artboard.id,
          renderWidth,
          size: { width: shot.width, height: shot.height },
          ...(shot.scale !== 1 && { imageScale: shot.scale }),
          ...(shot.truncated && { truncated: 'Only the top of this tall artboard is shown' }),
          boxes: shot.boxes.map((b) => ({ ...b, name: names.get(b.id) })),
        };
        return {
          content: [
            { type: 'image', data: shot.png.toString('base64'), mimeType: 'image/png' },
            { type: 'text', text: JSON.stringify(summary, null, 2) },
          ],
        };
      } catch (err) {
        return fail((err as Error).message);
      }
    },
  );

  return server;
}
