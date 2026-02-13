'use client'

import React from 'react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

type Testimonial = {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: {
    url: string
    alt?: string
  }
  id?: string
}

type Props = {
  heading?: string
  testimonials: Testimonial[]
}

export function TestimonialsBlock({ heading, testimonials }: Props) {
  return (
    <section className="bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
        {heading && (
          <AnimatedSection animation="fade-up" duration={1.2}>
            <p className="font-mono text-sm tracking-wider text-text-dim">
              // TESTIMONIALS
            </p>
            <h2 className="mt-6">{heading}</h2>
          </AnimatedSection>
        )}

        <div className="mt-20 space-y-0">
          {testimonials?.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id || index} animation="fade-up" delay={index * 0.08} duration={1.2}>
              <div className="border-t border-border py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-12">
                  <blockquote className="text-text md:col-span-8" style={{ fontSize: 'clamp(1.15rem, 2vw, 1.75rem)', lineHeight: 1.4, letterSpacing: '-0.01em' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-start gap-4 md:col-span-4 md:justify-end">
                    {testimonial.avatar?.url && (
                      <img
                        src={testimonial.avatar.url}
                        alt={testimonial.avatar.alt || testimonial.author}
                        className="h-10 w-10 rounded-sm border border-border object-cover"
                      />
                    )}
                    <div>
                      <p className="text-sm font-medium text-text">{testimonial.author}</p>
                      {(testimonial.role || testimonial.company) && (
                        <p className="mt-1 font-mono text-xs text-text-dim">
                          {[testimonial.role, testimonial.company].filter(Boolean).join(', ')}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
