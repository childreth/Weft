import { createServer, type Server } from 'node:http';
import type { AddressInfo } from 'node:net';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { startGridServer, type GridServer } from './server';

/** A stand-in for fonts.googleapis.com + fonts.gstatic.com that counts requests. */
let google: Server;
let googleUp = true;
const hits: string[] = [];
let server: GridServer;
let client: Client;

beforeAll(async () => {
  google = createServer((req, res) => {
    hits.push(req.url!);
    if (!googleUp) return req.socket.destroy();
    const base = `http://127.0.0.1:${(google.address() as AddressInfo).port}`;
    if (req.url!.startsWith('/css2')) {
      return res.end(`@font-face { font-family: 'Lora'; font-weight: 400; src: url(${base}/files/s/lora/v35/lora-400.woff2) format('woff2'); }`);
    }
    if (req.url === '/files/s/lora/v35/lora-400.woff2') return res.end(Buffer.from('wOF2fake'));
    res.statusCode = 404;
    res.end();
  });
  await new Promise<void>((r) => google.listen(0, '127.0.0.1', r));
  const base = `http://127.0.0.1:${(google.address() as AddressInfo).port}`;
  server = await startGridServer({ port: 0, dataDir: null, fontOrigins: { css: base, files: `${base}/files/` } });
  client = new Client({ name: 'test', version: '1.0.0' });
  await client.connect(new StreamableHTTPClientTransport(new URL(`${server.httpUrl}/mcp`)));
});

afterAll(async () => {
  await client.close();
  await server.close();
  google.close();
});

async function call(name: string, args: Record<string, unknown> = {}) {
  const res = (await client.callTool({ name, arguments: args })) as { content: Array<{ text: string }>; isError?: boolean };
  return { isError: !!res.isError, text: res.content[0]!.text, data: (() => { try { return JSON.parse(res.content[0]!.text); } catch { return null; } })() };
}

describe('Google Fonts', () => {
  it('searches the bundled catalog with no network', async () => {
    const { data } = await call('search_fonts', { query: 'playfair', limit: 3 });
    expect(data.fonts[0].family).toBe('Playfair');
    expect(data.fonts).toContainEqual(expect.objectContaining({ family: 'Playfair Display', category: 'serif' }));
    const mono = await call('search_fonts', { category: 'monospace', limit: 5 });
    expect(mono.data.fonts.every((f: { category: string }) => f.category === 'monospace')).toBe(true);
    expect(hits).toEqual([]);
  });

  it('adds fonts as tokens, undoably, and rejects unknown ones', async () => {
    const added = await call('add_fonts', { doc: 'fonts', fonts: [{ family: 'lora', weights: [400] }], model: 'test' });
    expect(added.data).toEqual({ fonts: [{ family: 'Lora', weights: [400] }], use: { Lora: 'var(--font-family-lora)' } });
    const tokens = await call('list_tokens', { doc: 'fonts', group: 'font-family' });
    expect(tokens.data.tokens.map((t: { use: string }) => t.use)).toContain('var(--font-family-lora)');

    const bad = await call('add_fonts', { doc: 'fonts', fonts: [{ family: 'Comic Sans MS' }] });
    expect(bad.text).toContain('Unknown font "Comic Sans MS"');

    await call('undo_agent_change', { doc: 'fonts' });
    expect(server.rooms.get('fonts').doc.getFonts()).toEqual([]);
  });

  it('serves the stylesheet and files from a local cache that survives going offline', async () => {
    const origin = { origin: 'http://localhost:5173' };
    const css = await fetch(`${server.httpUrl}/fonts.css?q=${encodeURIComponent('Lora:400')}`, { headers: origin });
    expect(css.headers.get('access-control-allow-origin')).toBe('http://localhost:5173');
    const text = await css.text();
    expect(text).toContain(`url(${server.httpUrl}/fonts/files/s/lora/v35/lora-400.woff2)`);
    const file = await fetch(`${server.httpUrl}/fonts/files/s/lora/v35/lora-400.woff2`, { headers: origin });
    expect(file.headers.get('content-type')).toBe('font/woff2');
    expect(await file.text()).toBe('wOF2fake');

    googleUp = false;
    const before = hits.length;
    expect(await (await fetch(`${server.httpUrl}/fonts.css?q=Lora:400`)).text()).toContain('lora-400.woff2');
    expect(await (await fetch(`${server.httpUrl}/fonts/files/s/lora/v35/lora-400.woff2`)).text()).toBe('wOF2fake');
    expect(hits.length).toBe(before);
    // Not cached and offline: an empty sheet, so text falls back to the stack.
    expect(await (await fetch(`${server.httpUrl}/fonts.css?q=Inter:400`)).text()).toMatch(/^\/\* Fonts unavailable offline/);
    googleUp = true;
  });

  it('refuses arbitrary proxying and cross-site pages', async () => {
    expect((await fetch(`${server.httpUrl}/fonts/files/../../etc/passwd`)).status).toBe(404);
    expect((await fetch(`${server.httpUrl}/fonts/files/s/x/v1/a.exe`)).status).toBe(404);
    expect(await (await fetch(`${server.httpUrl}/fonts.css?q=${encodeURIComponent('https://evil.example/x:400')}`)).text()).toBe('');
    expect((await fetch(`${server.httpUrl}/fonts.css?q=Lora:400`, { headers: { origin: 'https://evil.example' } })).status).toBe(403);
  });

  it('loads the document fonts when screenshotting, from the cache', async () => {
    await call('add_fonts', { doc: 'fonts-shot', fonts: [{ family: 'Lora', weights: [400] }] });
    const res = (await client.callTool({ name: 'get_screenshot', arguments: { doc: 'fonts-shot' } })) as { isError?: boolean };
    expect(res.isError).toBeFalsy();
  });
});
