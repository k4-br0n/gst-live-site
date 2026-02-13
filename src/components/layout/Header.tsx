'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'System', href: '#system' },
  { label: 'Proof', href: '#proof' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [activeSection, setActiveSection] = useState('hero')
  const [visible, setVisible] = useState(true)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
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
      {/* ── Top bar ──────────────────────────────────────────────── */}
      <header className="fixed left-0 right-0 top-0 z-40 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm tracking-wider text-text-muted transition-colors duration-500 hover:text-text"
          >
            GST_
          </Link>
          <a
            href="#contact"
            className="hidden font-mono text-sm tracking-wider text-text-dim transition-colors duration-500 hover:text-text md:block"
          >
            Instagram <ArrowUpRight className="mb-0.5 ml-0.5 inline-block h-3 w-3" />
          </a>
        </div>
      </header>

      {/* ── Floating bottom pill nav (desktop) ────────────────── */}
      <nav
        className={`fixed bottom-8 left-1/2 z-50 hidden -translate-x-1/2 items-center gap-0.5 rounded-md border border-border bg-surface-alt/90 px-1.5 py-1.5 shadow-2xl backdrop-blur-xl transition-all duration-700 ease-luxury md:flex ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace('#', '')
          return (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-sm px-4 py-2 font-mono text-xs tracking-wider transition-all duration-500 ease-luxury ${
                isActive
                  ? 'bg-accent text-surface'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {link.label}
            </a>
          )
        })}
      </nav>

      {/* ── Floating CTA button (desktop, bottom-left) ────────── */}
      <a
        href="#contact"
        className={`fixed bottom-8 left-8 z-50 hidden items-center gap-2 rounded-md border border-accent/30 bg-surface-alt/90 px-5 py-3 font-mono text-xs tracking-wider text-accent shadow-lg shadow-accent/5 backdrop-blur-md transition-all duration-700 ease-luxury hover:border-accent hover:shadow-accent/10 md:inline-flex ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        Book a Call
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>

      {/* ── Mobile nav ───────────────────────────────────────────── */}
      <button
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className="fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-surface-alt/90 text-text shadow-2xl backdrop-blur-xl md:hidden"
        aria-label="Toggle menu"
      >
        {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-surface/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="font-mono text-base tracking-wider text-text-muted transition-colors duration-500 hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileNavOpen(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-accent bg-accent px-6 py-3 font-mono text-sm tracking-wider text-surface transition-colors duration-500 hover:bg-accent-hover"
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
