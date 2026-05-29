'use client'

import { ServicePageTemplate } from './service-page-template'
import { LicenseSection } from './license-section'
import { Compass, Crosshair, LineChart, Globe } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Compass,
  titleRu: 'Маркшейдерские, геодезические, топографические работы.',
  titleEn: 'Mine surveying, geodetic, and topographic work.',
  descRu: 'Маркшейдерское обеспечение горных и буровых работ выполняется на основании лицензии на осуществление деятельности по производству маркшейдерских работ, выданной Федеральной Службой по экологическому, технологическому и атомному надзору (Ростехнадзором).',
  descEn: 'Mine and drilling surveying is carried out on the basis of a license for mine surveying issued by the Federal Service for Environmental, Technological, and Nuclear Supervision (Rostekhnadzor).',
  heroImage: '/images/mark.JPG',
  reverse: true,
  sectionTitleRu: 'Что входит в услугу',
  sectionTitleEn: 'What is included in the service',
  sectionDescRu: 'Полный комплекс маркшейдерско-геодезических и топографических работ для обеспечения геологоразведочных работ',
  sectionDescEn: 'A full range of mine surveying, geodetic, and topographic works to support geological exploration',
  methods: [],
  methodsGroups: [
    {
      titleRu: 'Маркшейдерско-геодезические',
      titleEn: 'Mine Surveying and Geodesy',
      icon: Globe,
      methods: [
        { ru: 'Развитие опорной маркшейдерской сети (ОМС) от пунктов ГГС', en: 'Development of the Reference Mine Surveying Network (RMS) from GGS points' },
        { ru: 'Топографические съемки исходных поверхностей наземным и воздушным методами', en: 'Topographic surveys of the initial surfaces using ground-based and aerial methods' },
        { ru: 'Вынос на местности проектируемых горных выработок', en: 'Location of the projected mine workings on the ground' },
      ]
    },
    {
      titleRu: 'Контроль и съёмка',
      titleEn: 'Control & Surveying',
      icon: Crosshair,
      methods: [
        { ru: 'Контроль проходки буровых скважин', en: 'Drilling operations control' },
        { ru: 'Инклинометрический контроль скважин', en: 'Borehole inclinometry control' },
        { ru: 'Маркшейдерская съемка после производства работ', en: 'Post-work surveying' },
        { ru: 'Съемка рекультивируемых территорий', en: 'Reclamation area surveying' },
      ]
    },
    {
      titleRu: 'Обработка и отчётность',
      titleEn: 'Processing & Reporting',
      icon: LineChart,
      methods: [
        { ru: 'Подготовка 2D и 3D маркшейдерских планов', en: '2D and 3D survey plan preparation' },
        { ru: 'Составление картограмм объёмов горных работ', en: 'Mining volume cartogram preparation' },
        { ru: 'Подсчёт объёмов горной массы', en: 'Rock mass volume calculation' },
        { ru: '3D-моделирование горных выработок', en: '3D mine workings modeling' },
      ]
    },
    {
      titleRu: 'Взаимодействие с государственными органами',
      titleEn: 'Interaction with government agencies',
      icon: LineChart,
      methods: [
        { ru: 'Получение сведений от Роскадастра и Росреестра о пунктах государственных геодезических сетях (ГГС)', en: 'Obtaining information from Roskadastr and Rosreestr about state geodetic networks (SGN)' },
      ]
    },
    {
      titleRu: 'Проектирование и планирование работ',
      titleEn: 'Design and planning of works',
      icon: LineChart,
      methods: [
        { ru: 'Построение рельефа местности района работ, проектирование подъездных путей, выдача рекомендаций по оптимизации работ.', en: 'Construction of the terrain in the work area, design of access roads, and recommendations for optimizing the work.' },
      ]
    },
  ],
  methodsImage: '/images/mark_obor.jpg',
  equipment: [
    {
      titleRu: 'ГНСС-оборудование',
      titleEn: 'GNSS Equipment',
      items: [
        { name: 'Высокоточные ГНСС-приемники', specs: ['Двухчастотный GPS/ГЛОНАСС', 'Точность 2-5 мм + 0.5 ppm', 'RTK режим'], image: '/images/equipment/gnss-receiver.jpg' },
        { name: 'RTK-системы сантиметровой точности', specs: ['Базовая станция + ровер', 'Радиомодем 1 Вт', 'Дальность до 10 км'], image: '/images/equipment/rtk-system.jpg' },
        { name: 'Базовые станции', specs: ['Непрерывная запись 24/7', '48 каналов', 'Память 4 ГБ'], image: '/images/equipment/base-station.jpg' },
      ]
    },
    {
      titleRu: 'Геодезические приборы',
      titleEn: 'Geodetic Instruments',
      items: [
        { name: 'Электронные тахеометры', specs: ['Точность измерения углов 2"', 'Безотражательная дальность 500 м', 'Память 50000 точек'], image: '/images/equipment/total-station.jpg' },
        { name: 'Нивелиры', specs: ['Точность 0.3 мм/км', 'Компенсатор ±15\'', 'Увеличение 32x'], image: '/images/equipment/level.jpg' },
        { name: 'Отражатели и вешки', specs: ['Призма L1', 'Штатив алюминиевый', 'Высота до 2.5 м'], image: '/images/equipment/prism.jpg' },
      ]
    },
    {
      titleRu: 'Беспилотные технологии',
      titleEn: 'Unmanned technologies',
      items: [
        { name: 'Квадрокоптер DJI Matrice 350 RTK', specs: ['Аэрофотосъемка', 'Время полета 45 мин', 'RTK модуль', 'Помехоустойчивый приемник'], image: '/images/equipment/drone.jpg' },
      ]
    },
    {
      titleRu: 'Программное обеспечение',
      titleEn: 'Software',
      items: [
        { name: 'nanoCAD GeoniCS', specs: ['Топоплан 1:500', 'Цифровая модель рельефа', 'Расчет объемов'], image: '/images/equipment/nanocad.jpg' },
        { name: 'КРЕДО-Диалог', specs: ['Камеральная обработка', 'Создание маркшейдерских планов', 'Экспорт в DXF/DWG'], image: '/images/equipment/kredo.jpg' },
        { name: 'AutoCAD Civil 3D', specs: ['3D моделирование', 'Проектирование трасс', 'Подсчет объемов работ'], image: '/images/equipment/civil3d.jpg' },
      ]
    },
  ],
  steps: [
    {
      numRu: '01',
      numEn: '01',
      titleRu: 'Планирование работ',
      titleEn: 'Work Planning',
      descRu: 'Изучение ТЗ, заказ выписок из ФФПД с координатами пунктов ГГС, планирование ОМС',
      descEn: 'TOR study, FFPD extracts ordering with GGS coordinates, OMS planning',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Подготовительные работы',
      titleEn: 'Preparatory Work',
      descRu: 'Рекогносцировка пунктов ГГС, закладка пунктов ОМС, статические измерения',
      descEn: 'GGS reconnaissance, OMS establishment, static measurements',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Выполнение работ',
      titleEn: 'Field Work',
      descRu: 'Топосъемка, вынос выработок, сопровождение буровых и горных работ',
      descEn: 'Topographic survey, workings staking, drilling and mining support',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Камеральная обработка',
      titleEn: 'Office Processing',
      descRu: 'Вычисление координат, оценка точности, построение планов в Nanosoft/КРЕДО',
      descEn: 'Coordinate calculation, accuracy assessment, plan creation in Nanosoft/CREDO',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Сдача документации',
      titleEn: 'Documentation Delivery',
      descRu: 'Маркшейдерские планы, акты замеров, картограммы объемов, часть отчета ГРР',
      descEn: 'Survey plans, measurement acts, volume cartograms, GRR report section',
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
      titleRu: 'Маркшейдерские планы',
      titleEn: 'Survey Plans',
      descRu: '2D и 3D форматы участков работ',
      descEn: '2D and 3D work area formats',
      image: '/images/results/survey-plans.jpg',
    },
    {
      titleRu: 'Акты замеров',
      titleEn: 'Measurement Acts',
      descRu: 'Координатная привязка и объемы горных работ',
      descEn: 'Coordinate referencing and mining volumes',
      image: '/images/results/measurement-acts.jpg',
    },
    {
      titleRu: 'Картограммы объемов',
      titleEn: 'Volume Cartograms',
      descRu: 'Сравнение проектных и фактических показателей',
      descEn: 'Project vs actual comparison',
      image: '/images/results/volume-cartograms.jpg',
    },
    {
      titleRu: 'Часть отчета ГРР',
      titleEn: 'GRR Report Section',
      descRu: 'Маркшейдерская документация для отчета',
      descEn: 'Survey documentation for report',
      image: '/images/results/grr-report.jpg',
    },
  ],
  caseStudy: {
    titleRu: 'Маркшейдерское сопровождение геологоразведочных работ',
    titleEn: 'Survey Support for Geological Exploration',
    clientRu: 'Крупная горнодобывающая компания',
    clientEn: 'Major mining company',
    year: '2024',
    volumeRu: 'Полный цикл маркшейдерского обеспечения: от создания ОМС до сдачи документации',
    volumeEn: 'Full survey support cycle: from OMS creation to documentation delivery',
    resultRu: 'Высокоточная привязка всех горных выработок. Оперативный контроль буровых работ. Полный комплект исполнительной документации.',
    resultEn: 'High-precision referencing of all workings. Prompt drilling control. Complete executive documentation package.',
  },
  caseImage: '/images/mark-case.JPG',
  regions: [
    { ru: 'Красноярский край', en: 'Krasnoyarsk Region' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Иркутская область', en: 'Irkutsk Region' },
    { ru: 'Крайний Север', en: 'Far North' },
  ],
  stats: [
    { value: '10+', labelRu: 'проектов', labelEn: 'projects' },
    { value: '2008', labelRu: 'год основания', labelEn: 'founded' },
    { value: '3 см', labelRu: 'точность съёмки', labelEn: 'survey accuracy' },
    { value: '∞', labelRu: 'срок лицензии', labelEn: 'license term' },
  ],
}

export function SurveyContent() {
  return <ServicePageTemplate data={data} topSection={<LicenseSection />} />
}