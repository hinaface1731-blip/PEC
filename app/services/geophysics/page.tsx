import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { GeophysicsContent } from '@/components/services/geophysics-content'

export const metadata = localizedMetadata('/services/geophysics', 'ru')

export default function GeophysicsPage() {
  return (
    <PageLayout>
      <GeophysicsContent />
    </PageLayout>
  )
}
