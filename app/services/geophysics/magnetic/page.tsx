'use client'

import { Compass, CheckCircle, ArrowRight, Download, Target, BarChart3, Map, Activity } from 'lucide-react'
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
    titleRu: 'Пешеходная магнитная съемка',
    titleEn: 'Ground Magnetic Survey',
    descRu: 'Детальные измерения магнитного поля по регулярной сети с высокой точностью. Шаг по профилю от 5 м, чувствительность 0.01 нТл.',
    descEn: 'Detailed magnetic field measurements on regular grid with high precision. Profile spacing from 5 m, 0.01 nT sensitivity.',
    image: '/images/methods/ground-magnetic.jpg',
    tasksRu: [
      'Картирование магнитных аномалий',
      'Поиск магнетитсодержащих руд',
      'Выделение интрузивных тел',
      'Структурное картирование',
    ],
    tasksEn: [
      'Magnetic anomaly mapping',
      'Magnetite ore detection',
      'Intrusive body identification',
      'Structural mapping',
    ],
  },
  {
    id: 'gradient',
    icon: Activity,
    titleRu: 'Градиентная магнитная съемка',
    titleEn: 'Gradient Magnetic Survey',
    descRu: 'Измерение вертикального градиента магнитного поля для повышения разрешающей способности и точной локализации источников аномалий.',
    descEn: 'Vertical magnetic gradient measurements for improved resolution and precise anomaly source localization.',
    image: '/images/methods/gradient-magnetic.jpg',
    tasksRu: [
      'Детализация магнитных аномалий',
      'Определение глубины залегания источника',
      'Разделение наложенных аномалий',
      'Повышение разрешения съемки',
    ],
    tasksEn: [
      'Magnetic anomaly detailing',
      'Source depth determination',
      'Overlapping anomaly separation',
      'Survey resolution enhancement',
    ],
  },
  {
    id: 'uav',
    icon: Target,
    titleRu: 'Аэромагнитная съемка с БПЛА',
    titleEn: 'UAV Magnetic Survey',
    descRu: 'Высокоточная магнитная съемка с использованием беспилотных летательных аппаратов. Быстрое покрытие больших площадей с высокой детальностью.',
    descEn: 'High-precision magnetic survey using UAVs. Fast coverage of large areas with high resolution.',
    image: '/images/methods/uav-magnetic.jpg',
    tasksRu: [
      'Съемка труднодоступных участков',
      'Детальное изучение перспективных площадей',
      'Быстрая разбраковка аномалий',
      'Картирование на ранних стадиях ГРР',
    ],
    tasksEn: [
      'Inaccessible area surveying',
      'Detailed prospective area study',
      'Rapid anomaly screening',
      'Early-stage exploration mapping',
    ],
  },
  {
    id: 'interpretation',
    icon: BarChart3,
    titleRu: 'Обработка и интерпретация',
    titleEn: 'Processing & Interpretation',
    descRu: 'Комплексная обработка данных магнитной съемки: фильтрация, трансформации, 2D/3D моделирование, количественная интерпретация аномалий.',
    descEn: 'Comprehensive magnetic data processing: filtering, transformations, 2D/3D modeling, quantitative anomaly interpretation.',
    image: '/images/methods/magnetic-interpretation.jpg',
    tasksRu: [
      'Фильтрация и трансформации полей',
      '2D и 3D магнитное моделирование',
      'Количественная интерпретация',
      'Геологическое картирование',
    ],
    tasksEn: [
      'Field filtering and transformations',
      '2D and 3D magnetic modeling',
      'Quantitative interpretation',
      'Geological mapping',
    ],
  },
]

const equipment = [
  {
    nameRu: 'SmartMag',
    nameEn: 'SmartMag',
    typeRu: 'Магнитометр оверхаузеровский',
    typeEn: 'Overhauser magnetometer',
    qty: 1,
    specs: ['Точность 0.01 нТл', 'GPS интеграция', 'Непрерывная запись'],
    specsEn: ['0.01 nT accuracy', 'GPS integration', 'Continuous recording'],
  },
  {
    nameRu: 'MiniMag',
    nameEn: 'MiniMag',
    typeRu: 'Магнитометр оверхаузеровский',
    typeEn: 'Overhauser magnetometer',
    qty: 6,
    specs: ['Компактный дизайн', 'Высокая стабильность', 'Вес 3.1 кг'],
    specsEn: ['Compact design', 'High stability', 'Weight 3.1 kg'],
  },
  {
    nameRu: 'MaxiMag',
    nameEn: 'MaxiMag',
    typeRu: 'Градиентометр оверхаузеровский',
    typeEn: 'Overhauser gradiometer',
    qty: 1,
    specs: ['Два датчика', 'Градиентные измерения', 'CAN интерфейс'],
    specsEn: ['Two sensors', 'Gradient measurements', 'CAN interface'],
  },
  {
    nameRu: 'СРП-68-01',
    nameEn: 'SRP-68-01',
    typeRu: 'Дозиметр для гамма-съемки',
    typeEn: 'Dosimeter for gamma survey',
    qty: 2,
    specs: ['Гамма-излучение', 'Полевой вариант', 'Высокая чувствительность'],
    specsEn: ['Gamma radiation', 'Field version', 'High sensitivity'],
  },
]

const caseStudy = {
  titleRu: 'Магнитная съемка на участке Марсианская площадь',
  titleEn: 'Magnetic Survey at Marsianskaya Area',
  licenses: ['КРР03707БП', 'КРР03708БП'],
  licenseNames: ['Северо-Широкинская', 'Центрально-Широкинская'],
  volumeRu: 'Площадь 850 км², пешеходная магнитная съемка с шагом 50×20 м',
  volumeEn: '850 km² area, ground magnetic survey with 50×20 m spacing',
  resultRu: 'Выявлены локальные магнитные аномалии, оконтурены перспективные участки для постановки поисковых работ. Даны рекомендации на бурение.',
  resultEn: 'Local magnetic anomalies identified, prospective areas outlined for exploration. Drilling recommendations provided.',
}

export default function MagneticPage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-br from-card to-background overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
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
                  <span className="text-foreground">{t('Магниторазведка', 'Magnetic Survey')}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Compass className="w-8 h-8 text-white" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {t('Магниторазведка', 'Magnetic Survey')}
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t(
                    'Наземная и аэромагнитная съемка с использованием высокоточных оверхаузеровских магнитометров. Картирование магнитных аномалий для поиска рудных тел и структурного картирования.',
                    'Ground and UAV magnetic survey using high-precision Overhauser magnetometers. Magnetic anomaly mapping for ore body detection and structural mapping.'
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
                  {t('Виды магнитных съемок', 'Types of Magnetic Surveys')}
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
                  {t('Аппаратура магниторазведки', 'Magnetic Survey Equipment')}
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