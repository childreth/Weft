import type { Locator, Page } from 'playwright-core';
import { setPage, type Renderer, type Resource } from './render';

/**
 * Flow tests: click and type through an exported artboard in headless
 * Chromium, the way a person would, and check what happens. Popovers,
 * dialogs, details and forms run natively here (no canvas emulation), and a
 * link to another artboard opens that artboard's page. Steps stop at the first
 * failure, since later ones usually depend on it.
 */

export const FLOW_ACTIONS = ['click', 'hover', 'focus', 'fill', 'press', 'select', 'check', 'uncheck', 'expect'] as const;
export type FlowAction = (typeof FLOW_ACTIONS)[number];
export const FLOW_STATES = ['visible', 'hidden', 'open', 'closed', 'focused', 'checked', 'unchecked', 'enabled', 'disabled'] as const;
export type FlowState = (typeof FLOW_STATES)[number];

/** What a step acts on: a node id, or how a person finds it (role and accessible name, label, text). */
export interface FlowTarget {
  id?: string;
  role?: string;
  name?: string;
  label?: string;
  text?: string;
  exact?: boolean;
}

export interface FlowStep {
  action: FlowAction;
  target?: FlowTarget;
  /** fill: the text to enter; expect: text the target should contain. */
  text?: string;
  /** press: a key such as Enter, Escape, Tab, ArrowDown. */
  key?: string;
  /** select: an option's label or value; expect: an input's value. */
  value?: string;
  /** expect: the state the target should be in. */
  state?: FlowState;
  /** Capture the page after this step. */
  screenshot?: boolean;
}

export interface FlowPage {
  id: string;
  name: string;
  html: string;
}

export interface FlowStepResult {
  step: number;
  action: FlowAction;
  target?: string;
  ok: boolean;
  /** What happened beyond the action itself (went to another artboard, a link not followed). */
  note?: string;
  error?: string;
}

export interface FlowResult {
  passed: boolean;
  steps: FlowStepResult[];
  /** The artboard the flow ended on. */
  artboard: { id: string; name: string };
  /** ARIA snapshot of the page where the flow ended (or failed). */
  snapshot: string;
  /** Console errors and resources that didn't load. */
  errors: string[];
  screenshots: { step: number; png: Buffer }[];
}

const ACTION_TIMEOUT = 2000;
/** How long an expectation waits for transitions and late layout. */
const EXPECT_TIMEOUT = 1500;
const MAX_SCREENSHOTS = 4;
const MAX_SHOT_HEIGHT = 4000;
/**
 * Page-side code as source text, made into functions here: it runs in the
 * page, where transpilers' helpers (esbuild's __name) don't exist. See render.ts.
 */
const onElement = (body: string) => new Function('n', body) as (n: unknown) => unknown;
const IS_OPEN = onElement(`return n.matches('[open], :popover-open') && n.checkVisibility();`);
const HAS_FOCUS = onElement(`return n === document.activeElement || n.contains(document.activeElement);`);
const LINK_HREF = onElement(`const a = n.closest('a'); return a ? a.getAttribute('href') : null;`);
const ACTIVE_ELEMENT = `(() => {
  const a = document.activeElement;
  if (!a || a === document.body) return 'nothing';
  const text = (a.textContent || '').trim().slice(0, 40);
  return a.tagName.toLowerCase() + (text ? ' "' + text + '"' : '');
})()`;
const PAGE_HEIGHT = 'document.documentElement.scrollHeight';
const NEEDS_TARGET: ReadonlySet<FlowAction> = new Set(['click', 'hover', 'focus', 'fill', 'select', 'check', 'uncheck', 'expect']);

export function describeTarget(t: FlowTarget | undefined): string | undefined {
  if (!t) return undefined;
  if (t.id) return `#${t.id}`;
  if (t.role) return t.name ? `${t.role} "${t.name}"` : t.role;
  if (t.label) return `field labeled "${t.label}"`;
  if (t.text) return `text "${t.text}"`;
  return 'nothing';
}

/** Problems with the steps themselves, found before anything runs. */
export function flowStepIssues(steps: readonly FlowStep[]): string[] {
  const issues: string[] = [];
  steps.forEach((s, i) => {
    const at = `steps[${i}] (${s.action})`;
    const t = s.target;
    if (NEEDS_TARGET.has(s.action) && !(t && (t.id || t.role || t.label || t.text))) issues.push(`${at}: needs a target (id, role with name, label or text)`);
    if (t?.name && !t.role) issues.push(`${at}: target.name goes with target.role (e.g. {"role": "button", "name": "Save"})`);
    if (s.action === 'fill' && s.text === undefined) issues.push(`${at}: needs text`);
    if (s.action === 'press' && !s.key) issues.push(`${at}: needs key (Enter, Escape, Tab…)`);
    if (s.action === 'select' && s.value === undefined) issues.push(`${at}: needs value (an option's label or value)`);
    if (s.action === 'expect' && !s.state && s.text === undefined && s.value === undefined) issues.push(`${at}: needs state, text or value`);
  });
  return issues;
}

function locate(page: Page, t: FlowTarget): Locator {
  const exact = t.exact ?? false;
  if (t.id) return page.locator(`[data-gf-id="${t.id.replace(/["\\]/g, '')}"]`);
  if (t.role) return page.getByRole(t.role as Parameters<Page['getByRole']>[0], { name: t.name, exact });
  if (t.label) return page.getByLabel(t.label, { exact });
  return page.getByText(t.text!, { exact });
}

/** Why nothing matches: roles skip hidden elements, so say when it exists but is hidden. */
async function missing(page: Page, t: FlowTarget | undefined, what: string): Promise<string> {
  if (t?.role && !t.id) {
    const hidden = await page
      .getByRole(t.role as Parameters<Page['getByRole']>[0], { name: t.name, exact: t.exact ?? false, includeHidden: true })
      .count()
      .catch(() => 0);
    if (hidden > 0) return `${what} is hidden (closed, display: none or zero size)`;
  }
  return `No element matches ${what}`;
}

/** Why an action on `loc` couldn't happen, in words an agent can act on. */
async function diagnose(loc: Locator, t: FlowTarget | undefined, what: string, err: unknown): Promise<string> {
  const count = await loc.count().catch(() => 0);
  if (count === 0) return missing(loc.page(), t, what);
  if (count > 1) return `${what} matches ${count} elements; add a name, exact: true or use an id`;
  if (!(await loc.isVisible().catch(() => false))) return `${what} is hidden (closed, display: none or zero size)`;
  if (await loc.isDisabled().catch(() => false)) return `${what} is disabled`;
  return (err as Error).message.split('\n')[0]!.replace(/^locator\.\w+: /, '');
}

/** Polls `check` until it returns null (met) or time runs out; returns the last complaint. */
async function waitFor(check: () => Promise<string | null>): Promise<string | null> {
  const end = Date.now() + EXPECT_TIMEOUT;
  for (;;) {
    const problem = await check().catch((err: Error) => err.message.split('\n')[0]!);
    if (!problem || Date.now() > end) return problem;
    await new Promise((r) => setTimeout(r, 50));
  }
}

async function expectState(loc: Locator, what: string, step: FlowStep): Promise<string | null> {
  return waitFor(async () => {
    const count = await loc.count();
    if (step.state === 'hidden' || step.state === 'closed') {
      if (count === 0) return null;
    } else if (count === 0) return missing(loc.page(), step.target, what);
    if (count > 1) return `${what} matches ${count} elements; add a name, exact: true or use an id`;
    const el = loc.first();
    switch (step.state) {
      case 'visible':
        if (!(await el.isVisible())) return `${what} is hidden`;
        break;
      case 'hidden':
        if (await el.isVisible()) return `${what} is visible`;
        break;
      case 'open':
      case 'closed': {
        const open = (await el.evaluate(IS_OPEN)) as boolean;
        if (open !== (step.state === 'open')) return `${what} is ${open ? 'open' : 'closed'}`;
        break;
      }
      case 'focused':
        if (!(await el.evaluate(HAS_FOCUS))) {
          const active = (await el.page().evaluate(ACTIVE_ELEMENT)) as string;
          return `${what} isn't focused (focus is on ${active})`;
        }
        break;
      case 'checked':
      case 'unchecked': {
        const checked = await el.isChecked();
        if (checked !== (step.state === 'checked')) return `${what} is ${checked ? 'checked' : 'unchecked'}`;
        break;
      }
      case 'enabled':
      case 'disabled': {
        const disabled = await el.isDisabled();
        if (disabled !== (step.state === 'disabled')) return `${what} is ${disabled ? 'disabled' : 'enabled'}`;
        break;
      }
    }
    if (step.text !== undefined) {
      const text = (await el.innerText()).replace(/\s+/g, ' ').trim();
      if (!text.toLowerCase().includes(step.text.toLowerCase())) return `${what} reads "${text.slice(0, 120)}", not "${step.text}"`;
    }
    if (step.value !== undefined) {
      const value = await el.inputValue();
      if (value !== step.value) return `${what} has value "${value}", not "${step.value}"`;
    }
    return null;
  });
}

/**
 * Runs `steps` on `start`. `link` resolves an `href` to another artboard's
 * page, or null when it isn't one.
 */
export async function runFlow(
  renderer: Renderer,
  start: FlowPage,
  steps: readonly FlowStep[],
  opts: { width: number; height: number; resource?: Resource; link: (href: string) => FlowPage | null },
): Promise<FlowResult> {
  const { context, page } = await renderer.open(start.html, { width: opts.width, height: opts.height, resource: opts.resource });
  const errors: string[] = [];
  page.on('requestfailed', (r) => errors.push(`Couldn't load ${r.url()}`));
  page.on('console', (m) => {
    if (m.type() === 'error' && !m.text().startsWith('Failed to load resource')) errors.push(m.text());
  });
  page.on('pageerror', (err) => errors.push(err.message));
  page.setDefaultTimeout(ACTION_TIMEOUT);

  let current = start;
  const results: FlowStepResult[] = [];
  const screenshots: FlowResult['screenshots'] = [];
  try {
    for (const [i, step] of steps.entries()) {
      const what = describeTarget(step.target);
      const result: FlowStepResult = { step: i, action: step.action, ...(what && { target: what }), ok: true };
      results.push(result);
      const loc = step.target ? locate(page, step.target) : null;
      try {
        switch (step.action) {
          case 'click': {
            const href = (await loc!.evaluate(LINK_HREF, null, { timeout: ACTION_TIMEOUT })) as string | null;
            const next = href ? opts.link(href) : null;
            if (next) {
              // Act like the click happened (it must be clickable), then open the artboard it names.
              await loc!.click({ trial: true });
              current = next;
              await setPage(page, next.html);
              result.note = `Went to artboard "${next.name}"`;
            } else if (href && !href.startsWith('#')) {
              await loc!.click({ trial: true });
              result.note = `Links to ${href}; other pages aren't opened in flow tests`;
            } else {
              await loc!.click();
            }
            break;
          }
          case 'hover':
            await loc!.hover();
            break;
          case 'focus':
            await loc!.focus();
            break;
          case 'fill':
            await loc!.fill(step.text!);
            break;
          case 'press':
            if (loc) await loc.press(step.key!);
            else await page.keyboard.press(step.key!);
            break;
          case 'select':
            await loc!.selectOption([{ label: step.value! }]).catch(() => loc!.selectOption(step.value!));
            break;
          case 'check':
            await loc!.check();
            break;
          case 'uncheck':
            await loc!.uncheck();
            break;
          case 'expect': {
            const problem = await expectState(loc!, what!, step);
            if (problem) throw new FlowFailure(problem);
            break;
          }
        }
      } catch (err) {
        result.ok = false;
        result.error = err instanceof FlowFailure ? err.message : await diagnose(loc ?? page.locator('body'), step.target, what ?? 'the page', err);
      }
      // A form submit or a navigation replaces the page: put the artboard back.
      if ((await page.locator('.weft-artboard').count().catch(() => 0)) === 0) {
        await setPage(page, current.html);
        result.note = [result.note, 'The page navigated away (a form submit or a link); the flow test reloaded the artboard, so its state was reset'].filter(Boolean).join('. ');
      }
      if (step.screenshot && screenshots.length < MAX_SCREENSHOTS) {
        const height = Math.min(MAX_SHOT_HEIGHT, Math.max(opts.height, ((await page.evaluate(PAGE_HEIGHT)) as number)));
        screenshots.push({ step: i, png: await page.screenshot({ type: 'png', fullPage: height > opts.height, clip: { x: 0, y: 0, width: opts.width, height } }) });
      }
      if (!result.ok) break;
    }
    return {
      passed: results.length === steps.length && results.every((r) => r.ok),
      steps: results,
      artboard: { id: current.id, name: current.name },
      snapshot: await page.locator('body').ariaSnapshot(),
      errors: [...new Set(errors)],
      screenshots,
    };
  } finally {
    await context.close();
  }
}

class FlowFailure extends Error {}
