import { IndexeddbPersistence } from 'y-indexeddb';
import {
  GridDocument,
  GridError,
  History,
  ORIGIN_AGENT,
  seedLandingPage,
  type CreateNodeInput,
  type NodePatch,
} from '@gridforge/core';
import { SceneStore, makeSceneHooks } from './scene';
import { useEditor } from './store';

export const doc = new GridDocument();
export const history = new History(doc);
export const scene = new SceneStore(doc);
export const { useNode, useChildren } = makeSceneHooks(scene);

const params = new URLSearchParams(location.search);
if (params.has('ephemeral')) {
  seedLandingPage(doc);
} else {
  const persistence = new IndexeddbPersistence(`gridforge:${params.get('doc') ?? 'default'}`, doc.ydoc);
  persistence.once('synced', () => {
    if (doc.nodes.size === 0) seedLandingPage(doc);
  });
}

// Drop selection entries whose nodes no longer exist (undo, remote deletes).
scene.subscribe(() => {
  const { selection, select, hoveredId, setHovered, editingTextId, setEditingText } = useEditor.getState();
  const alive = selection.filter((id) => scene.nodes.has(id));
  if (alive.length !== selection.length) select(alive);
  if (hoveredId && !scene.nodes.has(hoveredId)) setHovered(null);
  if (editingTextId && !scene.nodes.has(editingTextId)) setEditingText(null);
});

/** Runs a document command, surfacing validation errors instead of throwing. */
export function run<T>(fn: () => T): T | undefined {
  try {
    const result = fn();
    useEditor.getState().setNotice(null);
    return result;
  } catch (err) {
    if (err instanceof GridError) {
      useEditor.getState().setNotice(err.message);
      return undefined;
    }
    throw err;
  }
}

/**
 * Agent-facing command surface. Edits are tagged with the agent origin so they
 * stay off the user's undo stack. The MCP server (M2) wraps exactly this API.
 */
export const agentApi = {
  getTree: (rootId?: string) => doc.getTree(rootId),
  getSelection: () => useEditor.getState().selection,
  createNode: (input: CreateNodeInput) => doc.createNode(input, ORIGIN_AGENT),
  updateNode: (id: string, patch: NodePatch) => doc.updateNode(id, patch, ORIGIN_AGENT),
  moveNode: (id: string, parentId: string | null, beforeId: string | null = null) =>
    doc.moveNode(id, parentId, beforeId, ORIGIN_AGENT),
  deleteNodes: (ids: string[]) => doc.deleteNodes(ids, ORIGIN_AGENT),
  select: (ids: string[]) => useEditor.getState().select(ids),
};

declare global {
  interface Window {
    gridforge: {
      doc: GridDocument;
      history: History;
      scene: SceneStore;
      editor: typeof useEditor;
      agent: typeof agentApi;
    };
  }
}

window.gridforge = { doc, history, scene, editor: useEditor, agent: agentApi };
