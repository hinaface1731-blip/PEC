'use client'

import { useLanguage } from '@/components/language-provider'

const showProjectPhotoCredit = false

export function ProjectPhotoCredit({ author }: { author: string }) {
  const { t } = useLanguage()
  const name = author.trim()

  if (!showProjectPhotoCredit || !name) return null

  return (
    <span className="pointer-events-none absolute right-2 bottom-2 z-10 rounded bg-black/65 px-2 py-1 text-xs leading-4 text-white">
      {t('Фото', 'Photo')}: {name}
    </span>
  )
}
