'use client'

import { ServicePageTemplate } from './service-page-template'
import { Mountain, Radio, Drill, Compass, FlaskConical, FileText, Leaf, BarChart3, ClipboardCheck, type LucideIcon } from 'lucide-react'


const data = {
  icon: Radio,
  titleRu: 'Геофизические работы',
  titleEn: 'Geophysical Works',
  descRu: 'Комплекс наземных и скважинных геофизических исследований для поиска и разведки месторождений полезных ископаемых. Современное оборудование и опытные специалисты.',
  descEn: 'A comprehensive range of surface and borehole geophysical surveys for mineral exploration. Modern equipment and experienced specialists.',
  heroImage: '/images/geophys.jpg',
  reverse: true,
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
    titleRu: 'Электроразведка',
    titleEn: 'Electrical Methods',
    href: '/services/geophysics/electrical',  // ← ссылка на страницу метода
    items: ['ЭРА-МАКС (АМТЗ, ВП)', 'Феникс MTU-5A', 'ИМВП-8'],
  },
  {
    titleRu: 'Магниторазведка',
    titleEn: 'Magnetic Survey',
    href: '/services/geophysics/magnetic',
    items: ['MMPOS-2', 'GSM-19 Overhauser', 'Протоновые магнитометры'],
  },
  {
    titleRu: 'Гравиразведка',
    titleEn: 'Gravity Survey',
    href: '/services/geophysics/gravity',
    items: ['Scintrex CG-6', 'Autograv CG-5', 'Лазерные нивелиры'],
  },
  {
    titleRu: 'Сейсморазведка',
    titleEn: 'Seismic Survey',
    href: '/services/geophysics/seismic',
    items: ['Скала-48', 'Сейсмостанции 24-48 каналов', 'Сейсмоприёмники GS-20DX'],
  },
  {
    titleRu: 'Каротаж',
    titleEn: 'Well Logging',
    href: '/services/geophysics/logging',
    items: ['Комплексные каротажные станции', 'Инклинометры', 'Акустические зонды'],
  },
  {
    titleRu: 'ПО для обработки',
    titleEn: 'Processing Software',
    href: '/services/geophysics/software',
    items: ['Oasis Montaj', 'ZondRes2D/3D', 'RadExPro', 'Petrel'],
  },
],
  steps: [
    {
      numRu: '01',
      numEn: '01',
      titleRu: 'Проектирование',
      titleEn: 'Project Design',
      descRu: 'Выбор методов, расчёт сети наблюдений, планирование логистики',
      descEn: 'Method selection, observation grid calculation, logistics planning',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Полевые измерения',
      titleEn: 'Field Measurements',
      descRu: 'Выполнение геофизических наблюдений с контролем качества',
      descEn: 'Geophysical observations with quality control',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Первичная обработка',
      titleEn: 'Primary Processing',
      descRu: 'Введение поправок, фильтрация, построение карт аномалий',
      descEn: 'Corrections, filtering, anomaly mapping',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Инверсия и моделирование',
      titleEn: 'Inversion & Modeling',
      descRu: '2D/3D инверсия данных, построение геолого-геофизических моделей',
      descEn: '2D/3D data inversion, geological-geophysical model construction',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Интерпретация',
      titleEn: 'Interpretation',
      descRu: 'Комплексная интерпретация с геологической привязкой',
      descEn: 'Complex interpretation with geological correlation',
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
      titleRu: 'Карты аномалий',
      titleEn: 'Anomaly Maps',
      descRu: 'Карты магнитного поля, гравитационных аномалий, ВП',
      descEn: 'Maps of magnetic field, gravity anomalies, IP',
    },
    {
      titleRu: 'Геофизические разрезы',
      titleEn: 'Geophysical Sections',
      descRu: '2D разрезы удельного сопротивления, плотности',
      descEn: '2D resistivity and density sections',
    },
    {
      titleRu: '3D-модели',
      titleEn: '3D Models',
      descRu: 'Объёмные модели распределения физических свойств',
      descEn: 'Volume models of physical property distribution',
    },
    {
      titleRu: 'Рекомендации',
      titleEn: 'Recommendations',
      descRu: 'Точки заложения скважин, направления дальнейших работ',
      descEn: 'Drill site locations, further work directions',
    },
  ],
  caseStudy: {
    titleRu: 'Поиски золоторудных зон на участке Кючус',
    titleEn: 'Gold Zone Exploration at Kyuchus Site',
    clientRu: 'Росатом',
    clientEn: 'Rosatom',
    year: '2022-2023',
    volumeRu: 'Площадь 120 км², 450 км профилей ВП, 80 км АМТЗ, магнитная съёмка',
    volumeEn: '120 km² area, 450 km IP profiles, 80 km AMT, magnetic survey',
    resultRu: 'Выявлены аномалии вызванной поляризации до 12%, локализовано 5 перспективных зон. Подтверждено бурением.',
    resultEn: 'Identified IP anomalies up to 12%, localized 5 prospective zones. Confirmed by drilling.',
  },
  caseImage: '/images/geofiz_project.jpg',
  regions: [
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Чукотка', en: 'Chukotka' },
    { ru: 'ХМАО', en: 'KhMAO' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
  ],
  stats: [
    { value: '85+', labelRu: 'проектов', labelEn: 'projects' },
    { value: '5 000+ км', labelRu: 'профилей', labelEn: 'of profiles' },
    { value: '200+', labelRu: 'скважин каротажа', labelEn: 'logged wells' },
    { value: '125 000', labelRu: 'точек отснято', labelEn: 'max IP anomaly' },
  ],
}

export function GeophysicsContent() {
  return <ServicePageTemplate data={data} />
}


