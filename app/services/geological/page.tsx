import { PageLayout } from '@/components/page-layout'
import { GeologicalContent } from '@/components/services/geological-content'

export const metadata = {
  title: 'Геологические работы — Полярная Экспедиционная Компания',
  description: 'Геологическое картирование, поисковые маршруты, шлиховое опробование, документация горных выработок. 120+ проектов, 4 500 км маршрутов.',
}

export default function GeologicalPage() {
  return (
    <PageLayout>
      <GeologicalContent />
    </PageLayout>
  )
}
