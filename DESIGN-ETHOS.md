---
daily-note: "[[13 Feb 26]]"
week: "[[W07]]"
tags:
type:
aliases:
progress: 🟡 not started
area:
sorted?: false
due date:
start date:
---
# Core Design Ethos: The "Quiet Luxury" Protocol

## Reference Sites
| Site | What It Teaches |
|------|----------------|
| [Ogaki Digital](https://www.ogakidigital.com/) | Warm neutrals, serif+sans pairing, staggered text reveals, sticky pinned sections |
| [Studio Dialect](https://studiodialect.com/) | Dark mode done right, single accent color discipline, loading as experience |
| [Studio DADO](https://www.studiodado.com/) | "Form Follows Feeling", editorial photography as layout element, generous whitespace |
| [Intentional Spaces](https://intentionalspaces.org/) | Grid-based type hierarchy, full-bleed imagery, research-credibility aesthetic |
| [Essams](https://essams.com/) | Lenis smooth scroll, scroll-triggered reveals, premium portfolio pacing |
| [Bartosz Kolenda](https://bartoszkolenda.com/) | Nature-inspired palettes, fluid clamp() typography, noise/texture overlays |

---

## 1. The Vibe: "Confidence Through Restraint"
Our design philosophy is built on the belief that noise is a sign of weakness. We do not clutter. We do not shout. We present content with absolute confidence, allowing negative space to do the heavy lifting.
* **Key Insight:** If a section feels empty, do not fill it. Let it breathe. Space *is* the luxury.
* **The Pattern:** Every reference site uses padding and margin that would feel "too much" by conventional standards. This is the single most consistent signal — space is the primary design element.
* **Reference:** *Ogaki Digital* — Restrained hero sections, no explanation overload. Cream `#F2EDEB` backgrounds with deep charcoal `#221F20` text. Nothing competes.

## 2. Interaction: "Motion with Meaning"
We are not building a static brochure; we are building a fluid environment. The site must feel "alive," but never chaotic.
* **The Rule:** Interactions should be physically satisfying but intellectually invisible.
    * *Good:* Smooth parallax, magnetic buttons, slow-reveal scroll animations (Scrollytelling).
    * *Bad:* Flashy loading screens, aggressive pop-ups, fast/jerky transitions.
* **Scroll Library:** [Lenis](https://github.com/darkroomengineering/lenis) with low lerp values (~0.06). Used by both Essams and Ogaki. This is the specific library creating the "heavy, physical" scroll feel.
* **Easing Standard:** Ogaki uses `cubic-bezier(0.130, 0.875, 0.455, 0.970)` for text reveals. Nothing snaps. Minimum duration: 500ms. Prefer 700ms+ for section transitions.
* **Staggered Reveals:** Ogaki's split-character text animations — each letter/word enters with a slight delay. Creates a "typewriter weight" without being literal.
* **Reference:** *Studio Dialect* — Immersive elements that feel integrated, not tacked on. Even their loading state is designed as an experience (animated icon sequence + percentage counter).

## 3. Typography: "Type as Architecture"
Typography is not just for reading; it is the primary structural element of the page. We treat text blocks like physical objects in a room.

### The Pairing Rule
A tension between **Structural Sans-Serif** (for UI/Nav) and **Editorial Serif** (for Headlines/Stories). This is the strongest recurring pattern across all references:

| Site | Serif | Sans |
|------|-------|------|
| Ogaki Digital | Reckless (300 weight) | GTAmerica |
| Bartosz Kolenda | Playfair Display | Figtree |
| Studio Dialect | — | Geist + Geist Mono |
| Intentional Spaces | — | System sans with scale hierarchy |

* **Scale:** Headlines should dominate. Ogaki reaches `8.8rem` at desktop. Don't be afraid of massive, screen-dominating typography.
* **Fluid Scaling:** Use CSS `clamp()` for type that scales smoothly between breakpoints rather than jumping at media queries. Example: `font-size: clamp(2rem, 5vw, 8.8rem)`.
* **Letter-Spacing:** Tight. Studio Dialect uses approximately `-0.1vw` — creates a compact, slightly aggressive visual presence that feels current.
* **Reference:** *Bartosz Kolenda / Intentional Spaces* — Clean, grid-based type that holds weight.

## 4. The "Architectural" Grid
Our layouts should feel "built," not just "placed." We draw inspiration from physical architecture — lines, structure, and balance.
* **The Grid:** 12-column responsive grid (Ogaki's structure). Visible or felt grids are welcome. Asymmetry is allowed, but only if balanced by weight.
* **Sticky Sections:** Ogaki uses sticky pinned media sections on desktop for storytelling — content scrolls while the image stays. This creates depth without 3D.
* **Imagery:** Images are never just decoration. They are "windows" or "materials." Full-bleed, composed, editorial-grade. Natural lighting, 5:3 aspect ratios (Intentional Spaces), high fidelity.
* **Reference:** *Studio DADO* — "Form Follows Feeling." Spaces that feel intuitive and personal.

## 5. Color & Materiality
We reject flat, primary colors in favor of "materials" and "atmospheres."

### Palette Tokens
| Token | Value | Source |
|-------|-------|--------|
| `--surface` | `#F2EDEB` (warm cream) | Ogaki |
| `--text` | `#221F20` (deep charcoal) | Ogaki |
| `--surface-dark` | `#242424` (charcoal) | Studio Dialect |
| `--text-light` | `#d2d2d2` (light grey) | Studio Dialect |
| `--accent` | `#dfff00` (lime) | Studio Dialect |
| `--nature-deep` | `#05201f` (black-green) | Kolenda |
| `--nature-light` | `#e2ffc2` (bright green) | Kolenda |

* **The Rule:** Maximum one accent color. Everything else is neutrals — warm greys, off-whites (alabaster, bone), deep charcoals, soft earth tones.
* **Texture:** Subtle grain/noise overlays (Kolenda), soft gradients that mimic light hitting a wall, backdrop blur / glass-morphism for depth (Dialect, Kolenda). Flat design is rejected in favour of perceived physicality.
* **Reference:** *Essams / Studio DADO* — Layered tones, warm/cool shifts to reflect emotion.

## 6. The User Feeling
The user should leave the site feeling **Calm** and **Impressed**.
* **The Goal:** We want the user to think, *"These people are expensive, and they are worth it."*
* **Mechanism:** Fast load times + Smooth transitions = Perceived Value.
* **Performance is Design:** Every reference site is performance-conscious — SVGs over raster, lazy loading, prefetching, minimal JS payload. The smoothness IS the luxury.

---

## Technical Implementation Summary

### For AI Code Generation
When generating UI components, enforce these defaults:

**Spacing**
- Double standard padding. `p-12` minimum for sections, `p-16` to `p-24` for heroes.
- `gap-8` minimum between grid items. Let things breathe.

**Animation**
- Scroll: Lenis with `lerp: 0.06`
- Easing: `cubic-bezier(0.13, 0.875, 0.455, 0.97)` or Tailwind `ease-out` with `duration-700`
- Stagger: 50-100ms delay between sequential elements
- Never animate faster than 500ms for layout transitions

**Typography**
- Use `clamp()` for all display type: `clamp(2rem, 5vw, 8.8rem)` for heroes
- Letter-spacing: `-0.02em` to `-0.04em` for headlines
- Pair one serif (editorial) + one sans (structural). Never more than two families.

**Color**
- One accent maximum. Everything else neutral.
- Prefer warm whites (`#F2EDEB`) over pure white (`#FFFFFF`)
- Prefer deep charcoal (`#221F20`) over pure black (`#000000`)

**Layout**
- 12-column grid foundation
- Minimal borders — use dividers and spacing rather than boxes and shadows
- Content-first: the UI frame should disappear; the content (images/type) is the interface
- Sticky scroll sections for image+text storytelling

**Texture & Depth**
- Noise overlay: `opacity: 0.03-0.05`, blended via CSS `background-image` with SVG noise
- Backdrop blur: `backdrop-blur-sm` to `backdrop-blur-md` for layered elements
- Subtle gradients over flat fills — mimic light direction