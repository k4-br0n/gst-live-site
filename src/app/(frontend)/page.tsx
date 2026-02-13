import { ArrowRight, ArrowDown, Check, X } from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const painPoints = [
  'Your website was built by engineers — functional but not converting.',
  'Your growth is word-of-mouth. Referrals are great until they dry up.',
  "You've tried agencies. They didn't understand your product.",
  "You know you need marketing but don't know where to start.",
  "You can't afford a full marketing team — but you need the output of one.",
]

const phases = [
  {
    number: '01',
    title: 'GTM Audit & Strategy',
    duration: '2–3 weeks',
    deliverable: 'GTM Strategy Document + 90-Day Execution Roadmap',
    description:
      'Deep dive into your product, market, and positioning. Competitive analysis. ICP definition. Buyer journey mapping. You walk away with total clarity on who to target, what to say, and what to build first.',
  },
  {
    number: '02',
    title: 'Build & Launch',
    duration: '6–8 weeks',
    deliverable: 'A working acquisition system, live and generating leads',
    description:
      'Landing pages designed and developed. HubSpot automation — lead capture, nurture, scoring. Cold outreach system — email sequences, LinkedIn, SDR playbook. Full funnel from awareness to qualified lead to hand-off. Analytics and tracking.',
  },
  {
    number: '03',
    title: 'Optimise & Scale',
    duration: 'Ongoing monthly',
    deliverable: 'Monthly performance report + continuous optimisation',
    description:
      'Performance reviews, A/B testing, campaign adjustments, strategic check-ins. A growth partner who keeps the system improving without you thinking about it.',
  },
]

const comparisonRows = [
  {
    them: 'Account manager relays your needs to a team',
    me: 'You talk to the person doing the work',
  },
  {
    them: 'Generic playbook applied to your niche',
    me: "I understand B2B tech — I'm building one right now",
  },
  {
    them: 'Strategy OR execution',
    me: 'Strategy AND execution — thinking and building',
  },
  {
    them: 'Dozens of clients, divided attention',
    me: '2–3 clients max — you get real focus',
  },
  {
    them: 'Long contracts, slow timelines',
    me: 'Fixed scope, clear timelines, pause or stop anytime',
  },
]

const pricingOptions = [
  {
    name: 'The Audit',
    scope: 'Phase 1',
    price: '£3,000',
    priceNote: 'one-time, up-front',
    features: [
      'GTM Strategy Document',
      '90-Day Execution Roadmap',
      'Competitive analysis',
      'ICP definition',
      'Buyer journey mapping',
    ],
    recommended: false,
  },
  {
    name: 'The Full Build',
    scope: 'Phase 1 + 2',
    price: '£8,000–12,000',
    priceNote: 'one-time or 50/50 split',
    features: [
      'Everything in The Audit',
      'Landing pages designed + developed',
      'HubSpot automation setup',
      'Cold outreach system',
      'Full funnel build',
      'Analytics & tracking',
    ],
    recommended: true,
  },
  {
    name: 'Build + Partner',
    scope: 'Phase 1 + 2 + 3',
    price: '£10,000–15,000',
    priceNote: 'build + £2,500–3,500/mo retainer',
    features: [
      'Everything in The Full Build',
      'Monthly performance reviews',
      'A/B testing & optimisation',
      'Campaign adjustments',
      'Strategic check-ins',
      'Fractional growth partner',
    ],
    recommended: false,
  },
]

const caseStudy = {
  context:
    'A niche B2B connectivity company selling 5G Fixed Wireless Access to MSPs and corporate IT teams. Technical product, technical buyers, zero acquisition system.',
  problems: [
    'Website built by engineers — functional but not converting',
    'No systematic lead generation',
    'No marketing automation or nurture sequences',
    'No outreach system — relied on inbound that wasn\'t coming',
    'Needed to pivot positioning entirely',
  ],
  built: [
    'Found product-market fit through positioning work',
    'Rebuilt landing pages for conversion',
    'Set up HubSpot automation — lead capture, nurture, scoring',
    'Built cold outreach system — email, LinkedIn, SDR playbook',
    'Full funnel from awareness to qualified lead to sales hand-off',
    'Analytics and tracking to measure what\'s working',
  ],
  result:
    'A complete acquisition system running end-to-end. From scattered tactics to a working growth engine. One person did the strategy AND the building.',
}

const faqs = [
  {
    q: 'Why up-front payment?',
    a: 'Because I commit fully to your project from day one. Up-front payment ensures we both have skin in the game and I can focus on building, not chasing invoices. All options come with a satisfaction guarantee.',
  },
  {
    q: 'What if my product is too niche?',
    a: "That's actually ideal. I specialise in B2B tech with technical buyers. The more specific your product, the more precise the targeting. Niche isn't a problem — it's an advantage.",
  },
  {
    q: "What happens after the build?",
    a: "You own everything. The system runs without me. If you want ongoing optimisation, the retainer option exists — but it's not required. No lock-in, no dependencies.",
  },
  {
    q: 'How is this different from an agency?',
    a: "You work directly with me. No account managers, no juniors, no handoffs. I do the strategic thinking and the technical building. One person, end to end.",
  },
  {
    q: 'Do you work with companies outside the UK?',
    a: 'Yes. The methodology works globally. I work remotely and async-first, with scheduled check-ins to keep momentum.',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────── */}
      <section id="hero" className="relative flex min-h-screen items-end overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[128px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 md:px-12 md:pb-24 md:pt-48">
          <AnimatedSection trigger="load" stagger={0.12} duration={1.4}>
            <p className="font-mono text-sm tracking-wider text-accent">
              // GROWTH_SYSTEMS_ARCHITECT
            </p>

            <h1 className="mt-6 max-w-5xl">
              You have a great product.{' '}
              <span className="text-text-muted">You have no acquisition system.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted md:text-xl">
              I build the engine that turns strangers into qualified leads —
              strategy, landing pages, automation, outreach. End to end.
              For B2B tech companies with 3–20 staff trying to break past £1M.
            </p>

            <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-6 py-3.5 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
              >
                Book a Discovery Call
                <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
              </a>
              <a
                href="#system"
                className="group inline-flex items-center gap-3 font-mono text-sm tracking-wider text-text-muted transition-colors duration-500 hover:text-text"
              >
                See how it works
                <ArrowDown className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-y-0.5" />
              </a>
            </div>
          </AnimatedSection>

          <div className="mt-16 border-t border-border" />
        </div>
      </section>

      {/* ── 2. Problem ───────────────────────────────────────────── */}
      <section id="problem" className="scroll-mt-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <AnimatedSection animation="fade-up">
              <p className="font-mono text-sm tracking-wider text-text-dim">
                // THE_PROBLEM
              </p>
              <h2 className="mt-6">
                Sound familiar?
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.15}>
              <div className="space-y-6">
                {painPoints.map((point, i) => (
                  <p key={i} className="text-lg leading-relaxed text-text-muted">
                    {point}
                  </p>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 3. Guide ─────────────────────────────────────────────── */}
      <section id="about" className="scroll-mt-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-sm tracking-wider text-text-dim">
              // MEET_THE_GUIDE
            </p>
          </AnimatedSection>

          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-24">
            <AnimatedSection animation="fade-up" delay={0.1}>
              <h2>
                I do the thinking{' '}
                <span className="text-accent">and</span> the building.
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <p className="text-lg leading-relaxed text-text-muted md:text-xl">
                I&rsquo;m a growth strategist who embeds with small B2B tech firms
                to build their entire go-to-market system. Strategy, landing pages,
                automation, outreach — I do the thinking and the building.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  'Currently in the trenches — building a real growth engine for a real B2B tech company right now.',
                  'Full-stack execution — strategy, copy, design, web dev, automation, analytics. No handoffs.',
                  "Tech-native — I speak the buyer's language, not marketing jargon.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <p className="text-text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 4. Case Study ────────────────────────────────────────── */}
      <section id="proof" className="scroll-mt-20 border-y border-border bg-surface-alt">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-sm tracking-wider text-text-dim">
              // CASE_STUDY
            </p>
            <h2 className="mt-6">From zero system to full engine.</h2>
            <p className="mt-4 max-w-2xl text-lg text-text-muted">
              {caseStudy.context}
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
            {/* Problem */}
            <AnimatedSection animation="fade-up" delay={0.1}>
              <div className="border-t border-border pt-8">
                <p className="font-mono text-xs tracking-wider text-accent">THE PROBLEM</p>
                <ul className="mt-6 space-y-3">
                  {caseStudy.problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-text-dim" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* What was built */}
            <AnimatedSection animation="fade-up" delay={0.2}>
              <div className="border-t border-border pt-8">
                <p className="font-mono text-xs tracking-wider text-accent">WHAT WAS BUILT</p>
                <ul className="mt-6 space-y-3">
                  {caseStudy.built.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Result */}
            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="border-t border-border pt-8">
                <p className="font-mono text-xs tracking-wider text-accent">THE RESULT</p>
                <p className="mt-6 text-lg leading-relaxed text-text">
                  {caseStudy.result}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 5. How It Works (The System) ─────────────────────────── */}
      <section id="system" className="scroll-mt-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <AnimatedSection>
            <p className="font-mono text-sm tracking-wider text-text-dim">
              // THE_SYSTEM
            </p>
            <h2 className="mt-6">Three phases. One system.</h2>
            <p className="mt-4 max-w-xl text-lg text-text-muted">
              Simple, sequential, and designed to remove complexity.
            </p>
          </AnimatedSection>

          <div className="mt-20">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.number} animation="fade-up" delay={i * 0.1}>
                <div className="border-t border-border py-12 md:py-16">
                  <div className="grid gap-8 md:grid-cols-12">
                    <div className="md:col-span-1">
                      <span className="font-mono text-sm text-text-dim">{phase.number}</span>
                    </div>
                    <div className="md:col-span-4">
                      <h3>{phase.title}</h3>
                      <div className="mt-3 flex flex-wrap gap-3">
                        <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-text-dim">
                          {phase.duration}
                        </span>
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <p className="text-sm font-medium text-accent">{phase.deliverable}</p>
                      <p className="mt-3 leading-relaxed text-text-muted">{phase.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Agency vs Me ──────────────────────────────────────── */}
      <section id="compare" className="scroll-mt-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-sm tracking-wider text-text-dim">
              // WHY_NOT_AN_AGENCY
            </p>
            <h2 className="mt-6">The difference.</h2>
          </AnimatedSection>

          <div className="mt-16 overflow-hidden rounded-sm border border-border">
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-border bg-surface">
              <div className="px-6 py-4">
                <span className="font-mono text-xs tracking-wider text-text-dim">TYPICAL AGENCY</span>
              </div>
              <div className="border-l border-border px-6 py-4">
                <span className="font-mono text-xs tracking-wider text-accent">WORKING WITH ME</span>
              </div>
            </div>
            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.06}>
                <div className="grid grid-cols-2 border-b border-border last:border-b-0">
                  <div className="px-6 py-5">
                    <p className="text-sm text-text-dim">{row.them}</p>
                  </div>
                  <div className="border-l border-border px-6 py-5">
                    <p className="text-sm text-text-muted">{row.me}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Pricing ───────────────────────────────────────────── */}
      <section id="pricing" className="scroll-mt-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-sm tracking-wider text-text-dim">
              // INVESTMENT
            </p>
            <h2 className="mt-6">Transparent pricing. No surprises.</h2>
            <p className="mt-4 max-w-xl text-lg text-text-muted">
              All options include a satisfaction guarantee, direct access (no juniors),
              and 14-day proposal validity.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-4">
            {pricingOptions.map((option, i) => (
              <AnimatedSection key={option.name} animation="fade-up" delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-sm border p-8 transition-all duration-500 ${
                    option.recommended
                      ? 'border-accent/50 bg-surface-alt shadow-lg shadow-accent/5'
                      : 'border-border bg-surface-alt hover:border-border-subtle'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs tracking-wider text-text-dim">{option.scope}</p>
                    {option.recommended && (
                      <span className="rounded-sm bg-accent/10 px-2.5 py-1 font-mono text-xs tracking-wider text-accent">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4">{option.name}</h3>

                  <div className="mt-6">
                    <p className="text-3xl font-semibold text-text">{option.price}</p>
                    <p className="mt-1 font-mono text-xs text-text-dim">{option.priceNote}</p>
                  </div>

                  <div className="mt-8 border-t border-border pt-6">
                    <ul className="space-y-3">
                      {option.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-text-muted">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8">
                    <a
                      href="#contact"
                      className={`block w-full rounded-sm py-3 text-center font-mono text-sm tracking-wider transition-all duration-500 ${
                        option.recommended
                          ? 'bg-accent text-surface hover:bg-accent-hover'
                          : 'border border-border text-text-muted hover:border-accent/30 hover:text-text'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ───────────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-20 bg-surface-alt">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-sm tracking-wider text-text-dim">
              // FAQ
            </p>
            <h2 className="mt-6">Questions you&rsquo;re probably asking.</h2>
          </AnimatedSection>

          <div className="mt-16 max-w-3xl">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.06}>
                <div className="border-t border-border py-8 md:py-10">
                  <h3 className="text-text">{faq.q}</h3>
                  <p className="mt-3 leading-relaxed text-text-muted">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CTA / Contact ─────────────────────────────────────── */}
      <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-surface">
        <div className="pointer-events-none absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-40">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <AnimatedSection animation="fade-up">
              <p className="font-mono text-sm tracking-wider text-text-dim">
                // START_HERE
              </p>
              <h2 className="mt-6">
                A growth engine running{' '}
                <span className="text-accent">without you thinking about it.</span>
              </h2>
              <p className="mt-6 text-lg text-text-muted">
                That&rsquo;s the after-state. One discovery call to find out if we&rsquo;re
                a good fit. No pitch decks. No pressure. Just a conversation.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.15}>
              <div className="flex flex-col justify-center">
                <a
                  href="mailto:hello@gst.studio"
                  className="group inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-8 py-4 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
                >
                  Book a Discovery Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
                </a>

                <p className="mt-6 font-mono text-xs text-text-dim">
                  Or email directly: hello@gst.studio
                </p>

                <div className="mt-12 border-t border-border pt-8">
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
