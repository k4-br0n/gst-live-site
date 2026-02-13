import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const services = [
  {
    number: '01',
    title: 'Strategy',
    description:
      'We uncover what makes your brand distinct, then build the digital foundation to amplify it — positioning, audience research, and competitive analysis.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Every pixel, every interaction designed with intention. We craft interfaces that feel inevitable — where form follows feeling.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Performant, accessible, built to last. Next.js, headless CMS, and modern infrastructure that scales as you grow.',
  },
  {
    number: '04',
    title: 'Motion',
    description:
      'Purposeful animation that guides attention and creates emotional resonance. Nothing moves without reason.',
  },
]

const selectedWork = [
  {
    client: 'Maison Atelier',
    category: 'Brand & Web',
    year: '2025',
  },
  {
    client: 'Nomad Collective',
    category: 'Digital Experience',
    year: '2025',
  },
  {
    client: 'Verve Studio',
    category: 'E-Commerce',
    year: '2024',
  },
  {
    client: 'Oakwood Partners',
    category: 'Brand Identity',
    year: '2024',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section id="hero" className="relative flex min-h-screen items-end overflow-hidden bg-surface">
        {/* Grid pattern background */}
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />

        {/* Glowing cyan orb — top right */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[128px]" />
        {/* Secondary subtle orb — bottom left */}
        <div className="pointer-events-none absolute -bottom-48 -left-48 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-48">
          <AnimatedSection trigger="load" stagger={0.12} duration={1.4}>
            {/* Monospace eyebrow */}
            <p className="font-mono text-sm tracking-wider text-accent">
              // DIGITAL_STUDIO
            </p>

            {/* Headline — massive, geometric sans */}
            <h1 className="mt-6 max-w-5xl">
              We build digital experiences that{' '}
              <span className="text-accent">speak softly</span>{' '}
              and carry weight
            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-muted md:text-xl">
              Strategy, design, and engineering for brands that value
              craft over noise.
            </p>

            {/* CTA */}
            <div className="mt-16">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 font-mono text-sm tracking-wider text-text/80 transition-colors duration-500 hover:text-accent"
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
              </a>
            </div>
          </AnimatedSection>

          {/* Bottom rule */}
          <div className="mt-16 border-t border-border" />
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <AnimatedSection animation="fade-up">
              <p className="font-mono text-sm tracking-wider text-text-dim">
                // ABOUT
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.15}>
              <h2>
                Confidence through restraint
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-text-muted md:text-xl">
                We believe the most powerful digital experiences are the
                quietest. No clutter, no noise — just considered design
                that lets your work breathe. Space is not emptiness; it
                is the luxury.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-text-muted md:text-xl">
                Every project begins with deep understanding and ends
                with pixel-perfect execution. We partner with brands
                who care about the details that most people never
                notice — but always feel.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section id="services" className="scroll-mt-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <AnimatedSection>
            <p className="font-mono text-sm tracking-wider text-text-dim">
              // SERVICES
            </p>
            <h2 className="mt-6">
              What we do
            </h2>
          </AnimatedSection>

          <div className="mt-20">
            {services.map((service, i) => (
              <AnimatedSection
                key={service.number}
                animation="fade-up"
                delay={i * 0.08}
              >
                <div className="group border-t border-border py-10 transition-colors duration-500 hover:border-border-subtle md:py-14">
                  <div className="grid gap-6 md:grid-cols-12 md:items-start">
                    <span className="font-mono text-sm text-text-dim md:col-span-1">
                      {service.number}
                    </span>
                    <h3 className="md:col-span-4">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-text-muted md:col-span-7">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Work ────────────────────────────────────────── */}
      <section id="work" className="scroll-mt-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <AnimatedSection>
            <p className="font-mono text-sm tracking-wider text-text-dim">
              // SELECTED_WORK
            </p>
            <h2 className="mt-6">
              Recent projects
            </h2>
          </AnimatedSection>

          <div className="mt-20">
            {selectedWork.map((work, i) => (
              <AnimatedSection
                key={work.client}
                animation="fade-up"
                delay={i * 0.06}
              >
                <a
                  href="#"
                  className="group block border-t border-border py-10 transition-all duration-500 hover:border-accent/30 md:py-14"
                >
                  <div className="grid items-baseline gap-4 md:grid-cols-12">
                    <h3 className="transition-colors duration-500 group-hover:text-accent md:col-span-6">
                      {work.client}
                    </h3>
                    <span className="font-mono text-sm text-text-dim md:col-span-4">
                      {work.category}
                    </span>
                    <span className="font-mono text-sm text-text-dim md:col-span-2 md:text-right">
                      {work.year}
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee / Statement ──────────────────────────────────── */}
      <section className="overflow-hidden border-y border-border bg-surface py-20 md:py-28">
        <AnimatedSection animation="fade-in" duration={1.6}>
          <p className="whitespace-nowrap font-sans font-semibold text-border-subtle" style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
            Craft &nbsp; · &nbsp; Restraint &nbsp; · &nbsp; Precision &nbsp; · &nbsp; Craft &nbsp; · &nbsp; Restraint &nbsp; · &nbsp; Precision
          </p>
        </AnimatedSection>
      </section>

      {/* ── Contact / CTA ────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative scroll-mt-20 overflow-hidden bg-surface"
      >
        {/* Subtle orb */}
        <div className="pointer-events-none absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <AnimatedSection animation="fade-up">
              <p className="font-mono text-sm tracking-wider text-text-dim">
                // CONTACT
              </p>
              <h2 className="mt-6">
                Let&rsquo;s build something{' '}
                <span className="text-accent">remarkable</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.15}>
              <p className="text-lg leading-relaxed text-text-muted md:text-xl">
                We take on a limited number of projects each quarter to
                ensure every client gets our full attention. If you value
                craft and care about the details, we should talk.
              </p>

              <div className="mt-12">
                <a
                  href="mailto:hello@gst.studio"
                  className="group inline-flex items-center gap-3 font-mono text-sm tracking-wider text-text/80 transition-colors duration-500 hover:text-accent"
                >
                  hello@gst.studio
                  <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-16 border-t border-border pt-8">
                <div className="flex flex-wrap gap-8">
                  {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="font-mono text-xs uppercase tracking-wider text-text-dim transition-colors duration-500 hover:text-accent"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
