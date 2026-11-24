'use client'

import { ServicePageTemplate } from './service-page-template'
import { Truck, Plane, Ship, Warehouse, Fuel, Package, Map, Clock, CheckCircle2 } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Truck,
  titleRu: 'Логистика и снабжение',
  titleEn: 'Logistics & Supply',
  descRu: 'Комплексное логистическое обеспечение геологоразведочных и горных проектов в Арктике и Сибири. Доставка грузов, снабжение удалённых объектов, экспедиционное сопровождение.',
  descEn: 'Comprehensive logistics support for exploration and mining projects in the Arctic and Siberia. Cargo delivery, remote site supply, expedition support.',
  heroImage: '/images/service-photos/logistics-vehicle.webp',
  introPhoto: {
    src: '/images/IMG_0395.JPG',
    altRu: 'Грузовик на барже у берега',
    altEn: 'A truck on a barge by the shore',
  },
   introRu:
    'Организуем доставку людей, техники и грузов на удалённые участки Арктики и Сибири: зимники, вертолётные и авиаперевозки, речной и морской северный завоз, топливообеспечение, складское хранение на базах. Маршруты и сроки планируем под график полевых работ, чтобы буровые, геофизические и горные отряды не простаивали из-за снабжения.',
  introEn:
    'We organize delivery of people, equipment and cargo to remote sites in the Arctic and Siberia: ice roads, helicopter and air transport, river and sea northern supply runs, fuel supply, and warehousing at bases. Routes and timing are planned around the field work schedule so that drilling, geophysical and mining crews are never idle because of supply.',

  reverse: true,
  
  sectionTitleRu: 'Полный комплекс логистических услуг',
  sectionTitleEn: 'Full range of logistics services',
  sectionDescRu: 'Доставка грузов в Арктику и Сибирь, снабжение удалённых объектов',
  sectionDescEn: 'Cargo delivery to Arctic and Siberia, remote site supply',
  
  methods: [
    { ru: 'Доставка грузов в Заполярье', en: 'Arctic cargo delivery' },
    { ru: 'Снабжение удалённых объектов', en: 'Remote site supply' },
    { ru: 'Экспедиционное сопровождение', en: 'Expedition support' },
    { ru: 'Складское хранение', en: 'Warehousing' },
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
      titleRu: 'Северный завоз',
      titleEn: 'Northern Supply',
      icon: Ship,
      methods: [
        { ru: 'Завоз на зимовку', en: 'Winter supply delivery' },
        { ru: 'Складское хранение на базах', en: 'Base warehousing' },
      ]
    },
  ],
  methodsImage: '/images/site/loading-crane.jpg',
  
  // ✅ Новая структура оборудования
  
  steps: [
    {
      image: '/images/work-stage-illustrations/planning.webp',
      titleRu: 'Планирование',
      titleEn: 'Planning',
      descRu: 'Анализ потребностей, расчёт объёмов, выбор маршрутов и видов транспорта',
      descEn: 'Needs analysis, volume calculation, route and transport selection',
    },
    {
      image: '/images/work-stage-illustrations/logistics.webp',
      titleRu: 'Формирование грузов',
      titleEn: 'Cargo Consolidation',
      descRu: 'Сбор, упаковка, маркировка, консолидация грузов на базе',
      descEn: 'Collection, packaging, labeling, cargo consolidation at base',
    },
    {
      image: '/images/work-stage-illustrations/transport.webp',
      titleRu: 'Транспортировка',
      titleEn: 'Transportation',
      descRu: 'Доставка грузов всеми видами транспорта, экспедиционное сопровождение',
      descEn: 'Cargo delivery by all transport modes, expedition support',
    },
    {
      image: '/images/work-stage-illustrations/camp.webp',
      titleRu: 'Складское хранение',
      titleEn: 'Warehousing',
      descRu: 'Приём, учёт, хранение, выдача грузов на объектах',
      descEn: 'Receiving, accounting, storage, cargo issuance at sites',
    },
    {
      image: '/images/work-stage-illustrations/reporting.webp',
      titleRu: 'Отчётность',
      titleEn: 'Reporting',
      descRu: 'Транспортные накладные, акты, товарные отчёты, закрытие документов',
      descEn: 'Waybills, acts, commodity reports, documentation closure',
    },
  ],
  results: [
    {
      titleRu: "План завоза",
      titleEn: "Mobilization plan",
      descRu: "Согласованные маршруты, виды транспорта, сроки и точки передачи грузов.",
      descEn: "Agreed routes, modes of transport, schedules, and handover points.",
    },
    {
      titleRu: "Сформированные грузовые партии",
      titleEn: "Consolidated shipments",
      descRu: "Упакованные и промаркированные грузы с реестром мест и параметрами отправлений.",
      descEn: "Packed and labeled consignments with package lists and shipment details.",
    },
    {
      titleRu: "Доставленные грузы и техника",
      titleEn: "Delivered cargo and equipment",
      descRu: "Материалы, оборудование и техника, переданные в согласованной точке на объекте.",
      descEn: "Materials, equipment, and vehicles handed over at the agreed site location.",
    },
    {
      titleRu: "Снабжение полевых объектов",
      titleEn: "Field site supplies",
      descRu: "Поставки топлива, продуктов, расходных материалов и запчастей по графику работ.",
      descEn: "Fuel, food, consumables, and spare parts delivered to the work schedule.",
    },
    {
      titleRu: "Складское хранение и выдача",
      titleEn: "Warehousing and issue records",
      descRu: "Учёт поступления, остатков, перемещений и выдачи материалов на базе.",
      descEn: "Records of materials received, held, transferred, and issued at the base.",
    },
    {
      titleRu: "Перевозочные документы",
      titleEn: "Shipping documentation",
      descRu: "Накладные, грузовые ведомости и акты приёма-передачи по согласованной схеме перевозки.",
      descEn: "Waybills, manifests, and handover records for the agreed transport arrangements.",
    },
    {
      titleRu: "Отчёт о выполнении поставок",
      titleEn: "Delivery report",
      descRu: "Сводка рейсов и фактически доставленных грузов, возврат и вывоз при включении в договор.",
      descEn: "Summary of trips and actual deliveries, including returns and demobilization where contracted.",
    },
  ],
  
  
  projectExample: {
    id: 18,
    workRu: "На участок расположеный на крайнем Севере был произведен комплексный и многоэтапный завоз материалов и оборудования для экспедиции. По результатам был успешно организован лагерь и доставлена техника для проведения полевых работ.",
    workEn: "PEC delivered materials and equipment to a remote Far North site in several stages, set up the expedition camp, and supplied the machinery needed for fieldwork.",
  },

  regions: [
    'Таймыр',
    'Республика Саха (Якутия)',
    'Чукотский автономный округ',
    'Эвенкия',
    'Красноярский край',
  ],
}

export function LogisticsContent() {
  return <ServicePageTemplate data={data} />
}
