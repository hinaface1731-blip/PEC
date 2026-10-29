'use client'

import { ServicePageTemplate } from './service-page-template'
import { FlaskConical, Microscope, TestTube, FileText, Activity, BarChart3 } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: FlaskConical,
  titleRu: 'Лабораторные исследования',
  titleEn: 'Laboratory Research',
  descRu: 'Собственная полевая лаборатория: пробоподготовка, рентгенофлуоресцентный анализ и минералогические исследования.',
  descEn: 'In-house field laboratory: sample preparation, X-ray fluorescence analysis and mineralogical studies.',
  heroImage: '/images/i.jpg',
  introRu:
    'Сопровождаем пробу на всём пути: приёмка, сушка, дробление, истирание, квартование, подготовка навесок и анализ. Контроль качества встроен в процесс: дубликаты, холостые пробы, стандартные образцы. Результаты выдаём протоколами и цифровыми данными, готовыми для загрузки в базу и использования при подсчёте запасов.',
  introEn:
    'We handle the sample along its whole path: reception, drying, crushing, grinding, splitting, aliquot preparation and analysis. Quality control is built into the process: duplicates, blanks and certified reference materials. Results are issued as protocols and digital data ready for loading into a database and use in resource estimation.',

  reverse: false,
  
  sectionTitleRu: 'Возможности лаборатории',
  sectionTitleEn: 'Laboratory capabilities',
  sectionDescRu: 'Пробоподготовка, рентгенофлуоресцентный анализ, минералогия',
  sectionDescEn: 'Sample preparation, X-ray fluorescence analysis, mineralogy',
  
  methods: [
    { ru: 'Сушка, дробление, истирание, квартование', en: 'Drying, crushing, grinding, splitting' },
    { ru: 'Отбор навесок и подготовка проб к внешнему анализу', en: 'Aliquot selection and preparation for external analysis' },
    { ru: 'Рентгенофлуоресцентный анализ (XRF)', en: 'X-ray fluorescence analysis (XRF)' },
    { ru: 'Гравитационное обогащение', en: 'Gravity concentration' },
    { ru: 'Минералогические исследования', en: 'Mineralogical studies' },
    { ru: 'Изготовление и описание шлифов и аншлифов', en: 'Thin and polished section preparation and description' },
  ],
  methodsGroups: [
    {
      titleRu: 'Пробоподготовка',
      titleEn: 'Sample Preparation',
      icon: TestTube,
      methods: [
        { ru: 'Сушка, дробление, истирание, квартование', en: 'Drying, crushing, grinding, splitting' },
        { ru: 'Отбор навесок и подготовка проб к внешнему анализу', en: 'Aliquot selection and preparation for external analysis' },
      ]
    },
    {
      titleRu: 'Экспресс-анализ',
      titleEn: 'Rapid Analysis',
      icon: FlaskConical,
      methods: [
        { ru: 'Рентгенофлуоресцентный анализ (XRF), элементы от Na до U', en: 'X-ray fluorescence analysis (XRF), elements from Na to U' },
      ]
    },
    {
      titleRu: 'Минералогические исследования',
      titleEn: 'Mineralogical Studies',
      icon: Microscope,
      methods: [
        { ru: 'Гравитационное обогащение', en: 'Gravity concentration' },
        { ru: 'Минералогические исследования', en: 'Mineralogical studies' },
        { ru: 'Изготовление и описание шлифов и аншлифов', en: 'Thin and polished section preparation and description' },
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
    '/images/site/sample-intake.jpg',
    '/images/site/core-cutting.jpg',
    '/images/site/lab-analysis.jpg',
    '/images/site/lab-qc.jpg',
    '/images/site/desk-documents.jpg',
  ],
  
  results: [
    {
      titleRu: 'Протоколы анализов',
      titleEn: 'Analysis Protocols',
      descRu: 'Протоколы испытаний по каждой партии проб',
      descEn: 'Test protocols for each sample batch',
      image: '/images/results/geootchet.jpg',
    },
    {
      titleRu: 'Цифровые данные',
      titleEn: 'Digital Data',
      descRu: 'Результаты в Excel, CSV для импорта в базы',
      descEn: 'Results in Excel, CSV for database import',
      image: '/images/results/geobaza.jpg',
    },
    {
      titleRu: 'Минералогические заключения',
      titleEn: 'Mineralogical Reports',
      descRu: 'Описания шлифов, фотографии, интерпретация',
      descEn: 'Thin section descriptions, photos, interpretation',
      image: '/images/site/rock-samples.jpg',
    },
    {
      titleRu: 'Подготовленные пробы',
      titleEn: 'Prepared Samples',
      descRu: 'Дроблёные и истёртые навески, готовые к отправке на анализ',
      descEn: 'Crushed and pulverized aliquots ready for analysis',
      image: '/images/site/sample-prep.jpg',
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
  caseImage: '/images/site/core-cutting.jpg',
  
  regions: [
    { ru: 'Якутия', en: 'Yakutia' },
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