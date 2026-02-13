import React from 'react'
import * as LucideIcons from 'lucide-react'

type Feature = {
  icon?: string
  title: string
  description: string
  id?: string
}

type Props = {
  heading: string
  subtitle?: string
  features: Feature[]
}

function getIcon(name?: string) {
  if (!name) return null

  // Attempt to resolve the Lucide icon by name
  const Icon = (LucideIcons as Record<string, any>)[name]
  if (Icon && typeof Icon === 'function') {
    return <Icon className="h-6 w-6" />
  }

  return null
}

export function FeaturesBlock({ heading, subtitle, features }: Props) {
  const gridCols =
    features.length <= 2
      ? 'sm:grid-cols-2'
      : features.length === 3
        ? 'sm:grid-cols-2 lg:grid-cols-3'
        : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
          )}
        </div>

        <div className={`mt-16 grid gap-8 ${gridCols}`}>
          {features?.map((feature, index) => {
            const icon = getIcon(feature.icon)

            return (
              <div
                key={feature.id || index}
                className="rounded-xl border border-gray-100 bg-gray-50 p-8 transition-shadow hover:shadow-md"
              >
                {icon && (
                  <div className="mb-4 inline-flex rounded-lg bg-brand-100 p-3 text-brand-600">
                    {icon}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
