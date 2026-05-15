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
    nameRu: "Симсовская",
    nameEn: "Simsovskaya",
    license: "КРР03711БП",
    area: "96.75 км²",
    locationRu: "Таймыр, побережье моря Лаптевых",
    locationEn: "Taimyr, Laptev Sea coast",
    statusRu: "Активные ГРР",
    statusEn: "Active Exploration",
    potentialRu: "4 млн т меди, 2 млн т молибдена, 50 т золота",
    potentialEn: "4 Mt copper, 2 Mt molybdenum, 50 t gold",
    stageRu: "Поисково-оценочный этап",
    stageEn: "Exploration stage",
    image: "/images/sims.JPG",
    descriptionRu: "Располагается на побережье моря Лаптевых в 21 км западнее глубоководной бухты Зимовочная. Выявлена зона сульфидной минерализации протяженностью 6 км.",
    descriptionEn: "Located on the Laptev Sea coast, 21 km west of Zimovochnaya Bay. A 6 km sulfide mineralization zone has been identified.",
    highlightsRu: [
      "96.75 км² — лицензионная площадь",
      "Выход к морю Лаптевых (логистика)",
      "6 км зона сульфидной минерализации",
      "4 зоны березитизации с медной минерализацией"
    ],
    highlightsEn: [
      "96.75 km² — licensed area",
      "Access to Laptev Sea (logistics)",
      "6 km sulfide mineralization zone",
      "4 beresitization zones with copper mineralization"
    ]
  },
  {
    id: 2,
    nameRu: "Дорожнинская",
    nameEn: "Dorozhninskaya",
    license: "КРР03710БП",
    area: "52.2 км²",
    locationRu: "Таймыр, 42 км от бухты Зимовочная",
    locationEn: "Taimyr, 42 km from Zimovochnaya Bay",
    statusRu: "Активные ГРР",
    statusEn: "Active Exploration",
    potentialRu: "2 млн т меди, 1 млн т молибдена, 50 т золота",
    potentialEn: "2 Mt copper, 1 Mt molybdenum, 50 t gold",
    stageRu: "Поисково-оценочный этап",
    stageEn: "Exploration stage",
    image: "/images/dorozh.jpg",
    descriptionRu: "Приурочена к Дорожнинскому разлому. Выявлена зона аргиллизации и сульфидизации протяженностью 5.8 км с содержанием меди до 0.64%.",
    descriptionEn: "Associated with the Dorozhninsky fault. A 5.8 km argillization and sulfidization zone with copper content up to 0.64% has been identified.",
    highlightsRu: [
      "Содержание Cu: 0.1–0.64%",
      "Серебро: 1.7–20 г/т",
      "Золото: 0.29–0.6 г/т",
      "5.8 км — зона минерализации"
    ],
    highlightsEn: [
      "Cu content: 0.1–0.64%",
      "Silver: 1.7–20 g/t",
      "Gold: 0.29–0.6 g/t",
      "5.8 km — mineralization zone"
    ]
  },
  {
    id: 3,
    nameRu: "Пекинская",
    nameEn: "Pekinskaya",
    license: "КРР037??БП",
    area: "97.07 км²",
    locationRu: "Таймыр, верховья р. Пека",
    locationEn: "Taimyr, upper reaches of Peka River",
    statusRu: "Активные ГРР",
    statusEn: "Active Exploration",
    potentialRu: "3 млн т меди, 70 т золота",
    potentialEn: "3 Mt copper, 70 t gold",
    stageRu: "Детальная геофизика",
    stageEn: "Detailed Geophysics",
    image: "/images/pekin.JPG",
    descriptionRu: "Наиболее изученная площадь. Вскрыто рудное тело мощностью 15 м со средним содержанием меди 0.4%. Выявлены площадные ореолы меди, молибдена и серебра.",
    descriptionEn: "The most explored area. A 15 m thick ore body with average copper grade 0.4% has been discovered. Area-wide halos of copper, molybdenum and silver have been identified.",
    highlightsRu: [
      "Рудное тело: 15 м (0.4% Cu)",
      "Максимальное содержание Cu >1%",
      "Разбурено >5000 м скважин",
      "Площадные геохимические аномалии"
    ],
    highlightsEn: [
      "Ore body: 15 m (0.4% Cu)",
      "Maximum Cu content >1%",
      ">5000 m drilled",
      "Area-wide geochemical anomalies"
    ]
  },
  {
    id: 4,
    nameRu: "Широкинская",
    nameEn: "Shirokinskaya",
    license: "КРР03707БП - КРР03709БП",
    area: "~250 км²",
    locationRu: "Таймыр, бассейны рек Широкая, Гольцовая и Тихая",
    locationEn: "Taimyr, Shirokaya, Goltsovaya and Tikhaya river basins",
    statusRu: "Прогнозные ресурсы",
    statusEn: "Predicted Resources",
    potentialRu: "5.2 млн т меди, 2.4 млн т молибдена, 70 т золота",
    potentialEn: "5.2 Mt copper, 2.4 Mt molybdenum, 70 t gold",
    stageRu: "Рекомендована к лицензированию",
    stageEn: "Recommended for Licensing",
    image: "/images/shirokinskaya.jpg",
    descriptionRu: "Включает известные проявления «Порфировое» (медь, молибден) и «Незабудка» (серебро-полиметаллы). Ожидается выявление медно-порфирового и эпитермального оруденения.",
    descriptionEn: "Includes the known occurrences 'Porphyry' (copper, molybdenum) and 'Nezabudka' (silver-polymetals). Discovery of copper-porphyry and epithermal mineralization is expected.",
    highlightsRu: [
      "5.2 млн т Cu — прогнозные ресурсы",
      "Проявление «Порфировое» — 660 тыс. т Cu",
      "Проявление «Незабудка» — 1,933 т Ag",
      "Перспективы на золото и серебро"
    ],
    highlightsEn: [
      "5.2 Mt Cu — predicted resources",
      "'Porphyry' occurrence — 660 kt Cu",
      "'Nezabudka' occurrence — 1,933 t Ag",
      "Gold and silver potential"
    ]
  }
]

// Сводные ресурсы Дорожнинского рудного района
const totalResources = {
  copperRu: "14.2 млн т",
  copperEn: "14.2 Mt",
  molybdenumRu: "7.4 млн т",
  molybdenumEn: "7.4 Mt",
  goldRu: "290 т",
  goldEn: "290 t",
  leadRu: "5.5 млн т",
  leadEn: "5.5 Mt",
  zincRu: "2.2 млн т",
  zincEn: "2.2 Mt",
  silverRu: "5 000 т",
  silverEn: "5,000 t"
}

const advantages = [
  {
    icon: Ship,
    titleRu: "Близость к Севморпути",
    titleEn: "Proximity to Northern Sea Route",
    descriptionRu: "Площади расположены в 10-20 км от побережья моря Лаптевых. Наличие глубоководных бухт (Зимовочная, Далекая) для строительства морского порта.",
    descriptionEn: "Areas are located 10-20 km from the Laptev Sea coast. Deep-water bays (Zimovochnaya, Dalekaya) available for seaport construction."
  },
  {
    icon: Truck,
    titleRu: "Транспортная доступность",
    titleEn: "Transport Accessibility",
    descriptionRu: "Ближайший аэропорт — п. Челюскин (Ан-2, Ил-14, Ан-26, Ан-12, Ми-8). Перевозка грузов из с. Хатанга (570 км, Ми-8) или морем.",
    descriptionEn: "Nearest airport — Chelyuskin (An-2, Il-14, An-26, An-12, Mi-8). Cargo transport from Khatanga (570 km, Mi-8) or by sea."
  },
  {
    icon: Shield,
    titleRu: "Геологический потенциал",
    titleEn: "Geological Potential",
    descriptionRu: "Позднепалеозойский пекинский комплекс гранитоидов. Петрохимические характеристики типичны для рудоносных порфировых систем (адакитовые метки).",
    descriptionEn: "Late Paleozoic Pekin granitoid complex. Petrochemical characteristics typical of ore-bearing porphyry systems (adakitic signatures)."
  },
  {
    icon: Zap,
    titleRu: "Аналоги",
    titleEn: "Analogues",
    descriptionRu: "Объекты-аналоги: Аксуг (Тува), Песчанка (Чукотка), Актогай (Казахстан), месторождения центрально-африканского пояса.",
    descriptionEn: "Analogous deposits: Aksug (Tuva), Peschanka (Chukotka), Aktogay (Kazakhstan), Central African belt deposits."
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
            alt={t("Юниорные проекты Полярной Экспедиционной Компании", "Junior Projects of Polar Expedition Company")}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: 'center 53%' }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-white/80 mb-4 text-sm flex-wrap">
                <Link href="/" className="hover:text-white transition-colors">
                  {t('Главная', 'Home')}
                </Link>
                <span>/</span>
                <span className="text-white">
                  {t('Инвесторам', 'Investors')}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                  {t('Юниорные проекты на Таймыре', 'Junior Projects in Taimyr')}
                </h1>
              </div>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {t(
                  'Инвестируйте в разведку медно-никелевых и золоторудных месторождений на полуострове Челюскин. 5 лицензионных участков с прогнозными ресурсами более 14 млн тонн меди и 290 тонн золота.',
                  'Invest in copper-nickel and gold exploration on the Chelyuskin Peninsula. 5 licensed areas with predicted resources of over 14 million tons of copper and 290 tons of gold.'
                )}
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
              <h2 className="text-2xl font-bold text-foreground">
                {t('Суммарный ресурсный потенциал', 'Total Resource Potential')}
              </h2>
              <p className="text-muted-foreground">
                {t('Дорожнинский рудный район — новый горнопромышленный кластер на Таймыре', 'Dorozhninsky ore district — a new mining cluster in Taimyr')}
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{t(totalResources.copperRu, totalResources.copperEn)}</div>
              <div className="text-xs text-muted-foreground">{t('Меди', 'Copper')}</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{t(totalResources.molybdenumRu, totalResources.molybdenumEn)}</div>
              <div className="text-xs text-muted-foreground">{t('Молибдена', 'Molybdenum')}</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{t(totalResources.goldRu, totalResources.goldEn)}</div>
              <div className="text-xs text-muted-foreground">{t('Золота', 'Gold')}</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{t(totalResources.leadRu, totalResources.leadEn)}</div>
              <div className="text-xs text-muted-foreground">{t('Свинца', 'Lead')}</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{t(totalResources.zincRu, totalResources.zincEn)}</div>
              <div className="text-xs text-muted-foreground">{t('Цинка', 'Zinc')}</div>
            </div>
            <div className="text-center p-4 bg-background rounded-xl border border-border">
              <div className="text-2xl font-bold text-orange-500">{t(totalResources.silverRu, totalResources.silverEn)}</div>
              <div className="text-xs text-muted-foreground">{t('Серебра', 'Silver')}</div>
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
                {t('Почему стоит инвестировать', 'Why Invest')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('Уникальное сочетание ресурсного потенциала, инфраструктуры и геологических перспектив', 'Unique combination of resource potential, infrastructure and geological prospects')}
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="card-enhanced p-6 h-full">
                  <adv.icon className="w-10 h-10 text-orange-500 mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t(adv.titleRu, adv.titleEn)}</h3>
                  <p className="text-sm text-muted-foreground">{t(adv.descriptionRu, adv.descriptionEn)}</p>
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
                {t('Юниорные проекты Полярной ЭК', 'Junior Projects of Polar EC')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('Перспективные площади на полуострове Челюскин, готовые к постановке поисково-оценочных работ', 'Prospective areas on the Chelyuskin Peninsula ready for exploration')}
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
                        alt={t(project.nameRu, project.nameEn)}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">{t(project.nameRu, project.nameEn)}</h3>
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
                          {t(project.statusRu, project.statusEn)}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {t(project.descriptionRu, project.descriptionEn)}
                      </p>
                      
                      <div className="mb-4 p-3 bg-orange-500/5 border border-orange-500/20 rounded-lg">
                        <p className="text-foreground font-semibold">
                          📈 {t('Прогнозные ресурсы:', 'Predicted resources:')} {t(project.potentialRu, project.potentialEn)}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          🎯 {t('Этап:', 'Stage:')} {t(project.stageRu, project.stageEn)}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.highlightsRu.map((highlight, idx) => (
                          <span key={idx} className="px-2 py-1 bg-background rounded-md text-xs text-muted-foreground border border-border">
                            {t(highlight, project.highlightsEn[idx])}
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
            * {t('По результатам работ ООО «Полярная Экспедиционная Компания», ФГБУ ВСЕГЕИ (Берзон Е.И., Проскурнин В.Ф., 2020 г.)', 'Based on the results of Polar Expedition Company LLC, FSBI VSEGEI (Berzon E.I., Proskurnin V.F., 2020)')}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {t('Информация для инвесторов', 'Information for Investors')}
              </h2>
              <p className="text-muted-foreground">
                {t('По запросу предоставляются следующие материалы:', 'The following materials are available upon request:')}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" asChild>
                <Link href="/documents/geological-report.pdf">
                  <FileText className="w-4 h-4 mr-2" />
                  {t('Геологический отчёт', 'Geological Report')}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/documents/presentation.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  {t('Презентация проектов (PDF)', 'Project Presentation (PDF)')}
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contacts">
                  {t('Связаться с IR-отделом', 'Contact IR Department')}
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