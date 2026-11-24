import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { LogisticsContent } from '@/components/services/logistics-content'

export const metadata = localizedMetadata('/services/logistics', 'ru')

export default function LogisticsPage() {
  return (
    <PageLayout>
      <LogisticsContent />
    </PageLayout>
  )
}