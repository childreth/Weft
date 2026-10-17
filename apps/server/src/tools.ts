import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import {
  DEFAULT_ARTBOARD_STYLES,
  GridError,
  ORIGIN_AGENT,
  STYLE_PROPS,
  defaultTokens,
  flattenTokens,
  type ArtboardFrame,
  type NodePatch,
  type SceneTree,
  type SemanticTag,
  type StyleMap,
} from '@weft/core';
import { ROOM_NAME, type Room, type RoomRegistry } from './room';

export const SERVER_INSTRUCTIONS = `Weft is a design canvas whose artboards are real HTML + CSS rendered by the browser. You edit a scene graph of semantic HTML nodes; the user sees your changes live.

Model:
- Top-level nodes are artboards (type "frame" with a canvas "frame" {x, y, width, height}). Everything inside is laid out by CSS (flex/grid), not absolute coordinates.
- Node types: "frame" (container; tag div/section/header/nav/main/article/ul/li/button/a/form/figure/… or a ds-* custom element) and "text" (tag p/h1–h6/span/a/button/label/li/…; has "text").
- styles are camelCase CSS properties (e.g. gridTemplateColumns, backgroundColor). Values are CSS strings. Unknown properties are rejected; pass null to remove one.
- Prefer design tokens over raw values: var(--space-4), var(--color-accent), var(--font-size-lg), var(--radius-md). Call list_tokens to see them.
- Prefer CSS Grid/Flexbox with gap over margins and nested wrappers. Keep trees flat and semantic.

Workflow: get_selection or get_canvas to orient → create_nodes / update_nodes (batched; each call is atomic and undoable via undo_agent_change) → get_layout to verify the real rendered boxes → select_nodes to show the user what you changed.`;

const AUTHORED_STYLES = `camelCase CSS properties. Allowed: ${STYLE_PROPS.join(', ')}`;

const docParam = z.string().regex(ROOM_NAME).default('default').describe('Document name; omit for the default document');
const frameSchema = z
  .object({ x: z.number(), y: z.number(), width: z.number().positive(), height: z.number().positive() })
  .partial();

interface NodeSpec {
  type: 'frame' | 'text';
  tag?: string;
  name?: string;
  text?: string;
  styles?: Record<string, string>;
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
function mutate<T>(room: Room, tool: string, fn: (touched: Set<string>) => T): ToolResult {
  const touched = new Set<string>();
  room.agentUndo.stopCapturing();
  const before = room.agentUndo.undoStack.length;
  try {
    const result = room.doc.transact(() => fn(touched), ORIGIN_AGENT);
    room.agentUndo.stopCapturing();
    room.reportActivity(tool, [...touched].filter((id) => room.doc.has(id)));
    return ok(result);
  } catch (err) {
    if (room.agentUndo.undoStack.length > before) {
      room.agentUndo.undo();
      room.agentUndo.redoStack.pop();
    }
    if (err instanceof GridError) return fail(`${err.message} (no changes were applied)`);
    throw err;
  }
}

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
      attributes: spec.attributes,
      frame,
      parentId,
      beforeId,
    },
    ORIGIN_AGENT,
  );
  touched.add(id);
  const node = room.doc.getNode(id)!;
  const created: CreatedNode = { id, name: node.name };
  if (spec.children?.length) created.children = spec.children.map((c) => createTree(room, c, id, null, touched));
  return created;
}

interface LayoutBox {
  id: string;
  artboardId: string;
  box: { x: number; y: number; width: number; height: number };
  [key: string]: unknown;
}

export function createMcpServer(rooms: RoomRegistry): McpServer {
  const server = new McpServer({ name: 'weft', version: '0.1.0' }, { instructions: SERVER_INSTRUCTIONS });

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
      },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, rootId, maxDepth }) => {
      try {
        const room = rooms.get(doc);
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
      inputSchema: { doc: docParam, maxDepth: z.number().int().min(0).max(50).default(6) },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, maxDepth }) => {
      const room = rooms.get(doc);
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
      },
    },
    async ({ doc, parentId, beforeId, nodes }) =>
      mutate(rooms.get(doc), 'create_nodes', (touched) => ({
        created: nodes.map((spec) => createTree(rooms.get(doc), spec, parentId, beforeId, touched)),
      })),
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
              attributes: z.record(z.string(), z.string().nullable()).optional(),
            }),
          )
          .min(1),
      },
    },
    async ({ doc, updates }) => {
      const room = rooms.get(doc);
      return mutate(room, 'update_nodes', (touched) => {
        for (const { id, ...patch } of updates) {
          room.doc.updateNode(id, patch as NodePatch, ORIGIN_AGENT);
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
      },
    },
    async ({ doc, id, parentId, beforeId }) => {
      const room = rooms.get(doc);
      return mutate(room, 'move_node', (touched) => {
        room.doc.moveNode(id, parentId, beforeId, ORIGIN_AGENT);
        touched.add(id);
        return { moved: id };
      });
    },
  );

  server.registerTool(
    'delete_nodes',
    {
      title: 'Delete nodes',
      description: 'Deletes nodes and all their descendants in one atomic step.',
      inputSchema: { doc: docParam, ids: z.array(z.string()).min(1) },
      annotations: { destructiveHint: true },
    },
    async ({ doc, ids }) => {
      const room = rooms.get(doc);
      const missing = ids.filter((id) => !room.doc.has(id));
      if (missing.length) return fail(`Unknown node ids: ${missing.join(', ')}`);
      return mutate(room, 'delete_nodes', () => {
        room.doc.deleteNodes(ids, ORIGIN_AGENT);
        return { deleted: ids };
      });
    },
  );

  server.registerTool(
    'undo_agent_change',
    {
      title: 'Undo last agent change',
      description: 'Reverts the most recent agent tool call (create/update/move/delete). People’s own edits are not affected.',
      inputSchema: { doc: docParam },
    },
    async ({ doc }) => {
      const room = rooms.get(doc);
      if (!room.agentUndo.canUndo()) return fail('Nothing to undo');
      room.agentUndo.undo();
      return ok({ undone: true, remaining: room.agentUndo.undoStack.length });
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
      },
      annotations: { readOnlyHint: true },
    },
    async ({ doc, ids, includeDescendants }) => {
      try {
        const layout = await rooms.get(doc).callEditor<LayoutBox[]>('getLayout', { ids, includeDescendants });
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
      inputSchema: { doc: docParam, ids: z.array(z.string()), focus: z.boolean().default(true) },
    },
    async ({ doc, ids, focus }) => {
      const room = rooms.get(doc);
      const missing = ids.filter((id) => !room.doc.has(id));
      if (missing.length) return fail(`Unknown node ids: ${missing.join(', ')}`);
      const editors = room.notifyEditors('select', { ids, focus });
      return ok({ selected: ids, editors });
    },
  );

  return server;
}
