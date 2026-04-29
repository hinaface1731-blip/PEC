import { PageLayout } from '@/components/page-layout'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { ProjectsSection } from '@/components/home/projects-section'
import { GeographySection } from '@/components/home/geography-section'
import { LicensesSection } from '@/components/home/licenses-section'
import { CycleSection } from '@/components/home/cycle-section'

export const metadata = {
  title: 'Полярная Экспедиционная Компания',
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
