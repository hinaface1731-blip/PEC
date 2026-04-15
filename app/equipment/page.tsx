import { PageLayout } from "@/components/page-layout"
import { EquipmentContent } from "@/components/equipment/equipment-content"

export const metadata = {
  title: 'Оборудование — ПЭК',
  description: 'Собственный парк бурового, геофизического, маркшейдерского и лабораторного оборудования. GNSS-приёмники, тахеометры, 3D-сканеры.',
}

export default function EquipmentPage() {
  return (
    <PageLayout>
      <EquipmentContent />
    </PageLayout>
  )
}
