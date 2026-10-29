import { PageLayout } from '@/components/page-layout'
import { LabContent } from '@/components/services/lab-content'

export const metadata = {
  title: 'Лабораторные исследования',
  description: 'Пробоподготовка, рентгенофлуоресцентный анализ, минералогические исследования и изготовление шлифов.',
}

export default function LabPage() {
  return (
    <PageLayout>
      <LabContent />
    </PageLayout>
  )
}
