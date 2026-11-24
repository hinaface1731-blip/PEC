'use client'

import { ServicePageTemplate } from './service-page-template'
import { Drill, Droplets, Compass, Thermometer, Ruler, Wrench } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Drill,
  titleRu: 'Буровые работы',
  titleEn: 'Drilling Services',
  descRu: 'Полный комплекс буровых работ для геологоразведки: колонковое бурение с высоким выходом керна, гидрогеологические и инженерные скважины.',
  descEn: 'Full range of drilling services for geological exploration: core drilling with high recovery, rotary drilling, hydrogeological and engineering wells.',
  heroImage: '/images/service-photos/drilling-rig.webp',
  introPhoto: {
    src: '/images/project_taymyr.jpg',
    altRu: 'Буровая бригада у установки зимой',
    altEn: 'A drilling crew working at a rig in winter',
  },
  introRu:
    'Колонковое бурение на твёрдые полезные ископаемые с отбором керна, в том числе в условиях Арктики и Крайнего Севера. Работаем станками разных классов, от лёгких мобильных до установок для глубоких скважин. Бурение сопровождаем геологической документацией и опробованием керна, инклинометрией и каротажем. Заказчик получает не только метраж, но и данные, готовые к интерпретации.',
  introEn:
    'Core drilling for solid minerals with core recovery, including in Arctic and Far North conditions. We operate rigs of different classes, from light mobile units to rigs for deep holes. Drilling is accompanied by geological logging and core sampling, inclinometry and well logging. The client receives not just meters drilled but data ready for interpretation.',

  reverse: false,
  
  sectionTitleRu: 'Полный комплекс буровых работ',
  sectionTitleEn: 'Full range of drilling services',
  sectionDescRu: 'Колонковое бурение, гидрогеологические и инженерные скважины',
  sectionDescEn: 'Core drilling, rotary drilling, hydrogeological and engineering wells',
  
  methods: [
    { ru: 'Колонковое бурение ССК до 1200 м', en: 'SSK core drilling up to 1200m' },
    { ru: 'Бурение с отбором керна', en: 'Core recovery drilling' },
    { ru: 'Гидрогеологические скважины', en: 'Hydrogeological wells' },
    { ru: 'Инженерно-геологические скважины', en: 'Engineering-geological wells' },
    { ru: 'ГТНТ (гидротермальные наблюдения)', en: 'Hydrothermal observations' },
    { ru: 'Термометрия и расходометрия', en: 'Temperature and flow logging' },
    { ru: 'Отбор монолитов', en: 'Undisturbed sample collection' },
    { ru: 'Установка обсадных колонн', en: 'Casing installation' },
    { ru: 'Ликвидационный тампонаж', en: 'Well abandonment cementing' },
  ],
  methodsGroups: [
    {
      titleRu: 'Технологии бурения',
      titleEn: 'Drilling Technologies',
      icon: Drill,
      methods: [
        { ru: 'Колонковое бурение ССК до 1200 м', en: 'SSK core drilling up to 1200m' },
        { ru: 'Бурение с отбором керна', en: 'Core recovery drilling' },
      ]
    },
    {
      titleRu: 'Специализированные скважины',
      titleEn: 'Specialized Wells',
      icon: Droplets,
      methods: [
        { ru: 'Гидрогеологические скважины', en: 'Hydrogeological wells' },
        { ru: 'Инженерно-геологические скважины', en: 'Engineering-geological wells' },
        { ru: 'ГТНТ (гидротермальные наблюдения)', en: 'Hydrothermal observations' },
        { ru: 'Термометрия и расходометрия', en: 'Temperature and flow logging' },
      ]
    },
    {
      titleRu: 'Оснастка и завершение',
      titleEn: 'Completion & Equipment',
      icon: Wrench,
      methods: [
        { ru: 'Установка обсадных колонн', en: 'Casing installation' },
        { ru: 'Ликвидационный тампонаж', en: 'Well abandonment cementing' },
      ]
    },
  ],
  methodsImage: '/images/hero-drilling-image.jpg',
  
  // ✅ Новая структура оборудования
  equipment: [
    {
      titleRu: 'Буровые станки',
      titleEn: 'Drilling Rigs',
      items: [
        { name: 'Boart Longyear LF90', specs: ['Глубина до 1200 м', 'Колонковое бурение', '3 единицы'], image: '/images/equipment/lf90.jpg' },
        { name: 'СКБ-4', specs: ['Глубина до 600 м', 'Колонковое бурение', '5 единиц'], image: '/images/equipment/skb4.jpg' },
        { name: 'УРБ-2А2', specs: ['Шарошечное бурение', 'Глубина до 300 м', '2 единицы'], image: '/images/equipment/urb2a2.jpg' },
      ]
    },
    {
      titleRu: 'Буровой инструмент',
      titleEn: 'Drilling Tools',
      items: [
        { name: 'Керноприёмные трубы ССК', specs: ['Длина 3 м', 'Диаметр 57-146 мм', 'Высокий выход керна'], image: '/images/equipment/ssk-tubes.jpg' },
        { name: 'Алмазные коронки', specs: ['Диаметр 46-146 мм', 'Тип: импрегнированные', 'Ресурс до 200 м'], image: '/images/equipment/diamond-bits.jpg' },
        { name: 'Твёрдосплавные коронки', specs: ['Диаметр 76-190 мм', 'Для мягких пород', 'Ресурс до 150 м'], image: '/images/equipment/carbide-bits.jpg' },
        { name: 'Расширители', specs: ['Диаметр до 190 мм', 'Стабилизация ствола', 'Комплект 3 шт'], image: '/images/equipment/reamers.jpg' },
      ]
    },
    {
      titleRu: 'Вспомогательное оборудование',
      titleEn: 'Support Equipment',
      items: [
        { name: 'Насосы буровые НБ-32', specs: ['Производительность 200 л/мин', 'Давление до 100 атм', '3 единицы'], image: '/images/equipment/pump.jpg' },
        { name: 'Компрессоры', specs: ['Производительность 5 м³/мин', 'Давление 8 атм', 'Пневмобурение'], image: '/images/equipment/compressor.jpg' },
        { name: 'Генераторы', specs: ['Мощность 30 кВт', '380 В', 'Топливный бак 100 л'], image: '/images/equipment/generator.jpg' },
        { name: 'Ёмкости для бурового раствора', specs: ['Объём 10 м³', 'С системой перемешивания', 'Мобильные'], image: '/images/equipment/tank.jpg' },
      ]
    },
    {
      titleRu: 'Контроль качества',
      titleEn: 'Quality Control',
      items: [
        { name: 'Инклинометры', specs: ['Точность ±0.1°', 'Зенитный угол 0-180°', 'Гироскопические'], image: '/images/equipment/inclinometer.jpg' },
        { name: 'Каверномеры', specs: ['Диапазон 60-300 мм', 'Точность ±2 мм', '4-рукавный'], image: '/images/equipment/caliper.jpg' },
        { name: 'Системы мониторинга параметров', specs: ['Осевая нагрузка', 'Частота вращения', 'Расход промывочной жидкости'], image: '/images/equipment/monitoring.jpg' },
      ]
    },
  ],
  
  steps: [
    {
      image: '/images/work-stage-illustrations/planning.webp',
      titleRu: 'Проектирование',
      titleEn: 'Project Design',
      descRu: 'Разработка ГТН, выбор конструкции скважин, расчёт параметров',
      descEn: 'Technical design, well construction selection, parameter calculation',
    },
    {
      image: '/images/work-stage-illustrations/logistics.webp',
      titleRu: 'Мобилизация',
      titleEn: 'Mobilization',
      descRu: 'Доставка оборудования, монтаж буровой установки',
      descEn: 'Equipment delivery, drilling rig installation',
    },
    {
      image: '/images/work-stage-illustrations/drilling.webp',
      titleRu: 'Бурение',
      titleEn: 'Drilling',
      descRu: 'Проходка скважины с отбором керна и контролем параметров',
      descEn: 'Well drilling with core recovery and parameter monitoring',
    },
    {
      image: '/images/work-stage-illustrations/core.webp',
      titleRu: 'Документация керна',
      titleEn: 'Core Documentation',
      descRu: 'Геологическая документация, маркировка, фотографирование',
      descEn: 'Geological documentation, marking, photography',
    },
    {
      image: '/images/work-stage-illustrations/reporting.webp',
      titleRu: 'Завершение работ',
      titleEn: 'Completion',
      descRu: 'Каротаж, тампонаж, ликвидация или обустройство скважины',
      descEn: 'Logging, cementing, well abandonment or completion',
    },
  ],
  results: [
    {
      titleRu: "Скважины по программе",
      titleEn: "Boreholes",
      descRu: "Скважины заданного назначения с фактической глубиной, конструкцией и состоянием устья.",
      descEn: "Boreholes for the specified purpose with actual depths, construction details, and collar condition.",
    },
    {
      titleRu: "Керн в маркированных ящиках",
      titleEn: "Core in labeled boxes",
      descRu: "Уложенный по глубине керн с разделителями рейсов и отметками выхода.",
      descEn: "Depth-ordered core with run blocks and recovery records.",
    },
    {
      titleRu: "Документация и фотографии керна",
      titleEn: "Core records and photographs",
      descRu: "Фотографии ящиков, данные по рейсам и интервальные ведомости при включении документации в объём работ.",
      descEn: "Box photographs, run records, and interval sheets when logging is included in the scope.",
    },
    {
      titleRu: "Буровые журналы и паспорта",
      titleEn: "Drilling logs and completion records",
      descRu: "Фактические интервалы бурения, конструкция скважин, обсадка и журнал выполненных операций.",
      descEn: "Actual drilling intervals, borehole construction, casing, and operation logs.",
    },
    {
      titleRu: "Траектории скважин",
      titleEn: "Borehole trajectories",
      descRu: "Данные инклинометрии и координаты ствола по глубине, если измерения входят в программу.",
      descEn: "Deviation survey data and depth-based trajectory coordinates when surveys are included.",
    },
    {
      titleRu: "Каротаж и испытания",
      titleEn: "Logging and testing",
      descRu: "Кривые каротажа, результаты гидрогеологических наблюдений или испытаний по программе скважины.",
      descEn: "Well logs, hydrogeological observations, or test results as specified for the borehole.",
    },
    {
      titleRu: "Акты завершения работ",
      titleEn: "Completion records",
      descRu: "Акты сдачи, обустройства или ликвидации скважин и сводка фактически выполненных объёмов.",
      descEn: "Handover, completion or abandonment records and a summary of actual work quantities.",
    },
  ],
  
  
  projectExample: {
    id: 12,
    workRu: "Бурение на участке выполнялось с высоким выходом керна и контролем траектории скважин согласно геолого-техническому наряду.",
    workEn: "The drilling program achieved high core recovery and maintained borehole trajectories in line with the drilling specifications.",
  },

  regions: [
    'Республика Саха (Якутия)',
    'Таймыр',
    'Чукотский автономный округ',
    'Магаданская область',
    'Забайкальский край',
    'Красноярский край',
  ],
}

export function DrillingContent() {
  return <ServicePageTemplate data={data} />
}
