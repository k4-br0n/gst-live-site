import React from 'react'

type Props = {
  heading: string
  content: any // Lexical rich text JSON
  image: {
    url: string
    alt?: string
  }
  imagePosition?: 'left' | 'right'
}

export function ContentWithImageBlock({
  heading,
  content,
  image,
  imagePosition = 'right',
}: Props) {
  return (
    <section className="bg-white py-24">
      <div
        className={`mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 ${
          imagePosition === 'left' ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-gray-600">
            {/* Render rich text - simplified for now, replace with Payload's serializer */}
            {content && typeof content === 'object' && content.root?.children ? (
              content.root.children.map((node: any, i: number) => {
                if (node.type === 'paragraph') {
                  const text = node.children
                    ?.map((child: any) => child.text || '')
                    .join('')
                  return text ? <p key={i}>{text}</p> : null
                }
                return null
              })
            ) : (
              <p>{String(content || '')}</p>
            )}
          </div>
        </div>
        {image?.url && (
          <div className="overflow-hidden rounded-2xl">
            <img
              src={image.url}
              alt={image.alt || ''}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  )
}
