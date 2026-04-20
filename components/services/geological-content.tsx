'use client'

import { ServicePageTemplate } from './service-page-template'
import { Mountain, Radio, Drill, Compass, FlaskConical, FileText, Leaf, BarChart3, ClipboardCheck, type LucideIcon } from 'lucide-react'

const data = {
  icon: Mountain,
  titleRu: 'Геологические работы',
  titleEn: 'Geological Works',
  descRu: 'Комплекс полевых и камеральных работ по геологическому изучению недр. От региональных съёмок до детальной разведки месторождений с подсчётом запасов.',
  descEn: 'A comprehensive range of field and office work for geological study of subsoil. From regional surveys to detailed deposit exploration with resource estimation.',
  heroImage: '/images/geo.jpg',
  reverse: false,
  methodsGroups: [
    {
      titleRu: 'Скважинная геофизика (ГИС)',
      titleEn: 'Borehole Geophysics',
      icon: Drill,
      methods: [
        { ru: 'Стандартный комплекс ГИС (ГК, ГГК, КС, ПС, ВП)', en: 'Standard GIS complex' },
        { ru: 'Инклинометрия и навигация скважин', en: 'Inclinometry and well navigation' },
        { ru: 'Акустический и радиоактивный каротаж', en: 'Acoustic and radioactive logging' },
        { ru: 'Каротаж магнитной восприимчивости', en: 'Magnetic susceptibility logging' },
      ]
    },
    {
      titleRu: 'Наземная геофизика',
      titleEn: 'Ground Geophysics',
      icon: Radio,
      methods: [
        { ru: 'Электроразведка (АМТЗ, СГ-ВП, ЗСБ, БИЭП, Электротомография)', en: 'Electrical survey' },
        { ru: 'Магниторазведка (наземная и БПЛА)', en: 'Magnetic survey' },
        { ru: 'Радиометрия (гамма-спектрометрия)', en: 'Radiometry' },
        { ru: 'Гравиразведка', en: 'Gravity survey' },
      ]
    },
    {
      titleRu: 'Воздушная геофизика',
      titleEn: 'Airborne Geophysics',
      icon: Compass,
      methods: [
        { ru: 'Магнитная съёмка с БПЛА (MiniMag, MaxiMag, AeroQuantumMag)', en: 'UAV magnetic survey' },
        { ru: 'Гамма-спектрометрия с БПЛА', en: 'UAV gamma spectrometry' },
        { ru: 'Аэрогравиметрия', en: 'Aerogravimetry' },
        { ru: 'Аэромагниторазведка (вертолётная)', en: 'Aeromagnetic survey' },
      ]
    },
  ],

  methodsImage: '/api/placeholder/500/350',
  equipment: [
    {
      titleRu: 'Геодезическое оборудование',
      titleEn: 'Survey Equipment',
      items: ['GPS Trimble R10', 'Trimble Catalyst', 'Планшеты с QGIS'],
    },
    {
      titleRu: 'Полевое оборудование',
      titleEn: 'Field Equipment',
      items: ['Горные компасы', 'Радиометры СРП-68', 'Полевые лупы', 'Молотки геологические'],
    },
    {
      titleRu: 'Программное обеспечение',
      titleEn: 'Software',
      items: ['Micromine', 'QGIS', 'ArcGIS', 'Surpac'],
    },
    {
      titleRu: 'Стандарты',
      titleEn: 'Standards',
      items: ['ГОСТ 53579-2009', 'СП 47.13330.2016', 'Методические указания Роснедра'],
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
      titleRu: 'Полевые работы',
      titleEn: 'Field Work',
      descRu: 'Геологические маршруты, документация обнажений, отбор проб',
      descEn: 'Geological routes, outcrop documentation, sampling',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Горные работы',
      titleEn: 'Mining Work',
      descRu: 'Проходка канав, шурфов, расчисток для изучения коренных пород',
      descEn: 'Trenching, pitting, clearing for bedrock study',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Лабораторные исследования',
      titleEn: 'Laboratory Research',
      descRu: 'Аналитические работы, петрография, минералогия',
      descEn: 'Analytical work, petrography, mineralogy',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Камеральная обработка',
      titleEn: 'Office Processing',
      descRu: 'Построение карт, разрезов, 3D-моделей, подготовка отчёта',
      descEn: 'Map construction, cross-sections, 3D models, report preparation',
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
      titleRu: '3D-модели',
      titleEn: '3D Models',
      descRu: 'Блочные модели месторождения в Micromine/Surpac',
      descEn: 'Block models in Micromine/Surpac',
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
