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
  Target, 
  BarChart3, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Layers,
  Ship,
  Plane,
  LucideIcon,
  DollarSign,
  Globe,
  Radio,
  DrillIcon,
  Crosshair,
  Award,
  PieChart,
  Gift,
  Building2,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Данные по 5 лицензионным участкам из документа
const licenseProjects = [
  {
    id: 1,
    nameRu: 'Симсовская площадь',
    nameEn: 'Simsovskaya Area',
    license: 'КРР03707ТП',
    area: '96.75 км²',
    locationRu: 'Таймыр, полуостров Челюскин',
    locationEn: 'Taimyr, Chelyuskin Peninsula',
    statusRu: 'Поисково-оценочный этап',
    statusEn: 'Exploration & Evaluation',
    potentialRu: '4 млн т Cu, 2 млн т Mo, 50 т Au',
    potentialEn: '4 Mt Cu, 2 Mt Mo, 50 t Au',
    stageRu: 'Геохимическая съёмка + подготовка к бурению',
    stageEn: 'Geochemical survey + drilling preparation',
    image: '/images/sims.jpg',
    highlightsRu: [
      'Зона медной минерализации 6 км × 800 м',
      'Пробы: Cu до 0.64%, Au до 0.29 г/т',
      'Шток гранит-порфиров — центр ПЭС',
      'Близость к морю Лаптевых (порт)'
    ],
    highlightsEn: [
      'Copper mineralization zone 6 km × 800 m',
      'Samples: Cu up to 0.64%, Au up to 0.29 g/t',
      'Granite-porphyry stock — PES center',
      'Proximity to Laptev Sea (port)'
    ],
    priority: 'high'
  },
  {
    id: 2,
    nameRu: 'Пекинская площадь',
    nameEn: 'Pekinskaya Area',
    license: 'КРР03708ТП',
    area: '~90 км²',
    locationRu: 'Таймыр, полуостров Челюскин',
    locationEn: 'Taimyr, Chelyuskin Peninsula',
    statusRu: 'Активное бурение',
    statusEn: 'Active Drilling',
    potentialRu: '5 млн т Cu, 3 млн т Mo, 120 т Au',
    potentialEn: '5 Mt Cu, 3 Mt Mo, 120 t Au',
    stageRu: 'Поисково-оценочное бурение',
    stageEn: 'Exploration drilling',
    image: '/images/pekinskaya.jpg',
    highlightsRu: [
      '✅ ВСКРЫТО РУДНОЕ ТЕЛО: 15 м с 0.4% Cu',
      'Зона сульфидизации 5.8 км × 400 м',
      'Глубинный батолит на 2-3 км',
      'Дорожнинский разлом — рудоконтроль'
    ],
    highlightsEn: [
      '✅ ORE BODY DISCOVERED: 15 m @ 0.4% Cu',
      'Sulfidization zone 5.8 km × 400 m',
      'Deep batholith 2-3 km depth',
      'Dorozhninsky fault — ore control'
    ],
    priority: 'critical'
  },
  {
    id: 3,
    nameRu: 'Дорожнинская площадь',
    nameEn: 'Dorozhninskaya Area',
    license: 'КРР03709ТП',
    area: '52.2 км²',
    locationRu: 'Таймыр, полуостров Челюскин',
    locationEn: 'Taimyr, Chelyuskin Peninsula',
    statusRu: 'Геофизика + геохимия',
    statusEn: 'Geophysics + Geochemistry',
    potentialRu: '2 млн т Cu, 1 млн т Mo, 50 т Au',
    potentialEn: '2 Mt Cu, 1 Mt Mo, 50 t Au',
    stageRu: 'Детальная геофизика',
    stageEn: 'Detailed geophysics',
    image: '/images/dorozh.jpg',
    highlightsRu: [
      'Зона вторичных кварцитов ("железные шляпы")',
      'Высококонтрастные аномалии Cu (70-530 ppm)',
      'Интеграция с Пекинским массивом',
      'Готовность к бурению'
    ],
    highlightsEn: [
      'Secondary quartzite zone ("iron hats")',
      'High-contrast Cu anomalies (70-530 ppm)',
      'Integration with Pekinsky massif',
      'Ready for drilling'
    ],
    priority: 'medium'
  },
  {
    id: 4,
    nameRu: 'Широкинская площадь (3 лицензии)',
    nameEn: 'Shirokinskaya Area (3 licenses)',
    license: 'КРР03710-712ТП',
    area: '940 км²',
    locationRu: 'Таймыр, полуостров Челюскин',
    locationEn: 'Taimyr, Chelyuskin Peninsula',
    statusRu: 'Комплексные ГРР',
    statusEn: 'Complex Exploration',
    potentialRu: '5.2 млн т Cu + 5.5 млн т Pb + 2.2 млн т Zn + 70 т Au',
    potentialEn: '5.2 Mt Cu + 5.5 Mt Pb + 2.2 Mt Zn + 70 t Au',
    stageRu: 'Поиски Cu-порфиры + полиметаллы',
    stageEn: 'Cu-porphyry + polymetals exploration',
    image: '/images/shirokinskaya.jpg',
    highlightsRu: [
      'Проявление "Порфировое" (Mo до 1%, Cu 0.3-1%)',
      'Проявление "Незабудка" (Pb до 22%, Ag до 100 г/т)',
      'Два рудных узла в одной лицензии',
      'Аналог месторождений Песчанка, Актогай'
    ],
    highlightsEn: [
      '"Porphyry" occurrence (Mo up to 1%, Cu 0.3-1%)',
      '"Nezabudka" occurrence (Pb up to 22%, Ag up to 100 g/t)',
      'Two ore nodes in one license',
      'Analogous to Peschanka, Aktogai deposits'
    ],
    priority: 'high'
  }
]

// Геологоразведочные методы
const explorationMethods = [
  { icon: Radio, nameRu: 'АМТЗ / ЗСБ', nameEn: 'AMT / TEM', descRu: 'Глубинное зондирование до 2-3 км', descEn: 'Deep sounding up to 2-3 km' },
  { icon: BarChart3, nameRu: 'Магниторазведка', nameEn: 'Magnetometry', descRu: 'Сеть 200×20 м, детальная', descEn: '200×20 m grid, detailed' },
  { icon: Target, nameRu: 'Электроразведка ВП', nameEn: 'IP Survey', descRu: 'Выявление сульфидных зон', descEn: 'Sulfidized zones detection' },
  { icon: DrillIcon, nameRu: 'Колонковое бурение', nameEn: 'Core Drilling', descRu: 'До 300 м глубины', descEn: 'Up to 300 m depth' },
]

// Инфраструктурные преимущества (из документа)
const infrastructure = [
  { icon: Ship, titleRu: 'Северный морской путь', titleEn: 'Northern Sea Route', descRu: 'Глубоководные бухты Зимовочная и Далекая', descEn: 'Deep-water bays Zimovochnaya and Dalekaya' },
  { icon: Plane, titleRu: 'Авиасообщение', titleEn: 'Air Service', descRu: 'Аэропорт м. Челюскин (Ан-26, Ми-8)', descEn: 'Chelyuskin airport (An-26, Mi-8)' },
  { icon: Building2, titleRu: 'База в Хатанге', titleEn: 'Khatanga Base', descRu: '570 км вертолётом, логистический хаб', descEn: '570 km by helicopter, logistics hub' },
  { icon: Globe, titleRu: 'Энергоресурсы', titleEn: 'Energy Resources', descRu: 'Каменный уголь в регионе', descEn: 'Coal in region' },
]

// План по монетизации / выходу
const monetizationSteps = [
  { 
    icon: Target, 
    titleRu: 'Этап 1', titleEn: 'Stage 1',
    subtitleRu: 'Подтверждение ресурсов', subtitleEn: 'Resource Confirmation',
    descRu: 'Категории С2 и P1 по каждому участку', 
    descEn: 'C2 and P1 categories per area'
  },
  { 
    icon: FileText, 
    titleRu: 'Этап 2', titleEn: 'Stage 2',
    subtitleRu: 'ТЭО и оценка', subtitleEn: 'Feasibility Study',
    descRu: 'ТЭО кондиций, госэкспертиза', 
    descEn: 'Feasibility study, state review'
  },
  { 
    icon: Users, 
    titleRu: 'Этап 3', titleEn: 'Stage 3',
    subtitleRu: 'Стратегический партнёр', subtitleEn: 'Strategic Partner',
    descRu: 'Продажа проекта / farm-in / СП с майнером', 
    descEn: 'Project sale / farm-in / JV with miner'
  },
  { 
    icon: DollarSign, 
    titleRu: 'Этап 4', titleEn: 'Stage 4',
    subtitleRu: 'IPO или дивиденды', subtitleEn: 'IPO or Dividends',
    descRu: 'Выход на биржу или распределение роялти', 
    descEn: 'Listing or royalty distribution'
  },
]

export function InvestorsContent() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('projects')

  const totalPotential = '14.2 млн т Cu'
  const totalGold = '290 т Au'
  const licenseCount = 5
  const totalMo = '7.4 млн т Mo'

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <Image
                      src="/images/projects3.jpg"
                      alt="Проекты Полярной Экспедиционной Компании"
                      fill
                      priority  // ← загружаем сразу (LCP)
                      className="object-cover"
                      sizes="100vw"
                      style={{ objectPosition: 'center 53%' }}
                    />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm flex-wrap">
                <Link href="/" className="hover:text-primary transition-colors">
                  {t('Главная', 'Home')}
                </Link>
                <span>/</span>
                <span className="text-foreground font-medium">
                  {t('Инвесторам', 'Investors')}
                </span>
              </div>

              <div className="flex flex-col items-start gap-6 mb-8">
                <Badge variant="outline" className="bg-orange-500/10 text-orange-500 border-orange-500/30 text-sm py-1 px-3">
                   {t('Прямые инвестиции в геологоразведку', 'Direct Investment in Exploration')}
                </Badge>
                
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  {t('Пять лицензий на Таймыре', 'Five Licenses in Taimyr')}
                  <span className="text-orange-500 block mt-2">
                    11.8+, 14.2 млн тонн меди
                  </span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                {t(
                  'Полярная Экспедиционная Компания владеет 5 лицензиями на геологоразведку в пределах Дорожнинского рудного района — одного из самых перспективных медно-порфировых поясов Арктики.',
                  'Polar Expedition Company holds 5 exploration licenses within the Dorozhninsky ore district — one of the most promising copper-porphyry belts in the Arctic.'
                )}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button size="lg" asChild>
                  <Link href="/documents/investor-deck.pdf">
                     {t('Скачать презентацию', 'Download Presentation')}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contacts">
                    {t('Связаться с IR', 'Contact IR')}
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Metrics Dashboard - 4 columns */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 rounded-xl bg-background/50">
              <div className="text-3xl font-bold text-orange-500 mb-1">{licenseCount}</div>
              <div className="text-sm text-muted-foreground">{t('Действующих лицензий', 'Active Licenses')}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-background/50">
              <div className="text-3xl font-bold text-orange-500 mb-1">{totalPotential}</div>
              <div className="text-sm text-muted-foreground">{t('Прогнозных ресурсов меди', 'Predicted Copper Resources')}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-background/50">
              <div className="text-3xl font-bold text-orange-500 mb-1">{totalGold}</div>
              <div className="text-sm text-muted-foreground">{t('Прогнозных ресурсов золота', 'Predicted Gold Resources')}</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-background/50">
              <div className="text-3xl font-bold text-orange-500 mb-1">~1 200 км²</div>
              <div className="text-sm text-muted-foreground">{t('Общая лицензионная площадь', 'Total Licensed Area')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="projects">{t('Проекты', 'Projects')}</TabsTrigger>
              <TabsTrigger value="geology">{t('Геология', 'Geology')}</TabsTrigger>
              <TabsTrigger value="monetization">{t('Монетизация', 'Monetization')}</TabsTrigger>
              <TabsTrigger value="infrastructure">{t('Инфраструктура', 'Infrastructure')}</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-8">
              {licenseProjects.map((project, index) => (
                <FadeIn key={project.id} delay={index * 0.1}>
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="card-enhanced rounded-2xl overflow-hidden border border-border hover:border-orange-500/30 transition-all"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="relative w-full lg:w-80 h-64 lg:h-auto bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-20 h-20 mx-auto bg-orange-500/20 rounded-full flex items-center justify-center mb-4">
                            <Layers className="w-10 h-10 text-orange-500" />
                          </div>
                          <Badge variant={project.priority === 'critical' ? 'default' : 'secondary'} 
                                 className={project.priority === 'critical' ? 'bg-orange-500' : ''}>
                            {project.priority === 'critical' ? ' Приоритетный проект' : ''}
                            {project.priority === 'high' ? ' Перспективный' : ''}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="flex-1 p-6 lg:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="font-display text-2xl font-bold text-foreground">
                              {t(project.nameRu, project.nameEn)}
                            </h3>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs font-mono">
                                {project.license}
                              </Badge>
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
                          <Badge variant="secondary" className="bg-slate-800 text-slate-300">
                            {t(project.statusRu, project.statusEn)}
                          </Badge>
                        </div>

                        <div className="mb-4 p-4 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 rounded-r-lg">
                          <p className="text-foreground font-semibold">
                            📊 {t(project.potentialRu, project.potentialEn)}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                             {t(project.stageRu, project.stageEn)}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3 text-sm">
                            {t('🔍 Ключевые результаты и преимущества:', '🔍 Key results & highlights:')}
                          </h4>
                          <div className="grid md:grid-cols-2 gap-2">
                            {project.highlightsRu.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span className="text-muted-foreground">
                                  {t(highlight, project.highlightsEn[idx])}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </TabsContent>

            <TabsContent value="geology">
              <div className="grid lg:grid-cols-2 gap-8">
                <FadeIn>
                  <div className="card-enhanced p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Radio className="w-5 h-5 text-orange-500" />
                      {t('Геологическая модель', 'Geological Model')
                    }</h3>
                    <p className="text-muted-foreground mb-4">
                      {t('Дорожнинский рудный район относится к порфировому типу (Porphyry Copper System) с классической зональностью: калишпатизация → березиты → аргиллизиты → пропилиты. Оруденение контролируется Дорожнинским глубинным разломом.','The Dorozhninsky ore district belongs to the porphyry copper system type with classic zonation: potassic alteration → beresites → argillizites → propylites. Mineralization is controlled by the Dorozhninsky deep fault.')}
                    </p>
                    <div className="space-y-3">
                      {explorationMethods.map((method, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-card/50">
                          <method.icon className="w-5 h-5 text-orange-500" />
                          <div>
                            <div className="font-medium text-foreground">{t(method.nameRu, method.nameEn)}</div>
                            <div className="text-sm text-muted-foreground">{t(method.descRu, method.descEn)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="card-enhanced p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      {t('Аналоги успешных проектов', 'Successful Project Analogs')}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 p-3 bg-orange-500/5 rounded-lg border border-orange-500/20">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-foreground">Аксуг (Тыва)</div>
                          <div className="text-sm text-muted-foreground">{t('Cu-Mo-Au порфиры, ~3 млн т меди','Cu-Mo-Au porphyries, ~3 Mt copper')}</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-orange-500/5 rounded-lg border border-orange-500/20">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-foreground">Песчанка (Чукотка)</div>
                          <div className="text-sm text-muted-foreground">{t('Cu-Mo-Au порфиры, ~8 млн т меди','Cu-Mo-Au porphyries, ~8 Mt copper')}</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-orange-500/5 rounded-lg border border-orange-500/20">
                        <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5" />
                        <div>
                          <div className="font-semibold text-foreground">Актогай (Казахстан)</div>
                          <div className="text-sm text-muted-foreground">{t('Cu-Mo-Au порфиры, ~5 млн т меди','Cu-Mo-Au porphyries, ~5 Mt copper')}</div>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-card rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">
                        {t('Вывод: Дорожнинский район обладает всеми признаками крупной рудно-магматической системы, аналогичной мировым медно-порфировым провинциям.', 'Conclusion: The Dorozhninsky district has all the features of a large ore-magmatic system, analogous to world-class copper-porphyry provinces.')}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </TabsContent>

            <TabsContent value="monetization">
              <div className="grid lg:grid-cols-2 gap-8">
                <FadeIn>
                  <div className="card-enhanced p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-orange-500" />
                      {t('План монетизации', 'Monetization Plan')}
                    </h3>
                    <div className="space-y-4">
                      {monetizationSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-3 rounded-lg bg-card/50">
                          <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                            <step.icon className="w-5 h-5 text-orange-500" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{t(step.titleRu, step.titleEn)}</div>
                            <div className="text-sm text-orange-500 font-mono">{t(step.subtitleRu, step.subtitleEn)}</div>
                            <div className="text-sm text-muted-foreground mt-1">{t(step.descRu, step.descEn)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="card-enhanced p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Gift className="w-5 h-5 text-orange-500" />
                      {t('Структура сделки для инвестора', 'Investment Structure')}
                    </h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-border rounded-lg">
                        <div className="text-orange-500 font-bold text-lg mb-1">💎 Farm-in / JV</div>
                        <p className="text-muted-foreground text-sm">{t('Поэтапное финансирование ГРР в обмен на долю в проекте. Возможность обратного выкупа (back-in right).','Phased exploration financing in exchange for project stake. Back-in right option available.')}</p>
                      </div>
                      <div className="p-4 border border-border rounded-lg">
                        <div className="text-orange-500 font-bold text-lg mb-1">📜 Лицензионное соглашение (NSR)</div>
                        <p className="text-muted-foreground text-sm">{t('Роялти от будущей добычи без операционных затрат.','Royalty from future production with no operating costs.')}</p>
                      </div>
                      <div className="p-4 border border-border rounded-lg">
                        <div className="text-orange-500 font-bold text-lg mb-1">🏗️ Прямая продажа проекта</div>
                        <p className="text-muted-foreground text-sm">{t('Стратегическому майнеру (Норникель, Полиметалл и др.) после подтверждения ресурсов.','To strategic mining company (Norilsk Nickel, Polymetal, etc.) after resource confirmation.')}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 rounded-lg">
                        <p className="text-sm font-medium text-foreground">
                           {t('Потенциальная капитализация проекта при подтверждении 5 млн т Cu:','Projected capitalization with confirmed 5 Mt Cu:')} <span className="text-orange-500 font-bold">$500M – $1B+</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </TabsContent>

            <TabsContent value="infrastructure">
              <div className="grid lg:grid-cols-2 gap-8">
                <FadeIn>
                  <div className="card-enhanced p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Ship className="w-5 h-5 text-orange-500" />
                      {t('Транспортная доступность', 'Transport Accessibility')}
                    </h3>
                    <div className="space-y-4">
                      {infrastructure.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-orange-500" />
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{t(item.titleRu, item.titleEn)}</div>
                            <div className="text-sm text-muted-foreground">{t(item.descRu, item.descEn)}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <div className="card-enhanced p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-orange-500" />
                      {t('Логистика работ', 'Works Logistics')}
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                        <span className="text-muted-foreground">{t('Автозимники от бухты Зимовочная (октябрь–июнь)','Winter roads from Zimovochnaya Bay (October–June)')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                        <span className="text-muted-foreground">{t('Вертолётное сообщение Ми-8 (круглогодично)','Mi-8 helicopter service (year-round)')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                        <span className="text-muted-foreground">{t('Ближайший порт: Хатанга (морской и речной)','Nearest port: Khatanga (sea and river)')}</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                        <span className="text-muted-foreground">{t('Возможность строительства собственного порта в бухтах Зимовочная/Далекая','Possibility to build own port in Zimovochnaya/Dalekaya bays')}</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-card rounded-lg border border-border">
                      <p className="text-sm text-muted-foreground">
                        {t('Главное преимущество: удалённость компенсируется логистическим плечом Северного морского пути — прямая доставка в порты Мурманск, Архангельск, Владивосток.', 'Main advantage: remoteness is offset by the Northern Sea Route logistics — direct delivery to Murmansk, Arkhangelsk, Vladivostok ports.')}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('Готовы обсудить инвестиции?', 'Ready to discuss investment?')}
            </h2>
            <p className="text-orange-100 max-w-2xl mx-auto mb-8">
              {t('Предоставим детальную информацию по лицензиям, геофизике, сметам и юридической структуре сделки.','We provide detailed information on licenses, geophysics, budgets and legal structure.')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/documents/teo-conditions.pdf">
                   {t('Скачать ТЭО кондиций', 'Download Feasibility Study')}
                </Link>
              </Button>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <Link href="/contacts">
                  {t('Запросить встречу с IR', 'Request IR Meeting')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}