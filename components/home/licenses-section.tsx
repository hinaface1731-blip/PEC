'use client'

import { useLanguage } from '@/components/language-provider'
import { Award, ShieldCheck, FlaskConical, Lock } from 'lucide-react'
import { engineeringSroMembership } from '@/lib/company-licenses'
import Link from '@/components/localized-link'

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
    titleRu: 'Членство в СРО',
    titleEn: 'SRO Membership',
    descRu: `Ассоциация «ЭкспертИзыскания» · запись № ${engineeringSroMembership.number}`,
    descEn: `ExpertIzyskaniya Association · Record No. ${engineeringSroMembership.number}`,
    link: {
      href: engineeringSroMembership.registryUrl,
      labelRu: 'Открыть запись в реестре',
      labelEn: 'View registry entry',
    },
  },
  {
    icon: FlaskConical,
    titleRu: 'Полевая лаборатория «Золотинка»',
    titleEn: 'Zolotinka Field Laboratory',
    descRu: 'Определение содержания золота в пробах на месте работ',
    descEn: 'On-site determination of gold content in samples',
    link: {
      href: '/services/lab',
      labelRu: 'Лабораторные исследования',
      labelEn: 'Laboratory services',
    },
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
            {t('Лицензии, допуски и лаборатория', 'Licenses, Permits & Laboratory')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {licenses.map((license) => (
            <div
              key={license.titleRu}
              className="card text-center hover:border-[var(--accent)]/30"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--accent-glow)] flex items-center justify-center">
                <license.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                {t(license.titleRu, license.titleEn)}
              </h3>
              <p className="text-sm text-[var(--muted)]">
                {t(license.descRu, license.descEn)}
              </p>
              {license.link && (
                <Link href={license.link.href} className="mt-3 inline-block text-sm font-medium text-accent-foreground hover:underline">
                  {t(license.link.labelRu, license.link.labelEn)}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
