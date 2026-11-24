import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from "@/components/page-layout"
import { EquipmentContent } from "@/components/equipment/equipment-content"

export const metadata = localizedMetadata('/equipment', 'ru')

export default function EquipmentPage() {
  return (
    <PageLayout>
      <EquipmentContent />
    </PageLayout>
  )
}
