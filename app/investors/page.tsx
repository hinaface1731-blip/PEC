import { PageLayout } from '@/components/page-layout'
import { InvestorsContent } from '@/components/investors/investors-content'

export const metadata = {
  title: 'Инвесторам — медь Таймыра',
  description: 'Инвестиционное предложение: три лицензионные площади Широкинского узла на Таймыре. Прогнозные ресурсы 6,5 млн т меди и 170 т золота, инвестиции 1,1 млрд ₽, дорожная карта 2026–2027.',
}

export default function InvestorsPage() {
  return (
    <PageLayout>
      <InvestorsContent />
    </PageLayout>
  )
}