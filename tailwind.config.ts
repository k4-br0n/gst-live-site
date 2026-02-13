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
          DEFAULT: '#F5F0EB',
          alt: '#EBE5DE',
          dark: '#1C1C1A',
        },
        text: {
          DEFAULT: '#1C1C1A',
          muted: '#6B6560',
          'on-dark': '#F5F0EB',
        },
        accent: {
          DEFAULT: '#14B8A6',
          hover: '#0D9488',
          tint: '#E0FAF5',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
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
