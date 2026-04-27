import { PageLayout } from '@/components/page-layout'
import { GeophysicsContent } from '@/components/services/geophysics-content'

export const metadata = {
  title: 'Геофизические работы — Полярная Экспедиционная Компания',
  description: 'АМТЗ, ТЭМ/ЗСБ, магниторазведка, гравиразведка, сейсморазведка, каротаж скважин. 85+ проектов, 5 000+ км профилей.',
}

export default function GeophysicsPage() {
  return (
    <PageLayout>
      <GeophysicsContent />
    </PageLayout>
  )
}
