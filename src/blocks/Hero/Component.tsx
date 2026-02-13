'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

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
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[128px]" />
        {image?.url && (
          <div className="absolute inset-0 bg-cover bg-center opacity-[0.05]" style={{ backgroundImage: `url(${image.url})` }} />
        )}
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center md:px-12 md:py-40">
          <AnimatedSection trigger="load" stagger={0.12} duration={1.4}>
            <h1>{heading}</h1>
            {subheading && (
              <p className="mt-8 text-lg leading-relaxed text-text-muted md:text-xl">{subheading}</p>
            )}
            {ctaText && ctaLink && (
              <div className="mt-16">
                <Link href={ctaLink} className="group inline-flex items-center gap-3 font-mono text-sm tracking-wider text-text/80 transition-colors duration-500 hover:text-accent">
                  {ctaText}
                  <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    )
  }

  if (style === 'split') {
    return (
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-32 md:px-12 md:py-40 lg:grid-cols-2 lg:gap-24">
          <AnimatedSection animation="fade-up" duration={1.2}>
            <h1>{heading}</h1>
            {subheading && (
              <p className="mt-8 text-lg leading-relaxed text-text-muted md:text-xl">{subheading}</p>
            )}
            {ctaText && ctaLink && (
              <div className="mt-16">
                <Link href={ctaLink} className="group inline-flex items-center gap-3 font-mono text-sm tracking-wider text-text/80 transition-colors duration-500 hover:text-accent">
                  {ctaText}
                  <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </AnimatedSection>
          {image?.url && (
            <AnimatedSection animation="fade-up" delay={0.2} duration={1.2}>
              <div className="overflow-hidden rounded-sm border border-border">
                <img src={image.url} alt={image.alt || ''} className="h-full w-full object-cover" />
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[128px]" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-48">
        <AnimatedSection trigger="load" stagger={0.12} duration={1.4}>
          <h1 className="max-w-5xl">{heading}</h1>
          {subheading && (
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">{subheading}</p>
          )}
          {ctaText && ctaLink && (
            <div className="mt-16">
              <Link href={ctaLink} className="group inline-flex items-center gap-3 font-mono text-sm tracking-wider text-text/80 transition-colors duration-500 hover:text-accent">
                {ctaText}
                <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
              </Link>
            </div>
          )}
        </AnimatedSection>
        {image?.url && (
          <div className="mt-16 overflow-hidden rounded-sm border border-border">
            <img src={image.url} alt={image.alt || ''} className="w-full object-cover" />
          </div>
        )}
        <div className="mt-16 border-t border-border" />
      </div>
    </section>
  )
}
