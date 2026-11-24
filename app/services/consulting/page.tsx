import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { ConsultingContent } from '@/components/services/consulting-content'

export const metadata = localizedMetadata('/services/consulting', 'ru')

export default function ConsultingPage() {
  return (
    <PageLayout>
      <ConsultingContent />
    </PageLayout>
  )
}
