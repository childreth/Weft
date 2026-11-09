# App screens

A screen in an app (a dashboard, a tracker, a home screen, a settings page, a record someone keeps open) is used, not read once. Most of `style.md` still holds, but its page rules are written for marketing pages. Where they disagree, this file wins for app screens.

## What changes from a page

- **Type:** no display headline. The largest thing is usually a number or the one item the screen is about. Three or four sizes: that number, a section title, body, and small text for labels and meta. Small labels may be uppercase with open tracking (about 0.06em) when they label values; that isn't the eyebrow tell.
- **Repetition is fine:** list rows, tiles and cards that share a pattern are how an app is scanned. Don't vary sections for variety's sake; vary only where the content differs.
- **Density:** tighter than a page. About 12–16px inside a panel, 8–12px between related items, 24–32px between groups. On mobile, 16px side margins.
- **Copy:** labels and values, not sentences. A heading names the group ("Today", "Accounts", "Spell slots").

## Framing

- **Mobile (390 wide):** a top bar (back or menu, the title, one or two actions) and, for an app with several areas, a bottom tab bar with three to five tabs, each an icon and a short label, the current one marked with `aria-current: "page"`. Pin the tab bar with `position: sticky; bottom: 0` at the end of the artboard.
- **Desktop:** a side or top navigation, the content in a max-width column or a grid of panels.
- A status bar (time, signal, battery) only if the user wants a device mockup.

## The parts

Build from the domain's real data, and pick the part that shows it best:

- **Stat:** a label, a large value (`tabular-nums`) and a unit or change. A row or grid of stats only when the numbers are peers.
- **Progress:** a bar or ring with its value in words next to it, for anything with a goal or a maximum.
- **List row:** leading icon, avatar or status dot; the label with muted meta under it; a trailing value, chevron or control. Rows separated by space or an `outline-variant` hairline, not each in its own card.
- **Segmented control or tabs:** for switching views of the same content; a `nav` with links or a `div` of buttons with `aria-pressed`.
- **Chip:** a short value or filter in a pill; `label` text role.
- **Counters and pips:** a row of small marks for a count with a maximum (slots, streak days, steps of a flow), with the count in words for screen readers (`aria-label`).
- **Primary action:** at most one filled button per screen; others tonal or outlined.

## Icons

Apps lean on icons: give tabs, list rows, stats and icon buttons a Material Symbols icon (`search_icons`, `add_fonts` once), one style (Outlined, Rounded or Sharp) and one weight throughout. Icon-only buttons need `aria-label`. An icon labels or identifies something; don't add one where it says nothing.

## Checking it

- Look for the one thing a person opens this screen to see. It should be the first thing in the screenshot.
- Every number has a label and a unit. Nothing anyone needs to read is under 12px.
- Fake data looks real: plausible names, amounts and dates, not "Item 1", and say in your reply that it's sample data.
- `test_flow` the tab bar, the segmented control and anything that opens.
