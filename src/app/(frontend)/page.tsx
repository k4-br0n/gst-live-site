import { ArrowRight, Check, X } from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { AgitationSection } from '@/components/AgitationSection'
import { HeroIntro } from '@/components/HeroIntro'
import { TypingText } from '@/components/TypingText'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const problemCategories = [
  {
    title: 'Positioning & messaging',
    description:
      'Your product is strong but your message isn\u2019t landing. Technical founders struggle to articulate value in a way that drives action.',
  },
  {
    title: 'Systematic lead generation',
    description:
      'Growth is word-of-mouth. Referrals dry up. You have no repeatable system turning strangers into qualified leads.',
  },
  {
    title: 'Full-stack execution',
    description:
      'You\u2019ve been burned by agencies who didn\u2019t understand your product. You need someone who does the thinking and the building.',
  },
]

const pathwaySteps = [
  {
    label: 'Phase 1',
    title: 'GTM Audit & Strategy',
    description:
      'Find what is and isn\u2019t working. Walk away with a complete strategy and 90-day roadmap.',
  },
  {
    label: 'Phase 2',
    title: 'Build & Launch',
    description:
      'Landing pages, automation, outreach \u2014 a working acquisition system, live and generating leads.',
  },
  {
    label: 'Phase 3',
    title: 'Optimise & Scale',
    description:
      'Ongoing partnership for continuous growth. Your fractional growth partner.',
  },
]

const agitationBlocks = [
  {
    number: '01',
    heading: 'You\u2019ve got a great product and existing clients love it.',
    description:
      'You\u2019ve bootstrapped your way through early growth. But now the stakes are higher, and what got you here isn\u2019t getting you any further.',
  },
  {
    number: '02',
    heading: 'You\u2019ve tried hiring salespeople. You\u2019ve tried agencies.',
    description:
      'Tweaking your marketing, investing in new tools. But nothing has made a meaningful difference. Agencies didn\u2019t understand your product. Juniors needed managing. Tools without strategy are just noise.',
  },
  {
    number: '03',
    heading: 'The real problem isn\u2019t any one thing \u2014 it\u2019s a mix of things.',
    description:
      'Where does your customer journey actually start? Is your positioning clear? Is your messaging aligned with how buyers actually make decisions? Do you have a system, or scattered tactics?',
  },
]

const advantages = [
  {
    label: 'In the trenches',
    text: 'Currently building a real growth engine for a real B2B tech company. Not an ex-marketer who advises \u2014 I\u2019m in it.',
  },
  {
    label: 'Full-stack execution',
    text: 'Strategy, copy, design, web dev, automation, analytics. One person. No handoffs, no gaps.',
  },
  {
    label: 'Tech-native',
    text: 'I understand the product landscape intrinsically. I speak the buyer\u2019s language, not marketing jargon.',
  },
]

const caseStudy = {
  context:
    'A niche B2B connectivity company selling 5G Fixed Wireless Access to MSPs and corporate IT teams. Technical product, technical buyers, zero acquisition system.',
  problems: [
    'Website built by engineers \u2014 functional, not converting',
    'No systematic lead generation',
    'No marketing automation or nurture sequences',
    'No outreach system \u2014 relying on inbound that wasn\u2019t coming',
    'Needed to pivot positioning entirely',
  ],
  built: [
    'Product-market fit through positioning work',
    'Landing pages rebuilt for conversion',
    'HubSpot automation \u2014 capture, nurture, scoring',
    'Cold outreach \u2014 email, LinkedIn, SDR playbook',
    'Full funnel: awareness to qualified lead to hand-off',
    'Analytics and tracking across everything',
  ],
  result:
    'A complete acquisition system running end-to-end. From scattered tactics to a working growth engine. One person did the strategy AND the building.',
}

const qualifierItems = [
  'You run a B2B tech company with 3\u201320 staff, trying to break past \u00A31M revenue.',
  'You\u2019ve tried hiring, tweaking messaging, or adding tools \u2014 but nothing\u2019s sticking.',
  'You suspect the problem isn\u2019t any one thing \u2014 it\u2019s alignment.',
  'You\u2019ve been burned by agencies who didn\u2019t understand your product.',
  'You\u2019re ready for a clear system that connects strategy, execution, and how technical buyers actually make decisions.',
  'You want to stop guessing and start growing \u2014 with a plan that actually works.',
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ━━ 01 · HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="hero" className="section-full">
        <div className="mx-auto w-full max-w-7xl text-center">
          <HeroIntro />
        </div>
      </section>

      {/* ━━ 02 · VSL (Video Sales Letter) ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="vsl" className="section-full">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-accent">
              <TypingText text="// WATCH_FIRST" speed={70} cursorClassName="text-accent" startWhenVisible startDelay={500} />
            </p>
            <h2 className="mt-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              The real story behind building a growth engine
            </h2>
            <p className="mt-4 text-text-muted">
              A short video on what actually moves the needle for B2B tech companies.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={0.15}>
            <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-sm border border-border bg-surface-alt/30">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0"
                title="Video Sales Letter — placeholder"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 03 · TESTIMONIAL (immediate social proof) ━━━━━━━━━━━━━━ */}
      <section id="testimonial" className="section-full">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <blockquote className="relative">
              <p
                className="font-sans font-semibold leading-snug tracking-tight text-text"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)' }}
              >
                &ldquo;One person did the strategy AND the building &mdash; from scattered
                tactics to a working growth engine.&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 max-w-12 bg-accent" />
                <div>
                  <p className="font-mono text-xs tracking-wider text-text">
                    B2B Tech Founder
                  </p>
                  <p className="mt-1 font-mono text-[10px] tracking-wider text-text-dim">
                    CEO &middot; UK Connectivity Company
                  </p>
                </div>
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 03 · PROBLEM (validating + categories) ━━━━━━━━━━━━━━━━━ */}
      <section id="problem" className="section-full">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-accent">
            <TypingText text="// THE_PROBLEM" speed={70} cursorClassName="text-accent" startWhenVisible startDelay={500} />
          </p>
            <h2 className="mt-8">
              You&rsquo;ve built something great, but growth has stalled.
            </h2>
            <p className="mt-4 text-lg text-text-muted">You need help with&hellip;</p>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 md:grid-cols-3 3xl:mt-10">
            {problemCategories.map((cat, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg">{cat.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {cat.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ 04 · BRIDGE (solution preview + CTA) ━━━━━━━━━━━━━━━━━━━ */}
      <section id="bridge" className="section-full">
        <div className="mx-auto w-full max-w-3xl text-center">
          <AnimatedSection animation="fade-up">
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              Let&rsquo;s build a system that actually works.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              It starts with a GTM Audit using my three-phase framework.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.15}>
            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-6 py-3.5 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
            </a>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.25}>
            <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-text-muted">
              In just <span className="font-semibold text-text">2&ndash;3 weeks</span>,
              we&rsquo;ll identify exactly what&rsquo;s blocking your growth and map out a
              clear plan to fix it &mdash; so you see clarity without waiting months.
            </p>
            <p className="mt-4 text-sm text-text-muted">
              From there, we&rsquo;ll define the right level of support for your goals and team.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 05 · PATHWAY (service options) ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="pathway" className="section-full">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-accent">
            <TypingText text="// HOW_IT_WORKS" speed={70} cursorClassName="text-accent" startWhenVisible startDelay={500} />
          </p>
            <h2 className="mt-8">Three phases. One system.</h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3 3xl:mt-10 3xl:gap-6">
            {pathwaySteps.map((step, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.1}>
                <div className="relative border-t border-border pt-6">
                  <p className="font-mono text-[10px] tracking-wider text-accent">
                    {step.label}
                  </p>
                  <h3 className="mt-3">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ 06 · AGITATION (deeper problem) ━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="agitation" className="section-full">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-accent">
              <TypingText text="// THE_REALITY" speed={70} cursorClassName="text-accent" startWhenVisible startDelay={500} />
            </p>
            <h2 className="mt-8">You&rsquo;ve already proven your product works.</h2>
          </AnimatedSection>

          <AgitationSection blocks={agitationBlocks} />

          <AnimatedSection animation="fade-up" delay={0.5}>
            <div className="mt-10 border-t border-border pt-10 3xl:pt-8">
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                That&rsquo;s the gap I help close.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted">
                When we find the root causes, we can fix them. Once everything is aligned &mdash;
                positioning, messaging, pages, automation, outreach &mdash; you start to see
                momentum again.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 07 · GUIDE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="about" className="section-full">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-accent">
              <TypingText text="// MEET_YOUR_GUIDE" speed={70} cursorClassName="text-accent" startWhenVisible startDelay={500} />
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="mt-8" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
              Most consultants hand you a strategy deck.{' '}
              <span className="text-text-muted">I build the engine.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <ImagePlaceholder
              label="WORKING SHOT"
              className="mt-8 aspect-[4/3] w-full max-w-md"
              alt="Jorge working — strategy in action"
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.25}>
            <p className="mt-10 max-w-2xl text-xl leading-relaxed text-text-muted">
              I&rsquo;m a growth strategist who embeds with small B2B tech firms to build their
              entire go-to-market system. Strategy, landing pages, automation, outreach &mdash;
              end to end. No handoffs. No subcontractors. No &ldquo;here&rsquo;s a strategy
              deck, good luck.&rdquo;
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.3}>
            <div className="mt-14 grid gap-6 md:grid-cols-3 3xl:mt-10">
              {advantages.map((item, i) => (
                <div key={i} className="border-t border-border pt-6">
                  <p className="font-mono text-xs tracking-wider text-accent">{item.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 08 · PROOF (case study) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="proof" className="section-full">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            <p className="font-mono text-xs tracking-wider text-accent">
            <TypingText text="// CASE_STUDY" speed={70} cursorClassName="text-accent" startWhenVisible startDelay={500} />
          </p>
            <h2 className="mt-8">From zero system to full engine.</h2>
            <p className="mt-4 max-w-2xl text-text-muted">{caseStudy.context}</p>
          </AnimatedSection>

          {/* Before */}
          <AnimatedSection animation="fade-up" delay={0.15}>
            <div className="mt-16 border-t border-border pt-8 3xl:mt-10 3xl:pt-6">
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
            <div className="mt-12 border-t border-border pt-8 3xl:mt-8 3xl:pt-6">
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

          <AnimatedSection animation="fade-up" delay={0.35}>
            <blockquote className="mt-12 border-l-2 border-accent pl-6 text-xl leading-relaxed text-text">
              {caseStudy.result}
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 09 · QUALIFIER ("this is for you if…") ━━━━━━━━━━━━━━━━━ */}
      <section id="qualifier" className="section-full">
        <div className="mx-auto w-full max-w-3xl">
          <AnimatedSection animation="fade-up">
            <h2>This is for you if&hellip;</h2>
          </AnimatedSection>

          <div className="mt-12 space-y-5 3xl:mt-10">
            {qualifierItems.map((item, i) => (
              <AnimatedSection key={i} animation="fade-up" delay={i * 0.06}>
                <div className="flex items-start gap-4">
                  <Check className="mt-1.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-lg leading-relaxed text-text-muted">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={0.5}>
            <div className="mt-16 border-t border-border pt-10 3xl:mt-10 3xl:pt-8">
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}>
                You don&rsquo;t need another quick fix.
              </h3>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-muted">
                You need a system that aligns your positioning, messaging, pages, automation, and
                outreach &mdash; so your company can grow with clarity and confidence.
              </p>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-6 py-3.5 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
              >
                Book a Discovery Call
                <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 10 · CONTACT (final CTA) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact" className="section-full">
        <div className="mx-auto w-full max-w-3xl text-center">
          <AnimatedSection animation="fade-up">
            <ImagePlaceholder
              label="HEADSHOT"
              shape="circular"
              className="mx-auto mb-8 h-28 w-28"
              alt="Jorge — friendly headshot"
            />
            <p className="font-mono text-xs tracking-wider text-accent">
            <TypingText text="// START_HERE" speed={70} cursorClassName="text-accent" startWhenVisible startDelay={500} />
          </p>
            <h2 className="mt-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              A growth engine running{' '}
              <span className="text-accent">without you thinking about it.</span>
            </h2>
            <p className="mt-6 text-lg text-text-muted">
              One discovery call. No pitch decks. No pressure. Just a conversation to see if
              we&rsquo;re a good fit.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.15}>
            <a
              href="mailto:jorge@gst.studio"
              className="group mt-10 inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-8 py-4 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
            </a>

            <p className="mt-6 font-mono text-xs text-text-dim">
              Or email directly: jorge@gst.studio
            </p>

            <div className="mt-12 flex justify-center gap-8">
              {['LinkedIn', 'Twitter'].map((social) => (
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
