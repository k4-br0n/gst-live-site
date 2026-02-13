# AI Agent Prompt: GST Site Refactor & Implementation

## Context
You are an expert Frontend Developer and UI/UX Designer specializing in "Quiet Luxury" aesthetics. You are taking over a Next.js 15 + Payload CMS project that has a solid foundation but inconsistent implementation in its content blocks.

## The Situation
The project's shell (Layout, Header, Footer) follows the `DESIGN-ETHOS.md` perfectly:
- Uses semantic color variables (`var(--surface)`, `var(--text)`, etc.).
- Implements smooth scrolling (Lenis).
- Uses a noise texture overlay.
- Uses the correct font pairing (Inter + Playfair Display).

**HOWEVER**, the content blocks in `src/blocks/` (Hero, ContentWithImage, CTA, Features, Testimonials) are generic, low-quality placeholders. They:
- Use hardcoded Tailwind colors (`bg-gray-50`, `text-gray-900`) instead of the project's semantic tokens.
- Ignore the fluid typography (`clamp()`) defined in `globals.css`.
- Lack the "Quiet Luxury" spacing (generous padding/margins).
- Have zero animations.
- Look like standard corporate templates, which completely contradicts the brand identity defined in `SITE-BRIEF.md`.

## Your Mission
Refactor the existing blocks in `src/blocks/` to match the quality of the `Header` and `Footer` and adhere strictly to `DESIGN-ETHOS.md`.

### Global Requirements for All Blocks
1.  **Colors:** NEVER use `gray-50`, `gray-900`, or `brand-600`. Use only:
    - Backgrounds: `bg-surface` (default), `bg-surface-dark` (for inverted sections).
    - Text: `text-text`, `text-text/80` (muted), `text-text-on-dark` (on dark bg).
    - Accents: `text-accent` (sparingly, e.g., for hover states or single key elements).
2.  **Typography:**
    - Headings: Use `font-serif`. Rely on the global `h1`, `h2`, `h3` styles in `globals.css` which already handle `clamp()` scaling.
    - Body: `font-sans`, `text-base` or `text-lg`.
    - Buttons: Uppercase, tracking-widest, text-xs or text-sm.
3.  **Spacing:**
    - Minimum vertical padding: `py-24 md:py-32`.
    - Gap between elements: `gap-8` to `gap-12`.
4.  **Animation:**
    - Use `src/lib/gsap.ts` to import `gsap` and `useGSAP`.
    - Implement scroll-triggered reveals (fade up + subtle y-axis movement) for text and images.
    - Ensure animations are "slow" (>0.7s) and use the custom ease `[0.13, 0.875, 0.455, 0.97]`.

### Specific Block Instructions

#### 1. Hero (`src/blocks/Hero/Component.tsx`)
- **Critique:** Currently generic.
- **Fix:**
    - Style 1 (Centered): Massive serif headline (use `<h1>`). Minimalist subtext.
    - Style 2 (Split): Text left, full-bleed or large aspect-ratio image right.
    - Remove "brand-600" buttons. Use a simple, high-contrast button (e.g., solid dark charcoal on cream) or a text link with an arrow.

#### 2. ContentWithImage (`src/blocks/ContentWithImage/Component.tsx`)
- **Critique:** Boring layout, bad rich text rendering.
- **Fix:**
    - Create a "magazine layout" feel.
    - Image should have a subtle parallax effect if possible (using GSAP ScrollTrigger).
    - Improve the Rich Text rendering to support basics like bold, italic, and lists correctly using the Payload rich text parser/components.

#### 3. CTA (`src/blocks/CTA/Component.tsx`)
- **Critique:** Looks like a generic SaaS banner.
- **Fix:**
    - Avoid the "banner" look.
    - Make it a large, confident typography-led section.
    - Example: "Ready to build your engine?" in large serif, with a simple button below.
    - Use plenty of whitespace.

#### 4. Features (`src/blocks/Features/Component.tsx`)
- **Critique:** Standard icon grid.
- **Fix:**
    - Use a "numbered list" style or an elegant grid with minimal lines/borders.
    - If icons are used, make them small and refined (Lucide), not "brand colored bubbles".
    - Maybe use a 1px border grid system (like a technical drawing) to fit the "Architectural" ethos.

#### 5. Testimonials (`src/blocks/Testimonials/Component.tsx`)
- **Critique:** Cards on gray background.
- **Fix:**
    - Remove the "card" background. Let them float on the page or use thin borders.
    - Focus on the typography of the quote.
    - Use the "Case Study" approach mentioned in the brief if applicable, or keep it as a clean slider/grid.

## Execution Steps
1.  Read `DESIGN-ETHOS.md` and `globals.css` again to internalize the tokens.
2.  Iterate through each block file in `src/blocks/` and rewrite the `Component.tsx`.
3.  Ensure `RenderBlocks.tsx` is correctly passing data.
4.  Verify that no `bg-gray-*` or `text-gray-*` classes remain.

**Output:**
Provide the updated code for each component file.
