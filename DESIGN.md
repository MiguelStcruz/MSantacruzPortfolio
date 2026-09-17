---
name: "Miguel Santacruz Portfolio"
description: "Engine Diagnostic — a technical editorial system for inspecting gameplay engineering work."
colors:
  diagnostic-blue: "#4ea1ff"
  diagnostic-blue-bright: "#76b9ff"
  runtime-green: "#7ee2b8"
  canvas-navy: "#07111f"
  canvas-navy-deep: "#040b14"
  surface-navy: "#0b1f33"
  surface-navy-raised: "#102a43"
  surface-navy-high: "#163d5c"
  text-primary: "#f4f7fb"
  text-secondary: "#a9b7c7"
  text-dim: "#7f92a7"
  line-subtle: "rgba(169, 183, 199, .2)"
  line-active: "rgba(118, 185, 255, .42)"
typography:
  display:
    fontFamily: '"Segoe UI Variable Text", "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "clamp(2.35rem, 10.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-.04em"
  headline:
    fontFamily: '"Segoe UI Variable Text", "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "clamp(2.25rem, 8vw, 4.8rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-.035em"
  title:
    fontFamily: '"Segoe UI Variable Text", "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "clamp(1.7rem, 6vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-.025em"
  body:
    fontFamily: '"Segoe UI Variable Text", "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: '"Cascadia Code", "SFMono-Regular", Consolas, monospace'
    fontSize: ".7rem"
    fontWeight: 700
    letterSpacing: ".08em"
  control-label:
    fontFamily: '"Segoe UI Variable Text", "Segoe UI", Helvetica, Arial, sans-serif'
    fontSize: ".8rem"
    fontWeight: 750
    letterSpacing: ".075em"
rounded:
  node: "5px"
  chip: "6px"
  control: "8px"
  surface: "12px"
spacing:
  xxs: "8px"
  xs: "12px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  "2xl": "64px"
  "3xl": "96px"
components:
  button-primary:
    backgroundColor: "{colors.diagnostic-blue}"
    textColor: "{colors.canvas-navy-deep}"
    typography: "{typography.control-label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.diagnostic-blue-bright}"
    textColor: "{colors.canvas-navy-deep}"
    typography: "{typography.control-label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "48px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    typography: "{typography.control-label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "48px"
  button-light:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.canvas-navy-deep}"
    typography: "{typography.control-label}"
    rounded: "{rounded.control}"
    padding: "12px 20px"
    height: "48px"
  project-card:
    backgroundColor: "{colors.surface-navy}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.surface}"
    padding: "28px 24px 30px"
  skill-chip:
    backgroundColor: "rgba(16, 42, 67, .45)"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.chip}"
    padding: "8px 11px"
---

# Design System: Miguel Santacruz Portfolio

## Overview

**Creative North Star: "Engine Diagnostic"**

Engine Diagnostic treats the portfolio as a measured technical inspection of gameplay work. Deep navy layers establish a calm working environment; crisp rules, metadata, and state-graph geometry reveal how systems connect without turning the page into a fictional control panel.

The system is technical editorial rather than theatrical. Stable content, generous reading space, and restrained blue signals keep project reasoning primary. Motion behaves like a diagnostic event: one signal pulse traces the engine graph once, while ordinary interaction states remain brief and precise.

**Key Characteristics:**

- Deep navy surfaces separated by tone and one-pixel measured lines.
- Restrained diagnostic blue reserved for actions, active states, and technical notation.
- Large, compact sans-serif headlines paired with small monospaced metadata.
- Game-engine state graphs used as structural geometry, never decorative gaming imagery.
- Stable content with one-time signal motion and a complete reduced-motion fallback.

## Colors

The palette is a narrow navy instrument range with pale readable type, a single blue signal family, and one green runtime readout.

### Primary

- **Diagnostic Blue** (`{colors.diagnostic-blue}`): primary actions, active graph nodes, timeline markers, and the contact surface.
- **Diagnostic Blue Bright** (`{colors.diagnostic-blue-bright}`): hover states, focus outlines, section links, technical labels, and active navigation.

### Tertiary

- **Runtime Green** (`{colors.runtime-green}`): successful live-state readouts only; it does not compete with the action accent.

### Neutral

- **Canvas Navy** (`{colors.canvas-navy}`): default page plane and flat process cells.
- **Deep Canvas Navy** (`{colors.canvas-navy-deep}`): deepest code and contrast plane.
- **Surface Navy** (`{colors.surface-navy}`): cards and modal surfaces.
- **Raised Surface Navy** (`{colors.surface-navy-raised}`) and **High Surface Navy** (`{colors.surface-navy-high}`): measured tonal steps for nodes and scroll affordances.
- **Primary Text** (`{colors.text-primary}`), **Secondary Text** (`{colors.text-secondary}`), and **Dim Text** (`{colors.text-dim}`): three explicit levels of reading priority.
- **Subtle Line** (`{colors.line-subtle}`) and **Active Line** (`{colors.line-active}`): structural division and emphasized technical boundaries.

### Named Rules

**The Signal Scarcity Rule.** Diagnostic blue marks action, state, or technical meaning; it is not ambient decoration.

**The Navy Ladder Rule.** Create depth by stepping through the existing navy surfaces before reaching for shadow or transparency.

## Typography

**Display Font:** Segoe UI Variable Text (with Segoe UI, Helvetica, Arial, and sans-serif fallbacks)  
**Body Font:** Segoe UI Variable Text (with Segoe UI, Helvetica, Arial, and sans-serif fallbacks)  
**Label/Mono Font:** Cascadia Code (with SFMono-Regular, Consolas, and monospace fallbacks)

**Character:** The sans-serif voice is direct, professional, and dense enough for technical case studies. Monospaced type acts as notation for roles, states, labels, dates, and machine-like metadata rather than as a wholesale coding costume.

### Hierarchy

- **Display** (`{typography.display}`): the portfolio name; tightly tracked and constrained to a short measure.
- **Headline** (`{typography.headline}`): major section and contact statements.
- **Title** (`{typography.title}`): project names within repeated case-study cards.
- **Body** (`{typography.body}`): explanatory copy, generally held between 61ch and 66ch.
- **Label** (`{typography.label}`): uppercase technical labels and metadata.
- **Control Label** (`{typography.control-label}`): uppercase button copy with a slightly larger sans-serif voice.

### Named Rules

**The Two-Voice Rule.** Use sans-serif for ideas and outcomes; use mono only for state, role, value, date, or system notation.

## Layout

The site uses one centered responsive page measure: `min(100% - 40px, 1240px)` on small screens, widening its gutters at 620px, 1440px, and 1800px until the container reaches 1440px. The mobile-first flow is a single readable column; the hero becomes a two-column identity-and-engine composition at 900px, and project cards alternate media and case-study content at the same breakpoint.

Section rhythm is deliberately spacious: 96px vertical padding at the base and 132px from 900px. Repeated internals use the extracted 8px, 12px, 16px, 24px, 32px, 48px, 64px, and 96px steps. Content grids change at the implemented 620px and 900px breakpoints; no dense dashboard grid appears on small screens.

**The Inspectable Flow Rule.** Projects lead in a stable vertical sequence; supporting grids may compress, but case-study reading order never changes.

## Elevation & Depth

Depth is primarily tonal and structural. One-pixel rules separate sections, cards, node frames, and process cells; shadows are reserved for the opened mobile navigation, a scrolled sticky header, project-media mockups, the modal, and the engine visual's inset vignette. Flat navy surfaces remain the default at rest.

### Shadow Vocabulary

- **Overlay Lift** (`0 24px 64px rgba(0, 5, 12, .34)`): opened mobile navigation.
- **Scrolled Header** (`0 12px 28px rgba(0, 5, 12, .22)`): subtle separation after the page moves.
- **Media Frame** (`0 20px 50px rgba(0, 0, 0, .35)`): depth inside project-media placeholders.
- **Modal Lift** (`0 32px 96px rgba(0, 0, 0, .65)`): the case-study dialog above its dark backdrop.
- **Engine Inset** (`inset 0 0 80px rgba(0, 5, 12, .55)`): containment inside the diagnostic visual.

### Named Rules

**The Flat-By-Default Rule.** Use tone and line first; shadow appears only when a surface changes interaction depth or represents a contained visual instrument.

## Shapes

The form language is measured and lightly rounded: 12px for major cards, panels, contact surfaces, and the dialog; 8px for controls and internal frames; 6px for chips; and 5px for small state nodes. One-pixel borders define most silhouettes. Circles and rotated geometry belong only to data points, ports, timeline markers, and project placeholder compositions.

**The Functional Geometry Rule.** A curve, circle, grid, or connector must describe state, grouping, or flow; it never exists as generic gaming decoration.

## Components

### Buttons

- **Shape:** compact control corners (`{rounded.control}`), a 48px minimum touch height, and `12px 20px` internal padding.
- **Primary:** diagnostic blue on deep navy, using the tracked uppercase label voice.
- **Hover / Focus:** a 2px upward hover shift over 180ms; bright-blue fill on primary hover and a 3px bright-blue focus outline offset by 4px.
- **Secondary:** transparent fill with an active-line border; hover adds a faint bright-blue wash.
- **Light:** pale text color used as a fill on the blue contact surface.

### Chips

- **Style:** small 6px corners, a subtle line, translucent raised navy, secondary text, and `8px 11px` padding.
- **State:** static skill and metadata tags; no invented selected state.

### Cards / Containers

- **Corner Style:** restrained major rounding (`{rounded.surface}`).
- **Background:** surface navy above the canvas navy.
- **Shadow Strategy:** flat by default; project visuals may contain a lifted media frame.
- **Border:** one subtle line around the card, with a line separating media and body.
- **Internal Padding:** `28px 24px 30px` on mobile, `36px` from 620px, and `52px` in desktop project bodies.

### Navigation

- **Style:** a sticky navy header, restrained sans-serif links, and a bordered mono brand mark. Mobile navigation opens as a full-width stacked sheet below the 72px header; desktop navigation becomes inline at 900px under an 80px header.
- **States:** secondary text at rest, primary text on hover, and bright diagnostic blue for the current desktop section.

### Engine State Graph

The signature diagnostic panel combines a crisp grid, curved connectors, rounded state nodes, ports, a small axis, and mono readouts. Its signal pulse runs once for 4.2s, tracing input through state to output, then disappears; reduced-motion preference removes it.

### Project Dialog

The native dialog uses the surface navy, 12px corners, a strong modal shadow, and a near-black backdrop. Its content remains editorial: two-column case-study sections from 620px, mono section labels, and full-width media and code areas.

## Do's and Don'ts

### Do:

- **Do** preserve deep navy tonal layering and crisp one-pixel structural lines.
- **Do** reserve diagnostic blue for actions, active states, focus, and technical notation.
- **Do** use state graphs, connectors, grids, and readouts to explain real system relationships.
- **Do** keep case-study content stable, readable, and keyboard accessible across breakpoints.
- **Do** keep motion brief and purposeful, with the engine signal pulse playing once and reduced-motion fully respected.

### Don't:

- **Don't** add fake HUD gauges, targeting reticles, telemetry clutter, or interface chrome without real information.
- **Don't** drift into esports neon, cyberpunk glow, or generic gaming imagery.
- **Don't** introduce SaaS dashboard cards, pill-heavy UI, decorative glass, or gradient spectacle.
- **Don't** use monospaced type for long prose or blue as an ambient background effect.
- **Don't** animate stable content continuously or turn the diagnostic pulse into a looping ornament.
