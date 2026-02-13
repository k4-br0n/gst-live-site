'use client'

import React, { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

type AnimationType = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up'

type Props = {
  children: React.ReactNode
  className?: string
  animation?: AnimationType
  delay?: number
  duration?: number
  stagger?: number
  /** 'scroll' = animate when scrolled into view, 'load' = animate immediately on mount */
  trigger?: 'scroll' | 'load'
  /** HTML tag to render */
  as?: React.ElementType
}

const fromVars: Record<AnimationType, gsap.TweenVars> = {
  'fade-up': { autoAlpha: 0, y: 50 },
  'fade-in': { autoAlpha: 0 },
  'slide-left': { autoAlpha: 0, x: -80 },
  'slide-right': { autoAlpha: 0, x: 80 },
  'scale-up': { autoAlpha: 0, scale: 0.92 },
}

// Quiet Luxury easing — slow, weighted, physical
const LUXURY_EASE = 'power2.out'

export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 1.2,
  stagger = 0.08,
  trigger = 'scroll',
  as: Tag = 'div',
}: Props) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!container.current) return

      const elements = container.current.children

      const tweenVars: gsap.TweenVars = {
        ...fromVars[animation],
        duration,
        delay,
        stagger,
        ease: LUXURY_EASE,
      }

      if (trigger === 'scroll') {
        tweenVars.scrollTrigger = {
          trigger: container.current,
          start: 'top 85%',
          once: true,
        }
      }

      gsap.from(elements, tweenVars)
    },
    { scope: container },
  )

  return (
    // @ts-expect-error — dynamic tag with ref
    <Tag ref={container} className={className}>
      {children}
    </Tag>
  )
}
