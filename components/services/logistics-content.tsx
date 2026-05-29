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
  heroImage: '/images/two.JPG',
  reverse: true,
  
  sectionTitleRu: 'Полный комплекс логистических услуг',
  sectionTitleEn: 'Full range of logistics services',
  sectionDescRu: 'Доставка грузов в Арктику и Сибирь, снабжение удалённых объектов',
  sectionDescEn: 'Cargo delivery to Arctic and Siberia, remote site supply',
  
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
    '/images/one.JPG',
    '/images/two.JPG',
    '/images/three.JPG',
    '/images/four.jpg',
    '/images/five.jpg',
  ],
  
  results: [
    {
      titleRu: 'Доставленные грузы',
      titleEn: 'Delivered Cargo',
      descRu: 'Своевременная доставка материалов и оборудования на объекты',
      descEn: 'Timely delivery of materials and equipment to sites',
      image: '/images/results/delivered-cargo.jpg',
    },
    {
      titleRu: 'Снабжение объектов',
      titleEn: 'Site Supply',
      descRu: 'Бесперебойное обеспечение ГСМ, продуктами, запчастями',
      descEn: 'Uninterrupted supply of fuel, food, spare parts',
      image: '/images/results/site-supply.jpg',
    },
    {
      titleRu: 'Складской учёт',
      titleEn: 'Warehouse Accounting',
      descRu: 'Полная отчётность по движению товарно-материальных ценностей',
      descEn: 'Complete reporting on inventory movement',
      image: '/images/results/warehouse-accounting.jpg',
    },
    {
      titleRu: 'Транспортная документация',
      titleEn: 'Transport Documentation',
      descRu: 'Оформление всех разрешений, накладных, путевых листов',
      descEn: 'Permits, waybills, travel sheets preparation',
      image: '/images/results/transport-docs.jpg',
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