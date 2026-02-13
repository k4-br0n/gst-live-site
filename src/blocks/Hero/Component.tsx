import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Props = {
  heading: string
  subheading?: string
  image?: {
    url: string
    alt?: string
  }
  ctaText?: string
  ctaLink?: string
  style?: 'default' | 'centered' | 'split'
}

export function HeroBlock({
  heading,
  subheading,
  image,
  ctaText,
  ctaLink,
  style = 'default',
}: Props) {
  if (style === 'centered') {
    return (
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gray-50 px-6 py-24 text-center">
        {image?.url && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${image.url})` }}
          />
        )}
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {heading}
          </h1>
          {subheading && (
            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              {subheading}
            </p>
          )}
          {ctaText && ctaLink && (
            <div className="mt-10">
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
              >
                {ctaText}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          )}
        </div>
      </section>
    )
  }

  if (style === 'split') {
    return (
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {heading}
            </h1>
            {subheading && (
              <p className="mt-6 text-xl leading-relaxed text-gray-600">
                {subheading}
              </p>
            )}
            {ctaText && ctaLink && (
              <div className="mt-10">
                <Link
                  href={ctaLink}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
                >
                  {ctaText}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            )}
          </div>
          {image?.url && (
            <div className="overflow-hidden rounded-2xl">
              <img
                src={image.url}
                alt={image.alt || ''}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>
    )
  }

  // Default style
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          {heading}
        </h1>
        {subheading && (
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-600">
            {subheading}
          </p>
        )}
        {ctaText && ctaLink && (
          <div className="mt-10">
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}
        {image?.url && (
          <div className="mt-16 overflow-hidden rounded-2xl">
            <img
              src={image.url}
              alt={image.alt || ''}
              className="w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}
