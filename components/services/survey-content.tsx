'use client'

import { ServicePageTemplate } from './service-page-template'
import { LicenseSection } from './license-section'
import { Compass, Crosshair, LineChart, Globe } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Compass,
  titleRu: 'Маркшейдерские работы',
  titleEn: 'Mine Surveying',
  descRu: 'Маркшейдерское обеспечение горных и буровых работ выполняется на основании лицензии на осуществление деятельности по производству маркшейдерских работ, выданной Федеральной Службой по экологическому, технологическому и атомному надзору (Ростехнадзором).',
  descEn: 'Mine and drilling surveying is carried out on the basis of a license for mine surveying issued by the Federal Service for Environmental, Technological, and Nuclear Supervision (Rostekhnadzor).',
  heroImage: '/images/mark.JPG',
  introPhoto: {
    src: '/images/site/gnss-peak.jpg',
    altRu: 'Геодезист с GNSS-приёмником на горном участке',
    altEn: 'A surveyor with a GNSS receiver at a mountain site',
  },
  introRu:
    'Маркшейдерско-геодезическое обеспечение работ выполняется на основании лицензии Ростехнадзора. Развиваем опорную маркшейдерскую сеть от пунктов государственной геодезической сети, выполняем топографические съёмки наземными методами и с БПЛА, выносим в натуру проектные выработки и скважины, контролируем их положение и считаем объёмы горных работ. Итог: планы, картограммы и исполнительная документация, пригодная для отчёта и подсчёта запасов.',
  introEn:
    'We provide licensed mine surveying and geodetic support under a Rostekhnadzor license. We establish survey control tied to the state geodetic network, conduct ground and UAV topographic surveys, set out planned workings and boreholes, verify their positions, and calculate excavation volumes. Deliverables include survey plans, volume maps, and as-built records suitable for reporting and reserve estimation.',

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
        { ru: 'Развитие опорной маркшейдерской сети (ОМС) от пунктов ГГС', en: 'Establishment of mine survey control tied to the state geodetic network' },
        { ru: 'Топографические съемки исходных поверхностей наземным и воздушным методами', en: 'Topographic surveys of the initial surfaces using ground-based and aerial methods' },
        { ru: 'Вынос на местности проектируемых горных выработок', en: 'Setting out planned mine workings' },
      ]
    },
    {
      titleRu: 'Контроль и съёмка',
      titleEn: 'Control & Surveying',
      icon: Crosshair,
      methods: [
        { ru: 'Контроль проходки буровых скважин', en: 'Borehole position checks during drilling' },
        { ru: 'Инклинометрический контроль скважин', en: 'Borehole deviation checks' },
        { ru: 'Маркшейдерская съемка после производства работ', en: 'As-built mine surveys' },
        { ru: 'Съемка рекультивируемых территорий', en: 'Reclamation area surveying' },
      ]
    },
    {
      titleRu: 'Обработка и отчётность',
      titleEn: 'Processing & Reporting',
      icon: LineChart,
      methods: [
        { ru: 'Подготовка 2D и 3D маркшейдерских планов', en: '2D and 3D survey plan preparation' },
        { ru: 'Составление картограмм объёмов горных работ', en: 'Preparation of mine volume maps' },
        { ru: 'Подсчёт объёмов горной массы', en: 'Rock mass volume calculation' },
        { ru: '3D-моделирование горных выработок', en: '3D mine workings modeling' },
      ]
    },
    {
      titleRu: 'Взаимодействие с государственными органами',
      titleEn: 'Interaction with government agencies',
      icon: LineChart,
      methods: [
        { ru: 'Получение сведений от Роскадастра и Росреестра о пунктах государственных геодезических сетях (ГГС)', en: 'Obtaining state geodetic control point records from Roskadastr and Rosreestr' },
      ]
    },
    {
      titleRu: 'Проектирование и планирование работ',
      titleEn: 'Design and planning of works',
      icon: LineChart,
      methods: [
        { ru: 'Построение рельефа местности района работ, проектирование подъездных путей, выдача рекомендаций по оптимизации работ.', en: 'Terrain modeling, access road design, and recommendations to improve site operations.' },
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
      image: '/images/work-stage-illustrations/planning.webp',
      titleRu: 'Планирование работ',
      titleEn: 'Work Planning',
      descRu: 'Изучение ТЗ, заказ выписок из ФФПД с координатами пунктов ГГС, планирование ОМС',
      descEn: 'Review of the terms of reference, requests for state geodetic point records, and planning of the mine survey control network',
    },
    {
      image: '/images/work-stage-illustrations/survey.webp',
      titleRu: 'Подготовительные работы',
      titleEn: 'Preparatory Work',
      descRu: 'Рекогносцировка пунктов ГГС, закладка пунктов ОМС, статические измерения',
      descEn: 'Reconnaissance of geodetic control points, establishment of mine survey control, and static measurements',
    },
    {
      image: '/images/work-stage-illustrations/topography.webp',
      titleRu: 'Выполнение работ',
      titleEn: 'Field Work',
      descRu: 'Топосъемка, вынос выработок, сопровождение буровых и горных работ',
      descEn: 'Topographic surveys, setting out mine workings, and support for drilling and mining',
    },
    {
      image: '/images/work-stage-illustrations/signal.webp',
      titleRu: 'Камеральная обработка',
      titleEn: 'Office Processing',
      descRu: 'Вычисление координат, оценка точности, построение планов в Nanosoft/КРЕДО',
      descEn: 'Coordinate calculation, accuracy assessment, plan creation in Nanosoft/CREDO',
    },
    {
      image: '/images/work-stage-illustrations/reporting.webp',
      titleRu: 'Сдача документации',
      titleEn: 'Documentation Delivery',
      descRu: 'Маркшейдерские планы, акты замеров, картограммы объемов, часть отчета ГРР',
      descEn: 'Mine survey plans, measurement records, volume maps, and the survey section of the exploration report',
    },
  ],
  results: [
    {
      titleRu: "Пункты опорной сети",
      titleEn: "Survey control points",
      descRu: "Каталог координат и высот, схемы расположения и материалы закрепления геодезических пунктов.",
      descEn: "Coordinate and elevation registers, location diagrams, and control monument records.",
    },
    {
      titleRu: "Топографические планы",
      titleEn: "Topographic plans",
      descRu: "Планы заданного масштаба с рельефом, объектами и границами участка.",
      descEn: "Plans at the specified scale showing terrain, features, and site boundaries.",
    },
    {
      titleRu: "Маркшейдерские планы и разрезы",
      titleEn: "Mine survey plans and sections",
      descRu: "Графические материалы по выработкам, скважинам, уступам и другим объектам съёмки.",
      descEn: "Drawings of workings, boreholes, benches, and other surveyed features.",
    },
    {
      titleRu: "Исполнительные схемы и акты",
      titleEn: "As-built drawings and survey records",
      descRu: "Координаты и отметки фактического положения объектов, материалы выноса и контроля.",
      descEn: "Actual coordinates and elevations, setting-out records, and survey checks.",
    },
    {
      titleRu: "Картограммы и расчёты объёмов",
      titleEn: "Volume maps and calculations",
      descRu: "Расчёт выемки и насыпи, сравнение поверхностей и ведомости замеров.",
      descEn: "Cut and fill calculations, surface comparisons, and measurement records.",
    },
    {
      titleRu: "Цифровые модели и материалы БПЛА",
      titleEn: "Digital models and UAV survey outputs",
      descRu: "Модели рельефа, ортофотопланы и облака точек при выполнении соответствующей съёмки.",
      descEn: "Terrain models, orthophotos, and point clouds when the relevant survey is commissioned.",
    },
    {
      titleRu: "Материалы для отчёта ГРР",
      titleEn: "Exploration report deliverables",
      descRu: "Маркшейдерская часть отчёта и цифровые файлы в согласованной системе координат.",
      descEn: "The mine survey section and digital files in the agreed coordinate reference system.",
    },
  ],
  projectExample: {
    id: 4,
    workRu: "На участке «Зеркальный» маркшейдерская служба обеспечивала топогеодезическое сопровождение работ: была проведена рекогносцировка и локализация участка, проводился вынос скважин в натуру и сьемка фактических координат в рамках проведения буровых работ.",
    workEn: "At Zerkalny, PEC provided topographic and geodetic support for the drilling program. The team reconnoitered and located the site, staked out the boreholes, and surveyed their as-drilled coordinates.",
  },

  regions: [
    { ru: 'Красноярский край', en: 'Krasnoyarsk Region' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Крайний Север', en: 'Far North' },
  ],
}

export function SurveyContent() {
  return <ServicePageTemplate data={data} topSection={<LicenseSection />} />
}
