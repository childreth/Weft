import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const BUNDLE_PATH = join(HERE, '../dist-runtime/weft-3d-runtime.js');

let cached: Buffer | null = null;

/**
 * Returns the local offline Three.js browser runtime bundle for `<weft-3d>`
 * elements in headless screenshots and exported pages, or null if not built yet.
 */
export function get3DRuntime(): { body: Buffer; type: string } | null {
  if (!cached) {
    if (!existsSync(BUNDLE_PATH)) return null;
    cached = readFileSync(BUNDLE_PATH);
  }
  return { body: cached, type: 'application/javascript' };
}
