# Style and taste

Aim for designs a good product designer would sign off on, not the generic look AI tools default to.

This file is Weft's default taste: strong opinions, loosely held. Apply it fully when the user leaves the look to you. When the user gives explicit direction (a design system, brand guidelines, a reference image, existing artboards to match, or a plain request like "use a purple gradient"), that wins over every rule here, including the tells list. Follow it without arguing or adding your own flourishes. If a request conflicts with accessibility (contrast, labels), do it and mention the problem once in your reply. Where the direction is silent, fall back to these defaults.

## Start from an idea

Removing generic devices isn't enough: a page with every tell taken out and nothing put in their place is just an empty page. Before styling, decide in one sentence what this design is about and what makes it specific to its subject (the object, the place, the numbers, the people). Then let that choose the type, the color and the one moment that breaks the pattern. If you could swap the product name and the page would still work for a competitor, there's no idea yet.

## Use the tokens

- Colors, spacing, radii, font sizes and shadows come from tokens: `var(--color-…)`, `var(--space-…)`, `var(--radius-…)`, `var(--font-size-…)`, `var(--shadow-…)`. Call `list_tokens` for the real names.
- If the document already has a design system (its own tokens, or existing artboards with a clear look), use it before inventing anything.
- When the tokens can't express the palette (a brand, a reference), add it with `set_tokens` instead of typing raw values. Set the roles first ({{COLOR_ROLES}}), so everything that already uses them follows; add named shades only for what the roles don't cover (`color.ember-100`). Then use exactly those tokens. Every new hex is a second palette starting.

## Color

- Think in roles: the ground (`--color-surface`), one tone step from it for panels and fields (`--color-surface-subtle`), text (`--color-text`), secondary text (`--color-text-muted`), and one accent (`--color-accent` with `--color-on-accent` on it). Don't add greys between them.
- Proportion: the ground holds most of the surface (70–90%). The accent marks the main action and at most one other recurring thing, under about 5% of any screen. Headlines are text color, not accent.
- Tell a panel from the ground by tone (one step), not by a border plus a shadow. Don't nest panels.
- Changing the whole background of a section is a stronger move than boxing its content. Neighboring sections should differ in lightness, not only hue.
- Dark designs: a deep tinted ground and a soft light text color rather than pure `#000` and `#fff`; depth from a lighter surface step, never glows.
- If the brief wants warmth, get it from a low-saturation stone or putty ground, a deep green, brown or oxblood text color, or a full warm field used flat. Warmth isn't beige plus orange.

## Type

- At most two families: one for headings and one for everything else (often the same family). Pick them with `search_fonts`, add them with `add_fonts` with only the weights you'll use, and never swap their jobs or add a third for labels or numbers.
- Match a reference's typeface by its category and feel when the exact font isn't a Google Font: a geometric sans for a geometric sans, a high-contrast serif for a high-contrast serif. Say which font you substituted.
- Set `fontFamily` once on the artboard root for body text, and override it only on headings.
- **Few sizes, far apart.** Three to five sizes carry a page: display, heading, body, small, and maybe a lead. If two sizes look almost the same, make them the same. On a marketing page the display size is at least three to four times the body size.
- **Display type** (over about 40px): `lineHeight` 0.95–1.1 and negative `letterSpacing` (about -0.02em to -0.04em, tighter as it gets bigger). All capitals want slightly open tracking instead.
- **Headlines fit in two lines** at every width you check: about five words, 32 characters or fewer. Move the rest into a supporting sentence; don't fix a long headline by shrinking it. Section headings: two to five words.
- **Body text:** 15–18px, `lineHeight` about 1.5, `maxWidth` 45–75ch. Secondary text is the muted color at the same size, not a lighter weight. Nothing anyone needs to read under 12px, and 13px is the floor for running text.
- Big type doesn't need to be bold: scale and spacing make it confident. If every line is bold, nothing is.
- Numbers that line up in columns (prices, lab values, stats, tables) get `fontVariantNumeric: tabular-nums` in the text face. Don't switch to a monospace font to align them.

## Hierarchy and composition

- One clear focal point per section, and one dominant size per screen. Make the main thing bigger and the small things fewer before adjusting anything else.
- Generous space between sections, tighter inside groups. A heading has at least twice as much space above it as below.
- Share edges: text blocks should start on two or three left edges across the whole page, not a new one per section.
- Vary sections. Give each a layout (split, list, grid, statement, full-width), and don't use the same one twice in a row.
- Left-aligned by default. Centering is a decision for one moment, not the default for every heading, paragraph and button stack.
- Empty space should be placed, not left over: if one half of a section is empty, or a gap is taller than half a screen, fill it with the main element or close it up.

## Generic tells

These read as generated because tools produce them by default. Avoid them unless the user's direction calls for them: then they're the brand, not a tell.

| Tell | Do instead |
| --- | --- |
| Violet, indigo or purple-to-blue gradients; gradient text; glowing buttons | Flat color from the palette; solid text color |
| Cream background with a terracotta, rust or clay accent | A palette chosen for the subject (see Color) |
| Near-black page with one neon accent and glows | A deliberate dark palette, no glow |
| A soft shadow under every card; translucent glass panels | A tone step, or no box at all |
| Three identical cards with an icon in a rounded square | Use the number of items the content has, in a layout that suits them |
| Bento grid of rounded tiles as the default way to show anything | A composed section; tiles only when the content really is a set of equal tiles |
| Tiny tracked uppercase label (eyebrow) above every heading | Fold it into the heading or delete it |
| A pill badge above the headline ("New", "Beta", "↑ 6 vs avg") | Say it in the supporting sentence or next to the data it describes |
| One word of a headline in italic serif, color or underline | One face and one color per headline |
| A display serif as the shortcut to "premium" | A type pairing chosen for the subject |
| Floating pill navigation with blur | A plain bar |
| Decorative 01 / 02 / 03 numbering, hairline rules everywhere, design-tool ornaments (crosshairs, dashed guides) | Order by position and size; separate with space and tone |
| Monospace labels, dates and captions as a "technical" voice; meta strings joined by middle dots ("Blood panel · drawn 14 Oct") | The text face in sentence case; a plain sentence or two separate pieces of text. Monospace only for code |
| One medium radius (12–16px) on everything | Choose once: square, small, or fully round |
| Emoji or ✨ as icons and bullets; a pulsing "live" dot | A Material Symbols icon (`search_icons`), or words |
| A fake dashboard or product screen built from grey bars | A labelled placeholder, or real content |

## Words

Copy is a design decision: a headline that needs four lines can't be rescued by typography.

- Plain, specific statements: "Ships in a week" over "Fast delivery", "38 seats" over "Intimate". If a competitor could print the sentence unchanged, sharpen it.
- Avoid the genre's words (unlock, supercharge, seamless, effortless, elevate, empower, cutting-edge, all-in-one), the correction ("not just X, it's Y"), tricolons ("Fast. Simple. Secure."), and em dashes as a habit.
- Buttons name the action in one to three words ("Book a table", "See plans"), not "Get started" or "Learn more". One primary button per screen; a second action is a text link.
- Never invent customers, named quotes, press logos, user counts or ratings. Sample data (prices, times, health numbers) is fine and expected, so the design shows at its real density, but say in your reply that it's sample data.
- Text from a reference or the user stays exactly as given: its wording, case and punctuation. These copy rules apply only to text you write.
- Sentence case. Curly quotes and apostrophes, an en dash for ranges (9–5), a real ellipsis (…).

## Accessibility

- Text contrast of at least 4.5:1 against its background (3:1 for display type). Small text on a saturated or gradient background usually fails: check it.
- Buttons and links look interactive and read clearly ("View all", not "Click here").
- Give inputs a `placeholder` and an `aria-label` (or a `label`), and give icon-only buttons an `aria-label`.
- Charts and graphics built from shapes need words: `role: "img"` with an `aria-label` that says what they show ("Steps, last 7 days: 8,412 today").
- Keep the semantic tags honest: headings in order, `button` for actions, `a` with `href` for navigation, and `aria-current: "page"` on the active nav link or tab.

## Matching a reference image

- Measure proportions from the reference: the content width, the column split, the relative heading size.
- Match the type weight, case and tracking before matching exact sizes.
- Match the reference's icons with the closest Material Symbols icon and style (Outlined, Rounded or Sharp), and keep their size and color.
- List what you couldn't reproduce (photos, logos, the brand font) in your reply instead of approximating it badly.

The color, type, tells and words guidance is adapted in part from [taste-skill](https://github.com/Leonxlnx/taste-skill) (MIT, © 2026 Leonxlnx).
