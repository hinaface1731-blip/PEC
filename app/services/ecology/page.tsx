import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { EcologyContent } from '@/components/services/ecology-content'

export const metadata = localizedMetadata('/services/ecology', 'ru')

export default function EcologyPage() {
  return (
    <PageLayout>
      <EcologyContent />
    </PageLayout>
  )
}
