import { PageLayout } from '@/components/page-layout'
import { ConsultingContent } from '@/components/services/consulting-content'

export const metadata = {
  title: 'Проектирование и консалтинг — Полярная Экспедиционная Компания',
  description: 'ТЭО кондиций, подсчёт запасов ГКЗ/ТКЗ, проектирование ГРР, оценка ресурсов JORC.',
}

export default function ConsultingPage() {
  return (
    <PageLayout>
      <ConsultingContent />
    </PageLayout>
  )
}
