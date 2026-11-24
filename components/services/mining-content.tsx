'use client'

import { ServicePageTemplate } from './service-page-template'
import { Pickaxe, Truck, HardHat, AlertTriangle, Drill, Zap, Shield, Wrench } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Pickaxe,
  titleRu: 'Горные работы',
  titleEn: 'Mining Services',
  descRu: 'Полный комплекс горных работ: от вскрышных до добычных. Проходка канав и шурфов, вскрышные работы, добыча полезных ископаемых, взрывные работы, отработка россыпей.',
  descEn: 'Full range of mining operations: from overburden to extraction. Trenching and pitting, overburden removal, mineral extraction, blasting, placer mining.',
  heroImage: '/images/mining-hero.jpeg',
  introPhoto: {
    src: '/images/site/bulldozer-chukotka.jpg',
    altRu: 'Бульдозер на участке горных работ',
    altEn: 'A bulldozer at a mining work site',
  },
  introRu:
    'Проходим горные выработки для поисков, оценки и разведки: канавы, траншеи и шурфы, вскрышные работы. Выработки документируются и опробуются геологами, привязываются маркшейдерами, а объёмы подтверждаются замерами. Это снимает разрыв между «прошли» и «можно использовать в подсчёте запасов».',
  introEn:
    'We excavate workings for prospecting, appraisal and exploration: trenches, test pits, overburden removal, preparation and mining of placer deposits, and drilling and blasting. Workings are logged and sampled by geologists, tied in by mine surveyors, and volumes are confirmed by measurements. This closes the gap between "excavated" and "usable in a resource estimate".',

  reverse: false,
  
  sectionTitleRu: 'Полный комплекс горных работ',
  sectionTitleEn: 'Full range of mining services',
  sectionDescRu: 'От вскрышных работ до добычи полезных ископаемых',
  sectionDescEn: 'From overburden to mineral extraction',
  
  methods: [
    { ru: 'Проходка канав', en: 'Trenching' },
    { ru: 'Проходка шурфов', en: 'Pitting' },
    { ru: 'Вскрышные работы', en: 'Overburden removal' },
    { ru: 'Рекультивация нарушенных земель', en: 'Land reclamation' },
  ],
  methodsGroups: [
    {
      titleRu: 'Вскрышные работы',
      titleEn: 'Overburden Operations',
      icon: Truck,
      methods: [
        { ru: 'Снятие плодородного слоя', en: 'Topsoil removal' },
        { ru: 'Выемка вскрышных пород', en: 'Overburden excavation' },
        { ru: 'Транспортировка породы', en: 'Rock transportation' },
        { ru: 'Складирование отвалов', en: 'Dump storage' },
      ]
    },
  ],
  methodsImage: '/images/site/excavator.jpg',
  
  // ✅ Новая структура оборудования
  
  steps: [
    {
      image: '/images/work-stage-illustrations/planning.webp',
      titleRu: 'Планирование',
      titleEn: 'Planning',
      descRu: 'Разработка проекта горных работ, расчёт объёмов, выбор техники',
      descEn: 'Mining project design, volume calculation, equipment selection',
    },
    {
      image: '/images/work-stage-illustrations/field.webp',
      titleRu: 'Подготовка участка',
      titleEn: 'Site Preparation',
      descRu: 'Расчистка территории, снятие плодородного слоя, устройство подъездных путей',
      descEn: 'Site clearing, topsoil removal, access road construction',
    },
    {
      image: '/images/work-stage-illustrations/mining.webp',
      titleRu: 'Вскрышные работы',
      titleEn: 'Overburden',
      descRu: 'Удаление вскрышных пород, формирование уступов, создание рабочей площадки',
      descEn: 'Overburden removal, bench formation, work platform creation',
    },
    {
      image: '/images/work-stage-illustrations/haulage.webp',
      titleRu: 'Добычные работы',
      titleEn: 'Mining',
      descRu: 'Буровзрывные работы, экскавация, погрузка и транспортировка',
      descEn: 'Drilling and blasting, excavation, loading and hauling',
    },
    {
      image: '/images/work-stage-illustrations/reclamation.webp',
      titleRu: 'Заключительный этап',
      titleEn: 'Final Stage',
      descRu: 'Рекультивация нарушенных земель, сдача участка, отчётная документация',
      descEn: 'Land reclamation, site handover, reporting',
    },
  ],
  results: [
    {
      titleRu: "Подготовленный участок",
      titleEn: "Prepared site",
      descRu: "Рабочие площадки, подъезды и подготовка фронта работ в согласованных границах.",
      descEn: "Work pads, access routes, and work fronts prepared within the agreed boundaries.",
    },
    {
      titleRu: "Горные выработки",
      titleEn: "Excavations",
      descRu: "Пройденные канавы и шурфы с фактическими размерами и привязкой, если предусмотрена съёмка.",
      descEn: "Completed trenches and pits, with actual dimensions and locations where surveying is included.",
    },
    {
      titleRu: "Учёт выполненных объёмов",
      titleEn: "Work quantity records",
      descRu: "Сводки по выемке, вскрыше, перемещению и добыче в согласованных единицах.",
      descEn: "Summaries of excavation, stripping, haulage, and extraction in agreed units.",
    },
    {
      titleRu: "Документация и сдача",
      titleEn: "Handover documents",
      descRu: "Акты, исполнительные схемы и материалы по сдаче участка в объёме задания.",
      descEn: "Acceptance records, as-built drawings, and site handover materials within the agreed scope.",
    },
    {
      titleRu: "Рекультивация участка",
      titleEn: "Site reclamation",
      descRu: "Техническое восстановление площадок и планировка рельефа, если это входит в объём работ.",
      descEn: "Technical restoration and regrading where included in the scope.",
    },
  ],
  
  
  projectExample: {
    id: 11,
    workRu: "На участке выполнены горнопроходческие работы в объёме задания: проходка канав, вскрышные работы, подготовка площадок и подъездных путей. По результатам работ подготовлен отчёт.",
    workEn: "PEC completed the specified excavation work, including trenching, overburden removal, site preparation, and the construction of access roads, and prepared a final report.",
  },

  regions: [
    'Республика Саха (Якутия)',
    'Таймыр',
    'Чукотский автономный округ',
    'Магаданская область',
    'Забайкальский край',
  ],
}

export function MiningContent() {
  return <ServicePageTemplate data={data} />
}
