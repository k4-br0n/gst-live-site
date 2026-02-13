'use client'

import { useRef } from 'react'
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
}

const fromVars: Record<AnimationType, gsap.TweenVars> = {
  'fade-up': { autoAlpha: 0, y: 40 },
  'fade-in': { autoAlpha: 0 },
  'slide-left': { autoAlpha: 0, x: -60 },
  'slide-right': { autoAlpha: 0, x: 60 },
  'scale-up': { autoAlpha: 0, scale: 0.95 },
}

export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.9,
  stagger = 0.15,
  trigger = 'scroll',
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
        ease: 'power3.out',
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
    <div ref={container} className={className}>
      {children}
    </div>
  )
}
