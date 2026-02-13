import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/blocks/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#09090b',   // zinc-950 — absolute dark base
          alt: '#18181b',       // zinc-900 — elevated cards/sections
          light: '#fafafa',     // zinc-50 — rare contrast sections
        },
        text: {
          DEFAULT: '#fafaf9',   // zinc-50 — headings
          muted: '#a1a1aa',     // zinc-400 — body copy
          dim: '#52525b',       // zinc-600 — subtle labels
        },
        accent: {
          DEFAULT: '#14B8A6',   // teal — terminal cyan
          hover: '#0D9488',     // teal darker
          glow: 'rgba(20, 184, 166, 0.15)', // for glow effects
        },
        border: {
          DEFAULT: '#27272a',   // zinc-800 — primary borders
          subtle: '#3f3f46',    // zinc-700 — hover borders
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.375rem',
      },
      transitionTimingFunction: {
        luxury: 'cubic-bezier(0.13, 0.875, 0.455, 0.97)',
      },
      transitionDuration: {
        '700': '700ms',
        '900': '900ms',
        '1200': '1200ms',
      },
    },
  },
  plugins: [],
}

export default config
