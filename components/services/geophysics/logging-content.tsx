'use client'

import { Activity, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CTAForm } from '@/components/cta-form'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'

const methods = [
  {
    titleRu: 'Электрический каротаж',
    titleEn: 'Electrical Logging',
    descRu: 'Измерение удельного электрического сопротивления пород по стволу скважины. Методы КС, ПС, БК.',
    descEn: 'Rock resistivity measurement along the borehole. Resistivity, SP, and lateral logging methods.',
    tasksRu: [
      'Литологическое расчленение разреза',
      'Выделение рудных интервалов',
      'Определение пористости',
      'Корреляция между скважинами',
    ],
    tasksEn: [
      'Lithological section differentiation',
      'Ore interval identification',
      'Porosity determination',
      'Inter-well correlation',
    ],
  },
  {
    titleRu: 'Радиоактивный каротаж',
    titleEn: 'Radioactive Logging',
    descRu: 'Гамма-каротаж (ГК), гамма-гамма плотностной (ГГК-П), нейтронный каротаж для определения физических свойств пород.',
    descEn: 'Gamma-ray (GR), gamma-gamma density (GGD), neutron logging for rock physical property determination.',
    tasksRu: [
      'Определение плотности пород',
      'Выделение глинистых интервалов',
      'Поиск радиоактивных минералов',
      'Оценка пористости',
    ],
    tasksEn: [
      'Rock density determination',
      'Clay interval identification',
      'Radioactive mineral detection',
      'Porosity estimation',
    ],
  },
  {
    titleRu: 'Каротаж вызванной поляризации',
    titleEn: 'Induced Polarization Logging',
    descRu: 'Измерение поляризуемости пород для выделения сульфидной минерализации и зон оруденения.',
    descEn: 'Rock chargeability measurement for sulfide mineralization and ore zone identification.',
    tasksRu: [
      'Поиск сульфидного оруденения',
      'Оценка содержания рудных минералов',
      'Детализация рудных интервалов',
    ],
    tasksEn: [
      'Sulfide ore detection',
      'Ore mineral content estimation',
      'Ore interval detailing',
    ],
  },
  {
    titleRu: 'Кавернометрия и резистивиметрия',
    titleEn: 'Caliper and Resistivity Logging',
    descRu: 'Измерение диаметра скважины и сопротивления бурового раствора для коррекции данных каротажа.',
    descEn: 'Borehole diameter and mud resistivity measurement for logging data correction.',
    tasksRu: [
      'Определение технического состояния скважины',
      'Выявление зон обрушений',
      'Коррекция каротажных данных',
    ],
    tasksEn: [
      'Borehole condition assessment',
      'Collapse zone identification',
      'Logging data correction',
    ],
  },
]

const equipment = [
  { name: 'Вулкан V3', nameEn: 'Vulkan V3', type: 'Блок каротажного регистратора', typeEn: 'Logging recorder unit', qty: 5 },
  { name: 'ГКМ-43', nameEn: 'GKM-43', type: 'Прибор гамма-каротажа', typeEn: 'Gamma-ray logging tool', qty: 1 },
  { name: 'ГГКМ-43', nameEn: 'GGKM-43', type: 'Прибор гамма-гамма и плотностного каротажа', typeEn: 'Gamma-gamma density logging tool', qty: 2 },
  { name: 'ВПРМ-43', nameEn: 'VPRM-43', type: 'Прибор каротажа вызванной поляризации', typeEn: 'IP logging tool', qty: 2 },
  { name: 'КСП-43', nameEn: 'KSP-43', type: 'Прибор электрического каротажа', typeEn: 'Electrical logging tool', qty: 1 },
  { name: 'КП-51ЭВП-01', nameEn: 'KP-51EVP-01', type: 'Прибор электрического каротажа', typeEn: 'Electrical logging tool', qty: 2 },
  { name: 'КМ-43-1', nameEn: 'KM-43-1', type: 'Каверномер скважинный управляемый', typeEn: 'Controlled caliper tool', qty: 5 },
  { name: 'КМВ-Ц-43', nameEn: 'KMV-Ts-43', type: 'Прибор каротажа магнитной восприимчивости', typeEn: 'Magnetic susceptibility logging tool', qty: 4 },
  { name: 'КУРА-2М', nameEn: 'KURA-2M', type: 'Зонд гамма-каротажа', typeEn: 'Gamma-ray probe', qty: 1 },
  { name: 'МСК-В', nameEn: 'MSK-V', type: 'Прибор метода скользящих контактов', typeEn: 'Sliding contact method tool', qty: 1 },
  { name: 'Сова-38-60', nameEn: 'Sova-38-60', type: 'ГК-термометр-резистивиметр', typeEn: 'GR-thermometer-resistivity meter', qty: 1 },
  { name: 'РХГ-38', nameEn: 'RKhG-38', type: 'Расходомер скважинный', typeEn: 'Borehole flowmeter', qty: 1 },
]

const sources = [
  { name: 'ПС-45-Т-ИГИ-Ц-3', type: 'Источник гамма-излучения Cs-137', qty: 2 },
  { name: 'К-3', type: 'Источник гамма-излучения Co-60', qty: 2 },
  { name: 'ПС-45-Т-ИБН-8', type: 'Источник быстрых нейтронов Pu-238', qty: 1 },
]

export function LoggingContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm flex-wrap">
                <Link href="/" className="hover:text-primary transition-colors">{t('Главная', 'Home')}</Link>
                <span>/</span>
                <Link href="/services/geophysics" className="hover:text-primary transition-colors">{t('Геофизика', 'Geophysics')}</Link>
                <span>/</span>
                <span className="text-foreground">{t('Каротаж', 'Logging')}</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <Activity className="w-8 h-8 text-accent" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  {t('Каротаж скважин', 'Well Logging')}
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t(
                  'Комплексные геофизические исследования скважин для изучения геологического разреза, выделения рудных интервалов и оценки физических свойств пород.',
                  'Comprehensive borehole geophysical surveys for geological section study, ore interval identification, and rock physical property assessment.'
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
                {t('Методы каротажа', 'Logging Methods')}
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {methods.map((method, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-enhanced p-8 rounded-2xl h-full">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {t(method.titleRu, method.titleEn)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t(method.descRu, method.descEn)}
                  </p>
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
                {t('Скважинная аппаратура', 'Borehole Equipment')}
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {equipment.map((item, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="p-4 bg-background rounded-xl border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-foreground text-sm">
                      {t(item.name, item.nameEn)}
                    </h4>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-0.5 rounded">
                      {item.qty}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t(item.type, item.typeEn)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Radioactive Sources */}
          <FadeIn delay={0.3}>
            <div className="mt-8 p-6 bg-background rounded-xl border border-yellow-500/30">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                {t('Радиоактивные источники', 'Radioactive Sources')}
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {sources.map((source, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-mono text-accent">{source.name}</span>
                    <span className="text-muted-foreground ml-2">({source.qty})</span>
                    <p className="text-xs text-muted-foreground mt-1">{source.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
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
