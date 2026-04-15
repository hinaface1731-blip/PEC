import { PageLayout } from '@/components/page-layout'
import { SurveyContent } from '@/components/services/survey-content'

export const metadata = {
  title: 'Маркшейдерские работы — ПЭК',
  description: 'GNSS-съёмка RTK, тахеометрия, лазерное сканирование, аэрофотосъёмка с БПЛА. 50+ проектов, 3 000+ га топопланов.',
}

export default function SurveyPage() {
  return (
    <PageLayout>
      <SurveyContent />
    </PageLayout>
  )
}
