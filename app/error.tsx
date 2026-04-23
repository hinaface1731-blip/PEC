'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-md px-4">
        <h2 className="text-2xl font-bold text-foreground mb-4">Что-то пошло не так</h2>
        <p className="text-muted-foreground mb-6">
          Извините, произошла ошибка при загрузке страницы. Пожалуйста, попробуйте снова.
        </p>
        <Button onClick={reset}>Попробовать снова</Button>
      </div>
    </div>
  )
}