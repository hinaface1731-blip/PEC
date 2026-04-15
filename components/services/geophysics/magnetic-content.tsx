'use client'

import { Compass, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTAForm } from '@/components/cta-form'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'

const methods = [
  {
    titleRu: 'Пешеходная магнитная съемка',
    titleEn: 'Ground Magnetic Survey',
    descRu: 'Детальные измерения магнитного поля по регулярной сети с высокой точностью. Шаг по профилю от 5 м.',
    descEn: 'Detailed magnetic field measurements on regular grid with high precision. Profile spacing from 5 m.',
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
    titleRu: 'Градиентная магнитная съемка',
    titleEn: 'Gradient Magnetic Survey',
    descRu: 'Измерение вертикального градиента магнитного поля для повышения разрешающей способности и локализации источников.',
    descEn: 'Vertical magnetic gradient measurements for improved resolution and source localization.',
    tasksRu: [
      'Детализация аномалий',
      'Определение глубины источника',
      'Разделение наложенных аномалий',
    ],
    tasksEn: [
      'Anomaly detailing',
      'Source depth determination',
      'Overlapping anomaly separation',
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
    typeRu: 'Магнитометр оверхаузеровский (датчик)',
    typeEn: 'Overhauser magnetometer (sensor)',
    qty: 6,
    specs: ['Компактный дизайн', 'Высокая стабильность', 'Полевые условия'],
    specsEn: ['Compact design', 'High stability', 'Field conditions'],
  },
  {
    nameRu: 'Мэри Смарт',
    nameEn: 'Mary Smart',
    typeRu: 'Измеритель',
    typeEn: 'Meter',
    qty: 1,
    specs: ['Многофункциональный', 'Цифровой дисплей', 'Память измерений'],
    specsEn: ['Multifunctional', 'Digital display', 'Measurement memory'],
  },
  {
    nameRu: 'СРП-68-01',
    nameEn: 'SRP-68-01',
    typeRu: 'Дозиметр (гамма-съемка)',
    typeEn: 'Dosimeter (gamma survey)',
    qty: 2,
    specs: ['Гамма-излучение', 'Полевой вариант', 'Высокая чувствительность'],
    specsEn: ['Gamma radiation', 'Field version', 'High sensitivity'],
  },
]

export function MagneticContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm flex-wrap">
                <Link href="/" className="hover:text-primary transition-colors">{t('Главная', 'Home')}</Link>
                <span>/</span>
                <Link href="/services/geophysics" className="hover:text-primary transition-colors">{t('Геофизика', 'Geophysics')}</Link>
                <span>/</span>
                <span className="text-foreground">{t('Магниторазведка', 'Magnetic')}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Compass className="w-8 h-8 text-accent" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  {t('Магниторазведка', 'Magnetic Survey')}
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t(
                  'Наземная магнитная съемка с использованием высокоточных оверхаузеровских магнитометров. Картирование магнитных аномалий для поиска рудных тел.',
                  'Ground magnetic survey using high-precision Overhauser magnetometers. Magnetic anomaly mapping for ore body detection.'
                )}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Methods */}
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

          <div className="grid md:grid-cols-2 gap-8">
            {methods.map((method, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-enhanced p-8 rounded-2xl h-full">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {t(method.titleRu, method.titleEn)}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t(method.descRu, method.descEn)}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-3">
                      {t('Решаемые задачи:', 'Applications:')}
                    </h4>
                    <ul className="space-y-2">
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
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-6 bg-background rounded-xl border border-border h-full">
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
                        <div className="w-1 h-1 bg-accent rounded-full" />
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
  )
}
