# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start Next.js + Payload CMS dev server (http://localhost:3000)
npm run build            # Production build
npm run lint             # ESLint (Next.js config)
npm run generate:types   # Regenerate payload-types.ts after schema changes
npm run payload          # Run Payload CLI commands
```

Admin panel: `http://localhost:3000/admin`

## Environment Setup

Requires Node.js >=20.18.0 (see `.nvmrc`). Copy `.env.example` to `.env` and configure:
- `DATABASE_URI` — PostgreSQL connection string
- `PAYLOAD_SECRET` — Random encryption secret
- `NEXT_PUBLIC_SITE_URL` — Site URL (default `http://localhost:3000`)

## Architecture

**Next.js 15 (App Router) + Payload CMS 3.0 embedded in the same process.** PostgreSQL database, Tailwind CSS styling, GSAP animations, Lenis smooth scroll.

### Route Groups
- `src/app/(frontend)/` — Public site. Layout includes Header, Footer, SmoothScroll, ScrollAtmosphere, TimelineNav.
- `src/app/(payload)/` — Payload admin UI and API routes (auto-generated).

### Dual Content Model
- **Homepage** (`(frontend)/page.tsx`): Hardcoded 11-section sales funnel. Content lives directly in the component, NOT in the CMS. Section IDs must match `TimelineNav`: `hero`, `vsl`, `testimonial`, `problem`, `bridge`, `pathway`, `agitation`, `about`, `proof`, `qualifier`, `contact`.
- **CMS Pages**: Block-based page builder via catch-all route `[...slug]/page.tsx`. Fetches by slug with `depth: 2`. `<RenderBlocks />` maps block types to components.

### Design Tokens from CMS
The `SiteSettings` global controls colors, fonts, and brand text. Root `layout.tsx` fetches these and injects CSS variables into `<html>`. Use semantic tokens only: `bg-surface`, `bg-surface-alt`, `text-text`, `text-text-muted`, `text-text-dim`, `text-accent`, `border-border`, `text-surface`. Fonts: `font-sans`, `font-mono`.

### Data Fetching
Always use Payload Local API server-side. Always pass `depth: 2` so upload/relationship fields resolve to full objects:
```typescript
const payload = await getPayload({ config })
const data = await payload.find({ collection: 'pages', where: { slug: { equals: slug } }, depth: 2, limit: 1 })
```

### Path Aliases
- `@/*` → `./src/*`
- `@payload-config` → `./src/payload.config.ts`

## Key Conventions

- **Server Components by default.** Only add `'use client'` for interactive islands and GSAP animations.
- **Payload schemas** in `src/collections/` and `src/blocks/*/schema.ts`. **Block components** in `src/blocks/*/Component.tsx`.
- **Tailwind utility classes only** — stick to the design system, avoid arbitrary values.
- **Icons:** Lucide React exclusively.
- **`payload-types.ts` is committed** (tracked for Vercel builds). Regenerate with `npm run generate:types` after schema changes.

## Animation Patterns

- Import GSAP from `@/lib/gsap` (pre-registers ScrollTrigger).
- `<AnimatedSection>` wraps sections for scroll/load reveals. Use `trigger="load"` for above-the-fold.
- Keep animations subtle: 0.8–1.2s duration, `power2.out` easing.
- **Critical CTAs** (hero button etc.): Use CSS animations (`animate-fade-in`) instead of GSAP to avoid flash on navigation.
- Custom scroll effects: `useGSAP` + `ScrollTrigger` with `once: true`.

## Adding a New Block (CMS)

1. Create `src/blocks/YourBlock/schema.ts` (Payload Block config)
2. Create `src/blocks/YourBlock/Component.tsx` (React component)
3. Register in `src/collections/Pages.ts` `layout.blocks` array
4. Register in `src/blocks/RenderBlocks.tsx` component map
5. Run `npm run generate:types`

## Adding a Homepage Section

1. Add section to `(frontend)/page.tsx` with correct `id` attribute
2. Add to `TimelineNav.tsx` `sections` array (number, id, label)
3. Update `ScrollAtmosphere` color zones if page length changes significantly

## Responsive Breakpoints

Standard Tailwind breakpoints plus `3xl: 1440px` for large monitor optimizations (caps height, tightens padding).

## Reference Docs

- `DESIGN-ETHOS.md` — Design philosophy, animation guidelines, reference sites
- `SITE-BRIEF.md` — Brand identity, target audience, voice & tone
- `.cursor/rules/project-rules.mdc` — Detailed architecture rules
