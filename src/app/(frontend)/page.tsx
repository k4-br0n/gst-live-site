import { getPayload } from 'payload'
import config from '@payload-config'
import { HomepageContent } from '@/components/HomepageContent'
import type { Homepage } from '@/payload-types'

/* ── Fallback data — used when CMS Global is empty ──────────────── */
const fallback: Homepage = {
  hero: {
    eyebrow: '// FOR_B2B_TECH_COMPANIES',
    headingLine1: 'You have a great product.',
    headingLine2: 'You have no acquisition system.',
    description:
      'I build the engine that turns strangers into qualified leads. Strategy, pages, automation, outreach. End to end.',
    ctaText: 'Book a Discovery Call',
    ctaLink: '#contact',
  },
  problem: {
    eyebrow: '// THE_PROBLEM',
    heading: 'Sound familiar?',
    painPoints: [
      { text: 'Your website was built by engineers — functional, not converting.' },
      { text: 'Growth is word-of-mouth. Referrals dry up.' },
      { text: "You've tried agencies. They didn't get your product." },
      { text: "You know you need marketing but don't know where to start." },
      { text: "You can't afford a full team — but you need the output of one." },
    ],
    summary:
      "The real issue: you don't have an acquisition system. You have scattered tactics.",
  },
  guide: {
    eyebrow: '// MEET_YOUR_GUIDE',
    heading: 'I do the thinking and the building.',
    description:
      'I embed with small B2B tech firms to build their entire go-to-market system. No hand-offs. No subcontractors. No "here\'s a strategy deck, good luck."',
    advantages: [
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
    ],
  },
  proof: {
    eyebrow: '// CASE_STUDY',
    heading: 'From zero system to full engine.',
    context:
      'A niche B2B connectivity company selling 5G Fixed Wireless Access to MSPs and corporate IT teams. Technical product, technical buyers, zero acquisition system.',
    problems: [
      { text: 'Website built by engineers — not converting' },
      { text: 'No systematic lead generation' },
      { text: 'No marketing automation or nurture' },
      { text: "No outreach system — relying on inbound that wasn't coming" },
      { text: 'Needed to pivot positioning entirely' },
    ],
    built: [
      { text: 'Product-market fit through positioning work' },
      { text: 'Landing pages rebuilt for conversion' },
      { text: 'HubSpot automation — capture, nurture, scoring' },
      { text: 'Cold outreach — email, LinkedIn, SDR playbook' },
      { text: 'Full funnel: awareness to qualified lead to hand-off' },
      { text: 'Analytics and tracking across everything' },
    ],
    result:
      'A complete acquisition system running end-to-end. From scattered tactics to a working growth engine. One person did the strategy AND the building.',
  },
  system: {
    eyebrow: '// HOW_IT_WORKS',
    heading: 'Three phases. One system.',
    phases: [
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
    ],
  },
  compare: {
    eyebrow: '// WHY_NOT_AN_AGENCY',
    heading: 'The difference.',
    rows: [
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
    ],
  },
  pricing: {
    eyebrow: '// INVESTMENT',
    heading: 'Transparent pricing.',
    subtitle:
      'Satisfaction guarantee. Direct access. No juniors. 14-day proposal validity.',
    options: [
      {
        name: 'The Audit',
        scope: 'Phase 1',
        price: '£3,000',
        priceNote: 'one-time, up-front',
        features: [
          { text: 'GTM Strategy Document' },
          { text: '90-Day Execution Roadmap' },
          { text: 'Competitive analysis' },
          { text: 'ICP definition' },
          { text: 'Buyer journey mapping' },
        ],
        recommended: false,
      },
      {
        name: 'The Full Build',
        scope: 'Phase 1 + 2',
        price: '£8,000–12,000',
        priceNote: 'one-time or 50/50 split',
        features: [
          { text: 'Everything in The Audit' },
          { text: 'Landing pages designed + developed' },
          { text: 'HubSpot automation setup' },
          { text: 'Cold outreach system' },
          { text: 'Full funnel build' },
          { text: 'Analytics & tracking' },
        ],
        recommended: true,
      },
      {
        name: 'Build + Partner',
        scope: 'Phase 1 + 2 + 3',
        price: '£10,000–15,000',
        priceNote: 'build + £2,500–3,500/mo retainer',
        features: [
          { text: 'Everything in The Full Build' },
          { text: 'Monthly performance reviews' },
          { text: 'A/B testing & optimisation' },
          { text: 'Campaign adjustments' },
          { text: 'Strategic check-ins' },
          { text: 'Fractional growth partner' },
        ],
        recommended: false,
      },
    ],
  },
  faq: {
    eyebrow: '// FAQ',
    heading: "Questions you're probably asking.",
    items: [
      {
        question: 'Why up-front payment?',
        answer:
          "It aligns incentives. I deliver a fixed outcome, not padded hours. If deliverables don't meet agreed standards, money back.",
      },
      {
        question: 'What if my product is too niche?',
        answer:
          "That's ideal. I specialise in B2B tech with technical buyers. The more specific, the more precise the targeting.",
      },
      {
        question: 'What happens after the build?',
        answer:
          'You own everything. The system runs without me. The retainer exists if you want ongoing optimisation — not required.',
      },
      {
        question: 'How is this different from an agency?',
        answer:
          'You work directly with me. No account managers, no juniors, no handoffs. One person, end to end.',
      },
      {
        question: "Can't I just hire a junior marketer?",
        answer:
          "You can. They'll need 6-12 months to ramp up, won't know how to build landing pages or automation, and will need managing. I'm operational from week 1.",
      },
    ],
  },
  contact: {
    eyebrow: '// START_HERE',
    heading: 'A growth engine running without you thinking about it.',
    description:
      "One discovery call. No pitch decks. No pressure. Just a conversation to find out if we're a good fit.",
    ctaText: 'Book a Discovery Call',
    ctaLink: 'mailto:hello@gst.studio',
    email: 'hello@gst.studio',
    socials: [
      { name: 'Twitter', url: '#' },
      { name: 'Instagram', url: '#' },
      { name: 'LinkedIn', url: '#' },
    ],
  },
}

/* ── Page (server component) ────────────────────────────────────── */

export default async function HomePage() {
  let data: Homepage = fallback

  try {
    const payload = await getPayload({ config })
    const homepage = await payload.findGlobal({ slug: 'homepage' }) as Homepage

    // Use CMS data if it has been populated (check if hero heading exists)
    if (homepage?.hero?.headingLine1) {
      data = homepage
    }
  } catch {
    // CMS unavailable — use fallback silently
  }

  return <HomepageContent data={data} />
}
