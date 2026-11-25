'use client'

import { ServicePageTemplate } from './service-page-template'
import { Radio, Drill } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'
import { GeophysicsMethodLinks } from './geophysics-method-content'

const data: ServicePageData = {
  icon: Radio,
  titleRu: 'Геофизические работы',
  titleEn: 'Geophysical Services',
  descRu: 'Электроразведка, магниторазведка, каротаж скважин. От полевых измерений до обработки и интерпретации.',
  descEn: 'Electrical and electromagnetic surveys, ground magnetic surveys, and borehole logging. From field measurements to processing and interpretation.',
  heroImage: '/images/geophys5.jpeg',
  introPhoto: {
    src: '/images/geophysics.jpg',
    altRu: 'Геофизики с оборудованием на полевом участке',
    altEn: 'Geophysicists with equipment at a field site',
  },
  introRu:
    'Проводим геофизические работы по методам, заданным заказчиком в техническом задании. Выполняем электроразведку, магниторазведку и каротаж скважин. В поле контролируем качество измерений, затем обрабатываем и интерпретируем данные.\n\nВ зависимости от метода и задачи передаём заказчику карты аномалий, геофизические разрезы, материалы каротажа и рекомендации по проверочному бурению.',
  introEn:
    'We carry out geophysical surveys using the methods specified by the client in the project brief. Our services include electrical and electromagnetic surveys, magnetic surveys, and borehole logging. We check measurement quality in the field, then process and interpret the data.\n\nDepending on the method and project objectives, we deliver anomaly maps, geophysical sections, borehole logs, and recommendations for follow-up drilling.',

  reverse: true,
  sectionTitleRu: 'Полный комплекс геофизических работ',
  sectionTitleEn: 'Full range of geophysical services',
  sectionDescRu: 'От региональных съёмок до детальной разведки месторождений',
  sectionDescEn: 'From regional surveys to detailed deposit exploration',
  methods: [
    { ru: 'Стандартный комплекс ГИС (ГК, ГГК, КС, ПС, ВП)', en: 'Standard borehole logging suite (gamma ray, gamma-gamma, resistivity, spontaneous potential, and induced polarization)' },
    { ru: 'Инклинометрия и навигация скважин', en: 'Borehole deviation and trajectory surveys' },
    { ru: 'Акустический, оптический и радиоактивный каротаж', en: 'Acoustic, optical and nuclear logging' },
    { ru: 'Каротаж магнитной восприимчивости', en: 'Magnetic susceptibility logging' },
    { ru: 'Электроразведка (АМТЗ, СГ-ВП, ЗСБ, БИЭП, Электротомография, ЕП, ВЭЗ, ЭТ-ВП)', en: 'Electrical and electromagnetic surveys' },
    { ru: 'Магниторазведка (наземная)', en: 'Ground magnetic surveys' },
    { ru: 'Радиометрия (гамма-спектрометрия)', en: 'Radiometry (gamma-ray spectrometry)' },
  ],
  methodsGroups: [
    {
      titleRu: 'Скважинная геофизика (ГИС)',
      titleEn: 'Borehole Geophysics',
      icon: Drill,
      methods: [
        { ru: 'Стандартный комплекс ГИС (ГК, ГГК, КС, ПС, ВП)', en: 'Standard borehole logging suite (gamma ray, gamma-gamma, resistivity, spontaneous potential, and induced polarization)' },
        { ru: 'Инклинометрия и навигация скважин', en: 'Borehole deviation and trajectory surveys' },
        { ru: 'Акустический, оптический и радиоактивный каротаж', en: 'Acoustic, optical and nuclear logging' },
        { ru: 'Каротаж магнитной восприимчивости', en: 'Magnetic susceptibility logging' },
      ]
    },
    {
      titleRu: 'Наземная геофизика',
      titleEn: 'Ground Geophysics',
      icon: Radio,
      methods: [
        { ru: 'Электроразведка (АМТЗ, СГ-ВП, ЗСБ, БИЭП, Электротомография, ЕП, ВЭЗ, ЭТ-ВП)', en: 'Electrical and electromagnetic surveys' },
        { ru: 'Магниторазведка (наземная)', en: 'Ground magnetic surveys' },
        { ru: 'Радиометрия (гамма-спектрометрия)', en: 'Radiometry (gamma-ray spectrometry)' },
      ]
    },
  ],
  methodsImage: '/images/geofiz_project.jpg',
  steps: [
    {
      image: '/images/work-stage-illustrations/planning.webp',
      titleRu: 'Подготовка к работам',
      titleEn: 'Survey Preparation',
      descRu: 'Планирование сети наблюдений и логистики по техническому заданию',
      descEn: 'Survey layout and logistics planning based on the project brief',
    },
    {
      image: '/images/work-stage-illustrations/geophysics.webp',
      titleRu: 'Полевые измерения',
      titleEn: 'Field Measurements',
      descRu: 'Выполнение геофизических наблюдений с контролем качества',
      descEn: 'Geophysical observations with quality control',
    },
    {
      image: '/images/work-stage-illustrations/signal.webp',
      titleRu: 'Первичная обработка',
      titleEn: 'Primary Processing',
      descRu: 'Введение поправок, фильтрация, построение карт аномалий',
      descEn: 'Corrections, filtering, anomaly mapping',
    },
    {
      image: '/images/work-stage-illustrations/block.webp',
      titleRu: 'Инверсия и моделирование',
      titleEn: 'Inversion & Modeling',
      descRu: '2D/3D инверсия данных, построение геолого-геофизических моделей',
      descEn: '2D/3D data inversion, geological-geophysical model construction',
    },
    {
      image: '/images/work-stage-illustrations/analysis.webp',
      titleRu: 'Интерпретация',
      titleEn: 'Interpretation',
      descRu: 'Комплексная интерпретация с геологической привязкой',
      descEn: 'Complex interpretation with geological correlation',
    },
  ],
  results: [
    {
      titleRu: "Полевые данные",
      titleEn: "Field data",
      descRu: "Файлы измерений, координаты профилей и точек, журналы наблюдений.",
      descEn: "Measurement files, profile and station coordinates, and survey logs.",
    },
    {
      titleRu: "Контроль качества",
      titleEn: "Quality control",
      descRu: "Материалы повторных наблюдений, сведения о помехах и принятых поправках.",
      descEn: "Repeat observations, interference notes, and corrections applied.",
    },
    {
      titleRu: "Обработанные данные",
      titleEn: "Processed data",
      descRu: "Ряды и профили после фильтрации, поправок и увязки выбранным методом.",
      descEn: "Corrected, filtered, and leveled series and profiles as applicable to the selected method.",
    },
    {
      titleRu: "Карты полей и аномалий",
      titleEn: "Field and anomaly maps",
      descRu: "Карты магнитного поля, электропроводности или поляризуемости по применённым методам.",
      descEn: "Magnetic field, conductivity, or chargeability maps for the methods used.",
    },
    {
      titleRu: "Разрезы и модели",
      titleEn: "Sections and models",
      descRu: "Геофизические разрезы, результаты инверсии и 3D-модели физических свойств, когда это предусмотрено задачей.",
      descEn: "Geophysical sections, inversions, and 3D physical-property models where specified.",
    },
    {
      titleRu: "Материалы каротажа",
      titleEn: "Borehole logging deliverables",
      descRu: "Цифровые кривые по глубине, диаграммы ГИС и увязка со скважинными данными.",
      descEn: "Digital depth curves, well-log plots, and correlation with borehole data.",
    },
    {
      titleRu: "Отчёт и цели для проверки",
      titleEn: "Report and follow-up targets",
      descRu: "Описание методик, интерпретация аномалий и рекомендации по профилям и проверочным скважинам.",
      descEn: "Methods, anomaly interpretation, and recommendations for follow-up profiles and verification holes.",
    },
  ],
  projectExample: {
    id: 17,
    workRu: "Выполнили наземные съёмки АМТЗ и ЗСБ, обработали и инвертировали данные, построили разрезы удельного электрического сопротивления и подготовили отчёт.",
    workEn: "PEC carried out ground-based audio-magnetotelluric (AMT) and transient electromagnetic (TEM) surveys. The team processed and inverted the data, produced electrical resistivity sections, and prepared a final report.",
  },

  regions: [
    'Республика Саха (Якутия)',
    'Таймыр',
    'Чукотский автономный округ',
    'Магаданская область',
    'Забайкальский край',
    'Красноярский край',
  ],
}

export function GeophysicsContent() {
  return <ServicePageTemplate data={data} afterHero={<GeophysicsMethodLinks />} />
}
