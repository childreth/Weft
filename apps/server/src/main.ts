import { resolve } from 'node:path';
import { startGridServer } from './server';

const port = Number(process.env.WEFT_PORT ?? 4510);
const data = process.env.WEFT_DATA ?? resolve(import.meta.dirname, '../../../.weft-data');
const dataDir = data === ':memory:' ? null : data;

const server = await startGridServer({ port, dataDir });

console.log(`Weft server on ${server.httpUrl}`);
console.log(`  documents: ${dataDir ?? '(in memory)'}`);
console.log(`  sync:      ${server.wsUrl}/<doc>`);
console.log(`  MCP:       ${server.httpUrl}/mcp`);
console.log(`  connect Claude Code: claude mcp add --transport http weft ${server.httpUrl}/mcp`);

let closing = false;
for (const signal of ['SIGINT', 'SIGTERM'] as const) {
  process.on(signal, async () => {
    if (closing) return;
    closing = true;
    await server.close();
    process.exit(0);
  });
}
