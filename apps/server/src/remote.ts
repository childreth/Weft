import { createHash, randomBytes, randomUUID, timingSafeEqual } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Remote MCP access for agents outside this machine (e.g. through an ngrok
 * tunnel). Off by default. Each agent gets its own token, stored only as a
 * hash, so it can be named on the canvas and revoked on its own. Only `/mcp`
 * is reachable remotely; sync, editor RPC, assist and these settings stay local.
 */

export interface RemoteAgent {
  id: string;
  name: string;
  created: string;
  /** Last authenticated request since the server started. */
  lastSeen: string | null;
}

interface StoredAgent {
  id: string;
  name: string;
  created: string;
  tokenHash: string;
}

interface Stored {
  enabled: boolean;
  agents: StoredAgent[];
}

export interface RemoteStatus {
  enabled: boolean;
  agents: RemoteAgent[];
  /** Public `/mcp` URL of a running ngrok tunnel to this server, if one is found. */
  publicUrl: string | null;
}

export const AGENT_NAME = /^[\p{L}\p{N}][\p{L}\p{N} ._-]{0,31}$/u;
const MAX_AGENTS = 20;
const NGROK_API = 'http://127.0.0.1:4040/api/tunnels';

const hash = (token: string) => createHash('sha256').update(token).digest();

export class RemoteAccess {
  private state: Stored = { enabled: false, agents: [] };
  private readonly seen = new Map<string, string>();
  private readonly file: string | null;

  constructor(dataDir: string | null) {
    this.file = dataDir ? join(dataDir, 'remote.json') : null;
    if (this.file && existsSync(this.file)) {
      try {
        const saved = JSON.parse(readFileSync(this.file, 'utf8')) as Partial<Stored>;
        this.state = { enabled: saved.enabled === true, agents: Array.isArray(saved.agents) ? saved.agents : [] };
      } catch (err) {
        console.error('[remote] ignoring unreadable remote.json:', (err as Error).message);
      }
    }
  }

  get enabled(): boolean {
    return this.state.enabled;
  }

  setEnabled(enabled: boolean): void {
    this.state.enabled = enabled;
    this.save();
  }

  agents(): RemoteAgent[] {
    return this.state.agents.map(({ id, name, created }) => ({ id, name, created, lastSeen: this.seen.get(id) ?? null }));
  }

  /** Registers an agent; its token is returned once and never stored. */
  addAgent(name: string): { agent: RemoteAgent; token: string } {
    const trimmed = name.trim();
    if (!AGENT_NAME.test(trimmed)) throw new Error('Names are 1–32 letters, digits, spaces, dots, dashes or underscores');
    if (this.state.agents.some((a) => a.name.toLowerCase() === trimmed.toLowerCase())) throw new Error(`"${trimmed}" already has a token`);
    if (this.state.agents.length >= MAX_AGENTS) throw new Error(`At most ${MAX_AGENTS} agents`);
    const token = `weft_${randomBytes(24).toString('base64url')}`;
    const stored: StoredAgent = { id: randomUUID().slice(0, 8), name: trimmed, created: new Date().toISOString(), tokenHash: hash(token).toString('hex') };
    this.state.agents.push(stored);
    this.save();
    return { agent: { id: stored.id, name: stored.name, created: stored.created, lastSeen: null }, token };
  }

  revoke(id: string): boolean {
    const before = this.state.agents.length;
    this.state.agents = this.state.agents.filter((a) => a.id !== id);
    this.seen.delete(id);
    if (this.state.agents.length === before) return false;
    this.save();
    return true;
  }

  /** The agent a token belongs to, while remote access is on. */
  authenticate(token: string | null): { id: string; name: string } | null {
    if (!this.state.enabled || !token) return null;
    const presented = hash(token);
    const agent = this.state.agents.find((a) => timingSafeEqual(Buffer.from(a.tokenHash, 'hex'), presented));
    if (!agent) return null;
    this.seen.set(agent.id, new Date().toISOString());
    return { id: agent.id, name: agent.name };
  }

  async status(port: number): Promise<RemoteStatus> {
    return { enabled: this.state.enabled, agents: this.agents(), publicUrl: await tunnelUrl(port) };
  }

  private save(): void {
    if (!this.file) return;
    mkdirSync(join(this.file, '..'), { recursive: true });
    const tmp = `${this.file}.tmp`;
    writeFileSync(tmp, JSON.stringify(this.state, null, 2), { mode: 0o600 });
    renameSync(tmp, this.file);
  }
}

/** Asks a local ngrok agent (if running) for a tunnel that forwards to `port`. */
async function tunnelUrl(port: number): Promise<string | null> {
  try {
    const res = await fetch(NGROK_API, { signal: AbortSignal.timeout(800) });
    const { tunnels } = (await res.json()) as { tunnels?: Array<{ public_url?: string; config?: { addr?: string } }> };
    const tunnel = tunnels?.find((t) => t.public_url?.startsWith('https://') && new RegExp(`:${port}/?$`).test(t.config?.addr ?? ''));
    return tunnel ? `${tunnel.public_url!.replace(/\/$/, '')}/mcp` : null;
  } catch {
    return null;
  }
}
