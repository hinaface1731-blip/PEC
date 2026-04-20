'use client'

import { Zap, CheckCircle, ArrowRight, Download, Activity, Waves, TrendingUp, Map } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTAForm } from '@/components/cta-form'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import { PageLayout } from '@/components/page-layout'
import Image from 'next/image'

const subMethods = [
  {
    id: 'amtz',
    icon: Waves,
    titleRu: 'АМТЗ (Аудиомагнитотеллурические зондирования)',
    titleEn: 'AMT (Audio-Magnetotelluric Sounding)',
    descRu: 'Метод основан на регистрации естественных электромагнитных полей в диапазоне частот 1-10000 Гц. Позволяет изучать геоэлектрический разрез на глубинах до 2-3 км.',
    descEn: 'Method based on recording natural electromagnetic fields in the 1-10000 Hz frequency range.',
    image: '/images/methods/amtz.jpg',
    tasksRu: [
      'Картирование глубинных структур',
      'Выделение зон разломов',
      'Поиск глубокозалегающих рудных тел',
    ],
    tasksEn: [
      'Deep structure mapping',
      'Fault zone identification',
      'Deep ore body search',
    ],
  },
  {
    id: 'zsb',
    icon: Activity,
    titleRu: 'ЗСБ (Зондирование становлением поля)',
    titleEn: 'TEM (Transient Electromagnetic Method)',
    descRu: 'Импульсный электромагнитный метод с контролируемым источником. Высокая чувствительность к проводящим объектам на глубинах до 500-800 м.',
    descEn: 'Pulsed electromagnetic method with controlled source. High sensitivity to conductive objects.',
    image: '/images/methods/tem.jpg',
    tasksRu: [
      'Поиск сульфидных рудных тел',
      'Картирование водоносных горизонтов',
      'Детальное изучение верхней части разреза',
    ],
    tasksEn: [
      'Sulfide ore bodies search',
      'Aquifer mapping',
      'Upper section detailed study',
    ],
  },
  {
    id: 'vp',
    icon: TrendingUp,
    titleRu: 'ВП (Метод вызванной поляризации)',
    titleEn: 'IP (Induced Polarization Method)',
    descRu: 'Метод основан на изучении процессов накопления и разрядки электрических зарядов в горных породах. Эффективен для поиска вкрапленных сульфидных руд.',
    descEn: 'Method based on studying charge accumulation and discharge processes in rocks.',
    image: '/images/methods/ip.jpg',
    tasksRu: [
      'Поиск вкрапленного сульфидного оруденения',
      'Оконтуривание рудных зон',
      'Оценка сульфидности руд',
    ],
    tasksEn: [
      'Disseminated sulfide search',
      'Ore zone delineation',
      'Sulfide content estimation',
    ],
  },
  {
    id: 'ert',
    icon: Map,
    titleRu: 'Электротомография (ЭРТ)',
    titleEn: 'Electrical Resistivity Tomography (ERT)',
    descRu: '2D/3D картирование удельного электрического сопротивления с высоким разрешением. Детальное изучение неоднородностей геологической среды.',
    descEn: '2D/3D resistivity mapping with high resolution. Detailed study of geological heterogeneities.',
    image: '/images/methods/ert.jpg',
    tasksRu: [
      'Детальное структурное картирование',
      'Поиск карстовых полостей',
      'Изучение зон тектонических нарушений',
    ],
    tasksEn: [
      'Detailed structural mapping',
      'Karst cavity detection',
      'Tectonic zone studies',
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
  resultEn: 'Identified prospective conductive anomalies coinciding with high chargeability zones.',
}

export default function ElectricalPage() {
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
                  <span className="text-foreground">{t('Электроразведка', 'Electrical')}</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
    <Zap className="w-8 h-8 text-orange-500" />
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

        {/* Methods - карточки с фиксированной структурой: текст слева, картинка справа */}
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
                 <div className="card-enhanced rounded-2xl overflow-hidden group">
                    <div className="flex flex-col md:flex-row gap-6 p-6">
                      {/* Левая часть - текстовая (фиксированная ширина) */}
                      <div className="flex-1 p-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-md shrink-0">
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

                      {/* Правая часть - картинка (фиксированная ширина 300px) */}
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
                  {t('Аппаратура электроразведки', 'Electrical Survey Equipment')}
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {equipment.map((item, index) => (
                <FadeIn key={item.nameRu} delay={index * 0.1}>
                  <div className="p-6 bg-background rounded-xl border border-border h-full hover:border-accent/50 transition-all hover:shadow-lg">
                    <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                      {t(item.nameRu, item.nameEn)}
                    </h4>
                    <p className="text-sm text-accent mb-4">
                      {t(item.typeRu, item.typeEn)}
                    </p>
                    <ul className="space-y-1">
                      {item.specs.map((spec, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
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
    </PageLayout>
  )
}