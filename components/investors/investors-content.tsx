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
  Download,
  CheckCircle,
  Layers,
  Zap,
  Ship,
  Truck
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// Данные по юниорным проектам из документов
const juniorProjects = [
  {
    id: 1,
    name: "Симсовская",
    license: "КРР037??БП",
    area: "96.75 км²",
    location: "Таймыр, побережье моря Лаптевых",
    status: "Активные ГРР",
    potential: "4 млн т меди, 2 млн т молибдена, 50 т золота",
    stage: "Поисково-оценочный этап",
    image: "/images/sims.jpg",
    description: "Располагается на побережье моря Лаптевых в 21 км западнее глубоководной бухты Зимовочная. Выявлена зона сульфидной минерализации протяженностью 6 км.",
    highlights: [
      "96.75 км² — лицензионная площадь",
      "Выход к морю Лаптевых (логистика)",
      "6 км зона сульфидной минерализации",
      "4 зоны березитизации с медной минерализацией"
    ]
  },
  {
    id: 2,
    name: "Дорожнинская",
    license: "КРР03710БП",
    area: "52.2 км²",
    location: "Таймыр, 42 км от бухты Зимовочная",
    status: "Активные ГРР",
    potential: "2 млн т меди, 1 млн т молибдена, 50 т золота",
    stage: "Поисково-оценочный этап",
    image: "/images/dorozh.jpg",
    description: "Приурочена к Дорожнинскому разлому. Выявлена зона аргиллизации и сульфидизации протяженностью 5.8 км с содержанием меди до 0.64%.",
    highlights: [
      "Содержание Cu: 0.1–0.64%",
      "Серебро: 1.7–20 г/т",
      "Золото: 0.29–0.6 г/т",
      "5.8 км — зона минерализации"
    ]
  },
  {
    id: 3,
    name: "Пекинская",
    license: "КРР037??БП",
    area: "97.07 км²",
    location: "Таймыр, верховья р. Пека",
    status: "Активные ГРР",
    potential: "3 млн т меди, 70 т золота",
    stage: "Детальная геофизика",
    image: "/images/pekin.jpg",
    description: "Наиболее изученная площадь. Вскрыто рудное тело мощностью 15 м со средним содержанием меди 0.4%. Выявлены площадные ореолы меди, молибдена и серебра.",
    highlights: [
      "Рудное тело: 15 м (0.4% Cu)",
      "Максимальное содержание Cu >1%",
      "Разбурено >5000 м скважин",
      "Площадные геохимические аномалии"
    ]
  },
  {
    id: 4,
    name: "Широкинская",
    license: "—",
    area: "~250 км²",
    location: "Таймыр, бассейны рек Широкая, Гольцовая и Тихая",
    status: "Прогнозные ресурсы",
    potential: "5.2 млн т меди, 2.4 млн т молибдена, 70 т золота",
    stage: "Рекомендована к лицензированию",
    image: "/images/shirokinskaya.jpg",
    description: "Включает известные проявления «Порфировое» (медь, молибден) и «Незабудка» (серебро-полиметаллы). Ожидается выявление медно-порфирового и эпитермального оруденения.",
    highlights: [
      "5.2 млн т Cu — прогнозные ресурсы",
      "Проявление «Порфировое» — 660 тыс. т Cu",
      "Проявление «Незабудка» — 1,933 т Ag",
      "Перспективы на золото и серебро"
    ]
  },
  {
    id: 5,
    name: "Оперативная",
    license: "—",
    area: "~150 км²",
    location: "Таймыр, северная часть Кристифенсенского массива",
    status: "Прогнозные ресурсы",
    potential: "250 т золота (P2)",
    stage: "Подготовлена к бурению",
    image: "/images/oper.jpg",
    description: "Вскрыто рудное тело штокверкового типа со средним содержанием 2.3 г/т Au на мощность до 8 м. Прогнозные ресурсы золота — 250 тонн.",
    highlights: [
      "250 т Au — прогнозные ресурсы",
      "2.3 г/т Au — среднее содержание",
      "70 м золотоносный интервал в канаве",
      "Рудное тело штокверкового типа"
    ]
  }
]

// Сводные ресурсы Дорожнинского рудного района
const totalResources = {
  copper: "14.2 млн т",
  molybdenum: "7.4 млн т",
  gold: "290 т",
  lead: "5.5 млн т",
  zinc: "2.2 млн т",
  silver: "5 000 т"
}

const advantages = [
  {
    icon: Ship,
    title: "Близость к Севморпути",
    description: "Площади расположены в 10-20 км от побережья моря Лаптевых. Наличие глубоководных бухт (Зимовочная, Далекая) для строительства морского порта."
  },
  {
    icon: Truck,
    title: "Транспортная доступность",
    description: "Ближайший аэропорт — п. Челюскин (Ан-2, Ил-14, Ан-26, Ан-12, Ми-8). Перевозка грузов из с. Хатанга (570 км, Ми-8) или морем."
  },
  {
    icon: Shield,
    title: "Геологический потенциал",
    description: "Позднепалеозойский пекинский комплекс гранитоидов. Петрохимические характеристики типичны для рудоносных порфировых систем (адакитовые метки)."
  },
  {
    icon: Zap,
    title: "Аналоги",
    description: "Объекты-аналоги: Аксуг (Тува), Песчанка (Чукотка), Актогай (Казахстан), месторождения центрально-африканского пояса."
  }
]

export function InvestorsContent() {
  const { t } = useLanguage()
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-card to-background overflow-hidden">
        <div className="absolute inset-0">
          <Image
                      src="/images/DSC06216.JPG"
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
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-muted-foreground mb-4 text-sm flex-wrap">
                <Link href="/" className="hover:text-primary transition-colors">Главная</Link>
                <span>/</span>
                <span className="text-foreground">Инвесторам</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-background">
                  Юниорные проекты на Таймыре
                </h1>
              </div>
              
              <p className="text-xl text-background leading-relaxed">
                Инвестируйте в разведку медно-никелевых и золоторудных месторождений на полуострове Челюскин. 
                5 лицензионных участков с прогнозными ресурсами более 14 млн тонн меди и 290 тонн золота.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Total Resources Stats */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Суммарный ресурсный потенциал</h2>
              <p className="text-muted-foreground">Дорожнинский рудный район — новый горнопромышленный кластер на Таймыре</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{totalResources.copper}</div>
              <div className="text-xs text-muted-foreground">Меди</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{totalResources.molybdenum}</div>
              <div className="text-xs text-muted-foreground">Молибдена</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{totalResources.gold}</div>
              <div className="text-xs text-muted-foreground">Золота</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{totalResources.lead}</div>
              <div className="text-xs text-muted-foreground">Свинца</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{totalResources.zinc}</div>
              <div className="text-xs text-muted-foreground">Цинка</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{totalResources.silver}</div>
              <div className="text-xs text-muted-foreground">Серебра</div>
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
                Почему стоит инвестировать
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Уникальное сочетание ресурсного потенциала, инфраструктуры и геологических перспектив
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="card-enhanced p-6 h-full">
                  <adv.icon className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground">{adv.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Junior Projects Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Юниорные проекты Полярной ЭК
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Перспективные площади на полуострове Челюскин, готовые к постановке поисково-оценочных работ
              </p>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {juniorProjects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.1}>
                <div className="card-enhanced rounded-2xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-80 lg:w-96 h-64 md:h-auto">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {project.license !== "—" && (
                              <span className="px-2 py-0.5 bg-orange-500/10 text-orange-500 text-xs font-mono rounded">
                                {project.license}
                              </span>
                            )}
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Layers className="w-3 h-3" />
                              {project.area}
                            </span>
                          </div>
                        </div>
                        <div className="px-3 py-1 bg-green-500/10 text-green-500 text-sm rounded-full">
                          {project.status}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      
                      <div className="mb-4 p-3 bg-orange-500/5 border border-orange-500/20 rounded-lg">
                        <p className="text-foreground font-semibold">📈 Прогнозные ресурсы: {project.potential}</p>
                        <p className="text-sm text-muted-foreground mt-1">🎯 Этап: {project.stage}</p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <span key={idx} className="px-2 py-1 bg-background rounded-md text-xs text-muted-foreground border border-border">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            * По результатам работ ООО «Полярная Экспедиционная Компания», ФГБУ ВСЕГЕИ (Берзон Е.И., Проскурнин В.Ф., 2020 г.)
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">Информация для инвесторов</h2>
              <p className="text-muted-foreground">По запросу предоставляются следующие материалы:</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/documents/geological-report.pdf">
                  <FileText className="w-4 h-4 mr-2" />
                  Геологический отчёт
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/documents/presentation.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Презентация проектов (PDF)
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contacts">
                  Связаться с IR-отделом
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}