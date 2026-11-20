'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PageLayout } from '@/components/page-layout'
import { useLanguage } from '@/components/language-provider'

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <PageLayout>
      <div data-page-not-found className="flex items-center justify-center min-h-[70vh] py-24">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">{t('Страница не найдена', 'Page not found')}</h2>
          <p className="text-muted-foreground mb-6">
            {t('Запрашиваемая страница не существует или была перемещена.', 'The requested page does not exist or has moved.')}
          </p>
          <Button asChild>
            <Link href="/">{t('Вернуться на главную', 'Back to home')}</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
