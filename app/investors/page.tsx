import { PageLayout } from '@/components/page-layout'
import { InvestorsContent } from '@/components/investors/investors-content'

export const metadata = {
  title: 'Инвесторам — Юниорные проекты ПЭК',
  description: 'Инвестиционная привлекательность юниорных проектов на Таймыре. Лицензии на медно-никелевое оруденение. Потенциал ресурсов, геологические модели, перспективы.',
}

export default function InvestorsPage() {
  return (
    <PageLayout>
      <InvestorsContent />
    </PageLayout>
  )
}