'use client'

import { ServicePageTemplate } from './service-page-template'
import { Mountain, Pickaxe, Map, Microscope, FileCheck, Pencil, type LucideIcon } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Mountain,
  titleRu: 'Геологические работы',
  titleEn: 'Geological Works',
  descRu: 'Комплекс полевых и камеральных работ по геологическому изучению недр. От региональных съёмок до детальной разведки месторождений с подсчётом запасов.',
  descEn: 'A comprehensive range of field and office work for geological study of subsoil. From regional surveys to detailed deposit exploration with resource estimation.',
  heroImage: '/images/geo.jpg',
  reverse: false,
  methods: [], // пустой, используем groups
  
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
  methodsImage: '/images/geo-methods.jpg',
  
  equipment: [
    {
      titleRu: 'Полевое оборудование',
      titleEn: 'Field Equipment',
      items: ['Горные компасы', 'GPS-навигаторы Garmin', 'Полевые лупы (10x, 20x)', 'Геологические молотки', 'Радиостанции'],
    },
    {
      titleRu: 'Программное обеспечение',
      titleEn: 'Software',
      items: ['Micromine', 'QGIS', 'ArcGIS', 'Surpac', 'Petrel'],
    },
    {
      titleRu: 'Лаборатория',
      titleEn: 'Laboratory',
      items: ['Петрографические микроскопы', 'Дробилки и истиратели', 'Аналитическое оборудование'],
    },
    {
      titleRu: 'Документация',
      titleEn: 'Documentation',
      items: ['Цифровые планшеты с QGIS', 'Фотодокументация', 'Лазерные дальномеры', 'Бланки опробования'],
    },
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
      descRu: 'Подготовка геологического отчёта по формам ГКЗ/ТКЗ, сдача отчётности',
      descEn: 'Geological report preparation per GKZ/TKZ forms, reporting',
    },
  ],
  stepImages: [
    '/images/one.jpg',
    '/images/two.jpg',
    '/images/three.jpg',
    '/images/four.jpg',
    '/images/five.jpg',
  ],
  
  results: [
    {
      titleRu: 'Геологические карты',
      titleEn: 'Geological Maps',
      descRu: 'Комплект карт заданного масштаба с условными обозначениями',
      descEn: 'Set of maps at specified scale with legend',
    },
    {
      titleRu: 'Геологические разрезы',
      titleEn: 'Geological Sections',
      descRu: 'Поперечные и продольные разрезы с интерпретацией',
      descEn: 'Cross and longitudinal sections with interpretation',
    },
    {
      titleRu: 'База данных',
      titleEn: 'Database',
      descRu: 'Структурированная база с пробами, описаниями и координатами',
      descEn: 'Structured database with samples, descriptions and coordinates',
    },
    {
      titleRu: 'Геологический отчёт',
      titleEn: 'Geological Report',
      descRu: 'Текстовая и графическая части по формам ГКЗ/ТКЗ',
      descEn: 'Text and graphic parts per GKZ/TKZ forms',
    },
  ],
  
  caseStudy: {
    titleRu: 'Геологическое доизучение Норильского рудного узла',
    titleEn: 'Geological Study of Norilsk Ore Cluster',
    clientRu: 'Норникель',
    clientEn: 'Nornickel',
    year: '2023-2024',
    volumeRu: '3 планшета масштаба 1:50 000, площадь 850 км², 1 200 км маршрутов, 3 500 проб',
    volumeEn: '3 map sheets at 1:50,000 scale, 850 km² area, 1,200 km routes, 3,500 samples',
    resultRu: 'Выявлено 7 перспективных участков на медно-никелевое оруденение. Подготовлены рекомендации по дальнейшим работам.',
    resultEn: 'Identified 7 prospective areas for copper-nickel mineralization. Prepared recommendations for further work.',
  },
  caseImage: '/images/geoproject.jpg',
  
  regions: [
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Чукотка', en: 'Chukotka' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
    { ru: 'Кольский полуостров', en: 'Kola Peninsula' },
    { ru: 'Иркутская область', en: 'Irkutsk Region' },
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