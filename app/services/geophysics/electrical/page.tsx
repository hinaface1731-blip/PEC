'use client'

import { Zap, CheckCircle, ArrowRight, Download, Activity, Waves, TrendingUp, Map, Target, Layers, Compass } from 'lucide-react'
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
    descRu: 'Пассивный электромагнитный метод, основанный на регистрации естественных электромагнитных полей Земли в диапазоне частот от 1 до 20000 Гц. Позволяет изучать геоэлектрический разрез на глубинах до 3-5 км без использования искусственных источников поля.',
    descEn: 'Passive electromagnetic method based on recording natural EM fields of the Earth in the frequency range of 1-20000 Hz. Allows studying geoelectric sections at depths up to 3-5 km without artificial field sources.',
    image: '/images/methods/amtz.png',
    tasksRu: [
      'Картирование глубинных структур и зон разломов',
      'Поиск глубокозалегающих рудных тел и зон сульфидной минерализации',
      'Изучение тектонических нарушений и трещиноватости',
      'Поиск углеводородов и подземных вод',
      'Региональное геологическое картирование'
    ],
    tasksEn: [
      'Mapping of deep structures and fault zones',
      'Search for deep ore bodies and sulfide mineralization zones',
      'Study of tectonic faults and fracturing',
      'Hydrocarbon and groundwater exploration',
      'Regional geological mapping'
    ],
    advantagesRu: [
      'Аппаратура NORD: вес 1.8 кг, управление через смартфон по Wi-Fi',
      'Экстремальная температура: от -40 до +85 °С — работа в Арктике',
      'Мгновенный запуск: 10-20 секунд до начала записи',
      'Низкий собственный шум (~3.5 нВ/√Гц) и 32-битный АЦП',
      'Встроенная защита от перенапряжения, статики и молний'
    ],
    advantagesEn: [
      'NORD equipment: 1.8 kg, Wi-Fi control via smartphone',
      'Extreme temperature range: -40 to +85 °C — Arctic operations',
      'Quick start: 10-20 seconds to begin recording',
      'Low self-noise (~3.5 nV/√Hz) and 32-bit ADC',
      'Built-in protection against overvoltage, static and lightning'
    ],
    equipmentRu: 'Аппаратура NORD (5 каналов, 32-бит АЦП, регистрация Ex, Ey, Hx, Hy, Hz). Обработка — EPI-KIT, интерпретация — MT-Corrector.',
    equipmentEn: 'NORD equipment (5 channels, 32-bit ADC, recording Ex, Ey, Hx, Hy, Hz). Processing — EPI-KIT, interpretation — MT-Corrector.'
  },
  {
    id: 'zsb',
    icon: Target,
    titleRu: 'ЗСБ (Зондирование становлением поля в ближней зоне)',
    titleEn: 'TEM (Transient Electromagnetic Method)',
    descRu: 'Импульсный электромагнитный метод с контролируемым источником. Работает без заземления электродов: генераторная петля создаёт импульсное магнитное поле, а затухание вторичного поля после выключения тока несёт информацию о строении среды.',
    descEn: 'Pulsed electromagnetic method with controlled source. Works without electrode grounding: the transmitter loop creates a pulsed magnetic field, and the decay of the secondary field carries information about the environment structure.',
    image: '/images/methods/zsb.jpg',
    tasksRu: [
      'Картирование структурных горизонтов и кровли фундамента',
      'Поиск и оконтуривание рудных тел, зон сульфидной минерализации',
      'Выявление водоносных горизонтов, таликовых зон, зон дробления',
      'Прогноз коллекторов и зон нефтегазонакопления',
      'Инженерно-геологические задачи в сложных условиях'
    ],
    tasksEn: [
      'Mapping of structural horizons and basement top',
      'Detection and delineation of ore bodies, sulfide mineralization zones',
      'Identification of aquifers, talik zones, crushing zones',
      'Reservoir prediction and hydrocarbon accumulation zones',
      'Engineering-geological tasks in difficult conditions'
    ],
    advantagesRu: [
      'Не требует гальванического контакта с грунтом — работает на мёрзлых и каменистых поверхностях',
      'Высокая мобильность: отряд из 2–3 человек, вертолётная и пешая доступность',
      'Глубинность от 10 до 2000–3000 м в зависимости от параметров установки',
      'Применимо в условиях сложного рельефа, заболоченности, труднодоступных районов'
    ],
    advantagesEn: [
      'No galvanic contact with the ground — works on frozen and rocky surfaces',
      'High mobility: crew of 2-3 people, helicopter and foot access',
      'Depth range from 10 to 2000-3000 m depending on array parameters',
      'Applicable in difficult terrain, wetlands, remote areas'
    ],
    equipmentRu: 'Аппаратура серии ЦИКЛ (НТФ «Цикл-Гео», Новосибирск). Обработка — ПРОБА, интерпретация — ПОДБОР и ZondTEM.',
    equipmentEn: 'CYKL series equipment (NTF "Cykl-Geo", Novosibirsk). Processing — PROBA, interpretation — PODBOR and ZondTEM.'
  },
  {
    id: 'vp',
    icon: TrendingUp,
    titleRu: 'ВП (Метод вызванной поляризации)',
    titleEn: 'IP (Induced Polarization Method)',
    descRu: 'Метод основан на изучении вторичного электрического поля, возникающего в горных породах после пропускания электрического тока. Эффективен для поиска вкрапленных сульфидных руд, не отличающихся по удельному сопротивлению от вмещающих пород.',
    descEn: 'The method is based on studying the secondary electric field that arises in rocks after current transmission. Highly effective for detecting disseminated sulfide ores.',
    image: '/images/methods/ip.jpg',
    tasksRu: [
      'Поиск и оконтуривание сульфидных рудных тел (медь, никель, свинец, цинк)',
      'Выделение вкрапленных руд, не отличающихся по удельному сопротивлению от вмещающих пород',
      'Оценка содержания сульфидов в рудах',
      'Решение гидрогеологических задач (выявление водоносных горизонтов, зон трещиноватости)',
      'Поиск сульфидной минерализации при разведке медно-порфировых объектов'
    ],
    tasksEn: [
      'Search and delineation of sulfide ore bodies (copper, nickel, lead, zinc)',
      'Identification of disseminated ores without resistivity contrast',
      'Assessment of sulfide content in ores',
      'Hydrogeological tasks (aquifer detection, fracture zones)',
      'Sulfide mineralization search in porphyry copper exploration'
    ],
    advantagesRu: [
      'Эффективен для поиска вкрапленных руд — обнаруживает сульфидную минерализацию даже без контраста по сопротивлению',
      'Разбраковка аномалий — отличает сульфидные руды от графитовых и углесодержащих пород',
      'Применим на всех стадиях ГРР — от региональных съёмок до детальной разведки',
      'Скважинные модификации — выявление зон минерализации в околоскважинном пространстве'
    ],
    advantagesEn: [
      'Effective for disseminated ores — detects sulfide mineralization even without resistivity contrast',
      'Anomaly discrimination — distinguishes sulfide ores from graphite and carbonaceous rocks',
      'Applicable at all stages of exploration — from regional surveys to detailed exploration',
      'Borehole modifications — detection of mineralization zones in near-wellbore space'
    ],
    equipmentRu: 'Генератор «АСТРА-100АТ», измерители «МЭРИ-СМАРТ»/«ИМВП-8»/«ИМВП-12». Скважинный зонд ВПРМ-43. Обработка — «Электротомография», ZondRes2D/3D, Res2DInv.',
    equipmentEn: 'Generator "ASTRA-100AT", receivers "MERI-SMART"/"IMVP-8"/"IMVP-12". Borehole probe VPRM-43. Processing — "Elektrotomografiya", ZondRes2D/3D, Res2DInv.'
  },
  {
    id: 'ert',
    icon: Map,
    titleRu: 'Электротомография (ЭРТ)',
    titleEn: 'Electrical Resistivity Tomography (ERT)',
    descRu: 'Метод 2D/3D картирования удельного электрического сопротивления с высоким разрешением. Используется для детального изучения неоднородностей геологической среды на глубинах от первых метров до 100-200 м.',
    descEn: '2D/3D resistivity mapping with high resolution. Used for detailed study of geological heterogeneities at depths from a few meters to 100-200 m.',
    image: '/images/methods/ert.jpg',
    tasksRu: [
      'Детальное структурное картирование и выделение тектонических нарушений',
      'Поиск карстовых полостей, зон трещиноватости и обводнения',
      'Изучение строения верхней части разреза для инженерно-геологических изысканий',
      'Выявление зон сульфидной минерализации (по контрасту сопротивления)',
      'Картирование кровли коренных пород и мощности рыхлых отложений'
    ],
    tasksEn: [
      'Detailed structural mapping and tectonic fault identification',
      'Detection of karst cavities, fracturing and watering zones',
      'Near-surface study for engineering-geological surveys',
      'Identification of sulfide mineralization zones (by resistivity contrast)',
      'Mapping of bedrock top and unconsolidated sediment thickness'
    ],
    advantagesRu: [
      'Высокое разрешение — детальное изучение неоднородностей до нескольких метров',
      '2D/3D моделирование — построение цветных геоэлектрических разрезов',
      'Совместимость с ГИС и бурением — увязка результатов с геологическими данными',
      'Автоматизация — использование многоканальных станций с коммутаторами до 48 электродов'
    ],
    advantagesEn: [
      'High resolution — detailed study of heterogeneities down to several meters',
      '2D/3D modeling — construction of colored geoelectric sections',
      'GIS and drilling integration — correlation with geological data',
      'Automation — use of multi-channel stations with up to 48 electrode switches'
    ],
    equipmentRu: 'Станция «Скала-48», коммутатор «КЭ-48», генератор «АСТРА-100АТ». Обработка — «Электротомография», инверсия — ZondRes2D/3D, Res2DInv.',
    equipmentEn: 'Station "Skala-48", switch "KE-48", generator "ASTRA-100AT". Processing — "Elektrotomografiya", inversion — ZondRes2D/3D, Res2DInv.'
  }
]

const equipment = [
  {
    nameRu: 'NORD',
    nameEn: 'NORD',
    typeRu: 'Регистратор данных АМТЗ',
    typeEn: 'AMT data recorder',
    specs: ['32-бит АЦП', '0.001-20000 Hz', 'Wi-Fi управление', 'Вес 1.8 кг'],
  },
  {
    nameRu: 'ЦИКЛ',
    nameEn: 'CYKL',
    typeRu: 'Электроразведочная система ЗСБ',
    typeEn: 'TEM electrical survey system',
    specs: ['Цифровая передача информации', 'Без калибровки перед записью', 'Сопряжение с любыми каротажными регистраторами'],
  },
  {
    nameRu: 'АСТРА-100АТ',
    nameEn: 'ASTRA-100AT',
    typeRu: 'Генератор электроразведочный',
    typeEn: 'Electrical survey transmitter',
    specs: ['1000W', '0.1-100A', 'Стабильность 0.008%'],
  },
  {
    nameRu: 'Скала-48',
    nameEn: 'Skala-48',
    typeRu: 'Станция электротомографии',
    typeEn: 'ERT station',
    specs: ['48 каналов', 'Коммутатор КЭ-48', 'Автоматическая регистрация'],
  }
]

const software = [
  {
    name: 'EPI-KIT',
    descriptionRu: 'Обработка данных АМТЗ и МТ',
    descriptionEn: 'AMT and MT data processing'
  },
  {
    name: 'MT-Corrector',
    descriptionRu: 'Редактирование и интерпретация MT-данных',
    descriptionEn: 'Editing and interpretation of MT data'
  },
  {
    name: 'ПРОБА / ПОДБОР',
    descriptionRu: 'Обработка и интерпретация данных ЗСБ',
    descriptionEn: 'TEM data processing and interpretation'
  },
  {
    name: 'ZondRes2D/3D',
    descriptionRu: '2D/3D инверсия данных электротомографии и ВП',
    descriptionEn: '2D/3D inversion of ERT and IP data'
  }
]

const caseStudy = {
  titleRu: 'Поиск медно-никелевого оруденения на Таймыре',
  titleEn: 'Copper-nickel exploration in Taimyr',
  licenses: ['КРР03707БП', 'КРР03708БП', 'КРР03709БП', 'КРР03710БП', 'КРР03711БП'],
  licenseNames: ['Северо-Широкинская', 'Центрально-Широкинская', 'Трехсестренская', 'Дорожнинская', 'Симсовская'],
  volumeRu: 'Комплекс АМТЗ+ЗСБ на площади 200 км², 450 км профилей ВП',
  volumeEn: 'AMT+TEM complex over 200 km² area, 450 km IP profiles',
  resultRu: 'Выявлены перспективные проводящие аномалии, совпадающие с зонами повышенной поляризуемости. Локализованы 5 первоочередных участков для заверки бурением.',
  resultEn: 'Identified prospective conductive anomalies coinciding with high chargeability zones. Located 5 priority areas for drilling verification.',
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

        {/* Methods - карточки с фиксированной структурой */}
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

            <div className="space-y-12">
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
                        
                        <div className="mb-4">
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

                        {/* Дополнительный блок для всех методов с преимуществами */}
                        {method.advantagesRu && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <h4 className="font-medium text-foreground mb-3 text-sm">
                              {t('Преимущества метода:', 'Advantages:')}
                            </h4>
                            <ul className="space-y-2 mb-4">
                              {method.advantagesRu.map((adv, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <Zap className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-muted-foreground">
                                    {t(adv, method.advantagesEn?.[idx] || adv)}
                                  </span>
                                </li>
                              ))}
                            </ul>
                            <div className="p-3 bg-accent/5 rounded-lg">
                              <p className="text-sm text-muted-foreground">
                                <span className="font-semibold text-foreground">{t('Оборудование и ПО:', 'Equipment and software:')}</span>{' '}
                                {t(method.equipmentRu || '', method.equipmentEn || '')}
                              </p>
                            </div>
                          </div>
                        )}
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

        {/* Оборудование */}
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
                  <div className="p-6 bg-background rounded-xl border border-border h-full hover:border-orange-500/50 transition-all hover:shadow-lg">
                    <h4 className="font-display text-xl font-semibold text-foreground mb-2">
                      {t(item.nameRu, item.nameEn)}
                    </h4>
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

        {/* Программное обеспечение */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center mb-12">
                <span className="section-eyebrow">{t('ПО', 'Software')}</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {t('Программное обеспечение', 'Software')}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mt-2">
                  {t(
                    'Перед выездом обязательно выполняется физико-геологическое моделирование и решение прямой задачи под конкретные условия участка.',
                    'Before field work, physical-geological modeling and direct task solving are performed for specific site conditions.'
                  )}
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {software.map((item, index) => (
                <FadeIn key={item.name} delay={index * 0.1}>
                  <div className="p-6 bg-card rounded-xl border border-border text-center hover:border-orange-500/50 transition-all">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Layers className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t(item.descriptionRu, item.descriptionEn)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-20 bg-card">
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