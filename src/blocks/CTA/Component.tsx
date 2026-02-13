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
      <section className="bg-surface-alt py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <AnimatedSection animation="fade-up" duration={1.2}>
            <h2>{heading}</h2>
            {description && (
              <p className="mt-6 text-lg text-text-muted">{description}</p>
            )}
            <div className="mt-12">
              <Link
                href={buttonLink}
                className="group inline-flex items-center gap-3 font-mono text-sm tracking-wider text-text/80 transition-colors duration-500 hover:text-accent"
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

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-12 md:py-48">
        <AnimatedSection animation="fade-up" duration={1.4}>
          <h2 className="max-w-4xl">{heading}</h2>
          {description && (
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
              {description}
            </p>
          )}
          <div className="mt-16">
            <Link
              href={buttonLink}
              className="group inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-8 py-4 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
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
