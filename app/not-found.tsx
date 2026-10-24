import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Страница не найдена',
}

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[70vh] py-24">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-foreground mb-4">Страница не найдена</h2>
          <p className="text-muted-foreground mb-6">
            Извините, запрашиваемая страница не существует или была перемещена.
          </p>
          <Button asChild>
            <Link href="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  )
}
