# Style and taste

Aim for designs a good product designer would sign off on, not the generic look AI tools default to. When the user gives a reference or a brand, match it closely and don't add your own flourishes.

## Use the tokens

- Colors, spacing, radii, font sizes and shadows come from tokens: `var(--color-…)`, `var(--space-…)`, `var(--radius-…)`, `var(--font-size-…)`, `var(--shadow-…)`. Call `list_tokens` for the real names.
- Use raw values only when matching a reference the tokens can't express (a brand blue, an exact size). Keep them consistent: the same value every time it appears.

## Hierarchy

- One clear focal point per section. Make the most important thing visibly bigger or bolder, and quiet the rest.
- Use a small type scale: a display size, one or two heading sizes, body and small. Don't invent a new size for each element.
- Use weight and color for emphasis before adding size. Secondary text gets a muted text color, not a smaller font.
- Generous spacing between sections and tighter spacing inside groups. Related things sit closer together.

## Restraint

- Don't put every element in a card. Use a box only when grouping needs it.
- Don't nest cards inside cards.
- Use shadows, gradients and large radii sparingly, or when the brand calls for them. Pick one: a border, a background or a shadow.
- No decorative side-tab borders, emoji icons, or "✨ AI" sparkles unless they're part of the reference.
- Avoid the default AI palette (beige backgrounds, purple-to-blue gradients, gray-on-gray). Choose colors on purpose, with enough contrast.
- Vary layouts. Three identical cards in a row is fine once, but not every section on the page.

## Accessibility

- Text contrast of at least 4.5:1 against its background (3:1 for large text).
- Buttons and links look interactive and read clearly ("View all", not "Click here").
- Give inputs a `placeholder` and an `aria-label` (or a `label`), and give icon-only buttons an `aria-label`.
- Keep the semantic tags honest: headings in order, `button` for actions, `a` with `href` for navigation.

## Matching a reference image

- Measure proportions from the reference: the content width, the column split, the relative heading size.
- Match the type weight, case and tracking before matching exact sizes.
- List what you couldn't reproduce (photos, icons, the brand font) in your reply instead of approximating it badly.
