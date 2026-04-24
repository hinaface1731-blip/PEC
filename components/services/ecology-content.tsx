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
  equipment: [
    {
      titleRu: 'Пробоотбор',
      titleEn: 'Sampling',
      items: ['Пробоотборники почв', 'Батометры', 'Аспираторы', 'Дозиметры'],
    },
    {
      titleRu: 'Лабораторный анализ',
      titleEn: 'Laboratory Analysis',
      items: ['Хроматографы', 'Спектрофотометры', 'pH-метры', 'Кондуктометры'],
    },
    {
      titleRu: 'Нормативы',
      titleEn: 'Standards',
      items: ['ГОСТ 17.4.3.02-85', 'ГОСТ 17.5.3.04-83', 'СанПиН 2.1.3684-21', 'Приказ Минприроды № 525'],
    },
    {
      titleRu: 'Рекультивация',
      titleEn: 'Reclamation',
      items: ['Бульдозеры', 'Экскаваторы', 'Сеялки', 'Семена местных трав'],
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
    },
    {
      titleRu: 'Материалы ОВОС',
      titleEn: 'EIA Materials',
      descRu: 'Полный комплект документации для ГЭЭ',
      descEn: 'Complete documentation package for SER',
    },
    {
      titleRu: 'Проект рекультивации',
      titleEn: 'Reclamation Project',
      descRu: 'Согласованный проект восстановления земель',
      descEn: 'Approved land restoration project',
    },
    {
      titleRu: 'Акт рекультивации',
      titleEn: 'Reclamation Act',
      descRu: 'Документ о завершении работ по восстановлению',
      descEn: 'Document on completion of restoration works',
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