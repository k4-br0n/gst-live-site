'use client'

import { ArrowRight, Check, X } from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import type { Homepage } from '@/payload-types'

type Props = {
  data: Homepage
}

export function HomepageContent({ data }: Props) {
  const { hero, problem, guide, proof, system, compare, pricing, faq, contact } = data

  return (
    <>
      {/* ━━ 01 · HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="hero" className="section-full relative bg-surface">
        <div className="mx-auto w-full max-w-5xl">
          <AnimatedSection trigger="load" stagger={0.15} duration={1.4}>
            {hero.eyebrow && (
              <p className="font-mono text-xs tracking-wider text-accent">{hero.eyebrow}</p>
            )}

            <h1 className="mt-8 max-w-4xl" style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)' }}>
              {hero.headingLine1}
            </h1>
            <h1
              className="max-w-4xl text-text-muted"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 7rem)' }}
            >
              {hero.headingLine2}
            </h1>

            {hero.description && (
              <p className="mt-10 max-w-lg text-lg leading-relaxed text-text-muted">
                {hero.description}
              </p>
            )}

            {hero.ctaText && (
              <a
                href={hero.ctaLink || '#contact'}
                className="group mt-12 inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-6 py-3.5 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
              >
                {hero.ctaText}
                <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
              </a>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 02 · PROBLEM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="problem" className="section-full bg-surface-alt">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            {problem.eyebrow && (
              <p className="font-mono text-xs tracking-wider text-text-dim">{problem.eyebrow}</p>
            )}
            <h2 className="mt-8">{problem.heading}</h2>
          </AnimatedSection>

          {problem.painPoints && problem.painPoints.length > 0 && (
            <div className="mt-16 space-y-8">
              {problem.painPoints.map((point, i) => (
                <AnimatedSection key={point.id || i} animation="fade-up" delay={i * 0.08}>
                  <p
                    className="border-l-2 border-border pl-6 text-xl leading-relaxed text-text-muted transition-colors duration-500 hover:border-accent hover:text-text"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
                  >
                    {point.text}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          )}

          {problem.summary && (
            <AnimatedSection animation="fade-up" delay={0.5}>
              <p className="mt-16 text-lg font-medium text-text">
                {problem.summary}
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ━━ 03 · GUIDE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="about" className="section-full bg-surface">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            {guide.eyebrow && (
              <p className="font-mono text-xs tracking-wider text-text-dim">{guide.eyebrow}</p>
            )}
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="mt-8" style={{ fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
              {renderAccentText(guide.heading, 'and')}
            </h2>
          </AnimatedSection>

          {guide.description && (
            <AnimatedSection animation="fade-up" delay={0.2}>
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-text-muted">
                {guide.description}
              </p>
            </AnimatedSection>
          )}

          {guide.advantages && guide.advantages.length > 0 && (
            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {guide.advantages.map((item, i) => (
                  <div key={item.id || i} className="border-t border-border pt-6">
                    <p className="font-mono text-xs tracking-wider text-accent">{item.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.text}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ━━ 04 · PROOF ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="proof" className="section-full bg-surface-alt">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            {proof.eyebrow && (
              <p className="font-mono text-xs tracking-wider text-text-dim">{proof.eyebrow}</p>
            )}
            <h2 className="mt-8">{proof.heading}</h2>
            {proof.context && (
              <p className="mt-4 max-w-2xl text-text-muted">{proof.context}</p>
            )}
          </AnimatedSection>

          {/* Before */}
          {proof.problems && proof.problems.length > 0 && (
            <AnimatedSection animation="fade-up" delay={0.15}>
              <div className="mt-16 border-t border-border pt-8">
                <p className="font-mono text-xs tracking-wider text-text-dim">BEFORE</p>
                <ul className="mt-6 space-y-3">
                  {proof.problems.map((p, i) => (
                    <li key={p.id || i} className="flex items-start gap-3 text-text-muted">
                      <X className="mt-1 h-4 w-4 shrink-0 text-text-dim" />
                      <span>{p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}

          {/* After */}
          {proof.built && proof.built.length > 0 && (
            <AnimatedSection animation="fade-up" delay={0.25}>
              <div className="mt-12 border-t border-border pt-8">
                <p className="font-mono text-xs tracking-wider text-accent">AFTER</p>
                <ul className="mt-6 space-y-3">
                  {proof.built.map((b, i) => (
                    <li key={b.id || i} className="flex items-start gap-3 text-text-muted">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                      <span>{b.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          )}

          {/* Result pull-quote */}
          <AnimatedSection animation="fade-up" delay={0.35}>
            <blockquote className="mt-12 border-l-2 border-accent pl-6 text-xl leading-relaxed text-text">
              {proof.result}
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* ━━ 05 · SYSTEM ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="system" className="section-full bg-surface">
        <div className="mx-auto w-full max-w-4xl">
          <AnimatedSection animation="fade-up">
            {system.eyebrow && (
              <p className="font-mono text-xs tracking-wider text-text-dim">{system.eyebrow}</p>
            )}
            <h2 className="mt-8">{system.heading}</h2>
          </AnimatedSection>

          {system.phases && system.phases.length > 0 && (
            <div className="mt-16 space-y-0">
              {system.phases.map((phase, i) => (
                <AnimatedSection key={phase.id || i} animation="fade-up" delay={i * 0.1}>
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
          )}
        </div>
      </section>

      {/* ━━ 06 · COMPARE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="compare" className="section-full bg-surface-alt">
        <div className="mx-auto w-full max-w-3xl">
          <AnimatedSection animation="fade-up">
            {compare.eyebrow && (
              <p className="font-mono text-xs tracking-wider text-text-dim">{compare.eyebrow}</p>
            )}
            <h2 className="mt-8">{compare.heading}</h2>
          </AnimatedSection>

          {compare.rows && compare.rows.length > 0 && (
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
                {compare.rows.map((row, i) => (
                  <div
                    key={row.id || i}
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
          )}
        </div>
      </section>

      {/* ━━ 07 · PRICING ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="pricing" className="section-full bg-surface">
        <div className="mx-auto w-full max-w-5xl">
          <AnimatedSection animation="fade-up">
            {pricing.eyebrow && (
              <p className="font-mono text-xs tracking-wider text-text-dim">{pricing.eyebrow}</p>
            )}
            <h2 className="mt-8">{pricing.heading}</h2>
            {pricing.subtitle && (
              <p className="mt-3 text-text-muted">{pricing.subtitle}</p>
            )}
          </AnimatedSection>

          {pricing.options && pricing.options.length > 0 && (
            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {pricing.options.map((option, i) => (
                <AnimatedSection key={option.id || i} animation="fade-up" delay={i * 0.1}>
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
                      {option.priceNote && (
                        <p className="mt-1 font-mono text-[10px] text-text-dim">
                          {option.priceNote}
                        </p>
                      )}
                    </div>

                    {option.features && option.features.length > 0 && (
                      <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                        {option.features.map((feature, j) => (
                          <li
                            key={feature.id || j}
                            className="flex items-start gap-2.5 text-sm text-text-muted"
                          >
                            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            {feature.text}
                          </li>
                        ))}
                      </ul>
                    )}

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
          )}
        </div>
      </section>

      {/* ━━ 08 · FAQ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="faq" className="section-full bg-surface-alt">
        <div className="mx-auto w-full max-w-2xl">
          <AnimatedSection animation="fade-up">
            {faq.eyebrow && (
              <p className="font-mono text-xs tracking-wider text-text-dim">{faq.eyebrow}</p>
            )}
            <h2 className="mt-8">{faq.heading}</h2>
          </AnimatedSection>

          {faq.items && faq.items.length > 0 && (
            <div className="mt-14">
              {faq.items.map((item, i) => (
                <AnimatedSection key={item.id || i} animation="fade-up" delay={i * 0.06}>
                  <div className="border-t border-border py-8">
                    <h3>{item.question}</h3>
                    <p className="mt-3 leading-relaxed text-text-muted">{item.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ━━ 09 · CONTACT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="contact" className="section-full relative bg-surface">
        <div className="pointer-events-none absolute -bottom-32 right-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
          <AnimatedSection animation="fade-up">
            {contact.eyebrow && (
              <p className="font-mono text-xs tracking-wider text-text-dim">{contact.eyebrow}</p>
            )}
            <h2 className="mt-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              {renderAccentSuffix(contact.heading, 'without you thinking about it.')}
            </h2>
            {contact.description && (
              <p className="mt-6 text-lg text-text-muted">{contact.description}</p>
            )}
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.15}>
            {contact.ctaText && (
              <a
                href={contact.ctaLink || '#contact'}
                className="group mt-10 inline-flex items-center gap-3 rounded-sm border border-accent bg-accent px-8 py-4 font-mono text-sm tracking-wider text-surface transition-all duration-500 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/10"
              >
                {contact.ctaText}
                <ArrowRight className="h-4 w-4 transition-transform duration-700 ease-luxury group-hover:translate-x-1" />
              </a>
            )}

            {contact.email && (
              <p className="mt-6 font-mono text-xs text-text-dim">
                Or email directly: {contact.email}
              </p>
            )}

            {contact.socials && contact.socials.length > 0 && (
              <div className="mt-12 flex justify-center gap-8">
                {contact.socials.map((social) => (
                  <a
                    key={social.id || social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs uppercase tracking-wider text-text-dim transition-colors duration-500 hover:text-accent"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

/* ── Helpers ─────────────────────────────────────────────────────────── */

/** Wraps a specific word in accent color (e.g. "and" in "thinking and building") */
function renderAccentText(text: string, word: string) {
  const parts = text.split(new RegExp(`\\b(${word})\\b`, 'i'))
  return parts.map((part, i) =>
    part.toLowerCase() === word.toLowerCase() ? (
      <span key={i} className="text-accent">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

/** Wraps everything after a keyword in accent color */
function renderAccentSuffix(text: string, suffix: string) {
  const idx = text.indexOf(suffix)
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-accent">{text.slice(idx)}</span>
    </>
  )
}
