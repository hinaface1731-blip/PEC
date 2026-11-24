import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { LabContent } from '@/components/services/lab-content'

export const metadata = localizedMetadata('/services/lab', 'ru')

export default function LabPage() {
  return (
    <PageLayout>
      <LabContent />
    </PageLayout>
  )
}
