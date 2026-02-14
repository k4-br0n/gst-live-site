type Props = {
  className?: string
}

export function BlinkCursor({ className = '' }: Props) {
  return (
    <span className={`animate-blink ${className}`.trim()} aria-hidden>
      _
    </span>
  )
}
