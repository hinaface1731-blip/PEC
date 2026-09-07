import { PageLayout } from '@/components/page-layout'
import { EcologyContent } from '@/components/services/ecology-content'

export const metadata = {
  title: 'Экология и рекультивация — Полярная Экспедиционная Компания',
  description: 'ОВОС, экологический мониторинг, проекты рекультивации, прохождение ГЭЭ.',
}

export default function EcologyPage() {
  return (
    <PageLayout>
      <EcologyContent />
    </PageLayout>
  )
}
