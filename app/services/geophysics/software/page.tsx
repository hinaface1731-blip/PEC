'use client'

import { Code2, CheckCircle, ArrowRight, Download, BarChart3, Target, Database, Cloud, Shield, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTAForm } from '@/components/cta-form'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import { PageLayout } from '@/components/page-layout'
import Image from 'next/image'

const subMethods = [
  {
    id: 'magnetic',
    icon: BarChart3,
    titleRu: 'Обработка магниторазведки',
    titleEn: 'Magnetic Data Processing',
    descRu: 'Специализированное ПО для обработки данных магнитной съемки: фильтрация, трансформации, инверсия, 2D/3D моделирование.',
    descEn: 'Specialized software for magnetic survey data processing: filtering, transformations, inversion, 2D/3D modeling.',
    image: '/images/methods/software-magnetic.jpg',
    tasksRu: [
      'Фильтрация и трансформации полей',
      'Построение карт аномалий',
      '2D и 3D магнитное моделирование',
      'Количественная интерпретация',
    ],
    tasksEn: [
      'Field filtering and transformations',
      'Anomaly mapping',
      '2D and 3D magnetic modeling',
      'Quantitative interpretation',
    ],
  },
  {
    id: 'electrical',
    icon: Target,
    titleRu: 'Обработка электроразведки',
    titleEn: 'Electrical Data Processing',
    descRu: 'Обработка данных АМТЗ, ЗСБ, ВП, электротомографии. Инверсия, построение геоэлектрических разрезов и 3D моделей.',
    descEn: 'Processing of AMT, TEM, IP, ERT data. Inversion, geoelectric section and 3D model construction.',
    image: '/images/methods/software-electrical.jpg',
    tasksRu: [
      'Инверсия данных АМТЗ/МТ',
      'Инверсия данных ЗСБ',
      '2D/3D моделирование',
      'Построение геоэлектрических разрезов',
    ],
    tasksEn: [
      'AMT/MT data inversion',
      'TEM data inversion',
      '2D/3D modeling',
      'Geoelectric section construction',
    ],
  },
  {
    id: 'seismic',
    icon: Database,
    titleRu: 'Обработка сейсморазведки',
    titleEn: 'Seismic Data Processing',
    descRu: 'Современные алгоритмы обработки 2D и 3D сейсмических данных. Миграция, AVO-анализ, инверсия, построение скоростных моделей.',
    descEn: 'Modern 2D and 3D seismic data processing algorithms. Migration, AVO analysis, inversion, velocity model building.',
    image: '/images/methods/software-seismic.jpg',
    tasksRu: [
      'Обработка 2D и 3D сейсмики',
      'Миграция до и после суммирования',
      'AVO анализ и инверсия',
      'Построение скоростных моделей',
    ],
    tasksEn: [
      '2D and 3D seismic processing',
      'Pre and post-stack migration',
      'AVO analysis and inversion',
      'Velocity model building',
    ],
  },
  {
    id: 'gis',
    icon: Cloud,
    titleRu: 'ГИС и картография',
    titleEn: 'GIS & Mapping',
    descRu: 'Создание и ведение геологических баз данных. Построение карт, разрезов, 3D моделей месторождений.',
    descEn: 'Geological database creation and management. Map, section and 3D deposit model construction.',
    image: '/images/methods/software-gis.jpg',
    tasksRu: [
      'Создание геологических баз данных',
      'Построение карт и разрезов',
      '3D моделирование месторождений',
      'Подготовка отчётной документации',
    ],
    tasksEn: [
      'Geological database creation',
      'Map and section construction',
      '3D deposit modeling',
      'Report documentation preparation',
    ],
  },
  {
    id: 'well-logging',
    icon: TrendingUp,
    titleRu: 'Обработка ГИС',
    titleEn: 'Well Logging Processing',
    descRu: 'Обработка и интерпретация каротажных данных. Литологическое расчленение, оценка коллекторских свойств, подсчет запасов.',
    descEn: 'Logging data processing and interpretation. Lithological breakdown, reservoir property evaluation, resource estimation.',
    image: '/images/methods/software-logging.jpg',
    tasksRu: [
      'Стратиграфическая привязка',
      'Литологическая интерпретация',
      'Оценка пористости и проницаемости',
      'Подготовка для подсчета запасов',
    ],
    tasksEn: [
      'Stratigraphic correlation',
      'Lithological interpretation',
      'Porosity and permeability evaluation',
      'Resource estimation preparation',
    ],
  },
]

const equipment = [
  {
    nameRu: 'Oasis Montaj',
    nameEn: 'Oasis Montaj',
    typeRu: 'Геофизический софт',
    typeEn: 'Geophysical software',
    qty: 1,
    specs: ['Магниторазведка', 'Гравиразведка', '2D/3D инверсия'],
    specsEn: ['Magnetics', 'Gravity', '2D/3D inversion'],
  },
  {
    nameRu: 'RadExPro',
    nameEn: 'RadExPro',
    typeRu: 'Сейсмическая обработка',
    typeEn: 'Seismic processing',
    qty: 1,
    specs: ['2D/3D сейсмика', 'Миграция', 'AVO анализ'],
    specsEn: ['2D/3D seismic', 'Migration', 'AVO analysis'],
  },
  {
    nameRu: 'ZondRes2D/3D',
    nameEn: 'ZondRes2D/3D',
    typeRu: 'Электроразведка',
    typeEn: 'Electrical survey',
    qty: 1,
    specs: ['АМТЗ инверсия', 'ЗСБ инверсия', '2D/3D модели'],
    specsEn: ['AMT inversion', 'TEM inversion', '2D/3D models'],
  },
  {
    nameRu: 'Micromine',
    nameEn: 'Micromine',
    typeRu: 'ГИС и моделирование',
    typeEn: 'GIS & modeling',
    qty: 1,
    specs: ['3D моделирование', 'Подсчет запасов', 'Планирование ГРР'],
    specsEn: ['3D modeling', 'Resource estimation', 'Exploration planning'],
  },
]

const caseStudy = {
  titleRu: 'Комплексная обработка геофизических данных',
  titleEn: 'Integrated Geophysical Data Processing',
  licenses: ['КРР03707БП', 'КРР03708БП', 'КРР03709БП'],
  licenseNames: ['Северо-Широкинская', 'Центрально-Широкинская', 'Трехсестренская'],
  volumeRu: 'Обработка данных: магниторазведка 850 км², АМТЗ 120 км, ГИС 2500 м',
  volumeEn: 'Data processing: magnetics 850 km², AMT 120 km, logging 2500 m',
  resultRu: 'Построены карты магнитных и гравитационных аномалий. Выполнена 2D инверсия данных АМТЗ. Проведена литологическая интерпретация ГИС. Локализованы перспективные участки для постановки поисковых работ.',
  resultEn: 'Magnetic and gravity anomaly maps constructed. 2D AMT data inversion performed. Logging lithological interpretation completed. Prospective areas for exploration identified.',
}

export default function SoftwarePage() {
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
                  <span className="text-foreground">{t('ПО для обработки', 'Processing Software')}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {t('ПО для обработки данных', 'Processing Software')}
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t(
                    'Современное программное обеспечение для обработки и интерпретации геофизических данных. Профессиональные лицензии и опытные специалисты.',
                    'Modern software for geophysical data processing and interpretation. Professional licenses and experienced specialists.'
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
                <span className="section-eyebrow">{t('Направления', 'Directions')}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {t('Обработка данных', 'Data Processing')}
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
                            {t('Возможности:', 'Capabilities:')}
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
                <span className="section-eyebrow">{t('ПО', 'Software')}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {t('Программное обеспечение', 'Software')}
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
                        {t('лицензия', 'license')}
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