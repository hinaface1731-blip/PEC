import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { ServicesSection } from '@/components/home/services-section'

export const metadata = localizedMetadata('/services', 'ru')

export default function ServicesPage() {
  return (
    <PageLayout>
      <ServicesSection variant="page" />
    </PageLayout>
  )
}
