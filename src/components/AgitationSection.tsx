'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

type Block = {
  number: string
  heading: string
  description: string
}

export function AgitationSection({ blocks }: { blocks: Block[] }) {
  const container = useRef<HTMLDivElement>(null)
  const blockRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(
    () => {
      if (!container.current) return

      blockRefs.current.filter(Boolean).forEach((blockEl) => {
        if (!blockEl) return
        const numberEl = blockEl.querySelector('[data-agitation-number]')
        if (!numberEl) return

        gsap.fromTo(
          numberEl,
          { color: '#3f3f46' },
          {
            color: 'var(--color-accent, #14B8A6)',
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: blockEl,
              start: 'top 85%',
              once: true,
            },
          },
        )
      })
    },
    { scope: container, dependencies: [blocks] },
  )

  return (
    <div ref={container} className="mt-16 space-y-0">
      {blocks.map((block, i) => (
        <AnimatedSection key={i} animation="fade-up" delay={0.1 + i * 0.12}>
          <div
            ref={(el) => {
              blockRefs.current[i] = el
            }}
            className="flex gap-6 border-t border-border py-10 md:gap-8"
          >
            <span
              data-agitation-number
              className="shrink-0 font-mono text-3xl font-semibold text-border-subtle"
            >
              {block.number}
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
