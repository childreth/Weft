import type { SceneNode } from './schema';

/**
 * Native behavior without scripts: an invoker (a button with `popovertarget`,
 * or `commandfor` plus `command`) opens or closes a popover or a dialog by its
 * `id` attribute. Exported pages run these natively; the canvas emulates them
 * inside the artboard while it's in interact mode (the browser's top layer
 * would escape the canvas).
 */
export const COMMANDS = ['show-modal', 'close', 'request-close', 'toggle-popover', 'show-popover', 'hide-popover'] as const;
export type Command = (typeof COMMANDS)[number];
export const POPOVER_TARGET_ACTIONS = ['toggle', 'show', 'hide'] as const;

const DIALOG_COMMANDS: ReadonlySet<string> = new Set(['show-modal', 'close', 'request-close']);

/** What an invoker does: its target's id, and the action (a command, or a popovertarget action as toggle-/show-/hide-popover). */
export function invokerAction(attributes: Readonly<Record<string, string>>): { target: string; action: Command } | null {
  if (attributes.commandfor) {
    const command = attributes.command as Command;
    return (COMMANDS as readonly string[]).includes(command) ? { target: attributes.commandfor, action: command } : null;
  }
  if (attributes.popovertarget) {
    const how = attributes.popovertargetaction ?? 'toggle';
    if (!(POPOVER_TARGET_ACTIONS as readonly string[]).includes(how)) return null;
    return { target: attributes.popovertarget, action: `${how}-popover` as Command };
  }
  return null;
}

/**
 * Invokers in one artboard that can't work: the id they name is missing, the
 * command is unknown, or it doesn't fit the target (a popover command on a
 * non-popover, a dialog command on something other than a dialog).
 */
export function invokerIssues(nodes: Iterable<SceneNode>): string[] {
  const list = [...nodes];
  const byId = new Map(list.flatMap((n) => (n.attributes.id ? [[n.attributes.id, n] as const] : [])));
  const issues: string[] = [];
  for (const node of list) {
    const { commandfor, command, popovertarget, popovertargetaction } = node.attributes;
    if (commandfor === undefined && popovertarget === undefined) continue;
    const who = `"${node.name}" (${node.tag})`;
    if (node.tag !== 'button') issues.push(`${who}: only a button can be an invoker (popovertarget/commandfor)`);
    if (commandfor !== undefined && !(COMMANDS as readonly string[]).includes(command ?? '')) {
      issues.push(`${who}: command "${command ?? ''}" isn't one of ${COMMANDS.join(', ')}`);
      continue;
    }
    if (commandfor === undefined && popovertargetaction !== undefined && !(POPOVER_TARGET_ACTIONS as readonly string[]).includes(popovertargetaction)) {
      issues.push(`${who}: popovertargetaction "${popovertargetaction}" isn't one of ${POPOVER_TARGET_ACTIONS.join(', ')}`);
      continue;
    }
    const { target, action } = invokerAction(node.attributes)!;
    const el = byId.get(target);
    if (!el) {
      issues.push(`${who} points at id "${target}", but no layer in this artboard has attributes.id "${target}"`);
      continue;
    }
    if (DIALOG_COMMANDS.has(action) ? el.tag !== 'dialog' : el.attributes.popover === undefined) {
      issues.push(
        `${who}: "${action}" needs ${DIALOG_COMMANDS.has(action) ? 'a dialog' : 'a layer with the popover attribute'}, and "${el.name}" (${el.tag}) isn't one`,
      );
    }
  }
  return issues;
}

/**
 * The artboard a link's `#fragment` names: its id, or its name (any case,
 * spaces or dashes). Interact mode pans to it; flow tests open it.
 */
export function linkedArtboard(href: string, artboards: readonly { id: string; name: string }[]): string | null {
  if (!href.startsWith('#') || href.length < 2) return null;
  let key: string;
  try {
    key = decodeURIComponent(href.slice(1));
  } catch {
    return null;
  }
  const slug = (s: string) => s.trim().toLowerCase().replace(/[\s_]+/g, '-');
  return artboards.find((a) => a.id === key)?.id ?? artboards.find((a) => slug(a.name) === slug(key))?.id ?? null;
}
