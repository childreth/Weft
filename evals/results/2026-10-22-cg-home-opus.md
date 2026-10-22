# build-from-reference — Claude Opus 5.5 — 2026-10-22

- **Eval:** build-from-reference
- **Reference:** references/cg.local.png (CarGurus signed-in home page, kept local)
- **Model and client:** Claude Opus 5.5 in Claude Code (local MCP)
- **Weft version:** `ae8691e`
- **Artboard:** `Eval — Claude Opus 5.5 — 2026-10-22` (`f_bF9oktFgcR`), 1440 wide, hug height
- **Wall time:** not recorded

The prompt arrived without the image attached. The agent stopped and said so, as the prompt asks, and then started once it was pointed at the file.

## Usage (from the client, not the agent)

| Input tokens | Output tokens | Cache read | Cache write | Cost |
|---|---|---|---|---|
| not recorded | not recorded | not recorded | not recorded | not recorded |

## Process (from the agent's report, checked against the canvas)

| Total calls | Rejected | Screenshots | Rebuilds | Read skill first |
|---|---|---|---|---|
| 24 (22 Weft) | 1 | 7 (4 at 1440, 3 at 390) | 0 | Yes, the whole guide in one call |

Calls per tool: read_skill ×1, get_canvas ×1 (outline), list_tokens ×1, search_fonts ×1, add_fonts ×1, create_nodes ×4, update_nodes ×6, get_screenshot ×7, select_nodes ×1, plus Read ×1 (the reference) and ToolSearch ×1.

Rejections and what the agent changed:
- create_nodes: `Unknown style property "listStyle"` on two `li` cards. The agent dropped it and resent; a `li` set to `display: flex` has no marker anyway.

No tool reply included a `note`.

## Scores (1–5 each)

The "Reviewer" column is Claude's score from the agent's screenshots next to the reference, plus counts from the saved document (95 nodes). Fill in "Yours" with your own score.

| Criterion | Agent | Reviewer | Yours | Reviewer notes |
|---|---|---|---|---|
| Layout and proportions | 4 | 5 | | Measured against the reference: search bar, card widths (~303px) and photo height (144px) match within a few px. Only the header is sparser, from placeholders. |
| Typography | 4 | 4 | | Figtree is a good stand-in and weights match. But it rewrote the reference's copy into sentence case ("More Ford F-150 models", "No rating"): the style guide's default leaked into a reference build. |
| Color and contrast | 4 | 4 | | Navy and sky-blue headline, pink Guru chips and light-blue search cards all match. The blue dots before "new listings" are gone. |
| Spacing and alignment | 4 | 4 | | One shared left edge and close section rhythm. Search cards are a little shorter than the reference. |
| Mobile at 390px | 4 | 3 | | Nothing overflows and grids stack (20 breakpoint overrides). But the nav disappears with no menu button, so Shop, Sell and Finance can't be reached, and the quick chips wrap to three centred lines. |
| Semantics and token use | 4 | 5 | | Landmarks, one h1, ordered h2/h3, lists, figures, a search form; every link has an href; 17 aria attributes. 233 token references vs 25 raw colors (brand colors, which a reference justifies). Six font sizes. |
| **Total /30** | **24** | **25** | | |

Compared with the earlier runs (22 and 22), this is the first with a reference image and the new skill, so it isn't a like-for-like comparison: see "Next" below.

## Screenshots

- Desktop at 1440: [desktop.png](2026-10-22-cg-home-opus/desktop.png)
- Mobile at 390: [mobile-390.png](2026-10-22-cg-home-opus/mobile-390.png)

## What Weft should fix

- **Reference copy must stay verbatim.** The skill's "Sentence case" rule changed the reference's text. Fixed: `style.md` now says text from a reference or the user stays exactly as given.

- **Icons** were the biggest visible gap: chevrons, heart, account, search, pin, sparkles, close, info and rating badges all became dashed placeholders or were left out. A bundled icon set (e.g. Lucide as an `icon` node, offline) would help most.
- **Logos and photos:** the wordmarks and two car photos are placeholders (images not supported yet).
- **`listStyle` isn't allowed.** Fixed: it's now a style property, and `layout.md` explains list markers.
- **No `maskImage`**, so the fade on the clipped chip row couldn't be reproduced.
- **Repeated items** (chips, cards) are written out in full; there are no components yet.
- An `input` placeholder can't mix styles (the reference bolds "model" inside "Search by model").

## Next

- Record usage: run `/cost` in Claude Code right after the agent finishes, and note the start and end times.
- To measure the skill itself, rerun this same prompt and reference on `main` (old skill) and compare, ideally 2–3 runs each.
