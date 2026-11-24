import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { InvestorsContent } from '@/components/investors/investors-content'

export const metadata = localizedMetadata('/investors', 'ru')

export default function InvestorsPage() {
  return (
    <PageLayout>
      <InvestorsContent />
    </PageLayout>
  )
}