'use client'

import { useEffect, useRef, useState } from 'react'
import { BlinkCursor } from '@/components/ui/BlinkCursor'

type Props = {
  text: string
  speed?: number
  onComplete?: () => void
  className?: string
  cursorClassName?: string
  /** When true, typing starts only when the element scrolls into view */
  startWhenVisible?: boolean
  /** Delay in ms before typing starts (e.g. to wait for fade-in). Used with startWhenVisible. */
  startDelay?: number
}

export function TypingText({
  text,
  speed = 60,
  onComplete,
  className = '',
  cursorClassName = 'text-accent',
  startWhenVisible = false,
  startDelay = 0,
}: Props) {
  const [displayedText, setDisplayedText] = useState('')
  const [hasStarted, setHasStarted] = useState(!startWhenVisible)
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    if (startWhenVisible && !wrapperRef.current) return

    if (startWhenVisible) {
      let timeoutId: ReturnType<typeof setTimeout> | null = null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting && !hasStarted) {
            timeoutId = setTimeout(() => setHasStarted(true), startDelay)
          }
        },
        { threshold: 0.1, rootMargin: '50px' },
      )
      observer.observe(wrapperRef.current!)
      return () => {
        observer.disconnect()
        if (timeoutId) clearTimeout(timeoutId)
      }
    }
  }, [startWhenVisible, hasStarted, startDelay])

  useEffect(() => {
    if (!hasStarted) return

    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        onCompleteRef.current?.()
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, hasStarted])

  return (
    <span ref={wrapperRef} className={className}>
      {displayedText}
      <BlinkCursor className={cursorClassName} />
    </span>
  )
}
