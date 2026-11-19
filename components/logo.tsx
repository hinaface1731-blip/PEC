'use client'

import Image from 'next/image'
import { useLanguage } from './language-provider'

interface LogoProps {
  alt: string
  priority?: boolean
  variant?: 'navbar' | 'full'
}

export function Logo({ alt, priority, variant = 'navbar' }: LogoProps) {
  const { language, t } = useLanguage()
  const isFull = variant === 'full'
  const isRussian = language === 'ru'
  const iconSize = isFull ? 48 : 36
  const nameSize = isFull ? 'text-[26px]' : isRussian ? 'text-[17px] min-[400px]:text-[21px]' : 'text-[21px]'
  const subtitleSize = isFull ? 'text-[10px]' : 'text-[9px]'

  return (
    <span role="img" aria-label={alt} className="inline-flex max-w-full items-center gap-2.5">
      <Image
        src="/icon-192.png"
        alt=""
        width={iconSize}
        height={iconSize}
        priority={priority}
        className="shrink-0"
      />
      <span className="flex min-w-0 flex-col gap-1.5">
        <span className={`${nameSize} ${isRussian ? 'tracking-[0.1em]' : 'tracking-[0.14em]'} whitespace-nowrap leading-none font-medium text-[var(--text)]`}>
          {t('ПОЛЯРНАЯ', 'POLAR')}
        </span>
        <span className={`${subtitleSize} ${isRussian ? 'tracking-[0.04em]' : 'whitespace-nowrap tracking-[0.08em]'} leading-none font-medium text-[var(--muted)]`}>
          {t('ЭКСПЕДИЦИОННАЯ КОМПАНИЯ', 'EXPEDITION COMPANY')}
        </span>
      </span>
    </span>
  )
}
