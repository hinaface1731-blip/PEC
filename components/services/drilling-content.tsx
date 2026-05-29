'use client'

import { ServicePageTemplate } from './service-page-template'
import { Drill, Droplets, Compass, Thermometer, Ruler, Wrench } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Drill,
  titleRu: 'Буровые работы',
  titleEn: 'Drilling Works',
  descRu: 'Полный комплекс буровых работ для геологоразведки: колонковое бурение с высоким выходом керна, шарошечное бурение, гидрогеологические и инженерные скважины.',
  descEn: 'Full range of drilling services for geological exploration: core drilling with high recovery, rotary drilling, hydrogeological and engineering wells.',
  heroImage: '/images/hero-drilling-image2.jpg',
  reverse: false,
  
  sectionTitleRu: 'Полный комплекс буровых работ',
  sectionTitleEn: 'Full range of drilling works',
  sectionDescRu: 'Колонковое бурение, шарошечное бурение, гидрогеологические и инженерные скважины',
  sectionDescEn: 'Core drilling, rotary drilling, hydrogeological and engineering wells',
  
  methods: [
    { ru: 'Колонковое бурение ССК до 1200 м', en: 'SSK core drilling up to 1200m' },
    { ru: 'Шарошечное бурение', en: 'Rotary drilling' },
    { ru: 'Бурение с отбором керна', en: 'Core recovery drilling' },
    { ru: 'Наклонно-направленное бурение', en: 'Directional drilling' },
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
        { ru: 'Шарошечное бурение', en: 'Rotary drilling' },
        { ru: 'Бурение с отбором керна', en: 'Core recovery drilling' },
        { ru: 'Наклонно-направленное бурение', en: 'Directional drilling' },
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
        { ru: 'Отбор монолитов', en: 'Undisturbed sample collection' },
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
        { name: 'Инклинометры', specs: ['Точность ±0.1°', 'Зенитный угол 0-180°', 'Магнитный'], image: '/images/equipment/inclinometer.jpg' },
        { name: 'Каверномеры', specs: ['Диапазон 60-300 мм', 'Точность ±2 мм', '4-рукавный'], image: '/images/equipment/caliper.jpg' },
        { name: 'Системы мониторинга параметров', specs: ['Осевая нагрузка', 'Частота вращения', 'Расход промывочной жидкости'], image: '/images/equipment/monitoring.jpg' },
      ]
    },
  ],
  
  steps: [
    {
      numRu: '01',
      numEn: '01',
      titleRu: 'Проектирование',
      titleEn: 'Project Design',
      descRu: 'Разработка ГТН, выбор конструкции скважин, расчёт параметров',
      descEn: 'Technical design, well construction selection, parameter calculation',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Мобилизация',
      titleEn: 'Mobilization',
      descRu: 'Доставка оборудования, монтаж буровой установки',
      descEn: 'Equipment delivery, drilling rig installation',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Бурение',
      titleEn: 'Drilling',
      descRu: 'Проходка скважины с отбором керна и контролем параметров',
      descEn: 'Well drilling with core recovery and parameter monitoring',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Документация керна',
      titleEn: 'Core Documentation',
      descRu: 'Геологическая документация, маркировка, фотографирование',
      descEn: 'Geological documentation, marking, photography',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Завершение работ',
      titleEn: 'Completion',
      descRu: 'Каротаж, тампонаж, ликвидация или обустройство скважины',
      descEn: 'Logging, cementing, well abandonment or completion',
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
      titleRu: 'Керн',
      titleEn: 'Core',
      descRu: 'Образцы горных пород для геологического изучения и анализа',
      descEn: 'Rock samples for geological study and analysis',
      image: '/images/results/core-sample.jpg',
    },
    {
      titleRu: 'Документация',
      titleEn: 'Documentation',
      descRu: 'Буровые журналы, акты, фото керна, разрезы скважин',
      descEn: 'Drilling logs, reports, core photos, well sections',
      image: '/images/results/drilling-docs.jpg',
    },
    {
      titleRu: 'Каротажные данные',
      titleEn: 'Logging Data',
      descRu: 'Результаты ГИС для интерпретации разреза',
      descEn: 'Well log results for section interpretation',
      image: '/images/results/logging-data.jpg',
    },
    {
      titleRu: 'Скважины',
      titleEn: 'Wells',
      descRu: 'Готовые скважины для мониторинга или эксплуатации',
      descEn: 'Completed wells for monitoring or operation',
      image: '/images/results/wells.jpg',
    },
  ],
  
  caseStudy: {
    titleRu: 'Бурение на Марсианских площадях',
    titleEn: 'Drilling on Marsian licenses',
    clientRu: 'Полюс',
    clientEn: 'Polyus',
    year: '2025',
    volumeRu: '78 скважин, общий метраж 12 500 м, глубина до 550 м',
    volumeEn: '78 wells, total footage 12,500m, depth up to 550m',
    resultRu: 'Средний выход керна 96%. Подтверждено продолжение золоторудных зон на глубину. Прирост запасов категории С1.',
    resultEn: 'Average core recovery 96%. Confirmed gold zone extension at depth. C1 category resource increase.',
  },
  caseImage: '/images/Mars.jpg',
  
  regions: [
    { ru: 'Иркутская область', en: 'Irkutsk Region' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Магаданская область', en: 'Magadan Region' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
  ],
  
  stats: [
    { value: '40 000 м', labelRu: 'в год', labelEn: 'per year' },
    { value: '17', labelRu: 'буровых станков', labelEn: 'drilling rigs' },
    { value: '94%', labelRu: 'выход керна', labelEn: 'core recovery' },
    { value: '1 200 м', labelRu: 'макс. глубина', labelEn: 'max depth' },
  ],
}

export function DrillingContent() {
  return <ServicePageTemplate data={data} />
}