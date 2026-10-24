import { IndexeddbPersistence } from 'y-indexeddb';
import {
  GridDocument,
  GridError,
  History,
  ORIGIN_AGENT,
  readWeftFile,
  seedLandingPage,
  type Alignment,
  type ArtboardFrame,
  type Axis,
  type CreateNodeInput,
  type NodePatch,
} from '@weft/core';
import { SceneStore, makeSceneHooks } from './scene';
import { agentTiming } from '../canvas/agentCursors';
import { artboardHeight } from '../canvas/elements';
import { useEditor } from './store';

export const doc = new GridDocument();
export const history = new History(doc);
export const scene = new SceneStore(doc);
export const { useNode, useChildren } = makeSceneHooks(scene);

/**
 * - server (default): synced with the local Weft server, which owns
 *   seeding and persistence and hosts the MCP bridge. See connection.ts.
 * - offline (?offline): browser-only, persisted to IndexedDB.
 * - ephemeral (?ephemeral): fresh in-memory seed; used by tests.
 */
export type DocumentMode = 'server' | 'offline' | 'ephemeral';

const params = new URLSearchParams(location.search);
export const mode: DocumentMode = params.has('ephemeral') ? 'ephemeral' : params.has('offline') ? 'offline' : 'server';
export const docName = params.get('doc') ?? 'default';

if (mode === 'ephemeral') {
  seedLandingPage(doc);
} else if (mode === 'offline') {
  const persistence = new IndexeddbPersistence(`weft:${docName}`, doc.ydoc);
  persistence.once('synced', () => {
    if (doc.nodes.size === 0) seedLandingPage(doc);
    else doc.repairGradients();
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

/** True when the node or any ancestor is locked: it can't be picked or moved on the canvas. */
export function isLocked(id: string): boolean {
  for (let node = scene.nodes.get(id); node; node = node.parentId ? scene.nodes.get(node.parentId) : undefined) {
    if (node.locked) return true;
  }
  return false;
}

/** Runs a document command, surfacing validation errors instead of throwing. */
/**
 * Stores the rendered height of a hugging artboard as its frame height, so
 * code without a DOM (agents, align/distribute) sees a current value. Called
 * at the end of local gestures rather than on every render: every open editor
 * writing measurements would fight over the value and flood undo.
 */
export function recordHugHeight(id: string): void {
  const frame = scene.nodes.get(id)?.frame;
  const height = artboardHeight(id);
  if (frame?.heightMode === 'hug' && height && height !== frame.height) {
    run(() => doc.updateNode(id, { frame: { height, heightMode: 'hug' } }));
  }
}

/** Applies a frame change as one undo step, recording the hug height once it has rendered. */
export function updateArtboardFrame(id: string, frame: Partial<ArtboardFrame>): void {
  history.beginGesture();
  run(() => doc.updateNode(id, { frame }));
  requestAnimationFrame(() => {
    recordHugHeight(id);
    history.endGesture();
  });
}

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
  duplicateNode: (id: string, options?: { name?: string; frame?: Partial<ArtboardFrame> }) =>
    doc.duplicateNode(id, options, ORIGIN_AGENT),
  alignNodes: (ids: string[], align: Alignment) => doc.alignNodes(ids, align, ORIGIN_AGENT),
  distributeNodes: (ids: string[], axis: Axis) => doc.distributeNodes(ids, axis, ORIGIN_AGENT),
  importFile: (json: string) => doc.importFile(readWeftFile(json), ORIGIN_AGENT),
  setTokens: (tokens: Record<string, string | null>) => doc.setTokens(tokens, ORIGIN_AGENT),
  select: (ids: string[]) => useEditor.getState().select(ids),
};

declare global {
  interface Window {
    weft: {
      doc: GridDocument;
      history: History;
      scene: SceneStore;
      editor: typeof useEditor;
      agent: typeof agentApi;
      agentTiming: typeof agentTiming;
    };
  }
}

window.weft = { doc, history, scene, editor: useEditor, agent: agentApi, agentTiming };
