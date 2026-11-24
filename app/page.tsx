import { localizedMetadata } from '@/lib/site-metadata'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { ProjectsSection } from '@/components/home/projects-section'
import { GeographySection } from '@/components/home/geography-section'
import { LicensesSection } from '@/components/home/licenses-section'
import { PageLayout } from '@/components/page-layout'

export const metadata = localizedMetadata('/', 'ru')

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <GeographySection />
      <LicensesSection />
    </PageLayout>
  )
}
