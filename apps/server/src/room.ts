import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import * as Y from 'yjs';
import * as awarenessProtocol from 'y-protocols/awareness';
import * as syncProtocol from 'y-protocols/sync';
import * as encoding from 'lib0/encoding';
import * as decoding from 'lib0/decoding';
import type { WebSocket } from 'ws';
import { GridDocument, ORIGIN_AGENT, seedLandingPage } from '@weft/core';

// y-websocket wire protocol message types.
const MESSAGE_SYNC = 0;
const MESSAGE_AWARENESS = 1;
const MESSAGE_QUERY_AWARENESS = 3;

export const ROOM_NAME = /^[a-zA-Z0-9_-]{1,64}$/;
export const AGENT_COLOR = '#a855f7';
const SAVE_DEBOUNCE_MS = 300;
const RPC_TIMEOUT_MS = 4000;

export interface HumanPresence {
  clientId: number;
  user: { name: string; color: string };
  selection: string[];
}

interface PendingCall {
  resolve(value: unknown): void;
  reject(error: Error): void;
  timer: NodeJS.Timeout;
}

function send(ws: WebSocket, message: Uint8Array): void {
  if (ws.readyState === ws.OPEN) ws.send(message);
}

/**
 * One shared document: the authoritative Y.Doc, connected editors (Yjs sync +
 * awareness), browser RPC channels, and an undo stack for agent edits.
 */
export class Room {
  readonly ydoc = new Y.Doc();
  readonly doc = new GridDocument(this.ydoc);
  readonly awareness = new awarenessProtocol.Awareness(this.ydoc);
  readonly agentUndo: Y.UndoManager;
  private readonly conns = new Map<WebSocket, Set<number>>();
  private readonly rpcClients: WebSocket[] = [];
  private readonly pending = new Map<number, PendingCall>();
  private rpcSeq = 0;
  private activitySeq = 0;
  private saveTimer: NodeJS.Timeout | null = null;

  constructor(
    readonly name: string,
    private readonly dataDir: string | null,
  ) {
    const loaded = this.load();
    if (!loaded) seedLandingPage(this.doc);
    this.agentUndo = new Y.UndoManager(this.doc.nodes, { trackedOrigins: new Set([ORIGIN_AGENT]), captureTimeout: 0 });
    this.awareness.setLocalState({ kind: 'agent', user: { name: 'Agent', color: AGENT_COLOR }, activity: null });

    this.ydoc.on('update', (update: Uint8Array) => {
      const enc = encoding.createEncoder();
      encoding.writeVarUint(enc, MESSAGE_SYNC);
      syncProtocol.writeUpdate(enc, update);
      this.broadcast(encoding.toUint8Array(enc));
      this.scheduleSave();
    });

    this.awareness.on('update', ({ added, updated, removed }: AwarenessChange, origin: unknown) => {
      const controlled = this.conns.get(origin as WebSocket);
      if (controlled) {
        for (const id of added) controlled.add(id);
        for (const id of removed) controlled.delete(id);
      }
      const enc = encoding.createEncoder();
      encoding.writeVarUint(enc, MESSAGE_AWARENESS);
      encoding.writeVarUint8Array(
        enc,
        awarenessProtocol.encodeAwarenessUpdate(this.awareness, [...added, ...updated, ...removed]),
      );
      this.broadcast(encoding.toUint8Array(enc));
    });
  }

  // ── Yjs sync connections ─────────────────────────────────────────────────

  addConnection(ws: WebSocket): void {
    this.conns.set(ws, new Set());
    ws.on('message', (data: Buffer) => {
      try {
        this.onMessage(ws, new Uint8Array(data.buffer, data.byteOffset, data.byteLength));
      } catch (err) {
        console.error(`[${this.name}] bad sync message`, err);
        ws.close();
      }
    });
    ws.on('close', () => {
      const ids = this.conns.get(ws);
      this.conns.delete(ws);
      if (ids?.size) awarenessProtocol.removeAwarenessStates(this.awareness, [...ids], null);
    });

    const enc = encoding.createEncoder();
    encoding.writeVarUint(enc, MESSAGE_SYNC);
    syncProtocol.writeSyncStep1(enc, this.ydoc);
    send(ws, encoding.toUint8Array(enc));
    this.sendAwareness(ws);
  }

  private onMessage(ws: WebSocket, message: Uint8Array): void {
    const decoder = decoding.createDecoder(message);
    const type = decoding.readVarUint(decoder);
    switch (type) {
      case MESSAGE_SYNC: {
        const enc = encoding.createEncoder();
        encoding.writeVarUint(enc, MESSAGE_SYNC);
        syncProtocol.readSyncMessage(decoder, enc, this.ydoc, ws);
        if (encoding.length(enc) > 1) send(ws, encoding.toUint8Array(enc));
        break;
      }
      case MESSAGE_AWARENESS:
        awarenessProtocol.applyAwarenessUpdate(this.awareness, decoding.readVarUint8Array(decoder), ws);
        break;
      case MESSAGE_QUERY_AWARENESS:
        this.sendAwareness(ws);
        break;
    }
  }

  private sendAwareness(ws: WebSocket): void {
    const clients = [...this.awareness.getStates().keys()];
    if (clients.length === 0) return;
    const enc = encoding.createEncoder();
    encoding.writeVarUint(enc, MESSAGE_AWARENESS);
    encoding.writeVarUint8Array(enc, awarenessProtocol.encodeAwarenessUpdate(this.awareness, clients));
    send(ws, encoding.toUint8Array(enc));
  }

  private broadcast(message: Uint8Array): void {
    for (const ws of this.conns.keys()) send(ws, message);
  }

  get connectionCount(): number {
    return this.conns.size;
  }

  humans(): HumanPresence[] {
    const out: HumanPresence[] = [];
    for (const [clientId, state] of this.awareness.getStates()) {
      if (state?.kind !== 'human') continue;
      out.push({
        clientId,
        user: state.user ?? { name: 'Unknown', color: '#888' },
        selection: Array.isArray(state.selection) ? state.selection : [],
      });
    }
    return out;
  }

  /** Broadcasts what the agent just touched so editors can highlight it. */
  reportActivity(tool: string, ids: string[]): void {
    this.awareness.setLocalStateField('activity', { seq: ++this.activitySeq, tool, ids });
  }

  // ── Browser RPC (computed layout, viewport control) ──────────────────────

  addRpcClient(ws: WebSocket): void {
    this.rpcClients.push(ws);
    ws.on('message', (data: Buffer) => {
      let msg: { id?: number; result?: unknown; error?: string };
      try {
        msg = JSON.parse(data.toString());
      } catch {
        return;
      }
      const call = msg.id !== undefined ? this.pending.get(msg.id) : undefined;
      if (!call) return;
      this.pending.delete(msg.id!);
      clearTimeout(call.timer);
      if (msg.error) call.reject(new Error(msg.error));
      else call.resolve(msg.result);
    });
    ws.on('close', () => {
      const i = this.rpcClients.indexOf(ws);
      if (i >= 0) this.rpcClients.splice(i, 1);
    });
  }

  get hasEditorOpen(): boolean {
    return this.rpcClients.some((ws) => ws.readyState === ws.OPEN);
  }

  /** Calls the most recently connected editor. */
  callEditor<T>(method: string, params: unknown): Promise<T> {
    const ws = [...this.rpcClients].reverse().find((c) => c.readyState === c.OPEN);
    if (!ws) {
      return Promise.reject(new Error(`No Weft editor is open for document "${this.name}". Ask the user to open it.`));
    }
    const id = ++this.rpcSeq;
    return new Promise<T>((resolve, reject) => {
      const timer = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`Editor did not answer "${method}" within ${RPC_TIMEOUT_MS}ms`));
      }, RPC_TIMEOUT_MS);
      this.pending.set(id, { resolve: resolve as (v: unknown) => void, reject, timer });
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  /** Sends a fire-and-forget command to every open editor. */
  notifyEditors(method: string, params: unknown): number {
    let count = 0;
    for (const ws of this.rpcClients) {
      if (ws.readyState !== ws.OPEN) continue;
      ws.send(JSON.stringify({ method, params }));
      count++;
    }
    return count;
  }

  // ── Persistence ──────────────────────────────────────────────────────────

  private get files() {
    return this.dataDir
      ? { ydoc: join(this.dataDir, `${this.name}.ydoc`), json: join(this.dataDir, `${this.name}.weft.json`) }
      : null;
  }

  private load(): boolean {
    const files = this.files;
    if (!files) return false;
    try {
      Y.applyUpdate(this.ydoc, readFileSync(files.ydoc), 'load');
      return true;
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === 'ENOENT') return false;
      throw err;
    }
  }

  private scheduleSave(): void {
    if (!this.files || this.saveTimer) return;
    this.saveTimer = setTimeout(() => this.flush(), SAVE_DEBOUNCE_MS);
  }

  flush(): void {
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = null;
    const files = this.files;
    if (!files) return;
    mkdirSync(this.dataDir!, { recursive: true });
    writeAtomic(files.ydoc, Y.encodeStateAsUpdate(this.ydoc));
    // Human-readable, Git-friendly snapshot alongside the CRDT state.
    writeAtomic(files.json, JSON.stringify(this.doc.toSnapshot(), null, 2));
  }

  close(): void {
    this.flush();
    for (const call of this.pending.values()) {
      clearTimeout(call.timer);
      call.reject(new Error('Server shutting down'));
    }
    this.pending.clear();
    this.awareness.destroy();
  }
}

interface AwarenessChange {
  added: number[];
  updated: number[];
  removed: number[];
}

function writeAtomic(path: string, data: Uint8Array | string): void {
  const tmp = `${path}.tmp`;
  writeFileSync(tmp, data);
  renameSync(tmp, path);
}

export class RoomRegistry {
  private readonly rooms = new Map<string, Room>();

  constructor(private readonly dataDir: string | null) {}

  get(name: string): Room {
    if (!ROOM_NAME.test(name)) throw new Error(`Invalid document name "${name}"`);
    let room = this.rooms.get(name);
    if (!room) {
      room = new Room(name, this.dataDir);
      this.rooms.set(name, room);
    }
    return room;
  }

  names(): string[] {
    return [...this.rooms.keys()];
  }

  close(): void {
    for (const room of this.rooms.values()) room.close();
    this.rooms.clear();
  }
}
