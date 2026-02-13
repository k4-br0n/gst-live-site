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
    <section className="noise-overlay bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
        {heading && (
          <AnimatedSection animation="fade-up" duration={1.2}>
            <p className="text-sm font-medium uppercase tracking-widest text-text-muted">
              Testimonials
            </p>
            <h2 className="mt-6 font-serif text-text">{heading}</h2>
          </AnimatedSection>
        )}

        <div className="mt-20 space-y-0">
          {testimonials?.map((testimonial, index) => (
            <AnimatedSection
              key={testimonial.id || index}
              animation="fade-up"
              delay={index * 0.08}
              duration={1.2}
            >
              <div className="border-t border-text/10 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-12">
                  {/* Quote — typography-led, large */}
                  <blockquote className="font-serif text-text md:col-span-8" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)', lineHeight: 1.3 }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Attribution */}
                  <div className="flex items-start gap-4 md:col-span-4 md:justify-end">
                    {testimonial.avatar?.url && (
                      <img
                        src={testimonial.avatar.url}
                        alt={testimonial.avatar.alt || testimonial.author}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="text-sm font-medium text-text">
                        {testimonial.author}
                      </p>
                      {(testimonial.role || testimonial.company) && (
                        <p className="mt-1 text-sm text-text-muted">
                          {[testimonial.role, testimonial.company]
                            .filter(Boolean)
                            .join(', ')}
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
