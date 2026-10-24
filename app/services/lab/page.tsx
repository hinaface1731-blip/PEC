import { PageLayout } from '@/components/page-layout'
import { LabContent } from '@/components/services/lab-content'

export const metadata = {
  title: 'Лабораторные исследования',
  description: 'ICP-MS анализ на 45 элементов, пробирный анализ драгметаллов, минералогия.',
}

export default function LabPage() {
  return (
    <PageLayout>
      <LabContent />
    </PageLayout>
  )
}
