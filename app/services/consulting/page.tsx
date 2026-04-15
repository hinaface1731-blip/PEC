import { PageLayout } from '@/components/page-layout'
import { ConsultingContent } from '@/components/services/consulting-content'

export const metadata = {
  title: 'Проектирование и консалтинг — ПЭК',
  description: 'ТЭО кондиций, подсчёт запасов ГКЗ/ТКЗ, проектирование ГРР, оценка ресурсов JORC. 15+ проектов ГКЗ, 30+ ТЭО.',
}

export default function ConsultingPage() {
  return (
    <PageLayout>
      <ConsultingContent />
    </PageLayout>
  )
}
