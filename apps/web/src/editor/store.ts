import { create } from 'zustand';
import type { StateId } from '@weft/core';

export type Tool = 'select' | 'frame' | 'text';

export interface Camera {
  x: number;
  y: number;
  zoom: number;
}

export type ConnectionStatus = 'local' | 'connecting' | 'connected' | 'disconnected';

export interface Collaborator {
  clientId: number;
  kind: 'human' | 'agent';
  name: string;
  color: string;
  /** Agents only. */
  agent?: AgentPresenceView;
}

export type FocusKind = 'read' | 'edit' | 'create' | 'text';

/** What an agent is doing, as seen by this editor. Times are local `performance.now()`. */
export interface AgentPresenceView {
  /** The model it reports, shown on its cursor. */
  model?: string;
  /** Its MCP client's name. */
  client?: string;
  /** What its latest tool call did, e.g. "Styling Hero". */
  action?: string;
  /** When its latest tool call arrived here; -Infinity if it predates this editor. */
  activeAt: number;
  /** The nodes its cursor follows: for creates, every new node in document order. */
  focus?: { seq: number; ids: string[]; roots?: string[]; kind: FocusKind; at: number };
}

/** The nodes an agent touched in its latest tool call, highlighted briefly. */
export interface AgentActivity {
  seq: number;
  tool: string;
  ids: string[];
  action?: string;
  name: string;
  color: string;
}

export const MIN_ZOOM = 0.05;
export const MAX_ZOOM = 32;

interface EditorState {
  tool: Tool;
  camera: Camera;
  selection: string[];
  hoveredId: string | null;
  editingTextId: string | null;
  spaceHeld: boolean;
  notice: string | null;
  connection: ConnectionStatus;
  collaborators: Collaborator[];
  agentActivity: AgentActivity | null;
  /** Layers collapsed in the layers panel. */
  collapsed: ReadonlySet<string>;
  /** Artboards in interact mode: the canvas steps aside so they work like a page. This viewer only. */
  interacting: ReadonlySet<string>;
  /** A layer shown in one of its states (the Inspector's Preview), as if hovered, focused or pressed. */
  statePreview: { id: string; state: StateId } | null;
  setTool(tool: Tool): void;
  setCamera(camera: Camera): void;
  /** Zoom by `factor` keeping the screen point (px, py) fixed. */
  zoomAt(px: number, py: number, factor: number): void;
  select(ids: string[]): void;
  setHovered(id: string | null): void;
  setEditingText(id: string | null): void;
  setSpaceHeld(held: boolean): void;
  setNotice(notice: string | null): void;
  setConnection(connection: ConnectionStatus): void;
  setCollaborators(collaborators: Collaborator[]): void;
  setAgentActivity(activity: AgentActivity | null): void;
  setCollapsed(id: string, collapsed: boolean): void;
  /** Collapses these layers and expands every other (⌥L passes every layer with children). */
  collapseOnly(ids: Iterable<string>): void;
  setInteracting(id: string, on: boolean): void;
  setStatePreview(preview: { id: string; state: StateId } | null): void;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** Local, per-viewer UI state. Document state lives in the GridDocument. */
export const useEditor = create<EditorState>()((set, get) => ({
  tool: 'select',
  camera: { x: 80, y: 80, zoom: 0.6 },
  selection: [],
  hoveredId: null,
  editingTextId: null,
  spaceHeld: false,
  notice: null,
  connection: 'local',
  collaborators: [],
  agentActivity: null,
  collapsed: new Set(),
  interacting: new Set(),
  statePreview: null,
  setTool: (tool) => set({ tool }),
  setCamera: (camera) => set({ camera }),
  zoomAt: (px, py, factor) => {
    const c = get().camera;
    const zoom = clamp(c.zoom * factor, MIN_ZOOM, MAX_ZOOM);
    const k = zoom / c.zoom;
    set({ camera: { zoom, x: px - (px - c.x) * k, y: py - (py - c.y) * k } });
  },
  // A preview belongs to the selected layer: selecting something else ends it.
  select: (selection) => set((s) => ({ selection, ...(s.statePreview && !selection.includes(s.statePreview.id) && { statePreview: null }) })),
  setHovered: (hoveredId) => set({ hoveredId }),
  setEditingText: (editingTextId) => set({ editingTextId }),
  setSpaceHeld: (spaceHeld) => set({ spaceHeld }),
  setNotice: (notice) => set({ notice }),
  setConnection: (connection) => set({ connection }),
  setCollaborators: (collaborators) => set({ collaborators }),
  setAgentActivity: (agentActivity) => set({ agentActivity }),
  setCollapsed: (id, collapsed) => {
    if (get().collapsed.has(id) === collapsed) return;
    const next = new Set(get().collapsed);
    if (collapsed) next.add(id);
    else next.delete(id);
    set({ collapsed: next });
  },
  collapseOnly: (ids) => set({ collapsed: new Set(ids) }),
  setStatePreview: (statePreview) => set({ statePreview }),
  setInteracting: (id, on) => {
    if (get().interacting.has(id) === on) return;
    const next = new Set(get().interacting);
    if (on) next.add(id);
    else next.delete(id);
    set({ interacting: next });
  },
}));
