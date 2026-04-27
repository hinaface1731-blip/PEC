'use client'

import { ServicePageTemplate } from './service-page-template'
import { Pickaxe, Truck, HardHat, AlertTriangle } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Pickaxe,
  titleRu: 'Горные работы',
  titleEn: 'Mining Works',
  descRu: 'Полный комплекс горных работ: от вскрышных до добычных. Проходка канав и шурфов, вскрышные работы, добыча полезных ископаемых, взрывные работы, отработка россыпей.',
  descEn: 'Full range of mining operations: from overburden to extraction. Trenching and pitting, overburden removal, mineral extraction, blasting, placer mining.',
  heroImage: '/images/mining-hero.jpg',
  reverse: false,
  methods: [
    { ru: 'Проходка канав', en: 'Trenching' },
    { ru: 'Проходка шурфов', en: 'Pitting' },
    { ru: 'Вскрышные работы', en: 'Overburden removal' },
    { ru: 'Добычные работы', en: 'Mining operations' },
    { ru: 'Буровзрывные работы', en: 'Drilling and blasting' },
    { ru: 'Отработка россыпей', en: 'Placer mining' },
    { ru: 'Отгрузка полезного ископаемого', en: 'Mineral shipping' },
    { ru: 'Рекультивация нарушенных земель', en: 'Land reclamation' },
  ],
  methodsGroups: [
    {
      titleRu: 'Вскрышные работы',
      titleEn: 'Overburden Operations',
      icon: Truck,
      methods: [
        { ru: 'Снятие плодородного слоя', en: 'Topsoil removal' },
        { ru: 'Выемка вскрышных пород', en: 'Overburden excavation' },
        { ru: 'Транспортировка породы', en: 'Rock transportation' },
        { ru: 'Складирование отвалов', en: 'Dump storage' },
      ]
    },
    {
      titleRu: 'Добычные работы',
      titleEn: 'Mining Operations',
      icon: HardHat,
      methods: [
        { ru: 'Подготовка блоков к выемке', en: 'Block preparation' },
        { ru: 'Буровзрывные работы', en: 'Drilling and blasting' },
        { ru: 'Экскавация полезного ископаемого', en: 'Mineral excavation' },
        { ru: 'Погрузка и транспортировка', en: 'Loading and hauling' },
      ]
    },
    {
      titleRu: 'Геотехнический контроль',
      titleEn: 'Geotechnical Control',
      icon: AlertTriangle,
      methods: [
        { ru: 'Контроль устойчивости бортов', en: 'Slope stability monitoring' },
        { ru: 'Наблюдение за деформациями', en: 'Deformation monitoring' },
        { ru: 'Контроль качества руды', en: 'Ore quality control' },
        { ru: 'Ведение горно-графической документации', en: 'Mining documentation' },
      ]
    },
  ],
  methodsImage: '/images/mining-methods.jpg',
  equipment: [
    {
      titleRu: 'Землеройная техника',
      titleEn: 'Earthmoving Equipment',
      items: ['Экскаваторы (Hitachi, Komatsu)', 'Бульдозеры (Komatsu, Shantui)', 'Погрузчики (XCMG, LiuGong)', 'Автосамосвалы (Shacman, HOWO)'],
    },
    {
      titleRu: 'Буровое оборудование',
      titleEn: 'Drilling Equipment',
      items: ['Буровые станки СБШ-250', 'Перфораторы ПП-63', 'Буровые установки на гусеничном ходу', 'Компрессорное оборудование'],
    },
    {
      titleRu: 'Вспомогательная техника',
      titleEn: 'Support Equipment',
      items: ['Автогрейдеры', 'Поливомоечные машины', 'Топливозаправщики', 'Ремонтные мастерские на базе КАМАЗ'],
    },
    {
      titleRu: 'Безопасность',
      titleEn: 'Safety Equipment',
      items: ['Системы видеонаблюдения', 'Датчики загазованности', 'Средства индивидуальной защиты', 'Системы оповещения'],
    },
  ],
  steps: [
    {
      numRu: '01',
      numEn: '01',
      titleRu: 'Планирование',
      titleEn: 'Planning',
      descRu: 'Разработка проекта горных работ, расчёт объёмов, выбор техники',
      descEn: 'Mining project design, volume calculation, equipment selection',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Подготовка участка',
      titleEn: 'Site Preparation',
      descRu: 'Расчистка территории, снятие плодородного слоя, устройство подъездных путей',
      descEn: 'Site clearing, topsoil removal, access road construction',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Вскрышные работы',
      titleEn: 'Overburden',
      descRu: 'Удаление вскрышных пород, формирование уступов, создание рабочей площадки',
      descEn: 'Overburden removal, bench formation, work platform creation',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Добычные работы',
      titleEn: 'Mining',
      descRu: 'Буровзрывные работы, экскавация, погрузка и транспортировка',
      descEn: 'Drilling and blasting, excavation, loading and hauling',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Заключительный этап',
      titleEn: 'Final Stage',
      descRu: 'Рекультивация нарушенных земель, сдача участка, отчётная документация',
      descEn: 'Land reclamation, site handover, reporting',
    },
  ],
  stepImages: [
    '/images/mining-step1.jpg',
    '/images/mining-step2.jpg',
    '/images/mining-step3.jpg',
    '/images/mining-step4.jpg',
    '/images/mining-step5.jpg',
  ],
  results: [
    {
      titleRu: 'Вскрытые запасы',
      titleEn: 'Exposed Reserves',
      descRu: 'Подготовка запасов к добыче, вскрытие продуктивных горизонтов',
      descEn: 'Reserve preparation for mining, productive horizon exposure',
    },
    {
      titleRu: 'Добытое сырьё',
      titleEn: 'Extracted Minerals',
      descRu: 'Полезное ископаемое, подготовленное к переработке или отгрузке',
      descEn: 'Mineral ready for processing or shipping',
    },
    {
      titleRu: 'Горная документация',
      titleEn: 'Mining Documentation',
      descRu: 'Планы горных работ, акты на списание, маркшейдерские планы',
      descEn: 'Mining plans, write-off acts, survey plans',
    },
    {
      titleRu: 'Рекультивация',
      titleEn: 'Reclamation',
      descRu: 'Восстановление нарушенных земель, возврат исходного ландшафта',
      descEn: 'Land restoration, original landscape return',
    },
  ],
  caseStudy: {
    titleRu: 'Отработка россыпного месторождения в Якутии',
    titleEn: 'Placer Mining in Yakutia',
    clientRu: 'Северная Звезда',
    clientEn: 'Northern Star',
    year: '2024',
    volumeRu: 'Вскрыто 150 000 м³ песков, добыто 850 кг золота',
    volumeEn: '150,000 m³ of sand exposed, 850 kg of gold extracted',
    resultRu: 'Отработка месторождения выполнена с опережением графика на 15%. Применена технология сезонной оттайки пород, что позволило снизить затраты на подготовку.',
    resultEn: 'Deposit mining completed 15% ahead of schedule. Seasonal rock thawing technology reduced preparation costs.',
  },
  caseImage: '/images/mining-case.jpg',
  regions: [
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Чукотка', en: 'Chukotka' },
    { ru: 'Магаданская область', en: 'Magadan Region' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
  ],
  stats: [
    { value: '1 500 000 м³', labelRu: 'вскрыто породы', labelEn: 'rock exposed' },
    { value: '500 000 м³', labelRu: 'добыто', labelEn: 'extracted' },
    { value: '15+', labelRu: 'экскаваторов', labelEn: 'excavators' },
    { value: '25+', labelRu: 'самосвалов', labelEn: 'dump trucks' },
  ],
}

export function MiningContent() {
  return <ServicePageTemplate data={data} />
}