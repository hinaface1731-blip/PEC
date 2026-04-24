'use client'

import { ServicePageTemplate } from './service-page-template'
import { FlaskConical } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: FlaskConical,
  titleRu: 'Лабораторные исследования',
  titleEn: 'Laboratory Research',
  descRu: 'Собственная аккредитованная лаборатория с современным аналитическим оборудованием. Полный спектр геохимических, минералогических и физико-механических исследований.',
  descEn: 'In-house accredited laboratory with modern analytical equipment. Full range of geochemical, mineralogical and physical-mechanical research.',
  heroImage: '/images/i.jpg',
  reverse: false,
  methods: [
    { ru: 'ICP-MS анализ (45 элементов)', en: 'ICP-MS analysis (45 elements)' },
    { ru: 'Пробирный анализ (Au, Ag, Pt, Pd)', en: 'Fire assay (Au, Ag, Pt, Pd)' },
    { ru: 'Атомно-абсорбционный анализ', en: 'Atomic absorption analysis' },
    { ru: 'Рентгенофлуоресцентный анализ (XRF)', en: 'X-ray fluorescence analysis (XRF)' },
    { ru: 'Силикатный анализ', en: 'Silicate analysis' },
    { ru: 'Гравитационное обогащение', en: 'Gravity concentration' },
    { ru: 'Минералогические исследования', en: 'Mineralogical studies' },
    { ru: 'Изготовление шлифов и аншлифов', en: 'Thin and polished section preparation' },
    { ru: 'Физико-механические испытания грунтов', en: 'Soil physical-mechanical testing' },
    { ru: 'Гранулометрический анализ', en: 'Grain size analysis' },
    { ru: 'Компрессионные испытания', en: 'Compression testing' },
    { ru: 'Испытания на сдвиг', en: 'Shear testing' },
  ],
  methodsGroups: [
    {
      titleRu: 'Геохимические методы',
      titleEn: 'Geochemical Methods',
      icon: FlaskConical,
      methods: [
        { ru: 'ICP-MS анализ (45 элементов)', en: 'ICP-MS analysis (45 elements)' },
        { ru: 'Пробирный анализ (Au, Ag, Pt, Pd)', en: 'Fire assay (Au, Ag, Pt, Pd)' },
        { ru: 'Атомно-абсорбционный анализ', en: 'Atomic absorption analysis' },
        { ru: 'Рентгенофлуоресцентный анализ (XRF)', en: 'X-ray fluorescence analysis (XRF)' },
        { ru: 'Силикатный анализ', en: 'Silicate analysis' },
      ]
    },
    {
      titleRu: 'Минералогические исследования',
      titleEn: 'Mineralogical Studies',
      icon: FlaskConical,
      methods: [
        { ru: 'Гравитационное обогащение', en: 'Gravity concentration' },
        { ru: 'Минералогические исследования', en: 'Mineralogical studies' },
        { ru: 'Изготовление шлифов и аншлифов', en: 'Thin and polished section preparation' },
      ]
    },
    {
      titleRu: 'Физико-механические испытания',
      titleEn: 'Physical-Mechanical Testing',
      icon: FlaskConical,
      methods: [
        { ru: 'Физико-механические испытания грунтов', en: 'Soil physical-mechanical testing' },
        { ru: 'Гранулометрический анализ', en: 'Grain size analysis' },
        { ru: 'Компрессионные испытания', en: 'Compression testing' },
        { ru: 'Испытания на сдвиг', en: 'Shear testing' },
      ]
    },
  ],
  methodsImage: '/images/lab.jpg',
  equipment: [
    {
      titleRu: 'Спектрометрия',
      titleEn: 'Spectrometry',
      items: ['Agilent 7900 ICP-MS', 'Атомно-абсорбционный спектрометр AAS', 'XRF анализатор Olympus'],
    },
    {
      titleRu: 'Пробирная лаборатория',
      titleEn: 'Fire Assay Lab',
      items: ['Пробирные печи', 'Муфельные печи', 'Весы аналитические'],
    },
    {
      titleRu: 'Минералогия',
      titleEn: 'Mineralogy',
      items: ['Рентгеновский дифрактометр', 'Поляризационные микроскопы', 'Электронный микроскоп'],
    },
    {
      titleRu: 'Грунтовая лаборатория',
      titleEn: 'Soil Lab',
      items: ['Компрессионные приборы', 'Сдвиговые приборы', 'Трёхосные приборы'],
    },
    {
      titleRu: 'Пробоподготовка',
      titleEn: 'Sample Preparation',
      items: ['Щековые дробилки', 'Истиратели', 'Делители проб'],
    },
    {
      titleRu: 'Контроль качества',
      titleEn: 'Quality Control',
      items: ['Стандартные образцы', 'Дубликаты', 'Холостые пробы'],
    },
  ],
  steps: [
    {
      numRu: '01',
      numEn: '01',
      titleRu: 'Приёмка проб',
      titleEn: 'Sample Reception',
      descRu: 'Регистрация, взвешивание, сушка, маркировка',
      descEn: 'Registration, weighing, drying, labeling',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Пробоподготовка',
      titleEn: 'Sample Preparation',
      descRu: 'Дробление, истирание, квартование, отбор навесок',
      descEn: 'Crushing, grinding, splitting, aliquot selection',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Анализ',
      titleEn: 'Analysis',
      descRu: 'Выполнение определений согласно методикам',
      descEn: 'Determinations according to methods',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Контроль качества',
      titleEn: 'Quality Control',
      descRu: 'Внутренний и внешний контроль, CRM, дубликаты',
      descEn: 'Internal and external control, CRM, duplicates',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Отчётность',
      titleEn: 'Reporting',
      descRu: 'Выдача протоколов, сертификатов, цифровых данных',
      descEn: 'Issuance of protocols, certificates, digital data',
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
      titleRu: 'Протоколы анализов',
      titleEn: 'Analysis Protocols',
      descRu: 'Аккредитованные протоколы испытаний',
      descEn: 'Accredited test protocols',
    },
    {
      titleRu: 'Цифровые данные',
      titleEn: 'Digital Data',
      descRu: 'Результаты в Excel, CSV для импорта в базы',
      descEn: 'Results in Excel, CSV for database import',
    },
    {
      titleRu: 'Минералогические заключения',
      titleEn: 'Mineralogical Reports',
      descRu: 'Описания шлифов, фотографии, интерпретация',
      descEn: 'Thin section descriptions, photos, interpretation',
    },
    {
      titleRu: 'Грунтовые заключения',
      titleEn: 'Soil Reports',
      descRu: 'Характеристики грунтов для проектирования',
      descEn: 'Soil properties for design purposes',
    },
  ],
  caseStudy: {
    titleRu: 'Аналитическое сопровождение ГРР в Якутии',
    titleEn: 'Analytical Support of GRR in Yakutia',
    clientRu: 'Полюс Алдан',
    clientEn: 'Polyus Aldan',
    year: '2024',
    volumeRu: '8 500 проб на ICP-MS, 2 100 проб пробирный анализ, 450 шлифов',
    volumeEn: '8,500 ICP-MS samples, 2,100 fire assay samples, 450 thin sections',
    resultRu: 'Выявлено рудное тело мощностью 12 м с содержанием Au до 8 г/т. Данные использованы для подсчёта запасов.',
    resultEn: 'Identified ore body 12m thick with Au grades up to 8 g/t. Data used for resource estimation.',
  },
  caseImage: '/images/rocks.jpg',
  regions: [
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Иркутская область', en: 'Irkutsk Region' },
    { ru: 'Магаданская область', en: 'Magadan Region' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
    { ru: 'Таймыр', en: 'Taimyr' },
  ],
  stats: [
    { value: '25 000', labelRu: 'проб в год', labelEn: 'samples/year' },
    { value: '45', labelRu: 'элементов ICP-MS', labelEn: 'ICP-MS elements' },
    { value: '1', labelRu: 'аккредитация', labelEn: 'accreditation' },
    { value: '< 5%', labelRu: 'погрешность', labelEn: 'error margin' },
  ],
}

export function LabContent() {
  return <ServicePageTemplate data={data} />
}