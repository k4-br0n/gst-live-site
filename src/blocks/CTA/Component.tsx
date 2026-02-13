'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

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
  if (style === 'minimal') {
    return (
      <section className="noise-overlay bg-surface py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <AnimatedSection animation="fade-up" duration={1.2}>
            <h2 className="font-serif text-text">{heading}</h2>
            {description && (
              <p className="mt-6 text-lg text-text-muted">{description}</p>
            )}
            <div className="mt-12">
              <Link
                href={buttonLink}
                className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-text transition-colors duration-500 hover:text-accent"
              >
                {buttonText}
                <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    )
  }

  // Default and banner styles — large, typography-led, dark background
  return (
    <section className="noise-overlay bg-surface-dark">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-48">
        <AnimatedSection animation="fade-up" duration={1.4}>
          <h2 className="max-w-4xl font-serif text-text-on-dark">{heading}</h2>
          {description && (
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-on-dark/60 md:text-xl">
              {description}
            </p>
          )}
          <div className="mt-16">
            <Link
              href={buttonLink}
              className="group inline-flex items-center gap-3 rounded-full border border-accent/30 bg-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-surface-dark transition-all duration-500 hover:bg-accent-hover hover:shadow-lg"
            >
              {buttonText}
              <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
