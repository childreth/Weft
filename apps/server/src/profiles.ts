/**
 * Prompt profiles: what Assist sends a model. `full` is the normal prompt (the
 * server instructions, every tool with its whole description, the selection
 * with every style), written for a general model that has to be told how Weft
 * works each time. `small` is for a model fine-tuned on Weft: a few lines of
 * instructions, the tools quick fixes need with one-line descriptions, and the
 * selection with only the styles that decide layout. What it learned replaces
 * what the full prompt explains.
 *
 * A model is trained on what it will be sent, so Assist (for a tuned model) and
 * `evals/traces/export.mts --profile small` (building its training data) both
 * build the small prompt here, and must never build it anywhere else.
 */

export type ProfileName = 'full' | 'small';
export const PROFILE_NAMES: readonly ProfileName[] = ['full', 'small'];

/** A model you built for Weft (`ollama create weft-…`) gets the small profile unless a request says otherwise. */
export const TUNED_MODEL = /^weft-/;

export function profileFor(model: string, requested?: string): ProfileName {
  if (requested === 'full' || requested === 'small') return requested;
  return TUNED_MODEL.test(model) ? 'small' : 'full';
}

/**
 * The tools a quick fix uses: change layers, wrap them (`adopt`), remove them,
 * read more when the selection isn't enough, and measure what the browser drew
 * (`get_layout`: overflow and real sizes, which stored styles don't show; the
 * second most used tool in traces). `delete_nodes` and `get_canvas` are there
 * partly so the model still has to choose.
 */
export const SMALL_TOOLS: readonly string[] = ['update_nodes', 'create_nodes', 'delete_nodes', 'get_canvas', 'get_layout'];

/** Styles that decide how layers are laid out: what a layout fix reads. Colour, type and decoration are left out. */
const LAYOUT_STYLE = /^(display|position|inset|top|right|bottom|left|zIndex|flex.*|grid.*|gap|rowGap|columnGap|align.*|justify.*|place.*|order|(min|max)?(Width|Height)|width|height|overflow.*|padding.*|margin.*|boxSizing|aspectRatio|listStyle.*)$/;

type Json = Record<string, unknown>;

const layoutOnly = (styles: unknown): Json | undefined => {
  if (!styles || typeof styles !== 'object') return undefined;
  const kept = Object.fromEntries(Object.entries(styles as Json).filter(([name]) => LAYOUT_STYLE.test(name)));
  return Object.keys(kept).length ? kept : undefined;
};

/** A selected layer (as `compact` gives it) with only its layout styles, here and in its breakpoints; states are dropped. */
export function smallSelection(node: Json): Json {
  const out: Json = {};
  for (const [key, value] of Object.entries(node)) {
    if (key === 'states') continue;
    if (key === 'styles') {
      const kept = layoutOnly(value);
      if (kept) out.styles = kept;
    } else if (key === 'breakpoints' && value && typeof value === 'object') {
      const kept = Object.fromEntries(Object.entries(value as Json).flatMap(([bp, styles]) => (layoutOnly(styles) ? [[bp, layoutOnly(styles)]] : [])));
      if (Object.keys(kept).length) out.breakpoints = kept;
    } else if (key === 'children' && Array.isArray(value)) out.children = value.map((c) => smallSelection(c as Json));
    else if (key === 'parent' && value && typeof value === 'object') out.parent = smallSelection(value as Json);
    else out[key] = value;
  }
  return out;
}

/**
 * The selection as a prompt shows it: each selected layer with a `parentId`,
 * and their parents listed once after them. Assist records each selected layer
 * with its `parent` inline (a summary: no children, `childCount` instead), so a
 * trace can be rebuilt for any profile; this is where that turns into prompt.
 *
 * Without the parent, a model asked to space out the selected cards had no id
 * for the layer whose `gap` does it, and read the canvas looking for one.
 */
export function selectionParts(selected: Json[]): { layers: Json[]; parents: Json[] } {
  const parents = new Map<string, Json>();
  const layers = selected.map(({ parent, ...layer }) => {
    if (!parent || typeof parent !== 'object') return layer;
    const p = parent as Json;
    parents.set(p.id as string, p);
    return { ...layer, parentId: p.id };
  });
  // A parent that is itself selected is already shown in full.
  const shown = new Set(layers.map((l) => l.id));
  return { layers, parents: [...parents.values()].filter((p) => !shown.has(p.id as string)) };
}

/** What the prompts say about the parents, after the selection. */
export function parentsText(parents: Json[]): string {
  return parents.length
    ? `\n\nTheir parents (parentId above): a fix to how layers sit together (gap, direction, columns, alignment) belongs on the parent that lays them out.\n${JSON.stringify(parents)}`
    : '';
}

/** The small profile's system prompt around the selected layers (already trimmed with `smallSelection`). */
export function smallSystemPrompt(selected: Json[]): string {
  const { layers, parents } = selectionParts(selected);
  const selection = selected.length
    ? `Selected layers ("this", "these" and "it" mean them), with their layout styles:\n${JSON.stringify(layers)}${parentsText(parents)}`
    : 'Nothing is selected. Call get_canvas to read the document.';
  return `You make small fixes to a design in Weft, whose layers are HTML elements styled with CSS. Make the change the user asks for in as few calls as possible, using node ids exactly as given. Then say in one sentence what you changed.

${selection}`;
}

/** Schema keys that tell a model nothing it needs: Weft checks them anyway, and refuses with a reason. */
const QUIET_KEYS = new Set(['$schema', 'default', 'minItems', 'maxItems', 'minimum', 'maximum', 'exclusiveMinimum', 'maxLength', 'pattern']);

/**
 * A tool with its descriptions cut to their first sentence, at every level, and
 * the schema keys that say nothing to a model (limits, `additionalProperties:
 * false`, `propertyNames` that are just strings) left out. Names, types, enums
 * and required fields stay, and the server still checks every call in full. A
 * tuned model learned the rest from examples.
 */
export function smallTool<T extends { function: { name: string; description: string; parameters: Json } }>(tool: T): T {
  /** `names` is true for a `properties` map, whose keys are property names, not schema keywords. */
  const trim = (value: unknown, names = false): unknown => {
    if (Array.isArray(value)) return value.map((v) => trim(v));
    if (!value || typeof value !== 'object') return value;
    const out: Json = {};
    for (const [key, v] of Object.entries(value as Json)) {
      if (names) out[key] = trim(v);
      else if (QUIET_KEYS.has(key) || (key === 'additionalProperties' && v === false)) continue;
      else if (key === 'propertyNames' && JSON.stringify(v) === '{"type":"string"}') continue;
      else if (key === 'description' && typeof v === 'string') out[key] = firstSentence(v);
      else out[key] = trim(v, key === 'properties');
    }
    return out;
  };
  return { ...tool, function: { ...tool.function, description: firstSentence(tool.function.description), parameters: trim(tool.function.parameters) as Json } };
}

/** Up to the first full stop that ends a sentence ("e.g." doesn't). */
function firstSentence(text: string): string {
  const end = text.search(/(?<!\b(?:e\.g|i\.e|etc|vs))\.(\s|$)/);
  return (end === -1 ? text : text.slice(0, end + 1)).trim();
}
