import { mkdtempSync, readFileSync } from 'node:fs';
import { request } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { RemoteAccess } from './remote';
import { startGridServer, type GridServer } from './server';

let server: GridServer;
const dataDir = mkdtempSync(join(tmpdir(), 'weft-remote-'));
/** What ngrok adds to every forwarded request. */
const TUNNEL = { 'x-forwarded-for': '203.0.113.7' };

beforeAll(async () => {
  server = await startGridServer({ port: 0, dataDir });
});

afterAll(async () => {
  await server.close();
});

/** A raw request, so the Host header can be set the way a tunnel sends it. */
function send(path: string, opts: { method?: string; headers?: Record<string, string>; body?: unknown } = {}) {
  return new Promise<{ status: number; body: string }>((resolve, reject) => {
    const req = request(
      `${server.httpUrl}${path}`,
      {
        method: opts.method ?? 'GET',
        headers: { 'content-type': 'application/json', accept: 'application/json, text/event-stream', ...opts.headers },
      },
      (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => resolve({ status: res.statusCode!, body }));
      },
    );
    req.on('error', reject);
    req.end(opts.body === undefined ? undefined : JSON.stringify(opts.body));
  });
}

const INIT = { jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'muse', version: '1' } } };
const settings = (route: string, body: unknown) => send(`/remote/${route}`, { method: 'POST', body });

async function remoteClient(token: string): Promise<Client> {
  const client = new Client({ name: 'muse', version: '1.0.0' });
  const url = new URL(`${server.httpUrl}/mcp`);
  await client.connect(new StreamableHTTPClientTransport(url, { requestInit: { headers: { ...TUNNEL, authorization: `Bearer ${token}` } } }));
  return client;
}

const callsigns = (doc: string) => [...server.rooms.get(doc).awareness.getStates().values()].map((s) => (s as { user?: { name: string } }).user?.name);

describe('remote MCP access', () => {
  let muse: { agent: { id: string; name: string }; token: string };
  let grok: { agent: { id: string; name: string }; token: string };

  it('is off by default: tunneled requests are refused even to /mcp', async () => {
    expect((await send('/remote')).body).toContain('"enabled":false');
    const res = await send('/mcp', { method: 'POST', headers: { ...TUNNEL, host: 'weft.ngrok.app' }, body: INIT });
    expect(res.status).toBe(403);
  });

  it('issues one token per agent, shown once and stored hashed', async () => {
    muse = JSON.parse((await settings('agents', { name: 'Muse' })).body);
    grok = JSON.parse((await settings('agents', { name: 'GrokBot' })).body);
    expect(muse.token).toMatch(/^weft_/);
    expect((await settings('agents', { name: 'muse' })).status).toBe(400);
    expect((await settings('agents', { name: '<script>' })).status).toBe(400);
    const stored = readFileSync(join(dataDir, 'remote.json'), 'utf8');
    expect(stored).toContain('Muse');
    expect(stored).not.toContain(muse.token);
    expect((await send('/remote')).body).not.toContain('tokenHash');
  });

  it('lets an agent in through the tunnel with its own token and name', async () => {
    await settings('enabled', { enabled: true });
    const tunneled = { ...TUNNEL, host: 'weft.ngrok.app' };
    expect((await send('/mcp', { method: 'POST', headers: tunneled, body: INIT })).status).toBe(401);
    expect((await send('/mcp', { method: 'POST', headers: { ...tunneled, authorization: 'Bearer weft_nope' }, body: INIT })).status).toBe(401);

    const client = await remoteClient(muse.token);
    const res = (await client.callTool({ name: 'get_canvas', arguments: { doc: 'remote' } })) as { isError?: boolean };
    expect(res.isError).toBeFalsy();
    expect(callsigns('remote')).toContain('Muse');
    // A URL-only client can pass the token as ?key=.
    expect((await send(`/mcp?key=${grok.token}`, { method: 'POST', headers: tunneled, body: INIT })).status).toBe(200);
    await client.close();
  });

  it('only exposes /mcp remotely, never to web pages, and catches rewritten Host headers', async () => {
    const auth = { authorization: `Bearer ${muse.token}` };
    // ngrok --host-header=rewrite: Host says localhost, but the request was forwarded.
    expect((await send('/health', { headers: { ...TUNNEL, host: 'localhost' } })).status).toBe(403);
    expect((await send('/remote', { headers: { ...TUNNEL, ...auth } })).status).toBe(403);
    expect((await send('/assist/models', { headers: { ...TUNNEL, ...auth } })).status).toBe(403);
    expect((await send('/mcp', { method: 'POST', headers: { ...TUNNEL, ...auth, origin: 'https://evil.example' }, body: INIT })).status).toBe(403);
    // The settings routes refuse cross-site pages.
    expect((await send('/remote', { headers: { origin: 'https://evil.example' } })).status).toBe(403);

    const upgrade = await new Promise<string>((resolve) => {
      import('ws').then(({ WebSocket }) => {
        const ws = new WebSocket(`${server.wsUrl}/remote`, { headers: { ...TUNNEL, ...auth } });
        ws.on('open', () => (ws.close(), resolve('open')));
        ws.on('unexpected-response', (_req, res) => resolve(String(res.statusCode)));
        ws.on('error', () => resolve('error'));
      });
    });
    expect(upgrade).toBe('403');
  });

  it("keeps sessions to their own token, and revoking or switching off cuts agents off", async () => {
    const client = await remoteClient(muse.token);
    const sessionId = (client.transport as StreamableHTTPClientTransport).sessionId!;
    const list = { jsonrpc: '2.0', id: 2, method: 'tools/list' };
    const asGrok = await send('/mcp', { method: 'POST', headers: { ...TUNNEL, authorization: `Bearer ${grok.token}`, 'mcp-session-id': sessionId }, body: list });
    expect(asGrok.status).toBe(404);

    expect((await settings('revoke', { id: muse.agent.id })).status).toBe(200);
    const revoked = await send('/mcp', { method: 'POST', headers: { ...TUNNEL, authorization: `Bearer ${muse.token}`, 'mcp-session-id': sessionId }, body: list });
    expect(revoked.status).toBe(401);
    await client.close().catch(() => {});

    await remoteClient(grok.token);
    await settings('enabled', { enabled: false });
    expect((await send('/mcp', { method: 'POST', headers: { ...TUNNEL, authorization: `Bearer ${grok.token}` }, body: INIT })).status).toBe(403);
    expect(callsigns('remote')).not.toContain('GrokBot');
  });

  it('remembers the switch and agents across restarts', () => {
    const reloaded = new RemoteAccess(dataDir);
    expect(reloaded.enabled).toBe(false);
    expect(reloaded.agents().map((a) => a.name)).toEqual(['GrokBot']);
    reloaded.setEnabled(true);
    expect(reloaded.authenticate(grok.token)).toMatchObject({ name: 'GrokBot' });
    expect(reloaded.authenticate(muse.token)).toBeNull();
  });
});
