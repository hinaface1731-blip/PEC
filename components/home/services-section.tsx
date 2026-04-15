'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { Mountain, Radio, Drill, Compass, FlaskConical, FileText, Leaf, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Mountain,
    href: '/services/geological',
    titleRu: 'Геологические работы',
    titleEn: 'Geological Works',
    descRu: 'Геологическое картирование, поисковые маршруты, опробование, документация горных выработок',
    descEn: 'Geological mapping, exploration routes, sampling, mine workings documentation',
  },
  {
    icon: Radio,
    href: '/services/geophysics',
    titleRu: 'Геофизические работы',
    titleEn: 'Geophysical Works',
    descRu: 'АМТЗ, ТЭМ/ЗСБ, магниторазведка, гравиразведка, сейсморазведка, каротаж скважин',
    descEn: 'AMT, TEM, magnetic and gravity surveys, seismic surveys, well logging',
  },
  {
    icon: Drill,
    href: '/services/drilling',
    titleRu: 'Буровые работы',
    titleEn: 'Drilling Works',
    descRu: 'Колонковое бурение, шарошечное бурение, гидрогеологические и инженерные скважины',
    descEn: 'Core drilling, rotary drilling, hydrogeological and engineering wells',
  },
  {
    icon: Compass,
    href: '/services/survey',
    titleRu: 'Маркшейдерские работы',
    titleEn: 'Survey Works',
    descRu: 'GNSS-съёмка, тахеометрия, лазерное сканирование, аэрофотосъёмка с БПЛА',
    descEn: 'GNSS surveying, total station work, laser scanning, UAV aerial photography',
  },
  {
    icon: FlaskConical,
    href: '/services/lab',
    titleRu: 'Лабораторные исследования',
    titleEn: 'Laboratory Research',
    descRu: 'ICP-MS анализ, пробирный анализ, минералогия, физико-механические испытания',
    descEn: 'ICP-MS analysis, fire assay, mineralogy, physical and mechanical testing',
  },
  {
    icon: FileText,
    href: '/services/consulting',
    titleRu: 'Проектирование и консалтинг',
    titleEn: 'Design & Consulting',
    descRu: 'ТЭО кондиций, подсчёт запасов, ГИС-моделирование, сопровождение лицензирования',
    descEn: 'Feasibility studies, resource estimation, GIS modeling, licensing support',
  },
  {
    icon: Leaf,
    href: '/services/ecology',
    titleRu: 'Экология и рекультивация',
    titleEn: 'Ecology & Reclamation',
    descRu: 'ОВОС, экологический мониторинг, проекты рекультивации, ГЭЭ',
    descEn: 'EIA, environmental monitoring, reclamation projects, state environmental review',
  },
]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-(--text) mb-4"
            >
              {t('Наши услуги', 'Our Services')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--muted)] max-w-2xl"
            >
              {t(
                'Полный спектр геологоразведочных работ для горнодобывающей отрасли',
                'Full range of geological exploration services for the mining industry'
              )}
            </motion.p>
          </div>
          <Link href="/services" className="btn btn-ghost shrink-0">
            {t('Все услуги', 'All Services')}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full"
            >
              <Link
                href={service.href}
                className="card group hover:border-[var(--accent)]/30 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent)] transition-colors duration-300 shrink-0">
                  <service.icon className="w-6 h-6 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-(--text) mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {t(service.titleRu, service.titleEn)}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-grow">
                  {t(service.descRu, service.descEn)}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                  {t('Подробнее', 'Learn more')}
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
