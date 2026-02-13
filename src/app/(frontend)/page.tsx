import { ArrowRight, Check, X } from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const painPoints = [
  'Your website was built by engineers — functional, not converting.',
  'Growth is word-of-mouth. Referrals dry up.',
  "You've tried agencies. They didn't get your product.",
  "You know you need marketing but don't know where to start.",
  "You can't afford a full team — but you need the output of one.",
]

const phases = [
  {
    number: '01',
    title: 'Audit & Strategy',
    duration: '2–3 weeks',
    deliverable: 'GTM Strategy + 90-Day Roadmap',
    description:
      'Deep dive into product, market, positioning. Competitive analysis. ICP definition. You walk away with clarity on who to target, what to say, and what to build first.',
  },
  {
    number: '02',
    title: 'Build & Launch',
    duration: '6–8 weeks',
    deliverable: 'A working acquisition system, live',
    description:
      'Landing pages. HubSpot automation. Cold outreach system. Full funnel from awareness to qualified lead to hand-off. Analytics and tracking.',
  },
  {
    number: '03',
    title: 'Optimise & Scale',
    duration: 'Monthly retainer',
    deliverable: 'Continuous growth without you thinking about it',
    description:
      'Performance reviews, A/B testing, campaign adjustments, strategic check-ins. Your fractional growth partner.',
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
    'Website built by engineers — not converting',
    'No systematic lead generation',
    'No marketing automation or nurture',
    'No outreach system — relying on inbound that wasn\'t coming',
    'Needed to pivot positioning entirely',
  ],
  built: [
    'Product-market fit through positioning work',
    'Landing pages rebuilt for conversion',
    'HubSpot automation — capture, nurture, scoring',
    'Cold outreach — email, LinkedIn, SDR playbook',
    'Full funnel: awareness to qualified lead to hand-off',
    'Analytics and tracking across everything',
  ],
  result:
    'A complete acquisition system running end-to-end. From scattered tactics to a working growth engine. One person did the strategy AND the building.',
}

const faqs = [
  {
    q: 'Why up-front payment?',
    a: 'It aligns incentives. I deliver a fixed outcome, not padded hours. If deliverables don\'t meet agreed standards, money back.',
  },
  {
    q: 'What if my product is too niche?',
    a: "That's ideal. I specialise in B2B tech with technical buyers. The more specific, the more precise the targeting.",
  },
  {
    q: 'What happens after the build?',
    a: 'You own everything. The system runs without me. The retainer exists if you want ongoing optimisation — not required.',
  },
  {
    q: 'How is this different from an agency?',
    a: 'You work directly with me. No account managers, no juniors, no handoffs. One person, end to end.',
  },
  {
    q: "Can't I just hire a junior marketer?",
    a: "You can. They'll need 6-12 months to ramp up, won't know how to build landing pages or automation, and will need managing. I'm operational from week 1.",
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ━━ 01 · HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="hero" className="section-full relative bg-surface">
        <div className="mx-auto w-full max-w-5xl">
          <AnimatedSection trigger="load" stagger={0.15} duration={1.4}>
            <p className="font-mono text-xs tracking-wider text-accent">
              // FOR_B2B_TECH_COMPANIES
            </p>

            <h1 className="mt-8 max-w-4xl" style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)' }}>
              You have a great product.
            </h1>
            <h1
              className="max-w-4xl text-text-muted"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)' }}
            >
              You have no acquisition system.
            </h1>

            <p className="mt-10 max-w-lg text-lg leading-relaxed text-text-muted">
              I build the engine that turns strangers into qualified leads.
              Strategy, pages, automation, outreach. End to end.
            </p>

            <a
              href="#contact"
              className="group mt-12 inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-6 py-3.5 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 02 · PROBLEM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="problem" className="section-full bg-surface-alt">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-text-dim">
              // THE_PROBLEM
            </p>
            <h2 className="mt-8">Sound familiar?</h2>
          </AnimatedSection>

          <div className="mt-16 space-y-8">
            {painPoints.map((point, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.08}>
                <p
                  className="border-l-2 border-border pl-6 text-xl leading-relaxed text-text-muted transition-colors duration-500 hover:border-accent hover:text-text"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                >
                  {point}
                </p>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={0.5}>
            <p className="mt-16 text-lg font-medium text-text">
              The real issue: you don&rsquo;t have an acquisition system.{' '}
              <span className="text-text-muted">You have scattered tactics.</span>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 03 · GUIDE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="about" className="section-full bg-surface">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-text-dim">
              // MEET_YOUR_GUIDE
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="mt-8" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
              I do the thinking{' '}
              <span className="text-accent">and</span>{' '}
              the building.
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-text-muted">
              I embed with small B2B tech firms to build their entire go-to-market
              system. No hand-offs. No subcontractors. No &ldquo;here&rsquo;s a
              strategy deck, good luck.&rdquo;
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.3}>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  label: 'In the trenches',
                  text: 'Building a real growth engine for a real B2B tech company right now.',
                },
                {
                  label: 'Full-stack',
                  text: 'Strategy, copy, design, dev, automation, analytics. No handoffs.',
                },
                {
                  label: 'Tech-native',
                  text: "I speak the buyer's language, not marketing jargon.",
                },
              ].map((item, i) => (
                <div key={i} className="border-t border-border pt-6">
                  <p className="font-mono text-xs tracking-wider text-accent">{item.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 04 · PROOF ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="proof" className="section-full bg-surface-alt">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-text-dim">
              // CASE_STUDY
            </p>
            <h2 className="mt-8">From zero system to full engine.</h2>
            <p className="mt-4 max-w-2xl text-text-muted">
              {caseStudy.context}
            </p>
          </AnimatedSection>

          {/* Before */}
          <AnimatedSection animation="fade-up" delay={0.15}>
            <div className="mt-16 border-t border-border pt-8">
              <p className="font-mono text-xs tracking-wider text-text-dim">BEFORE</p>
              <ul className="mt-6 space-y-3">
                {caseStudy.problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted">
                    <X className="mt-1 h-4 w-4 shrink-0 text-text-dim" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* After */}
          <AnimatedSection animation="fade-up" delay={0.25}>
            <div className="mt-12 border-t border-border pt-8">
              <p className="font-mono text-xs tracking-wider text-accent">AFTER</p>
              <ul className="mt-6 space-y-3">
                {caseStudy.built.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Result pull-quote */}
          <AnimatedSection animation="fade-up" delay={0.35}>
            <blockquote className="mt-12 border-l-2 border-accent pl-6 text-xl leading-relaxed text-text">
              {caseStudy.result}
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 05 · SYSTEM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="system" className="section-full bg-surface">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-text-dim">
              // HOW_IT_WORKS
            </p>
            <h2 className="mt-8">Three phases. One system.</h2>
          </AnimatedSection>

          <div className="mt-16 space-y-0">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.number} animation="fade-up" delay={i * 0.1}>
                <div className="border-t border-border py-10 md:py-14">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-3xl font-semibold text-border-subtle">
                      {phase.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-4">
                        <h3>{phase.title}</h3>
                        <span className="font-mono text-xs text-text-dim">{phase.duration}</span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-accent">{phase.deliverable}</p>
                      <p className="mt-3 max-w-xl leading-relaxed text-text-muted">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ 06 · COMPARE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="compare" className="section-full bg-surface-alt">
        <div className="mx-auto w-full max-w-3xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-text-dim">
              // WHY_NOT_AN_AGENCY
            </p>
            <h2 className="mt-8">The difference.</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.15}>
            <div className="mt-16 overflow-hidden rounded-sm border border-border">
              {/* Header */}
              <div className="grid grid-cols-2 border-b border-border bg-surface">
                <div className="px-5 py-3.5">
                  <span className="font-mono text-[10px] tracking-wider text-text-dim">
                    TYPICAL AGENCY
                  </span>
                </div>
                <div className="border-l border-border px-5 py-3.5">
                  <span className="font-mono text-[10px] tracking-wider text-accent">
                    WORKING WITH ME
                  </span>
                </div>
              </div>
              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 border-b border-border last:border-b-0"
                >
                  <div className="px-5 py-4">
                    <p className="text-sm leading-relaxed text-text-dim">{row.them}</p>
                  </div>
                  <div className="border-l border-border px-5 py-4">
                    <p className="text-sm leading-relaxed text-text-muted">{row.me}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 07 · PRICING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="pricing" className="section-full bg-surface">
        <div className="mx-auto w-full max-w-5xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-text-dim">
              // INVESTMENT
            </p>
            <h2 className="mt-8">Transparent pricing.</h2>
            <p className="mt-3 text-text-muted">
              Satisfaction guarantee. Direct access. No juniors. 14-day proposal validity.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {pricingOptions.map((option, i) => (
              <AnimatedSection key={option.name} animation="fade-up" delay={i * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-sm border p-6 transition-all duration-500 ${
                    option.recommended
                      ? 'border-accent/50 bg-surface-alt shadow-lg shadow-accent/5'
                      : 'border-border bg-surface-alt hover:border-border-subtle'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] tracking-wider text-text-dim">
                      {option.scope}
                    </p>
                    {option.recommended && (
                      <span className="rounded-sm bg-accent/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-accent">
                        RECOMMENDED
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3">{option.name}</h3>

                  <div className="mt-4">
                    <p className="text-2xl font-semibold text-text">{option.price}</p>
                    <p className="mt-1 font-mono text-[10px] text-text-dim">{option.priceNote}</p>
                  </div>

                  <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                    {option.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-text-muted">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-6">
                    <a
                      href="#contact"
                      className={`block w-full rounded-sm py-2.5 text-center font-mono text-xs tracking-wider transition-all duration-500 ${
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

      {/* ━━ 08 · FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="faq" className="section-full bg-surface-alt">
        <div className="mx-auto w-full max-w-2xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-text-dim">
              // FAQ
            </p>
            <h2 className="mt-8">Questions you&rsquo;re probably asking.</h2>
          </AnimatedSection>

          <div className="mt-14">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.06}>
                <div className="border-t border-border py-8">
                  <h3>{faq.q}</h3>
                  <p className="mt-3 leading-relaxed text-text-muted">{faq.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ 09 · CONTACT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact" className="section-full relative bg-surface">
        <div className="pointer-events-none absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-text-dim">
              // START_HERE
            </p>
            <h2 className="mt-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              A growth engine running{' '}
              <span className="text-accent">without you thinking about it.</span>
            </h2>
            <p className="mt-6 text-lg text-text-muted">
              One discovery call. No pitch decks. No pressure. Just a conversation
              to find out if we&rsquo;re a good fit.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.15}>
            <a
              href="mailto:hello@gst.studio"
              className="group mt-10 inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-8 py-4 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
            </a>

            <p className="mt-6 font-mono text-xs text-text-dim">
              Or email directly: hello@gst.studio
            </p>

            <div className="mt-12 flex justify-center gap-8">
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
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
