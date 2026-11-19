import { PageLayout } from '@/components/page-layout'
import { LabContent } from '@/components/services/lab-content'

export const metadata = {
  title: 'Лабораторные исследования',
  description: 'Пробоподготовка, минералогические исследования и определение золота в полевой аналитической лаборатории «Золотинка».',
}

export default function LabPage() {
  return (
    <PageLayout>
      <LabContent />
    </PageLayout>
  )
}
