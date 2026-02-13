import Link from 'next/link'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Link href="/" className="font-mono text-xl tracking-wider text-text">
              GST_
            </Link>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-text-dim">
              High-performance digital systems built with precision
              and an obsession with craft.
            </p>
          </div>

          <div className="flex flex-col justify-between lg:items-end">
            <nav className="flex flex-wrap gap-8 lg:gap-12">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-wider text-text-dim transition-colors duration-500 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-24 border-t border-border pt-8 font-mono text-xs text-text-dim">
          <p>&copy; {new Date().getFullYear()} GST. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
