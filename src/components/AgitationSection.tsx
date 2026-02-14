'use client'

import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { HeroLineGlow } from '@/components/HeroLineGlow'

type Block = {
  number: string
  heading: string
  description: string
}

export function AgitationSection({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-16 space-y-0 3xl:mt-10">
      {blocks.map((block, i) => (
        <AnimatedSection key={i} animation="fade-up" delay={0.1 + i * 0.12}>
          <div className="flex gap-6 border-t border-border py-10 md:gap-8 3xl:py-6">
            <span className="shrink-0 font-mono text-3xl font-semibold">
              <HeroLineGlow>{block.number}</HeroLineGlow>
            </span>
            <div className="max-w-xl">
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}>{block.heading}</h3>
              <p className="mt-3 leading-relaxed text-text-muted">{block.description}</p>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}
