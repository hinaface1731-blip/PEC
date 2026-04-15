'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  threshold?: number
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.12,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(24px)'
      case 'down':
        return 'translateY(-24px)'
      case 'left':
        return 'translateX(24px)'
      case 'right':
        return 'translateX(-24px)'
      case 'none':
        return 'none'
      default:
        return 'translateY(24px)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        transition: `opacity 0.6s ease, transform 0.6s ease`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
