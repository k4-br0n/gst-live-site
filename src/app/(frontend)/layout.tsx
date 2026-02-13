import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/SmoothScroll'
import { TimelineNav } from '@/components/layout/TimelineNav'
import { ScrollAtmosphere } from '@/components/ScrollAtmosphere'
import type { SiteSettings } from '@/payload-types'

async function getLogoText(): Promise<string> {
  try {
    const payload = await getPayload({ config })
    const settings = (await payload.findGlobal({ slug: 'site-settings' })) as SiteSettings
    return settings.brand?.logoText || 'GST_'
  } catch {
    return 'GST_'
  }
}

export default async function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const logoText = await getLogoText()

  return (
    <SmoothScroll>
      <ScrollAtmosphere>
        <Header logoText={logoText} />
        <TimelineNav />
        <main>{children}</main>
        <Footer logoText={logoText} />
      </ScrollAtmosphere>
    </SmoothScroll>
  )
}
