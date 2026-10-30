import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  BREAKPOINTS,
  COLOR_ROLES,
  CONTAINER_TAGS,
  STYLE_GROUP_LABELS,
  SCHEME_VARIANT_NAMES,
  STYLE_PROPS,
  TEXT_TAGS,
  UNSUPPORTED_STYLES,
  getStyleMeta,
  type StyleGroup,
} from '@weft/core';

/**
 * The Weft design skill (`apps/server/skill/*.md`), served to agents over MCP
 * (`read_skill`, and `weft://skill/<file>` resources) so remote agents get it
 * without installing anything. Lists that come from the schema are filled in
 * at load, so the skill can't drift from what the server accepts.
 */

const SKILL_DIR = join(import.meta.dirname, '../skill');

const FILLS: Record<string, string> = {
  // One line per kind, in the Inspector's order.
  STYLE_PROPS: (Object.entries(STYLE_GROUP_LABELS) as Array<[StyleGroup, string]>)
    .map(([group, label]) => `  - ${label}: ${STYLE_PROPS.filter((p) => getStyleMeta(p).group === group).join(', ')}`)
    .join('\n'),
  UNSUPPORTED_STYLES: Object.entries(UNSUPPORTED_STYLES)
    .map(([name, instead]) => `\`${name}\` (${instead})`)
    .join(', '),
  CONTAINER_TAGS: CONTAINER_TAGS.join(', '),
  TEXT_TAGS: TEXT_TAGS.join(', '),
  BREAKPOINTS: BREAKPOINTS.map((b) => `\`${b.id}\` (≤ ${b.maxWidth}px)`).join(', '),
  // Material 3's color roles, as Weft names them (md.sys.color.primary → color.primary).
  COLOR_ROLES: COLOR_ROLES.map((role) => `\`color.${role}\``).join(', '),
  SCHEME_VARIANTS: SCHEME_VARIANT_NAMES.map((v) => `\`${v}\``).join(', '),
};

let files: Map<string, string> | null = null;

/** Skill files by name (`SKILL.md`, `layout.md`, …), loaded once. */
export function skillFiles(): Map<string, string> {
  files ??= new Map(
    readdirSync(SKILL_DIR)
      .filter((name) => name.endsWith('.md'))
      .sort((a, b) => (a === 'SKILL.md' ? -1 : b === 'SKILL.md' ? 1 : a.localeCompare(b)))
      .map((name) => [name, readFileSync(join(SKILL_DIR, name), 'utf8').replace(/\{\{(\w+)\}\}/g, (m, key: string) => FILLS[key] ?? m)]),
  );
  return files;
}

/**
 * A skill file by name; only files in the skill folder, so no path tricks.
 * No path returns the whole guide in one text: agents asked to follow up on
 * the overview with the other files mostly didn't.
 */
export function readSkill(path?: string): string {
  if (path === undefined) return [...skillFiles().values()].join('\n\n---\n\n');
  const name = path.replace(/^\.\//, '');
  const text = skillFiles().get(name);
  if (text === undefined) throw new Error(`No skill file "${path}". Available: ${[...skillFiles().keys()].join(', ')}`);
  return text;
}
