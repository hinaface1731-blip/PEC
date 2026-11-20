'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { t } = useLanguage()
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-md px-4">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t('Что-то пошло не так', 'Something went wrong')}</h2>
        <p className="text-muted-foreground mb-6">
          {t('Не удалось загрузить страницу. Попробуйте снова.', 'The page could not be loaded. Please try again.')}
        </p>
        <Button onClick={reset}>{t('Попробовать снова', 'Try again')}</Button>
      </div>
    </div>
  )
}
