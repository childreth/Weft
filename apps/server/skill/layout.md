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

- A heading with a highlighted word (when the user's brand, reference or request has one; otherwise it's a generic tell): frame `h1` → text `span` "Welcome back to " + text `span` "CarGurus!" with its own `color`. Keep the trailing space inside the first span.
- Limit line length on paragraphs: `maxWidth: 60ch`.
- A truncated single line: `whiteSpace: nowrap`, `overflow: hidden`, `textOverflow: ellipsis`.
- Chips or tags that mustn't wrap: `whiteSpace: nowrap` on the chip.

## Components to build often

- **Button:** frame `button` (or text `button` for a plain label): `display: inline-flex`, `alignItems: center`, `gap`, `padding: var(--space-2) var(--space-4)`, `borderRadius`, background and text color from tokens.
- **Search field:** frame `form` or `label` as a row with an `input` (void tag, `placeholder` attribute) that has `flex: 1`.
- **Card:** frame `article`, column flex, `gap`, `padding`, and either a border or a background, not both plus a shadow.
- **Nav:** frame `nav` row of text `a` nodes with `href` attributes.
- **Horizontal scroller** (chips, carousels): row flex with `overflow: auto` and `flexShrink: 0` on items.
- **Icon:** text `span` with the icon's name as its text (`search_icons` gives names and a node to copy): `fontFamily: var(--font-family-material-symbols-outlined)`, `fontSize` (20–24px beside text), `lineHeight: 1`, `letterSpacing: normal`, `textTransform: none`, `whiteSpace: nowrap`, `color` like text. Ligatures break with letter spacing or a text transform, so set those even if a parent sets them. Decorative icons get `aria-hidden: "true"`. Filled: `fontVariationSettings: "'FILL' 1"` (the current tab, a favorite that's on, a selected state); keep one look for the rest.
- **Icon button:** frame `button` with an `aria-label` ("Search") holding the icon `span`, `display: inline-flex`, `alignItems: center`, `justifyContent: center`, a square size and padding. Icon plus label: the icon `span` and a text `span` in a row with a small `gap`.
- **Lists** (`ul`/`ol` of cards, chips or links): the browser's bullets and indent show by default. Set `listStyle: none` and `padding: 0` on the list.
- **Label and value pairs** (specs, profile details): `dl` with `dt`/`dd` children, as a grid (`gridTemplateColumns: auto 1fr`).
- **Data tables:** `table` → `thead`/`tbody` → `tr` → `th`/`td` text nodes. Use a table only for real tabular data, not for layout.

## Reusable components

When the same thing appears three or more times (cards in a grid, rows in a list, nav items, a button used across screens), build it once as a component and place instances. Restyling the component then restyles all of them, and reading the canvas back costs one short node per instance instead of a whole subtree.

- Make one: create the layer with `component: true`. On each text layer inside whose words differ per use, add `bind: { "text": "<prop>" }` (an icon's name is text, so it can be a prop too). The component's own text is what an instance shows when it doesn't set that prop.
- Use it: `{ "instance": { "component": "Plan card", "props": { "name": "Pro", "price": "$12" } } }`, by name or id. An instance made in the same `create_nodes` call must come after its component.
- Place it: styles on an instance apply to its root, for where it sits in its parent (`gridColumn`, `width`, `alignSelf`). Leave the look to the component.
- Nothing inside an instance can be edited. To change every one, edit the component. To change one, set a prop, or detach it with `update_nodes { "id": …, "instance": null }` and edit the layers it becomes.
- Keep a component in the page where it's first used, or put several on an artboard named "Components". It's an ordinary layer and shows like one.
- Not a component: things that only look alike but hold different parts (a stat tile and a chart tile), and anything used once.

## Things that open (no scripts)

These work in the exported page as they are, and on the canvas when the user turns on the artboard's Interact toggle.

- **Disclosure / FAQ:** frame `details` holding a `summary` (text, or a frame with an icon and text) and the content. Give each `details` in a group the same `name` attribute and only one stays open (an accordion). `open: ""` starts it open.
- **Menu or tooltip-like panel:** a frame with `popover: ""` and an `id`, plus a `button` with `popovertarget` set to that id. It opens centered over the page; clicking outside or Escape closes it. Style it fully (background, padding, radius, shadow): the browser's default is a plain bordered box.
- **Dialog:** frame `dialog` with an `id`, opened by a `button` with `commandfor: "<id>"` and `command: "show-modal"`; inside, a `button` with the same `commandfor` and `command: "close"`. The page behind dims. Put the dialog at the end of the artboard.
- **Select:** frame `select` with text `option` children (`value` attribute, `selected: ""` for the default), labeled by a `label`.
- **Multi-line field:** text `textarea` (its text is the starting value; usually empty with a `placeholder`), `rows` attribute for height.
- Check that they work with `test_flow` (`verify.md`): click the button, expect the dialog `open`, press Escape, expect it `closed`. Add `screenshot: true` to a step to see what's open, instead of editing the design to open it.

## Responsive

Design desktop first, then check `get_screenshot` with `width: 390`. Typical mobile overrides: grids to `1fr`, rows to `flexDirection: column`, smaller `padding` and `gap`, smaller heading `fontSize`. Put them on the node that needs them, in `breakpoints.mobile` (or `tablet`). For something only wide screens have, use `breakpoints.desktop`, which never reaches tablet or mobile. If you hide the nav links on mobile, add a menu `button` with `aria-label: "Menu"` that's hidden on desktop and shown in `breakpoints.mobile`, so the links stay reachable.

## Avoid

- Wrapping every element in its own frame. If a frame has one child and no styles of its own, remove it.
- Fixed `height` on things that hold text: let content size them.
- Absolute positioning for layout. Use `position: absolute` only for overlays like badges, with `position: relative` on the parent.
- Spacing with margins between siblings. Use `gap` on the parent.
