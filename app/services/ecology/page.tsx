import { PageLayout } from '@/components/page-layout'
import { EcologyContent } from '@/components/services/ecology-content'

export const metadata = {
  title: 'Экология и рекультивация — Полярная Экспедиционная Компания',
  description: 'ОВОС, экологический мониторинг, проекты рекультивации, прохождение ГЭЭ. 30+ проектов ОВОС, 250+ га рекультивации.',
}

export default function EcologyPage() {
  return (
    <PageLayout>
      <EcologyContent />
    </PageLayout>
  )
}
