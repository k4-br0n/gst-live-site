import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlocks } from '@/blocks/RenderBlocks'

type Args = {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const slugString = slug.join('/')

  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slugString },
    },
    depth: 2,
    limit: 1,
  })

  const pageData = page.docs[0]

  return {
    title: pageData?.meta?.title || pageData?.title,
    description: pageData?.meta?.description || undefined,
  }
}

export default async function Page({ params }: Args) {
  const { slug } = await params
  const slugString = slug.join('/')

  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slugString },
    },
    depth: 2,
    limit: 1,
  })

  const pageData = page.docs[0]

  if (!pageData) {
    notFound()
  }

  return <RenderBlocks blocks={pageData.layout} />
}
