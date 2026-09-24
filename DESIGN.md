---
name: Rushang Shah
description: A watch-movement specification page for a backend engineer; every rating a number, the power reserve the live host.
colors:
  case-950: "#0f1418"
  case-900: "#151b21"
  case-800: "#1b232a"
  steel-700: "#2a333c"
  steel-600: "#3a454f"
  steel-400: "#7f8b94"
  steel-300: "#a9b2ba"
  steel-100: "#e8ebee"
  brass-400: "#d4b56c"
  brass-600: "#a98d4c"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(3.25rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.015em"
    fontVariation: "opsz auto"
  display-italic:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(1.375rem, 2.2vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  headline:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "clamp(2rem, 3.5vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  reading:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  counter:
    fontFamily: "Bodoni Moda, Didot, Times New Roman, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
    fontFeature: "tnum"
  body-small:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontFeature: "tnum"
  command:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.12em"
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.14em"
rounded:
  none: "0px"
  focus: "2px"
  dot: "9999px"
spacing:
  hair: "1px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  row: "20px"
  plate: "24px"
  plate-md: "28px"
  lg: "32px"
  xl: "48px"
  section: "64px"
  section-md: "96px"
components:
  command-filled:
    backgroundColor: "{colors.steel-100}"
    textColor: "{colors.case-950}"
    typography: "{typography.command}"
    rounded: "{rounded.none}"
    height: "2.75rem"
    padding: "0 1.25rem"
  command-filled-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.case-950}"
  command-ruled:
    backgroundColor: "transparent"
    textColor: "{colors.steel-100}"
    typography: "{typography.command}"
    rounded: "{rounded.none}"
    height: "2.75rem"
    padding: "0 1.25rem"
  command-ruled-hover:
    backgroundColor: "transparent"
    textColor: "{colors.steel-100}"
  engraved-label:
    textColor: "{colors.steel-400}"
    typography: "{typography.label}"
  plate:
    backgroundColor: "{colors.case-900}"
    textColor: "{colors.steel-100}"
    rounded: "{rounded.none}"
    padding: "{spacing.plate}"
  spec-row:
    backgroundColor: "transparent"
    textColor: "{colors.steel-300}"
    typography: "{typography.body}"
    padding: "{spacing.row} 0"
  nav-link:
    textColor: "{colors.steel-400}"
    typography: "{typography.label}"
    padding: "0.5rem 0.75rem"
  nav-link-hover:
    textColor: "{colors.steel-100}"
  status-dot-running:
    backgroundColor: "{colors.brass-400}"
    rounded: "{rounded.dot}"
    size: "0.5rem"
  status-dot-idle:
    backgroundColor: "transparent"
    rounded: "{rounded.dot}"
    size: "0.5rem"
---

# Design System: Rushang Shah

## Overview

**Creative North Star: "Caliber Specification"**

The site is a watch-movement specification page. A caliber is presented by its ratings: functions, materials, power reserve, frequency, each a number on a hairline-ruled row. Rushang is presented the same way. The name is set like an engraved caliber designation in a Didone; every claim below it is a term on the left and a rating on the right; and the power reserve on the cover is not a metaphor but a gauge reading the serving host's real memory headroom, polled every sixty seconds. The page proves itself the way a movement does: by running.

The material is a slate case with steel furniture and one brass accent. The ground is near-black slate; rules, secondary text, and dial ticks are brushed-steel grays; primary text is pale steel. Brass appears only where the world is alive or where the visitor's attention is being held: the live "Running" state, the reserve arc and hand, hover on a command or link, the focus ring, the selection highlight, the caret. Everything else is built from 1px hairlines. There are no cards, no shadows, no glass, and the only gradient is the faint brushed-line texture that makes a plate read as metal rather than as a panel.

Density is that of a specification sheet: generous section spacing (64 to 96px), tight row spacing (20px), and long measures held to 60 to 62 characters. Motion is mechanical rather than digital: a hand settles onto its reading with damped easing, a sector sweeps to its value, cover hairlines draw in once from the left, and all of it stops under reduced motion. Confirmed rejections: the two-button hero with a card grid, the ops-console dashboard with a green dot, kickers above headings, monospace type, and any surface that floats.

**Key Characteristics:**
- Slate ground, steel hairlines, one brass accent used sparingly and only for life, attention, or focus.
- Two faces with fixed roles: Bodoni Moda (with optical size) for the name, section titles, and every large reading; Hanken Grotesk with tabular figures for every specification row, label, and command.
- Engraved labels: 12px tracked capitals in mid steel, the only way a term or status is named.
- The definition-list row: term left, description centre, optional figure right, hairline above and below.
- The plate: brushed slate surface with a hairline steel edge, the only container in the system.
- Motion that settles, never snaps: 1400ms settle easing on the gauge, a single 1200ms draw-in on the cover rules, 200ms settle on colour changes.

## Colors

A near-monochrome slate-and-steel palette with a single warm brass reserved for what is alive.

### Primary
- **Brass** (`brass-400`): the live accent. The reserve arc and hand on the power-reserve gauge, the running status dot, the "Running" label inside the host schematic, the border of the running container's unit, hover colour on links and running-head items, the border of a ruled command on hover, the focus ring (2px, offset 3px), the text caret, the OG image's running line, and the skip link. It never fills a large area; the largest brass surface in the build is a 3px arc.
- **Deep Brass** (`brass-600`): brass in shadow. The low-reserve band on the gauge track at 35% opacity, the selection highlight background, and the 1px border of the running container in the schematic.

### Neutral
- **Slate Case** (`case-950`): the page ground and body background. Also the text colour on a filled command and the selection foreground.
- **Plate Slate** (`case-900`): the plate surface; one step lighter than the case so a plate reads as a fitted part, not a floating panel. Also the hub of the gauge hand.
- **Case Step** (`case-800`): declared in the theme as the next step of the case ramp; not applied anywhere in the current build. Reserved.
- **Rule Steel** (`steel-700`): every hairline: section rules, row dividers, the plate edge, the gauge track, the cover draw-in rules.
- **Furniture Steel** (`steel-600`): a lighter hairline for objects rather than layout: the ruled command border, schematic unit borders and connectors, dashed borders on units in development, minor dial ticks, the scrollbar thumb.
- **Engraved Steel** (`steel-400`): engraved labels, muted units and suffixes (the `d h m s` after counters, `%`, "1 / 5 / 15 min"), stack lines, the "(PDF)" qualifier, the dial numerals, the idle status dot's border, connector arrowheads.
- **Reading Steel** (`steel-300`): secondary reading text: descriptions in every specification row, the cover subtitle, section intros, the plate's secondary readings, major dial ticks, the footer email.
- **Pale Steel** (`steel-100`): primary text: the name, section titles, links in rows, figures, the reading and the counters, project names, the fill of a filled command.
- **Polished White** (`white`): used once, as the hover state of the filled command. Not a text colour.

### Named Rules
**The One Brass Rule.** Brass means alive, or attended to. It appears on the live state, the reserve arc, hover, focus, selection, and the caret, and nowhere else. It is never a fill behind text, never a heading colour, never decoration. If a new surface needs a second accent, the answer is a steel step, not a second hue.

**The Hairline Rule.** Structure is drawn in 1px `steel-700` rules and nothing heavier. Objects (commands, units, the plate edge) may use `steel-600`. A rule thicker than 1px is not a rule in this world; the only strokes above 1px are on the gauge.

**The Two-Dot Rule.** Status is never colour alone. A running state is a filled brass dot plus the word "Running"; an idle or unreachable state is a hollow steel dot plus its word. Both halves ship together.

## Typography

**Display Font:** Bodoni Moda, variable optical size, normal and italic (with Didot, Times New Roman, serif)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif)

**Character:** A high-contrast Didone carries the name, the section titles, and every large reading, exactly as a caliber designation is engraved on a bridge. A plain, quiet grotesk with tabular numerals carries every specification row, label, and command. The Didone is never used small except for the gauge readings; the grotesk is never used large. There is no monospace face: tabular figures on the grotesk do the aligning.

### Hierarchy
- **Display** (400, `clamp(3.25rem, 7vw, 6rem)`, 0.98, -0.015em): the name on the cover only. Bodoni Moda with the optical-size axis so the hairlines stay fine at scale. The OG image sets the same line at 120px.
- **Display Italic** (400 italic, `clamp(1.375rem, 2.2vw, 1.875rem)`, 1.3): the cover subtitle, one sentence stating both disciplines, held to 30 characters per line in Reading Steel.
- **Headline** (400, `clamp(2rem, 3.5vw, 2.75rem)`, 1.05, -0.01em): section titles (Specification, Movement, In development, Contact), set in the left four columns. The not-found title uses the same face at `clamp(2.5rem, 6vw, 4.5rem)`.
- **Reading** (400, 2.25rem, 1): the headline gauge value in the plate, with its `%` unit dropped to 1.25rem in Engraved Steel.
- **Counter** (400, 1.5rem, 1): the running-time counters (`0 d 00 h 02 m 30 s`), each numeral in the Didone with its unit in the grotesk at the surrounding size in Engraved Steel.
- **Body** (400, 1.0625rem, 1.625): row descriptions, section intros, project descriptions, figures. Descriptions are held to 62ch in a row, 60ch in a project entry, 42ch in a section intro.
- **Body Small** (400, 0.9375rem): plate readings, stack lines, the cover availability line, schematic unit names (500 weight for the name), the footer email.
- **Command** (500, 0.8125rem, 0.12em, uppercase): text on a command button.
- **Label** (500, 0.75rem, 0.14em, uppercase): the engraved label. Terms in a definition list, running-head items, the status words, the edition line, plate headings, dial legends, the footer line, the skip link. Default colour Engraved Steel; Reading Steel for a plate's primary heading; Pale Steel for the running-head name and résumé item; Brass only for the word "Running".

### Named Rules
**The Two Faces Rule.** Bodoni Moda for the name, the titles, and the numbers that are read from the host. Hanken Grotesk for everything that is specified, labelled, or commanded. No third face, and no monospace; alignment comes from `tabular-nums`, which the body sets globally.

**The Engraved Label Rule.** Anything that names a thing (a term, a status, a heading inside a plate, a navigation item) is an engraved label: 12px, 500, tracked 0.14em, uppercase, mid steel. A label sits beside or above the thing it names inside a row; it never sits above a section title as a kicker.

**The Figure Rule.** A rating is a number set right-aligned in tabular figures in Pale Steel, with its unit in Engraved Steel: `2 h → 15 min`, `$12 / mo`, `60 s`. Units are separated from numbers by a space; series are separated by a spaced middle dot.

## Layout

One centred column, 1280px maximum, with 24px side padding on phones and 48px from 768px up. The running head is a fixed 64px band with the name at the left and the engraved navigation at the right; the three section items hide below 768px, leaving Contact and Résumé.

Sections are a 12-column grid from 768px up with a 32px gutter (48px on the cover from 1024px). Every section places its title in columns 1 to 4 and its content in columns 5 to 12; on the cover the name and commands take columns 1 to 7 and the power-reserve plate columns 8 to 12. Below 768px the grid collapses to a single column with a 40px gap (48px on the cover). Each section after the first opens with a hairline rule and carries 64px of vertical padding, 96px from 768px up; the cover carries 56px above and 48px below, 96px and 64px from 768px. Section anchors scroll to 80px below the viewport top, clearing the running head.

A definition-list row is a two-column grid on phones (term and figure on the first line, description below spanning both) and a three-column grid `11rem 1fr auto` from 768px up (term, description, figure), with 20px vertical padding and a 16px column gap (32px from 768px). Project entries in the development list use the same `11rem 1fr` split. Rows inside a plate are tighter: 12px vertical padding, flex-justified term and value.

The plate carries 24px of padding, 28px from 768px. Commands sit in a wrapping row with a 12px gap. Vertical rhythm inside a column runs on 16, 32, and 48px gaps. Spacing tokens: 1, 4, 8, 12, 16, 20, 24, 28, 32, 48, 64, 96px.

## Elevation & Depth

There are no shadows. Depth is conveyed by one tonal step and one texture: a plate is `case-900` on a `case-950` ground, edged with a 1px `steel-700` hairline and finished with a brushed-line texture (a repeating 180deg gradient of a 1px white line at 2.2% opacity every 3px). That is the only gradient in the system. Nothing floats, nothing blurs, nothing is translucent except the low-reserve band on the gauge track (`brass-600` at 35%) and the brushed lines themselves.

### Named Rules
**The Fitted-Part Rule.** A surface is either the ground or a plate fitted to it. There is no third layer, no hover lift, no shadow on any state. If a component needs to read as separate, it gets a hairline edge, not elevation.

## Shapes

Everything is square-cornered (0px). The only rounded forms are the 8px status dots (circular), the 5px-radius hub of the gauge hand, the round line caps on the hand, and the 2px radius on the focus outline. Borders are 1px solid hairlines; units not yet running are 1px dashed `steel-600`. The gauge is a half-circle arc of radius 96 on a 240 by 140 viewBox with a 2px track, a 3px reserve sector, and an 11-tick scale with majors at 0, 50, and 100. Schematic connectors are 1px lines ending in a 6px chevron drawn as two borders rotated 45deg. No clipping, no masks, no diagonal geometry beyond the chevron.

## Components

### Buttons (the command)
The boutique bar: three commands in a row, thin-ruled, tracked capitals, 44px tall. Reads as a control on an instrument, not a web button.
- **Shape:** square (0px), 44px tall (2.75rem), 20px horizontal padding, inline-flex centred, no wrap.
- **Filled:** Pale Steel fill (`steel-100`) with Slate Case text (`case-950`); brightens to Polished White on hover. The primary action (Email me) and the not-found return.
- **Ruled:** transparent with a 1px `steel-600` border and Pale Steel text; the border turns Brass on hover. Secondary actions (Résumé (PDF), LinkedIn, Email me on not-found).
- **Hover / Focus:** background, border, and colour transition over 200ms with the settle curve. Focus is the global ring: 2px Brass outline, 3px offset, 2px radius.
- **Text:** Command style, 13px, 500, 0.12em, uppercase, no underline.

### Engraved label
- **Style:** 12px Hanken Grotesk, 500, 0.14em tracking, uppercase, Engraved Steel (`steel-400`).
- **Variants by colour only:** Reading Steel for a plate's primary heading; Pale Steel for the running-head name and résumé link; Brass for "Running" in the schematic; the skip link is Brass on a Slate Case background.

### Plate (the only container)
- **Corner Style:** square.
- **Background:** Plate Slate with the brushed-line texture.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px `steel-700`.
- **Internal Padding:** 24px, 28px from 768px.
- **Contents:** a heading row of two engraved labels (name left, unit or qualifier right), then a figure or diagram, then optionally a tight definition list with 12px rows and `steel-700` dividers.

### Specification row (definition-list row with figures)
- **Style:** `dl` with `steel-700` dividers and a hairline above and below the list. Each row: engraved term in an 11rem column, Body description in Reading Steel held to 62ch, optional figure right-aligned in Pale Steel tabular figures with a 7rem minimum width. Links inside a row are Pale Steel and turn Brass on hover; a qualifier after a link is Engraved Steel.
- **Phone:** the term and figure share the first line; the description drops beneath, full width.
- **Project entry (development list):** same geometry; the left cell stacks the project name (Body, 500, Pale Steel) over the engraved status "In development"; the right cell stacks the description over a stack line in Body Small Engraved Steel joined by spaced middle dots.

### Navigation (running head)
- **Style:** a 64px band closed by a hairline that draws in on entry. Name at the left as an engraved label in Pale Steel, turning Brass on hover. Items at the right as engraved labels in Engraved Steel with 8px vertical and 8 to 12px horizontal padding, turning Pale Steel on hover; the résumé item is Pale Steel with its "(PDF)" qualifier in Engraved Steel, turning Brass on hover. No underlines; no active state. Below 768px only Contact and Résumé remain. A skip link sits above the band and slides into view on focus.
- **Footer:** a hairline above, 32px vertical padding, engraved name and city at the left, email in Body Small Reading Steel at the right, Brass on hover.

### Status vocabulary
Three words, each paired with its dot, always as text:
- **Running:** filled Brass dot (8px) plus "Running" in Pale Steel; in the plate, followed by "· verified N s ago" in Engraved Steel, counting up each second and resetting on each poll. In the schematic, the running unit has a `brass-600` border and its "Running" label is Brass.
- **Unreachable:** hollow dot with a 1px `steel-400` border plus "Unreachable", followed by "· last reading N s ago". Shown when a poll fails; the last reading stays on the dial.
- **In development:** hollow dot with a 1px `steel-600` border, a dashed `steel-600` unit border, and the engraved label "In development". Used for every reference not yet running. Nothing invented is shown as live.

### Power reserve (signature instrument)
A plate whose figure is a half-circle gauge reading the serving host's free memory as a percentage. Track in `steel-700` (2px); low-reserve band over the first tenth in `brass-600` at 35% (6px); reserve sector in Brass (3px) swept with `stroke-dasharray` to the reading; 11 ticks with majors in Reading Steel and minors in Furniture Steel; dial numerals 0, 50, 100 in 11px grotesk tracked 0.08em; a Brass hand (2px, round caps, with a 3px counterweight) on a Plate Slate hub ringed in Brass. Beneath: the Reading figure with a muted `%`, and "x of y GB free" in Body Small. Then the plate list: Running (counters), Load (three two-decimal figures joined by middle dots, then "1 / 5 / 15 min"), Host (cores, memory, build hash), Status (see vocabulary). The hand rests at -90deg and sweeps to its reading after first paint; both hand and sector re-settle on each 60-second poll.

### Host schematic (signature diagram)
A plate drawing inbound traffic, the proxy, and every container on the host as ruled units joined by hairline connectors with chevron ends. Units are `steel-600`-bordered boxes with a Body Small name (500, Pale Steel) over an engraved detail. The container list stacks with 8px gaps; the running container is bordered in `brass-600`, the rest dashed. Connectors run vertical on phones and horizontal from 768px.

### Motion grammar
- **Settle, never snap:** the settle curve `cubic-bezier(0.16, 1, 0.3, 1)` is the only easing. Colour and border changes on commands take 200ms; the gauge hand (`transform`) and sector (`stroke-dasharray`) take 1400ms.
- **One entry draw-in:** the running head's bottom rule and the edition line's top rule scale in from the left over 1200ms (the second delayed 200ms), once, on load. No other element animates on entry.
- **Ticking:** the uptime counter and the "verified" age advance once per second between polls, without transition.
- **Reduced motion:** every transition and animation collapses to 0.01ms with one iteration, and smooth scrolling is turned off.

## Do's and Don'ts

### Do:
- **Do** draw every boundary as a 1px `steel-700` hairline; use `steel-600` only on objects (commands, units, the plate edge).
- **Do** name things with the engraved label (12px, 500, 0.14em, uppercase, `steel-400`) and set ratings as right-aligned tabular figures in Pale Steel with units in Engraved Steel.
- **Do** set every large number read from the host in Bodoni Moda and every specified value in Hanken Grotesk.
- **Do** reserve Brass for the live state, the reserve arc, hover, focus, selection, and the caret, and pair every status colour with its word.
- **Do** ease every change with the settle curve: 200ms for colour, 1400ms for the gauge; let the cover rules draw in once.
- **Do** contain content in a plate only when it is an instrument or a diagram; otherwise lay rows directly on the ground.
- **Do** show "In development" for anything not verifiably running.

### Don't:
- **Don't** add shadows, glass, blur, translucency, or any hover lift; there is no third layer.
- **Don't** use gradients beyond the plate's brushed-line texture; no colour gradients, no glows.
- **Don't** build cards or tiles; a plate is fitted to the ground, and a list is rows on hairlines.
- **Don't** place a kicker or eyebrow above a heading; labels live inside rows and plates, never over a section title.
- **Don't** introduce a monospace face or a third typeface; tabular figures on the grotesk carry alignment.
- **Don't** round corners; the only circles are status dots and the gauge hub.
- **Don't** use Brass as a fill behind text, as a heading colour, or as decoration; a second accent hue is not available.
- **Don't** show a static live badge, a green dot, or any uptime figure that is not read from the host at request time.
- **Don't** let anything snap: no linear or ease-out transitions, no motion that survives reduced-motion.
