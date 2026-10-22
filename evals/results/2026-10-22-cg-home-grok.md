# build-from-reference — Grok — 2026-10-22

- **Eval:** build-from-reference
- **Reference:** references/cg.local.png (CarGurus signed-in home page, kept local)
- **Model and client:** Grok, remote over ngrok (exact model not recorded)
- **Weft version:** `ae8691e`
- **Artboard:** `Eval — Designer Chad — 2026-10-22` (`f_oWwb0QgMTh`), 1440 wide, hug height. Grok used a persona instead of its model name.
- **Wall time:** not recorded

## Usage (from the client, not the agent)

| Input tokens | Output tokens | Cache read | Cache write | Cost |
|---|---|---|---|---|
| not available | not available | not available | not available | not available |

## Process (from the agent's report, checked against the canvas)

Only sections 3–6 of the report were pasted, so call counts are unknown.

| Total calls | Rejected | Screenshots | Rebuilds | Read skill first |
|---|---|---|---|---|
| not reported | 1 | not reported | 0 | Yes |

Rejections and what the agent changed:
- create_nodes: `Unknown style property "listStyle"`. It dropped it, saw bullets on the `li` text nodes, and set them to `display: block`.

The "haven't read the style guide" `note` kept appearing after Grok had read the guide. That was a Weft bug: Grok's client doesn't keep an MCP session, so the server built a fresh tool server per request and forgot the read. Fixed by keeping the flag on the agent's identity.

## Scores (1–5 each)

The "Reviewer" column is Claude's score from `get_screenshot` renders at 1440 and 390 next to the reference, plus counts from the saved document (104 nodes).

| Criterion | Agent | Reviewer | Yours | Reviewer notes |
|---|---|---|---|---|
| Layout and proportions | 4 | 4 | | Section order and grids match. The content column is about 50px narrower than the reference (Grok scaled it by eye), and the quick chips are smaller. |
| Typography | 4 | 4 | | DM Sans is a fair stand-in. Unlike Opus, it kept the reference's copy exactly ("More Ford F-150 Models", "No Rating"). Seven font sizes. |
| Color and contrast | 4 | 4 | | Navy and brand blue, crimson AskGuru, blue search cards, and it kept the blue dots before "new listings". Guru chips alternate pink and blue rather than matching. |
| Spacing and alignment | 4 | 4 | | One shared left edge, steady rhythm. Car cards leave a larger gap between title and price than the reference. |
| Mobile at 390px | 4 | 3 | | Good call on two-column car cards, and the Guru row scrolls on purpose. But, as with Opus, the nav disappears with no menu button. |
| Semantics and token use | 4 | 4 | | Landmarks, one h1, lists, articles, figures, 18 aria attributes, 21 breakpoint overrides, 238 token references vs 48 raw colors. The search field is a styled `label`, not an `input`, so it can't be typed in. |
| **Total /30** | **24** | **23** | | |

## Screenshots

- Desktop at 1440: [desktop.png](2026-10-22-cg-home-grok/desktop.png)
- Mobile at 390: [mobile-390.png](2026-10-22-cg-home-grok/mobile-390.png)

## What Weft should fix

Fixed after this run (branch `skill-taste-rules`):
- The style-guide reminder now remembers per agent, so sessionless clients stop seeing it after reading the guide.
- `listStyle` is allowed, and `layout.md` says to set `listStyle: none` and `padding: 0` on lists.
- `get_canvas` with `detail: "outline"` includes artboard `x` and `y`.
- `layout.md`: when the nav is hidden on mobile, add a menu button.

Not a bug: Grok said `update_nodes` doesn't list `fontVariantNumeric`. The live server's schemas for both `create_nodes` and `update_nodes` include it; Grok's client probably kept the tool list from before the server restart.

Still open: icons and images (both agents' top request), components for repeated chips and cards, and a `maskImage` for faded edges.
