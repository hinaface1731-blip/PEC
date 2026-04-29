'use client'

import { Waves, CheckCircle, ArrowRight, Download, Map, Target, Activity, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTAForm } from '@/components/cta-form'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import { PageLayout } from '@/components/page-layout'
import Image from 'next/image'

const subMethods = [
  {
    id: '2d',
    icon: Map,
    titleRu: '2D сейсморазведка МОГТ',
    titleEn: '2D Seismic Survey (CDP)',
    descRu: 'Метод отраженных волн по системе МОГТ (многократные перекрытия) для изучения глубинного строения земной коры. Позволяет строить временные и глубинные разрезы.',
    descEn: 'Reflection wave method using CDP (common depth point) technique for studying deep crustal structure. Enables time and depth section construction.',
    image: '/images/methods/seismic-2d.jpg',
    tasksRu: [
      'Изучение глубинного строения до 5-10 км',
      'Выявление тектонических нарушений',
      'Поиск структурных ловушек',
      'Картирование отражающих горизонтов',
    ],
    tasksEn: [
      'Deep structure study up to 5-10 km',
      'Tectonic fault identification',
      'Structural trap detection',
      'Reflecting horizon mapping',
    ],
  },
  {
    id: '3d',
    icon: Target,
    titleRu: '3D сейсморазведка',
    titleEn: '3D Seismic Survey',
    descRu: 'Объемная сейсмическая съемка для получения трехмерной модели геологической среды. Максимальная детальность и точность пространственного положения объектов.',
    descEn: '3D seismic acquisition for obtaining three-dimensional geological model. Maximum detail and spatial accuracy.',
    image: '/images/methods/seismic-3d.jpg',
    tasksRu: [
      '3D моделирование геологической среды',
      'Детальное изучение сложных зон',
      'Повышение точности прогноза',
      'Подготовка к поисковому бурению',
    ],
    tasksEn: [
      '3D geological environment modeling',
      'Detailed study of complex zones',
      'Forecast accuracy improvement',
      'Exploration drilling preparation',
    ],
  },
  {
    id: 'shallow',
    icon: Activity,
    titleRu: 'Малоглубинная сейсморазведка',
    titleEn: 'Shallow Seismic Survey',
    descRu: 'Инженерная сейсморазведка для изучения верхней части разреза (до 100-200 м). Применяется при инженерно-геологических изысканиях.',
    descEn: 'Engineering seismics for near-surface study (up to 100-200 m). Applied in engineering-geological surveys.',
    image: '/images/methods/seismic-shallow.jpg',
    tasksRu: [
      'Изучение верхней части разреза',
      'Поиск карстовых полостей',
      'Инженерно-геологические изыскания',
      'Оценка грунтов под строительство',
    ],
    tasksEn: [
      'Near-surface study',
      'Karst cavity detection',
      'Engineering-geological surveys',
      'Ground assessment for construction',
    ],
  },
  {
    id: 'processing',
    icon: TrendingUp,
    titleRu: 'Обработка и интерпретация',
    titleEn: 'Processing & Interpretation',
    descRu: 'Современные алгоритмы обработки сейсмических данных: деконволюция, миграция, AVO-анализ, построение скоростных моделей.',
    descEn: 'Modern seismic data processing algorithms: deconvolution, migration, AVO analysis, velocity model building.',
    image: '/images/methods/seismic-processing.jpg',
    tasksRu: [
      'Обработка 2D и 3D данных',
      'Построение скоростных моделей',
      'AVO анализ и инверсия',
      'Геологическая интерпретация',
    ],
    tasksEn: [
      '2D and 3D data processing',
      'Velocity model building',
      'AVO analysis and inversion',
      'Geological interpretation',
    ],
  },
]

const equipment = [
  {
    nameRu: 'Скала-48',
    nameEn: 'Skala-48',
    typeRu: 'Сейсмостанция',
    typeEn: 'Seismic station',
    qty: 1,
    specs: ['48 каналов', '24-бит АЦП', 'Запись на SSD'],
  },
  {
    nameRu: 'Сейсмоприёмники GS-20DX',
    nameEn: 'GS-20DX Geophones',
    typeRu: 'Сейсмоприёмники',
    typeEn: 'Geophones',
    qty: 120,
    specs: ['Частота 10 Гц', 'Чувствительность 80 В/м/с', 'Герметичные'],
  },
  {
    nameRu: 'Источник ЭВ-65/105',
    nameEn: 'EV-65/105 Source',
    typeRu: 'Взрывной источник',
    typeEn: 'Explosive source',
    qty: 1,
    specs: ['Глубина скважин до 25 м', 'Наработка 3000 скважин', 'Сейсмический патрон'],
  },
  {
    nameRu: 'RadExPro',
    nameEn: 'RadExPro',
    typeRu: 'ПО для обработки',
    typeEn: 'Processing software',
    qty: 1,
    specs: ['2D/3D обработка', 'Миграция Кирхгофа', 'AVO анализ'],
  },
]

const caseStudy = {
  titleRu: 'Сейсморазведка на Ванкорском месторождении',
  titleEn: 'Seismic Survey at Vankor Field',
  licenses: ['КРР03711БП', 'КРР03712БП'],
  licenseNames: ['Симсовская', 'Ванкорская'],
  volumeRu: '3D сейсморазведка на площади 250 км², шаг ОГТ 25×25 м',
  volumeEn: '3D seismic survey over 250 km² area, CDP spacing 25×25 m',
  resultRu: 'Построена 3D скоростная и геологическая модель. Выделены перспективные ловушки углеводородов. Подготовлены рекомендации для постановки глубокого бурения.',
  resultEn: '3D velocity and geological model constructed. Prospective hydrocarbon traps identified. Deep drilling recommendations prepared.',
}

export default function SeismicPage() {
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
                  <span className="text-foreground">{t('Сейсморазведка', 'Seismic Survey')}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Waves className="w-8 h-8 text-orange-500" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {t('Сейсморазведка', 'Seismic Survey')}
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t(
                    'Комплекс сейсмических методов для изучения глубинного строения земной коры, поиска и разведки месторождений углеводородов и твердых полезных ископаемых.',
                    'Complex of seismic methods for deep crustal structure study, oil & gas and mineral exploration.'
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
                  {t('Методы сейсморазведки', 'Seismic Survey Methods')}
                </h2>
              </div>
            </FadeIn>

            <div className="space-y-8">
              {subMethods.map((method, index) => (
                <FadeIn key={method.id} delay={index * 0.1}>
                  <div className="card-enhanced rounded-2xl overflow-hidden group">
                    <div className="flex flex-col md:flex-row">
                      {/* Левая часть - текстовая */}
                      <div className="flex-1 p-6 md:p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                            <method.icon className="w-6 h-6 text-orange-500" />
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
                          <ul className="space-y-2">
                            {method.tasksRu.map((task, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  {t(task, method.tasksEn[idx])}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Правая часть - картинка */}
                      <div className="relative w-full md:w-80 lg:w-96 h-64 md:h-auto">
                        <Image
                          src={method.image}
                          alt={t(method.titleRu, method.titleEn)}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 384px"
                        />
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
                  {t('Аппаратура сейсморазведки', 'Seismic Survey Equipment')}
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipment.map((item, index) => (
                <FadeIn key={item.nameRu} delay={index * 0.1}>
                  <div className="p-6 bg-background rounded-xl border border-border h-full hover:border-orange-500/50 transition-all hover:shadow-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-display text-xl font-semibold text-foreground">
                        {t(item.nameRu, item.nameEn)}
                      </h4>
                      <span className="text-xs bg-orange-500/10 text-orange-500 px-2 py-1 rounded">
                        {item.qty} {t('шт', 'pcs')}
                      </span>
                    </div>
                    <p className="text-sm text-orange-500 mb-4">
                      {t(item.typeRu, item.typeEn)}
                    </p>
                    <ul className="space-y-2">
                      {item.specs.map((spec, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                          {spec}
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

                <div className="card-enhanced p-6 md:p-8 rounded-2xl">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {t(caseStudy.titleRu, caseStudy.titleEn)}
                  </h3>
                  
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground mb-2">{t('Лицензии:', 'Licenses:')}</p>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.licenses.map((license, idx) => (
                        <span key={license} className="px-3 py-1 bg-orange-500/10 text-orange-500 text-sm font-mono rounded-lg">
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

                  <div className="p-4 bg-orange-500/5 border border-orange-500/20 rounded-xl">
                    <p className="text-sm text-muted-foreground mb-1">{t('Результат:', 'Result:')}</p>
                    <p className="text-foreground">{t(caseStudy.resultRu, caseStudy.resultEn)}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <Button asChild>
                      <Link href="/projects">
                        {t('Все проекты', 'All Projects')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/documents/license-extract.pdf" target="_blank" rel="noopener noreferrer">
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
      </div>
    </PageLayout>
  )
}