'use client'

import { BarChart3, CheckCircle, ArrowRight, Download, Map, Target, TrendingUp, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTAForm } from '@/components/cta-form'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import { PageLayout } from '@/components/page-layout'
import Image from 'next/image'

const subMethods = [
  {
    id: 'ground',
    icon: Map,
    titleRu: 'Наземная гравиразведка',
    titleEn: 'Ground Gravity Survey',
    descRu: 'Высокоточные измерения ускорения свободного падения для изучения плотностных неоднородностей геологической среды. Выявление структур, связанных с рудными телами.',
    descEn: 'High-precision gravity acceleration measurements for studying density heterogeneities. Identification of ore-related structures.',
    image: '/images/methods/gravity-ground.jpg',
    tasksRu: [
      'Выявление тектонических структур',
      'Поиск рудных тел по плотностному контрасту',
      'Картирование интрузивных массивов',
      'Изучение глубинного строения',
    ],
    tasksEn: [
      'Tectonic structure identification',
      'Ore body detection by density contrast',
      'Intrusive massif mapping',
      'Deep structure study',
    ],
  },
  {
    id: 'gradient',
    icon: Activity,
    titleRu: 'Гравитационная градиентометрия',
    titleEn: 'Gravity Gradiometry',
    descRu: 'Измерение вторых производных гравитационного потенциала (горизонтальных и вертикальных градиентов) для повышения разрешающей способности.',
    descEn: 'Measurement of second derivatives of gravitational potential (horizontal and vertical gradients) for improved resolution.',
    image: '/images/methods/gravity-gradient.jpg',
    tasksRu: [
      'Детализация гравитационных аномалий',
      'Определение границ плотностных неоднородностей',
      'Локализация источников аномалий',
      'Повышение разрешения съемки',
    ],
    tasksEn: [
      'Gravity anomaly detailing',
      'Density heterogeneity boundary determination',
      'Anomaly source localization',
      'Survey resolution enhancement',
    ],
  },
  {
    id: 'microgravity',
    icon: Target,
    titleRu: 'Микрогравиразведка',
    titleEn: 'Microgravity Survey',
    descRu: 'Сверхвысокоточные измерения для поиска локальных объектов малого объема: карстовые полости, подземные выработки, зоны трещиноватости.',
    descEn: 'Ultra-high precision measurements for local small-volume objects: karst cavities, underground workings, fracture zones.',
    image: '/images/methods/microgravity.jpg',
    tasksRu: [
      'Поиск карстовых полостей',
      'Выявление подземных выработок',
      'Обнаружение зон тектонических нарушений',
      'Инженерно-геологические изыскания',
    ],
    tasksEn: [
      'Karst cavity detection',
      'Underground working identification',
      'Tectonic fracture zone detection',
      'Engineering-geological surveys',
    ],
  },
  {
    id: 'interpretation',
    icon: TrendingUp,
    titleRu: 'Обработка и интерпретация',
    titleEn: 'Processing & Interpretation',
    descRu: 'Комплексная обработка гравиметрических данных: введение поправок, фильтрация, трансформации, 2D/3D плотностное моделирование.',
    descEn: 'Comprehensive gravity data processing: corrections, filtering, transformations, 2D/3D density modeling.',
    image: '/images/methods/gravity-interpretation.jpg',
    tasksRu: [
      'Введение редукций и поправок',
      'Трансформации гравитационных полей',
      '2D и 3D плотностное моделирование',
      'Количественная интерпретация',
    ],
    tasksEn: [
      'Reductions and corrections',
      'Gravity field transformations',
      '2D and 3D density modeling',
      'Quantitative interpretation',
    ],
  },
]

const equipment = [
  {
    nameRu: 'Scintrex CG-6',
    nameEn: 'Scintrex CG-6',
    typeRu: 'Гравиметр автоматический',
    typeEn: 'Automatic gravimeter',
    qty: 1,
    specs: ['Точность 1 мкГал', 'Автоматическая компенсация наклона', 'GPS интеграция'],
    specsEn: ['1 μGal accuracy', 'Automatic tilt compensation', 'GPS integration'],
  },
  {
    nameRu: 'Scintrex CG-5',
    nameEn: 'Scintrex CG-5',
    typeRu: 'Гравиметр автоматический',
    typeEn: 'Automatic gravimeter',
    qty: 2,
    specs: ['Точность 5 мкГал', 'Встроенная память', 'Полевой вариант'],
    specsEn: ['5 μGal accuracy', 'Built-in memory', 'Field version'],
  },
  {
    nameRu: 'Autograv',
    nameEn: 'Autograv',
    typeRu: 'Гравиметр с кварцевой системой',
    typeEn: 'Quartz gravimeter',
    qty: 1,
    specs: ['Широкий диапазон', 'Высокая стабильность', 'Цифровой выход'],
    specsEn: ['Wide range', 'High stability', 'Digital output'],
  },
  {
    nameRu: 'GNSS приёмники',
    nameEn: 'GNSS Receivers',
    typeRu: 'Высокоточное позиционирование',
    typeEn: 'High-precision positioning',
    qty: 3,
    specs: ['RTK режим', 'Сантиметровая точность', 'Топографическая привязка'],
    specsEn: ['RTK mode', 'Centimeter accuracy', 'Topographic referencing'],
  },
]

const caseStudy = {
  titleRu: 'Гравиразведка на участке Невенреканская площадь',
  titleEn: 'Gravity Survey at Nevenrekanskaya Area',
  licenses: ['КРР03709БП', 'КРР03710БП'],
  licenseNames: ['Трехсестренская', 'Дорожнинская'],
  volumeRu: 'Площадь 120 км², сеть 250×50 м, 4800 точек измерений',
  volumeEn: '120 km² area, 250×50 m grid, 4800 measurement points',
  resultRu: 'Построена карта гравитационных аномалий Буге. Выделены локальные максимумы, связанные с интрузивными телами. Рекомендованы участки для детализации магнитной съемкой.',
  resultEn: 'Bouguer gravity anomaly map constructed. Local maxima associated with intrusive bodies identified. Areas recommended for detailed magnetic survey.',
}

export default function GravityPage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-card to-background overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm flex-wrap">
                  <Link href="/" className="hover:text-primary transition-colors">{t('Главная', 'Home')}</Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-primary transition-colors">{t('Услуги', 'Services')}</Link>
                  <span>/</span>
                  <Link href="/services/geophysics" className="hover:text-primary transition-colors">{t('Геофизика', 'Geophysics')}</Link>
                  <span>/</span>
                  <span className="text-foreground">{t('Гравиразведка', 'Gravity Survey')}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {t('Гравиразведка', 'Gravity Survey')}
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t(
                    'Высокоточные гравиметрические измерения для изучения плотностного строения недр, поиска рудных тел и структурного картирования.',
                    'High-precision gravity measurements for studying subsurface density structure, ore body detection, and structural mapping.'
                  )}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Methods - карточки с фиксированной структурой: текст слева, картинка справа */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="section-eyebrow">{t('Методы', 'Methods')}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {t('Методы гравиразведки', 'Gravity Survey Methods')}
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-8">
              {subMethods.map((method, index) => (
                <FadeIn key={method.id} delay={index * 0.1}>
                  <div className="card-enhanced rounded-2xl overflow-hidden group">
                    <div className="flex flex-col md:flex-row gap-6 p-6">
                      {/* Левая часть - текстовая */}
                      <div className="flex-1 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-md shrink-0">
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground">
                            {t(method.titleRu, method.titleEn)}
                          </h3>
                        </div>
                        
                        <p className="text-muted-foreground mb-5">
                          {t(method.descRu, method.descEn)}
                        </p>
                        
                        <div>
                          <h4 className="font-medium text-foreground mb-2 text-sm">
                            {t('Решаемые задачи:', 'Applications:')}
                          </h4>
                          <ul className="space-y-1">
                            {method.tasksRu.map((task, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {t(task, method.tasksEn[idx])}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Правая часть - картинка */}
                      <div className="relative w-full md:w-80 lg:w-96 rounded-xl overflow-hidden">
                        <Image
                          src={method.image}
                          alt={t(method.titleRu, method.titleEn)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent md:bg-gradient-to-r" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="section-eyebrow">{t('Оборудование', 'Equipment')}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {t('Аппаратура гравиразведки', 'Gravity Survey Equipment')}
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipment.map((item, index) => (
                <FadeIn key={item.nameRu} delay={index * 0.1}>
                  <div className="p-6 bg-background rounded-xl border border-border h-full hover:border-accent/50 transition-all hover:shadow-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-display text-xl font-semibold text-foreground">
                        {t(item.nameRu, item.nameEn)}
                      </h4>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                        {item.qty} {t('шт', 'pcs')}
                      </span>
                    </div>
                    <p className="text-sm text-accent mb-4">
                      {t(item.typeRu, item.typeEn)}
                    </p>
                    <ul className="space-y-1">
                      {item.specs.map((spec, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {t(spec, item.specsEn[idx])}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="section-eyebrow">{t('Кейс', 'Case Study')}</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {t('Реализованный проект', 'Completed Project')}
                  </h2>
                </div>

                <div className="card-enhanced p-8 rounded-2xl">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {t(caseStudy.titleRu, caseStudy.titleEn)}
                  </h3>
                  
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">{t('Лицензии:', 'Licenses:')}</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.licenses.map((license, idx) => (
                        <span key={license} className="px-3 py-1 bg-accent/10 text-accent text-sm font-mono rounded-lg">
                          {license} — {caseStudy.licenseNames[idx]}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{t('Объем работ:', 'Scope:')}</p>
                      <p className="text-foreground">{t(caseStudy.volumeRu, caseStudy.volumeEn)}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-accent/5 border border-accent/20 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">{t('Результат:', 'Result:')}</p>
                    <p className="text-foreground">{t(caseStudy.resultRu, caseStudy.resultEn)}</p>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <Button asChild>
                      <Link href="/projects">
                        {t('Все проекты', 'All Projects')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/documents/license-extract.pdf" target="_blank">
                        <Download className="mr-2 w-4 h-4" />
                        {t('Выписка лицензий', 'License Extract')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Back to Geophysics */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/services/geophysics">
                <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                {t('Все методы геофизики', 'All Geophysics Methods')}
              </Link>
            </Button>
          </div>
        </section>

        <CTAForm />
      </div>
    </PageLayout>
  )
}