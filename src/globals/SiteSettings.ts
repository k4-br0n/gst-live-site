import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    /* ── Colors ─────────────────────────────────────────────────── */
    {
      name: 'colors',
      type: 'group',
      label: 'Colors',
      admin: {
        description: 'All values should be hex codes (e.g. #14B8A6). Changes apply immediately.',
      },
      fields: [
        {
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color',
          defaultValue: '#14B8A6',
          admin: { description: 'Primary accent — buttons, highlights, active states' },
        },
        {
          name: 'accentHover',
          type: 'text',
          label: 'Accent Hover',
          defaultValue: '#0D9488',
          admin: { description: 'Darker accent for hover states' },
        },
        {
          name: 'surfaceColor',
          type: 'text',
          label: 'Surface (Main Background)',
          defaultValue: '#09090b',
          admin: { description: 'Primary background color — zinc-950' },
        },
        {
          name: 'surfaceAlt',
          type: 'text',
          label: 'Surface Alt (Section Background)',
          defaultValue: '#18181b',
          admin: { description: 'Alternate section background — zinc-900' },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text (Headings)',
          defaultValue: '#fafaf9',
          admin: { description: 'Primary heading text color' },
        },
        {
          name: 'textMuted',
          type: 'text',
          label: 'Text Muted (Body Copy)',
          defaultValue: '#a1a1aa',
          admin: { description: 'Body copy and secondary text' },
        },
        {
          name: 'textDim',
          type: 'text',
          label: 'Text Dim (Labels)',
          defaultValue: '#52525b',
          admin: { description: 'Subtle labels and metadata' },
        },
        {
          name: 'borderColor',
          type: 'text',
          label: 'Border Color',
          defaultValue: '#27272a',
          admin: { description: 'Primary border/divider color' },
        },
      ],
    },

    /* ── Fonts ──────────────────────────────────────────────────── */
    {
      name: 'fonts',
      type: 'group',
      label: 'Fonts',
      fields: [
        {
          name: 'headingFont',
          type: 'select',
          label: 'Heading / Body Font',
          defaultValue: 'inter',
          options: [
            { label: 'Inter', value: 'inter' },
            { label: 'DM Sans', value: 'dm-sans' },
            { label: 'Space Grotesk', value: 'space-grotesk' },
            { label: 'Outfit', value: 'outfit' },
            { label: 'Manrope', value: 'manrope' },
          ],
          admin: { description: 'Used for headings and body text' },
        },
        {
          name: 'monoFont',
          type: 'select',
          label: 'Monospace Font',
          defaultValue: 'jetbrains-mono',
          options: [
            { label: 'JetBrains Mono', value: 'jetbrains-mono' },
            { label: 'Fira Code', value: 'fira-code' },
            { label: 'IBM Plex Mono', value: 'ibm-plex-mono' },
          ],
          admin: { description: 'Used for code-style labels and eyebrows' },
        },
      ],
    },

    /* ── Brand ──────────────────────────────────────────────────── */
    {
      name: 'brand',
      type: 'group',
      label: 'Brand',
      fields: [
        {
          name: 'logoText',
          type: 'text',
          label: 'Logo Text',
          defaultValue: 'GST_',
          admin: { description: 'Text shown in the header and footer' },
        },
        {
          name: 'siteTitle',
          type: 'text',
          label: 'Site Title',
          defaultValue: 'GST',
          admin: { description: 'Browser tab title and SEO' },
        },
        {
          name: 'siteDescription',
          type: 'text',
          label: 'Site Description',
          defaultValue: 'Revenue systems for B2B tech companies',
          admin: { description: 'Meta description for SEO' },
        },
      ],
    },
  ],
}
