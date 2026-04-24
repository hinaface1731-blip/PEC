import { PageLayout } from '@/components/page-layout'
import { HeroSection } from '@/components/home/hero-section'

import { CycleSection } from '@/components/home/cycle-section'
import { ServicesSection } from '@/components/home/services-section'
import { ProjectsSection } from '@/components/home/projects-section'
import { GeographySection } from '@/components/home/geography-section'
import { LicensesSection } from '@/components/home/licenses-section'
import { CTAForm } from '@/components/cta-form'

export const metadata = {
  title: 'ПЭК — Полярная Экспедиционная Компания',
  description: 'Геологоразведка полного цикла в Арктике и Сибири. Геология, геофизика, бурение, маркшейдерия, лаборатория. 17 лет опыта, 30+ проектов.',
}

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesSection />
      <CycleSection />
      <ProjectsSection />
      <GeographySection />
      <LicensesSection />
    </PageLayout>
  )
}
