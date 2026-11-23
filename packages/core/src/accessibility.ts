import type { SceneTree } from './schema';

/**
 * Accessibility checks over a page as it's drawn (instances expanded:
 * `expandTree`). They look for what a screenshot can't show and a model won't
 * notice, and only where the answer is a fact about the page, not a judgment:
 * four tabs that each say they're the current page, a button a screen reader
 * can only call "button", a field with no label. Each problem names the layers
 * involved, so a caller can show only the ones that concern what it just
 * changed. Colour contrast needs resolved tokens and is left for later.
 */

export type AccessibilityRule = 'aria-current' | 'name' | 'label' | 'heading-order' | 'duplicate-id';

export interface AccessibilityIssue {
  rule: AccessibilityRule;
  /**
   * The layers involved, as stored ids: a layer drawn for an instance gives the
   * instance's id and the component layer it comes from (`source`), since its
   * own id is derived and nothing can edit it.
   */
  ids: string[];
  message: string;
}

/** One layer in reading order, with what the checks need from around it. */
interface Drawn {
  node: SceneTree;
  /** Ancestors, nearest first. */
  ancestors: SceneTree[];
  /** The nearest instance it's drawn for (itself, if it is one). */
  instance?: SceneTree;
}

const ICON_FONT = /material-symbols/;
const HEADING = /^h([1-6])$/;
/** Elements whose current item is one of a set: the set is where two current items conflict. */
const GROUP_TAGS = new Set(['nav', 'ul', 'ol', 'menu', 'table', 'tbody', 'fieldset']);
const GROUP_ROLES = new Set(['tablist', 'menu', 'menubar', 'listbox', 'grid', 'radiogroup', 'tree', 'navigation']);
/** Inputs a person types into or chooses with, which need a label. */
const UNLABELED_INPUT_TYPES = new Set(['hidden', 'submit', 'button', 'reset', 'image']);

/** Every drawn layer in reading order, hidden ones (and what's in them) left out. */
function walk(root: SceneTree): Drawn[] {
  const out: Drawn[] = [];
  const visit = (node: SceneTree, ancestors: SceneTree[], instance: SceneTree | undefined) => {
    if (node.hidden) return;
    const own = node.instance ? node : instance;
    out.push({ node, ancestors, instance: own });
    for (const child of node.children) visit(child, [node, ...ancestors], own);
  };
  visit(root, [], undefined);
  return out;
}

/** The stored layers behind a drawn one. */
const storedIds = ({ node, instance }: Drawn): string[] => (node.source !== undefined && instance ? [instance.id, node.source] : [node.id]);

/** How to name a layer to someone who can only edit stored ones: "Icon in Plan tab". */
const label = ({ node, instance }: Drawn): string => (node.source !== undefined && instance && instance !== node ? `${node.name} in ${instance.name}` : node.name);

/** Hidden from assistive tech, so its text names nothing. */
const silent = (node: SceneTree) => node.attributes['aria-hidden'] === 'true';
const hasValue = (value: string | undefined) => value !== undefined && value.trim() !== '';

/** Whether a screen reader has something to call `node` by: its words, an image's alt, or a label attribute. */
function hasName(node: SceneTree): boolean {
  const { attributes: a } = node;
  if (hasValue(a['aria-label']) || hasValue(a['aria-labelledby']) || hasValue(a.title)) return true;
  const inside = (n: SceneTree): boolean => {
    if (silent(n) || n.hidden) return false;
    if (n.tag === 'img' || n.tag === 'weft-3d') return hasValue(n.attributes.alt);
    // An icon's text is its ligature name ("calendar_view_week"), not words.
    if (n.type === 'text') return hasValue(n.text) && !ICON_FONT.test(n.styles.fontFamily ?? '');
    if (hasValue(n.attributes['aria-label'])) return true;
    return n.children.some(inside);
  };
  return inside({ ...node, attributes: {} });
}

/** The set a current item belongs to: the nearest list, nav, table or widget around it, else the page. */
function groupOf({ ancestors }: Drawn): SceneTree | undefined {
  return ancestors.find((a) => GROUP_TAGS.has(a.tag) || GROUP_ROLES.has(a.attributes.role ?? ''));
}

const names = (list: Drawn[], max = 4) => `${list.slice(0, max).map(label).join(', ')}${list.length > max ? ` and ${list.length - max} more` : ''}`;
const ids = (list: Drawn[]) => [...new Set(list.flatMap(storedIds))];
const fromComponent = (list: Drawn[]) => list.some((d) => d.instance);

/** Problems a screen reader or keyboard user would meet in this page. */
export function accessibilityIssues(root: SceneTree): AccessibilityIssue[] {
  const drawn = walk(root);
  const issues: AccessibilityIssue[] = [];

  // Two current items in one set: a screen reader announces both as "current page".
  const current = new Map<string, Drawn[]>();
  for (const d of drawn) {
    const value = d.node.attributes['aria-current'];
    if (value === undefined || value === 'false') continue;
    const key = `${groupOf(d)?.id ?? root.id}\u0000${value}`;
    current.set(key, [...(current.get(key) ?? []), d]);
  }
  for (const [key, list] of current) {
    if (list.length < 2) continue;
    const value = key.split('\u0000')[1]!;
    const fix = fromComponent(list)
      ? `. They're drawn from a component: if it isn't a prop yet, bind it ({"bind": {"attributes": {"aria-current": "current"}}} on the component); then set the prop to "${value}" on the current instance and "" on the others`
      : '. Remove it from the others';
    issues.push({ rule: 'aria-current', ids: ids(list), message: `${list.length} layers in one group say aria-current="${value}" (${names(list)}): only the current one should${fix}` });
  }

  /**
   * Problems with one layer, grouped by the component layer behind them: a button
   * with no name in a component is one fix, not one per instance.
   */
  const perLayer = new Map<string, { rule: AccessibilityRule; list: Drawn[]; message: (who: string, shared: boolean) => string }>();
  const flag = (rule: AccessibilityRule, d: Drawn, message: (who: string, shared: boolean) => string) => {
    const key = `${rule}\u0000${d.node.source ?? d.node.id}`;
    const group = perLayer.get(key);
    if (group) group.list.push(d);
    else perLayer.set(key, { rule, list: [d], message });
  };

  for (const d of drawn) {
    const { node, ancestors } = d;
    // Buttons and links with nothing to call them by.
    const isLink = node.tag === 'a' && node.attributes.href !== undefined;
    if ((node.tag === 'button' || isLink || node.attributes.role === 'button') && !hasName(node)) {
      const icon = node.children.some((c) => ICON_FONT.test(c.styles.fontFamily ?? '')) || (node.type === 'text' && ICON_FONT.test(node.styles.fontFamily ?? ''));
      flag(
        'name',
        d,
        (who, shared) =>
          `${who}: this ${isLink ? 'link' : 'button'} has no name a screen reader can read${icon ? " (an icon's text is its ligature name, not words)" : ''}. Give it an aria-label that says what it does ("Options", "Close menu")${shared ? ' on the component, and every instance gets it (or through an attribute prop, if they differ)' : ''}`,
      );
    }
    // Fields with no label.
    const field = node.tag === 'select' || node.tag === 'textarea' || (node.tag === 'input' && !UNLABELED_INPUT_TYPES.has(node.attributes.type ?? 'text'));
    if (field) {
      const a = node.attributes;
      const labelled =
        hasValue(a['aria-label']) ||
        hasValue(a['aria-labelledby']) ||
        hasValue(a.title) ||
        ancestors.some((p) => p.tag === 'label') ||
        (hasValue(a.id) && drawn.some((o) => o.node.tag === 'label' && o.node.attributes.for === a.id));
      if (!labelled) {
        flag(
          'label',
          d,
          (who, shared) =>
            `${who}: this field has no label${hasValue(a.placeholder) ? " (a placeholder disappears as soon as someone types, so it isn't one)" : ''}. Put it inside a label with the text, or give it an aria-label${shared ? ', in the component' : ''}`,
        );
      }
    }
  }

  for (const { rule, list, message } of perLayer.values()) {
    const [first] = list;
    const shared = list.some((d) => d.node.source !== undefined);
    // "Options in Goblin Boss", or "Options in Vex, Goblin Boss and 4 more" for a component layer shown in several places.
    const where = list.map((d) => (d.node.source !== undefined && d.instance ? d.instance.name : (d.ancestors.find((a) => a.component)?.name ?? d.node.name)));
    const who = list.length === 1 ? label(first!) : `${first!.node.name} in ${where.slice(0, 3).join(', ')}${where.length > 3 ? ` and ${where.length - 3} more` : ''}`;
    issues.push({ rule, ids: ids(list), message: message(who, shared) });
  }

  // Headings that skip a level: an outline with a gap reads like a missing section.
  let previous: { level: number; d: Drawn } | undefined;
  for (const d of drawn) {
    const level = Number(HEADING.exec(d.node.tag)?.[1] ?? 0);
    if (!level) continue;
    if (previous && level > previous.level + 1) {
      issues.push({
        rule: 'heading-order',
        ids: storedIds(d),
        message: `${label(d)}: an h${level} straight after an h${previous.level} (${label(previous.d)}) skips a level. Use h${previous.level + 1}, and set its size with styles: a heading's level is its place in the outline, not its size`,
      });
    }
    previous = { level, d };
  }

  // The same id twice: labels, popovers and dialogs find only the first.
  const byId = new Map<string, Drawn[]>();
  for (const d of drawn) {
    const id = d.node.attributes.id;
    if (hasValue(id)) byId.set(id!, [...(byId.get(id!) ?? []), d]);
  }
  for (const [id, list] of byId) {
    if (list.length < 2) continue;
    const fix = fromComponent(list) ? `. They're drawn from a component, so each instance repeats it: bind id to a prop ({"bind": {"attributes": {"id": "itemId"}}}) and give each instance its own` : '. Give each its own';
    issues.push({ rule: 'duplicate-id', ids: ids(list), message: `${list.length} layers have id="${id}" (${names(list)}): anything pointing at it (a label's for, popovertarget, commandfor) finds only the first${fix}` });
  }
  return issues;
}
