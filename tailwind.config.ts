import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/blocks/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1440px', // 1440p and large monitors — tighter layout
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: 'var(--color-surface, #09090b)',
          alt: 'var(--color-surface-alt, #18181b)',
          light: '#fafafa',
        },
        text: {
          DEFAULT: 'var(--color-text, #fafaf9)',
          muted: 'var(--color-text-muted, #a1a1aa)',
          dim: 'var(--color-text-dim, #52525b)',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #14B8A6)',
          hover: 'var(--color-accent-hover, #0D9488)',
          glow: 'var(--color-accent-glow, rgba(20, 184, 166, 0.15))',
        },
        border: {
          DEFAULT: 'var(--color-border, #27272a)',
          subtle: '#3f3f46',
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
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
