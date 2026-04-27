import { PageLayout } from "@/components/page-layout"
import { ProjectsContent } from "@/components/projects/projects-content"

export const metadata = {
  title: 'Проекты — Полярная Экспедиционная Компания',
  description: 'Реализованные проекты геологоразведки: золото, медь, никель. Юниорные проекты на Таймыре с собственными лицензиями.',
}

export default function ProjectsPage() {
  return (
    <PageLayout>
      <ProjectsContent />
    </PageLayout>
  )
}
