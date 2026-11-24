import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from "@/components/page-layout"
import { AboutContent } from "@/components/about/about-content"

export const metadata = localizedMetadata('/about', 'ru')

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  )
}
