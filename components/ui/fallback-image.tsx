'use client'

import { useEffect, useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { ImageOff } from 'lucide-react'

/**
 * next/image с заглушкой: если файла нет или он не загрузился,
 * вместо «битой» картинки показывается нейтральный блок с иконкой.
 */
export function FallbackImage({ className = '', fill, width, height, alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [props.src])

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-[var(--bg3)] text-[var(--muted2)] ${fill ? 'absolute inset-0' : 'w-full aspect-[10/7]'} ${className}`}
      >
        <ImageOff className="w-8 h-8 opacity-60" />
      </div>
    )
  }

  return (
    <Image
      {...props}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
