import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { MiningContent } from '@/components/services/mining-content'

export const metadata = localizedMetadata('/services/mining', 'ru')

export default function MiningPage() {
  return (
    <PageLayout>
      <MiningContent />
    </PageLayout>
  )
}