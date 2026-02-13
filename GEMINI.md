# GST Site: "Quiet Luxury" Digital Environment

## Project Overview
GST Site is a premium web application built with **Next.js 15**, **Payload CMS 3.0**, and **GSAP**. It follows a "Quiet Luxury" design ethos, prioritizing negative space, refined typography, and physically satisfying motion.

- **Frontend:** Next.js (App Router, React 19)
- **CMS:** Payload CMS 3.0 (Lexical editor, PostgreSQL)
- **Styling:** Tailwind CSS + Custom CSS Variables
- **Animations:** GSAP (ScrollTrigger, @gsap/react) + Lenis (Smooth Scroll)
- **Database:** PostgreSQL via `@payloadcms/db-postgres`

## Building and Running
The following commands are defined in `package.json`:

- `npm run dev`: Starts the Next.js development server and Payload CMS.
- `npm run build`: Compiles the application for production.
- `npm run start`: Runs the compiled production server.
- `npm run lint`: Performs ESLint checks.
- `npm run generate:types`: Synchronizes Payload schema with TypeScript types (`src/payload-types.ts`).
- `npm run payload`: Provides access to the Payload CMS CLI.

## Core Architecture
### Block-Based Content
The site uses a dynamic block-based rendering system. Pages are composed in Payload CMS using blocks, which are then rendered by `src/blocks/RenderBlocks.tsx`.

**Available Blocks:**
- `Hero`: Screen-dominating headlines and media.
- `ContentWithImage`: Editorial storytelling with sticky media options.
- `CTA`: Calls to action with premium pacing.
- `Features`: Grid-based architectural layouts.
- `Testimonials`: Refined social proof.

### Design System (The "Quiet Luxury" Protocol)
Refer to `DESIGN-ETHOS.md` for the full design philosophy.

- **Typography:** 
  - Serif: `Playfair Display` (Headlines/Storytelling)
  - Sans: `Inter` (UI/Navigation)
  - Scaling: Uses CSS `clamp()` for fluid responsive typography.
- **Color Palette:**
  - Surface: `#F2EDEB` (Warm Cream)
  - Text: `#221F20` (Deep Charcoal)
  - Accent: `#dfff00` (Lime - sparingly used)
- **Interactions:**
  - Easing: `cubic-bezier(0.13, 0.875, 0.455, 0.97)`
  - Smooth Scroll: Lenis with `lerp: 0.06`.
  - Texture: Subtle 4% opacity noise overlay (`.noise-overlay`).

## Development Conventions
### Component Creation
- **Naming:** Use PascalCase for components and schemas.
- **Structure:** Blocks should have a `Component.tsx` and a `schema.ts` in their respective folder within `src/blocks/`.
- **GSAP:** Use the `useGSAP` hook for all animations. Ensure elements intended for animation have `visibility: hidden` via `[data-gsap]` or similar to prevent FOUC.
- **Tailwind:** Use the custom utility classes like `.section-padding`, `.container-luxury`, and `.ease-luxury`.

### Payload CMS
- Ensure all collection changes are reflected in the TypeScript types by running `npm run generate:types`.
- Media should be managed through the `Media` collection for optimized delivery (via `sharp`).

## Key Files
- `DESIGN-ETHOS.md`: The spiritual and technical guide for the UI/UX.
- `src/payload.config.ts`: Main configuration for the headless CMS.
- `src/app/globals.css`: Root styles, fluid typography, and noise texture.
- `src/blocks/RenderBlocks.tsx`: The orchestrator for dynamic page content.
- `src/lib/gsap.ts`: Centralized GSAP plugin registration.
