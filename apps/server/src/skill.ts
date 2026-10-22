import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { BREAKPOINTS, CONTAINER_TAGS, STYLE_PROPS, TEXT_TAGS } from '@weft/core';

/**
 * The Weft design skill (`apps/server/skill/*.md`), served to agents over MCP
 * (`read_skill`, and `weft://skill/<file>` resources) so remote agents get it
 * without installing anything. Lists that come from the schema are filled in
 * at load, so the skill can't drift from what the server accepts.
 */

const SKILL_DIR = join(import.meta.dirname, '../skill');

const FILLS: Record<string, string> = {
  STYLE_PROPS: STYLE_PROPS.join(', '),
  CONTAINER_TAGS: CONTAINER_TAGS.join(', '),
  TEXT_TAGS: TEXT_TAGS.join(', '),
  BREAKPOINTS: BREAKPOINTS.map((b) => `\`${b.id}\` (≤ ${b.maxWidth}px)`).join(', '),
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
