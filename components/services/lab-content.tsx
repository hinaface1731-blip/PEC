'use client'

import { ServicePageTemplate } from './service-page-template'
import { ZolotinkaSection } from './zolotinka-section'
import { FlaskConical, Microscope, TestTube } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: FlaskConical,
  titleRu: 'Лабораторные исследования',
  titleEn: 'Laboratory Testing',
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
      image: '/images/work-stage-illustrations/lab.webp',
      titleRu: 'Приёмка проб',
      titleEn: 'Sample Reception',
      descRu: 'Регистрация, взвешивание, сушка, маркировка',
      descEn: 'Registration, weighing, drying, labeling',
    },
    {
      image: '/images/work-stage-illustrations/preparation.webp',
      titleRu: 'Пробоподготовка',
      titleEn: 'Sample Preparation',
      descRu: 'Дробление, истирание, квартование, отбор навесок',
      descEn: 'Crushing, grinding, splitting, aliquot selection',
    },
    {
      image: '/images/work-stage-illustrations/microscopy.webp',
      titleRu: 'Анализ',
      titleEn: 'Analysis',
      descRu: 'Выполнение определений согласно методикам',
      descEn: 'Determinations according to methods',
    },
    {
      image: '/images/work-stage-illustrations/core.webp',
      titleRu: 'Контроль качества',
      titleEn: 'Quality Control',
      descRu: 'Внутренний и внешний контроль, CRM, дубликаты',
      descEn: 'Internal and external control, CRM, duplicates',
    },
    {
      image: '/images/work-stage-illustrations/reporting.webp',
      titleRu: 'Отчётность',
      titleEn: 'Reporting',
      descRu: 'Выдача протоколов, сертификатов, цифровых данных',
      descEn: 'Issuance of protocols, certificates, digital data',
    },
  ],
  results: [
    {
      titleRu: "Реестр принятых проб",
      titleEn: "Sample receipt register",
      descRu: "Соответствие номеров заказчика и лаборатории, состав и регистрация партии.",
      descEn: "Client-to-laboratory sample ID mapping, batch contents, and receipt records.",
    },
    {
      titleRu: "Подготовленные навески и дубликаты",
      titleEn: "Prepared aliquots and duplicates",
      descRu: "Дроблёный или истёртый материал в маркированной упаковке, дубликаты или остатки по заданию.",
      descEn: "Crushed or pulverized material in labeled containers, with duplicates or retained material as specified.",
    },
    {
      titleRu: "Протоколы анализов",
      titleEn: "Analytical certificates",
      descRu: "Результаты по пробам с указанием метода, единиц измерения и пределов определения, где применимо.",
      descEn: "Sample results with methods, units, and detection limits where applicable.",
    },
    {
      titleRu: "Результаты рентгенофлуоресцентного анализа",
      titleEn: "XRF results",
      descRu: "Данные по элементному составу образцов в рамках согласованного перечня определений.",
      descEn: "Elemental composition data for the agreed set of determinations.",
    },
    {
      titleRu: "Шлифы и минералогические заключения",
      titleEn: "Thin sections and mineralogical findings",
      descRu: "Петрографические и минеграфические описания, микрофотографии и изготовленные препараты по заданию.",
      descEn: "Petrographic and ore microscopy descriptions, photomicrographs, and prepared sections as specified.",
    },
    {
      titleRu: "Данные контроля качества",
      titleEn: "Quality-control data",
      descRu: "Результаты по стандартным образцам, холостым пробам и дубликатам, предусмотренным программой.",
      descEn: "Results for reference materials, blanks, and duplicates included in the program.",
    },
    {
      titleRu: "Цифровые таблицы",
      titleEn: "Digital tables",
      descRu: "Результаты в Excel или CSV с идентификаторами проб для загрузки в базу данных.",
      descEn: "Results in Excel or CSV with sample identifiers for database import.",
    },
  ],
  
  
  projectExample: {
    id: 9,
    workRu: "На участке выполнили пробоподготовку, аналитические, минеграфические и петрографические исследования. Полевая лаборатория «Золотинка» провела анализ проб с внутрилабораторным контролем качества.",
    workEn: "The program included sample preparation, analytical testing, ore microscopy, and petrographic studies. The Zolotinka field laboratory analyzed samples and carried out internal quality checks.",
  },

  regions: [
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Магаданская область', en: 'Magadan Region' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
    { ru: 'Таймыр', en: 'Taimyr' },
  ],
}

export function LabContent() {
  return <ServicePageTemplate data={data} topSection={<ZolotinkaSection />} />
}
