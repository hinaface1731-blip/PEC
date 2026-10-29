import { PageLayout } from '@/components/page-layout'
import { GeophysicsContent } from '@/components/services/geophysics-content'

export const metadata = {
  title: 'Геофизические работы',
  description: 'АМТЗ, ЗСБ, ВП, электротомография, магниторазведка (наземная и с БПЛА), каротаж скважин.',
}

export default function GeophysicsPage() {
  return (
    <PageLayout>
      <GeophysicsContent />
    </PageLayout>
  )
}
