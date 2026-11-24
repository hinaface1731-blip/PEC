'use client'

import Link from '@/components/localized-link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { Mountain, Radio, Drill, Compass, FlaskConical, FileText, Leaf, ArrowUpRight, ArrowRight, Pickaxe, Truck } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Mountain,
    href: '/services/geological',
    titleRu: 'Геологические работы',
    titleEn: 'Geological Services',
    descRu: 'Геологическое картирование, поисковые маршруты, опробование, документация горных выработок и керна',
    descEn: 'Geological mapping, prospecting traverses, sampling, and logging of mine workings and drill core',
  },
  {
    icon: Radio,
    href: '/services/geophysics',
    titleRu: 'Геофизические работы',
    titleEn: 'Geophysical Services',
    descRu: 'АМТЗ, ТЭМ/ЗСБ, ВП-СГ, ЭТ-ВП, магниторазведка, каротаж скважин',
    descEn: 'AMT, TEM, gradient-array induced polarization, resistivity and IP tomography, magnetic surveys, and borehole logging',
  },
  {
    icon: Drill,
    href: '/services/drilling',
    titleRu: 'Буровые работы',
    titleEn: 'Drilling Services',
    descRu: 'Колонковое бурение, гидрогеологические и инженерные скважины',
    descEn: 'Core drilling, hydrogeological wells, and geotechnical boreholes',
  },
  {
    icon: Pickaxe,  // ← новая иконка для горных работ
    href: '/services/mining',
    titleRu: 'Горные работы',
    titleEn: 'Mining Services',
    descRu: 'Проходка канав и шурфов, вскрышные работы, добычные работы, отработка россыпей',
    descEn: 'Trenching and pitting, overburden removal, mining operations, placer mining',
  },
  {
    icon: Compass,
    href: '/services/survey',
    titleRu: 'Маркшейдерские работы',
    titleEn: 'Mine Surveying',
    descRu: 'GNSS-съёмка, тахеометрия, лазерное сканирование, аэрофотосъёмка с БПЛА',
    descEn: 'GNSS surveying, total station work, laser scanning, UAV aerial photography',
  },
  {
    icon: Truck,  // ← новая иконка для логистики
    href: '/services/logistics',
    titleRu: 'Логистика и снабжение',
    titleEn: 'Logistics & Supply',
    descRu: 'Доставка грузов в Арктику и Сибирь, экспедиционное сопровождение, снабжение удалённых объектов',
    descEn: 'Freight delivery to the Arctic and Siberia, expedition support, and supply of remote sites',
  },
  {
    icon: FlaskConical,
    href: '/services/lab',
    titleRu: 'Лабораторные исследования',
    titleEn: 'Laboratory Testing',
    descRu: 'Пробоподготовка, рентгенофлуоресцентный анализ, минералогия, шлифы',
    descEn: 'Sample preparation, XRF analysis, mineralogy, and thin-section studies',
  },
  {
    icon: FileText,
    href: '/services/consulting',
    titleRu: 'Проектирование и консалтинг',
    titleEn: 'Exploration Design & Consulting',
    descRu: 'ТЭО кондиций, подсчёт запасов, ГИС-моделирование, сопровождение лицензирования',
    descEn: 'Studies on reserve estimation criteria, reserve estimates, GIS modeling, and licensing support',
  },
  {
    icon: Leaf,
    href: '/services/ecology',
    titleRu: 'Экология и рекультивация',
    titleEn: 'Environmental Services & Reclamation',
    descRu: 'ОВОС, экологический мониторинг, проекты рекультивации, ГЭЭ',
    descEn: 'EIA, environmental monitoring, reclamation projects, state environmental review',
  },
]

interface ServicesSectionProps {
  /** 'page' — используется как основной блок страницы /services (заголовок h1, без кнопки «Все услуги») */
  variant?: 'section' | 'page'
}

export function ServicesSection({ variant = 'section' }: ServicesSectionProps) {
  const { t } = useLanguage()
  const isPage = variant === 'page'
  const Heading = isPage ? motion.h1 : motion.h2

  return (
    <section id="services" className={isPage ? 'section pt-32' : 'section'}>
      <div className="container mx-auto">
        <div className={isPage ? 'mb-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-12' : 'flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12'}>
          <div>
            {isPage && (
              <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm">
                <Link href="/" className="hover:text-accent-foreground transition-colors">
                  {t('Главная', 'Home')}
                </Link>
                <span>/</span>
                <span className="text-foreground">{t('Услуги', 'Services')}</span>
              </div>
            )}
            <Heading
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${isPage ? 'text-4xl lg:text-5xl' : 'text-3xl lg:text-4xl'} font-bold text-foreground mb-4`}
            >
              {t('Наши услуги', 'Our Services')}
            </Heading>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-2xl"
            >
              {t(
                'Полный спектр геологоразведочных работ для горнодобывающей отрасли',
                'Full range of geological exploration services for the mining industry'
              )}
            </motion.p>
          </div>
          
          {isPage ? (
            <figure className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/images/service-photos/taimyr-camp.webp"
                alt={t('Вид с воздуха на полевой лагерь у реки на Таймыре', 'Aerial view of a riverside field camp on the Taimyr Peninsula')}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 right-3 rounded-md bg-black/75 px-3 py-1.5 text-xs text-white">
                {t('Таймыр, Широтная-2 · 2026', 'Taimyr, Shirotnaya-2 · 2026')}
              </figcaption>
            </figure>
          ) : (
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-primary-foreground font-medium transition-all hover:bg-[var(--accent-h)] shrink-0"
            >
              {t('Все услуги', 'All Services')}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="h-full"
            >
              <Link
                href={service.href}
                className="card group hover:border-[var(--accent)]/30 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center mb-4 group-hover:bg-[var(--accent)] transition-colors duration-300 shrink-0">
                  <service.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-foreground transition-colors duration-300">
                  {t(service.titleRu, service.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {t(service.descRu, service.descEn)}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm text-accent-foreground lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 shrink-0">
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
