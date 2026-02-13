import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type Props = {
  heading: string
  description?: string
  buttonText: string
  buttonLink: string
  style?: 'default' | 'banner' | 'minimal'
}

export function CTABlock({
  heading,
  description,
  buttonText,
  buttonLink,
  style = 'default',
}: Props) {
  if (style === 'banner') {
    return (
      <section className="bg-brand-600 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="text-3xl font-bold text-white">{heading}</h2>
            {description && (
              <p className="mt-2 text-lg text-brand-100">{description}</p>
            )}
          </div>
          <Link
            href={buttonLink}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-lg font-semibold text-brand-600 shadow-sm transition-colors hover:bg-brand-50"
          >
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    )
  }

  if (style === 'minimal') {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
          {description && (
            <p className="mt-3 text-gray-600">{description}</p>
          )}
          <div className="mt-8">
            <Link
              href={buttonLink}
              className="inline-flex items-center gap-1 text-lg font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              {buttonText}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    )
  }

  // Default style
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {heading}
        </h2>
        {description && (
          <p className="mt-4 text-xl text-gray-600">{description}</p>
        )}
        <div className="mt-10">
          <Link
            href={buttonLink}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-8 py-3.5 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
