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
  equipment: [
    {
      titleRu: 'Пробоотбор',
      titleEn: 'Sampling',
      items: [
        { name: 'Пробоотборники почв', specs: ['Нержавеющая сталь', 'Объём 100-500 см³', 'ГОСТ 17.4.4.02'], image: '/images/equipment/soil-sampler.jpg' },
        { name: 'Батометры', specs: ['Объём 1-5 л', 'Нержавеющая сталь', 'Глубина до 50 м'], image: '/images/equipment/bathometer.jpg' },
        { name: 'Аспираторы', specs: ['Производительность 20 л/мин', 'Аккумулятор 12 ч', 'Погрешность ±5%'], image: '/images/equipment/aspirator.jpg' },
        { name: 'Дозиметры', specs: ['Диапазон 0.01-1000 мкЗв/ч', 'Погрешность ±15%', 'Температура -20..+50°C'], image: '/images/equipment/dosimeter.jpg' },
      ]
    },
    {
      titleRu: 'Лабораторный анализ',
      titleEn: 'Laboratory Analysis',
      items: [
        { name: 'Хроматографы', specs: ['Газовый хроматограф', 'Предел обнаружения 0.1 мг/м³', 'Автопробоотборник'], image: '/images/equipment/chromatograph.jpg' },
        { name: 'Спектрофотометры', specs: ['Диапазон 190-1100 нм', 'Ширина щели 2 нм', 'Двухлучевой'], image: '/images/equipment/spectrophotometer.jpg' },
        { name: 'pH-метры', specs: ['Диапазон 0-14 pH', 'Точность ±0.01 pH', 'Автокалибровка'], image: '/images/equipment/ph-meter.jpg' },
        { name: 'Кондуктометры', specs: ['Диапазон 0-200 мСм/см', 'Точность ±1%', 'Компенсация температуры'], image: '/images/equipment/conductometer.jpg' },
      ]
    },
    {
      titleRu: 'Нормативы',
      titleEn: 'Standards',
      items: [
        { name: 'ГОСТ 17.4.3.02-85', specs: ['Охрана природы', 'Почвы. Требования к отбору проб', 'Дата введения: 1986-01-01'], image: '/images/equipment/gost.jpg' },
        { name: 'ГОСТ 17.5.3.04-83', specs: ['Охрана природы', 'Земли. Рекультивация', 'Технические требования'], image: '/images/equipment/gost.jpg' },
        { name: 'СанПиН 2.1.3684-21', specs: ['Санитарные правила', 'ПДК в почвах, воде, воздухе', 'Актуальная редакция'], image: '/images/equipment/sanpin.jpg' },
        { name: 'Приказ Минприроды № 525', specs: ['Порядок рекультивации', 'Согласование отчёта', 'Формы документов'], image: '/images/equipment/document.jpg' },
      ]
    },
    {
      titleRu: 'Рекультивация',
      titleEn: 'Reclamation',
      items: [
        { name: 'Бульдозеры', specs: ['Мощность 300 л.с.', 'Глубина подъема отвала 1.5 м', 'Работа при -50°C'], image: '/images/equipment/bulldozer.jpg' },
        { name: 'Экскаваторы', specs: ['Вместимость ковша 2.5 м³', 'Глубина копания 5 м', 'Полный привод'], image: '/images/equipment/excavator.jpg' },
        { name: 'Сеялки', specs: ['Ширина захвата 3 м', 'Емкость бункера 500 кг', 'Регулировка глубины'], image: '/images/equipment/seeder.jpg' },
        { name: 'Семена местных трав', specs: ['Сорта: овсяница, мятлик', 'Всхожесть > 80%', 'Адаптированы к северу'], image: '/images/equipment/seeds.jpg' },
      ]
    },
  ],
  
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
      descRu: "Акты, фотофиксация и результаты контрольных обследований, если ПЭК ведёт этап сдачи.",
      descEn: "Acceptance records, photographs, and follow-up survey results where PEC handles handover.",
    },
  ],
  
  
  projectExample: {
    id: 19,
    workRu: "Поисковые работы включали в себя комплексные геоэкологические работы. По результатам были подготовлены материалы: карты, базы данных с проанализироваными пробами и рекомендации по работе.",
    workEn: "The prospecting program at Chernoye included comprehensive geoenvironmental surveys. PEC produced maps, compiled databases of sample analysis results, and prepared recommendations for further work.",
  },

  regions: [
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Красноярский край', en: 'Krasnoyarsk Region' },
    { ru: 'Хабаровский край', en: 'Khabarovsk Krai' },
  ],
}

export function EcologyContent() {
  return <ServicePageTemplate data={data} />
}
