import { PageLayout } from "@/components/page-layout"
import { ContactsContent } from "@/components/contacts/contacts-content"

export const metadata = {
  title: 'Контакты — ПЭК',
  description: 'Контакты Полярной Экспедиционной Компании. Телефон, email, адрес в Красноярске.',
}

export default function ContactsPage() {
  return (
    <PageLayout>
      <ContactsContent />
    </PageLayout>
  )
}
