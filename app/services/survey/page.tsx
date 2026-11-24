import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from '@/components/page-layout'
import { SurveyContent } from '@/components/services/survey-content'

export const metadata = localizedMetadata('/services/survey', 'ru')

export default function SurveyPage() {
  return (
    <PageLayout>
      <SurveyContent />
    </PageLayout>
  )
}
