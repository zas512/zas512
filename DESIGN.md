---
name: Zain.dev
description: Full Stack AI Engineer Portfolio Design System
colors:
  primary: "oklch(0.78 0.16 230)"
  accent: "oklch(0.72 0.20 320)"
  neutral-bg: "oklch(0.13 0.02 270)"
  neutral-fg: "oklch(0.97 0.01 270)"
  muted-fg: "oklch(0.66 0.03 270)"
  surface: "oklch(0.15 0.022 270)"
  surface-2: "oklch(0.19 0.028 270)"
typography:
  display:
    fontFamily: "Instrument Serif, ui-serif, Georgia, serif"
    fontSize: "clamp(2.75rem, 8.5vw, 8.5rem)"
    lineHeight: "0.94"
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    lineHeight: "1.6"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    letterSpacing: "0.15em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "14px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "10px 24px"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.full}"
    padding: "10px 24px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Zain.dev

## Overview

**Creative North Star: "The Autonomous Observatory"**

Zain.dev operates as a sleek, high-precision dark atmosphere that balances editorial headline elegance with technical monospace craft. Interfaces emerge cleanly out of deep space, featuring subtle ambient glow fields, tactile glassmorphism containers, and reactive hover interactions.

The visual language avoids generic bright themes, over-saturated cards, and unnecessary visual noise. It projects technical authority, production readiness, and meticulous frontend polish.

**Key Characteristics:**
- Deep obsidian backdrop with oklch-calibrated dark tones.
- Dual typography hierarchy: expressive serif display headlines paired with clean sans body and precision monospace accents.
- Radial ambient glow fields and subtle grid underlays.
- Flat-by-default surfaces that elevate with subtle glass blur and neon rim highlights upon interaction.

## Colors

The color palette is calibrated in OKLCH wide-gamut space for smooth dark mode rendering and vibrant accents.

### Primary
- **Electric Cyan** (`oklch(0.78 0.16 230)` / ~#38bdf8): Used for key callouts, primary interactive states, glowing indicators, and focus rings.

### Secondary
- **Vibrant Magenta Accent** (`oklch(0.72 0.20 320)` / ~#e879f9): Used sparingly for secondary visual highlights, gradient text transitions, and interactive motion states.

### Neutral
- **Deep Obsidian Background** (`oklch(0.13 0.02 270)` / ~#111116): Core backdrop color across viewports.
- **Starlight Foreground** (`oklch(0.97 0.01 270)` / ~#f7f7f9): Primary high-contrast text color.
- **Muted Nebula Foreground** (`oklch(0.66 0.03 270)` / ~#9898ab): Secondary copy, captions, and structural labels.
- **Surface Layer 1** (`oklch(0.15 0.022 270)`): Primary card, modal, and glass panel background.
- **Surface Layer 2** (`oklch(0.19 0.028 270)`): Elevated interactive surfaces and hover states.

### Named Rules
**The Ten Percent Glow Rule.** Cyan and Magenta accents are applied to ≤10% of any given screen area. Their rarity establishes visual hierarchy.

## Typography

**Display Font:** Instrument Serif (fallback: Georgia, serif)  
**Body Font:** Inter (fallback: ui-sans-serif, system-ui, sans-serif)  
**Label/Mono Font:** JetBrains Mono (fallback: ui-monospace, monospace)

**Character:** High-contrast pairing of sophisticated editorial serif headlines with ultra-legible technical body copy and spaced monospace kickers.

### Hierarchy
- **Display** (Regular 400, clamp(2.75rem, 8.5vw, 8.5rem), line-height: 0.94): Hero title and primary section statements.
- **Headline** (Medium 500, clamp(1.75rem, 4vw, 3rem), line-height: 1.1): Major section headers and modal titles.
- **Title** (SemiBold 600, 1.25rem - 1.5rem, line-height: 1.3): Card titles, feature names, and case study titles.
- **Body** (Regular 400, 1rem, line-height: 1.6, max length 65–75ch): Narrative prose, description copy, and project details.
- **Label** (Medium 500, 0.75rem, letter-spacing: 0.15em - 0.2em, uppercase): Status badges, taglines, kicker pills, and code metadata.

### Named Rules
**The Dual Engine Rule.** Section headings rely on Instrument Serif for editorial impact; interactive controls, technical details, and metadata strictly use Inter or JetBrains Mono.

## Layout

The spatial model uses a max-width 7xl container (`1280px`) with fluid horizontal padding (`1rem` on mobile to `2rem` on desktop). Spacing follows an 8px rhythmic grid (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`).

Sections maintain generous vertical separation (`padding-top: 7rem`, `padding-bottom: 7rem`) to allow individual modules room to breathe.

## Elevation & Depth

Surfaces rest flat-by-default against the deep background. Elevation is conveyed through subtle background tint steps (`Surface 1` vs `Surface 2`), 1px translucent borders (`oklch(1 0 0 / 8%)`), and backdrop blur (`backdrop-blur-md` to `backdrop-blur-xl`).

### Named Rules
**The Flat-By-Default Rule.** Cards and panels sit flat at rest. Depth, ambient glow, and scale transitions trigger exclusively upon active hover or focus.

## Shapes

Forms favor soft rounded geometry for containers and pill geometry for interactive controls.

- **Pill Radius** (`9999px`): Buttons, status badges, filter tags, and social indicators.
- **Container Radius** (`14px` / `var(--radius)`): Cards, bento modules, code snippets, and modal dialogs.
- **Border Treatment**: 1px subtle stroke (`border border-border/60` or `border-border/80`).

## Components

### Buttons
- **Shape:** Pill radius (`rounded-full`, 9999px).
- **Primary:** Interactive hover button with expanding fill transition, `px-6 py-2.5`, text size `14px`.
- **Outline / Ghost:** `border border-border/80 bg-surface/40 px-6 py-2.5`, text `14px`, transition to `bg-surface-2 hover:border-foreground/30`.

### Status Pills
- **Style:** `rounded-full border border-border/80 bg-surface/60 px-3.5 py-1.5`, monospace `10.5px` uppercase tracking. Live green pulsing indicator (`bg-emerald-500`).

### Cards / Glass Containers
- **Corner Style:** `rounded-2xl` (14px).
- **Background:** Translucent glass surface (`bg-surface/50` or `glass`).
- **Border:** 1px border (`border-border/60`).
- **Hover:** `hover:scale-105 hover:border-foreground/20` with 300ms cubic-bezier transition.

### Navigation
- **Style:** Floating top bar, backdrop blur glass, rounded-full pill container, high contrast active state indicators.

## Do's and Don'ts

### Do:
- **Do** use `Instrument Serif` exclusively for large headlines and display text.
- **Do** enforce 1px translucent borders (`border-border/60`) on glass panels to separate them from the dark background.
- **Do** include visible keyboard focus indicators (`focus-visible:ring-2 focus-visible:ring-primary`) on all interactive links and buttons.

### Don't:
- **Don't** use solid light backgrounds or stark gray card fills.
- **Don't** apply heavy drop shadows at rest; keep depth flat until hover.
- **Don't** use generic unstyled red or blue colors; strictly adhere to the calibrated OKLCH palette.
