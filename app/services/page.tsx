import { PageLayout } from '@/components/page-layout'
import { ServicesSection } from '@/components/home/services-section'

export const metadata = {
  title: 'Услуги',
  description: 'Геологические, геофизические, буровые, горные и маркшейдерские работы, логистика, лабораторные исследования, проектирование и экология.',
}

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesSection variant="page" />
    </PageLayout>
  )
}
