'use client'

import React from 'react'
import * as LucideIcons from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { TypingText } from '@/components/TypingText'

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
  if (Icon && typeof Icon === 'function') return <Icon className="h-4 w-4" />
  return null
}

export function FeaturesBlock({ heading, subtitle, features }: Props) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
        <AnimatedSection animation="fade-up" duration={1.2}>
          <p className="font-mono text-sm tracking-wider text-accent">
            <TypingText text="// CAPABILITIES" speed={70} cursorClassName="text-accent" startWhenVisible startDelay={500} />
          </p>
          <h2 className="mt-6 max-w-3xl">{heading}</h2>
          {subtitle && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted">{subtitle}</p>
          )}
        </AnimatedSection>

        <div className="mt-20">
          {features?.map((feature, index) => {
            const icon = getIcon(feature.icon)
            const number = String(index + 1).padStart(2, '0')

            return (
              <AnimatedSection key={feature.id || index} animation="fade-up" delay={index * 0.06} duration={1}>
                <div className="border-t border-border py-10 transition-colors duration-500 hover:border-border-subtle md:py-14">
                  <div className="grid gap-4 md:grid-cols-12 md:items-start md:gap-8">
                    <span className="font-mono text-sm text-text-dim md:col-span-1">{number}</span>
                    <div className="flex items-center gap-3 md:col-span-3">
                      {icon && <span className="text-accent">{icon}</span>}
                      <h3>{feature.title}</h3>
                    </div>
                    <p className="leading-relaxed text-text-muted md:col-span-8">{feature.description}</p>
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
