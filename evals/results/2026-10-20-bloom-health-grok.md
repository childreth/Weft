# Free build (no eval prompt) — Grok — 2026-10-20

- **Eval:** none. The eval prompt wasn't pasted (second run in a row), so Grok got a free brief: a fresh health app screen with its own look. Treat this as a quality sample, not a comparable eval run: no reference, no report, no process metrics.
- **Reference:** none. Grok chose to go "the opposite way from the dark dashboard".
- **Model and client:** Grok (exact model and client not recorded)
- **Weft version:** `6250395` (Google Fonts merged)
- **Artboard:** `f_901aLlYkKL` Bloom Health — Mobile (390 wide, hug height, placed to the right of the existing artboards). Not named `Eval — …`.
- **Wall time:** not recorded

## Usage (from the client, not the agent)

| Input tokens | Output tokens | Cache read | Cache write | Cost |
|---|---|---|---|---|
| not recorded | not recorded | not recorded | not recorded | not recorded |

## Process

| Total calls | Rejected | Screenshots | Rebuilds | Read skill first |
|---|---|---|---|---|
| not reported | not reported | at least 1 (the preview it shared) | at least 1 fix after the preview (Today list indent) | unknown; it said it checked "Weft's newer tools first" |

No report, because the prompt that asks for one wasn't used.

## Scores (1–5 each)

The "Reviewer" column is Claude's score from the persisted document (`.weft-data/default.weft.json`, 83 nodes) and the preview Grok shared in chat. The Weft server wasn't running, so there's no `get_screenshot` render yet, and the preview predates Grok's last fix.

| Criterion | Reviewer | Yours | Reviewer notes |
|---|---|---|---|
| Layout and proportions | 4 | | Clear order: readiness hero, bento tiles, Today list, floating pill tab bar. The sleep tile leaves dead space between its copy and the stage chart. |
| Typography | 4 | | Instrument Serif numerals (112px score) against Inter is a strong pairing, loaded properly through document fonts. 25 of 37 sized nodes are 11–13px, small for a phone. |
| Color and contrast | 4 | | Distinctive cream, terracotta, butter and sage palette, clearly different from the dark dashboard. Small white text on the terracotta gradient is likely below AA; check it in a render. |
| Spacing and alignment | 4 | | Even rhythm (`--space-6` between sections). The list indent visible in the preview was fixed by Grok afterwards (`li` padding is now `14px 0`); confirm in a render. |
| Other widths | 3 | | Fine at its 390 design width. No breakpoints, and nothing suggests another width was checked. Same as the Opus run. |
| Semantics and token use | 3 | | Good landmarks: `main`, `header`, `section`, `article` tiles, `ul/li`, `nav`, `h1`/`h2`. But no aria labels on any chart (contributor bars, step bars, sleep stages), the tab links have no `href` or `aria-current`, and colors are mostly raw hex (53 hex/rgba values vs 32 `var(--…)`). |
| **Total /30** | **22** | | |

## Screenshots

- Grok's chat preview (before the indent fix): [chat.png](2026-10-20-bloom-health-grok/chat.png)
- To do: `get_screenshot` of `f_901aLlYkKL` at 390 (and 768) once the server is running.

## What Weft should fix

- The eval prompt keeps getting skipped. Serving it as an MCP prompt (`evals/prompts/*` with a `reference` argument) would make it one pick in the client instead of a paste.
- Raw hex again: a `set_tokens` tool would let agents name their palette (raised by the Opus run too).
- Both agents skipped aria on charts. The skill could ask for an `aria-label` (or `role="img"`) on any decorative chart group, and `aria-current` on the active tab.
