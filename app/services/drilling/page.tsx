import { PageLayout } from '@/components/page-layout'
import { DrillingContent } from '@/components/services/drilling-content'

export const metadata = {
  title: 'Буровые работы — Полярная Экспедиционная Компания',
  description: 'Колонковое бурение до 1200 м, шарошечное бурение, гидрогеологические скважины. 40 000 м/год, 17 станков, 94% выход керна.',
}

export default function DrillingPage() {
  return (
    <PageLayout>
      <DrillingContent />
    </PageLayout>
  )
}
