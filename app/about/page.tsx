import { PageLayout } from "@/components/page-layout"
import { AboutContent } from "@/components/about/about-content"

export const metadata = {
  title: 'О компании',
  description: 'Полярная Экспедиционная Компания — геологоразведка полного цикла в Арктике и Сибири с 2009 года. 30+ проектов, собственный парк техники.',
}

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutContent />
    </PageLayout>
  )
}
