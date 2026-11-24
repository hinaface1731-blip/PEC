import { PageLayout } from '@/components/page-layout'
import { GeophysicsMethodContent } from '@/components/services/geophysics-method-content'
import { localizedMetadata } from '@/lib/site-metadata'

export const metadata = localizedMetadata('/services/geophysics/electrical', 'ru')

export default function Page() {
  return (
    <PageLayout>
      <GeophysicsMethodContent method="electrical" />
    </PageLayout>
  )
}
