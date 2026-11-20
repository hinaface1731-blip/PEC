'use client'

import { useLanguage } from '@/components/language-provider'

export function ProjectPhotoCredit() {
  const { t } = useLanguage()

  return (
    <span className="pointer-events-none absolute right-2 bottom-2 z-10 rounded bg-black/65 px-2 py-1 text-xs leading-4 text-white">
      {t('Фото: Имя Фамилия', 'Photo: First Name Last Name')}
    </span>
  )
}
