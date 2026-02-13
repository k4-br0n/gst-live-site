'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [activeSection, setActiveSection] = useState('hero')
  const [visible, setVisible] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // Track which section is in view
  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Hide nav while scrolling fast
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let lastScroll = 0

    const onScroll = () => {
      const current = window.scrollY
      const delta = Math.abs(current - lastScroll)

      if (delta > 100) {
        setVisible(false)
        clearTimeout(timeout)
        timeout = setTimeout(() => setVisible(true), 300)
      } else {
        setVisible(true)
      }

      lastScroll = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {/* ── Top bar — minimal brand + social ──────────────────── */}
      <header className="fixed left-0 right-0 top-0 z-40 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium uppercase tracking-widest text-text-on-dark/80 transition-colors duration-500 hover:text-text-on-dark"
          >
            Growth Surge Tech
          </Link>
          <a
            href="#contact"
            className="hidden text-sm font-medium uppercase tracking-widest text-text-on-dark/80 transition-colors duration-500 hover:text-text-on-dark md:block"
          >
            Instagram <ArrowUpRight className="mb-0.5 ml-0.5 inline-block h-3 w-3" />
          </a>
        </div>
      </header>

      {/* ── Floating bottom pill nav (desktop) ────────────────── */}
      <nav
        className={`fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-text-on-dark/10 bg-surface-dark/90 px-2 py-2 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-luxury md:flex ${
          visible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '')
          return (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all duration-500 ease-luxury ${
                isActive
                  ? 'bg-accent text-surface-dark'
                  : 'text-text-on-dark/60 hover:text-text-on-dark'
              }`}
            >
              {link.label}
            </a>
          )
        })}
      </nav>

      {/* ── Floating inquiry button (desktop, bottom-left) ────── */}
      <a
        href="#contact"
        className={`fixed bottom-8 left-8 z-50 hidden items-center gap-2 rounded-full border border-accent/30 bg-surface-dark/90 px-5 py-3 text-xs font-medium uppercase tracking-widest text-accent shadow-lg backdrop-blur-md transition-all duration-700 ease-luxury hover:border-accent hover:bg-accent hover:text-surface-dark hover:shadow-xl md:inline-flex ${
          visible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0'
        }`}
      >
        Book a Call
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>

      {/* ── Mobile nav toggle + overlay ───────────────────────── */}
      <button
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className="fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-surface-dark/90 text-text-on-dark shadow-2xl backdrop-blur-xl md:hidden"
        aria-label="Toggle menu"
      >
        {mobileNavOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-surface-dark/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="text-lg font-medium uppercase tracking-widest text-text-on-dark/70 transition-colors duration-500 hover:text-text-on-dark"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium uppercase tracking-widest text-surface-dark transition-colors duration-500 hover:bg-accent-hover"
            >
              Book a Call
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
