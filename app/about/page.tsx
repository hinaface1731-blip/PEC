import { PageLayout } from "@/components/page-layout"
import { AboutContent } from "@/components/about/about-content"

export const metadata = {
  title: 'О компании',
  description: 'Полярная Экспедиционная Компания — геологоразведка полного цикла в Арктике и Сибири с 2008 года. 18+ лет опыта, 20+ проектов, 200+ сотрудников.',
}

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  )
}
