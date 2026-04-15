'use client'

import { Navigation, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTAForm } from '@/components/cta-form'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'

const methods = [
  {
    titleRu: 'Гироскопическая инклинометрия',
    titleEn: 'Gyroscopic Inclinometry',
    descRu: 'Определение зенитного и азимутального углов скважины с помощью гироскопических датчиков. Не зависит от магнитных аномалий.',
    descEn: 'Borehole zenith and azimuth angle determination using gyroscopic sensors. Independent of magnetic anomalies.',
    tasksRu: [
      'Измерения в магнитоактивных породах',
      'Контроль траектории наклонных скважин',
      'Высокоточное позиционирование',
      'Работа вблизи обсадных колонн',
    ],
    tasksEn: [
      'Measurements in magnetic rocks',
      'Directional well trajectory control',
      'High-precision positioning',
      'Work near casing strings',
    ],
  },
  {
    titleRu: 'Магнитометрическая инклинометрия',
    titleEn: 'Magnetometric Inclinometry',
    descRu: 'Определение углов скважины по магнитному полю Земли. Высокая производительность в немагнитных породах.',
    descEn: 'Borehole angle determination using Earth magnetic field. High productivity in non-magnetic rocks.',
    tasksRu: [
      'Массовые измерения в немагнитных породах',
      'Экспресс-контроль траектории',
      'Экономичное решение',
      'Непрерывная запись',
    ],
    tasksEn: [
      'Mass measurements in non-magnetic rocks',
      'Quick trajectory control',
      'Cost-effective solution',
      'Continuous recording',
    ],
  },
]

const equipment = [
  {
    nameRu: 'ИГТ-43',
    nameEn: 'IGT-43',
    typeRu: 'Инклинометр гироскопический',
    typeEn: 'Gyroscopic inclinometer',
    qty: 8,
    specsRu: ['Точность азимута: ±1°', 'Точность зенита: ±0.25°', 'Диаметр: 43 мм', 'Температура: до +85°C'],
    specsEn: ['Azimuth accuracy: ±1°', 'Zenith accuracy: ±0.25°', 'Diameter: 43 mm', 'Temperature: up to +85°C'],
  },
  {
    nameRu: 'АИ-30',
    nameEn: 'AI-30',
    typeRu: 'Инклинометр магнитометрический',
    typeEn: 'Magnetometric inclinometer',
    qty: 3,
    specsRu: ['Точность азимута: ±2°', 'Точность зенита: ±0.5°', 'Диаметр: 30 мм', 'Автономная работа'],
    specsEn: ['Azimuth accuracy: ±2°', 'Zenith accuracy: ±0.5°', 'Diameter: 30 mm', 'Autonomous operation'],
  },
  {
    nameRu: 'ИММН-32А',
    nameEn: 'IMMN-32A',
    typeRu: 'Инклинометр магнитометрический',
    typeEn: 'Magnetometric inclinometer',
    qty: 1,
    specsRu: ['Точность азимута: ±1.5°', 'Точность зенита: ±0.3°', 'Диаметр: 32 мм', 'Цифровой выход'],
    specsEn: ['Azimuth accuracy: ±1.5°', 'Zenith accuracy: ±0.3°', 'Diameter: 32 mm', 'Digital output'],
  },
  {
    nameRu: 'СИМ-42',
    nameEn: 'SIM-42',
    typeRu: 'Инклинометр магнитометрический непрерывный',
    typeEn: 'Continuous magnetometric inclinometer',
    qty: 2,
    specsRu: ['Непрерывная запись', 'Высокая скорость', 'Диаметр: 42 мм', 'Память: 100 000 точек'],
    specsEn: ['Continuous recording', 'High speed', 'Diameter: 42 mm', 'Memory: 100,000 points'],
  },
  {
    nameRu: 'Кварц-32',
    nameEn: 'Quartz-32',
    typeRu: 'Кабельный магнитометрический инклинометр',
    typeEn: 'Cable magnetometric inclinometer',
    qty: 1,
    specsRu: ['Кабельная версия', 'Реальное время', 'Диаметр: 32 мм', 'Глубина: до 2000 м'],
    specsEn: ['Cable version', 'Real-time', 'Diameter: 32 mm', 'Depth: up to 2000 m'],
  },
  {
    nameRu: 'ИГМ-42-86/60',
    nameEn: 'IGM-42-86/60',
    typeRu: 'Инклинометр гироскопический',
    typeEn: 'Gyroscopic inclinometer',
    qty: 1,
    specsRu: ['Высокая точность', 'Расширенный диапазон', 'Диаметр: 42 мм', 'Температура: до +86°C'],
    specsEn: ['High accuracy', 'Extended range', 'Diameter: 42 mm', 'Temperature: up to +86°C'],
  },
]

export function InclinometryContent() {
  const { t } = useLanguage()

  const totalEquipment = equipment.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm flex-wrap">
                <Link href="/" className="hover:text-primary transition-colors">{t('Главная', 'Home')}</Link>
                <span>/</span>
                <Link href="/services/geophysics" className="hover:text-primary transition-colors">{t('Геофизика', 'Geophysics')}</Link>
                <span>/</span>
                <span className="text-foreground">{t('Инклинометрия', 'Inclinometry')}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Navigation className="w-8 h-8 text-accent" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  {t('Инклинометрия', 'Inclinometry')}
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t(
                  'Определение пространственного положения скважин с использованием гироскопических и магнитометрических инклинометров. Парк из 16 приборов.',
                  'Borehole spatial position determination using gyroscopic and magnetometric inclinometers. Fleet of 16 instruments.'
                )}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: totalEquipment.toString(), labelRu: 'инклинометров', labelEn: 'inclinometers' },
              { value: '8', labelRu: 'гироскопических', labelEn: 'gyroscopic' },
              { value: '8', labelRu: 'магнитометрических', labelEn: 'magnetometric' },
              { value: '±0.25°', labelRu: 'точность', labelEn: 'accuracy' },
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm">
                    {t(stat.labelRu, stat.labelEn)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="section-eyebrow">{t('Методы', 'Methods')}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {t('Типы инклинометрии', 'Inclinometry Types')}
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
                      {t('Преимущества:', 'Advantages:')}
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
                {t('Парк инклинометров', 'Inclinometer Fleet')}
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="p-6 bg-background rounded-xl border border-border h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-display text-xl font-semibold text-foreground">
                        {t(item.nameRu, item.nameEn)}
                      </h4>
                      <p className="text-sm text-accent">
                        {t(item.typeRu, item.typeEn)}
                      </p>
                    </div>
                    <span className="text-lg font-bold bg-accent/10 text-accent px-3 py-1 rounded-lg">
                      {item.qty}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {item.specsRu.map((spec, idx) => (
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

      {/* Back */}
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
