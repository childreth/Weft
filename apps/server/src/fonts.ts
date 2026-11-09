import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { googleFontsCSSUrl, type DocumentFont } from '@weft/core';

/**
 * Local Google Fonts cache. The first time a font is needed, its stylesheet
 * and font files are fetched from Google and kept in `.weft-data/fonts/`;
 * after that they're served from disk, so documents keep their fonts offline.
 * Stylesheets are rewritten to point at this server instead of Google.
 */

export interface FontOrigins {
  css: string;
  /** Ends with a slash. */
  files: string;
}

const GOOGLE: FontOrigins = { css: 'https://fonts.googleapis.com', files: 'https://fonts.gstatic.com/' };
/** Google serves woff2 (with unicode-range subsets) only to browsers that ask like one. */
const BROWSER_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36';
const FILE_PATH = /^s\/[a-z0-9]+\/v\d+\/[\w.-]+\.(woff2|woff|ttf)$/;
const FETCH_TIMEOUT_MS = 8000;

export class FontCache {
  private readonly memory = new Map<string, Buffer>();

  constructor(
    private readonly dir: string | null,
    private readonly origins: FontOrigins = GOOGLE,
  ) {}

  /**
   * The stylesheet for `fonts`, with font URLs under `fileBase`. Each family is
   * fetched and cached on its own, so adding a font (or a change to one
   * family's URL, like icon fonts gaining their FILL axis) never refetches the
   * others. Offline, a family that isn't cached is left out, and text falls
   * back to each token's fallback stack.
   */
  async css(fonts: readonly DocumentFont[], fileBase: string): Promise<string> {
    if (fonts.length === 0) return '';
    const sheets = await Promise.all(fonts.map((font) => this.sheet(googleFontsCSSUrl([font], this.origins.css)!)));
    let css: string;
    if (sheets.every((sheet) => sheet !== null)) {
      css = sheets.join('\n');
    } else {
      // Sheets cached before each family had its own (all fonts in one URL, icons without FILL) still work offline.
      const legacy = this.read(this.key(googleFontsCSSUrl(fonts, this.origins.css, { iconFill: false })!))?.toString('utf8');
      const missing = fonts.filter((_, i) => sheets[i] === null).map((f) => f.family);
      css = legacy ?? [`/* Fonts unavailable offline until first loaded online: ${missing.join(', ').replace(/\*\//g, '')} */`, ...sheets.filter((s) => s !== null)].join('\n');
    }
    return css.replaceAll(this.origins.files, `${fileBase.replace(/\/$/, '')}/`);
  }

  /** One family's stylesheet from the cache, else from Google (then cached); null if neither. */
  private async sheet(url: string): Promise<string | null> {
    const key = this.key(url);
    const cached = this.read(key)?.toString('utf8');
    if (cached !== undefined) return cached;
    try {
      const res = await fetch(url, { headers: { 'user-agent': BROWSER_UA }, signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
      if (!res.ok) throw new Error(`Google Fonts responded ${res.status}`);
      const css = await res.text();
      this.write(key, Buffer.from(css));
      return css;
    } catch {
      return null;
    }
  }

  private key(url: string): string {
    return `css/${createHash('sha256').update(url).digest('hex').slice(0, 24)}.css`;
  }

  /** A font file by its fonts.gstatic.com path, cached on first use. Null if it can't be had. */
  async file(path: string): Promise<{ body: Buffer; type: string } | null> {
    if (!FILE_PATH.test(path)) return null;
    const type = path.endsWith('.woff2') ? 'font/woff2' : path.endsWith('.woff') ? 'font/woff' : 'font/ttf';
    const key = `files/${path}`;
    const cached = this.read(key);
    if (cached) return { body: cached, type };
    try {
      const res = await fetch(this.origins.files + path, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
      if (!res.ok) return null;
      const body = Buffer.from(await res.arrayBuffer());
      this.write(key, body);
      return { body, type };
    } catch {
      return null;
    }
  }

  private read(key: string): Buffer | undefined {
    if (!this.dir) return this.memory.get(key);
    const path = join(this.dir, key);
    return existsSync(path) ? readFileSync(path) : undefined;
  }

  private write(key: string, body: Buffer): void {
    if (!this.dir) return void this.memory.set(key, body);
    const path = join(this.dir, key);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, body);
  }
}
