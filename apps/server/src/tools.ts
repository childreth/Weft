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
  defaultTokens,
  flattenTokens,
  type ArtboardFrame,
  type BreakpointStyles,
  type NodePatch,
  type SceneTree,
  type SemanticTag,
  type StyleMap,
} from '@weft/core';
import type { AgentIdentity, AgentPresence, FocusKind } from './agents';
import { ROOM_NAME, type Room, type RoomRegistry } from './room';

export const SERVER_INSTRUCTIONS = `Weft is a design canvas whose artboards are real HTML + CSS rendered by the browser. You edit a scene graph of semantic HTML nodes; the user sees your changes live.

Model:
- Top-level nodes are artboards (type "frame" with a canvas "frame" {x, y, width, height}). Everything inside is laid out by CSS (flex/grid), not absolute coordinates.
- Node types: "frame" (container; tag div/section/header/nav/main/article/ul/li/button/a/form/figure/… or a ds-* custom element) and "text" (tag p/h1–h6/span/a/button/label/li/…; has "text").
- styles are camelCase CSS properties (e.g. gridTemplateColumns, backgroundColor). Values are CSS strings. Unknown properties are rejected; pass null to remove one.
- Prefer design tokens over raw values: var(--space-4), var(--color-accent), var(--font-size-lg), var(--radius-md). Call list_tokens to see them.
- Prefer CSS Grid/Flexbox with gap over margins and nested wrappers. Keep trees flat and semantic.
- Responsive: "breakpoints" holds per-node style overrides, e.g. {"mobile": {"gridTemplateColumns": "1fr"}}. ${BREAKPOINTS.map((b) => `"${b.id}" applies at ≤ ${b.maxWidth}px`).join('; ')} — on the canvas that is the artboard's width, so resize an artboard to preview it.

- Responsive comparison: duplicate_node with frame {"width": 390} (or 768) clones an artboard at mobile (or tablet) width beside the original, so both layouts show side by side.
- Arranging: align_nodes / distribute_nodes line artboards up by their frames; for elements they set CSS alignment on the flex or grid parent (justifyContent) or the child (alignSelf/justifySelf), never coordinates.

Always pass your model name in "model" (e.g. "Claude Opus 5.5", "Qwen3 Coder 30B") — at least on your first call. The user sees it on your cursor, which follows the nodes you read and edit.

Workflow: get_selection or get_canvas to orient → create_nodes / update_nodes (batched; each call is atomic and undoable via undo_agent_change) → get_layout to verify the real rendered boxes → select_nodes to show the user what you changed.`;

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
  .object({ x: z.number(), y: z.number(), width: z.number().positive(), height: z.number().positive() })
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

const nodeSpec: z.ZodType<NodeSpec> = z.lazy(() =>
  z.object({
    type: z.enum(['frame', 'text']),
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

/** Drops empty fields and truncates deep trees to keep responses small. */
function compact(tree: SceneTree, depth: number): Record<string, unknown> {
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
    if (err instanceof GridError) return fail(`${err.message} (no changes were applied)`);
    throw err;
  }
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
    frame = { ...nextArtboardPosition(room), width: 1280, height: 800, ...spec.frame };
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
export function createMcpServer(rooms: RoomRegistry, identity: AgentIdentity): McpServer {
  const server = new McpServer({ name: 'weft', version: '0.1.0' }, { instructions: SERVER_INSTRUCTIONS });

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
        'Returns the scene graph as nested JSON: every artboard, or the subtree under rootId. Deep subtrees are truncated to childCount past maxDepth.',
      inputSchema: {
        doc: docParam,
        rootId: z.string().optional().describe('Return only this node and its descendants'),
        maxDepth: z.number().int().min(0).max(50).default(12),
        model: modelParam,
      },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, rootId, maxDepth, model }) => {
      try {
        const { room, agent } = open(doc, model);
        const nodes = room.doc.getTree(rootId).map((t) => compact(t, maxDepth));
        agent.look(rootId ? [rootId] : [], rootId ? `Looking at ${nameOf(room, rootId)}` : 'Reading the canvas');
        return ok({ document: doc, nodes });
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
    async ({ doc, parentId, beforeId, nodes, model }) => {
      const { room, agent } = open(doc, model);
      return mutate(room, agent, 'create_nodes', (touched, report) => {
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
        return { created };
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
        for (const { id, ...patch } of updates) {
          room.doc.updateNode(id, patch as NodePatch, agent.identity.origin);
          touched.add(id);
        }
        return { updated: updates.map((u) => u.id) };
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
        'Deep-copies a node and its subtree with fresh ids. A copied artboard lands to the right of the artboards on its row; pass frame (e.g. {"width": 390}) to clone it at another width, which previews its breakpoint overrides. Other nodes are inserted right after the original.',
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
        return { id: copy };
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
      inputSchema: { group: z.string().optional().describe('Filter by top-level group: color, space, radius, font-size, …') },
      annotations: { readOnlyHint: true },
    },
    async ({ group }) => {
      const tokens = flattenTokens(defaultTokens.tokens)
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

  return server;
}
