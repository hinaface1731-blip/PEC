'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { ArrowUpRight, CheckCircle2, type LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

/* ------------------------------------------------------------------ */
/*  Типы                                                               */
/* ------------------------------------------------------------------ */

interface ServiceMethod {
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

/** Матрица «задача × метод». marks: 2 — основной метод, 1 — применим, 0 — не применяется. */
export interface ServiceMatrix {
  titleRu: string
  titleEn: string
  columns: ServiceMethod[]
  rows: { ru: string; en: string; marks: (0 | 1 | 2)[] }[]
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
  image?: string // больше не выводится, поле оставлено для совместимости
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

export interface ServiceRelated {
  href: string
  titleRu: string
  titleEn: string
  descRu?: string
  descEn?: string
}

export interface ServicePageData {
  icon: LucideIcon
  titleRu: string
  titleEn: string
  descRu: string
  descEn: string
  heroImage: string

  /** Вводный текст под hero. Абзацы разделяются пустой строкой (\n\n). */
  introRu?: string
  introEn?: string

  sectionTitleRu?: string
  sectionTitleEn?: string
  sectionDescRu?: string
  sectionDescEn?: string
  methods: ServiceMethod[]
  methodsGroups?: ServiceMethodGroup[]
  matrix?: ServiceMatrix
  methodsImage?: string
  reverse?: boolean

  steps: ServiceStep[]
  /** «Что получает заказчик» — выводится списком, без картинок */
  results?: ServiceResult[]

  equipment: ServiceEquipment[]
  /** До 4 ключевых позиций. Если не задано — берётся первая позиция каждой категории. */
  featuredEquipment?: ServiceEquipmentItem[]
  /** Куда ведёт ссылка «Весь парк». По умолчанию /equipment */
  equipmentHref?: string

  caseStudy: ServiceCase
  caseImage?: string

  related?: ServiceRelated[]

  /* Устаревшие поля: шаблон их больше не использует, но файлы
     с данными услуг продолжат компилироваться. Можно удалять по одному. */
  stepImages?: string[]
  regions?: ServiceMethod[]
  stats?: { value: string; labelRu: string; labelEn: string }[]
  resultsImage?: string
  showCaseStudy?: boolean
  /** Enable only after the case study has been reviewed and approved for publication. */
  showStats?: boolean
}

export interface ServicePageTemplateProps {
  data: ServicePageData
  /** Блок допусков и лицензий. Выводится после оборудования. */
  permitsSection?: ReactNode
  /** @deprecated используйте permitsSection */
  topSection?: ReactNode
}

/* ------------------------------------------------------------------ */
/*  Вспомогательные компоненты                                         */
/* ------------------------------------------------------------------ */

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]'

function Mark({ value, label }: { value: 0 | 1 | 2; label: string }) {
  if (value === 2) {
    return (
      <span
        role="img"
        aria-label={label}
        className="inline-block h-3 w-3 rounded-full bg-[var(--accent)]"
      />
    )
  }
  if (value === 1) {
    return (
      <span
        role="img"
        aria-label={label}
        className="inline-block h-3 w-3 rounded-full border-2 border-[var(--accent)]"
      />
    )
  }
  return (
    <span role="img" aria-label={label} className="text-[var(--muted2)]">
      —
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Шаблон                                                             */
/* ------------------------------------------------------------------ */

export function ServicePageTemplate({
  data,
  permitsSection,
  topSection,
}: ServicePageTemplateProps) {
  const { t } = useLanguage()

  const permits = permitsSection ?? topSection

  const introParagraphs = t(data.introRu ?? '', data.introEn ?? data.introRu ?? '')
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean)

  const featured: { item: ServiceEquipmentItem; label?: string }[] = (
    data.featuredEquipment
      ? data.featuredEquipment.map((item) => ({ item }))
      : data.equipment.flatMap((cat) =>
          cat.items.slice(0, 1).map((item) => ({
            item,
            label: t(cat.titleRu, cat.titleEn),
          }))
        )
  ).slice(0, 4)

  // Категории оборудования со ссылками на страницы методов (геофизика)
  const categoryLinks = data.equipment.filter((c) => c.href)

  const labelPrimary = t('основной метод', 'primary method')
  const labelApplicable = t('применимо', 'applicable')
  const labelNone = t('не применяется', 'not applicable')

  return (
    <>
      {/* Hero */}
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
            <nav
              aria-label="breadcrumb"
              className="flex flex-wrap items-center gap-2 text-white/80 mb-4"
            >
              <Link href="/" className={`hover:text-white transition-colors ${focusRing}`}>
                {t('Главная', 'Home')}
              </Link>
              <span aria-hidden>/</span>
    
  
              <span className="text-white" aria-current="page">
                {t(data.titleRu, data.titleEn)}
              </span>
            </nav>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t(data.titleRu, data.titleEn)}
            </h1>

            <p className="text-xl text-white/90 leading-relaxed">
              {t(data.descRu, data.descEn)}
            </p>
          </div>
        </div>
      </section>

      {/* Вводный текст */}
      {introParagraphs.length > 0 && (
        <section className="py-16 px-8">
          <div className="container mx-auto">
            <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-[var(--text)]">
              {introParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Что делаем */}
      <section className="section bg-[var(--bg2)]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              {t(
                data.sectionTitleRu || 'Что входит в услугу',
                data.sectionTitleEn || 'What the Service Includes'
              )}
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              {t(
                data.sectionDescRu ||
                  'Полный комплекс геологоразведочных работ — от проектирования до защиты запасов',
                data.sectionDescEn ||
                  'Full range of exploration services — from design to reserve approval'
              )}
            </p>
          </div>

          {data.methodsGroups ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {data.methodsGroups.map((group, idx) => (
                <div key={idx} className="card">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--accent-glow)] flex items-center justify-center mb-5">
                    {group.icon ? (
                      <group.icon className="w-7 h-7 text-[var(--accent)]" />
                    ) : (
                      <CheckCircle2 className="w-7 h-7 text-[var(--accent)]" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-4">
                    {t(group.titleRu, group.titleEn)}
                  </h3>
                  <ul className="space-y-3">
                    {group.methods.map((method, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                        <span className="text-sm text-[var(--muted)]">
                          {t(method.ru, method.en)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`flex flex-col ${
                data.reverse ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-start`}
            >
              <ul className="flex-1 space-y-3">
                {data.methods.map((method, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text)]">{t(method.ru, method.en)}</span>
                  </li>
                ))}
              </ul>
              {data.methodsImage && (
                <div className="flex-1 lg:max-w-md">
                  <Image
                    src={data.methodsImage}
                    alt={t('Методы работ', 'Work methods')}
                    width={500}
                    height={350}
                    className="rounded-2xl w-full object-cover"
                  />
                </div>
              )}
            </div>
          )}

          {/* Матрица «задача × метод» */}
          {data.matrix && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-4">
                {t(data.matrix.titleRu, data.matrix.titleEn)}
              </h3>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--muted)] mb-4">
                <span className="flex items-center gap-2">
                  <Mark value={2} label={labelPrimary} />
                  {labelPrimary}
                </span>
                <span className="flex items-center gap-2">
                  <Mark value={1} label={labelApplicable} />
                  {labelApplicable}
                </span>
                <span className="flex items-center gap-2">
                  <Mark value={0} label={labelNone} />
                  {labelNone}
                </span>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-card">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th
                        scope="col"
                        className="text-left font-medium text-[var(--text)] p-4 min-w-[16rem]"
                      >
                        {t('Задача', 'Task')}
                      </th>
                      {data.matrix.columns.map((col, i) => (
                        <th
                          key={i}
                          scope="col"
                          className="p-4 text-center font-medium text-[var(--text)] whitespace-nowrap"
                        >
                          {t(col.ru, col.en)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.matrix.rows.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-[var(--border)] last:border-b-0"
                      >
                        <th
                          scope="row"
                          className="text-left font-normal text-[var(--text)] p-4"
                        >
                          {t(row.ru, row.en)}
                        </th>
                        {data.matrix!.columns.map((_, j) => {
                          const v = row.marks[j] ?? 0
                          const label =
                            v === 2 ? labelPrimary : v === 1 ? labelApplicable : labelNone
                          return (
                            <td key={j} className="p-4 text-center">
                              <Mark value={v} label={label} />
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Как работаем + что получает заказчик */}
      <section className="section">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              {t('Как мы работаем', 'How We Work')}
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              {t(
                'От проектирования до финального отчёта — прозрачный и контролируемый процесс',
                'From design to final report — transparent and controlled process'
              )}
            </p>
          </div>

          <ol
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))] gap-x-6 gap-y-10"
            style={{ ['--cols' as string]: data.steps.length } as CSSProperties}
          >
            {data.steps.map((step, i) => (
              <li key={i}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--accent)] text-white font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  {i < data.steps.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden lg:block h-px flex-1 bg-[var(--border2)]"
                    />
                  )}
                </div>
                <h3 className="font-semibold text-[var(--text)] mb-2">
                  {t(step.titleRu, step.titleEn)}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {t(step.descRu, step.descEn)}
                </p>
              </li>
            ))}
          </ol>

          {data.results && data.results.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[var(--border)]">
              <h3 className="text-2xl font-bold text-[var(--text)] mb-8">
                {t('Что получает заказчик', 'What You Receive')}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {data.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-[var(--text)]">
                        {t(result.titleRu, result.titleEn)}
                      </p>
                      <p className="text-sm text-[var(--muted)] mt-1">
                        {t(result.descRu, result.descEn)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Оборудование */}
      {featured.length > 0 && (
        <section className="section bg-[var(--bg2)]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
                {t('Оборудование', 'Equipment')}
              </h2>
              <p className="text-[var(--muted)] max-w-2xl mx-auto">
                {t(
                  'Ключевые позиции по этому направлению. Полный перечень — на странице оборудования.',
                  'Key items for this service. The full list is on the equipment page.'
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featured.map(({ item, label }, i) => (
                <div key={i} className="card flex flex-col">
                  {label && (
                    <span className="text-sm text-[var(--accent)] font-medium mb-2">
                      {label}
                    </span>
                  )}
                  <h3 className="font-display text-lg font-semibold text-[var(--text)] mb-3">
                    {item.name}
                  </h3>
                  <ul className="space-y-2 mt-auto">
                    {item.specs.slice(0, 3).map((spec, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-[var(--muted)]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={data.equipmentHref ?? '/equipment'}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-h)] transition-colors ${focusRing}`}
              >
                {t('Весь парк оборудования', 'Full equipment list')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              {categoryLinks.length > 0 && (
                <>
                  <span className="text-sm text-[var(--muted)] mx-1">
                    {t('Подробнее по методам:', 'Method details:')}
                  </span>
                  {categoryLinks.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href!}
                      className={`px-4 py-2 rounded-full bg-[var(--bg3)] border border-[var(--border)] text-sm text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors ${focusRing}`}
                    >
                      {t(cat.titleRu, cat.titleEn)}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Допуски и лицензии (необязательный блок) */}
      {permits}

      {data.showCaseStudy === true && (
        <>
      {/* Case Study */}
      {/* Пример проекта */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[var(--text)] mb-10">
            {t('Пример проекта', 'Project Example')}
          </h2>
          <div className="card flex flex-col lg:flex-row gap-8">
            {data.caseImage && (
              <div className="lg:w-1/3">
                <Image
                  src={data.caseImage}
                  alt={t(data.caseStudy.titleRu, data.caseStudy.titleEn)}
                  width={500}
                  height={300}
                  className="rounded-xl w-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white text-sm font-medium">
                  {t(data.caseStudy.clientRu, data.caseStudy.clientEn)}
                </span>
                <span className="text-sm text-[var(--muted)]">{data.caseStudy.year}</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--text)] mb-6">
                {t(data.caseStudy.titleRu, data.caseStudy.titleEn)}
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-[var(--muted2)]">
                    {t('Объём работ', 'Scope of work')}
                  </dt>
                  <dd className="text-[var(--text)]">
                    {t(data.caseStudy.volumeRu, data.caseStudy.volumeEn)}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-[var(--muted2)]">{t('Результат', 'Result')}</dt>
                  <dd className="text-[var(--text)]">
                    {t(data.caseStudy.resultRu, data.caseStudy.resultEn)}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

        </>
      )}

      {/* Geography */}
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
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg3)] border border-[var(--border)] hover:border-[var(--accent)] transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm text-[var(--text)]">{t(region.ru, region.en)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.showStats === true && (data.stats?.length ?? 0) > 0 && (
        <>
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
      </section>        </>
      {/* Смежные услуги */}
      {data.related && data.related.length > 0 && (
        <section className="section bg-[var(--bg2)]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-[var(--text)] mb-10">
              {t('Смежные услуги', 'Related Services')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.related.map((rel) => (
                <Link
                  key={rel.href}
                  href={rel.href}
                  className={`card group flex flex-col gap-2 hover:border-[var(--accent)]/30 ${focusRing}`}
                >
                  <span className="flex items-center justify-between gap-3 font-semibold text-[var(--text)]">
                    {t(rel.titleRu, rel.titleEn)}
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-[var(--accent)]" />
                  </span>
                  {(rel.descRu || rel.descEn) && (
                    <span className="text-sm text-[var(--muted)] leading-relaxed">
                      {t(rel.descRu ?? '', rel.descEn ?? rel.descRu ?? '')}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
