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
  equipment: [
    {
      titleRu: 'Автопарк',
      titleEn: 'Vehicle Fleet',
      items: [
        { name: 'КАМАЗ', specs: ['Грузоподъемность 10 т', 'Полный привод', 'Работа при -40°C'], image: '/images/equipment/kamaz.jpg' },
        { name: 'УРАЛ', specs: ['Высокая проходимость', 'Грузоподъемность 8 т', 'Шины низкого давления'], image: '/images/equipment/ural.jpg' },
        { name: 'Тягачи с полуприцепами', specs: ['Грузоподъемность 20 т', 'Евро-5', 'Дальность 1000 км'], image: '/images/equipment/tractor.jpg' },
        { name: 'Бензовозы', specs: ['Объём 15 м³', 'Дизельное топливо', 'Подогрев'], image: '/images/equipment/fuel-truck.jpg' },
        { name: 'Вахтовые автобусы', specs: ['Вместимость 20 чел', 'Обогрев', 'Багажное отделение'], image: '/images/equipment/bus.jpg' },
      ]
    },
    {
      titleRu: 'Вездеходная техника',
      titleEn: 'All-terrain Vehicles',
      items: [
        { name: 'ТРЭКОЛ', specs: ['Грузоподъемность 600 кг', 'Широкопрофильные шины', 'Работа при -50°C'], image: '/images/equipment/trekol.jpg' },
        { name: 'GMC Sierra', specs: ['Полный привод', 'Грузоподъемность 1.5 т', 'Кунг для оборудования'], image: '/images/equipment/gmc.jpg' },
        { name: 'Снегоболотоходы', specs: ['Гусеничный', 'Грузоподъемность 300 кг', 'Проходимость'], image: '/images/equipment/snowmobile.jpg' },
        { name: 'Гусеничные транспорты', specs: ['Грузоподъемность 5 т', 'Низкое давление', 'Арктическое исполнение'], image: '/images/equipment/tracked.jpg' },
      ]
    },
    {
      titleRu: 'Складское оборудование',
      titleEn: 'Warehouse Equipment',
      items: [
        { name: 'Погрузчики (вилочные)', specs: ['Грузоподъемность 2 т', 'Высота подъёма 4 м', 'Дизель'], image: '/images/equipment/forklift.jpg' },
        { name: 'Краны-манипуляторы', specs: ['Грузоподъемность 3 т', 'Вылет стрелы 8 м', 'На шасси КАМАЗ'], image: '/images/equipment/crane.jpg' },
        { name: 'Контейнерные площадки', specs: ['Вместимость 20 контейнеров', 'Охраняемая территория', 'Освещение'], image: '/images/equipment/container-yard.jpg' },
        { name: 'Складские модули', specs: ['Отапливаемые', 'Площадь 100-500 м²', 'Быстровозводимые'], image: '/images/equipment/warehouse-module.jpg' },
      ]
    },
    {
      titleRu: 'Дополнительное оборудование',
      titleEn: 'Additional Equipment',
      items: [
        { name: 'Тепловые пушки', specs: ['Мощность 30 кВт', 'Дизельные', 'Для прогрева техники'], image: '/images/equipment/heat-gun.jpg' },
        { name: 'Обогреваемые контейнеры', specs: ['Температура до +20°C', 'Объём 20 футов', 'Автономные'], image: '/images/equipment/heated-container.jpg' },
        { name: 'Дизель-генераторы', specs: ['Мощность 50 кВт', '380 В', 'Расход 10 л/ч'], image: '/images/equipment/generator.jpg' },
        { name: 'Системы ГЛОНАСС/GPS', specs: ['Отслеживание в реальном времени', 'Контроль топлива', 'Температурный мониторинг'], image: '/images/equipment/gps.jpg' },
      ]
    },
  ],
  
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
    id: 3,
    image: "/images/service-photos/nevenrekan-camp.webp",
    workRu: "На участке Невенрекан работал полевой лагерь ПЭК для экспедиции. На фото — база на участке.",
    workEn: "PEC operated a field camp for the expedition at Nevenrekan. The photo shows the site camp.",
  },

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
