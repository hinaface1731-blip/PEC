'use client'

import { FadeIn } from '@/components/fade-in'
import { useLanguage } from '@/components/language-provider'
import Link from 'next/link'
import Image from 'next/image'
import {
  TrendingUp,
  Target,
  Shield,
  Coins,
  Layers,
  CheckCircle,
  Ship,
  Truck,
  Mountain,
  Zap,
  Gem,
} from 'lucide-react'

// Данные — из инвестиционного предложения ПЭК (Таймыр, 2025 г.)

const keyFigures = [
  { icon: Coins, value: '1,1 млрд ₽', valueEn: 'RUB 1.1 bn', labelRu: 'инвестиции в поисково-оценочные работы', labelEn: 'investment in exploration and evaluation' },
  { icon: TrendingUp, value: '4,9–7,8 млрд ₽', valueEn: 'RUB 4.9–7.8 bn', labelRu: 'целевая стоимость портфеля на момент постановки запасов', labelEn: 'target portfolio value once reserves are registered' },
  { icon: Target, value: '5x–8x', valueEn: '5x–8x', labelRu: 'мультипликатор инвестиций', labelEn: 'investment multiple' },
  { icon: Shield, value: 'Поисковая', valueEn: 'Exploration', labelRu: 'стадия — ранний вход', labelEn: 'stage — early entry' },
]

// Авторские прогнозные ресурсы по площадям Широкинского узла
const resourcesTable = {
  headers: [
    { ru: 'Медь (Cu), млн т', en: 'Copper (Cu), Mt' },
    { ru: 'Молибден (Mo), млн т', en: 'Molybdenum (Mo), Mt' },
    { ru: 'Свинец (Pb), млн т', en: 'Lead (Pb), Mt' },
    { ru: 'Цинк (Zn), млн т', en: 'Zinc (Zn), Mt' },
    { ru: 'Золото (Au), т', en: 'Gold (Au), t' },
    { ru: 'Серебро (Ag), тыс. т', en: 'Silver (Ag), kt' },
  ],
  rows: [
    { ru: 'Северо-Широкинская (99 км²)', en: 'North Shirokinskaya (99 km²)', values: ['1,5', '1,4', '—', '—', '50', '—'] },
    { ru: 'Центрально-Широкинская (99 км²)', en: 'Central Shirokinskaya (99 km²)', values: ['3,8', '1,0', '—', '—', '70', '—'] },
    { ru: 'Трёхсестерская (96 км²)', en: 'Tryokhsesterskaya (96 km²)', values: ['1,2', '—', '5,5', '2,2', '50', '5,0'] },
  ],
  total: ['6,5', '2,4', '5,5', '2,2', '170', '5,0'],
}

const focusAreas = [
  {
    nameRu: 'Северо-Широкинская',
    nameEn: 'North Shirokinskaya',
    license: 'КРР 03707 ТП',
    area: '99 км²',
    typeRu: 'Cu-Mo-порфировый тип',
    typeEn: 'Cu-Mo porphyry type',
    image: '/images/investors/north-shirokinskaya.jpg',
    titleRu: 'Подтверждённый потенциал медно-порфирового оруденения',
    titleEn: 'Confirmed copper-porphyry potential',
    factsRu: [
      'Молибден-медное оруденение с Ag-Pb-Zn',
      'Исторические данные (1979 г.): проявление «Порфировое», среднее содержание Mo 0,03% (макс. 0,5%), прожилки с Ag до 50 г/т, Au 0,1–0,5 г/т',
      'Современные данные: аномалии Cu (55 ppm), Mo (11 ppm), Zn (94 ppm); прожилки с Au 0,47–0,8 г/т; среднее содержание Cu 0,2%',
      'Коренная минерализация подтверждена историческим бурением; Mo-Cu в центре с ореолом Ag-Pb-Zn-Au',
    ],
    factsEn: [
      'Molybdenum-copper mineralization with Ag-Pb-Zn',
      'Historical data (1979): "Porfirovoye" occurrence, average Mo 0.03% (max 0.5%), veinlets with Ag up to 50 g/t, Au 0.1–0.5 g/t',
      'Recent data: Cu (55 ppm), Mo (11 ppm), Zn (94 ppm) anomalies; veinlets with Au 0.47–0.8 g/t; average Cu 0.2%',
      'Bedrock mineralization confirmed by historical drilling; Mo-Cu core with an Ag-Pb-Zn-Au halo',
    ],
    targetsRu: 'Перспективные участки: «Порфировый», «Лодочниковский»',
    targetsEn: 'Target areas: Porfirovy, Lodochnikovsky',
  },
  {
    nameRu: 'Центрально-Широкинская',
    nameEn: 'Central Shirokinskaya',
    license: 'КРР 03708 ТП',
    area: '99 км²',
    typeRu: 'Cu-Mo-порфировый тип',
    typeEn: 'Cu-Mo porphyry type',
    image: '/images/investors/central-shirokinskaya.jpg',
    titleRu: 'Продолжение подтверждённой рудной системы',
    titleEn: 'Extension of a confirmed ore system',
    factsRu: [
      'Видимые сульфиды: малахит, молибденит, халькопирит; зональность Mo → Cu-Mo-Au → Pb-Zn',
      'Содержания в штуфах: Au 0,1–0,7 г/т, Cu 0,3 — более 1%',
      'Геохимические аномалии: Cu более 100 ppm (макс. 1460), Mo более 10 ppm (макс. 45), Zn более 90 ppm (макс. 281), Au более 0,1 г/т (макс. 2,1–7,5 г/т)',
      'Крупные перспективные участки суммарно около 35 км²',
    ],
    factsEn: [
      'Visible sulphides: malachite, molybdenite, chalcopyrite; zoning Mo → Cu-Mo-Au → Pb-Zn',
      'Grab sample grades: Au 0.1–0.7 g/t, Cu 0.3 to over 1%',
      'Geochemical anomalies: Cu over 100 ppm (max 1460), Mo over 10 ppm (max 45), Zn over 90 ppm (max 281), Au over 0.1 g/t (max 2.1–7.5 g/t)',
      'Large target areas totalling about 35 km²',
    ],
    targetsRu: 'Перспективные участки: «Медный» (19,8 км²), «Болотный» (11 км²), «Штокверковый» (4,8 км²)',
    targetsEn: 'Target areas: Medny (19.8 km²), Bolotny (11 km²), Shtokverkovy (4.8 km²)',
  },
  {
    nameRu: 'Трёхсестерская',
    nameEn: 'Tryokhsesterskaya',
    license: 'КРР 03709 ТП',
    area: '96 км²',
    typeRu: 'Au-Ag-Pb-Zn полиметаллический тип',
    typeEn: 'Au-Ag-Pb-Zn polymetallic type',
    image: '/images/investors/trisestry.jpg',
    titleRu: 'Полиметаллический актив с драгметаллами',
    titleEn: 'Polymetallic asset with precious metals',
    factsRu: [
      'Золото-серебро-полиметаллическое оруденение, ключевой объект — проявление «Незабудка»',
      'Вскрыто 4 рудных тела мощностью 3–45 м',
      'Подтверждённые содержания: Ag до 100 г/т, Au до 0,35 г/т, Pb до 22%, Zn до 2%',
      'Чёткий поисковый критерий — аномалии Au, Ag, Pb, Zn, As',
    ],
    factsEn: [
      'Gold-silver-polymetallic mineralization; key target is the Nezabudka occurrence',
      'Four ore bodies exposed, 3–45 m thick',
      'Confirmed grades: Ag up to 100 g/t, Au up to 0.35 g/t, Pb up to 22%, Zn up to 2%',
      'Clear exploration criterion — Au, Ag, Pb, Zn, As anomalies',
    ],
    targetsRu: 'Перспективные участки: «Незабудка», «Золотой»',
    targetsEn: 'Target areas: Nezabudka, Zolotoy',
  },
]

const reserveAreas = [
  {
    nameRu: 'Симсовская площадь',
    nameEn: 'Simsovskaya Area',
    image: '/images/sims.JPG',
    descriptionRu: 'Побережье моря Лаптевых, 21 км западнее бухты Зимовочная. Выявлена зона сульфидной минерализации протяжённостью 6 км.',
    descriptionEn: 'Laptev Sea coast, 21 km west of Zimovochnaya Bay. A 6 km sulphide mineralization zone has been identified.',
  },
  {
    nameRu: 'Пекинская площадь',
    nameEn: 'Pekinskaya Area',
    image: '/images/pekin.JPG',
    descriptionRu: 'Верховья р. Пека. Вскрыто рудное тело мощностью 15 м со средним содержанием меди 0,4%, выявлены площадные ореолы меди, молибдена и серебра.',
    descriptionEn: 'Upper reaches of the Peka River. A 15 m ore body with an average copper grade of 0.4%; area-wide Cu, Mo and Ag halos.',
  },
  {
    nameRu: 'Дорожнинская площадь',
    nameEn: 'Dorozhninskaya Area',
    image: '/images/dorozh.jpg',
    descriptionRu: 'Приурочена к Дорожнинскому разлому. Зона аргиллизации и сульфидизации протяжённостью 5,8 км с содержанием меди до 0,64%.',
    descriptionEn: 'Associated with the Dorozhninsky fault. A 5.8 km argillization and sulphidization zone with copper up to 0.64%.',
  },
]

const roadmaps = [
  {
    titleRu: 'Широкинский узел: Северо- и Центрально-Широкинская площади',
    titleEn: 'Shirokinsky cluster: North and Central Shirokinskaya areas',
    stage1Ru: ['85 км геологических маршрутов', '50 км² геофизики (магниторазведка + электроразведка)', '3 000 м поискового бурения', '~3 000 проб'],
    stage1En: ['85 km of geological traverses', '50 km² of geophysics (magnetic + electrical)', '3,000 m of exploration drilling', '~3,000 samples'],
    stage1ResultRu: 'Выявление перспективных зон для детальной оценки',
    stage1ResultEn: 'Identification of prospective zones for detailed evaluation',
    stage2Ru: ['5 400 м оценочного бурения', '~5 300 проб', 'Технологические испытания'],
    stage2En: ['5,400 m of evaluation drilling', '~5,300 samples', 'Metallurgical testing'],
    stage2ResultRu: 'Подсчёт запасов Cu/Mo и ТЭО временных разведочных кондиций',
    stage2ResultEn: 'Cu/Mo reserve estimate and feasibility study of temporary exploration cut-offs',
    totalRu: 'Итого: бурение 8 400 м, геофизика 50 км², ~8 200 проб, отчёт с подсчётом запасов',
    totalEn: 'Total: 8,400 m drilling, 50 km² geophysics, ~8,200 samples, report with reserve estimate',
  },
  {
    titleRu: 'Трёхсестерская полиметаллическая площадь',
    titleEn: 'Tryokhsesterskaya polymetallic area',
    stage1Ru: ['Геолого-геофизические работы: 50 км²', 'Поисковое бурение: 6 000 м', 'Опробование: ~5 800 проб'],
    stage1En: ['Geological and geophysical surveys: 50 km²', 'Exploration drilling: 6,000 m', 'Sampling: ~5,800 samples'],
    stage1ResultRu: 'Выявление перспективных зон для детальной оценки',
    stage1ResultEn: 'Identification of prospective zones for detailed evaluation',
    stage2Ru: ['Детальное бурение: 4 200 м', 'Технологические испытания', 'Опробование: ~4 100 проб'],
    stage2En: ['Detailed drilling: 4,200 m', 'Metallurgical testing', 'Sampling: ~4,100 samples'],
    stage2ResultRu: 'Подсчёт запасов Pb-Zn±Au±Ag, ТЭО временных разведочных кондиций (конец 2027)',
    stage2ResultEn: 'Pb-Zn±Au±Ag reserve estimate and feasibility study of temporary cut-offs (end of 2027)',
    totalRu: 'Итого: бурение 10 200 м, геофизика 50 км², ~9 900 проб, отчёт с подсчётом запасов',
    totalEn: 'Total: 10,200 m drilling, 50 km² geophysics, ~9,900 samples, report with reserve estimate',
  },
]

const budgetStructure = [
  { ru: 'Буровые работы', en: 'Drilling', share: 45, noteRu: '~18 600 м по трём площадям', noteEn: '~18,600 m across three areas' },
  { ru: 'Геофизические исследования', en: 'Geophysics', share: 20, noteRu: 'магниторазведка и электроразведка', noteEn: 'magnetic and electrical surveys' },
  { ru: 'Лабораторные анализы', en: 'Laboratory analyses', share: 15, noteRu: 'обработка ~18 000 проб', noteEn: 'processing ~18,000 samples' },
  { ru: 'Логистика и полевые работы', en: 'Logistics and field work', share: 12, noteRu: 'транспорт, полевой лагерь, ГСМ в условиях Таймыра', noteEn: 'transport, field camp and fuel in Taimyr conditions' },
  { ru: 'Резервный фонд', en: 'Contingency', share: 8, noteRu: 'непредвиденные расходы и увеличение объёмов', noteEn: 'unforeseen costs and scope increases' },
]

const budgetByArea = [
  { ru: 'Северо-Широкинская', en: 'North Shirokinskaya', value: '350 млн ₽', valueEn: 'RUB 350 m' },
  { ru: 'Центрально-Широкинская', en: 'Central Shirokinskaya', value: '350 млн ₽', valueEn: 'RUB 350 m' },
  { ru: 'Трёхсестерская', en: 'Tryokhsesterskaya', value: '400 млн ₽', valueEn: 'RUB 400 m' },
]

const risks = [
  {
    ru: 'Геологический', en: 'Geological', riskRu: 'Неподтверждение запасов', riskEn: 'Reserves not confirmed',
    probRu: 'Средняя', probEn: 'Medium', impactRu: 'Высокое', impactEn: 'High',
    measuresRu: ['Диверсификация по 3 площадям', 'Поэтапное финансирование', 'Современные методы поиска'],
    measuresEn: ['Diversification across 3 areas', 'Staged financing', 'Modern exploration methods'],
  },
  {
    ru: 'Логистический', en: 'Logistics', riskRu: 'Условия Таймыра', riskEn: 'Taimyr conditions',
    probRu: 'Высокая', probEn: 'High', impactRu: 'Высокое', impactEn: 'High',
    measuresRu: ['Опыт работы в регионе', 'Сезонное планирование', 'Резерв на ГСМ и транспорт'],
    measuresEn: ['Experience in the region', 'Seasonal planning', 'Fuel and transport reserve'],
  },
  {
    ru: 'Рыночный', en: 'Market', riskRu: 'Цены на металлы', riskEn: 'Metal prices',
    probRu: 'Низкая', probEn: 'Low', impactRu: 'Среднее', impactEn: 'Medium',
    measuresRu: ['Долгосрочный рост спроса на медь', 'Диверсификация по металлам (Cu, Mo, Au, Ag)'],
    measuresEn: ['Long-term growth in copper demand', 'Diversification across metals (Cu, Mo, Au, Ag)'],
  },
  {
    ru: 'Операционный', en: 'Operational', riskRu: 'Увеличение сроков и бюджета', riskEn: 'Schedule and budget overruns',
    probRu: 'Средняя', probEn: 'Medium', impactRu: 'Среднее', impactEn: 'Medium',
    measuresRu: ['Детальное ТЭО', 'Поэтапное финансирование', 'Резервный фонд 8%'],
    measuresEn: ['Detailed feasibility study', 'Staged financing', '8% contingency fund'],
  },
]

const expectedResultsRu = [
  'Будут выявлены и оценены три перспективных объекта ранга среднего месторождения каждый',
  'Локализованы минеральные зоны с рудными пересечениями и оценёнными прогнозными ресурсами категорий P₂ и P₁',
  'Локализованы рудные тела с подсчитанными запасами категорий C₂ и C₁',
  'Изучены вещественный состав и технологические свойства природных типов руд',
  'Дана геолого-экономическая оценка, пройдена государственная экспертиза ТЭО временных кондиций',
  'Даны рекомендации по направлению дальнейших ГРР',
]
const expectedResultsEn = [
  'Three prospective targets, each of medium-deposit scale, identified and evaluated',
  'Mineral zones with ore intersections localized, with P₂ and P₁ predicted resources',
  'Ore bodies localized with C₂ and C₁ reserve estimates',
  'Material composition and metallurgical properties of natural ore types studied',
  'Geological and economic assessment completed; temporary cut-off feasibility study passes state review',
  'Recommendations issued for further exploration',
]

const advantages = [
  {
    icon: Ship,
    titleRu: 'Близость к Севморпути',
    titleEn: 'Proximity to the Northern Sea Route',
    descriptionRu: 'Площади расположены в 10–20 км от побережья моря Лаптевых. Глубоководные бухты (Зимовочная, Далёкая) подходят для строительства морского порта.',
    descriptionEn: 'The areas lie 10–20 km from the Laptev Sea coast. Deep-water bays (Zimovochnaya, Dalekaya) are suitable for a seaport.',
  },
  {
    icon: Truck,
    titleRu: 'Транспортная доступность',
    titleEn: 'Transport Access',
    descriptionRu: 'Ближайший аэропорт — п. Челюскин. Перевозка грузов из с. Хатанга (570 км, Ми-8) или морем.',
    descriptionEn: 'Nearest airport is Chelyuskin. Cargo from Khatanga (570 km, Mi-8) or by sea.',
  },
  {
    icon: Mountain,
    titleRu: 'Новый горнодобывающий кластер',
    titleEn: 'A New Mining Cluster',
    descriptionRu: 'Открытая отработка карьерами глубиной 200–500 м; объём добычи медной руды в перспективе — 5–7 млн т в год.',
    descriptionEn: 'Open-pit mining to 200–500 m depth; copper ore output could reach 5–7 Mt per year.',
  },
  {
    icon: Zap,
    titleRu: 'Рыночный драйвер',
    titleEn: 'Market Driver',
    descriptionRu: 'Глобальный энергопереход создаёт структурный дефицит меди. Цель — формирование новой сырьевой базы меди на Таймыре.',
    descriptionEn: 'The global energy transition is creating a structural copper deficit. The goal is a new copper resource base in Taimyr.',
  },
]

export function InvestorsContent() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/investors/hero.jpg"
            alt={t('Широкинский узел, полуостров Таймыр', 'Shirokinsky cluster, Taimyr Peninsula')}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-white/80 mb-4 text-sm flex-wrap">
                <Link href="/" className="hover:text-white transition-colors">
                  {t('Главная', 'Home')}
                </Link>
                <span>/</span>
                <span className="text-white">{t('Инвесторам', 'Investors')}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t('Новая сырьевая база меди на Таймыре', 'A New Copper Resource Base in Taimyr')}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {t(
                  'Инвестиционное предложение: портфель из трёх лицензионных площадей Широкинского узла (Красноярский край, полуостров Таймыр) с потенциалом многократного роста стоимости.',
                  'Investment proposal: a portfolio of three licensed areas of the Shirokinsky cluster (Krasnoyarsk Krai, Taimyr Peninsula) with multi-fold value growth potential.'
                )}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key figures */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFigures.map((item) => (
              <div key={item.labelRu} className="p-6 bg-background rounded-2xl border border-border">
                <item.icon className="w-8 h-8 text-[var(--accent)] mb-4" />
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{t(item.value, item.valueEn)}</div>
                <div className="text-sm text-muted-foreground">{t(item.labelRu, item.labelEn)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  {t('Фокус на Широкинском узле', 'Focus on the Shirokinsky Cluster')}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {t(
                    'Работы начинаются с трёх смежных площадей Широкинского узла — это позволяет диверсифицировать риски и оптимизировать затраты на инфраструктуру. Остальной портфель создаёт задел для долгосрочного роста.',
                    'Work starts on three adjacent areas of the Shirokinsky cluster, which diversifies risk and optimizes infrastructure costs. The rest of the portfolio provides a basis for long-term growth.'
                  )}
                </p>
                <div className="space-y-3 mb-6">
                  {focusAreas.map((area) => (
                    <div key={area.license} className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-card border border-border">
                      <span className="font-semibold text-foreground">{t(area.nameRu, area.nameEn)}</span>
                      <span className="px-2 py-0.5 bg-[var(--accent-glow)] text-[var(--accent)] text-xs font-mono rounded">{area.license}</span>
                      <span className="text-sm text-muted-foreground">{area.area}</span>
                      <span className="text-sm text-muted-foreground">· {t(area.typeRu, area.typeEn)}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Gem className="w-4 h-4 text-[var(--accent)]" />
                  {t('Стратегический резерв: Симсовская, Пекинская и Дорожнинская площади', 'Strategic reserve: Simsovskaya, Pekinskaya and Dorozhninskaya areas')}
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[9/10] rounded-2xl overflow-hidden border border-border bg-white">
                <Image
                  src="/images/investors/portfolio-map.jpg"
                  alt={t('Обзорная карта портфеля лицензионных площадей', 'Portfolio overview map')}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('Авторские прогнозные ресурсы', 'Predicted Resources (Authors’ Estimate)')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('Суммарный потенциал трёх площадей Широкинского узла', 'Combined potential of the three Shirokinsky cluster areas')}
              </p>
            </div>
          </FadeIn>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-background text-left">
                  <th className="p-4 font-semibold text-foreground">{t('Площадь', 'Area')}</th>
                  {resourcesTable.headers.map((h) => (
                    <th key={h.ru} className="p-4 font-semibold text-foreground text-center">{t(h.ru, h.en)}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {resourcesTable.rows.map((row) => (
                  <tr key={row.ru} className="border-t border-border">
                    <td className="p-4 text-foreground">{t(row.ru, row.en)}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="p-4 text-center text-muted-foreground">{v}</td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-border bg-[var(--accent-glow)] font-semibold">
                  <td className="p-4 text-foreground">{t('Суммарный потенциал', 'Total potential')}</td>
                  {resourcesTable.total.map((v, i) => (
                    <td key={i} className="p-4 text-center text-[var(--accent)]">{v}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('Площади Широкинского узла', 'Shirokinsky Cluster Areas')}
              </h2>
            </div>
          </FadeIn>
          <div className="space-y-8">
            {focusAreas.map((area) => (
              <FadeIn key={area.license}>
                <div className="card-enhanced rounded-2xl overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="relative w-full lg:w-[420px] h-72 lg:h-auto bg-white shrink-0">
                      <Image
                        src={area.image}
                        alt={t(`Геологическая карта: ${area.nameRu}`, `Geological map: ${area.nameEn}`)}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 1024px) 100vw, 420px"
                      />
                    </div>
                    <div className="flex-1 p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-foreground mr-2">{t(area.nameRu, area.nameEn)}</h3>
                        <span className="px-2 py-0.5 bg-[var(--accent-glow)] text-[var(--accent)] text-xs font-mono rounded">{area.license}</span>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Layers className="w-3 h-3" />
                          {area.area}
                        </span>
                      </div>
                      <p className="text-[var(--accent)] font-medium mb-4">
                        {t(area.typeRu, area.typeEn)} — {t(area.titleRu, area.titleEn)}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {area.factsRu.map((fact, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                            <span>{t(fact, area.factsEn[idx])}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm font-medium text-foreground">{t(area.targetsRu, area.targetsEn)}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('Дорожная карта 2026–2027', 'Roadmap 2026–2027')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('Этап 1 — поисковые работы (2026), этап 2 — оценочные работы (2027)', 'Stage 1 — exploration (2026), stage 2 — evaluation (2027)')}
              </p>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-6">
            {roadmaps.map((rm) => (
              <div key={rm.titleRu} className="p-6 md:p-8 bg-background rounded-2xl border border-border flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-6">{t(rm.titleRu, rm.titleEn)}</h3>
                {[
                  { label: t('Этап 1: поисковые работы (2026)', 'Stage 1: exploration (2026)'), items: rm.stage1Ru, itemsEn: rm.stage1En, resRu: rm.stage1ResultRu, resEn: rm.stage1ResultEn },
                  { label: t('Этап 2: оценочные работы (2027)', 'Stage 2: evaluation (2027)'), items: rm.stage2Ru, itemsEn: rm.stage2En, resRu: rm.stage2ResultRu, resEn: rm.stage2ResultEn },
                ].map((stage) => (
                  <div key={stage.label} className="mb-5 pl-4 border-l-2 border-[var(--accent)]">
                    <div className="font-semibold text-foreground mb-2">{stage.label}</div>
                    <ul className="space-y-1 mb-2">
                      {stage.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">• {t(item, stage.itemsEn[idx])}</li>
                      ))}
                    </ul>
                    <div className="text-sm text-foreground">
                      <span className="text-muted-foreground">{t('Результат:', 'Result:')}</span> {t(stage.resRu, stage.resEn)}
                    </div>
                  </div>
                ))}
                <div className="mt-auto p-4 rounded-xl bg-[var(--accent-glow)] text-sm font-medium text-foreground">
                  {t(rm.totalRu, rm.totalEn)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('Бюджет проекта', 'Project Budget')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t(
                  'Бюджет сформирован исходя из оптимальных объёмов ГРР для перевода ресурсов в запасы категорий C₁ и C₂. Смету готовы детализировать после согласования ключевых параметров сотрудничества.',
                  'The budget is based on the optimal scope of exploration needed to convert resources into C₁ and C₂ reserves. A detailed estimate can be prepared once the key terms of cooperation are agreed.'
                )}
              </p>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-6">{t('Структура затрат', 'Cost structure')}</h3>
              <div className="space-y-4">
                {budgetStructure.map((item) => (
                  <div key={item.ru}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{t(item.ru, item.en)}</span>
                      <span className="text-[var(--accent)] font-semibold">{item.share}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--bg3)] overflow-hidden">
                      <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${item.share}%` }} />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{t(item.noteRu, item.noteEn)}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 md:p-8 bg-card rounded-2xl border border-border flex flex-col">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {t('Предварительная стоимость работ (без НДС)', 'Preliminary cost of work (excl. VAT)')}
              </h3>
              <div className="space-y-3 mb-6">
                {budgetByArea.map((item) => (
                  <div key={item.ru} className="flex justify-between items-center p-4 rounded-xl bg-background border border-border">
                    <span className="text-foreground">{t(item.ru, item.en)}</span>
                    <span className="font-semibold text-foreground">{t(item.value, item.valueEn)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto flex justify-between items-center p-4 rounded-xl bg-[var(--accent-glow)]">
                <span className="font-semibold text-foreground">{t('Итого', 'Total')}</span>
                <span className="text-xl font-bold text-[var(--accent)]">{t('1,1 млрд ₽', 'RUB 1.1 bn')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risks */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('Управление рисками', 'Risk Management')}
              </h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {risks.map((risk) => (
              <div key={risk.ru} className="p-6 bg-background rounded-2xl border border-border">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">{t(risk.ru, risk.en)}</h3>
                  <span className="text-xs text-muted-foreground">
                    {t('Вероятность', 'Probability')}: {t(risk.probRu, risk.probEn)} · {t('Влияние', 'Impact')}: {t(risk.impactRu, risk.impactEn)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{t(risk.riskRu, risk.riskEn)}</p>
                <ul className="space-y-1">
                  {risk.measuresRu.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{t(m, risk.measuresEn[idx])}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  {t('Ожидаемые результаты', 'Expected Results')}
                </h2>
                <ul className="space-y-3">
                  {expectedResultsRu.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{t(item, expectedResultsEn[idx])}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[8/7] rounded-2xl overflow-hidden border border-border bg-white">
                <Image
                  src="/images/investors/geological-map.jpg"
                  alt={t('Геологическая карта Северо-Широкинской, Центрально-Широкинской и Трёхсестерской площадей', 'Geological map of the North Shirokinskaya, Central Shirokinskaya and Tryokhsesterskaya areas')}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('Почему Таймыр', 'Why Taimyr')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t(
                  'В пределах полуострова Челюскин может быть создан новый для Красноярского края горнодобывающий кластер',
                  'A new mining cluster for Krasnoyarsk Krai can be created on the Chelyuskin Peninsula'
                )}
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div key={adv.titleRu} className="card-enhanced p-6 h-full">
                <adv.icon className="w-10 h-10 text-[var(--accent)] mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{t(adv.titleRu, adv.titleEn)}</h3>
                <p className="text-sm text-muted-foreground">{t(adv.descriptionRu, adv.descriptionEn)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic reserve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('Стратегический резерв', 'Strategic Reserve')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('Площади для долгосрочного роста портфеля', 'Areas for long-term portfolio growth')}
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {reserveAreas.map((area) => (
              <div key={area.nameRu} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="relative h-48">
                  <Image src={area.image} alt={t(area.nameRu, area.nameEn)} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t(area.nameRu, area.nameEn)}</h3>
                  <p className="text-sm text-muted-foreground">{t(area.descriptionRu, area.descriptionEn)}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            {t(
              '* Авторские прогнозные ресурсы — по результатам работ ООО «Полярная Экспедиционная Компания», ФГБУ «ВСЕГЕИ» (Берзон Е.И., Проскурнин В.Ф., 2020 г.).',
              '* Predicted resources (authors’ estimate) based on the work of Polar Expedition Company LLC and VSEGEI (Berzon E.I., Proskurnin V.F., 2020).'
            )}
          </p>
        </div>
      </section>
    </div>
  )
}
