'use client'

import { ServicePageTemplate } from './service-page-template'
import { Radio, Drill, Compass } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Radio,
  titleRu: 'Геофизические работы',
  titleEn: 'Geophysical Works',
  descRu: 'Комплекс наземных и скважинных геофизических исследований для поиска и разведки месторождений полезных ископаемых. Современное оборудование и опытные специалисты.',
  descEn: 'A comprehensive range of surface and borehole geophysical surveys for mineral exploration. Modern equipment and experienced specialists.',
  heroImage: '/images/geophys5.jpeg',
  introRu:
    'Подбираем комплекс методов под геологическую задачу и условия участка: электроразведка (АМТЗ, ЗСБ, ВП, электротомография), магниторазведка наземная и каротаж скважин.\n\nПеред выходом в поле выполняем физико-геологическое моделирование, чтобы заранее понять, что метод способен показать на этом объекте. Данные обрабатываем и интерпретируем собственными специалистами. На выходе карты аномалий, геофизические разрезы, модели и обоснованные точки для заверочного бурения.',
  introEn:
    'We select a set of methods to suit the geological task and site conditions: electrical surveys (AMT, TEM, IP, electrical resistivity tomography), ground and UAV magnetic surveys, and well logging.\n\nBefore going into the field we run physical-geological modeling to understand in advance what a method can show at the site. Our own specialists process and interpret the data. The deliverables are anomaly maps, geophysical sections, models and justified locations for verification drilling.',

  reverse: true,
  sectionTitleRu: 'Полный комплекс геофизических работ',
  sectionTitleEn: 'Full range of geophysical works',
  sectionDescRu: 'От региональных съёмок до детальной разведки месторождений',
  sectionDescEn: 'From regional surveys to detailed deposit exploration',
  methods: [
    { ru: 'Стандартный комплекс ГИС (ГК, ГГК, КС, ПС, ВП)', en: 'Standard GIS complex' },
    { ru: 'Инклинометрия и навигация скважин', en: 'Inclinometry and well navigation' },
    { ru: 'Акустический и радиоактивный каротаж', en: 'Acoustic and radioactive logging' },
    { ru: 'Каротаж магнитной восприимчивости', en: 'Magnetic susceptibility logging' },
    { ru: 'Электроразведка (АМТЗ, СГ-ВП, ЗСБ, БИЭП, Электротомография, ЕП, ВЭЗ, ЭТ-ВП)', en: 'Electrical survey' },
    { ru: 'Магниторазведка (наземная и БПЛА)', en: 'Magnetic survey' },
    { ru: 'Радиометрия (гамма-спектрометрия)', en: 'Radiometry' },
  ],
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
        { ru: 'Электроразведка (АМТЗ, СГ-ВП, ЗСБ, БИЭП, Электротомография, ЕП, ВЭЗ, ЭТ-ВП)', en: 'Electrical survey' },
        { ru: 'Магниторазведка (наземная и БПЛА)', en: 'Magnetic survey' },
        { ru: 'Радиометрия (гамма-спектрометрия)', en: 'Radiometry' },
      ]
    },
  ],
  methodsImage: '/images/geofiz_project.jpg',
 equipment: [
  {
    titleRu: 'Электроразведка',
    titleEn: 'Electrical Methods',
    href: '/services/geophysics/electrical',
    items: [
      {
        name: 'NORD',
        specs: ['32-бит АЦП', '0.001-20000 Hz', 'Wi-Fi управление', 'Вес 1.8 кг'],
        image: '/images/equipment/nord.png'
      },
      {
        name: 'ЦИКЛ',
        specs: ['Цифровая передача информации', 'Без калибровки перед записью', 'Сопряжение с каротажем'],
        image: '/images/equipment/cikl8.png'
      },
      {
        name: 'Медуза',
        specs: ['Электротомография', '2D/3D моделирование', 'Автоматическая обработка'],
        image: '/images/equipment/tomography.png'
      }
    ]
  },
  {
    titleRu: 'Магниторазведка',
    titleEn: 'Magnetic Survey',
    href: '/services/geophysics/magnetic',
    items: [
      {
        name: 'MiniMag',
        specs: ['Точность: 0.01 нТл', 'Частота измерений: до 5 Гц', 'GPS синхронизация'],
        image: '/images/equipment/minimag.png'
      },
      {
        name: 'SmartMag',
        specs: ['Компактный дизайн', 'Высокая стабильность', 'Вес 3.1 кг'],
        image: '/images/equipment/smart_mag.png'
      }
    ]
  },
  {
    titleRu: 'Каротаж',
    titleEn: 'Well Logging',
    href: '/services/geophysics/logging',
    items: [
      {
        name: 'Каротажная станция',
        specs: ['Полный комплект ГИС на рудные месторождения', 'Частота измерений: до 5 Гц', 'GPS синхронизация'],
        image: '/images/equipment/karotazh.png'
      },
      {
        name: '***',
        specs: ['***', '***', '***'],
        image: '/images/equipment/smart_mag.png'
      }
    ]
  }
],
  steps: [
    {
      image: '/images/service-illustrations/field-office.webp',
      titleRu: 'Проектирование',
      titleEn: 'Project Design',
      descRu: 'Выбор методов, расчёт сети наблюдений, планирование логистики',
      descEn: 'Method selection, observation grid calculation, logistics planning',
    },
    {
      image: '/images/stages/geophys2.jpg',
      titleRu: 'Полевые измерения',
      titleEn: 'Field Measurements',
      descRu: 'Выполнение геофизических наблюдений с контролем качества',
      descEn: 'Geophysical observations with quality control',
    },
    {
      image: '/images/stages/geophys3.PNG',
      titleRu: 'Первичная обработка',
      titleEn: 'Primary Processing',
      descRu: 'Введение поправок, фильтрация, построение карт аномалий',
      descEn: 'Corrections, filtering, anomaly mapping',
    },
    {
      image: '/images/stages/geophys4.PNG',
      titleRu: 'Инверсия и моделирование',
      titleEn: 'Inversion & Modeling',
      descRu: '2D/3D инверсия данных, построение геолого-геофизических моделей',
      descEn: '2D/3D data inversion, geological-geophysical model construction',
    },
    {
      image: '/images/stages/geophys5.jpg',
      titleRu: 'Интерпретация',
      titleEn: 'Interpretation',
      descRu: 'Комплексная интерпретация с геологической привязкой',
      descEn: 'Complex interpretation with geological correlation',
    },
  ],
  results: [
    {
      titleRu: 'Карты аномалий',
      titleEn: 'Anomaly Maps',
      descRu: 'Карты магнитного поля, удельного сопротивления, ВП',
      descEn: 'Maps of magnetic field, resistivity, IP',
      image: '/images/results/magmap.jpg',
    },
    {
      titleRu: 'Геофизические разрезы',
      titleEn: 'Geophysical Sections',
      descRu: '2D разрезы удельного сопротивления и поляризуемости',
      descEn: '2D resistivity and chargeability sections',
      image: '/images/results/geophysraz.jpg',
    },
    {
      titleRu: '3D-модели',
      titleEn: '3D Models',
      descRu: 'Объёмные модели распределения физических свойств',
      descEn: 'Volume models of physical property distribution',
      image: '/images/results/geophys3d.jpg',
    },
    {
      titleRu: 'Рекомендации',
      titleEn: 'Recommendations',
      descRu: 'Точки заложения скважин, направления дальнейших работ',
      descEn: 'Drill site locations, further work directions',
      image: '/images/service-illustrations/work-report.webp',
    },
  ],
  projectId: 5,
  regions: [
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Чукотка', en: 'Chukotka' },
    { ru: 'Магаданская область', en: 'Magadanskaya oblast' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
  ],
  stats: [
    { value: '15+', labelRu: 'проектов', labelEn: 'projects' },
    { value: '1000 + км', labelRu: 'профилей', labelEn: 'of profiles' },
    { value: '400 +', labelRu: 'скважин каротажа', labelEn: 'logged wells' },
  ],
}

export function GeophysicsContent() {
  return <ServicePageTemplate data={data} />
}