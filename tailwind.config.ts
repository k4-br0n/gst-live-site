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
          DEFAULT: '#F2EDEB',
          dark: '#242424',
        },
        text: {
          DEFAULT: '#221F20',
          light: '#d2d2d2',
          muted: '#8a8785',
        },
        accent: {
          DEFAULT: '#dfff00',
          muted: 'rgba(223, 255, 0, 0.15)',
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
