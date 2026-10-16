import { PageLayout } from "@/components/page-layout"
import { AboutContent } from "@/components/about/about-content"

export const metadata = {
  title: 'О компании',
  description: 'Полярная Экспедиционная Компания — геологические, геофизические и буровые работы в Арктике и Сибири.',
}

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  )
}
