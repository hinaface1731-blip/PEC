import { localizedMetadata } from '@/lib/site-metadata'
import { PageLayout } from "@/components/page-layout"
import { ProjectsContent } from "@/components/projects/projects-content"

export const metadata = localizedMetadata('/projects', 'ru')

export default function ProjectsPage() {
  return (
    <PageLayout>
      <ProjectsContent />
    </PageLayout>
  )
}
