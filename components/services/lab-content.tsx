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
  introPhoto: {
    src: '/images/site/lab-analysis.jpg',
    altRu: 'Специалист работает за лабораторным оборудованием',
    altEn: 'A specialist working with laboratory equipment',
  },
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
    'Республика Саха (Якутия)',
    'Магаданская область',
    'Забайкальский край',
    'Таймыр',
    'Чукотский автономный округ',
    'Красноярский край',
    'Хабаровский край',
  ],
}

export function LabContent() {
  return <ServicePageTemplate data={data} topSection={<ZolotinkaSection />} />
}
