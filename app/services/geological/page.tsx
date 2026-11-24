import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { GeologicalContent } from '@/components/services/geological-content'

export const metadata = localizedMetadata('/services/geological', 'ru')

export default function GeologicalPage() {
  return (
    <PageLayout>
      <GeologicalContent />
    </PageLayout>
  )
}
