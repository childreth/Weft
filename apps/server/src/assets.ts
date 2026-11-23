import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ASSET_NAME, ASSET_TYPES, IMAGE_TYPES, MAX_IMAGE_BYTES, MAX_MODEL_BYTES, MODEL_TYPES, sniffAsset, type AssetExt } from '@weft/core';

/**
 * Images, stored by content in `.weft-data/assets/<sha256>.<ext>` (in memory
 * without a data directory). Documents refer to them as `asset:<name>`; the
 * same image uploaded twice is stored once. Files are never rewritten, so
 * they're served as immutable.
 */

export class AssetError extends Error {}

export interface StoredAsset {
  /** `<sha256>.<ext>` */
  name: string;
  type: string;
  bytes: number;
}

export class AssetStore {
  private readonly memory = new Map<string, Buffer>();

  constructor(private readonly dir: string | null) {}

  /** Stores an image or 3D model after checking what it really is. `expected` (from a saved file) must match its content. */
  put(body: Buffer, expected?: string): StoredAsset {
    if (body.length === 0) throw new AssetError('Empty file');
    const ext = sniffAsset(body);
    if (!ext) throw new AssetError(`Not a supported image or 3D model (${Object.keys(ASSET_TYPES).join(', ')})`);
    const isModel = ext in MODEL_TYPES;
    const limit = isModel ? MAX_MODEL_BYTES : MAX_IMAGE_BYTES;
    if (body.length > limit) {
      throw new AssetError(`${isModel ? '3D models' : 'Images'} can be up to ${limit / 1024 / 1024} MB`);
    }
    const name = `${createHash('sha256').update(body).digest('hex')}.${ext}`;
    if (expected !== undefined && expected !== name) throw new AssetError(`Asset ${expected} doesn't match its content`);
    if (!this.has(name)) this.write(name, body);
    return { name, type: ASSET_TYPES[ext], bytes: body.length };
  }

  has(name: string): boolean {
    return this.dir ? existsSync(join(this.dir, name)) : this.memory.has(name);
  }

  /** An asset by name, or null for an unknown or malformed name. */
  get(name: string): { body: Buffer; type: string } | null {
    const match = ASSET_NAME.exec(name);
    if (!match || !this.has(name)) return null;
    const body = this.dir ? readFileSync(join(this.dir, name)) : this.memory.get(name)!;
    return { body, type: ASSET_TYPES[match[2] as AssetExt] };
  }

  private write(name: string, body: Buffer): void {
    if (!this.dir) return void this.memory.set(name, body);
    mkdirSync(this.dir, { recursive: true });
    // Written whole, then renamed: a half-written file would be served as immutable.
    const tmp = join(this.dir, `.${name}.tmp`);
    writeFileSync(tmp, body);
    renameSync(tmp, join(this.dir, name));
  }
}
