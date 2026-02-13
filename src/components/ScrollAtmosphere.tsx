'use client'

import React, { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'

/*
 * Single continuous drift from deep black → green-tinted dark.
 * No intermediate gray/purple detour — just a straight, smooth
 * ramp toward the accent color as you approach the CTA.
 */
const COLOR_ZONES = [
  { at: 0.00, color: '#09090b' }, // Deep black
  { at: 0.15, color: '#09090b' }, // Hold — hero settles
  { at: 0.30, color: '#090a0b' }, // First whisper of green
  { at: 0.45, color: '#090b0b' }, // Barely perceptible shift
  { at: 0.60, color: '#0a0d0c' }, // Green clearly present
  { at: 0.75, color: '#0a0f0e' }, // Deepening
  { at: 0.85, color: '#0b1110' }, // Strong green undertone
  { at: 0.95, color: '#0c1311' }, // Accent-tinted dark
  { at: 1.00, color: '#0c1311' }, // Hold at end
]

type Props = {
  children: React.ReactNode
}

export function ScrollAtmosphere({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!wrapperRef.current || !glowRef.current) return

      const wrapper = wrapperRef.current
      const glow = glowRef.current

      /* ── Background color morphing ──────────────────────────────── */

      // Build a GSAP timeline with keyframes for the background color.
      // Each keyframe is positioned proportionally along the timeline.
      const colorTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        },
      })

      // Chain color tweens between each zone stop
      for (let i = 0; i < COLOR_ZONES.length - 1; i++) {
        const from = COLOR_ZONES[i]
        const to = COLOR_ZONES[i + 1]
        const duration = to.at - from.at

        colorTl.to(
          wrapper,
          {
            backgroundColor: to.color,
            duration,
            ease: 'none',
          },
          from.at, // position on the timeline (0–1 normalized)
        )
      }

      // Set initial color
      gsap.set(wrapper, { backgroundColor: COLOR_ZONES[0].color })

      /* ── Dynamic ambient glow ───────────────────────────────────── */

      // The glow drifts diagonally from top-right to bottom-left as you
      // scroll, and its opacity subtly pulses between zones.
      gsap.set(glow, {
        xPercent: 30,
        yPercent: -20,
        opacity: 0.03,
      })

      const glowTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2.5,
        },
      })

      glowTl
        // Zone A → B: glow drifts down-left, intensity rises slightly
        .to(glow, { xPercent: 10, yPercent: 15, opacity: 0.04, duration: 0.3, ease: 'none' }, 0)
        // Zone B → C: continues drift, green emerges
        .to(glow, { xPercent: -15, yPercent: 35, opacity: 0.045, duration: 0.25, ease: 'none' }, 0.3)
        // Zone C hold: glow settles mid-page
        .to(glow, { xPercent: -5, yPercent: 50, opacity: 0.05, duration: 0.2, ease: 'none' }, 0.55)
        // Zone D: strongest glow near CTA — accent arrival
        .to(glow, { xPercent: 10, yPercent: 65, opacity: 0.07, duration: 0.25, ease: 'none' }, 0.75)
    },
    { scope: wrapperRef },
  )

  return (
    <div
      ref={wrapperRef}
      className="relative min-h-screen"
      style={{ backgroundColor: COLOR_ZONES[0].color }}
    >
      {/* Ambient glow — single large orb, scroll-driven position + opacity */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed right-0 top-0 z-10 h-[700px] w-[700px] rounded-full will-change-transform"
        style={{
          background:
            'radial-gradient(circle, var(--color-accent, #14B8A6) 0%, transparent 70%)',
          filter: 'blur(180px)',
          opacity: 0.03,
        }}
        aria-hidden="true"
      />

      {/* Page content */}
      <div className="relative z-[1]">{children}</div>
    </div>
  )
}
