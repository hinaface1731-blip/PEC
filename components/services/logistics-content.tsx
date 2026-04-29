'use client'

import { ServicePageTemplate } from './service-page-template'
import { Truck, Plane, Ship } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Truck,
  titleRu: 'Логистика и снабжение',
  titleEn: 'Logistics & Supply',
  descRu: 'Комплексное логистическое обеспечение геологоразведочных и горных проектов в Арктике и Сибири. Доставка грузов, снабжение удалённых объектов, экспедиционное сопровождение.',
  descEn: 'Comprehensive logistics support for exploration and mining projects in the Arctic and Siberia. Cargo delivery, remote site supply, expedition support.',
  heroImage: '/images/two.JPG',
  reverse: true,
  methods: [
    { ru: 'Доставка грузов в Арктику', en: 'Arctic cargo delivery' },
    { ru: 'Северный завоз', en: 'Northern supply' },
    { ru: 'Снабжение удалённых объектов', en: 'Remote site supply' },
    { ru: 'Экспедиционное сопровождение', en: 'Expedition support' },
    { ru: 'Складское хранение', en: 'Warehousing' },
    { ru: 'Таможенное оформление', en: 'Customs clearance' },
    { ru: 'Транспортная логистика', en: 'Transport logistics' },
    { ru: 'Топливообеспечение', en: 'Fuel supply' },
  ],
  methodsGroups: [
    {
      titleRu: 'Автотранспорт',
      titleEn: 'Road Transport',
      icon: Truck,
      methods: [
        { ru: 'Перевозка грузов по зимникам', en: 'Ice road cargo transport' },
        { ru: 'Вахтовые перевозки персонала', en: 'Shift personnel transport' },
        { ru: 'Доставка техники на тралах', en: 'Heavy equipment transport' },
        { ru: 'Обеспечение удалённых участков', en: 'Remote site supply' },
      ]
    },
    {
      titleRu: 'Авиационное обеспечение',
      titleEn: 'Aviation Support',
      icon: Plane,
      methods: [
        { ru: 'Вертолётные перевозки (Ми-8, Ми-26)', en: 'Helicopter transport' },
        { ru: 'Авиаперевозки грузов (Ту-134, АН-26, ИЛ-76)', en: 'Cargo flights' },
        { ru: 'Поисково-спасательное обеспечение', en: 'SAR support' },
        { ru: 'Аэровизуальные облёты', en: 'Aerial visual surveys' },
      ]
    },
    {
      titleRu: 'Северный завоз',
      titleEn: 'Northern Supply',
      icon: Ship,
      methods: [
        { ru: 'Речные перевозки по Енисею', en: 'River transport on Yenisei' },
        { ru: 'Доставка грузов морским транспортом', en: 'Sea cargo delivery' },
        { ru: 'Завоз на зимовку', en: 'Winter supply delivery' },
        { ru: 'Складское хранение на базах', en: 'Base warehousing' },
      ]
    },
  ],
  methodsImage: '/images/logistics-methods.jpg',
  equipment: [
    {
      titleRu: 'Автопарк',
      titleEn: 'Vehicle Fleet',
      items: ['КАМАЗ (различные модификации)', 'УРАЛ (высокая проходимость)', 'Тягачи с полуприцепами', 'Бензовозы', 'Вахтовые автобусы'],
    },
    {
      titleRu: 'Вездеходная техника',
      titleEn: 'All-terrain Vehicles',
      items: ['ТРЭКОЛ (широкопрофильные)', 'GMC Sierra', 'Снегоболотоходы', 'Гусеничные транспорты'],
    },
    {
      titleRu: 'Складское оборудование',
      titleEn: 'Warehouse Equipment',
      items: ['Погрузчики (вилочные)', 'Краны-манипуляторы', 'Контейнерные площадки', 'Складские модули'],
    },
    {
      titleRu: 'Дополнительно',
      titleEn: 'Additional',
      items: ['Тепловые пушки для прогрева', 'Обогреваемые контейнеры', 'Дизель-генераторы', 'Системы ГЛОНАСС/GPS'],
    },
  ],
  steps: [
    {
      numRu: '01',
      numEn: '01',
      titleRu: 'Планирование',
      titleEn: 'Planning',
      descRu: 'Анализ потребностей, расчёт объёмов, выбор маршрутов и видов транспорта',
      descEn: 'Needs analysis, volume calculation, route and transport selection',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Формирование грузов',
      titleEn: 'Cargo Consolidation',
      descRu: 'Сбор, упаковка, маркировка, консолидация грузов на базе',
      descEn: 'Collection, packaging, labeling, cargo consolidation at base',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Транспортировка',
      titleEn: 'Transportation',
      descRu: 'Доставка грузов всеми видами транспорта, экспедиционное сопровождение',
      descEn: 'Cargo delivery by all transport modes, expedition support',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Складское хранение',
      titleEn: 'Warehousing',
      descRu: 'Приём, учёт, хранение, выдача грузов на объектах',
      descEn: 'Receiving, accounting, storage, cargo issuance at sites',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Отчётность',
      titleEn: 'Reporting',
      descRu: 'Транспортные накладные, акты, товарные отчёты, закрытие документов',
      descEn: 'Waybills, acts, commodity reports, documentation closure',
    },
  ],
  stepImages: [
    '/images/logistics-step1.jpg',
    '/images/logistics-step2.jpg',
    '/images/logistics-step3.jpg',
    '/images/logistics-step4.jpg',
    '/images/logistics-step5.jpg',
  ],
  results: [
    {
      titleRu: 'Доставленные грузы',
      titleEn: 'Delivered Cargo',
      descRu: 'Своевременная доставка материалов и оборудования на объекты',
      descEn: 'Timely delivery of materials and equipment to sites',
    },
    {
      titleRu: 'Снабжение объектов',
      titleEn: 'Site Supply',
      descRu: 'Бесперебойное обеспечение ГСМ, продуктами, запчастями',
      descEn: 'Uninterrupted supply of fuel, food, spare parts',
    },
    {
      titleRu: 'Складской учёт',
      titleEn: 'Warehouse Accounting',
      descRu: 'Полная отчётность по движению товарно-материальных ценностей',
      descEn: 'Complete reporting on inventory movement',
    },
    {
      titleRu: 'Транспортная документация',
      titleEn: 'Transport Documentation',
      descRu: 'Оформление всех разрешений, накладных, путевых листов',
      descEn: 'Permits, waybills, travel sheets preparation',
    },
  ],
  caseStudy: {
    titleRu: 'Северный завоз на Таймыр',
    titleEn: 'Northern Supply to Taimyr',
    clientRu: 'Норникель',
    clientEn: 'Nornickel',
    year: '2024',
    volumeRu: 'Доставлено 5 000 тонн грузов, 300 тонн ГСМ, 50 единиц техники',
    volumeEn: '5,000 tons of cargo, 300 tons of fuel, 50 units of equipment delivered',
    resultRu: 'Все грузы доставлены в установленные сроки. Обеспечена работа 15 удалённых объектов. Потери при транспортировке — менее 1%.',
    resultEn: 'All cargo delivered on schedule. Operations of 15 remote sites supported. Transportation loss less than 1%.',
  },
  caseImage: '/images/logistics-case.jpg',
  regions: [
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Чукотка', en: 'Chukotka' },
    { ru: 'Эвенкия', en: 'Evenkia' },
    { ru: 'Крайний Север', en: 'Far North' },
  ],
  stats: [
    { value: '5 000+ т', labelRu: 'грузов доставлено', labelEn: 'cargo delivered' },
    { value: '15+', labelRu: 'удалённых объектов', labelEn: 'remote sites' },
    { value: '30+', labelRu: 'единиц техники', labelEn: 'vehicles' },
    { value: '100%', labelRu: 'выполнение сроков', labelEn: 'on-time delivery' },
  ],
}

export function LogisticsContent() {
  return <ServicePageTemplate data={data} />
}