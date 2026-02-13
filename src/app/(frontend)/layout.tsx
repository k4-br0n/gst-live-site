import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SmoothScroll } from '@/components/SmoothScroll'
import { TimelineNav } from '@/components/layout/TimelineNav'

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SmoothScroll>
      <Header />
      <TimelineNav />
      <main className="md:ml-[72px]">{children}</main>
      <div className="md:ml-[72px]">
        <Footer />
      </div>
    </SmoothScroll>
  )
}
