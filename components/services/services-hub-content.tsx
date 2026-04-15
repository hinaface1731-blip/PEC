'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { CTAForm } from '@/components/cta-form'
import { Mountain, Radio, Drill, Compass, FlaskConical, FileText, Leaf, ArrowRight, ArrowUpRight, Users, Calendar } from 'lucide-react'

const steps = [
  { num: 1, icon: Mountain, labelRu: 'Геология', labelEn: 'Geology' },
  { num: 2, icon: Radio, labelRu: 'Геофизика', labelEn: 'Geophysics' },
  { num: 3, icon: Drill, labelRu: 'Бурение', labelEn: 'Drilling' },
  { num: 4, icon: Compass, labelRu: 'Маркшейдерия', labelEn: 'Surveying' },
  { num: 5, icon: FlaskConical, labelRu: 'Лаборатория', labelEn: 'Laboratory' },
  { num: 6, icon: FileText, labelRu: 'Проектирование', labelEn: 'Design' },
  { num: 7, icon: Leaf, labelRu: 'Экология', labelEn: 'Ecology' },
]

const services = [
  {
    icon: Mountain,
    href: '/services/geological',
    titleRu: 'Геологические работы',
    titleEn: 'Geological Works',
    descRu: 'Геологическое картирование 1:10 000–1:200 000, поисковые маршруты, шлиховое опробование, проходка канав и шурфов, литолого-стратиграфическое расчленение, структурно-тектонический анализ.',
    descEn: 'Geological mapping 1:10,000–1:200,000, exploration routes, placer sampling, trenching and pitting, lithological-stratigraphic subdivision, structural-tectonic analysis.',
  },
  {
    icon: Radio,
    href: '/services/geophysics',
    titleRu: 'Геофизические работы',
    titleEn: 'Geophysical Works',
    descRu: 'АМТЗ, ТЭМ/ЗСБ, магниторазведка, гравиразведка, ВЭРП, сейсморазведка МОГТ, электротомография, метод ВП, каротаж скважин.',
    descEn: 'AMT, TEM, magnetic survey, gravity survey, VERP, MOGТ seismic survey, electrical tomography, IP method, well logging.',
  },
  {
    icon: Drill,
    href: '/services/drilling',
    titleRu: 'Буровые работы',
    titleEn: 'Drilling Works',
    descRu: 'Колонковое бурение ССК до 1200 м, шарошечное бурение, гидрогеологические скважины, инженерно-геологические скважины, наклонно-направленное бурение.',
    descEn: 'SSK core drilling up to 1200m, rotary drilling, hydrogeological wells, engineering-geological wells, directional drilling.',
  },
  {
    icon: Compass,
    href: '/services/survey',
    titleRu: 'Маркшейдерские работы',
    titleEn: 'Survey Works',
    descRu: 'GNSS-съёмка RTK, тахеометрическая съёмка, лазерное сканирование, ГИС-привязка, аэрофотосъёмка с БПЛА, создание ЦМР.',
    descEn: 'RTK GNSS surveying, total station surveying, laser scanning, GIS referencing, UAV aerial photography, DEM creation.',
  },
  {
    icon: FlaskConical,
    href: '/services/lab',
    titleRu: 'Лабораторные исследования',
    titleEn: 'Laboratory Research',
    descRu: 'ICP-MS анализ на 45 элементов, пробирный анализ драгметаллов, атомно-абсорбционный анализ, XRF, минералогия, физико-механические испытания грунтов.',
    descEn: 'ICP-MS analysis for 45 elements, fire assay of precious metals, atomic absorption analysis, XRF, mineralogy, soil mechanical testing.',
  },
  {
    icon: FileText,
    href: '/services/consulting',
    titleRu: 'Проектирование и консалтинг',
    titleEn: 'Design & Consulting',
    descRu: 'ТЭО кондиций, подсчёт запасов ГКЗ/ТКЗ, проектирование ГРР, ГИС-моделирование, оценка ресурсов JORC, сопровождение лицензирования.',
    descEn: 'Feasibility studies, GKZ/TKZ resource estimation, GRR design, GIS modeling, JORC resource assessment, licensing support.',
  },
  {
    icon: Leaf,
    href: '/services/ecology',
    titleRu: 'Экология и рекультивация',
    titleEn: 'Ecology & Reclamation',
    descRu: 'Инженерно-экологические изыскания, ОВОС, экологический мониторинг, проекты рекультивации, прохождение ГЭЭ, паспортизация отходов.',
    descEn: 'Environmental engineering surveys, EIA, environmental monitoring, reclamation projects, state environmental review, waste certification.',
  },
]

const stats = [
  { value: '200+', labelRu: 'специалистов', labelEn: 'specialists', icon: Users },
  { value: '40 000 м', labelRu: 'бурения/год', labelEn: 'drilling/year', icon: Drill },
  { value: '17', labelRu: 'лет опыта', labelEn: 'years experience', icon: Calendar },
]

export function ServicesHubContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="section bg-[var(--bg2)]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[var(--text)] mb-6">
              {t('Полный цикл геологоразведочных работ', 'Full Cycle of Geological Exploration')}
            </h1>
            <p className="text-xl text-[var(--muted)] leading-relaxed">
              {t(
                'Все этапы ГРР — от проектирования до защиты запасов — выполняются собственными силами без привлечения субподрядчиков',
                'All GRR stages — from design to resource approval — are performed in-house without subcontractors'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 border-b border-[var(--border)]">
        <div className="container mx-auto px-6">
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.num} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-[var(--accent-glow)] border border-[var(--accent)]/20 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-[var(--accent)]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[var(--accent)] flex items-center justify-center text-white text-xs font-bold">
                      {step.num}
                    </div>
                  </div>
                  <span className="mt-3 text-sm font-medium text-[var(--text)]">
                    {t(step.labelRu, step.labelEn)}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-[var(--muted2)] mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center p-4 rounded-xl bg-[var(--bg2)] border border-[var(--border)]">
                <div className="relative mb-2">
                  <step.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <span className="text-xs text-[var(--muted2)]">{step.num}</span>
                <span className="text-sm font-medium text-[var(--text)] text-center">{t(step.labelRu, step.labelEn)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="card group flex gap-6 hover:border-[var(--accent)]/30"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center group-hover:bg-[var(--accent)] transition-colors">
                    <service.icon className="w-7 h-7 text-[var(--accent)] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                    {t(service.titleRu, service.titleEn)}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {t(service.descRu, service.descEn)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[var(--bg2)]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--text)] text-center mb-10">
            {t('Ключевые мощности', 'Key Capabilities')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.labelRu} className="card text-center">
                <stat.icon className="w-8 h-8 text-[var(--accent)] mx-auto mb-3" />
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{t(stat.labelRu, stat.labelEn)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAForm />
    </>
  )
}
