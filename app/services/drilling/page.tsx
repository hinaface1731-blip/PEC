import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { DrillingContent } from '@/components/services/drilling-content'

export const metadata = localizedMetadata('/services/drilling', 'ru')

export default function DrillingPage() {
  return (
    <PageLayout>
      <DrillingContent />
    </PageLayout>
  )
}
