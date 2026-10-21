import { chromium, type Browser } from 'playwright-core';

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
      if (el.scrollWidth > el.clientWidth + 1 || el.scrollHeight > el.clientHeight + 1) item.overflows = true;
      out.push(item);
    }
    if (d < depth) for (const child of el.children) visit(child, id ? d + 1 : d);
  };
  visit(root.matches('.weft-artboard') ? root.firstElementChild : root, 0);
  return out;
}`;

export interface RenderBox {
  id: string;
  tag: string;
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  /** Content wider or taller than the box (clipped or scrolling). */
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
    this.browser ??= chromium.launch({ headless: true }).catch((err: Error) => {
      this.browser = null;
      throw new Error(
        `Rendering needs Chromium: run "pnpm --filter @weft/web exec playwright install chromium" (${err.message.split('\n')[0]})`,
      );
    });
    return this.browser;
  }

  /**
   * Renders `html` at `width` CSS px and screenshots the artboard, or the
   * element `[data-gf-id=target]` when given. Boxes cover that element's
   * subtree to `depth` levels, relative to the screenshot's top-left.
   */
  async screenshot(html: string, opts: { width: number; target?: string; depth?: number; scale?: number }): Promise<RenderResult> {
    const browser = await this.launch();
    const selector = opts.target ? `[data-gf-id="${opts.target.replace(/["\\]/g, '')}"]` : '.weft-artboard';
    const width = Math.round(opts.width);
    const load = async (deviceScaleFactor: number, height: number) => {
      const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor, javaScriptEnabled: false });
      await context.route('**/*', (route) => route.abort());
      const page = await context.newPage();
      await page.setContent(html, { waitUntil: 'load' });
      return { context, page };
    };

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

  async close(): Promise<void> {
    const browser = this.browser;
    this.browser = null;
    if (browser) await (await browser.catch(() => null))?.close();
  }
}
