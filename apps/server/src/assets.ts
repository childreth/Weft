import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ASSET_NAME, IMAGE_TYPES, MAX_IMAGE_BYTES, sniffImage, type ImageExt } from '@weft/core';

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

  /** Stores an image after checking what it really is. `expected` (from a saved file) must match its content. */
  put(body: Buffer, expected?: string): StoredAsset {
    if (body.length === 0) throw new AssetError('Empty file');
    if (body.length > MAX_IMAGE_BYTES) throw new AssetError(`Images can be up to ${MAX_IMAGE_BYTES / 1024 / 1024} MB`);
    const ext = sniffImage(body);
    if (!ext) throw new AssetError(`Not a supported image (${Object.keys(IMAGE_TYPES).join(', ')})`);
    const name = `${createHash('sha256').update(body).digest('hex')}.${ext}`;
    if (expected !== undefined && expected !== name) throw new AssetError(`Image ${expected} doesn't match its content`);
    if (!this.has(name)) this.write(name, body);
    return { name, type: IMAGE_TYPES[ext], bytes: body.length };
  }

  has(name: string): boolean {
    return this.dir ? existsSync(join(this.dir, name)) : this.memory.has(name);
  }

  /** An image by name, or null for an unknown or malformed name. */
  get(name: string): { body: Buffer; type: string } | null {
    const match = ASSET_NAME.exec(name);
    if (!match || !this.has(name)) return null;
    const body = this.dir ? readFileSync(join(this.dir, name)) : this.memory.get(name)!;
    return { body, type: IMAGE_TYPES[match[2] as ImageExt] };
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
