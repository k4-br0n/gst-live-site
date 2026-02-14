'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'

type Props = {
  children: React.ReactNode
}

export function HeroLineGlow({ children }: Props) {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return

    const onMouseMove = (e: MouseEvent) => {
      const xPercent = (e.clientX / window.innerWidth) * 100
      const yPercent = (e.clientY / window.innerHeight) * 100

      gsap.to(el, {
        backgroundPosition: `${xPercent}% ${yPercent}%`,
        duration: 0.5,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      gsap.killTweensOf(el)
    }
  }, [])

  return (
    <span className="hero-line-glow-wrapper inline-block whitespace-nowrap">
      <span ref={textRef} className="hero-line-glow-text">
        {children}
      </span>
    </span>
  )
}
