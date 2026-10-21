# Layout recipes

Weft renders real CSS, so layout is flexbox and grid with `gap`. Prefer few, meaningful containers. Every wrapper you add should have a job: it sets a layout, a background, or a semantic tag.

## Page skeleton

An artboard (`main`, display flex, column) with sections as direct children:

```json
{ "type": "frame", "tag": "main", "name": "Home — Desktop", "frame": { "width": 1440 },
  "styles": { "display": "flex", "flexDirection": "column", "gap": "var(--space-16)", "padding": "var(--space-12) var(--space-16)" },
  "children": [ { "type": "frame", "tag": "header", "name": "Header" }, { "type": "frame", "tag": "section", "name": "Hero" } ] }
```

Use `header`, `nav`, `section`, `article`, `aside` and `footer` for what they are. One `h1` per page.

## Rows and columns

- A row of items: `display: flex`, `alignItems: center`, `gap`. Push something to the far end with `justifyContent: space-between` on the row (or `marginLeft: auto` on the item).
- A stack: `display: flex`, `flexDirection: column`, `gap`.
- Center something: flex with `justifyContent: center` and `alignItems: center` on the parent.

## Grids

- Equal cards that wrap: `display: grid`, `gridTemplateColumns: repeat(auto-fit, minmax(260px, 1fr))`, `gap`. They reflow at any width, so they often need no breakpoint override.
- Fixed columns: `gridTemplateColumns: repeat(3, 1fr)`, plus `breakpoints: { mobile: { gridTemplateColumns: "1fr" } }`.
- Two-column hero: `gridTemplateColumns: 1.2fr 1fr`, `alignItems: center`, `gap: var(--space-12)`, and a mobile override to `1fr`.
- Span a cell with `gridColumn: span 2` on the child.

## Text

- A heading with a highlighted word: frame `h1` → text `span` "Welcome back to " + text `span` "CarGurus!" with its own `color`. Keep the trailing space inside the first span.
- Limit line length on paragraphs: `maxWidth: 60ch`.
- A truncated single line: `whiteSpace: nowrap`, `overflow: hidden`, `textOverflow: ellipsis`.
- Chips or tags that mustn't wrap: `whiteSpace: nowrap` on the chip.

## Components to build often

- **Button:** frame `button` (or text `button` for a plain label): `display: inline-flex`, `alignItems: center`, `gap`, `padding: var(--space-2) var(--space-4)`, `borderRadius`, background and text color from tokens.
- **Search field:** frame `form` or `label` as a row with an `input` (void tag, `placeholder` attribute) that has `flex: 1`.
- **Card:** frame `article`, column flex, `gap`, `padding`, and either a border or a background, not both plus a shadow.
- **Nav:** frame `nav` row of text `a` nodes with `href` attributes.
- **Horizontal scroller** (chips, carousels): row flex with `overflow: auto` and `flexShrink: 0` on items.

## Responsive

Design desktop first, then check `get_screenshot` with `width: 390`. Typical mobile overrides: grids to `1fr`, rows to `flexDirection: column`, smaller `padding` and `gap`, smaller heading `fontSize`. Put them on the node that needs them, in `breakpoints.mobile` (or `tablet`).

## Avoid

- Wrapping every element in its own frame. If a frame has one child and no styles of its own, remove it.
- Fixed `height` on things that hold text: let content size them.
- Absolute positioning for layout. Use `position: absolute` only for overlays like badges, with `position: relative` on the parent.
- Spacing with margins between siblings. Use `gap` on the parent.
