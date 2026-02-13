'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, X, Menu } from 'lucide-react'

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'System', href: '#system' },
  { label: 'Proof', href: '#proof' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      {/* ── Minimal top bar ────────────────────────────────────── */}
      <header className="fixed left-0 right-0 top-0 z-50 px-6 py-5 md:px-12">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm tracking-wider text-text-muted transition-colors duration-500 hover:text-text"
          >
            GST_
          </Link>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 font-mono text-xs tracking-wider text-text-dim transition-colors duration-500 hover:text-accent md:inline-flex"
          >
            Book a Call
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </header>

      {/* ── Mobile nav toggle ──────────────────────────────────── */}
      <button
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
        className="fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-md border border-border bg-surface-alt/90 text-text shadow-2xl backdrop-blur-xl md:hidden"
        aria-label="Toggle menu"
      >
        {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* ── Mobile nav overlay ─────────────────────────────────── */}
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
