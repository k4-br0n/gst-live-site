'use client'

import { useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { TypingText } from '@/components/TypingText'
import { HeroLineGlow } from '@/components/HeroLineGlow'
import { ArrowRight } from 'lucide-react'

const TYPING_TEXT = '// FOR_B2B_TECH_COMPANIES'
const TYPING_SPEED = 70

export function HeroIntro() {
  const contentRef = useRef<HTMLDivElement>(null)

  const handleTypingComplete = () => {
    if (!contentRef.current) return
    const children = contentRef.current.children
    gsap.set(contentRef.current, { autoAlpha: 1 })
    gsap.fromTo(
      children,
      { autoAlpha: 0, y: 20 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.12,
      },
    )
  }

  return (
    <>
      <p className="font-mono text-xs tracking-wider text-accent">
        <TypingText
          text={TYPING_TEXT}
          speed={TYPING_SPEED}
          onComplete={handleTypingComplete}
        />
      </p>

      <div ref={contentRef} className="opacity-0">
        <h1
          className="mt-10 leading-[1.1]"
          style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6rem)' }}
        >
          <span className="text-center whitespace-nowrap">
            You&rsquo;ve built something great.
            <br />
            <HeroLineGlow>Now build the engine to sell it.</HeroLineGlow>
          </span>
        </h1>

        <div className="mx-auto mt-6 h-px max-w-12 bg-accent/60" aria-hidden />

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-text-muted [text-wrap:balance]">
          I embed with B2B tech firms to build their go-to-market system.
          Strategy, pages, automation, outreach — I do the thinking and the
          building.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-6 py-3.5 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
          >
            Book a Discovery Call
            <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </>
  )
}
