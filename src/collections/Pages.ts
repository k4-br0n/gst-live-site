import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero/schema'
import { ContentWithImage } from '../blocks/ContentWithImage/schema'
import { CTA } from '../blocks/CTA/schema'
import { Features } from '../blocks/Features/schema'
import { Testimonials } from '../blocks/Testimonials/schema'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'URL-friendly identifier (e.g. "about-us")',
      },
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO & Meta',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
          admin: {
            description: 'Overrides the page title for SEO',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
      ],
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page Layout',
      blocks: [Hero, ContentWithImage, CTA, Features, Testimonials],
    },
  ],
}
