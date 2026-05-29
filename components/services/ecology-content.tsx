'use client'

import { ServicePageTemplate } from './service-page-template'
import { Leaf, Droplets, Mountain, Recycle, FileCheck, Building } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Leaf,
  titleRu: 'Экология и рекультивация',
  titleEn: 'Ecology & Reclamation',
  descRu: 'Полный комплекс экологических услуг: от изысканий и ОВОС до технической и биологической рекультивации. Сопровождение проектов в Росприроднадзоре.',
  descEn: 'Full range of environmental services: from surveys and EIA to technical and biological reclamation. Project support at Rosprirodnadzor.',
  heroImage: '/images/ecol.jpg',
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
      numRu: '01',
      numEn: '01',
      titleRu: 'Изыскания',
      titleEn: 'Surveys',
      descRu: 'Полевые работы, отбор проб, лабораторные исследования',
      descEn: 'Field work, sampling, laboratory research',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Оценка воздействия',
      titleEn: 'Impact Assessment',
      descRu: 'Разработка ОВОС, оценка рисков, мероприятия по снижению',
      descEn: 'EIA development, risk assessment, mitigation measures',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Проектирование',
      titleEn: 'Design',
      descRu: 'Проект рекультивации, ПЭМ, проект СЗЗ',
      descEn: 'Reclamation project, environmental measures, SPZ project',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Согласование',
      titleEn: 'Approval',
      descRu: 'Прохождение ГЭЭ, согласование в Росприроднадзоре',
      descEn: 'SER passage, Rosprirodnadzor approval',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Рекультивация',
      titleEn: 'Reclamation',
      descRu: 'Техническая и биологическая рекультивация, мониторинг',
      descEn: 'Technical and biological reclamation, monitoring',
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
      titleRu: 'Отчёт по ИЭИ',
      titleEn: 'EES Report',
      descRu: 'Технический отчёт по инженерно-экологическим изысканиям',
      descEn: 'Technical report on environmental engineering surveys',
      image: '/images/results/ies-report.jpg',
    },
    {
      titleRu: 'Материалы ОВОС',
      titleEn: 'EIA Materials',
      descRu: 'Полный комплект документации для ГЭЭ',
      descEn: 'Complete documentation package for SER',
      image: '/images/results/eia-materials.jpg',
    },
    {
      titleRu: 'Проект рекультивации',
      titleEn: 'Reclamation Project',
      descRu: 'Согласованный проект восстановления земель',
      descEn: 'Approved land restoration project',
      image: '/images/results/reclamation-project.jpg',
    },
    {
      titleRu: 'Акт рекультивации',
      titleEn: 'Reclamation Act',
      descRu: 'Документ о завершении работ по восстановлению',
      descEn: 'Document on completion of restoration works',
      image: '/images/results/reclamation-act.jpg',
    },
  ],
  
  caseStudy: {
    titleRu: 'Рекультивация буровых площадок на Ванкорском месторождении',
    titleEn: 'Reclamation of Drilling Sites at Vankor Field',
    clientRu: 'Роснефть',
    clientEn: 'Rosneft',
    year: '2023-2024',
    volumeRu: '45 буровых площадок, общая площадь 52 га, в т.ч. 38 га тундры',
    volumeEn: '45 drilling sites, total area 52 ha, including 38 ha of tundra',
    resultRu: 'Выполнена техническая и биологическая рекультивация. Восстановлено 38 га тундры. Получены положительные заключения приёмочных комиссий.',
    resultEn: 'Completed technical and biological reclamation. Restored 38 ha of tundra. Received positive acceptance commission conclusions.',
  },
  caseImage: '/images/vankor.jpg',
  
  regions: [
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Ямал', en: 'Yamal' },
    { ru: 'ХМАО', en: 'KhMAO' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Красноярский край', en: 'Krasnoyarsk Region' },
  ],
  
  stats: [
    { value: '30+', labelRu: 'проектов ОВОС', labelEn: 'EIA projects' },
    { value: '250+ га', labelRu: 'рекультивации', labelEn: 'reclamation' },
    { value: '15+', labelRu: 'ГЭЭ пройдено', labelEn: 'SER passed' },
    { value: '38 га', labelRu: 'тундры восстановлено', labelEn: 'tundra restored' },
  ],
}

export function EcologyContent() {
  return <ServicePageTemplate data={data} />
}