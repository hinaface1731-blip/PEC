'use client'

import Image from 'next/image'
import { FallbackImage } from '@/components/ui/fallback-image'
import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { ArrowUpRight, MapPin, CheckCircle2, type LucideIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { StepsCarousel } from '@/components/ui/steps-carousel'
import { YandexMapV3, type MapRegionName } from '@/components/yandex-map-v3'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import { ProjectPhotoCredit } from '@/components/projects/project-photo-credit'

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
  image: string
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

interface ServiceProjectExample {
  id: number
  image?: string
  workRu: string
  workEn: string
}

interface ServiceRegion {
  ru: MapRegionName
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
  introRu?: string
  introEn?: string
  introPhoto?: { src: string; altRu: string; altEn: string }
  methods: ServiceMethod[]
  methodsGroups?: ServiceMethodGroup[]
  methodsImage: string
  reverse?: boolean
  equipment: ServiceEquipment[]
  steps: ServiceStep[]
  results: ServiceResult[]
  projectExample?: ServiceProjectExample
  regions: ServiceRegion[]
  sectionTitleRu?: string
  sectionTitleEn?: string
  sectionDescRu?: string
  sectionDescEn?: string
}

export interface ServicePageTemplateProps {
  data: ServicePageData
  topSection?: React.ReactNode
}

export function ServicePageTemplate({ data, topSection }: ServicePageTemplateProps) {
  const { t } = useLanguage()
  const example = data.projectExample
  const project = example && projects.find(({ id }) => id === example.id)
  
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
  const introParagraphs = t(data.introRu ?? '', data.introEn ?? data.introRu ?? '')
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean)
    
  const prevEquipmentItem = () => {
    if (equipmentItemIndex > 0) {
      setEquipmentItemIndex(equipmentItemIndex - 1)
    } else {
      setEquipmentItemIndex(currentItems.length - 1)
    }
  }

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
            <div className="flex items-center gap-2 text-white/80 mb-4 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">
                {t('Главная', 'Home')}
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">
                {t('Услуги', 'Services')}
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
      {introParagraphs.length > 0 && (
        <section className="bg-linear-to-b from-card to-background px-4 py-10 sm:px-8 sm:py-14 lg:py-16">
          <div className="container mx-auto">
            <div className="grid items-center gap-6 rounded-2xl border border-border bg-card p-5 sm:gap-8 sm:p-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-10">
              <div className="max-w-3xl space-y-4 text-base leading-relaxed text-foreground sm:text-lg sm:leading-relaxed">
                <div aria-hidden="true" className="h-1 w-10 rounded-full bg-[var(--accent)]" />
                {introParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              {data.introPhoto && (
                <div className="relative aspect-[8/5] overflow-hidden rounded-xl border border-border bg-muted">
                  <Image
                    src={data.introPhoto.src}
                    alt={t(data.introPhoto.altRu, data.introPhoto.altEn)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1344px) 470px, (min-width: 1024px) 40vw, (min-width: 640px) calc(100vw - 8rem), calc(100vw - 4.5rem)"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      {/* TOP SECTION (лицензия, сертификаты и т.д.) */}
      {topSection && topSection}

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
            <div className="flex flex-wrap justify-center gap-6">
              {data.methodsGroups.map((group, idx) => (
                <div key={idx} className="card group min-w-0 w-full lg:w-[calc((100%_-_3rem)/3)]">
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
                <FallbackImage
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

      {/* Блок «Применяемые методики и оборудование» временно отключён
      <section className="section bg-[var(--bg2)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-10 text-center">
            {t('Применяемые методики и оборудование', 'Methods & Equipment')}
          </h2>

          
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

          
          {currentCategory && currentItem && (
            <div className="relative max-w-5xl mx-auto">
              <motion.div
                key={`${equipmentCategoryIndex}-${equipmentItemIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="card-enhanced overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  
                  <div className="flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-6 bg-[var(--accent)] rounded-full" />
                      <span className="text-sm text-[var(--accent)] font-medium">
                        {t(currentCategory.titleRu, currentCategory.titleEn)}
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

                  
                  <div className="flex justify-center items-center md:w-80 lg:w-96 h-64">
                    <div className="relative w-56 h-48">
                      <Image
                        src={currentItem.image || '/images/equipment-placeholder.jpg'}
                        alt={currentItem.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 224px"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              
              {currentItems.length > 1 && (
                <>
                  <button
                    onClick={prevEquipmentItem}
                    className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all shadow-lg"
                    aria-label="Предыдущий"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextEquipmentItem}
                    className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center hover:bg-[var(--accent)] hover:text-white transition-all shadow-lg"
                    aria-label="Следующий"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              
              {currentItems.length > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {currentItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setEquipmentItemIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        equipmentItemIndex === idx
                          ? 'w-6 bg-[var(--accent)]'
                          : 'w-2 bg-[var(--muted2)] hover:bg-[var(--accent)]/50'
                      }`}
                      aria-label={`Перейти к слайду ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    */}
      {/* Process Steps */}
      <section className="section bg-gradient-to-b from-[var(--bg)] to-[var(--bg2)]">
        <div className="container mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-[var(--text)] lg:text-4xl">
            {t('Этапы работ', 'Work Stages')}
          </h2>
          <StepsCarousel
            steps={data.steps}
            t={t}
          />
        </div>
      </section>

      {/* Results */}
      <section className="section bg-[var(--bg2)]" aria-labelledby="service-deliverables">
        <div className="container mx-auto grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <h2 id="service-deliverables" className="text-3xl font-bold text-[var(--text)] lg:text-4xl">
              {t('Что получает заказчик', 'What You Receive')}
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {t(
                'Состав материалов и формат передачи определяем в техническом задании.',
                'The scope and format of the deliverables are agreed in the project brief.'
              )}
            </p>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {data.results.map((result) => (
              <li key={result.titleRu} className="grid gap-1.5 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] sm:gap-6 sm:py-5">
                <h3 className="font-semibold text-[var(--text)]">{t(result.titleRu, result.titleEn)}</h3>
                <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">{t(result.descRu, result.descEn)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project && example && (
        <section className="section">
          <div className="container mx-auto">
            <h2 className="mb-10 text-3xl font-bold text-[var(--text)]">
              {t('Пример проекта', 'Project Example')}
            </h2>
            <Link
              href={`/projects#project-${project.id}`}
              className="card group flex flex-col gap-8 focus-visible:outline-2 focus-visible:outline-[var(--accent)] lg:flex-row"
            >
              <div className="relative aspect-[5/3] w-full self-start overflow-hidden rounded-xl bg-muted lg:w-1/3 lg:shrink-0">
                <FallbackImage
                  src={example.image ?? project.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(min-width: 1344px) 410px, (min-width: 1024px) 33vw, 100vw"
                />
                <ProjectPhotoCredit />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-sm font-medium text-slate-950">
                    {t(project.client, project.clientEn)}
                  </span>
                  <span className="text-sm text-[var(--muted)]">{project.year}</span>
                  <span className="text-sm text-[var(--muted)]">{t(project.location, project.locationEn)}</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[var(--text)]">
                  {t(project.title, project.titleEn)}
                </h3>
                <p className="leading-relaxed text-[var(--text)]">{t(example.workRu, example.workEn)}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)] underline-offset-4 group-hover:underline">
                  {t('Смотреть проект', 'View project')}
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

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

          {/* Добавляем карту */}
          <YandexMapV3 regions={data.regions} />

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {data.regions.map((region, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg3)] border border-[var(--border)]"
              >
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--text)]">{t(region.ru, region.en)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
