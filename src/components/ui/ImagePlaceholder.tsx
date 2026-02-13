import { ImageIcon } from 'lucide-react'

type Props = {
  /** Label shown inside the placeholder (e.g. "PORTRAIT", "WORKING SHOT") */
  label?: string
  /** When provided, renders an <img> instead of the placeholder */
  src?: string | null
  alt?: string
  /** CSS class for the outer container — use for sizing */
  className?: string
  /** 'rectangular' (default) or 'circular' */
  shape?: 'rectangular' | 'circular'
}

export function ImagePlaceholder({
  label = 'IMAGE',
  src,
  alt = '',
  className = '',
  shape = 'rectangular',
}: Props) {
  const shapeClasses = shape === 'circular' ? 'rounded-full' : 'rounded-sm'

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`object-cover ${shapeClasses} ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border-2 border-dashed border-border bg-surface-alt/30 ${shapeClasses} ${className}`}
    >
      <ImageIcon className="h-6 w-6 text-text-dim/50" />
      <span className="font-mono text-[10px] tracking-widest text-text-dim/50">
        {label}
      </span>
    </div>
  )
}
