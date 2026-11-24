import { localizedMetadata } from '@/lib/site-metadata'
import ContactsContent from '@/components/contacts/contacts-content'
import { PageLayout } from '@/components/page-layout'

export const metadata = localizedMetadata('/contacts', 'ru')

export default function ContactsPage() {
  return (
    <PageLayout>
      <ContactsContent />
    </PageLayout>
  )
}
