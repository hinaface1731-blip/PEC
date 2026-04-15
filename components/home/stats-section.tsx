'use client'

import { useLanguage } from '@/components/language-provider'
import { Users, Drill, Calendar, FlaskConical } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '200+',
    labelRu: 'специалистов в штате',
    labelEn: 'specialists on staff',
  },
  {
    icon: Drill,
    value: '40 000',
    labelRu: 'метров бурения в год',
    labelEn: 'meters of drilling per year',
  },
  {
    icon: Calendar,
    value: '17',
    labelRu: 'лет работы в Арктике',
    labelEn: 'years in the Arctic',
  },
  {
    icon: FlaskConical,
    value: '1',
    labelRu: 'собственная лаборатория',
    labelEn: 'in-house laboratory',
  },
]

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
            {t('Мощности компании', 'Company Capabilities')}
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            {t(
              'Собственные ресурсы для выполнения полного цикла геологоразведочных работ',
              'Own resources to complete the full cycle of geological exploration'
            )}
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.labelRu} className="card text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[var(--accent-glow)] flex items-center justify-center">
                <stat.icon className="w-7 h-7 text-[var(--accent)]" />
              </div>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{t(stat.labelRu, stat.labelEn)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
