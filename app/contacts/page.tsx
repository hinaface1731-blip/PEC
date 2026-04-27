import ContactsContent from '@/components/contacts/contacts-content'
import { PageLayout } from '@/components/page-layout'

export const metadata = {
  title: 'Контакты — Полярная Экспедиционная Компания',
  description: 'Контакты Полярной Экспедиционной Компании. Телефон, email, адрес в Красноярске.',
}

export default function ContactsPage() {
  return (
    <PageLayout>
      <ContactsContent />
    </PageLayout>
  )
}
