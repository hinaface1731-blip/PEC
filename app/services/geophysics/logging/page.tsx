'use client'

import { Activity, CheckCircle, ArrowRight, Download, BarChart3, Target, Waves, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTAForm } from '@/components/cta-form'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import { PageLayout } from '@/components/page-layout'
import Image from 'next/image'

const subMethods = [
  {
    id: 'electric',
    icon: BarChart3,
    titleRu: 'Электрический каротаж',
    titleEn: 'Electrical Logging',
    descRu: 'Комплекс методов для изучения электрических свойств горных пород: КС, ПС, БК, МБК, микрозонды. Применяется для литологического расчленения разреза.',
    descEn: 'Methods for studying rock electrical properties: resistivity, SP, laterolog, microlog. Used for lithological section breakdown.',
    image: '/images/methods/logging-electric.jpg',
    tasksRu: [
      'Литологическое расчленение разреза',
      'Выделение коллекторов',
      'Определение удельного сопротивления',
      'Оценка пористости',
    ],
    tasksEn: [
      'Lithological section breakdown',
      'Reservoir identification',
      'Resistivity determination',
      'Porosity estimation',
    ],
  },
  {
    id: 'radioactive',
    icon: Activity,
    titleRu: 'Радиоактивный каротаж',
    titleEn: 'Radioactive Logging',
    descRu: 'Методы естественной (ГК) и индуцированной (ГГК, НК) радиоактивности. Гамма-каротаж, гамма-гамма-каротаж, нейтронный каротаж.',
    descEn: 'Natural (GR) and induced (Density, Neutron) radioactivity methods. Gamma, gamma-gamma, neutron logging.',
    image: '/images/methods/logging-radioactive.jpg',
    tasksRu: [
      'Определение глинистости (ГК)',
      'Оценка плотности пород (ГГК)',
      'Определение пористости (НК)',
      'Выявление радиоактивных руд',
    ],
    tasksEn: [
      'Clay content determination (GR)',
      'Rock density estimation (Density)',
      'Porosity determination (Neutron)',
      'Radioactive ore identification',
    ],
  },
  {
    id: 'acoustic',
    icon: Waves,
    titleRu: 'Акустический каротаж',
    titleEn: 'Acoustic Logging',
    descRu: 'Измерение скорости распространения упругих волн для определения упругих свойств пород, трещиноватости и пористости.',
    descEn: 'Elastic wave velocity measurements for rock elastic properties, fracture, and porosity determination.',
    image: '/images/methods/logging-acoustic.jpg',
    tasksRu: [
      'Определение скоростей продольных и поперечных волн',
      'Оценка трещиноватости',
      'Расчет упругих модулей',
      'Сейсмическое моделирование',
    ],
    tasksEn: [
      'P and S wave velocity determination',
      'Fracture evaluation',
      'Elastic moduli calculation',
      'Seismic modeling',
    ],
  },
  {
    id: 'inclinometry',
    icon: Target,
    titleRu: 'Инклинометрия скважин',
    titleEn: 'Well Inclinometry',
    descRu: 'Измерение пространственного положения скважины: зенитный и азимутальный углы. Контроль проходки и точное позиционирование.',
    descEn: 'Borehole spatial position measurement: inclination and azimuth angles. Drilling control and precise positioning.',
    image: '/images/methods/logging-inclinometry.jpg',
    tasksRu: [
      'Контроль траектории скважины',
      'Определение координат забоя',
      'Пространственная привязка данных',
      'Контроль наклонно-направленного бурения',
    ],
    tasksEn: [
      'Well trajectory control',
      'Bottom hole coordinate determination',
      'Spatial data referencing',
      'Directional drilling control',
    ],
  },
  {
    id: 'processing',
    icon: TrendingUp,
    titleRu: 'Обработка и интерпретация ГИС',
    titleEn: 'Processing & Interpretation',
    descRu: 'Комплексная обработка каротажных данных: стратиграфическая привязка, литологическая интерпретация, подсчет коэффициентов.',
    descEn: 'Comprehensive logging data processing: stratigraphic correlation, lithological interpretation, coefficient calculation.',
    image: '/images/methods/logging-processing.jpg',
    tasksRu: [
      'Стратиграфическая привязка',
      'Литологическая интерпретация',
      'Оценка емкостных свойств',
      'Подсчет коэффициентов пористости',
    ],
    tasksEn: [
      'Stratigraphic correlation',
      'Lithological interpretation',
      'Reservoir property evaluation',
      'Porosity coefficient calculation',
    ],
  },
]

const equipment = [
  {
    nameRu: 'Вулкан V3',
    nameEn: 'Vulkan V3',
    typeRu: 'Каротажная станция',
    typeEn: 'Logging station',
    qty: 5,
    specs: ['Скорость регистрации до 30 м/мин', '16 каналов', 'Глубина до 3000 м'],
  },
  {
    nameRu: 'ГК-43',
    nameEn: 'GR-43',
    typeRu: 'Гамма-каротаж',
    typeEn: 'Gamma ray tool',
    qty: 3,
    specs: ['Диапазон 0-1000 мкР/ч', 'Чувствительность 10 имп/мкР', 'Термостабильный'],
  },
  {
    nameRu: 'ГГКМ-43',
    nameEn: 'GGKM-43',
    typeRu: 'Гамма-гамма-каротаж плотностной',
    typeEn: 'Density gamma-gamma tool',
    qty: 2,
    specs: ['Плотность 1.0-3.0 г/см³', 'Погрешность 0.03 г/см³', 'Источник Cs-137'],
  },
  {
    nameRu: 'ИГТ-43',
    nameEn: 'IGT-43',
    typeRu: 'Гироскопический инклинометр',
    typeEn: 'Gyroscopic inclinometer',
    qty: 8,
    specs: ['Зенит 0-180°', 'Азимут 0-360°', 'Точность 0.1°'],
  },
]

const caseStudy = {
  titleRu: 'Каротаж поисковых скважин на Таймыре',
  titleEn: 'Well Logging at Taimyr Exploration Wells',
  licenses: ['КРР03707БП', 'КРР03708БП'],
  licenseNames: ['Северо-Широкинская', 'Центрально-Широкинская'],
  volumeRu: 'Каротаж 12 скважин, общий объем 2500 метров',
  volumeEn: 'Logging of 12 wells, total 2500 meters',
  resultRu: 'Проведен комплекс ГИС (ГК, ГГК, КС, ПС, инклинометрия). Выполнена литологическая интерпретация, выделены рудные интервалы. Подготовлены материалы для подсчета запасов.',
  resultEn: 'Logging complex completed (GR, Density, Resistivity, SP, inclinometry). Lithological interpretation performed, ore intervals identified. Resource estimation materials prepared.',
}

export default function LoggingPage() {
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
                  <span className="text-foreground">{t('Каротаж скважин', 'Well Logging')}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <Activity className="w-8 h-8 text-orange-500" />
                  </div>
                  <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                    {t('Каротаж скважин (ГИС)', 'Well Logging')}
                  </h1>
                </div>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t(
                    'Комплекс геофизических исследований скважин для изучения геологического разреза, литологического расчленения и выявления полезных ископаемых.',
                    'Complex of borehole geophysical surveys for geological section study, lithological breakdown and mineral identification.'
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
                  {t('Методы каротажа', 'Logging Methods')}
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
                  {t('Аппаратура каротажа', 'Logging Equipment')}
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