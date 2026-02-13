import Link from 'next/link'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="bg-surface-dark noise-overlay text-text-light">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left — Brand */}
          <div>
            <Link href="/" className="font-serif text-3xl tracking-tight text-white">
              GST
            </Link>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-text-light/60">
              High-performance digital experiences built with restraint,
              precision, and an obsession with craft.
            </p>
          </div>

          {/* Right — Links */}
          <div className="flex flex-col justify-between lg:items-end">
            <nav className="flex flex-wrap gap-8 lg:gap-12">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-text-light/50 transition-colors duration-500 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-24 border-t border-white/10 pt-8 text-sm text-text-light/30">
          <p>&copy; {new Date().getFullYear()} GST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
