import Link from 'next/link'
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Palette,
  Code2,
  Rocket,
  Star,
} from 'lucide-react'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Built on Next.js 15 with React Server Components for instant page loads and optimal Core Web Vitals.',
  },
  {
    icon: Shield,
    title: 'CMS Powered',
    description:
      'Payload CMS block builder lets clients manage every page without touching code.',
  },
  {
    icon: Palette,
    title: 'Animation Ready',
    description:
      'GSAP scroll-triggered animations baked in. Fade, slide, scale — all configurable.',
  },
  {
    icon: Globe,
    title: 'Fully Responsive',
    description:
      'Mobile-first Tailwind CSS design that looks sharp on every screen size.',
  },
  {
    icon: Code2,
    title: 'Type Safe',
    description:
      'TypeScript strict mode from database schema to UI component props. No guesswork.',
  },
  {
    icon: Rocket,
    title: 'Deploy Anywhere',
    description:
      'One command to Vercel, Netlify, or any Node.js host. Zero config deploys.',
  },
]

const stats = [
  { value: '100', label: 'Lighthouse Score' },
  { value: '<100ms', label: 'Time to Interactive' },
  { value: '0', label: 'jQuery Dependencies' },
  { value: '∞', label: 'Possibilities' },
]

const testimonials = [
  {
    quote:
      'This template cut our project kickoff from two weeks to two hours. The block-based approach means our clients can actually update their own sites.',
    author: 'Sarah Chen',
    role: 'Lead Developer',
    company: 'Studio Nine',
  },
  {
    quote:
      'The GSAP integration is exactly what we needed. Smooth, performant animations without the bloat. Every landing page we ship now feels premium.',
    author: 'Marcus Rivera',
    role: 'Creative Director',
    company: 'Pixel & Co',
  },
  {
    quote:
      'Finally a Next.js template that takes design seriously. The typography, spacing, and attention to detail saved us countless hours of polish.',
    author: 'Emily Nakamura',
    role: 'Product Designer',
    company: 'Forma Studio',
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-gray-950 pt-20">
        {/* Decorative gradient blurs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[128px]" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[600px] rounded-full bg-indigo-500/10 blur-[100px]" />
        </div>

        <AnimatedSection
          trigger="load"
          stagger={0.18}
          className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl flex-col items-center justify-center px-6 text-center"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/80 px-4 py-1.5 text-sm text-gray-400 backdrop-blur">
            <Zap className="h-3.5 w-3.5 text-brand-400" />
            Your Template. Your Rules.
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build Beautiful{' '}
            <span className="bg-gradient-to-r from-brand-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
            A modern, animation-ready template for crafting stunning landing
            pages and marketing sites. Powered by Next.js, Payload CMS, and
            GSAP.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/admin"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Open CMS
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-8 py-3.5 text-base font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
            >
              Explore Features
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Logo Cloud ──────────────────────────────────────────── */}
      <section className="border-b border-gray-100 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-400">
            Trusted by forward-thinking teams
          </p>
          <AnimatedSection
            animation="fade-in"
            duration={1.2}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6"
          >
            {['Acme Inc', 'TechCorp', 'Innovate', 'ScaleUp', 'NextGen'].map(
              (name) => (
                <span
                  key={name}
                  className="text-xl font-bold tracking-tight text-gray-200"
                >
                  {name}
                </span>
              ),
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────── */}
      <section id="features" className="scroll-mt-20 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need to Ship Fast
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A carefully crafted foundation so you can focus on what matters
              &mdash; your content and design.
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="fade-up"
            stagger={0.1}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-8 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5"
                >
                  <div className="inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 transition-colors group-hover:bg-brand-100">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ── About / Showcase ────────────────────────────────────── */}
      <section id="about" className="scroll-mt-20 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <AnimatedSection animation="slide-left">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                Why This Template
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Stop Building From Scratch
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Every project starts the same way &mdash; setting up Next.js,
                configuring the CMS, wiring up animations, building the page
                layout. This template eliminates all of that so you can jump
                straight into design and content.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Block-based page builder with Payload CMS',
                  'GSAP scroll animations out of the box',
                  'Type-safe from database to component',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 rounded-full bg-brand-100 p-0.5 text-brand-600">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="slide-right">
              <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 shadow-2xl">
                {/* Fake editor chrome */}
                <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-gray-500">page.tsx</span>
                </div>
                <pre className="overflow-x-auto p-6 text-sm leading-relaxed">
                  <code className="text-gray-300">
                    {`import { RenderBlocks } from '@/blocks'
import { getPayload } from 'payload'

export default async function Page() {
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    depth: 2,
  })

  return <RenderBlocks blocks={page.layout} />
}`}
                  </code>
                </pre>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────── */}
      <section className="bg-gray-950 py-20">
        <AnimatedSection className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-white lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </AnimatedSection>
      </section>

      {/* ── Testimonials ────────────────────────────────────────── */}
      <section id="testimonials" className="scroll-mt-20 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Loved by Developers &amp; Designers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              See what teams are saying about building with this template.
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="fade-up"
            stagger={0.15}
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-gray-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-500">
                    {t.role} at {t.company}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative scroll-mt-20 overflow-hidden bg-gray-950 py-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-[100px]" />
        </div>

        <AnimatedSection className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-brand-400 to-indigo-400 bg-clip-text text-transparent">
              Amazing
            </span>
            ?
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Clone this template, connect your database, and start shipping
            beautiful pages in minutes.
          </p>
          <div className="mt-10">
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Start Building
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
