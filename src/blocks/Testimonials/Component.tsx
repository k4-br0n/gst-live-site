import React from 'react'
import { Quote } from 'lucide-react'

type Testimonial = {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: {
    url: string
    alt?: string
  }
  id?: string
}

type Props = {
  heading?: string
  testimonials: Testimonial[]
}

export function TestimonialsBlock({ heading, testimonials }: Props) {
  const gridCols =
    testimonials.length === 1
      ? 'max-w-2xl mx-auto'
      : testimonials.length === 2
        ? 'sm:grid-cols-2 max-w-4xl mx-auto'
        : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {heading && (
          <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
        )}

        <div className={`grid gap-8 ${gridCols}`}>
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial.id || index}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-brand-200" />
              <blockquote className="flex-1 text-lg leading-relaxed text-gray-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">
                {testimonial.avatar?.url && (
                  <img
                    src={testimonial.avatar.url}
                    alt={testimonial.avatar.alt || testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  {(testimonial.role || testimonial.company) && (
                    <p className="text-sm text-gray-500">
                      {[testimonial.role, testimonial.company]
                        .filter(Boolean)
                        .join(' at ')}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
