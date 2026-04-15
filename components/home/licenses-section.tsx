'use client'

import { useLanguage } from '@/components/language-provider'
import { Award, ShieldCheck, FlaskConical, Lock } from 'lucide-react'

const licenses = [
  {
    icon: Award,
    titleRu: 'Лицензия Роснедра',
    titleEn: 'Rosnedra License',
    descRu: 'На геологическое изучение недр',
    descEn: 'For geological study of subsoil',
  },
  {
    icon: ShieldCheck,
    titleRu: 'Свидетельство СРО',
    titleEn: 'SRO Certificate',
    descRu: 'Инженерных изысканий',
    descEn: 'Engineering surveys',
  },
  {
    icon: FlaskConical,
    titleRu: 'Аттестат аккредитации',
    titleEn: 'Accreditation Certificate',
    descRu: 'Аккредитованная лаборатория',
    descEn: 'Accredited laboratory',
  },
  {
    icon: Lock,
    titleRu: 'Допуск к гостайне',
    titleEn: 'State Secret Clearance',
    descRu: 'Работа с секретными материалами',
    descEn: 'Access to classified materials',
  },
]

export function LicensesSection() {
  const { t } = useLanguage()

  return (
    <section className="section bg-[var(--bg2)]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
            {t('Лицензии и допуски', 'Licenses & Permits')}
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            {t(
              'Все необходимые разрешения для выполнения геологоразведочных работ',
              'All necessary permits for geological exploration work'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {licenses.map((license) => (
            <div
              key={license.titleRu}
              className="card text-center hover:border-[var(--accent)]/30"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--accent-glow)] flex items-center justify-center">
                <license.icon className="w-7 h-7 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                {t(license.titleRu, license.titleEn)}
              </h3>
              <p className="text-sm text-[var(--muted)]">
                {t(license.descRu, license.descEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
