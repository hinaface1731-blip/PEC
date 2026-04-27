'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import Image from 'next/image'
import { 
  TrendingUp, 
  FileText, 
  MapPin, 
  Calendar, 
  Target, 
  BarChart3, 
  Shield, 
  Award,
  ArrowRight,
  Download,
  CheckCircle,
  DollarSign,
  Users,
  Clock,
  Layers
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// Юниорные проекты (5 лицензий)
const juniorProjects = [
  {
    id: 1,
    nameRu: 'Северо-Широкинская',
    nameEn: 'Severo-Shirokinskaya',
    license: 'КРР03707БП',
    area: '45 км²',
    locationRu: 'Таймыр',
    locationEn: 'Taimyr',
    statusRu: 'Активные ГРР',
    statusEn: 'Active Exploration',
    potentialRu: 'Прогнозные ресурсы: 3,8 млн т условной меди',
    potentialEn: 'Predicted resources: 3.8 million tons of copper equivalent',
    stageRu: 'Поисково-оценочный этап',
    stageEn: 'Exploration and evaluation stage',
    image: '/images/shirokinskaya.jpg',
    highlightsRu: [
      'Близость к Норильскому рудному узлу',
      'Высокие содержания меди по данным геофизики',
      'Развитая инфраструктура региона',
      'Подтверждённые геофизические аномалии'
    ],
    highlightsEn: [
      'Proximity to Norilsk ore cluster',
      'High copper grades according to geophysics',
      'Developed regional infrastructure',
      'Confirmed geophysical anomalies'
    ]
  },
  {
    id: 2,
    nameRu: 'Центрально-Широкинская',
    nameEn: 'Tsentralno-Shirokinskaya',
    license: 'КРР03708БП',
    area: '120 км²',
    locationRu: 'Таймыр',
    locationEn: 'Taimyr',
    statusRu: 'Активные ГРР',
    statusEn: 'Active Exploration',
    potentialRu: 'Прогнозные ресурсы: 3,8 млн т условной меди',
    potentialEn: 'Predicted resources: 3.8 million tons of copper equivalent',
    stageRu: 'Поисково-оценочный этап',
    stageEn: 'Exploration and evaluation stage',
    image: '/images/centr.jpg',
    highlightsRu: [
      '120 км геофизических профилей',
      '3D модель рудных тел',
      'Перспективные зоны для бурения',
      'Комплекс электроразведочных методов выполнен'
    ],
    highlightsEn: [
      '120 km of geophysical profiles',
      '3D ore body model',
      'Prospective drilling zones',
      'Electrical survey complex completed'
    ]
  },
  {
    id: 3,
    nameRu: 'Трехсестренская',
    nameEn: 'Trekhsestrenskaya',
    license: 'КРР03709БП',
    area: '38 км²',
    locationRu: 'Таймыр',
    locationEn: 'Taimyr',
    statusRu: 'Активные ГРР',
    statusEn: 'Active Exploration',
    potentialRu: 'Прогнозные ресурсы: 1,5 млн т условной меди',
    potentialEn: 'Predicted resources: 1.5 million tons of copper equivalent',
    stageRu: 'Поисковый этап',
    stageEn: 'Exploration stage',
    image: '/images/trisesty.jpg',
    highlightsRu: [
      'Комплекс ЗСБ-АМТЗ выполнен',
      'Магнитная съёмка детальная',
      'Рекомендации по бурению подготовлены',
      'Высокая контрастность аномалий'
    ],
    highlightsEn: [
      'TEM-AMT complex completed',
      'Detailed magnetic survey',
      'Drilling recommendations prepared',
      'High anomaly contrast'
    ]
  },
  {
    id: 4,
    nameRu: 'Дорожнинская',
    nameEn: 'Dorozhninskaya',
    license: 'КРР03710БП',
    area: '52 км²',
    locationRu: 'Таймыр',
    locationEn: 'Taimyr',
    statusRu: 'Активные ГРР',
    statusEn: 'Active Exploration',
    potentialRu: 'Прогнозные ресурсы: 1,5 млн т условной меди',
    potentialEn: 'Predicted resources: 1.5 million tons of copper equivalent',
    stageRu: 'Детальная геофизика',
    stageEn: 'Detailed geophysics',
    image: '/images/dorozh.jpg',
    highlightsRu: [
      'Детальная электроразведка',
      'Структурное картирование',
      'Перспективные участки выделены',
      'Готовность к бурению'
    ],
    highlightsEn: [
      'Detailed electrical survey',
      'Structural mapping',
      'Prospective areas identified',
      'Ready for drilling'
    ]
  },
  {
    id: 5,
    nameRu: 'Симсовская',
    nameEn: 'Simsovskaya',
    license: 'КРР03711БП',
    area: '38 км²',
    locationRu: 'Таймыр',
    locationEn: 'Taimyr',
    statusRu: 'Активные ГРР',
    statusEn: 'Active Exploration',
    potentialRu: 'Прогнозные ресурсы: 1,2 млн т условной меди',
    potentialEn: 'Predicted resources: 1.2 million tons of copper equivalent',
    stageRu: 'Поисковый этап',
    stageEn: 'Exploration stage',
    image: '/images/sims.jpg',
    highlightsRu: [
      'Комплекс АМТЗ/ЗСБ/ВП',
      'Интеграция геофизических методов',
      'Цели для бурения выделены',
      'Перспективная площадь'
    ],
    highlightsEn: [
      'AMT/TEM/IP complex',
      'Integration of geophysical methods',
      'Drilling targets identified',
      'Prospective area'
    ]
  }
]

// Преимущества для инвесторов
const advantages = [
  {
    icon: Target,
    titleRu: 'Потенциал ресурсов',
    titleEn: 'Resource Potential',
    descRu: 'Прогнозные ресурсы оцениваются в млн тонн условной меди в непосредственной близости от развитой инфраструктуры Норильского рудного узла.',
    descEn: 'Predicted resources estimated in millions of tons of copper equivalent near developed infrastructure of Norilsk ore cluster.'
  },
  {
    icon: Shield,
    titleRu: 'Лицензии на ЧС',
    titleEn: 'Subsoil Licenses',
    descRu: '5 лицензий на разведку медно-никелевого оруденения. Все лицензии оформлены в соответствии с законодательством РФ.',
    descEn: '5 licenses for copper-nickel exploration. All licenses are properly registered under Russian law.'
  },
  {
    icon: BarChart3,
    titleRu: 'Качество данных',
    titleEn: 'Data Quality',
    descRu: 'Современные геофизические методы (АМТЗ, ЗСБ, ВП). Детальное структурное картирование. Цифровые 3D модели.',
    descEn: 'Modern geophysical methods (AMT, TEM, IP). Detailed structural mapping. Digital 3D models.'
  },
  {
    icon: TrendingUp,
    titleRu: 'Рыночный спрос',
    titleEn: 'Market Demand',
    descRu: 'Высокий спрос на медь и никель. Стратегическое значение для российской промышленности.',
    descEn: 'High demand for copper and nickel. Strategic importance for Russian industry.'
  }
]

export function InvestorsContent() {
  const { t } = useLanguage()
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const totalPotential = '11,8 млн т'
  const licenseCount = 5

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-card to-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm flex-wrap">
                <Link href="/" className="hover:text-primary transition-colors">
                  {t('Главная', 'Home')}
                </Link>
                <span>/</span>
                <span className="text-foreground">
                  {t('Инвесторам', 'Investors')}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                  {t('Инвесторам', 'Investors')}
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t(
                  'Инвестируйте в разведку медно-никелевых месторождений на Таймыре. Пять лицензионных участков с прогнозными ресурсами более 11,8 млн тонн условной меди.',
                  'Invest in copper-nickel exploration in Taimyr. Five licensed areas with predicted resources of over 11.8 million tons of copper equivalent.'
                )}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">{licenseCount}</div>
              <div className="text-sm text-muted-foreground">{t('Лицензий', 'Licenses')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">{totalPotential}</div>
              <div className="text-sm text-muted-foreground">{t('Прогнозных ресурсов', 'Predicted Resources')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">293 км²</div>
              <div className="text-sm text-muted-foreground">{t('Общая площадь', 'Total Area')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">5+</div>
              <div className="text-sm text-muted-foreground">{t('Перспективных зон', 'Prospective Zones')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('Почему стоит инвестировать в проекты ПЭК', 'Why Invest in PEC Projects')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t(
                  'Уникальное сочетание ресурсного потенциала, инфраструктуры и компетенций',
                  'Unique combination of resource potential, infrastructure and expertise'
                )}
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-enhanced p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                    <adv.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {t(adv.titleRu, adv.titleEn)}
                  </h3>
                  <p className="text-muted-foreground">
                    {t(adv.descRu, adv.descEn)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Junior Projects */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FileText className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('Юниорные проекты', 'Junior Projects')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t(
                  '5 лицензионных участков на Таймыре. Геологоразведочные работы ведутся собственными силами компании.',
                  '5 licensed areas in Taimyr. Exploration work is carried out by the company\'s own resources.'
                )}
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {juniorProjects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 0.1}>
                <div className="card-enhanced rounded-2xl overflow-hidden group">
                  <div className="flex flex-col md:flex-row">
                    {/* Изображение */}
                    <div className="relative w-full md:w-80 lg:w-96 h-64 md:h-auto">
                      <Image
                        src={project.image}
                        alt={project.nameRu}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 384px"
                      />
                    </div>
                    
                    {/* Информация */}
                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-foreground">
                            {t(project.nameRu, project.nameEn)}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="px-2 py-0.5 bg-orange-500/10 text-orange-500 text-xs font-mono rounded">
                              {project.license}
                            </span>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              <span>{t(project.locationRu, project.locationEn)}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Layers className="w-3 h-3" />
                              <span>{project.area}</span>
                            </div>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-green-500/10 text-green-500 text-sm rounded-full">
                          {t(project.statusRu, project.statusEn)}
                        </div>
                      </div>

                      <div className="mb-4 p-3 bg-orange-500/5 border border-orange-500/20 rounded-lg">
                        <p className="text-foreground font-semibold">
                          📈 {t(project.potentialRu, project.potentialEn)}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          🎯 {t(project.stageRu, project.stageEn)}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">
                          {t('Ключевые преимущества:', 'Key highlights:')}
                        </h4>
                        <ul className="space-y-1">
                          {project.highlightsRu.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">
                                {t(highlight, project.highlightsEn[idx])}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {t('Информация для инвесторов', 'Information for Investors')}
                </h2>
                <p className="text-muted-foreground">
                  {t('Ознакомьтесь с ключевыми документами по проектам', 'Review key project documents')}
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/documents/license-extract.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-lg text-foreground hover:border-orange-500/50 transition-colors"
                >
                  <FileText className="w-4 h-4 text-orange-500" />
                  {t('Выписки из лицензий', 'License Extracts')}
                </a>
                <Button asChild>
                  <Link href="/contacts">
                    {t('Связаться с отделом по работе с инвесторами', 'Contact IR Department')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}