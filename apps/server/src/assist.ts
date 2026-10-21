import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import type { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import type { AgentIdentity, AgentRoster } from './agents';
import { ROOM_NAME, type RoomRegistry } from './room';
import { SERVER_INSTRUCTIONS, compact, createMcpServer, type ToolServices } from './tools';

/**
 * In-editor assistant backed by a local model (Ollama). Each editor tab gets
 * its own agent identity and an in-process MCP client to the same tools
 * outside agents use, so local edits get the cursor, highlights, atomic
 * transactions and per-agent undo for free.
 */

export const DEFAULT_OLLAMA_URL = 'http://127.0.0.1:11434';
const MAX_STEPS = 12;
const MAX_TOOL_RESULT_CHARS = 8000;
/** User turns of history sent back to the model. */
const HISTORY_TURNS = 6;
const SESSION_IDLE_MS = 30 * 60 * 1000;
/** Filled in by the assistant, so small models never have to get them right. */
const INJECTED_ARGS = ['doc', 'model'];
/** Not offered to local models: they can't see images, and the skill would fill a small context. */
const EXCLUDED_TOOLS = new Set(['read_skill', 'get_screenshot']);

export const SESSION_ID = /^[A-Za-z0-9_-]{8,64}$/;

/** Ollama's server address: `OLLAMA_HOST` may omit the scheme or port. */
export function ollamaUrlFrom(host: string | undefined): string {
  if (!host) return DEFAULT_OLLAMA_URL;
  const withScheme = /^https?:\/\//.test(host) ? host : `http://${host}`;
  const url = new URL(withScheme);
  if (!url.port && !/^https?:\/\/[^/]+:\d+/.test(withScheme)) url.port = '11434';
  return url.origin;
}

interface OllamaTool {
  type: 'function';
  function: { name: string; description: string; parameters: Record<string, unknown> };
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  tool_calls?: Array<{ function: { name: string; arguments: unknown } }>;
  tool_name?: string;
}

export interface AssistModel {
  name: string;
  size: number;
  thinking: boolean;
}

/** Streamed to the editor as NDJSON, one event per line. */
export type AssistEvent =
  | { type: 'tool'; name: string; args: Record<string, unknown> }
  | { type: 'tool_result'; name: string; ok: boolean; text: string }
  | { type: 'message'; text: string }
  | { type: 'error'; message: string }
  | { type: 'done'; edits: number };

interface Session {
  identity: AgentIdentity;
  mcp: McpServer;
  client: Client;
  tools: OllamaTool[];
  history: ChatMessage[];
  lastSeen: number;
  busy: boolean;
  /** The agent's undo-stack depth before each turn that edited, newest last. */
  turns: Array<{ doc: string; depth: number }>;
}

export interface ChatRequest {
  doc: string;
  session: string;
  model: string;
  prompt: string;
  selection?: string[];
}

function toOllamaTool(tool: { name: string; description?: string; inputSchema: Record<string, unknown> }): OllamaTool {
  const schema = structuredClone(tool.inputSchema) as { properties?: Record<string, unknown>; required?: string[] };
  for (const key of INJECTED_ARGS) delete schema.properties?.[key];
  if (schema.required) schema.required = schema.required.filter((k) => !INJECTED_ARGS.includes(k));
  return { type: 'function', function: { name: tool.name, description: tool.description ?? '', parameters: schema } };
}

function parseArgs(raw: unknown): Record<string, unknown> {
  if (typeof raw === 'string') {
    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
      return {};
    }
  }
  return raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {};
}

/** History trimmed to the last few user turns, so a turn's tool messages stay with it. */
function recent(history: ChatMessage[]): ChatMessage[] {
  let turns = 0;
  for (let i = history.length - 1; i >= 0; i--) {
    if (history[i]!.role === 'user' && ++turns === HISTORY_TURNS) return history.slice(i);
  }
  return history;
}

export class Assistant {
  private readonly sessions = new Map<string, Session>();
  private readonly sweep: NodeJS.Timeout;

  constructor(
    private readonly rooms: RoomRegistry,
    private readonly roster: AgentRoster,
    readonly ollamaUrl: string,
    private readonly services: ToolServices,
  ) {
    this.sweep = setInterval(() => {
      for (const [id, s] of this.sessions) if (!s.busy && Date.now() - s.lastSeen > SESSION_IDLE_MS) this.end(id);
    }, 60_000).unref();
  }

  /** Local models that can call tools. Cloud-hosted Ollama models are left out (offline-first). */
  async models(signal?: AbortSignal): Promise<AssistModel[]> {
    const res = await fetch(`${this.ollamaUrl}/api/tags`, { signal });
    if (!res.ok) throw new Error(`Ollama responded ${res.status}`);
    const { models } = (await res.json()) as {
      models: Array<{ name: string; size?: number; remote_host?: string; capabilities?: string[] }>;
    };
    return models
      .filter((m) => !m.remote_host && !/[:-]cloud$/.test(m.name))
      .filter((m) => !m.capabilities || m.capabilities.includes('tools'))
      .map((m) => ({ name: m.name, size: m.size ?? 0, thinking: !!m.capabilities?.includes('thinking') }))
      .sort((a, b) => b.size - a.size);
  }

  private async open(id: string): Promise<Session> {
    const existing = this.sessions.get(id);
    if (existing) return existing;
    const identity = this.roster.next();
    const mcp = createMcpServer(this.rooms, identity, this.services);
    const client = new Client({ name: 'Weft Assist', version: '0.1.0' });
    const [clientSide, serverSide] = InMemoryTransport.createLinkedPair();
    await mcp.connect(serverSide);
    await client.connect(clientSide);
    const { tools } = await client.listTools();
    const session: Session = {
      identity,
      mcp,
      client,
      tools: tools.filter((t) => !EXCLUDED_TOOLS.has(t.name)).map((t) => toOllamaTool(t as Parameters<typeof toOllamaTool>[0])),
      history: [],
      lastSeen: Date.now(),
      busy: false,
      turns: [],
    };
    this.sessions.set(id, session);
    return session;
  }

  private systemPrompt(req: ChatRequest): string {
    const room = this.rooms.get(req.doc);
    const selected = (req.selection ?? []).filter((id) => room.doc.has(id)).slice(0, 20);
    const selection = selected.length
      ? `When the user sent this request they had selected these nodes ("this", "these", "it" refer to them). Your edits since are not reflected here:\n${JSON.stringify(
          selected.map((id) => compact(room.doc.getTree(id)[0]!, 4)),
        )}`
      : 'Nothing is selected. Call get_canvas to see the document.';
    return `${SERVER_INSTRUCTIONS}

You are the assistant built into the Weft editor, running on a local model. The "doc" and "model" arguments are filled in for you: never pass them. read_skill and get_screenshot aren't available here: skip those steps.
Make the change the user asks for with as few tool calls as possible, batching nodes into one create_nodes or update_nodes call. Use node ids exactly as given. When done, reply in one or two short sentences saying what you changed. Do not paste JSON back to the user.

${selection}`;
  }

  /** Runs one user turn: model ↔ tools until the model answers, emitting progress as it goes. */
  async chat(req: ChatRequest, emit: (e: AssistEvent) => void, signal: AbortSignal): Promise<void> {
    if (!ROOM_NAME.test(req.doc)) throw new Error('Invalid document name');
    const session = await this.open(req.session);
    if (session.busy) throw new Error('Assist is already working on a request in this tab');
    session.busy = true;
    session.lastSeen = Date.now();
    const presence = this.rooms.get(req.doc).agent(session.identity);
    const depth = presence.undo.undoStack.length;
    session.history.push({ role: 'user', content: req.prompt });
    try {
      // Snapshot the selection once: re-reading it after edits makes models think their change was already there.
      const system = this.systemPrompt(req);
      for (let step = 0; step < MAX_STEPS; step++) {
        const reply = await this.complete(session, req.model, system, signal);
        session.history.push(reply);
        const calls = reply.tool_calls ?? [];
        if (calls.length === 0) {
          emit({ type: 'message', text: reply.content.trim() || 'Done.' });
          return;
        }
        for (const call of calls) {
          if (signal.aborted) return;
          const name = call.function.name;
          const args = parseArgs(call.function.arguments);
          emit({ type: 'tool', name, args });
          const text = await this.callTool(session, name, { ...args, doc: req.doc, model: req.model });
          emit({ type: 'tool_result', name, ok: !text.isError, text: text.text.slice(0, 400) });
          session.history.push({ role: 'tool', tool_name: name, content: text.text.slice(0, MAX_TOOL_RESULT_CHARS) });
        }
      }
      emit({ type: 'error', message: `Stopped after ${MAX_STEPS} steps without a final answer.` });
    } catch (err) {
      if (!signal.aborted) emit({ type: 'error', message: (err as Error).message });
    } finally {
      session.busy = false;
      session.lastSeen = Date.now();
      const edits = presence.undo.undoStack.length - depth;
      if (edits > 0) session.turns.push({ doc: req.doc, depth });
      emit({ type: 'done', edits: Math.max(edits, 0) });
    }
  }

  private async complete(session: Session, model: string, system: string, signal: AbortSignal): Promise<ChatMessage> {
    const models = await this.models(signal).catch(() => []);
    const thinking = models.find((m) => m.name === model)?.thinking;
    const res = await fetch(`${this.ollamaUrl}/api/chat`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      signal,
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: system }, ...recent(session.history)],
        tools: session.tools,
        stream: false,
        // Reasoning makes local models far slower for small edits.
        ...(thinking && { think: false }),
        options: { temperature: 0.2 },
      }),
    });
    if (!res.ok) throw new Error(`Ollama: ${(await res.text()).slice(0, 300) || res.status}`);
    const { message } = (await res.json()) as { message: ChatMessage };
    return { role: 'assistant', content: message.content ?? '', ...(message.tool_calls?.length && { tool_calls: message.tool_calls }) };
  }

  private async callTool(session: Session, name: string, args: Record<string, unknown>): Promise<{ text: string; isError: boolean }> {
    if (!session.tools.some((t) => t.function.name === name)) return { text: `Unknown tool "${name}"`, isError: true };
    try {
      const res = (await session.client.callTool({ name, arguments: args })) as {
        content?: Array<{ type: string; text?: string }>;
        isError?: boolean;
      };
      const text = (res.content ?? []).map((c) => c.text ?? '').join('\n');
      return { text, isError: !!res.isError };
    } catch (err) {
      return { text: (err as Error).message, isError: true };
    }
  }

  /** Reverts every edit of this tab's most recent turn that changed something. */
  undoTurn(id: string): number {
    const session = this.sessions.get(id);
    const turn = session?.turns.pop();
    if (!session || !turn) return 0;
    const { undo } = this.rooms.get(turn.doc).agent(session.identity);
    let undone = 0;
    while (undo.undoStack.length > turn.depth && undo.canUndo()) {
      undo.undo();
      undone++;
    }
    return undone;
  }

  /** Forgets the conversation; the agent (cursor, undo) stays. */
  reset(id: string): void {
    const session = this.sessions.get(id);
    if (session) session.history = [];
  }

  private end(id: string): void {
    const session = this.sessions.get(id);
    if (!session) return;
    this.sessions.delete(id);
    this.rooms.removeAgent(session.identity.key);
    void session.client.close();
    void session.mcp.close();
  }

  close(): void {
    clearInterval(this.sweep);
    for (const id of [...this.sessions.keys()]) this.end(id);
  }
}
