import { PageLayout } from '@/components/page-layout'
import { LogisticsContent } from '@/components/services/logistics-content'

export const metadata = {
  title: 'Логистика и снабжение — Полярная Экспедиционная Компания',
  description: 'Северный завоз, доставка грузов в Арктику и Сибирь, снабжение удалённых объектов, экспедиционное сопровождение. Надёжная логистика для ГРР.',
}

export default function LogisticsPage() {
  return (
    <PageLayout>
      <LogisticsContent />
    </PageLayout>
  )
}