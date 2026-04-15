import { PageLayout } from '@/components/page-layout'
import { ServicesHubContent } from '@/components/services/services-hub-content'

export const metadata = {
  title: 'Услуги — ПЭК',
  description: 'Полный цикл геологоразведочных работ: геология, геофизика, бурение, маркшейдерия, лаборатория, проектирование, экология.',
}

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesHubContent />
    </PageLayout>
  )
}
