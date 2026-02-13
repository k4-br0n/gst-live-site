'use client'

import React, { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

type Props = {
  heading: string
  content: any
  image: {
    url: string
    alt?: string
  }
  imagePosition?: 'left' | 'right'
}

export function ContentWithImageBlock({
  heading,
  content,
  image,
  imagePosition = 'right',
}: Props) {
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!imageRef.current) return
    gsap.fromTo(
      imageRef.current.querySelector('img'),
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  }, { scope: imageRef })

  return (
    <section className="bg-surface-alt">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:px-12 md:py-40 lg:grid-cols-2 lg:gap-24 ${
          imagePosition === 'left' ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <AnimatedSection animation="fade-up" duration={1.2}>
          <h2>{heading}</h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-text-muted">
            {content && typeof content === 'object' && content.root?.children ? (
              content.root.children.map((node: any, i: number) => {
                if (node.type === 'paragraph') {
                  return (
                    <p key={i}>
                      {node.children?.map((child: any, j: number) => {
                        const text = child.text || ''
                        if (!text) return null
                        if (child.format === 1) return <strong key={j} className="text-text">{text}</strong>
                        if (child.format === 2) return <em key={j}>{text}</em>
                        return <React.Fragment key={j}>{text}</React.Fragment>
                      })}
                    </p>
                  )
                }
                if (node.type === 'list' && node.listType === 'bullet') {
                  return (
                    <ul key={i} className="space-y-2 pl-0">
                      {node.children?.map((li: any, k: number) => (
                        <li key={k} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{li.children?.[0]?.children?.map((c: any) => c.text).join('') || ''}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
                return null
              })
            ) : (
              <p>{String(content || '')}</p>
            )}
          </div>
        </AnimatedSection>

        {image?.url && (
          <AnimatedSection animation="fade-up" delay={0.15} duration={1.2}>
            <div ref={imageRef} className="overflow-hidden rounded-sm border border-border">
              <img src={image.url} alt={image.alt || ''} className="h-full w-full scale-110 object-cover" />
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
