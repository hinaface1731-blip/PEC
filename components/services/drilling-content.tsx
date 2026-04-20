'use client'

import { ServicePageTemplate } from './service-page-template'
import { Drill, Droplets, Compass, Thermometer, Ruler, Wrench } from 'lucide-react'

const data = {
  icon: Drill,
  titleRu: 'Буровые работы',
  titleEn: 'Drilling Works',
  descRu: 'Полный комплекс буровых работ для геологоразведки: колонковое бурение с высоким выходом керна, шарошечное бурение, гидрогеологические и инженерные скважины.',
  descEn: 'Full range of drilling services for geological exploration: core drilling with high recovery, rotary drilling, hydrogeological and engineering wells.',
  heroImage: '/images/hero-drilling-image2.jpg',
  reverse: false,
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
  equipment: [
    {
      titleRu: 'Буровые станки',
      titleEn: 'Drilling Rigs',
      items: ['Boart Longyear LF90 (3 ед.) — до 1200 м', 'СКБ-4 (5 ед.) — до 600 м', 'УРБ-2А2 (2 ед.) — шарошечное'],
    },
    {
      titleRu: 'Буровой инструмент',
      titleEn: 'Drilling Tools',
      items: ['Керноприёмные трубы ССК', 'Алмазные коронки', 'Твёрдосплавные коронки', 'Расширители'],
    },
    {
      titleRu: 'Вспомогательное оборудование',
      titleEn: 'Support Equipment',
      items: ['Насосы буровые НБ-32', 'Компрессоры', 'Генераторы', 'Ёмкости для бурового раствора'],
    },
    {
      titleRu: 'Контроль качества',
      titleEn: 'Quality Control',
      items: ['Инклинометры', 'Каверномеры', 'Системы мониторинга параметров бурения'],
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
    '/images/one.jpg',
    '/images/two.jpg',
    '/images/three.jpg',
    '/images/four.jpg',
    '/images/five.jpg',
  ],
  results: [
    {
      titleRu: 'Керн',
      titleEn: 'Core',
      descRu: 'Образцы горных пород для геологического изучения и анализа',
      descEn: 'Rock samples for geological study and analysis',
    },
    {
      titleRu: 'Документация',
      titleEn: 'Documentation',
      descRu: 'Буровые журналы, акты, фото керна, разрезы скважин',
      descEn: 'Drilling logs, reports, core photos, well sections',
    },
    {
      titleRu: 'Каротажные данные',
      titleEn: 'Logging Data',
      descRu: 'Результаты ГИС для интерпретации разреза',
      descEn: 'Well log results for section interpretation',
    },
    {
      titleRu: 'Скважины',
      titleEn: 'Wells',
      descRu: 'Готовые скважины для мониторинга или эксплуатации',
      descEn: 'Completed wells for monitoring or operation',
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
