'use client'

import { ServicePageTemplate } from './service-page-template'
import { Pickaxe, Truck, HardHat, AlertTriangle, Drill, Zap, Shield, Wrench } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Pickaxe,
  titleRu: 'Горные работы',
  titleEn: 'Mining Works',
  descRu: 'Полный комплекс горных работ: от вскрышных до добычных. Проходка канав и шурфов, вскрышные работы, добыча полезных ископаемых, взрывные работы, отработка россыпей.',
  descEn: 'Full range of mining operations: from overburden to extraction. Trenching and pitting, overburden removal, mineral extraction, blasting, placer mining.',
  heroImage: '/images/mining-hero.jpg',
  reverse: false,
  
  sectionTitleRu: 'Полный комплекс горных работ',
  sectionTitleEn: 'Full range of mining works',
  sectionDescRu: 'От вскрышных работ до добычи полезных ископаемых',
  sectionDescEn: 'From overburden to mineral extraction',
  
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
  
  // ✅ Новая структура оборудования
  equipment: [
    {
      titleRu: 'Землеройная техника',
      titleEn: 'Earthmoving Equipment',
      items: [
        { name: 'Экскаватор Hitachi ZX870', specs: ['Вместимость ковша 5 м³', 'Глубина копания 7 м', 'Мощность 500 л.с.'], image: '/images/equipment/excavator.jpg' },
        { name: 'Экскаватор Komatsu PC400', specs: ['Вместимость ковша 2.5 м³', 'Глубина копания 6 м', 'Масса 42 т'], image: '/images/equipment/komatsu.jpg' },
        { name: 'Бульдозер Komatsu D375A', specs: ['Мощность 600 л.с.', 'Отвал 5 м³', 'Глубина подъема 1.5 м'], image: '/images/equipment/bulldozer.jpg' },
        { name: 'Погрузчик XCMG LW600K', specs: ['Вместимость ковша 3.5 м³', 'Грузоподъемность 6 т', 'Полный привод'], image: '/images/equipment/loader.jpg' },
        { name: 'Автосамосвал Shacman', specs: ['Грузоподъемность 25 т', 'Двигатель 400 л.с.', 'Работа при -40°C'], image: '/images/equipment/dump-truck.jpg' },
      ]
    },
    {
      titleRu: 'Буровое оборудование',
      titleEn: 'Drilling Equipment',
      items: [
        { name: 'Буровой станок СБШ-250', specs: ['Диаметр скважин 200-250 мм', 'Глубина до 30 м', 'Шарошечное бурение'], image: '/images/equipment/sbsh-250.jpg' },
        { name: 'Перфоратор ПП-63', specs: ['Диаметр шпуров 40-60 мм', 'Глубина до 20 м', 'Пневматический'], image: '/images/equipment/perforator.jpg' },
        { name: 'Буровая установка на гусеницах', specs: ['Диаметр 76-150 мм', 'Глубина до 50 м', 'Угол наклона 0-30°'], image: '/images/equipment/track-drill.jpg' },
        { name: 'Компрессорная станция', specs: ['Производительность 30 м³/мин', 'Давление 12 атм', 'Дизельная'], image: '/images/equipment/compressor-station.jpg' },
      ]
    },
    {
      titleRu: 'Вспомогательная техника',
      titleEn: 'Support Equipment',
      items: [
        { name: 'Автогрейдер', specs: ['Ширина отвала 4 м', 'Угол резания 30-70°', 'Мощность 200 л.с.'], image: '/images/equipment/motor-grader.jpg' },
        { name: 'Поливомоечная машина', specs: ['Объём бака 10 м³', 'Ширина полива 15 м', 'Пылеподавление'], image: '/images/equipment/water-truck.jpg' },
        { name: 'Топливозаправщик', specs: ['Объём 15 м³', 'Дизельное топливо', 'Производительность 500 л/мин'], image: '/images/equipment/fuel-truck.jpg' },
        { name: 'Ремонтная мастерская', specs: ['На базе КАМАЗ', 'Сварочный аппарат', 'Подъёмник 5 т'], image: '/images/equipment/workshop.jpg' },
      ]
    },
    {
      titleRu: 'Безопасность',
      titleEn: 'Safety Equipment',
      items: [
        { name: 'Системы видеонаблюдения', specs: ['IP-камеры', 'Запись 24/7', 'Удалённый доступ'], image: '/images/equipment/cctv.jpg' },
        { name: 'Датчики загазованности', specs: ['CH4, CO, H2S', 'Звуковая сигнализация', 'Автоматическое отключение'], image: '/images/equipment/gas-sensor.jpg' },
        { name: 'СИЗ', specs: ['Каски, спецобувь', 'Респираторы', 'Сигнальные жилеты'], image: '/images/equipment/ppe.jpg' },
        { name: 'Системы оповещения', specs: ['Громкоговорители', 'Сирены', 'Радиосвязь'], image: '/images/equipment/alarm.jpg' },
      ]
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
    '/images/one.JPG',
    '/images/two.JPG',
    '/images/three.JPG',
    '/images/four.jpg',
    '/images/five.jpg',
  ],
  
  results: [
    {
      titleRu: 'Вскрытые запасы',
      titleEn: 'Exposed Reserves',
      descRu: 'Подготовка запасов к добыче, вскрытие продуктивных горизонтов',
      descEn: 'Reserve preparation for mining, productive horizon exposure',
      image: '/images/results/exposed-reserves.jpg',
    },
    {
      titleRu: 'Добытое сырьё',
      titleEn: 'Extracted Minerals',
      descRu: 'Полезное ископаемое, подготовленное к переработке или отгрузке',
      descEn: 'Mineral ready for processing or shipping',
      image: '/images/results/extracted-minerals.jpg',
    },
    {
      titleRu: 'Горная документация',
      titleEn: 'Mining Documentation',
      descRu: 'Планы горных работ, акты на списание, маркшейдерские планы',
      descEn: 'Mining plans, write-off acts, survey plans',
      image: '/images/results/mining-docs.jpg',
    },
    {
      titleRu: 'Рекультивация',
      titleEn: 'Reclamation',
      descRu: 'Восстановление нарушенных земель, возврат исходного ландшафта',
      descEn: 'Land restoration, original landscape return',
      image: '/images/results/reclamation-area.jpg',
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
    { value: '20+', labelRu: 'бульдозеров', labelEn: 'bulldozers' },
  ],
}

export function MiningContent() {
  return <ServicePageTemplate data={data} />
}