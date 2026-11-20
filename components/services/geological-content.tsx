'use client'

import { ServicePageTemplate } from './service-page-template'
import { Mountain, Pickaxe, Pencil, Microscope } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Mountain,
  titleRu: 'Геологические работы',
  titleEn: 'Geological Services',
  descRu: 'Комплекс полевых и камеральных работ по геологическому изучению недр. От региональных съёмок до детальной разведки месторождений с подсчётом запасов.',
  descEn: 'A comprehensive range of field and office work for geological study of subsoil. From regional surveys to detailed deposit exploration with resource estimation.',
  heroImage: '/images/geo.jpg',
  introRu:
    'Выполняем геологическое изучение территории на всех стадиях: от рекогносцировочных маршрутов и картирования масштабов 1:200 000 – 1:10 000 до оценочных и разведочных работ на конкретном объекте. Поиски ведём комплексно: геологические маршруты, литогеохимическое опробование по вторичным ореолам рассеяния, шлиховое опробование, документация канав, шурфов и керна. Результаты оформляем в цифровых моделях и отчётах по формам ГКЗ/ТКЗ с рекомендациями по дальнейшим работам.',
  introEn:
    'We carry out geological study of territories at every stage: from reconnaissance routes and mapping at 1:200,000 – 1:10,000 to appraisal and exploration work at a specific site. Prospecting is done as a complex: geological routes, lithogeochemical sampling over secondary dispersion halos, heavy mineral sampling, and documentation of trenches, pits and core. Results are delivered as digital models and reports in GKZ/TKZ formats, with recommendations for further work.',

  reverse: false,
  methods: [], // пустой, используем groups
    // ✅ Добавьте эти поля
  sectionTitleRu: 'Полный комплекс геологических работ',
  sectionTitleEn: 'Full range of geological services',
  sectionDescRu: 'От региональных съёмок до детальной разведки месторождений с подсчётом запасов',
  sectionDescEn: 'From regional surveys to detailed deposit exploration with resource estimation',
  methodsGroups: [
    {
      titleRu: 'Полевые геологические работы',
      titleEn: 'Field Geology',
      icon: Pickaxe,
      methods: [
        { ru: 'Геологическое картирование масштабов 1:200 000 – 1:10 000', en: 'Geological mapping 1:200,000 – 1:10,000' },
        { ru: 'Поисковые и рекогносцировочные маршруты', en: 'Reconnaissance and exploration routes' },
        { ru: 'Документация горных выработок и обнажений', en: 'Mining workings and outcrops documentation' },
        { ru: 'Шлиховое опробование', en: 'Placer sampling' },
        { ru: 'Литогеохимическое опробование', en: 'Lithogeochemical sampling' },
        { ru: 'Поиски по вторичным ореолам рассеяния', en: 'Secondary dispersion halo exploration' },
      ]
    },
    {
      titleRu: 'Геологическая документация',
      titleEn: 'Geological Documentation',
      icon: Pencil,
      methods: [
        { ru: 'Закладка и документация канав и шурфов', en: 'Trenches and pitting documentation' },
        { ru: 'Керновое опробование и документация керна', en: 'Core logging and sampling' },
        { ru: 'Составление полевых геологических карт и разрезов', en: 'Field geological maps and sections' },
        { ru: 'Камеральная обработка полевых материалов', en: 'Field data office processing' },
        { ru: 'Ведение полевых дневников и планшетов', en: 'Field notebooks and tablets' },
      ]
    },
    {
      titleRu: 'Лабораторные исследования',
      titleEn: 'Laboratory Studies',
      icon: Microscope,
      methods: [
        { ru: 'Петрографические исследования', en: 'Petrographic studies' },
        { ru: 'Минералогический анализ', en: 'Mineralogical analysis' },
        { ru: 'Литологический анализ', en: 'Lithological analysis' },
        { ru: 'Геохимические анализы проб', en: 'Geochemical assays' },
        { ru: 'Диагностика полезных ископаемых', en: 'Mineral diagnostics' },
      ]
    },
  ],
  methodsImage: '/images/site/geologists-outcrop.jpg',
  
 equipment: [
  {
    titleRu: 'Полевое оборудование',
    titleEn: 'Field Equipment',
    items: [
      {
        name: 'Горные компасы',
        specs: ['Точность ориентирования', 'Противоударный корпус', 'Влагозащита'],
        image: '/images/equipment/compass.png'
      },
      {
        name: 'GPS-навигаторы Garmin',
        specs: ['Высокая точность позиционирования', 'Работа при -30°C', 'Водонепроницаемый корпус'],
        image: '/images/equipment/garmin.png'
      },
      {
        name: 'Геологические молотки',
        specs: ['Закалённая сталь', 'Прорезиненная рукоятка', 'Вес 600-800 г'],
        image: '/images/equipment/hammer.png'
      },
      {
        name: 'Радиостанции',
        specs: ['Дальность до 10 км', 'Защита от пыли и влаги', 'Аккумулятор на 12 часов'],
        image: '/images/equipment/radio.png'
      }
    ]
  },
  {
    titleRu: 'Программное обеспечение',
    titleEn: 'Software',
    items: [
      {
        name: 'Micromine',
        specs: ['3D моделирование', 'Подсчёт запасов', 'Геологическое моделирование'],
        image: '/images/software/Micromine_Beyond_Mint_RGB.png'
      },
      {
        name: 'QGIS',
        specs: ['Работа с геопространственными данными', 'Создание карт', 'Бесплатное ПО'],
        image: '/images/software/qgis-logo.png'
      },
      {
        name: 'ArcGIS',
        specs: ['Профессиональная ГИС', '3D анализ', 'Пространственное моделирование'],
        image: '/images/software/ArcGIS_logo.png'
      },
    ]
  },
  {
    titleRu: 'Лаборатория',
    titleEn: 'Laboratory',
    items: [
      {
        name: 'Петрографические микроскопы',
        specs: ['Увеличение до 1000x', 'Поляризация', 'Встроенная камера'],
        image: '/images/equipment/mircoscope.png'
      },
      {
        name: 'Дробилки и истиратели',
        specs: ['Дробление до 1 мм', 'Истирание до 0.05 мм', 'Производительность до 2 кг/час'],
        image: '/images/equipment/crusher.jpg'
      },
      {
        name: 'Аналитическое оборудование',
        specs: ['ICP-MS', 'XRF', 'Атомно-абсорбционный спектрометр'],
        image: '/images/equipment/analytical.jpg'
      }
    ]
  },
  {
    titleRu: 'Документация',
    titleEn: 'Documentation',
    items: [
      {
        name: 'Цифровые планшеты с QGIS',
        specs: ['Экран 10"', 'Защита IP68', 'Аккумулятор на 12 часов'],
        image: '/images/equipment/tablet.jpg'
      },
      {
        name: 'Фотодокументация',
        specs: ['Камеры высокого разрешения', 'GPS-геотегирование', 'Подводная съёмка'],
        image: '/images/equipment/camera.jpg'
      },
      {
        name: 'Лазерные дальномеры',
        specs: ['Дальность до 1000 м', 'Точность ±1 м', 'Встроенный компас'],
        image: '/images/equipment/laser.jpg'
      },
      {
        name: 'Бланки опробования',
        specs: ['ГОСТ', 'Защита от подделок', 'Термостойкие'],
        image: '/images/equipment/forms.jpg'
      }
    ]
  }
],
  
  steps: [
    {
      image: '/images/work-stage-illustrations/planning.webp',
      titleRu: 'Подготовительный этап',
      titleEn: 'Preparation Stage',
      descRu: 'Анализ фондовых материалов, составление проекта работ, планирование маршрутов',
      descEn: 'Analysis of archival materials, work project preparation, route planning',
    },
    {
      image: '/images/work-stage-illustrations/field.webp',
      titleRu: 'Полевые геологические работы',
      titleEn: 'Field Geological Work',
      descRu: 'Геологические маршруты, документация обнажений, отбор проб, закладка горных выработок',
      descEn: 'Geological routes, outcrop documentation, sampling, mine workings',
    },
    {
      image: '/images/work-stage-illustrations/microscopy.webp',
      titleRu: 'Лабораторные исследования',
      titleEn: 'Laboratory Testing',
      descRu: 'Петрография, минералогия, геохимические анализы проб',
      descEn: 'Petrography, mineralogy, geochemical analysis',
    },
    {
      image: '/images/work-stage-illustrations/analysis.webp',
      titleRu: 'Камеральная обработка',
      titleEn: 'Office Processing',
      descRu: 'Построение карт, разрезов, 3D-моделей, интерпретация данных',
      descEn: 'Map construction, cross-sections, 3D models, data interpretation',
    },
    {
      image: '/images/work-stage-illustrations/reporting.webp',
      titleRu: 'Составление отчёта',
      titleEn: 'Report Preparation',
      descRu: 'Подготовка геологического отчёта по формам ГКЗ/ТКЗ, сдача отчётности',
      descEn: 'Geological report preparation per GKZ/TKZ forms, reporting',
    },
  ],
  results: [
    {
      titleRu: "Геологические карты и разрезы",
      titleEn: "Geological maps and sections",
      descRu: "Геологическое строение участка, контуры пород и минерализованных зон, поперечные и продольные разрезы.",
      descEn: "Site geology, rock and mineralized zone outlines, and cross and longitudinal sections.",
    },
    {
      titleRu: "Геохимические карты",
      titleEn: "Geochemical maps",
      descRu: "Карты фактического опробования, распределения элементов и геохимических аномалий.",
      descEn: "Sample location maps, element distribution maps, and geochemical anomalies.",
    },
    {
      titleRu: "Дела скважин",
      titleEn: "Borehole files",
      descRu: "Свод материалов по каждой скважине: привязка, геологическая колонка, интервалы опробования и результаты анализов.",
      descEn: "A compilation for each borehole with its location, geological log, sampling intervals, and analytical results.",
    },
    {
      titleRu: "Документация керна",
      titleEn: "Core documentation",
      descRu: "Описания пород, минерализации и изменений, выход керна по интервалам и фотоматериалы.",
      descEn: "Descriptions of rock types, mineralization and alteration, interval recovery, and photographs.",
    },
    {
      titleRu: "Документация канав",
      titleEn: "Trench documentation",
      descRu: "Зарисовки и фотографии полотен и стенок, привязка выработок и интервалы бороздового опробования.",
      descEn: "Drawings and photographs of trench floors and faces, survey ties, and channel sampling intervals.",
    },
    {
      titleRu: "Пробы и реестры опробования",
      titleEn: "Samples and registers",
      descRu: "Керновые, бороздовые, штуфные, литогеохимические или шлиховые пробы по заданию, с номерами и привязкой.",
      descEn: "Core, channel, grab, lithogeochemical, or heavy-mineral samples as specified, with identifiers and locations.",
    },
    {
      titleRu: "База геологических данных",
      titleEn: "Geological database",
      descRu: "Координаты, описания маршрутов и точек, интервалы опробования, протоколы анализов и контроль качества.",
      descEn: "Coordinates, traverse and station descriptions, sampling intervals, analytical certificates, and quality-control records.",
    },
    {
      titleRu: "Отчёт и рекомендации",
      titleEn: "Report and recommendations",
      descRu: "Интерпретация данных, выделение перспективных участков, рекомендации по дальнейшей проверке и комплект приложений.",
      descEn: "Data interpretation, target areas, recommendations for follow-up, and supporting appendices.",
    },
],
  
  
  projectExample: {
    id: 1,
    workRu: "На поисковом участке был задокументирован керн и полотна канав, проводились поисковые маршруты, керновое и шлиховое опробование и геохимические работы по вторичным ореолам. По результатам работ подготовлен отчёт с рекомендациями по дальнейшим геологоразведочным работам.",
    workEn: "At the prospect, PEC logged drill core and trench faces, carried out prospecting traverses, collected core and heavy mineral concentrate samples, and conducted geochemical surveys over secondary dispersion halos. The final report recommended further exploration work.",
  },

  regions: [
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Чукотка', en: 'Chukotka' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
  ],
  
  stats: [
    { value: '120+', labelRu: 'проектов', labelEn: 'projects' },
    { value: '4 500 км', labelRu: 'маршрутов', labelEn: 'of routes' },
    { value: '15 000+', labelRu: 'проб отобрано', labelEn: 'samples collected' },
    { value: '850 км²', labelRu: 'макс. площадь', labelEn: 'max area' },
  ],
}

export function GeologicalContent() {
  return <ServicePageTemplate data={data} />
}
