'use client'

import { useState, useEffect, useRef } from 'react'

const sections = [
  { number: '01', id: 'hero', label: 'INTRO' },
  { number: '02', id: 'testimonial', label: 'PROOF' },
  { number: '03', id: 'problem', label: 'PROBLEM' },
  { number: '04', id: 'bridge', label: 'BRIDGE' },
  { number: '05', id: 'pathway', label: 'SYSTEM' },
  { number: '06', id: 'agitation', label: 'REALITY' },
  { number: '07', id: 'about', label: 'GUIDE' },
  { number: '08', id: 'proof', label: 'CASE STUDY' },
  { number: '09', id: 'qualifier', label: 'FIT' },
  { number: '10', id: 'contact', label: 'START' },
]

export function TimelineNav() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  /* ── Track active section via IntersectionObserver ──────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  /* ── Track overall scroll progress ─────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setScrollProgress(Math.min(scrollTop / docHeight, 1))
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="pointer-events-none fixed left-0 top-0 z-40 hidden h-screen w-24 flex-col items-center justify-center md:flex">
      {/* Vertical track */}
      <div ref={trackRef} className="relative flex flex-col items-center">
        {/* The connecting line — spans the full dot area */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
          {/* Background line */}
          <div className="h-full w-full bg-text-dim/25" />
          {/* Progress fill */}
          <div
            className="absolute left-0 top-0 w-full bg-accent/70 transition-all duration-300 ease-luxury"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Section dots + labels */}
        {sections.map((section, i) => {
          const isActive = i === activeIndex
          const isPast = i < activeIndex

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group pointer-events-auto relative flex flex-col items-center py-5"
              aria-label={`Go to ${section.label}`}
            >
              {/* Dot */}
              <div
                className={`relative z-10 rounded-full transition-all duration-500 ease-luxury ${
                  isActive
                    ? 'h-2.5 w-2.5 bg-accent shadow-lg shadow-accent/40'
                    : isPast
                      ? 'h-2 w-2 bg-accent/50'
                      : 'h-1.5 w-1.5 bg-text-dim/40'
                }`}
              />

              {/* Label — appears on hover or when active */}
              <span
                className={`mt-2 whitespace-nowrap font-mono text-[9px] tracking-wider transition-all duration-500 ${
                  isActive
                    ? 'text-accent opacity-100'
                    : 'text-text-dim opacity-0 group-hover:opacity-70'
                }`}
              >
                {section.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
