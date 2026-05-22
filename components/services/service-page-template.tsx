'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { CTAForm } from '@/components/cta-form'
import { ArrowRight, MapPin, CheckCircle2, type LucideIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { StepsCarousel } from '@/components/ui/steps-carousel'
import { useYandexMapsContext } from '@/components/yandex-map-loader'

interface ServiceMethod {
  ru: string
  en: string
}

interface ServiceEquipmentItem {
  name: string
  specs: string[]
  image?: string
}

interface ServiceEquipment {
  titleRu: string
  titleEn: string
  href?: string
  items: ServiceEquipmentItem[]
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
  image: string
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
  sectionTitleRu?: string
  sectionTitleEn?: string
  sectionDescRu?: string
  sectionDescEn?: string
  resultsImage?: string
}

interface ServicePageTemplateProps {
  data: ServicePageData
}

// Координаты регионов
const REGIONS_COORDS: Record<string, [number, number]> = {
  'Таймыр': [74.0, 98.0],
  'Якутия': [66.0, 130.0],
  'Чукотка': [66.0, 170.0],
  'Алтай': [51.0, 86.0],
  'ХМАО': [61.0, 70.0],
  'Забайкалье': [52.0, 115.0],
  'Кольский полуостров': [68.0, 36.0],
  'Камчатка': [56.0, 160.0],
  'Иркутская область': [53.0, 103.0],
  'Магаданская область': [63.0, 153.0],
  'Красноярский край': [64.0, 96.0],
  'Крайний Север': [72.0, 102.0],
  'Ямал': [68.0, 73.0],
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const { t } = useLanguage()
  const mapRef = useRef<HTMLDivElement>(null)
  const { isReady, ymaps } = useYandexMapsContext()
  
  // Состояния для карусели оборудования
  const [equipmentCategoryIndex, setEquipmentCategoryIndex] = useState(0)
  const [equipmentItemIndex, setEquipmentItemIndex] = useState(0)

  // Текущая категория и текущий элемент
  const currentCategory = data.equipment[equipmentCategoryIndex]
  const currentItems = currentCategory?.items || []
  const currentItem = currentItems[equipmentItemIndex]

  const handleCategoryChange = (index: number) => {
    setEquipmentCategoryIndex(index)
    setEquipmentItemIndex(0)
  }

  const nextEquipmentItem = () => {
    if (equipmentItemIndex < currentItems.length - 1) {
      setEquipmentItemIndex(equipmentItemIndex + 1)
    } else {
      setEquipmentItemIndex(0)
    }
  }

  const prevEquipmentItem = () => {
    if (equipmentItemIndex > 0) {
      setEquipmentItemIndex(equipmentItemIndex - 1)
    } else {
      setEquipmentItemIndex(currentItems.length - 1)
    }
  }

  useEffect(() => {
    if (!isReady || !ymaps || !mapRef.current) return

    let map: any = null

    try {
      map = new ymaps.Map(mapRef.current, {
        center: [65.0, 100.0],
        zoom: 4,
        controls: ['zoomControl', 'fullscreenControl'],
      })

      data.regions.forEach(region => {
        const coords = REGIONS_COORDS[region.ru]
        if (!coords) return

        const placemark = new ymaps.Placemark(
          coords,
          {
            hintContent: t(region.ru, region.en),
            balloonContent: `
              <div style="padding: 10px; font-family: sans-serif;">
                <strong>${t(region.ru, region.en)}</strong><br/>
                Активные геологоразведочные работы
              </div>
            `,
          },
          { preset: 'islands#redIcon' }
        )
        map.geoObjects.add(placemark)
      })
    } catch (err) {
      console.error('Ошибка инициализации карты:', err)
    }

    return () => {
      if (map) {
        map.destroy()
        map = null
      }
    }
  }, [isReady, ymaps, data.regions, t])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={t(data.titleRu, data.titleEn)}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: 'center 50%' }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <Link href="/" className="hover:text-white transition-colors">
                {t('Главная', 'Home')}
              </Link>
              <span>/</span>
              <span className="text-white">
                {t(data.titleRu, data.titleEn)}
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t(data.titleRu, data.titleEn)}
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {t(data.descRu, data.descEn)}
            </p>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              {t(data.sectionTitleRu || 'Что входит в услугу', data.sectionTitleEn || 'What the Service Includes')}
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              {t(data.sectionDescRu || 'Полный комплекс геологоразведочных работ — от проектирования до защиты запасов', data.sectionDescEn || 'Full range of exploration services — from design to reserve approval')}
            </p>
          </div>

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

      {/* Equipment — карусель с переключателем категорий */}
      <section className="section bg-[var(--bg2)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-10 text-center">
            {t('Применяемые методики и оборудование', 'Methods & Equipment')}
          </h2>

          {/* Переключатель категорий (табы) */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {data.equipment.map((eq, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryChange(idx)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  equipmentCategoryIndex === idx
                    ? 'bg-[var(--accent)] text-white shadow-md'
                    : 'bg-[var(--bg3)] text-[var(--muted)] hover:bg-[var(--accent-glow)] hover:text-[var(--accent)]'
                }`}
              >
                {t(eq.titleRu, eq.titleEn)}
              </button>
            ))}
          </div>

          {/* Карусель для выбранной категории */}
          {currentCategory && currentItem && (
            <div className="relative max-w-5xl mx-auto">
              <div className="card-enhanced overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Левая часть — текст */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-[var(--accent)] rounded-full" />
                      <span className="text-sm text-[var(--accent)] font-medium">
                        {t('Оборудование', 'Equipment')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {currentItem.name}
                    </h3>
                    <ul className="space-y-3">
                      {currentItem.specs.map((spec, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                    {currentCategory.href && (
                      <Link
                        href={currentCategory.href}
                        className="inline-flex items-center gap-2 mt-6 text-sm text-[var(--accent)] hover:gap-3 transition-all"
                      >
                        {t('Подробнее →', 'Learn more →')}
                      </Link>
                    )}
                  </div>

                  {/* Правая часть — изображение */}
                  <div className="relative md:w-80 lg:w-96 h-64 md:h-auto flex items-center justify-center  p-4">
  <div className="relative w-full h-full">
    <Image
      src={currentItem.image || '/images/equipment-placeholder.jpg'}
      alt={currentItem.name}
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 384px"
    />
  </div>
</div>
                </div>
              </div>

              {/* Стрелки навигации */}
              {currentItems.length > 1 && (
                <>
                  <button
                    onClick={prevEquipmentItem}
                    className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextEquipmentItem}
                    className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Индикаторы (точки) */}
              {currentItems.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {currentItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setEquipmentItemIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        equipmentItemIndex === idx ? 'w-6 bg-[var(--accent)]' : 'w-2 bg-[var(--muted2)]'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Process Steps */}
      <section className="section bg-gradient-to-b from-[var(--bg)] to-[var(--bg2)]">
        <div className="container mx-auto">
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
          <h2 className="text-3xl font-bold text-[var(--text)] mb-10 text-center">
            {t('Результаты работ', 'Work Results')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.results.map((result, i) => (
              <div key={i} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-[var(--accent)]/30 transition-all flex flex-col">
                <div className="p-5 flex-1">
                  <h3 className="font-semibold text-[var(--text)] mb-2 text-lg">
                    {t(result.titleRu, result.titleEn)}
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    {t(result.descRu, result.descEn)}
                  </p>
                </div>
                <div className="relative w-full h-48 overflow-hidden bg-[var(--bg3)]">
                  <Image
                    src={result.image}
                    alt={t(result.titleRu, result.titleEn)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
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

          <div
            ref={mapRef}
            className="rounded-2xl overflow-hidden mb-8 shadow-xl bg-[var(--bg3)]"
            style={{ width: '100%', height: '500px' }}
          />

          <div className="flex flex-wrap justify-center gap-3">
            {data.regions.map((region, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg3)] border border-[var(--border)] hover:border-[var(--accent)] transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--text)]">{t(region.ru, region.en)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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

      
     
    </>
  )
}