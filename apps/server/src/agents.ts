import { randomUUID } from 'node:crypto';
import * as Y from 'yjs';
import * as awarenessProtocol from 'y-protocols/awareness';
import { ORIGIN_AGENT } from '@weft/core';

const CALLSIGNS = ['Drift', 'Echo', 'Flare', 'Onyx', 'Nova', 'Pixel', 'Quill', 'Ember', 'Sable', 'Vega'];
export const AGENT_COLORS = ['#a855f7', '#14b8a6', '#6366f1', '#e8833a', '#ec4899', '#0ea5e9'];

/**
 * Who an MCP session is: a callsign and color handed out by the server, plus
 * the model it says it is (tool `model` argument) or its MCP client name.
 */
export class AgentIdentity {
  private model: string | null = null;
  client: string | null = null;
  readonly presences = new Set<AgentPresence>();

  constructor(
    readonly key: string,
    readonly callsign: string,
    readonly color: string,
  ) {}

  /** Transaction origin for this agent's edits, so undo can be per agent. */
  get origin(): string {
    return `${ORIGIN_AGENT}:${this.key}`;
  }

  get modelName(): string | null {
    return this.model;
  }

  get label(): string {
    return this.model ? `${this.callsign} · ${this.model}` : this.callsign;
  }

  setModel(model: string | undefined): void {
    const next = model?.trim().slice(0, 60) || null;
    if (!next || next === this.model) return;
    this.model = next;
    for (const p of this.presences) p.publish();
  }
}

/** Hands out callsigns and colors round-robin. One per server. */
export class AgentRoster {
  private count = 0;

  next(): AgentIdentity {
    const n = this.count++;
    const suffix = n >= CALLSIGNS.length ? ` ${Math.floor(n / CALLSIGNS.length) + 1}` : '';
    return new AgentIdentity(randomUUID().slice(0, 8), CALLSIGNS[n % CALLSIGNS.length]! + suffix, AGENT_COLORS[n % AGENT_COLORS.length]!);
  }
}

/** How the editor should move the cursor: read = hover, create = visit each new node, text = caret at the end. */
export type FocusKind = 'read' | 'edit' | 'create' | 'text';
const FOCUS_LIMIT = 200;

interface AwarenessChange {
  added: number[];
  updated: number[];
  removed: number[];
}

/**
 * One agent inside one document: its own awareness client (cursor, focus,
 * activity) relayed into the room, and an undo stack of only its edits.
 */
export class AgentPresence {
  readonly undo: Y.UndoManager;
  lastSeen = Date.now();
  private readonly awareness = new awarenessProtocol.Awareness(new Y.Doc());
  private activity: { seq: number; tool: string; ids: string[]; action: string } | null = null;
  private focus: { seq: number; ids: string[]; roots?: string[]; kind: FocusKind } | null = null;
  /** Bumped on every tool call, so editors know the agent is still active. */
  private beat = 0;
  private action: string | null = null;
  private seq = 0;

  constructor(
    readonly identity: AgentIdentity,
    nodes: Y.AbstractType<any>,
    roomAwareness: awarenessProtocol.Awareness,
  ) {
    this.undo = new Y.UndoManager(nodes, { trackedOrigins: new Set([identity.origin]), captureTimeout: 0 });
    this.awareness.on('update', ({ added, updated, removed }: AwarenessChange) => {
      const update = awarenessProtocol.encodeAwarenessUpdate(this.awareness, [...added, ...updated, ...removed]);
      awarenessProtocol.applyAwarenessUpdate(roomAwareness, update, this);
    });
    identity.presences.add(this);
    this.publish();
  }

  get clientId(): number {
    return this.awareness.clientID;
  }

  publish(): void {
    this.awareness.setLocalState({
      kind: 'agent',
      user: { name: this.identity.callsign, color: this.identity.color },
      model: this.identity.modelName,
      client: this.identity.client,
      beat: this.beat,
      action: this.action,
      activity: this.activity,
      focus: this.focus,
    });
  }

  private touch(action: string | null): void {
    this.lastSeen = Date.now();
    this.beat = ++this.seq;
    this.action = action;
  }

  /** A read: the cursor hovers over `ids` (if any) labelled with `action`. */
  look(ids: string[], action: string | null): void {
    this.touch(action);
    if (ids.length) this.focus = { seq: ++this.seq, ids: ids.slice(0, FOCUS_LIMIT), kind: 'read' };
    this.publish();
  }

  /**
   * An edit: editors flash `flash`; the cursor moves over `focus` (for creates,
   * every new node in document order, with `roots` the top of each subtree).
   */
  reportEdit(tool: string, action: string, flash: string[], focus: string[], kind: FocusKind, roots?: string[]): void {
    this.touch(action);
    this.activity = { seq: ++this.seq, tool, ids: flash, action };
    if (focus.length) this.focus = { seq: ++this.seq, ids: focus.slice(0, FOCUS_LIMIT), kind, ...(roots && { roots }) };
    this.publish();
  }

  destroy(): void {
    this.identity.presences.delete(this);
    this.undo.destroy();
    this.awareness.destroy(); // clears the state, which removes the cursor everywhere
  }
}
