import type { GlobalConfig } from 'payload'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  access: {
    read: () => true,
  },
  fields: [
    /* ── 01 · Hero ──────────────────────────────────────────────── */
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: '// FOR_B2B_TECH_COMPANIES',
          admin: { description: 'Small monospace text above the headline' },
        },
        {
          name: 'headingLine1',
          type: 'text',
          required: true,
          defaultValue: 'You have a great product.',
          admin: { description: 'First line — full brightness' },
        },
        {
          name: 'headingLine2',
          type: 'text',
          required: true,
          defaultValue: 'You have no acquisition system.',
          admin: { description: 'Second line — muted color' },
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'I build the engine that turns strangers into qualified leads. Strategy, pages, automation, outreach. End to end.',
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Book a Discovery Call',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: '#contact',
          admin: { description: 'URL or anchor (e.g. #contact)' },
        },
      ],
    },

    /* ── 02 · Problem ───────────────────────────────────────────── */
    {
      name: 'problem',
      type: 'group',
      label: 'Problem Section',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: '// THE_PROBLEM',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Sound familiar?',
        },
        {
          name: 'painPoints',
          type: 'array',
          label: 'Pain Points',
          minRows: 1,
          maxRows: 10,
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'summary',
          type: 'text',
          defaultValue:
            "The real issue: you don't have an acquisition system. You have scattered tactics.",
          admin: { description: 'Bold closing line for the section' },
        },
      ],
    },

    /* ── 03 · Guide ─────────────────────────────────────────────── */
    {
      name: 'guide',
      type: 'group',
      label: 'Guide Section (About)',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: '// MEET_YOUR_GUIDE',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'I do the thinking and the building.',
          admin: { description: 'The word "and" will be accent-colored automatically' },
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'I embed with small B2B tech firms to build their entire go-to-market system. No hand-offs. No subcontractors. No "here\'s a strategy deck, good luck."',
        },
        {
          name: 'advantages',
          type: 'array',
          label: 'Unfair Advantages',
          minRows: 1,
          maxRows: 6,
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              admin: { description: 'Short accent-colored label (e.g. "In the trenches")' },
            },
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },

    /* ── 04 · Proof ─────────────────────────────────────────────── */
    {
      name: 'proof',
      type: 'group',
      label: 'Proof Section (Case Study)',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: '// CASE_STUDY',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'From zero system to full engine.',
        },
        {
          name: 'context',
          type: 'textarea',
          defaultValue:
            'A niche B2B connectivity company selling 5G Fixed Wireless Access to MSPs and corporate IT teams. Technical product, technical buyers, zero acquisition system.',
          admin: { description: 'Brief description of the company/situation' },
        },
        {
          name: 'problems',
          type: 'array',
          label: 'Before (Problems)',
          minRows: 1,
          maxRows: 10,
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'built',
          type: 'array',
          label: 'After (What Was Built)',
          minRows: 1,
          maxRows: 10,
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'result',
          type: 'textarea',
          required: true,
          defaultValue:
            'A complete acquisition system running end-to-end. From scattered tactics to a working growth engine. One person did the strategy AND the building.',
          admin: { description: 'Pull-quote result statement' },
        },
      ],
    },

    /* ── 05 · System ────────────────────────────────────────────── */
    {
      name: 'system',
      type: 'group',
      label: 'System Section (How It Works)',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: '// HOW_IT_WORKS',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Three phases. One system.',
        },
        {
          name: 'phases',
          type: 'array',
          label: 'Phases',
          minRows: 1,
          maxRows: 6,
          fields: [
            {
              name: 'number',
              type: 'text',
              required: true,
              admin: { description: 'Display number (e.g. "01")' },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'duration',
              type: 'text',
              required: true,
              admin: { description: 'e.g. "2–3 weeks"' },
            },
            {
              name: 'deliverable',
              type: 'text',
              required: true,
              admin: { description: 'Accent-colored deliverable line' },
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },

    /* ── 06 · Compare ───────────────────────────────────────────── */
    {
      name: 'compare',
      type: 'group',
      label: 'Compare Section (Agency vs Me)',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: '// WHY_NOT_AN_AGENCY',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'The difference.',
        },
        {
          name: 'rows',
          type: 'array',
          label: 'Comparison Rows',
          minRows: 1,
          maxRows: 10,
          fields: [
            {
              name: 'them',
              type: 'text',
              required: true,
              label: 'Typical Agency',
            },
            {
              name: 'me',
              type: 'text',
              required: true,
              label: 'Working With Me',
            },
          ],
        },
      ],
    },

    /* ── 07 · Pricing ───────────────────────────────────────────── */
    {
      name: 'pricing',
      type: 'group',
      label: 'Pricing Section',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: '// INVESTMENT',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'Transparent pricing.',
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue:
            'Satisfaction guarantee. Direct access. No juniors. 14-day proposal validity.',
        },
        {
          name: 'options',
          type: 'array',
          label: 'Pricing Options',
          minRows: 1,
          maxRows: 4,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              admin: { description: 'e.g. "The Full Build"' },
            },
            {
              name: 'scope',
              type: 'text',
              required: true,
              admin: { description: 'e.g. "Phase 1 + 2"' },
            },
            {
              name: 'price',
              type: 'text',
              required: true,
              admin: { description: 'e.g. "£8,000–12,000"' },
            },
            {
              name: 'priceNote',
              type: 'text',
              admin: { description: 'e.g. "one-time or 50/50 split"' },
            },
            {
              name: 'features',
              type: 'array',
              label: 'Features',
              minRows: 1,
              maxRows: 12,
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'recommended',
              type: 'checkbox',
              defaultValue: false,
              admin: { description: 'Highlight this option as recommended' },
            },
          ],
        },
      ],
    },

    /* ── 08 · FAQ ───────────────────────────────────────────────── */
    {
      name: 'faq',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: '// FAQ',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: "Questions you're probably asking.",
        },
        {
          name: 'items',
          type: 'array',
          label: 'Questions',
          minRows: 1,
          maxRows: 20,
          fields: [
            {
              name: 'question',
              type: 'text',
              required: true,
            },
            {
              name: 'answer',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },

    /* ── 09 · Contact ───────────────────────────────────────────── */
    {
      name: 'contact',
      type: 'group',
      label: 'Contact Section',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          defaultValue: '// START_HERE',
        },
        {
          name: 'heading',
          type: 'text',
          required: true,
          defaultValue: 'A growth engine running without you thinking about it.',
          admin: {
            description:
              'The phrase after "running" will be accent-colored automatically',
          },
        },
        {
          name: 'description',
          type: 'text',
          defaultValue:
            "One discovery call. No pitch decks. No pressure. Just a conversation to find out if we're a good fit.",
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'Book a Discovery Call',
        },
        {
          name: 'ctaLink',
          type: 'text',
          defaultValue: 'mailto:hello@gst.studio',
        },
        {
          name: 'email',
          type: 'text',
          defaultValue: 'hello@gst.studio',
        },
        {
          name: 'socials',
          type: 'array',
          label: 'Social Links',
          minRows: 0,
          maxRows: 8,
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              admin: { description: 'Full URL (e.g. https://twitter.com/...)' },
            },
          ],
        },
      ],
    },
  ],
}
