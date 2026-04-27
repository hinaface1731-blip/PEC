import { PageLayout } from '@/components/page-layout'
import { MiningContent } from '@/components/services/mining-content'

export const metadata = {
  title: 'Горные работы — Полярная Экспедиционная Компания',
  description: 'Полный комплекс горных работ: вскрышные работы, добычные работы, буровзрывные работы, отработка россыпей. Опыт работы в Арктике и Сибири.',
}

export default function MiningPage() {
  return (
    <PageLayout>
      <MiningContent />
    </PageLayout>
  )
}