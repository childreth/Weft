# Skill comparison: app screens — Claude Opus 5.5 — 2026-11-09

- **Eval:** free prompts, before and after a skill change (no reference image)
- **Why:** on "create a D&D style character sheet for mobile", Pen.dev and Claude Design (same model family) produced richer, more genre-specific screens than Weft. Weft's looked like Material: every surface tinted by the seed.
- **Model and client:** Claude Opus 5.5 as Claude Code subagents, calling Weft's MCP tools through a small command-line client (one MCP session per call)
- **Weft version:** `57a2136` (before), then the `skill-app-screens` branch (after, round 2)
- **Documents:** `eval-before-*`, `eval-after-*`, `eval-r2-*` (open `?doc=<name>`)

## Prompts

| Doc suffix | Prompt |
|---|---|
| `dnd` | create a D&D style character sheet for mobile |
| `fitness` | design a fitness app daily summary screen for mobile |
| `bank` | design a banking app home screen for mobile |
| `landing` | design a landing page for an AI note-taking app (control: the tells must still hold) |

## Results

| Prompt | Before (old skill) | After (round 1) | Round 2 |
|---|---|---|---|
| D&D | Oxblood tint everywhere, Cinzel, dark red HP band; the most "fantasy" | Warm grey, oxblood accent, Barlow Condensed; stat tiles with icons, TO HIT / DAMAGE, dots for slots, hit dice, death saves. More app, less fantasy | Cinzel back for the name and headings (genre display face rule), crimson section titles, a Rest dialog tested with `test_flow`; still light |
| Fitness | Huge step count and hourly chart on a pale green tint; already strong | Steps ring, per-km run splits with the fastest marked, neutral ground | Dark warm-brown ground, orange "effort" accent, move ring, split bars; the most distinctive of all |
| Banking | Safe-to-spend focus, mint tint | Neutral ground, pending apart from settled, denser and more real | not rerun |
| Landing | Good, no slop | Good, highlighter-yellow cited line; no regression | not rerun |

Findings:

- Before, all four sat on a pale seed tint (pink, green, mint, mint) and three of four chose green: the Material `tonal-spot` look.
- Round 1 removed the tint everywhere and raised domain detail on every app screen, but all four landed on warm off-white with one deep accent: the recipe became the new default, and the D&D sheet lost its genre display face.
- Round 2 (the recipe as one option among several, light or dark on purpose, a genre's own display face allowed) brought variety back: fitness went dark, D&D got Cinzel back.
- Agents ran `test_flow` without being asked in most "after" runs.
- None reached Pen.dev's atmosphere on the D&D sheet: no imagery (agents can't add images) and no dark ground unless the subject pushes it.

## What Weft should fix (from the agents' reports)

- Fixed here: unknown argument keys were silently dropped (`parent` for `parentId` made four stray artboards twice; `get_canvas` with `id` returned the whole document and an agent edited the sample artboard). Arguments are now strict with a "did you mean".
- Fixed here: `test_flow` screenshots of an open dialog dimmed only the first 800px of a tall page.
- `set_tokens` can't take `seed` and `tokens` together, and a theme pair needs every override twice (three agents).
- Filled icons: Material Symbols loads without the FILL axis.
- No `abbr` text tag; breakpoints only go narrower (mobile-first screens use `max()` padding instead).
- `tabular-nums` at 12px fell back to a monospace-looking face in one run (cause unknown).
- Images: `import_image` (roadmap) is what the D&D sheet lacks most next to Pen.dev.
