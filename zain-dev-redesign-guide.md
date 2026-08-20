# zain.dev — Full Redesign Guide

**Concept: "Signal, not orbit."**
Every AI-portfolio right now reaches for the same visual language — glowing orbit rings, floating nodes, mind-map bubbles. Your actual domain (voice AI, VoIP, real-time systems, telemetry) gives you something more specific to build around: a **signal that travels through the page**. One waveform/trace motif lives in the hero background, becomes the connector in your experience timeline, and threads the toolkit together. One idea, reused with intent, instead of five unrelated decorative tricks.

Everything below assumes this concept. Build the design tokens first, then work section by section. GSAP snippets are illustrative — wire them to your actual DOM structure.

---

## 1. Design Tokens

### Color

| Token | Hex | Use |
|---|---|---|
| `--void` | `#0A0E14` | Base background |
| `--signal` | `#0F1B2B` | Card/panel background, gradient stop |
| `--signal-2` | `#152436` | Card hover / elevated panel |
| `--cyan` | `#38BDF8` | Primary accent — links, active states, the trace, tech tags |
| `--amber` | `#FFB454` | Secondary accent — reserved ONLY for "live" states: current role, available-now badge, primary CTA hover. Never mix cyan and amber in the same component at equal weight. |
| `--bone` | `#F1F3F5` | Primary text |
| `--slate` | `#93A6BC` | Secondary text (brighter than your current gray — your current body copy fails contrast in several places; check against `--void` at 4.5:1 minimum) |
| `--slate-dim` | `#5C6B80` | Tertiary / metadata (timestamps, labels) |
| `--line` | `#1D2A3A` | Hairline borders, dividers |

Rule going forward: **cyan is structural/technical, amber is status/urgency.** If everything glows cyan, nothing does.

### Typography

- **Display — Fraunces (variable, free).** Has a genuinely distinctive italic at low optical size that doesn't read as "generic serif italic." Use the italic for **exactly one emphasized word per headline**, never a full clause. Right now italic is applied arbitrarily across your hero — give it one job so it means something when it appears.
- **Body — Inter or General Sans.** Neutral, high-legibility, wide language support. Don't reach for a second personality typeface here — let Fraunces carry the character and body stay quiet.
- **Mono — JetBrains Mono or IBM Plex Mono.** Keep this — it's already doing real work signaling "engineer" in your eyebrows, tags, and timestamps. Extend it further (see Terminal Card below) instead of introducing new type families.

**Type scale** (fluid, clamp-based — adjust base to taste):

```css
:root {
  --fs-display-xl: clamp(2.75rem, 2rem + 4vw, 5.5rem);   /* hero H1 */
  --fs-display-lg: clamp(2rem, 1.5rem + 2.2vw, 3.25rem);  /* section H2 */
  --fs-display-md: clamp(1.5rem, 1.3rem + 1vw, 2rem);     /* card headline */
  --fs-body-lg: clamp(1.05rem, 1rem + 0.2vw, 1.25rem);    /* hero subhead */
  --fs-body: 1rem;                                         /* paragraph */
  --fs-mono: 0.8125rem;                                    /* eyebrows, tags */
  --lh-tight: 1.05;
  --lh-heading: 1.15;
  --lh-body: 1.6;   /* your current body copy reads tight — loosen this */
  --ls-mono: 0.08em; /* letterspacing for eyebrows/tags, uppercase */
}
```

Fix specific to your current build: body paragraphs in Capabilities and Experience sections are set too tight (~1.3 line-height at small size) — bump to `--lh-body` (1.6) and it alone will noticeably improve readability without changing anything else.

---

## 2. Global Animation System (GSAP)

Since GSAP runs the whole app, standardize on **one entrance pattern, one scroll pattern, one hover pattern** — reused everywhere instead of bespoke motion per section. Consistency here reads as intentional; novelty per-component reads as noise.

### Setup

```js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Respect reduced motion globally — do this once, not per-animation
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
gsap.defaults({ duration: prefersReducedMotion ? 0 : 0.8, ease: "power3.out" });
```

### A. Page-load sequence (hero only, runs once)

A single orchestrated timeline beats scattered fade-ins. Sequence: trace background fades in → eyebrow badge → headline (word-by-word or line-by-line, not letter-by-letter — letter stagger on a serif at this size gets messy) → subhead → CTAs → floating cards drift in last.

```js
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

heroTl
  .fromTo(".bg-trace", { opacity: 0 }, { opacity: 0.08, duration: 1.6 })
  .fromTo(".eyebrow-badge", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 }, "-=1.0")
  .fromTo(".hero-line", { opacity: 0, y: 24 }, { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 }, "-=0.2")
  .fromTo(".hero-subhead", { opacity: 0, y: 12 }, { opacity: 1, y: 0 }, "-=0.3")
  .fromTo(".hero-cta", { opacity: 0, y: 12 }, { opacity: 1, y: 0, stagger: 0.08 }, "-=0.4")
  .fromTo(".hero-card", { opacity: 0, y: 20, rotate: -1 }, { opacity: 1, y: 0, rotate: 0, stagger: 0.15 }, "-=0.3");
```

Cap the whole sequence under ~1.8s total — anything longer and it reads as a loading screen, not a page load.

### B. Scroll reveals (every other section)

One reusable helper, batched, applied uniformly:

```js
function revealOnScroll(selector, opts = {}) {
  gsap.utils.toArray(selector).forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: opts.y ?? 32 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none reverse" },
      }
    );
  });
}

revealOnScroll(".capability-card", { y: 24 });
revealOnScroll(".timeline-entry", { y: 20 });
revealOnScroll(".project-card", { y: 28 });
```

Don't add scale, blur, or rotation to every reveal — that's the "AI motion soup" tell. Opacity + a modest y-shift, consistently, is more confident than five different reveal styles.

### C. Hover micro-interactions

Keep to two patterns app-wide:
- **Cards**: `y: -4, duration: 0.25` + border-color shift from `--line` to `--cyan` at 40% opacity. No scale — scale on cards feels like a slot machine at this density.
- **Buttons/links**: underline or background-fill wipe, `duration: 0.2`, no y-shift (buttons shifting on hover reads as unstable, not lively).

```js
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => gsap.to(card, { y: -4, borderColor: "rgba(56,189,248,0.4)", duration: 0.25 }));
  card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, borderColor: "var(--line)", duration: 0.25 }));
});
```

### D. The signal trace itself

Draw an SVG path (a stylized waveform, not a literal audio file) and animate `stroke-dashoffset` on a slow loop for the hero background, and reuse the *same path style* as the connector in the Experience timeline — same stroke width, same color, same easing curve. This repetition is what makes the motif read as a system rather than a one-off effect.

```js
gsap.to(".signal-trace", {
  backgroundPosition: "200% 0",
  duration: 90,
  ease: "none",
  repeat: -1,
});
```

Freeze this entirely (set to a static frame, no `repeat`) when `prefersReducedMotion` is true.

---

## 3. Section-by-Section

### Hero

**Fixes:**
- Give italic one job: italicize a single word (`AI-native` OR `end to end` — pick one, not the current mixed pattern).
- Replace the flat vignette with the slow-drifting signal-trace background (§2D), 6–8% opacity, cyan on void.
- Push the floating `agent.ts` and telemetry cards to real readable contrast — right now they're too faint to function as content. If they're meant as texture, simplify their content instead (fewer lines, larger type).
- Optional 2–4px mouse-parallax on the trace only. Nothing else in the hero should track the cursor — restraint here matters more than a flashy first moment.

**Content addition:** Add one line under the subhead naming your differentiator in plain terms — not "Full Stack AI Engineer" (title, not value) but something like *"I ship the AI feature and the production system it has to live in — same person, one handoff."* Recruiters skim; give them the sentence that explains why you're not just another full-stack dev.

---

### Capabilities Bento (replace the photo card)

**Fix the overflow bug first:** the top-right tech-tag card is clipping content behind the card edge — check `overflow`/`flex-wrap` on that row before any redesign work.

**Replace "Trust & Reliability" photo card with a Terminal Status Card** — on-brand with the mono language already established elsewhere, and it's live information instead of decoration:

```
$ whoami
zain — full-stack AI engineer

$ uptime --current-role
14mo · CCRIPT Agency

$ status
● available for contract          [amber, pulsing]
```

Animate the lines as a typewriter sequence on scroll-into-view (once, not looping) with a blinking block cursor — this is the one place a typewriter effect is earned, because it's an actual terminal.

```js
const lines = gsap.utils.toArray(".terminal-line");
const tl = gsap.timeline({ scrollTrigger: { trigger: ".terminal-card", start: "top 80%", once: true } });
lines.forEach((line, i) => {
  tl.to(line, { width: "100%", duration: 0.6, ease: "steps(20)" }, i * 0.5);
});
```

**Fix the gray-box illustration** in "Production-ready software, shipped fast" — it currently reads as an unfinished placeholder. Replace with a small animated deploy-log strip (`$ npm run build` → `✓ compiled` → `✓ deployed`) using the same terminal treatment, so the whole grid shares one visual language instead of mixing photo / flat illustration / node-map / terminal.

**Content addition:** move your actual photo to the Contact section, small, next to a one-line quote in your own voice — it earns more trust there than as a decorative lead card here.

---

### Experience Timeline

**Rebuild as data, not decoration.** Drop the alternating left/right layout (it's inconsistent in your current build and rarely aids scanning for a career history anyway). Go single-column, left-aligned, and make the connector line's segment length **proportional to time in role** — this is the one upgrade that turns the timeline from decoration into an actual visualization.

```
│●  May 2025 — Present            Senior Full-Stack Dev · DevOps      [amber dot: current]
│   CCRIPT Agency · Remote
│   Shipped BeBalanced, JessiAI, NexaMortgage, SureHelp
│   [NEXT.JS] [NODE.JS] [POSTGRESQL] [LANGCHAIN] [RAG] [AWS]
│
│●  Jan 2024 — Apr 2025            Full-Stack Developer
│   WJIKS · Remote
│
●   Mar 2022 — Dec 2023            Full-Stack Dev · VoIP Engineer
    Graana.com · Pakistan
```

Use `--amber` for exactly one dot — the current role — so the eye finds "what's happening now" instantly. Every other dot stays cyan/slate.

**Content fix:** trim bullets to a single clause each; let the tag pills carry tool names instead of repeating them in prose (right now LangChain/PostgreSQL appear in both the sentence and the pills — redundant).

**Animation:** draw the connector line with the SVG line-draw technique (same style as the hero trace — this is where the "one signal" concept pays off visually), then reveal each entry as the line reaches it:

```js
gsap.to(".timeline-line", {
  scaleY: 1,
  transformOrigin: "top",
  ease: "none",
  scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 70%", scrub: 0.5 },
});

gsap.utils.toArray(".timeline-entry").forEach((entry) => {
  gsap.fromTo(entry, { opacity: 0, x: -12 }, {
    opacity: 1, x: 0, duration: 0.5,
    scrollTrigger: { trigger: entry, start: "top 80%" },
  });
});
```

---

### Toolkit (fix or replace the orbit)

Current orbit has real overlap bugs (labels colliding) and duplicates itself in a grid below — same 20 tools shown twice with no new information.

**Recommended replacement: "Signal Strength" list**, grouped by category, each tool as a row with a small animated bar for years-used or project-count. More scannable than an orbit, more distinctive than a logo wall, and it reuses your telemetry/signal language instead of introducing a fourth unrelated motif.

```
LANGUAGES
TypeScript   ████████████░░  5yr
Python       ███████░░░░░░░  2yr

FRAMEWORKS
Next.js      ███████████░░░  4yr
NestJS       █████████░░░░░  3yr

AI / DATA
LangChain    ████████░░░░░░  2yr
PostgreSQL   ██████████░░░░  4yr
```

```js
gsap.utils.toArray(".skill-bar-fill").forEach((bar) => {
  gsap.fromTo(bar, { width: "0%" }, {
    width: bar.dataset.level, duration: 1, ease: "power2.out",
    scrollTrigger: { trigger: bar, start: "top 85%" },
  });
});
```

If you'd rather keep the orbit concept: fix the collision by capping 8 nodes per ring across two fixed-radius rings, remove the duplicate grid entirely, and use hover for detail instead of a static label — but the signal-strength list is more aligned with the rebuilt concept and easier to keep bug-free.

---

### Selected Work + GitHub Activity

**Fix the scale drop:** after a massive hero, these cards feel small and low-confidence. Bump card title size one step and give the section its own establishing moment (a short stat strip, see Content Additions below) so it doesn't feel like an afterthought.

**De-emphasize the GitHub heatmap relative to real case studies** — right now "Github *Activity*" gets the same serif-italic ceremony as your actual work. Drop it to a smaller, secondary treatment (plain mono label, no italic serif headline) so hierarchy matches actual hiring value: case studies > quantified impact > activity graph.

**Animation:** stagger the heatmap cells in on scroll, left to right, very fast (`stagger: 0.004`) — this is a good place for a small delightful moment since it's low-stakes decoration, not primary content.

---

### Projects Index

**Fix filter overload:** two rows of pills is decision fatigue before a single project is seen. Collapse to 5–6 primary categories (SaaS, AI, VoIP/Realtime, Fintech, Healthcare, Infra) plus a "More ▾" for the rest.

**Standardize thumbnails:** one consistent browser-chrome frame at a fixed aspect ratio (e.g. 16:10) for every project, instead of raw cropped screenshots at inconsistent sizes with small unreadable interior text. This single change will make the grid look curated rather than pasted-in.

**Content addition — pull one accent color per project into its card.** You already have a mint-green NexaMortgage screenshot and a blue SureHelp one; carry that color into the card's border-hover state or tag background. Right now every card uses uniform cyan regardless of the project's own palette — pulling project-specific color in ties the portfolio together more than forcing everything to match.

**Animation:** filter transitions should be a FLIP-style reflow, not fade-and-refade:

```js
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

function filterProjects(category) {
  const state = Flip.getState(".project-card");
  document.querySelectorAll(".project-card").forEach((card) => {
    card.style.display = card.dataset.category.includes(category) || category === "all" ? "" : "none";
  });
  Flip.from(state, { duration: 0.5, ease: "power2.out", stagger: 0.03 });
}
```

---

## 4. Content Additions (real gaps, not style notes)

1. **Quantified impact strip.** You have real numbers buried in bullets ("~40% faster data retrieval"). Pull 3–4 of these into a dedicated stat strip near the top of the Work section — e.g. `40% faster retrieval · 2,600+ commits/yr · 6 production AI systems shipped`. Numbers up top do more hiring work than a logo wall.

2. **Social proof in actual words.** The GitHub heatmap is activity, not endorsement. One or two real quotes from a manager/client, with name and role, will do more for trust than any graph. If you don't have permission to quote someone yet, that's worth getting before launch — it's the highest-leverage content gap on the site.

3. **Case study depth.** "Open Case Study" needs to lead somewhere real: Problem → Approach → Architecture (a real diagram, not decorative) → Outcome (numbers). This is what separates "knows a lot of tools" from "solves problems" in a hiring manager's read — worth more design/dev time than any animation on this list.

4. **Resume + scheduling.** Add a visible resume download (not buried in Contact) and a direct scheduling link (Calendly-style) — reduces friction for a recruiter skimming on mobile between other tabs.

5. **A short "how I work" note near Experience.** One paragraph, plain voice, on how you approach handoff between AI features and the production systems around them — this is your stated differentiator from the hero; the timeline should back it up with a sentence, not just leave it as a tagline.

---

## 5. Implementation Checklist

- [ ] Fix capability-grid overflow/clipping bug (top-right card)
- [ ] Fix orbit label collisions OR replace with signal-strength list
- [ ] Remove duplicate toolkit grid if orbit is kept
- [ ] Fix timeline connector line (proportional length, runs full height)
- [ ] Replace photo/"Trust & Reliability" card with terminal status card
- [ ] Replace gray-box illustration with deploy-log terminal strip
- [ ] Raise body-copy line-height to 1.6 sitewide; audit contrast on all secondary text
- [ ] Standardize italic to one emphasized word per headline
- [ ] Build signal-trace SVG background component; reuse in hero + timeline
- [ ] Collapse project filter pills to 5–6 primary + "More"
- [ ] Standardize project thumbnails to one frame/aspect ratio
- [ ] Add quantified-impact stat strip above Selected Work
- [ ] Source 1–2 real testimonial quotes
- [ ] Add resume download + scheduling link to nav/contact
- [ ] Wire global GSAP defaults + `prefers-reduced-motion` guard once, reuse everywhere (§2)
