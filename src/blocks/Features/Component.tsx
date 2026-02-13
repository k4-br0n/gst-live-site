'use client'

import React from 'react'
import * as LucideIcons from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

type Feature = {
  icon?: string
  title: string
  description: string
  id?: string
}

type Props = {
  heading: string
  subtitle?: string
  features: Feature[]
}

function getIcon(name?: string) {
  if (!name) return null
  const Icon = (LucideIcons as Record<string, any>)[name]
  if (Icon && typeof Icon === 'function') {
    return <Icon className="h-5 w-5" />
  }
  return null
}

export function FeaturesBlock({ heading, subtitle, features }: Props) {
  return (
    <section className="noise-overlay bg-surface-dark">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
        <AnimatedSection animation="fade-up" duration={1.2}>
          <p className="text-sm font-medium uppercase tracking-widest text-text-on-dark/50">
            Capabilities
          </p>
          <h2 className="mt-6 max-w-3xl font-serif text-text-on-dark">
            {heading}
          </h2>
          {subtitle && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-on-dark/60">
              {subtitle}
            </p>
          )}
        </AnimatedSection>

        {/* Numbered list with architectural grid lines */}
        <div className="mt-20">
          {features?.map((feature, index) => {
            const icon = getIcon(feature.icon)
            const number = String(index + 1).padStart(2, '0')

            return (
              <AnimatedSection
                key={feature.id || index}
                animation="fade-up"
                delay={index * 0.06}
                duration={1}
              >
                <div className="border-t border-text-on-dark/10 py-10 md:py-14">
                  <div className="grid gap-4 md:grid-cols-12 md:items-start md:gap-8">
                    {/* Number */}
                    <span className="text-sm text-text-on-dark/30 md:col-span-1">
                      {number}
                    </span>

                    {/* Title + optional icon */}
                    <div className="flex items-center gap-3 md:col-span-3">
                      {icon && (
                        <span className="text-accent">{icon}</span>
                      )}
                      <h3 className="font-serif text-text-on-dark">
                        {feature.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="leading-relaxed text-text-on-dark/60 md:col-span-8">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
