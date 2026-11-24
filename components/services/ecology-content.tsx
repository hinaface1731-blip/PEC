'use client'

import { ServicePageTemplate } from './service-page-template'
import { Leaf, Droplets, Mountain, Recycle, FileCheck, Building } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Leaf,
  titleRu: 'Экология и рекультивация',
  titleEn: 'Environmental Services & Reclamation',
  descRu: 'Полный комплекс экологических услуг: от изысканий и ОВОС до технической и биологической рекультивации. Сопровождение проектов в Росприроднадзоре.',
  descEn: 'Full range of environmental services: from surveys and EIA to technical and biological reclamation. Project support at Rosprirodnadzor.',
  heroImage: '/images/ecol.jpg',
  introPhoto: {
    src: '/images/site/reclamation.jpg',
    altRu: 'Специалист обследует растительность на участке',
    altEn: 'A specialist examines vegetation at a field site',
  },
   introRu:
    'Выполняем инженерно-экологические изыскания для обоснования проектных решений: фоновое состояние воздуха, воды, почв и донных отложений, радиационное обследование. Разрабатываем ОВОС, проекты рекультивации и санитарно-защитных зон, сопровождаем государственную экологическую экспертизу и согласование в Росприроднадзоре, затем выполняем техническую и биологическую рекультивацию.',
  introEn:
    'We carry out environmental engineering surveys to support design decisions: baseline condition of air, water, soils and bottom sediments, and radiation surveys. We develop EIA, reclamation and sanitary protection zone projects, support the state environmental review and approval at Rosprirodnadzor, and then perform technical and biological reclamation.',

  reverse: false,
  
  sectionTitleRu: 'Полный комплекс экологических услуг',
  sectionTitleEn: 'Full range of environmental services',
  sectionDescRu: 'От изысканий и ОВОС до технической и биологической рекультивации',
  sectionDescEn: 'From surveys and EIA to technical and biological reclamation',
  
  methods: [
    { ru: 'Инженерно-экологические изыскания', en: 'Environmental engineering surveys' },
    { ru: 'Отбор проб почв, воды, воздуха', en: 'Soil, water, air sampling' },
    { ru: 'Радиационное обследование', en: 'Radiation survey' },
    { ru: 'Санитарно-химические исследования', en: 'Sanitary-chemical research' },
    { ru: 'Фоновый мониторинг недр', en: 'Background subsoil monitoring' },
    { ru: 'Оценка воздействия на окружающую среду (ОВОС)', en: 'Environmental Impact Assessment (EIA)' },
    { ru: 'Перечень экологических мероприятий (ПЭМ)', en: 'Environmental measures program' },
    { ru: 'Проекты рекультивации земель', en: 'Land reclamation projects' },
    { ru: 'Проекты санитарно-защитных зон (СЗЗ)', en: 'Sanitary protection zone projects' },
    { ru: 'Паспортизация отходов', en: 'Waste certification' },
    { ru: 'Техническая рекультивация', en: 'Technical reclamation' },
    { ru: 'Биологическая рекультивация', en: 'Biological reclamation' },
    { ru: 'Согласование в Росприроднадзоре', en: 'Rosprirodnadzor approval' },
    { ru: 'Государственная экологическая экспертиза (ГЭЭ)', en: 'State Environmental Review (SER)' },
  ],
  methodsGroups: [
    {
      titleRu: 'Экологические изыскания',
      titleEn: 'Environmental Surveys',
      icon: Droplets,
      methods: [
        { ru: 'Инженерно-экологические изыскания', en: 'Environmental engineering surveys' },
        { ru: 'Отбор проб почв, воды, воздуха', en: 'Soil, water, air sampling' },
        { ru: 'Радиационное обследование', en: 'Radiation survey' },
        { ru: 'Санитарно-химические исследования', en: 'Sanitary-chemical research' },
        { ru: 'Фоновый мониторинг недр', en: 'Background subsoil monitoring' },
      ]
    },
    {
      titleRu: 'Проектная документация',
      titleEn: 'Project Documentation',
      icon: FileCheck,
      methods: [
        { ru: 'Оценка воздействия на окружающую среду (ОВОС)', en: 'Environmental Impact Assessment (EIA)' },
        { ru: 'Перечень экологических мероприятий (ПЭМ)', en: 'Environmental measures program' },
        { ru: 'Проекты рекультивации земель', en: 'Land reclamation projects' },
        { ru: 'Проекты санитарно-защитных зон (СЗЗ)', en: 'Sanitary protection zone projects' },
        { ru: 'Паспортизация отходов', en: 'Waste certification' },
      ]
    },
    {
      titleRu: 'Рекультивация и согласование',
      titleEn: 'Reclamation & Approval',
      icon: Recycle,
      methods: [
        { ru: 'Техническая рекультивация', en: 'Technical reclamation' },
        { ru: 'Биологическая рекультивация', en: 'Biological reclamation' },
        { ru: 'Согласование в Росприроднадзоре', en: 'Rosprirodnadzor approval' },
        { ru: 'Государственная экологическая экспертиза (ГЭЭ)', en: 'State Environmental Review (SER)' },
      ]
    },
  ],
  methodsImage: '/images/recul.jpg',
  
  // ✅ Новая структура оборудования
  
  steps: [
    {
      image: '/images/work-stage-illustrations/water-sampling.webp',
      titleRu: 'Изыскания',
      titleEn: 'Surveys',
      descRu: 'Полевые работы, отбор проб, лабораторные исследования',
      descEn: 'Field work, sampling, laboratory research',
    },
    {
      image: '/images/work-stage-illustrations/ecology.webp',
      titleRu: 'Оценка воздействия',
      titleEn: 'Impact Assessment',
      descRu: 'Разработка ОВОС, оценка рисков, мероприятия по снижению',
      descEn: 'EIA development, risk assessment, mitigation measures',
    },
    {
      image: '/images/work-stage-illustrations/planning.webp',
      titleRu: 'Проектирование',
      titleEn: 'Design',
      descRu: 'Проект рекультивации, ПЭМ, проект СЗЗ',
      descEn: 'Reclamation project, environmental measures, SPZ project',
    },
    {
      image: '/images/work-stage-illustrations/reporting.webp',
      titleRu: 'Согласование',
      titleEn: 'Approval',
      descRu: 'Прохождение ГЭЭ, согласование в Росприроднадзоре',
      descEn: 'State environmental review and approval by Rosprirodnadzor',
    },
    {
      image: '/images/work-stage-illustrations/reclamation.webp',
      titleRu: 'Рекультивация',
      titleEn: 'Reclamation',
      descRu: 'Техническая и биологическая рекультивация, мониторинг',
      descEn: 'Technical and biological reclamation, monitoring',
    },
  ],
  results: [
    {
      titleRu: "Отчёт об инженерно-экологических изысканиях",
      titleEn: "Environmental site investigation report",
      descRu: "Исходное состояние среды, описание полевых работ, результаты обследований и приложения.",
      descEn: "Baseline conditions, fieldwork, survey findings, and appendices.",
    },
    {
      titleRu: "Протоколы проб и схемы отбора",
      titleEn: "Sampling records and laboratory results",
      descRu: "Привязка точек и результаты исследований почвы, воды и других сред по программе.",
      descEn: "Sampling locations and results for soil, water, and other media included in the program.",
    },
    {
      titleRu: "Карты и схемы обследования",
      titleEn: "Survey maps and plans",
      descRu: "Схемы маршрутов, точек наблюдений и участков воздействия с текстовыми пояснениями.",
      descEn: "Routes, observation points, and areas of impact with accompanying explanations.",
    },
    {
      titleRu: "Материалы ОВОС",
      titleEn: "Environmental impact assessment materials",
      descRu: "Оценка ожидаемого воздействия, варианты снижения рисков и материалы для предусмотренных процедур.",
      descEn: "Expected impacts, risk mitigation options, and documents for the applicable procedures.",
    },
    {
      titleRu: "Программа экологического контроля",
      titleEn: "Environmental monitoring program",
      descRu: "Точки, показатели и периодичность наблюдений, предусмотренные заданием.",
      descEn: "Monitoring locations, parameters, and frequency established in the scope.",
    },
    {
      titleRu: "Проект рекультивации",
      titleEn: "Land reclamation plan",
      descRu: "Границы восстановления, технические решения, биологические мероприятия и порядок выполнения.",
      descEn: "Restoration boundaries, engineering solutions, revegetation, and work sequence.",
    },
    {
      titleRu: "Материалы для согласований",
      titleEn: "Submission materials",
      descRu: "Комплект документов для подачи и ответы на замечания в пределах поручения.",
      descEn: "Documents for submission and responses to comments within the scope of the assignment.",
    },
    {
      titleRu: "Документация сдачи рекультивации",
      titleEn: "Reclamation handover records",
      descRu: "Акты, фотофиксация и результаты контрольных обследований",
      descEn: "Acceptance records, photographs, and follow-up survey results",
    },
  ],
  
  
  projectExample: {
    id: 19,
    workRu: "Поисковые работы включали в себя комплексные геоэкологические работы. По результатам были подготовлены материалы: карты, базы данных с проанализироваными пробами и рекомендации по работе.",
    workEn: "The prospecting program at Chernoye included comprehensive geoenvironmental surveys. PEC produced maps, compiled databases of sample analysis results, and prepared recommendations for further work.",
  },

  regions: [
    'Таймыр',
    'Республика Саха (Якутия)',
    'Чукотский автономный округ',
    'Красноярский край',
    'Хабаровский край',
  ],
}

export function EcologyContent() {
  return <ServicePageTemplate data={data} />
}
