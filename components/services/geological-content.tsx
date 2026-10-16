'use client'

import { ServicePageTemplate } from './service-page-template'
import { Mountain, Pickaxe, Pencil, Microscope } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Mountain,
  titleRu: 'Геологические работы',
  titleEn: 'Geological Works',
  descRu: 'Полевые и камеральные геологические работы: картирование, поисковые маршруты, опробование, документация выработок и обработка геологических данных. Состав и глубина работ определяются задачами проекта.',
  descEn: 'Field and office geology: mapping, exploration traverses, sampling, workings documentation and geological data processing. Scope and level of detail are defined by project requirements.',
  heroImage: '/images/geo.jpg',
  reverse: false,
  methods: [], // пустой, используем groups
    // ✅ Добавьте эти поля
  sectionTitleRu: 'Полный комплекс геологических работ',
  sectionTitleEn: 'Full range of geological works',
  sectionDescRu: 'Состав работ формируется под геологические задачи, исходные данные и техническое задание проекта.',
  sectionDescEn: 'The scope is tailored to the geological objectives, available data and project brief.',
  methodsGroups: [
    {
      titleRu: 'Полевые геологические работы',
      titleEn: 'Field Geological Works',
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
        { ru: 'Документация канав, шурфов и других горных выработок', en: 'Documentation of trenches, pits and other workings' },
        { ru: 'Керновое опробование и документация керна', en: 'Core logging and sampling' },
        { ru: 'Составление полевых геологических карт и разрезов', en: 'Field geological maps and sections' },
        { ru: 'Камеральная обработка полевых материалов', en: 'Field data office processing' },
        { ru: 'Ведение полевых журналов и систематизация первичных материалов', en: 'Field logging and organization of primary data' },
      ]
    },
    {
      titleRu: 'Лабораторные исследования по программе работ',
      titleEn: 'Laboratory Studies as Specified by the Work Programme',
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
  methodsImage: '/images/geo-methods.jpg',
  
 equipment: [
  {
    titleRu: 'Полевое оборудование', titleEn: 'Field Equipment',
    items: [
      { name: 'Горные компасы', specs: ['Ориентирование геологических наблюдений', 'Измерение элементов залегания'], image: '/images/equipment/compass.png' },
      { name: 'GPS-навигаторы', specs: ['Привязка маршрутов и точек наблюдения', 'Запись координат полевых объектов'], image: '/images/equipment/garmin.png' },
      { name: 'Геологические молотки', specs: ['Отбор свежих сколов пород', 'Полевое описание образцов'], image: '/images/equipment/hammer.png' },
      { name: 'Средства полевой связи', specs: ['Координация полевых групп', 'Средства выбираются с учётом условий объекта'], image: '/images/equipment/radio.png' }
    ]
  },
  {
    titleRu: 'Геоинформационное и горно-геологическое ПО', titleEn: 'GIS and Geological Software',
    items: [
      { name: 'Micromine', specs: ['Работа с геологическими данными и моделями в рамках лицензии и задач проекта'], image: '/images/software/Micromine_Beyond_Mint_RGB.png' },
      { name: 'QGIS', specs: ['Подготовка и анализ геопространственных данных', 'Создание тематических карт'], image: '/images/software/qgis-logo.png' },
      { name: 'ArcGIS', specs: ['Работа с геоданными и картографическими материалами при наличии соответствующей лицензии'], image: '/images/software/ArcGIS_logo.png' }
    ]
  },
  {
    titleRu: 'Лабораторные исследования', titleEn: 'Laboratory Studies',
    items: [
      { name: 'Петрография и минералогия', specs: ['Исследования по программе работ', 'Исполнитель и методики определяются проектом'], image: '/images/equipment/mircoscope.png' },
      { name: 'Подготовка проб', specs: ['Подготовка материала для назначенных анализов', 'Требования к подготовке задаются методикой'], image: '/images/equipment/crusher.jpg' },
      { name: 'Геохимические анализы', specs: ['Набор элементов и методы анализа определяются задачами проекта', 'Результаты оформляются в согласованном формате'], image: '/images/equipment/analytical.jpg' }
    ]
  },
  {
    titleRu: 'Полевые материалы и документация', titleEn: 'Field Data and Documentation',
    items: [
      { name: 'Цифровая полевая документация', specs: ['Сбор и систематизация координат, описаний и проб', 'Используемые устройства зависят от условий проекта'], image: '/images/equipment/tablet.jpg' },
      { name: 'Фотодокументация', specs: ['Фиксация обнажений, выработок и образцов', 'Привязка материалов к полевым записям'], image: '/images/equipment/camera.jpg' },
      { name: 'Материалы опробования', specs: ['Маркировка и учёт проб', 'Документирование передачи проб на исследования'], image: '/images/equipment/forms.jpg' }
    ]
  }
],  
  steps: [
    {
      numRu: '01',
      numEn: '01',
      titleRu: 'Подготовительный этап',
      titleEn: 'Preparation Stage',
      descRu: 'Анализ фондовых материалов, составление проекта работ, планирование маршрутов',
      descEn: 'Analysis of archival materials, work project preparation, route planning',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Полевые геологические работы',
      titleEn: 'Field Geological Work',
      descRu: 'Геологические маршруты, документация обнажений, отбор проб, закладка горных выработок',
      descEn: 'Geological routes, outcrop documentation, sampling, mine workings',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Лабораторные исследования',
      titleEn: 'Laboratory Research',
      descRu: 'Петрография, минералогия, геохимические анализы проб',
      descEn: 'Petrography, mineralogy, geochemical analysis',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Камеральная обработка',
      titleEn: 'Office Processing',
      descRu: 'Построение карт, разрезов, 3D-моделей, интерпретация данных',
      descEn: 'Map construction, cross-sections, 3D models, data interpretation',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Составление отчёта',
      titleEn: 'Report Preparation',
      descRu: 'Подготовка геологического отчёта и графических приложений в составе и формате, предусмотренных техническим заданием и требованиями к конкретному виду работ',
      descEn: 'Preparation of a geological report and figures in the scope and format specified by the project brief and requirements for the relevant work type',
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
    titleRu: 'Геологические карты',
    titleEn: 'Geological Maps',
    descRu: 'Карты и графические материалы в согласованном масштабе с легендой и исходными данными в составе, предусмотренном заданием',
    descEn: 'Set of maps at specified scale with legend',
    image: '/images/results/geomap.jpg',
  },
  {
    titleRu: 'Геологические разрезы',
    titleEn: 'Geological Sections',
    descRu: 'Поперечные и продольные разрезы с интерпретацией',
    descEn: 'Cross and longitudinal sections with interpretation',
    image: '/images/results/georazrez.jpg',
  },
  {
    titleRu: 'База данных',
    titleEn: 'Database',
    descRu: 'Структурированная база с пробами, описаниями и координатами',
    descEn: 'Structured database with samples, descriptions and coordinates',
    image: '/images/results/geobaza.jpg',
  },
  {
    titleRu: 'Геологический отчёт',
    titleEn: 'Geological Report',
    descRu: 'Текстовая и графическая части отчёта в соответствии с требованиями конкретного проекта',
    descEn: 'Text and graphic parts per GKZ/TKZ forms',
    image: '/images/results/geootchet.jpg',
  },
],
  
  caseStudy: {
    titleRu: 'Пример структуры геологического проекта',
    titleEn: 'Example of a Geological Project Structure',
    clientRu: 'Обезличенный пример',
    clientEn: 'Anonymized example',
    year: 'После подтверждения данных',
    volumeRu: 'Площадь работ, протяжённость маршрутов, количество проб и масштаб карт указываются после подтверждения исходных данных и разрешения на публикацию.',
    volumeEn: 'Survey area, traverse length, sample count and map scale should be published only after the source data and permission to disclose them have been confirmed.',
    resultRu: 'Результаты и выводы включаются в описание только на основании утверждённых материалов проекта.',
    resultEn: 'Results and conclusions should be described only on the basis of approved project materials.',
  },
  caseImage: '/images/geoproject.JPG',
  showCaseStudy: false,
  
  regions: [
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Чукотка', en: 'Chukotka' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
    { ru: 'Кольский полуостров', en: 'Kola Peninsula' },
    { ru: 'Иркутская область', en: 'Irkutsk Region' },
  ],
  
  stats: [],
}

export function GeologicalContent() {
  return <ServicePageTemplate data={data} />
}