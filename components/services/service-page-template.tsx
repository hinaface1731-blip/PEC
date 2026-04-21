'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'  // ← ДОБАВЬТЕ ЭТУ СТРОКУ
import { useLanguage } from '@/components/language-provider'
import { CTAForm } from '@/components/cta-form'
import { ArrowRight, MapPin, CheckCircle2, type LucideIcon } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { StepsCarousel } from '@/components/ui/steps-carousel'
import { Mountain, Radio, Drill, Compass, FlaskConical, FileText, Leaf, BarChart3, ClipboardCheck } from 'lucide-react'

interface ServiceMethod {
  ru: string
  en: string
}

interface ServiceEquipment {
  titleRu: string
  titleEn: string
  items: string[]
  href?: string      // опциональная ссылка на страницу методики
 
}



interface ServiceStep {
  numRu: string
  numEn: string
  titleRu: string
  titleEn: string
  descRu: string
  descEn: string
}

interface ServiceResult {
  titleRu: string
  titleEn: string
  descRu: string
  descEn: string
}

interface ServiceCase {
  titleRu: string
  titleEn: string
  clientRu: string
  clientEn: string
  year: string
  volumeRu: string
  volumeEn: string
  resultRu: string
  resultEn: string
}

interface ServiceStat {
  value: string
  labelRu: string
  labelEn: string
}

interface ServiceRegion {
  ru: string
  en: string
}

interface ServiceMethodGroup {
  titleRu: string
  titleEn: string
  icon?: LucideIcon
  href?: string
  methods: ServiceMethod[]
}

export interface ServicePageData {
  icon: LucideIcon
  titleRu: string
  titleEn: string
  descRu: string
  descEn: string
  heroImage: string
  methods: ServiceMethod[]
  methodsGroups?: ServiceMethodGroup[]
  methodsImage: string
  reverse?: boolean
  equipment: ServiceEquipment[]
  steps: ServiceStep[]
  stepImages: string[]
  results: ServiceResult[]
  caseStudy: ServiceCase
  caseImage: string
  regions: ServiceRegion[]
  stats: ServiceStat[]
}

interface ServicePageTemplateProps {
  data: ServicePageData
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' }
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const { t } = useLanguage()
  const mapRef = useRef<HTMLDivElement>(null)

  // Добавьте координаты для регионов из data.regions
  // Если в data.regions нет координат, добавьте их вручную
  const regionsWithCoords = {
    'Таймыр': [74.0, 98.0],
    'Якутия': [66.0, 130.0],
    'Чукотка': [66.0, -170.0],
    'Алтай': [51.0, 86.0],
    'ХМАО': [61.0, 70.0],
    'Забайкалье': [52.0, 115.0],
    'Кольский полуостров': [68.0, 36.0],
    'Камчатка': [56.0, 160.0],
  }

  useEffect(() => {
    // Загрузка API Яндекс Карт (нативный способ)
    const script = document.createElement('script')
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=b14c1be4-5b7c-444a-b7b4-05a0bfc3ab10&lang=ru_RU'
    script.async = true
    script.onload = initMap
    document.head.appendChild(script)

    function initMap() {
      // @ts-ignore
      window.ymaps.ready(() => {
        // @ts-ignore
        const map = new window.ymaps.Map(mapRef.current, {
          center: [65.0, 100.0],
          zoom: 4,
          controls: ['zoomControl', 'fullscreenControl']
        })

        // Добавление маркеров для каждого региона из data.regions
        data.regions.forEach(region => {
          const coords = regionsWithCoords[region.ru as keyof typeof regionsWithCoords]
          if (coords) {
            // @ts-ignore
            const placemark = new window.ymaps.Placemark(
              coords,
              {
                hintContent: t(region.ru, region.en),
                balloonContent: `
                  <div style="padding: 10px; font-family: sans-serif;">
                    <strong>${t(region.ru, region.en)}</strong><br/>
                    Активные геологоразведочные работы
                  </div>
                `
              },
              {
                preset: 'islands#redIcon',
              }
            )
            map.geoObjects.add(placemark)
          }
        })
      })
    }

    return () => {
      const scriptTag = document.querySelector('script[src*="api-maps.yandex.ru"]')
      if (scriptTag) scriptTag.remove()
    }
  }, [data.regions, t])


  return (
    <>
      {/* Hero */}
      <section className="relative section bg-[var(--bg2)] overflow-hidden">
  {/* Фоновая картинка */}
  <div className="absolute inset-0 z-0">
    <Image
      src={data.heroImage}
      alt={t(data.titleRu, data.titleEn)}
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/50" />
  </div>

  {/* Контент - убираем min-h-[90vh] */}
  <div className="relative z-10 container mx-auto">
    <div className={`flex flex-col ${data.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center py-16 md:py-20`}>
      <div className="flex-1">
        <div className="w-14 h-14 rounded-xl bg-[var(--accent-glow)] flex items-center justify-center mb-6">
          <data.icon className="w-7 h-7 text-[var(--accent)]" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          {t(data.titleRu, data.titleEn)}
        </h1>
        <p className="text-xl text-white/90 leading-relaxed mb-8">
          {t(data.descRu, data.descEn)}
        </p>
        <Link href="#cta" className="btn btn-primary">
          {t('Запросить КП', 'Request Quote')}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="flex-1">
        {/* Пусто или дополнительный контент */}
      </div>
    </div>
  </div>
</section>

      {/* Methods */}
{/* Methods Section */}
<section className="section">
  <div className="container mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
        {t('Что входит в услугу', 'What the Service Includes')}
      </h2>
      <p className="text-[var(--muted)] max-w-2xl mx-auto">
        {t(
          'Полный комплекс геологоразведочных работ — от проектирования до защиты запасов',
          'Full range of exploration services — from design to reserve approval'
        )}
      </p>
    </div>

    {/* Если есть groups — показываем в 3 колонки */}
    {data.methodsGroups ? (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {data.methodsGroups.map((group, idx) => (
          <div key={idx} className="card group">
            <div className="w-14 h-14 rounded-2xl bg-[var(--accent-glow)] flex items-center justify-center mb-5">
              {group.icon ? (
                <group.icon className="w-7 h-7 text-[var(--accent)]" />
              ) : (
                <span className="text-2xl">📌</span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
              {t(group.titleRu, group.titleEn)}
            </h3>
            <div className="space-y-3">
              {group.methods.map((method, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                  <span className="text-sm text-[var(--muted)]">
                    {t(method.ru, method.en)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ) : (
      // Старый вариант (список + картинка) для обратной совместимости
      <div className={`flex flex-col ${data.reverse ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
        <div className="flex-1">
          <ul className="space-y-3">
            {data.methods.map((method, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                <span className="text-[var(--text)]">{t(method.ru, method.en)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 lg:max-w-md">
          <Image
            src={data.methodsImage}
            alt={t('Методы работ', 'Work methods')}
            width={500}
            height={350}
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>
    )}
  </div>
</section>


      {/* Equipment */}
<section className="section bg-[var(--bg2)]">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-[var(--text)] mb-10">
      {t('Применяемые методики и оборудование', 'Methods & Equipment')}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.equipment.map((eq, i) => (
        <div key={i} className="card group">
          {eq.href ? (
            <Link href={eq.href}>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-4 group-hover:text-[var(--accent)] transition-colors">
                {t(eq.titleRu, eq.titleEn)}
              </h3>
            </Link>
          ) : (
            <h3 className="text-lg font-semibold text-[var(--text)] mb-4">
              {t(eq.titleRu, eq.titleEn)}
            </h3>
          )}
          <ul className="space-y-2">
            {eq.items.map((item, j) => (
              <li key={j} className="text-sm text-[var(--muted)] flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          {eq.href && (
            <Link 
              href={eq.href}
              className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--accent)] hover:gap-3 transition-all"
            >
              {t('Подробнее →', 'Learn more →')}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Process Steps */}
      <section className="section bg-gradient-to-b from-[var(--bg)] to-[var(--bg2)]">
  <div className="container mx-auto">
    {/* Убираем motion вообще — заголовок просто виден сразу */}
    <div className="text-center mb-12">
      <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
        {t('Процесс выполнения', 'Work Process')}
      </h2>
      <p className="text-[var(--muted)] max-w-2xl mx-auto">
        {t(
          'От проектирования до финального отчёта — прозрачный и контролируемый процесс',
          'From design to final report — transparent and controlled process'
        )}
      </p>
    </div>

    <StepsCarousel 
      steps={data.steps} 
      stepImages={data.stepImages} 
      t={t} 
    />
  </div>
</section>

      {/* Results */}
      <section className="section bg-[var(--bg2)]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-10">
            {t('Результаты работ', 'Work Results')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.results.map((result, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold text-[var(--text)] mb-2">
                  {t(result.titleRu, result.titleEn)}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {t(result.descRu, result.descEn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-10">
            {t('Пример проекта', 'Project Example')}
          </h2>
          <div className="card flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/3">
              <Image
                src={data.caseImage}
                alt={t(data.caseStudy.titleRu, data.caseStudy.titleEn)}
                width={500}
                height={300}
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white text-sm font-medium">
                  {t(data.caseStudy.clientRu, data.caseStudy.clientEn)}
                </span>
                <span className="text-sm text-[var(--muted)]">{data.caseStudy.year}</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                {t(data.caseStudy.titleRu, data.caseStudy.titleEn)}
              </h3>
              <div className="mb-4">
                <span className="text-sm text-[var(--muted2)]">{t('Объём работ:', 'Scope of work:')}</span>
                <p className="text-[var(--text)]">{t(data.caseStudy.volumeRu, data.caseStudy.volumeEn)}</p>
              </div>
              <div>
                <span className="text-sm text-[var(--muted2)]">{t('Результат:', 'Result:')}</span>
                <p className="text-[var(--text)]">{t(data.caseStudy.resultRu, data.caseStudy.resultEn)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography */}
      <section className="section bg-[var(--bg2)]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              {t('География работ', 'Work Geography')}
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              {t(
                'Проекты в ключевых горнодобывающих регионах России',
                'Projects in key mining regions of Russia'
              )}
            </p>
          </div>

          {/* Карта */}
          <div 
            ref={mapRef} 
            className="rounded-2xl overflow-hidden mb-8 shadow-xl"
            style={{ width: '100%', height: '500px' }}
          />

          {/* Список регионов */}
          <div className="flex flex-wrap justify-center gap-3">
            {data.regions.map((region, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg3)] border border-[var(--border)] hover:border-[var(--accent)] transition-all cursor-pointer"
                onClick={() => {
                  const mapElement = document.querySelector('.ymaps-container')
                  mapElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
              >
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--text)]">{t(region.ru, region.en)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

       <section className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text)] text-center mb-10">
            {t('Ключевые цифры', 'Key Figures')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.stats.map((stat, i) => (
              <div key={i} className="card text-center">
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{t(stat.labelRu, stat.labelEn)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAForm serviceName={t(data.titleRu, data.titleEn)} />
    </>
  )
  
}

