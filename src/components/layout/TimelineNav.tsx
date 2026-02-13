'use client'

import { useState, useEffect, useRef } from 'react'

const sections = [
  { number: '01', id: 'hero', label: 'INTRO' },
  { number: '02', id: 'problem', label: 'PROBLEM' },
  { number: '03', id: 'about', label: 'GUIDE' },
  { number: '04', id: 'proof', label: 'PROOF' },
  { number: '05', id: 'system', label: 'SYSTEM' },
  { number: '06', id: 'compare', label: 'COMPARE' },
  { number: '07', id: 'pricing', label: 'PRICING' },
  { number: '08', id: 'faq', label: 'FAQ' },
  { number: '09', id: 'contact', label: 'START' },
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
    <nav className="fixed left-0 top-0 z-40 hidden h-screen w-[72px] flex-col items-center justify-center md:flex">
      {/* Vertical track (background line) */}
      <div ref={trackRef} className="relative flex flex-col items-center gap-0">
        {/* The connecting line — full height of the dots area */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
          {/* Background line */}
          <div className="h-full w-full bg-border" />
          {/* Progress fill */}
          <div
            className="absolute left-0 top-0 w-full bg-accent transition-all duration-300 ease-luxury"
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
              className="group relative flex flex-col items-center py-3"
              aria-label={`Go to ${section.label}`}
            >
              {/* Dot */}
              <div
                className={`relative z-10 flex h-2 w-2 items-center justify-center rounded-full transition-all duration-500 ease-luxury ${
                  isActive
                    ? 'scale-125 bg-accent shadow-lg shadow-accent/30'
                    : isPast
                      ? 'bg-accent/60'
                      : 'bg-border-subtle'
                }`}
              />

              {/* Label — appears on hover or when active */}
              <span
                className={`mt-1.5 whitespace-nowrap font-mono text-[9px] tracking-wider transition-all duration-500 ${
                  isActive
                    ? 'text-accent opacity-100'
                    : 'text-text-dim opacity-0 group-hover:opacity-100'
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
