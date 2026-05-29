'use client'

import { Download, Shield, Award, FileText, Compass } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { FadeIn } from '@/components/fade-in'

const licenseInfo = {
  numberRu: 'Л037-00109-24/03737982',
  numberEn: 'L037-00109-24/03737982',
  dateRu: '13 ноября 2025 г.',
  dateEn: 'November 13, 2025',
  authorityRu: 'Енисейское управление Ростехнадзора',
  authorityEn: 'Yenisei Office of Rostechnadzor',
  termRu: 'Бессрочно',
  termEn: 'Unlimited',
  activityRu: 'Производство маркшейдерских работ',
  activityEn: 'Mining surveying operations',
  documents: [
    {
      titleRu: 'Уведомление о предоставлении лицензии',
      titleEn: 'License Grant Notification',
      url: '/docs/license-marksheyderskie-raboty.pdf',
    },
    {
      titleRu: 'Выписка из реестра лицензий',
      titleEn: 'License Registry Extract',
      url: '/docs/vypiska-reestr-license.pdf',
    },
  ],
  works: [
    { ru: 'Пространственно-геометрические измерения горных разработок', en: 'Spatial-geometric measurements of mining operations' },
    { ru: 'Учет и обоснование объемов горных разработок', en: 'Accounting and justification of mining volumes' },
    { ru: 'Создание маркшейдерских опорных и съемочных сетей', en: 'Mine survey control and shooting networks creation' },
    { ru: 'Обоснование границ горных отводов', en: 'Mining allotment boundaries justification' },
    { ru: 'Определение опасных зон горных разработок', en: 'Mining hazardous zones identification' },
    { ru: 'Проектирование маркшейдерских работ', en: 'Mine surveying design' },
    { ru: 'Ведение горной графической документации', en: 'Mining graphic documentation maintenance' },
    { ru: 'Наблюдения за сдвижением земной поверхности', en: 'Earth surface displacement monitoring' },
  ],
}

export function LicenseSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-[var(--bg2)]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="section-eyebrow">
              <Shield className="w-4 h-4" />
              {t('Лицензия', 'License')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4">
              {t('Лицензия Ростехнадзора', 'Rostechnadzor License')}
            </h2>
            <p className="text-[var(--fg2)] max-w-2xl mx-auto">
              {t(
                'Маркшейдерское обеспечение выполняемых работ осуществляется на основании лицензии Федеральной службы по экологическому, технологическому и атомному надзору',
                'Mining surveying support is provided under the license of the Federal Service for Ecological, Technological and Nuclear Supervision'
              )}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="card-enhanced p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* License Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--fg)]">
                      {t(licenseInfo.activityRu, licenseInfo.activityEn)}
                    </h3>
                    <p className="text-sm text-[var(--fg2)]">
                      {t(licenseInfo.authorityRu, licenseInfo.authorityEn)}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-[var(--bg)]">
                    <p className="text-xs text-[var(--fg2)] mb-1">{t('Регистрационный номер', 'Registration Number')}</p>
                    <p className="font-mono text-sm font-semibold text-[var(--fg)]">{t(licenseInfo.numberRu, licenseInfo.numberEn)}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg)]">
                    <p className="text-xs text-[var(--fg2)] mb-1">{t('Дата выдачи', 'Issue Date')}</p>
                    <p className="font-semibold text-[var(--fg)]">{t(licenseInfo.dateRu, licenseInfo.dateEn)}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg)]">
                    <p className="text-xs text-[var(--fg2)] mb-1">{t('Срок действия', 'Validity')}</p>
                    <p className="font-semibold text-[var(--accent)]">{t(licenseInfo.termRu, licenseInfo.termEn)}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg)]">
                    <p className="text-xs text-[var(--fg2)] mb-1">{t('Статус', 'Status')}</p>
                    <p className="font-semibold text-green-500">{t('Действующая', 'Active')}</p>
                  </div>
                </div>

                {/* Download Documents */}
                <div className="flex flex-wrap gap-3">
                  {licenseInfo.documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 text-[var(--accent)] text-sm font-medium transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {t(doc.titleRu, doc.titleEn)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Licensed Works */}
              <div className="flex-1">
                <h4 className="font-semibold text-[var(--fg)] mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[var(--accent)]" />
                  {t('Лицензируемые виды работ', 'Licensed Work Types')}
                </h4>
                <ul className="space-y-2">
                  {licenseInfo.works.map((work, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--fg2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                      {t(work.ru, work.en)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-enhanced p-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h4 className="font-semibold text-[var(--fg)] mb-2">
                {t('Специалисты:', 'Specialists:')}
              </h4>
              <p className="text-sm text-[var(--fg2)]">
                {t(
                  'Сотрудники маркшейдерской службы имеют профессиональное образование, проходят обязательное повышение квалификации, имеют необходимые аттестации по промышленной безопасности для безопасной работы на объектах горных, буровых работ, опасных производственных объектах.',
                  'Employees of the mine surveying service have professional education, undergo mandatory advanced training, and have the necessary industrial safety certifications for safe work at mining, drilling, and hazardous production facilities.'
                )}
              </p>
            </div>

            <div className="card-enhanced p-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h4 className="font-semibold text-[var(--fg)] mb-2">
                {t('Высокие стандарты', 'High standards')}
              </h4>
              <p className="text-sm text-[var(--fg2)]">
                {t(
                  'Работы выполняются в соответствии с требованиями законодательства РФ и локальными нормативными актами компании. Осуществляется регулярный внутренний контроль за качеством работ.',
                  'Work is performed in accordance with Russian legislation and company regulatory documents. Regular internal quality control is carried out.'
                )}
              </p>
            </div>

            <div className="card-enhanced p-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h4 className="font-semibold text-[var(--fg)] mb-2">
                {t('Оборудование:', 'Equipment:')}
              </h4>
              <p className="text-sm text-[var(--fg2)]">
                {t(
                  'Парк оборудования состоит из высокоточных, точных и технических средств измерений. Все оборудование проходит обязательные метрологические поверки.',
                  'The equipment park consists of high-precision, accurate, and technical measuring instruments. All equipment undergoes mandatory metrological inspections.'
                )}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}