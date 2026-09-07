import { PageLayout } from '@/components/page-layout'
import { DrillingContent } from '@/components/services/drilling-content'

export const metadata = {
  title: 'Буровые работы — Полярная Экспедиционная Компания',
  description: 'Колонковое бурение, шарошечное бурение, гидрогеологические скважины.',
}

export default function DrillingPage() {
  return (
    <PageLayout>
      <DrillingContent />
    </PageLayout>
  )
}
