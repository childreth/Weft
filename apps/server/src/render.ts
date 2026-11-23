import { chromium, type Browser, type BrowserContext, type Page } from 'playwright-core';

/** Answers a request from the page (fonts, images), or null to block it. */
export type Resource = (url: string) => Promise<{ body: Buffer | string; type: string } | null>;

/** Shows `html` in `page` once its fonts (and any `<weft-3d>` scenes) are ready. */
export async function setPage(page: Page, html: string, waitFor3D = false): Promise<void> {
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate('document.fonts.ready.then(() => 0)');
  if (waitFor3D) {
    await page.evaluate('Promise.resolve(window.__weft3dReady).then(() => 0)');
  }
}

/**
 * Screenshots artboard HTML in a local headless Chromium (the one Playwright
 * installs), so agents can see their work with no editor open. JavaScript is
 * off and every network request is blocked: documents may carry URLs.
 */

/** Longest edge sent back; larger images are scaled down (vision models downsample anyway). */
const MAX_EDGE = 1600;
/** Hugging artboards can be very tall; the screenshot stops here (CSS px). */
const MAX_HEIGHT = 6000;
const MAX_BOXES = 80;

/**
 * Boxes of the rendered subtree, relative to its top-left. Kept as source text:
 * it runs in the page, and transpilers' helpers (e.g. esbuild's __name) don't exist there.
 */
const MEASURE_BOXES = `function ({ selector, depth, max }) {
  const root = document.querySelector(selector);
  const origin = root.getBoundingClientRect();
  const out = [];
  const visit = function (el, d) {
    if (out.length >= max) return;
    const id = el.getAttribute('data-gf-id');
    if (id) {
      const r = el.getBoundingClientRect();
      const item = { id, tag: el.tagName.toLowerCase(), depth: d, x: Math.round(r.left - origin.left), y: Math.round(r.top - origin.top), width: Math.round(r.width), height: Math.round(r.height) };
      // Where the box clips, any overflow hides content. Where it shows overflow, only a real
      // spill counts: tight line heights let glyphs poke a few px out of every heading.
      const style = getComputedStyle(el);
      const slack = function (overflow) {
        return overflow === 'visible' ? Math.max(2, parseFloat(style.fontSize) * 0.5) : 1;
      };
      if (el.scrollWidth > el.clientWidth + slack(style.overflowX) || el.scrollHeight > el.clientHeight + slack(style.overflowY)) item.overflows = true;
      out.push(item);
    }
    if (d < depth) for (const child of el.children) visit(child, id ? d + 1 : d);
  };
  visit(root.matches('.weft-artboard') ? root.firstElementChild : root, 0);
  return out;
}`;

/** One layer as `measure` gives it: `rendered: false` when the page has no element for it. */
export interface MeasuredLayer {
  id: string;
  rendered: boolean;
  box?: { x: number; y: number; width: number; height: number };
  computed?: Record<string, string>;
  overflowing?: boolean;
  visible?: boolean;
}

/**
 * The editor's `measureNode` (apps/web/src/editor/connection.ts) run in an
 * exported page: boxes relative to the artboard, the computed styles that decide
 * layout, and overflow. Keep the two in step. Source text, like MEASURE_BOXES.
 */
const MEASURE_LAYERS = `function ({ ids, text }) {
  const root = document.querySelector('.weft-artboard').firstElementChild;
  const origin = root.getBoundingClientRect();
  const round = function (n) { return Math.round(n * 10) / 10; };
  return ids.map(function (id) {
    const el = document.querySelector('[data-gf-id="' + CSS.escape(id) + '"]');
    if (!el) return { id: id, rendered: false };
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    const computed = { display: cs.display };
    if (cs.display.includes('grid')) {
      computed.gridTemplateColumns = cs.gridTemplateColumns;
      computed.gridTemplateRows = cs.gridTemplateRows;
    }
    if (cs.display.includes('flex')) computed.flexDirection = cs.flexDirection;
    if (cs.display.includes('grid') || cs.display.includes('flex')) computed.gap = cs.gap;
    if (text.includes(id)) {
      computed.fontSize = cs.fontSize;
      computed.lineHeight = cs.lineHeight;
      computed.fontWeight = cs.fontWeight;
      computed.color = cs.color;
    }
    if (cs.backgroundColor !== 'rgba(0, 0, 0, 0)') computed.backgroundColor = cs.backgroundColor;
    return {
      id: id,
      rendered: true,
      box: { x: round(r.left - origin.left), y: round(r.top - origin.top), width: round(r.width), height: round(r.height) },
      computed: computed,
      overflowing: el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1,
      visible: r.width > 0 && r.height > 0,
    };
  });
}`;

export interface RenderBox {
  id: string;
  tag: string;
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  /** Content clipped by the box, or spilling well past it (more than half a line). */
  overflows?: boolean;
}

export interface RenderResult {
  png: Buffer;
  /** CSS px of the rendered region and the scale the PNG was taken at. */
  width: number;
  height: number;
  scale: number;
  truncated: boolean;
  boxes: RenderBox[];
}

export class Renderer {
  private browser: Promise<Browser> | null = null;

  private launch(): Promise<Browser> {
    this.browser ??= chromium
      .launch({
        headless: true,
        args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-webgl', '--ignore-gpu-blocklist'],
      })
      .catch((err: Error) => {
        this.browser = null;
        throw new Error(
          `Rendering needs Chromium: run "pnpm --filter @weft/web exec playwright install chromium" (${err.message.split('\n')[0]})`,
        );
      });
    return this.browser;
  }

  /**
   * A page showing `html` at `width` × `height` CSS px, with JavaScript off
   * (unless the page contains `<weft-3d>`, in which case only Weft's local
   * bundled 3D runtime is served) and every request blocked except what
   * `resource` answers. Close its context when done.
   */
  async open(html: string, opts: { width: number; height: number; scale?: number; resource?: Resource }): Promise<{ context: BrowserContext; page: Page }> {
    const browser = await this.launch();
    const has3D = html.includes('<weft-3d');
    const context = await browser.newContext({
      viewport: { width: Math.round(opts.width), height: Math.round(opts.height) },
      deviceScaleFactor: opts.scale ?? 1,
      javaScriptEnabled: has3D,
    });
    try {
      await context.route('**/*', async (route) => {
        const found = await opts.resource?.(route.request().url()).catch(() => null);
        // The page's origin is opaque (setContent), and fonts are CORS requests.
        if (found) return route.fulfill({ body: found.body, contentType: found.type, headers: { 'access-control-allow-origin': '*' } });
        return route.abort();
      });
      const page = await context.newPage();
      await setPage(page, html, has3D);
      return { context, page };
    } catch (err) {
      await context.close();
      throw err;
    }
  }

  /**
   * Renders `html` at `width` CSS px and screenshots the artboard, or the
   * element `[data-gf-id=target]` when given. Boxes cover that element's
   * subtree to `depth` levels, relative to the screenshot's top-left.
   */
  async screenshot(html: string, opts: { width: number; target?: string; depth?: number; scale?: number; resource?: Resource }): Promise<RenderResult> {
    const selector = opts.target ? `[data-gf-id="${opts.target.replace(/["\\]/g, '')}"]` : '.weft-artboard';
    const width = Math.round(opts.width);
    const load = (scale: number, height: number) => this.open(html, { width, height, scale, resource: opts.resource });

    // Measure at 1x, then shoot with a viewport tall enough for the clip, scaled down if it's big.
    let { context, page } = await load(1, 800);
    try {
      const el = page.locator(selector).first();
      if ((await el.count()) === 0) throw new Error(`Nothing to render for ${opts.target ?? 'the artboard'}`);
      const box = await el.boundingBox();
      if (!box || box.width < 1 || box.height < 1) throw new Error('That node has no size (hidden, empty or display: none)');
      const height = Math.min(box.height, MAX_HEIGHT);
      const scale = Math.min(opts.scale ?? 1, MAX_EDGE / Math.max(box.width, height), 2);
      await context.close();
      ({ context, page } = await load(scale, Math.ceil(Math.max(800, box.y + height))));
      const png = await page.screenshot({ clip: { x: box.x, y: box.y, width: box.width, height }, type: 'png' });
      const boxes = (await page.evaluate(`(${MEASURE_BOXES})(${JSON.stringify({ selector, depth: opts.depth ?? 2, max: MAX_BOXES })})`)) as RenderBox[];
      return {
        png,
        width: Math.round(box.width),
        height: Math.round(height),
        scale: Math.round(scale * 100) / 100,
        truncated: box.height > MAX_HEIGHT,
        boxes,
      };
    } finally {
      await context.close();
    }
  }

  /**
   * Measures layers of `html` (an artboard page) at `width` CSS px, the way the
   * editor's `getLayout` does on the canvas and in the same shape, so an agent
   * reads the same thing with or without an editor open. `text` lists the ids of
   * text layers, which also report their type styles.
   */
  async measure(html: string, opts: { width: number; ids: string[]; text: string[]; resource?: Resource }): Promise<MeasuredLayer[]> {
    const { context, page } = await this.open(html, { width: opts.width, height: 800, resource: opts.resource });
    try {
      return (await page.evaluate(`(${MEASURE_LAYERS})(${JSON.stringify({ ids: opts.ids, text: opts.text })})`)) as MeasuredLayer[];
    } finally {
      await context.close();
    }
  }

  async close(): Promise<void> {
    const browser = this.browser;
    this.browser = null;
    if (browser) await (await browser.catch(() => null))?.close();
  }
}
