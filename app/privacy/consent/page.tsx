'use client'

import { PageLayout } from '@/components/page-layout'
import { useLanguage } from '@/components/language-provider'
import { personalDataOperator as operator } from '@/lib/personal-data-operator'
import { RESUME_CONSENT_VERSION } from '@/lib/resume'

export default function ResumeConsentPage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      <article className="mx-auto max-w-3xl px-4 pb-16 pt-32 sm:px-8">
        <h1 className="mb-8 font-display text-3xl font-bold sm:text-4xl">
          {t('Согласие на обработку персональных данных соискателя', 'Consent to the Processing of Applicant Personal Data')}
        </h1>
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p>
            {t(
              `Я даю согласие ${operator.nameRu} (ИНН ${operator.inn}, ОГРН ${operator.ogrn}, юридический адрес: ${operator.addressRu}) на обработку моих персональных данных для рассмотрения резюме и связи со мной по вопросу трудоустройства.`,
              `I consent to ${operator.nameEn} (INN ${operator.inn}, OGRN ${operator.ogrn}, registered address: ${operator.addressEn}) processing my personal data to review my application and contact me about employment.`
            )}
          </p>
          <p>
            {t(
              'Согласие распространяется на фамилию, имя, отчество, электронную почту, телефон, желаемую должность, сведения об опыте работы и другие данные, которые я указываю в форме или прикреплённом резюме.',
              'This consent covers my name, email address, telephone number, desired position, work experience, and any other information I provide in the form or attached résumé.'
            )}
          </p>
          <p>
            {t(
              'Согласие охватывает получение, запись, хранение, использование, передачу резюме в отдел кадров и удаление данных. Данные могут обрабатываться с использованием средств автоматизации и без них.',
              'This consent covers collecting, recording, storing, using and deleting my data, and forwarding my résumé to the HR department. My data may be processed by automated or manual means.'
            )}
          </p>
          <p>
            {t(
              'Согласие действует до завершения рассмотрения резюме или до его отзыва. Для отзыва согласия можно направить обращение по адресу',
              'This consent remains in effect until my application has been reviewed or I withdraw it. To withdraw consent, I can send a request to'
            )}{' '}
            <a href="mailto:info@polar-ec.ru" className="text-primary underline underline-offset-2">info@polar-ec.ru</a>.
          </p>
          <p className="border-t border-border pt-4 text-sm">
            {t('Редакция от', 'Version dated')} <time dateTime={RESUME_CONSENT_VERSION}>{RESUME_CONSENT_VERSION}</time>
          </p>
        </div>
      </article>
    </PageLayout>
  )
}
