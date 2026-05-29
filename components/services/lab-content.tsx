'use client'

import { ServicePageTemplate } from './service-page-template'
import { FlaskConical, Microscope, TestTube, FileText, Activity, BarChart3 } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: FlaskConical,
  titleRu: 'Лабораторные исследования',
  titleEn: 'Laboratory Research',
  descRu: 'Собственная полевая лаборатория с современным аналитическим оборудованием. Полный спектр геохимических, минералогических и физико-механических исследований.',
  descEn: 'In-house accredited laboratory with modern analytical equipment. Full range of geochemical, mineralogical and physical-mechanical research.',
  heroImage: '/images/i.jpg',
  reverse: false,
  
  sectionTitleRu: 'Полный комплекс лабораторных исследований',
  sectionTitleEn: 'Full range of laboratory research',
  sectionDescRu: 'ICP-MS, пробирный анализ, минералогия, физико-механические испытания',
  sectionDescEn: 'ICP-MS, fire assay, mineralogy, physical and mechanical testing',
  
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
      icon: Microscope,
      methods: [
        { ru: 'Гравитационное обогащение', en: 'Gravity concentration' },
        { ru: 'Минералогические исследования', en: 'Mineralogical studies' },
        { ru: 'Изготовление шлифов и аншлифов', en: 'Thin and polished section preparation' },
      ]
    },
    {
      titleRu: 'Физико-механические испытания',
      titleEn: 'Physical-Mechanical Testing',
      icon: Activity,
      methods: [
        { ru: 'Физико-механические испытания грунтов', en: 'Soil physical-mechanical testing' },
        { ru: 'Гранулометрический анализ', en: 'Grain size analysis' },
        { ru: 'Компрессионные испытания', en: 'Compression testing' },
        { ru: 'Испытания на сдвиг', en: 'Shear testing' },
      ]
    },
  ],
  methodsImage: '/images/lab.jpg',
  
  // ✅ Новая структура оборудования
  equipment: [
    {
      titleRu: 'Спектрометрия',
      titleEn: 'Spectrometry',
      items: [
        { name: 'Agilent 7900 ICP-MS', specs: ['45 элементов', 'Чувствительность ppt', 'Автосамплер'], image: '/images/equipment/icp-ms.jpg' },
        { name: 'Атомно-абсорбционный спектрометр AAS', specs: ['Au, Ag, Cu, Pb, Zn', 'Пламенный/графит', 'Точность 0.001 г/т'], image: '/images/equipment/aas.jpg' },
        { name: 'XRF анализатор Olympus', specs: ['Элементы от Na до U', 'Портативный', '2-5 мин анализ'], image: '/images/equipment/xrf.jpg' },
      ]
    },
    {
      titleRu: 'Пробирная лаборатория',
      titleEn: 'Fire Assay Lab',
      items: [
        { name: 'Пробирные печи', specs: ['Температура до 1200°C', 'Точный контроль', '6 тиглей'], image: '/images/equipment/furnace.jpg' },
        { name: 'Муфельные печи', specs: ['Температура до 1100°C', 'Программируемый нагрев', 'Безопасность'], image: '/images/equipment/muffle.jpg' },
        { name: 'Весы аналитические', specs: ['Точность 0.0001 г', 'Калибровка', 'Ветрозащита'], image: '/images/equipment/scales.jpg' },
      ]
    },
    {
      titleRu: 'Минералогия',
      titleEn: 'Mineralogy',
      items: [
        { name: 'Рентгеновский дифрактометр', specs: ['Фазовый анализ', 'Количественный анализ', 'Порошковая дифракция'], image: '/images/equipment/xrd.jpg' },
        { name: 'Поляризационные микроскопы', specs: ['Увеличение до 1000x', 'Поляризация', 'Встроенная камера'], image: '/images/equipment/microscope.jpg' },
        { name: 'Электронный микроскоп', specs: ['Увеличение до 10000x', 'EDS анализ', 'Высокое разрешение'], image: '/images/equipment/sem.jpg' },
      ]
    },
    {
      titleRu: 'Грунтовая лаборатория',
      titleEn: 'Soil Lab',
      items: [
        { name: 'Компрессионные приборы', specs: ['Нагрузка до 400 кПа', 'Фиксация осадки', 'Образцы 50-100 мм'], image: '/images/equipment/compressometer.jpg' },
        { name: 'Сдвиговые приборы', specs: ['Сдвиг до 200 кПа', 'Прямой срез', 'Автоматическая запись'], image: '/images/equipment/shear.jpg' },
        { name: 'Трёхосные приборы', specs: ['Консолидация', 'Нестабилизированный сдвиг', 'Поровое давление'], image: '/images/equipment/triaxial.jpg' },
      ]
    },
    {
      titleRu: 'Пробоподготовка',
      titleEn: 'Sample Preparation',
      items: [
        { name: 'Щековые дробилки', specs: ['Дробление до 2 мм', 'Производительность 200 кг/ч', 'Регулировка зазора'], image: '/images/equipment/crusher.jpg' },
        { name: 'Истиратели', specs: ['Истирание до 0.05 мм', 'Вибрационный', 'Ёмкость 100-500 г'], image: '/images/equipment/grinder.jpg' },
        { name: 'Делители проб', specs: ['Ротационный', 'Коэффициент деления 1/2-1/32', 'Нержавеющая сталь'], image: '/images/equipment/splitter.jpg' },
      ]
    },
    {
      titleRu: 'Контроль качества',
      titleEn: 'Quality Control',
      items: [
        { name: 'Стандартные образцы', specs: ['СОП золота', 'СОП меди', 'Аттестованные'], image: '/images/equipment/standards.jpg' },
        { name: 'Дубликаты', specs: ['Каждые 20 проб', 'Контроль воспроизводимости', 'Статистика'], image: '/images/equipment/duplicates.jpg' },
        { name: 'Холостые пробы', specs: ['Контроль загрязнения', 'Чистые реагенты', 'Фоновые значения'], image: '/images/equipment/blanks.jpg' },
      ]
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
      image: '/images/results/protocols.jpg',
    },
    {
      titleRu: 'Цифровые данные',
      titleEn: 'Digital Data',
      descRu: 'Результаты в Excel, CSV для импорта в базы',
      descEn: 'Results in Excel, CSV for database import',
      image: '/images/results/digital-data.jpg',
    },
    {
      titleRu: 'Минералогические заключения',
      titleEn: 'Mineralogical Reports',
      descRu: 'Описания шлифов, фотографии, интерпретация',
      descEn: 'Thin section descriptions, photos, interpretation',
      image: '/images/results/mineralogy.jpg',
    },
    {
      titleRu: 'Грунтовые заключения',
      titleEn: 'Soil Reports',
      descRu: 'Характеристики грунтов для проектирования',
      descEn: 'Soil properties for design purposes',
      image: '/images/results/soil-report.jpg',
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