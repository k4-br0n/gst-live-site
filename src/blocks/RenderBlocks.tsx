import React from 'react'
import { HeroBlock } from './Hero/Component'
import { ContentWithImageBlock } from './ContentWithImage/Component'
import { CTABlock } from './CTA/Component'
import { FeaturesBlock } from './Features/Component'
import { TestimonialsBlock } from './Testimonials/Component'

const blockComponents: Record<string, React.FC<any>> = {
  hero: HeroBlock,
  contentWithImage: ContentWithImageBlock,
  cta: CTABlock,
  features: FeaturesBlock,
  testimonials: TestimonialsBlock,
}

type Props = {
  blocks: any[] | null | undefined
}

export function RenderBlocks({ blocks }: Props) {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, index) => {
        const Block = blockComponents[block.blockType]

        if (!Block) {
          return null
        }

        return <Block key={block.id || index} {...block} />
      })}
    </>
  )
}
