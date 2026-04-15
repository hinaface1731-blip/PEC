'use client'

import { motion } from 'framer-motion'
import { Zap, CheckCircle, ArrowRight, FileText, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTAForm } from '@/components/cta-form'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'

const subMethods = [
  {
    id: 'amtz',
    titleRu: 'АМТЗ (Аудиомагнитотеллурические зондирования)',
    titleEn: 'AMT (Audio-Magnetotelluric Sounding)',
    descRu: 'Метод основан на регистрации естественных электромагнитных полей в диапазоне частот 1-10000 Гц. Позволяет изучать геоэлектрический разрез на глубинах до 2-3 км.',
    descEn: 'Method based on recording natural electromagnetic fields in the 1-10000 Hz frequency range. Allows studying geoelectric sections to depths of 2-3 km.',
    tasksRu: [
      'Картирование глубинных структур',
      'Выделение зон разломов и трещиноватости',
      'Поиск глубокозалегающих рудных тел',
      'Изучение геологического строения под наносами',
    ],
    tasksEn: [
      'Deep structure mapping',
      'Identification of fault and fracture zones',
      'Search for deep-seated ore bodies',
      'Geological structure study beneath overburden',
    ],
  },
  {
    id: 'zsb',
    titleRu: 'ЗСБ (Зондирование становлением поля в ближней зоне)',
    titleEn: 'TEM (Transient Electromagnetic Method)',
    descRu: 'Импульсный электромагнитный метод с контролируемым источником. Высокая чувствительность к проводящим объектам на глубинах до 500-800 м.',
    descEn: 'Pulsed electromagnetic method with controlled source. High sensitivity to conductive objects at depths up to 500-800 m.',
    tasksRu: [
      'Поиск сульфидных рудных тел',
      'Картирование водоносных горизонтов',
      'Детальное изучение верхней части разреза',
      'Определение мощности рыхлых отложений',
    ],
    tasksEn: [
      'Search for sulfide ore bodies',
      'Aquifer mapping',
      'Detailed upper section study',
      'Overburden thickness determination',
    ],
  },
  {
    id: 'vp',
    titleRu: 'ВП (Метод вызванной поляризации)',
    titleEn: 'IP (Induced Polarization Method)',
    descRu: 'Метод основан на изучении процессов накопления и разрядки электрических зарядов в горных породах. Эффективен для поиска вкрапленных сульфидных руд.',
    descEn: 'Method based on studying charge accumulation and discharge processes in rocks. Effective for disseminated sulfide ore detection.',
    tasksRu: [
      'Поиск вкрапленного сульфидного оруденения',
      'Оконтуривание рудных зон',
      'Оценка сульфидности руд',
      'Разделение аномалий по типу источника',
    ],
    tasksEn: [
      'Disseminated sulfide mineralization search',
      'Ore zone delineation',
      'Ore sulfide content estimation',
      'Anomaly source type differentiation',
    ],
  },
  {
    id: 'ert',
    titleRu: 'Электротомография (ЭРТ)',
    titleEn: 'Electrical Resistivity Tomography (ERT)',
    descRu: '2D/3D картирование удельного электрического сопротивления с высоким разрешением. Детальное изучение неоднородностей геологической среды.',
    descEn: '2D/3D resistivity mapping with high resolution. Detailed study of geological medium heterogeneities.',
    tasksRu: [
      'Детальное структурное картирование',
      'Поиск карстовых полостей',
      'Изучение зон тектонических нарушений',
      'Гидрогеологические исследования',
    ],
    tasksEn: [
      'Detailed structural mapping',
      'Karst cavity detection',
      'Tectonic zone studies',
      'Hydrogeological investigations',
    ],
  },
]

const equipment = [
  {
    nameRu: 'NORD',
    nameEn: 'NORD',
    typeRu: 'Регистратор данных АМТЗ',
    typeEn: 'AMT data recorder',
    specs: ['16-bit ADC', '0.001-10000 Hz', 'GPS sync'],
  },
  {
    nameRu: 'Цикл 8',
    nameEn: 'Cycle 8',
    typeRu: 'Электроразведочная система',
    typeEn: 'Electrical survey system',
    specs: ['8 channels', 'IP/Resistivity', 'Auto ranging'],
  },
  {
    nameRu: 'ВП-1000М',
    nameEn: 'VP-1000M',
    typeRu: 'Генератор электроразведочный',
    typeEn: 'Electrical survey transmitter',
    specs: ['1000W', '0.1-100A', 'DC/AC modes'],
  },
  {
    nameRu: 'SCAT 4',
    nameEn: 'SCAT 4',
    typeRu: 'Генератор электроразведочный',
    typeEn: 'Electrical survey transmitter',
    specs: ['4kW', 'Programmable', 'Remote control'],
  },
]

const caseStudy = {
  titleRu: 'Поиск медно-никелевого оруденения на Таймыре',
  titleEn: 'Copper-nickel exploration in Taimyr',
  licenses: ['КРР03707БП', 'КРР03708БП', 'КРР03709БП', 'КРР03710БП', 'КРР03711БП'],
  licenseNames: ['Северо-Широкинская', 'Центрально-Широкинская', 'Трехсестренская', 'Дорожнинская', 'Симсовская'],
  volumeRu: 'Комплекс АМТЗ+ЗСБ на площади 200 км², 450 км профилей ВП',
  volumeEn: 'AMT+TEM complex over 200 km² area, 450 km IP profiles',
  resultRu: 'Выявлены перспективные проводящие аномалии, совпадающие с зонами повышенной поляризуемости. Локализованы 5 первоочередных участков для заверки бурением.',
  resultEn: 'Identified prospective conductive anomalies coinciding with high chargeability zones. Localized 5 priority targets for drill testing.',
}

export function ElectricalContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
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
                <span className="text-foreground">{t('Электроразведка', 'Electrical')}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  {t('Электроразведка', 'Electrical Methods')}
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t(
                  'Комплекс электромагнитных методов для изучения геоэлектрического строения недр, поиска рудных тел и структурного картирования.',
                  'Complex of electromagnetic methods for studying geoelectric structure, ore body detection, and structural mapping.'
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
                {t('Методы электроразведки', 'Electrical Survey Methods')}
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {subMethods.map((method, index) => (
              <FadeIn key={method.id} delay={index * 0.1}>
                <div className="card-enhanced p-8 rounded-2xl">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {t(method.titleRu, method.titleEn)}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-3xl">
                    {t(method.descRu, method.descEn)}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-3">
                      {t('Решаемые задачи:', 'Applications:')}
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
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
                {t('Аппаратура электроразведки', 'Electrical Survey Equipment')}
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <FadeIn key={item.nameRu} delay={index * 0.1}>
                <div className="p-6 bg-background rounded-xl border border-border h-full">
                  <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                    {t(item.nameRu, item.nameEn)}
                  </h4>
                  <p className="text-sm text-accent mb-4">
                    {t(item.typeRu, item.typeEn)}
                  </p>
                  <ul className="space-y-1">
                    {item.specs.map((spec, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full" />
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

      <CTAForm />
    </div>
  )
}
