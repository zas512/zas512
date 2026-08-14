# Zain Portfolio Design System --- Cinematic Engineering

## 0. Purpose

This document is the canonical visual, interaction, motion, content, and
implementation system for Zain's personal portfolio.

The goal is to create a portfolio that feels like:

-   editorial
-   technical
-   premium
-   restrained
-   cinematic
-   human-designed

The site must communicate engineering capability through structure,
typography, real product work, architecture, and motion.

It must NOT feel like an AI-generated SaaS landing page.

### Core principle

**Make the static website feel like an expensive editorial publication
about an engineer, and make the scroll experience feel like interacting
with the systems he builds.**

------------------------------------------------------------------------

# 1. Non-Negotiable Design Principles

1.  Prefer typography over decoration.
2.  Prefer whitespace over cards.
3.  Prefer real product screenshots over decorative illustrations.
4.  Use cyan as an interaction accent, not as general decoration.
5.  Use animation to communicate hierarchy, not to fill empty space.
6.  Reuse visual and motion primitives.
7.  Avoid excessive gradients.
8.  Avoid excessive glassmorphism.
9.  Avoid excessive rounded cards.
10. Avoid giant collections of pill badges.
11. Avoid random floating objects.
12. Avoid decorative AI imagery.
13. Do not make every section visually loud.
14. Heavy animation must be concentrated into intentional cinematic
    moments.
15. Content hierarchy must remain understandable with animation
    disabled.
16. The portfolio must look coherent across Home, Work, Case Studies,
    and Contact.
17. Real work is the visual hero; decoration is secondary.

### Anti-AI-slop test

Before adding an element, ask:

-   Does it communicate information?
-   Does it establish hierarchy?
-   Does it improve interaction?
-   Does it reinforce the portfolio identity?

If none apply, remove it.

------------------------------------------------------------------------

# 2. Visual Identity

## Design language

**Cinematic Engineering**

Editorial typography + technical interfaces + restrained dark surfaces +
sophisticated motion.

The visual language is based on six recurring motifs:

1.  Editorial serif typography
2.  Technical monospace metadata
3.  Cyan interaction accent
4.  Fine structural grid
5.  Architecture/system diagrams
6.  Cinematic GSAP sequences

Do not introduce unrelated visual motifs without a deliberate reason.

------------------------------------------------------------------------

# 3. Color System

Use CSS variables/design tokens.

``` css
--background: #05070B;
--surface: #090C12;
--surface-elevated: #0D1118;

--foreground: #F1F3F6;
--foreground-muted: #89919F;
--foreground-subtle: #555D69;

--border: rgba(255,255,255,0.08);
--border-strong: rgba(255,255,255,0.14);

--accent: #00B8E8;
--accent-soft: rgba(0,184,232,0.12);
```

### Rules

-   Background is nearly black, never pure black by default.
-   White is reserved for primary typography.
-   Muted gray handles secondary information.
-   Cyan indicates interaction, state, links, active elements, metrics,
    or system status.
-   Do not add purple, green, orange, pink, or red merely for visual
    variety.
-   Project screenshots may contain their own colors; those colors do
    not become global brand colors.
-   Avoid gradient backgrounds as a default treatment.

------------------------------------------------------------------------

# 4. Typography

Use three typographic roles.

## Display / Editorial

Use the existing high-contrast editorial serif style.

Use for:

-   hero headline
-   major section headings
-   project names
-   major statements

Characteristics:

-   large
-   high contrast
-   tight but readable line height
-   restrained letter spacing
-   sentence case

Suggested scale:

``` text
Hero: clamp(4rem, 8vw, 9rem)
H2:   clamp(3rem, 5vw, 6rem)
H3:   2rem–3rem
```

## Body / UI

Neutral sans-serif.

Use for:

-   descriptions
-   navigation
-   buttons
-   supporting copy
-   project descriptions

Suggested size:

``` text
16px–18px
line-height: 1.5–1.7
```

## Technical / Metadata

Monospace.

Use for:

-   section labels
-   dates
-   project numbers
-   technologies
-   system states
-   metrics
-   coordinates
-   small labels

Typical treatment:

``` text
11px–12px
uppercase where appropriate
letter-spacing: 0.12em–0.20em
```

### Typography rule

Never use all three typefaces at equal visual weight.

Hierarchy must be:

**Serif \> Sans \> Mono**

------------------------------------------------------------------------

# 5. Layout System

Use one global grid.

Recommended:

-   centered max-width container
-   12-column desktop grid
-   consistent horizontal gutters
-   consistent mobile edge padding
-   shared section alignment

Do not create arbitrary container widths per section.

## Spacing scale

Use a predictable scale such as:

``` text
4
8
12
16
24
32
48
64
80
96
128
160
192
```

Large spacing is intentional. Let sections breathe.

## Section rhythm

Major sections should feel like editorial chapters.

Typical structure:

``` text
section label
large heading
supporting statement
content
```

Do not fill every available area.

------------------------------------------------------------------------

# 6. Background Grid

The fine grid is a structural motif.

Use:

-   very low opacity
-   thin lines
-   consistent spacing
-   no heavy glow

The grid can subtly respond to scroll or pointer position.

Do not animate the entire grid continuously.

Preferred effects:

-   subtle opacity modulation
-   slight parallax
-   temporary local illumination
-   very small positional shift

The grid should remain almost invisible until the user notices it.

------------------------------------------------------------------------

# 7. Surfaces

Use only three primary surface types.

## Canvas

Default page background.

No border or card treatment.

## Panel

For genuinely interactive or technical content.

Characteristics:

-   dark surface
-   subtle border
-   small radius
-   minimal shadow
-   no gratuitous glass blur

## Media

For real project screenshots and visual assets.

The image itself should provide visual richness.

Do not put every image inside a colorful gradient card.

------------------------------------------------------------------------

# 8. Border and Radius Rules

Borders:

``` text
default: rgba(255,255,255,0.08)
strong: rgba(255,255,255,0.14)
active: accent-derived
```

Radius should be restrained.

Suggested:

``` text
small UI: 8px–12px
panels: 14px–18px
large media: 18px–24px
```

Do not make every element pill-shaped.

Pills are reserved for:

-   filters
-   compact status
-   small technology metadata
-   system states

------------------------------------------------------------------------

# 9. Navigation

The floating navigation is a core identity element.

Keep it compact and persistent.

Concept:

``` text
● zain.dev       Home   Work   About
```

The active section may change contextually.

Example:

``` text
● zain.dev       03 / Work
```

Behavior:

-   subtle entrance
-   slight backdrop/surface
-   active item uses cyan
-   no excessive animation
-   keyboard accessible
-   mobile version must remain simple

------------------------------------------------------------------------

# 10. Hero

The hero must be the strongest editorial composition.

Recommended structure:

``` text
01 / INTRODUCTION

Building AI-native
full-stack products,
end to end.

Zain — Full Stack AI Engineer building
production software, AI systems,
and realtime infrastructure.

[ VIEW WORK ] [ LET'S TALK ]

REMOTE WORLDWIDE
GITHUB
LINKEDIN
```

### Hero decoration

Use at most one major floating technical object.

Preferred:

-   `agent.ts` code window
-   small telemetry/performance panel
-   subtle system status

Do not use three or more floating cards.

### Hero motion

On initial load:

1.  background grid appears
2.  navigation fades/slides in
3.  metadata appears
4.  headline reveals line-by-line
5.  supporting copy appears
6.  CTA appears
7.  one technical object settles into position

Avoid generic simultaneous fade-up animations.

------------------------------------------------------------------------

# 11. Section System

Every major section follows:

``` text
SECTION NUMBER / LABEL
Large editorial heading
Short supporting statement
Main content
```

Examples:

``` text
01 / CAPABILITIES
02 / EXPERIENCE
03 / SYSTEM
04 / SELECTED WORK
05 / CONTACT
```

Section numbers use monospace.

Section headings use serif.

------------------------------------------------------------------------

# 12. Capabilities

Do not make a wall of technology badges.

Organize skills by capability.

Recommended:

``` text
AI SYSTEMS
RAG · AGENTS · VOICE · MEMORY

PRODUCT
SAAS · WORKFLOWS · MULTI-TENANT

REALTIME
WEBSOCKETS · WEBRTC · VOIP

INFRASTRUCTURE
AWS · DOCKER · CI/CD
```

Technology logos can appear as supporting information.

The capability should be more important than the logo.

------------------------------------------------------------------------

# 13. Architecture / System Visualization

Replace decorative technology orbits with meaningful system maps.

Example:

``` text
                    AI
                     |
          +----------+----------+
          |                     |
       FRONTEND              BACKEND
          |                     |
          +----------+----------+
                     |
                   DATA
                     |
             PostgreSQL / Redis
                     |
              AWS / INFRA
```

Requirements:

-   represent real relationships
-   animate connections
-   use consistent nodes
-   avoid random floating logos
-   use cyan to indicate active paths
-   make the diagram understandable without animation

------------------------------------------------------------------------

# 14. Experience

Use an editorial timeline.

Recommended hierarchy:

``` text
2025 — PRESENT

CCRIPT AGENCY

Senior Full-Stack Developer · DevOps

Short summary

Selected systems:
• BeBalanced
• JessiAI
• NexaMortgage
• SureHelp
• Purchase Portal
• SignWise Inbox
```

Current role gets the most visual weight.

Older roles become progressively more compact.

### Timeline animation

1.  timeline line draws
2.  current node activates
3.  role appears
4.  summary appears
5.  selected projects stagger in
6.  technology metadata appears

Avoid animating every bullet independently.

------------------------------------------------------------------------

# 15. Work Page

The Work page should be monochrome/neutral by default.

Do not give each project a different gradient background.

Use:

-   black/dark surface
-   real screenshot
-   white typography
-   cyan interaction
-   restrained border

Project structure:

``` text
01 — NEXAMORTGAGE

FINTECH · AI · RAG

[ LARGE REAL PRODUCT SCREENSHOT ]

AI-assisted loan management
for U.S. mortgage teams.

NEXT.JS · NODE.JS · POSTGRESQL · RAG · AWS

OPEN CASE STUDY ↗
```

The screenshot supplies the project's natural colors.

------------------------------------------------------------------------

# 16. Work Filters

Do not show an excessive category wall.

Recommended:

``` text
ALL
AI
SAAS
REALTIME
VOIP
FINTECH
```

Only use filters that have enough projects to justify them.

------------------------------------------------------------------------

# 17. Project Hover

Hover should feel physical but restrained.

Recommended:

-   image scale: 1.02--1.04
-   subtle image translation toward cursor
-   metadata reveal
-   border becomes slightly stronger
-   custom cursor appears
-   title moves a few pixels
-   CTA becomes active

Do not use:

-   large rotations
-   violent scaling
-   excessive glow
-   random color changes

------------------------------------------------------------------------

# 18. Case Study System

Case studies should explain engineering, not only display UI.

Structure:

``` text
PROJECT

Hero
Problem
Approach
System Architecture
Implementation
Interface
Technical Challenges
Outcome
Next Project
```

Use architecture diagrams and real screenshots.

The engineering story should be the centerpiece.

------------------------------------------------------------------------

# 19. Motion System

Motion has four levels.

## Level 1 --- Micro

150--250ms.

Use CSS for:

-   hover
-   button
-   link
-   border
-   icon
-   small transforms

## Level 2 --- Reveal

400--900ms.

Use GSAP for:

-   section entrances
-   text reveals
-   image reveals
-   timeline reveals

## Level 3 --- Scroll Choreography

GSAP + ScrollTrigger.

Use for:

-   architecture diagrams
-   project sequences
-   major section transitions
-   timeline drawing

## Level 4 --- Cinematic

1000--1800ms or scroll-scrubbed.

Use only for a handful of signature moments.

Do not make the whole website permanently animated.

------------------------------------------------------------------------

# 20. Motion Tokens

Example:

``` ts
const motion = {
  micro: 0.18,
  fast: 0.3,
  normal: 0.6,
  reveal: 0.8,
  cinematic: 1.2,
  transition: 1.6,
};

const ease = {
  standard: "power2.out",
  smooth: "power3.out",
  cinematic: "expo.out",
  elastic: "back.out(1.2)",
};
```

Treat these as system tokens, not suggestions to randomly vary
durations.

------------------------------------------------------------------------

# 21. GSAP Architecture

Recommended structure:

``` text
lib/
  motion/
    tokens.ts
    presets.ts
    context.ts

components/
  motion/
    Reveal.tsx
    TextReveal.tsx
    Magnetic.tsx
    Parallax.tsx
    DrawLine.tsx
    SplitText.tsx
```

Rules:

-   use GSAP context for React lifecycle management
-   use ScrollTrigger for scroll-driven behavior
-   prefer timelines for choreography
-   use labels in complex timelines
-   keep section animation logic close to the section
-   clean up all animations
-   animate nested content rather than the pinned element
-   provide reduced-motion behavior

------------------------------------------------------------------------

# 22. Motion Presets

Create reusable presets:

### Reveal

``` text
opacity: 0 -> 1
y: 24 -> 0
```

### Text Reveal

Use masks/clipping rather than generic fade-up.

### Draw

For SVG paths, timelines, architecture lines.

### Magnetic

For buttons and major interactive links.

### Parallax

Very subtle image/background movement.

### Project Transition

For project-to-case-study navigation.

Do not create one-off animation logic when an existing preset is
appropriate.

------------------------------------------------------------------------

# 23. Cursor

Desktop can have a custom cursor.

Default:

-   small dot

Interactive:

-   expands
-   displays context such as `OPEN`, `VIEW`, or `DRAG`

Rules:

-   never hide the native cursor on mobile
-   never make the cursor necessary to understand the UI
-   respect reduced motion
-   keep cursor animation fast

------------------------------------------------------------------------

# 24. Contact

Contact should be a strong closing statement rather than another card.

Example:

``` text
READY TO BUILD
SOMETHING SERIOUS?

Available for
full-time and contract work.

[ LET'S TALK ↗ ]
```

Use large typography and whitespace.

------------------------------------------------------------------------

# 25. Accessibility

Support:

``` css
@media (prefers-reduced-motion: reduce) {
  ...
}
```

Reduced-motion mode should:

-   remove parallax
-   remove scrub animations
-   remove large transforms
-   avoid pinned cinematic sequences
-   keep only simple opacity/state transitions
-   preserve content hierarchy

All interactions must remain keyboard accessible.

------------------------------------------------------------------------

# 26. Responsive Rules

Desktop:

-   full grid
-   cinematic animations
-   architecture visualizations
-   custom cursor
-   large editorial type

Tablet:

-   simplify grid
-   reduce animation density
-   preserve typography hierarchy

Mobile:

-   no custom cursor
-   no complex pinned sequences unless performance is proven
-   simplify architecture diagrams
-   avoid horizontal overflow
-   reduce typography scale
-   maintain generous vertical rhythm

Never simply shrink desktop.

Mobile is its own composition.

------------------------------------------------------------------------

# 27. Performance Rules

-   prefer transform/opacity animation
-   avoid animating layout properties
-   lazy-load heavy media
-   optimize project screenshots
-   avoid unnecessary WebGL
-   avoid continuously animated decorative elements
-   use GSAP only where it provides meaningful value
-   avoid multiple competing ScrollTriggers
-   test low-end mobile behavior
-   avoid loading large decorative assets before content

------------------------------------------------------------------------

# 28. Component Inventory

Create and reuse:

``` text
Container
Section
SectionLabel
DisplayHeading
MonoLabel
Button
MagneticButton
Navigation
GridBackground
Reveal
TextReveal
Parallax
ProjectMedia
ProjectMeta
ProjectCard
ProjectFilters
Timeline
TimelineItem
ArchitectureDiagram
TechBadge
Cursor
Footer
```

Do not duplicate visual primitives across pages.

------------------------------------------------------------------------

# 29. Implementation Order

## Phase 1 --- Foundation

-   [ ] Audit current application structure
-   [ ] Preserve existing content and project data
-   [ ] Define color tokens
-   [ ] Define typography tokens
-   [ ] Define spacing tokens
-   [ ] Define border/radius tokens
-   [ ] Define layout/grid tokens
-   [ ] Create global CSS variables
-   [ ] Standardize font loading

## Phase 2 --- Core UI

-   [ ] Refactor navigation
-   [ ] Create Container
-   [ ] Create Section
-   [ ] Create SectionLabel
-   [ ] Create DisplayHeading
-   [ ] Create MonoLabel
-   [ ] Standardize buttons
-   [ ] Standardize panels
-   [ ] Standardize project media

## Phase 3 --- Background

-   [ ] Implement subtle grid
-   [ ] Add optional grid parallax
-   [ ] Verify contrast
-   [ ] Ensure grid never competes with content

## Phase 4 --- Motion Foundation

-   [ ] Install/configure GSAP
-   [ ] Create motion tokens
-   [ ] Create GSAP context helper
-   [ ] Create Reveal
-   [ ] Create TextReveal
-   [ ] Create Magnetic
-   [ ] Create Parallax
-   [ ] Create DrawLine
-   [ ] Add reduced-motion support

## Phase 5 --- Home

-   [ ] Redesign hero
-   [ ] Add controlled hero choreography
-   [ ] Redesign capabilities
-   [ ] Replace technology orbit with architecture/system visualization
-   [ ] Redesign experience timeline
-   [ ] Add selected work preview
-   [ ] Redesign contact

## Phase 6 --- Work

-   [ ] Remove excessive project gradients
-   [ ] Standardize project layouts
-   [ ] Simplify filters
-   [ ] Add project hover interaction
-   [ ] Add project transition
-   [ ] Optimize project imagery

## Phase 7 --- Case Studies

-   [ ] Create reusable case-study template
-   [ ] Add problem section
-   [ ] Add architecture section
-   [ ] Add implementation section
-   [ ] Add real screenshots
-   [ ] Add technical challenges
-   [ ] Add outcome
-   [ ] Add next-project navigation

## Phase 8 --- Polish

-   [ ] Add desktop cursor
-   [ ] Add page transitions where justified
-   [ ] Add keyboard accessibility
-   [ ] Add reduced-motion mode
-   [ ] Test mobile
-   [ ] Test performance
-   [ ] Remove unnecessary animations
-   [ ] Remove decorative elements that do not communicate anything

## Phase 9 --- Final Audit

-   [ ] No excessive gradients
-   [ ] No excessive cards
-   [ ] No excessive pills
-   [ ] No generic AI imagery
-   [ ] No random animation
-   [ ] Consistent typography
-   [ ] Consistent spacing
-   [ ] Consistent color usage
-   [ ] Consistent motion
-   [ ] Every section feels like the same website
