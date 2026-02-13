import type { Metadata } from 'next'
import {
  Inter,
  JetBrains_Mono,
  DM_Sans,
  Space_Grotesk,
  Outfit,
  Manrope,
  Fira_Code,
  IBM_Plex_Mono,
} from 'next/font/google'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { SiteSettings } from '@/payload-types'
import './globals.css'

/* ── Pre-load all font options ──────────────────────────────────── */

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono', weight: ['400', '500'] })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code', weight: ['400', '500'] })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-ibm-plex-mono', weight: ['400', '500'] })

/* ── Font lookup maps ───────────────────────────────────────────── */

const sansFontMap: Record<string, { variable: string; className: string }> = {
  'inter': { variable: 'var(--font-inter)', className: inter.variable },
  'dm-sans': { variable: 'var(--font-dm-sans)', className: dmSans.variable },
  'space-grotesk': { variable: 'var(--font-space-grotesk)', className: spaceGrotesk.variable },
  'outfit': { variable: 'var(--font-outfit)', className: outfit.variable },
  'manrope': { variable: 'var(--font-manrope)', className: manrope.variable },
}

const monoFontMap: Record<string, { variable: string; className: string }> = {
  'jetbrains-mono': { variable: 'var(--font-jetbrains-mono)', className: jetbrainsMono.variable },
  'fira-code': { variable: 'var(--font-fira-code)', className: firaCode.variable },
  'ibm-plex-mono': { variable: 'var(--font-ibm-plex-mono)', className: ibmPlexMono.variable },
}

/* ── Default settings (used when CMS is empty) ──────────────────── */

const defaults: SiteSettings = {
  colors: {
    accentColor: '#14B8A6',
    accentHover: '#0D9488',
    surfaceColor: '#09090b',
    surfaceAlt: '#18181b',
    textColor: '#fafaf9',
    textMuted: '#a1a1aa',
    textDim: '#52525b',
    borderColor: '#27272a',
  },
  fonts: {
    headingFont: 'inter',
    monoFont: 'jetbrains-mono',
  },
  brand: {
    logoText: 'GST_',
    siteTitle: 'GST',
    siteDescription: 'Revenue systems for B2B tech companies',
  },
}

/* ── Fetch settings ─────────────────────────────────────────────── */

async function getSettings(): Promise<SiteSettings> {
  try {
    const payload = await getPayload({ config })
    const settings = (await payload.findGlobal({ slug: 'site-settings' })) as SiteSettings
    // Merge with defaults — CMS values override
    return {
      colors: { ...defaults.colors, ...stripNulls(settings.colors) },
      fonts: { ...defaults.fonts, ...stripNulls(settings.fonts) },
      brand: { ...defaults.brand, ...stripNulls(settings.brand) },
    }
  } catch {
    return defaults
  }
}

/** Remove null/undefined values so defaults aren't overridden */
function stripNulls<T extends Record<string, unknown>>(obj: T): Partial<T> {
  const result: Partial<T> = {}
  for (const key in obj) {
    if (obj[key] != null && obj[key] !== '') {
      result[key] = obj[key]
    }
  }
  return result
}

/* ── Metadata ───────────────────────────────────────────────────── */

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()
  return {
    title: {
      default: settings.brand.siteTitle || 'GST',
      template: `%s | ${settings.brand.siteTitle || 'GST'}`,
    },
    description: settings.brand.siteDescription || 'Revenue systems for B2B tech companies',
  }
}

/* ── Layout ─────────────────────────────────────────────────────── */

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSettings()

  // Resolve active fonts
  const activeSans = settings.fonts.headingFont || 'inter'
  const activeMono = settings.fonts.monoFont || 'jetbrains-mono'
  const sansFont = sansFontMap[activeSans] || sansFontMap['inter']
  const monoFont = monoFontMap[activeMono] || monoFontMap['jetbrains-mono']

  // Build CSS variable overrides
  const cssVars: Record<string, string> = {
    '--font-sans': sansFont.variable,
    '--font-mono': monoFont.variable,
  }

  const { colors } = settings
  if (colors.accentColor) cssVars['--color-accent'] = colors.accentColor
  if (colors.accentHover) cssVars['--color-accent-hover'] = colors.accentHover
  if (colors.surfaceColor) cssVars['--color-surface'] = colors.surfaceColor
  if (colors.surfaceAlt) cssVars['--color-surface-alt'] = colors.surfaceAlt
  if (colors.textColor) cssVars['--color-text'] = colors.textColor
  if (colors.textMuted) cssVars['--color-text-muted'] = colors.textMuted
  if (colors.textDim) cssVars['--color-text-dim'] = colors.textDim
  if (colors.borderColor) cssVars['--color-border'] = colors.borderColor

  // Compute accent glow from accent color
  if (colors.accentColor) {
    const hex = colors.accentColor.replace('#', '')
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    cssVars['--color-accent-glow'] = `rgba(${r}, ${g}, ${b}, 0.15)`
  }

  // All font class names so they're loaded
  const fontClasses = [
    sansFont.className,
    monoFont.className,
  ].join(' ')

  return (
    <html
      lang="en"
      className={fontClasses}
      style={cssVars as React.CSSProperties}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
