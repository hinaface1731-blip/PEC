'use client'

import { ServicePageTemplate } from './service-page-template'
import { FileText, BarChart3, ClipboardCheck } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: FileText,
  titleRu: 'Проектирование и консалтинг',
  titleEn: 'Exploration Design & Consulting',
  descRu: 'Полный комплекс проектных работ и консультационных услуг: от ТЭО кондиций до защиты запасов в ГКЗ. Опыт работы с российскими и международными стандартами.',
  descEn: 'Exploration design and consulting services, from studies on reserve estimation criteria to support during reserve review by the State Commission on Mineral Reserves (GKZ). We work with Russian and international reporting standards.',
  heroImage: '/images/project.jpg',
  introPhoto: {
    src: '/images/site/desk-documents.jpg',
    altRu: 'Специалисты обсуждают рабочие документы',
    altEn: 'Specialists reviewing documents together',
  },
  introRu:
    'Готовим проекты геологоразведочных работ: обоснование методики и объёмов, расчёт сроков и затрат, мероприятия по безопасности, графические приложения, и сопровождаем согласование. По результатам работ составляем отчёты с оценкой прогнозных ресурсов и подсчётом запасов (ГКЗ/ТКЗ), разрабатываем ТЭО кондиций, строим каркасные и блочные модели в Micromine и Surpac, готовим отчётность по стандартам JORC и CRIRSCO.',
  introEn:
    'We design exploration programs, justify the methods and scope, estimate schedules and costs, prepare safety measures and drawings, and support the approval process. Using the exploration results, we prepare reports with forecast resource assessments and reserve estimates for the state or territorial reserves commission (GKZ or TKZ), evaluate reserve estimation criteria, build wireframe and block models in Micromine and Surpac, and prepare reports under JORC and CRIRSCO standards.',

  reverse: true,
  
  sectionTitleRu: 'Полный комплекс проектных и консультационных услуг',
  sectionTitleEn: 'Full range of design and consulting services',
  sectionDescRu: 'От ТЭО кондиций до защиты запасов в ГКЗ',
  sectionDescEn: 'From feasibility studies to reserve approval at GKZ',
  
  methods: [
    { ru: 'Проектирование ГРР (геологическое задание)', en: 'Mineral exploration program design (geological scope of work)' },
    { ru: 'Разработка инвестиционных программ', en: 'Investment program development' },
    { ru: 'Сопровождение лицензирования', en: 'Licensing support' },
    { ru: 'Технико-экономическое обоснование', en: 'Technical and economic assessment' },
    { ru: 'ГИС-моделирование (Micromine, Surpac)', en: 'GIS modeling (Micromine, Surpac)' },
    { ru: 'Блочное моделирование месторождений', en: 'Block modeling of deposits' },
    { ru: 'ТЭО кондиций для подсчёта запасов', en: 'Feasibility study for resource estimation' },
    { ru: 'Подсчёт запасов ГКЗ/ТКЗ', en: 'GKZ/TKZ resource estimation' },
    { ru: 'Оценка ресурсов по стандартам JORC', en: 'JORC resource assessment' },
    { ru: 'Экспертиза геологических отчётов', en: 'Geological report review' },
    { ru: 'Аудит геологических данных', en: 'Geological data audit' },
    { ru: 'Due Diligence проектов', en: 'Project Due Diligence' },
  ],
  methodsGroups: [
    {
      titleRu: 'Проектирование ГРР',
      titleEn: 'Exploration Program Design',
      icon: FileText,
      methods: [
        { ru: 'Проектирование ГРР (геологическое задание)', en: 'Mineral exploration program design (geological scope of work)' },
        { ru: 'Разработка инвестиционных программ', en: 'Investment program development' },
        { ru: 'Сопровождение лицензирования', en: 'Licensing support' },
        { ru: 'Технико-экономическое обоснование', en: 'Technical and economic assessment' },
      ]
    },
    {
      titleRu: 'Подсчёт запасов и моделирование',
      titleEn: 'Resource Estimation & Modeling',
      icon: BarChart3,
      methods: [
        { ru: 'ГИС-моделирование (Micromine, Surpac)', en: 'GIS modeling (Micromine, Surpac)' },
        { ru: 'Блочное моделирование месторождений', en: 'Block modeling of deposits' },
        { ru: 'ТЭО кондиций для подсчёта запасов', en: 'Feasibility study for resource estimation' },
        { ru: 'Подсчёт запасов ГКЗ/ТКЗ', en: 'GKZ/TKZ resource estimation' },
      ]
    },
    {
      titleRu: 'Оценка и экспертиза',
      titleEn: 'Assessment & Expertise',
      icon: ClipboardCheck,
      methods: [
        { ru: 'Оценка ресурсов по стандартам JORC', en: 'JORC resource assessment' },
        { ru: 'Экспертиза геологических отчётов', en: 'Geological report review' },
        { ru: 'Аудит геологических данных', en: 'Geological data audit' },
        { ru: 'Due Diligence проектов', en: 'Project Due Diligence' },
      ]
    },
  ],
  methodsImage: '/images/methods-consulting.jpg',
  
  // ✅ Новая структура оборудования
  equipment: [
    {
      titleRu: 'ПО для моделирования',
      titleEn: 'Modeling Software',
      items: [
        { name: 'Micromine', specs: ['3D моделирование', 'Подсчёт запасов', 'Геологическое моделирование'], image: '/images/software/micromine.jpg' },
        { name: 'Surpac (GEOVIA)', specs: ['Горно-геологическое моделирование', 'Планирование карьера', 'Оценка ресурсов'], image: '/images/software/surpac.jpg' },
        { name: 'Datamine', specs: ['Геологическое моделирование', 'Оценка ресурсов', 'Планирование горных работ'], image: '/images/software/datamine.jpg' },
        { name: 'Leapfrog', specs: ['3D геологическое моделирование', 'Интерполяция', 'Визуализация'], image: '/images/software/leapfrog.jpg' },
      ]
    },
    {
      titleRu: 'ГИС-системы',
      titleEn: 'GIS Systems',
      items: [
        { name: 'ArcGIS Pro', specs: ['Пространственный анализ', '3D визуализация', 'Создание карт'], image: '/images/software/arcgis.jpg' },
        { name: 'QGIS', specs: ['Бесплатная ГИС', 'Работа с геоданными', 'Плагины'], image: '/images/software/qgis.jpg' },
        { name: 'MapInfo', specs: ['Географический анализ', 'Картография', 'Пространственная статистика'], image: '/images/software/mapinfo.jpg' },
        { name: 'Global Mapper', specs: ['3D анализ', 'Обработка LiDAR', 'Создание ЦМР'], image: '/images/software/global-mapper.jpg' },
      ]
    },
    {
      titleRu: 'Расчётное ПО',
      titleEn: 'Calculation Software',
      items: [
        { name: 'Whittle', specs: ['Оптимизация карьера', 'Стратегическое планирование', 'Оценка NPV'], image: '/images/software/whittle.jpg' },
        { name: 'NPV Scheduler', specs: ['Планирование горных работ', 'Оптимизация потоков', 'Финансовое моделирование'], image: '/images/software/npv-scheduler.jpg' },
        { name: 'MineSched', specs: ['Детальное планирование', 'Производственные графики', 'Ресурсное планирование'], image: '/images/software/minesched.jpg' },
      ]
    },
    {
      titleRu: 'Нормативная база',
      titleEn: 'Regulatory Framework',
      items: [
        { name: 'Классификация ГКЗ 2022', specs: ['Российские стандарты', 'Подсчёт запасов', 'Протоколы ГКЗ'], image: '/images/software/gkz.jpg' },
        { name: 'JORC Code 2012', specs: ['Международные стандарты', 'Прозрачность отчётов', 'Компетентные лица'], image: '/images/software/jorc.jpg' },
        { name: 'NI 43-101', specs: ['Канадские стандарты', 'Технические отчёты', 'Раскрытие информации'], image: '/images/software/ni43-101.jpg' },
        { name: 'CRIRSCO', specs: ['Международный комитет', 'Гармонизация стандартов', 'Отчётность по ресурсам'], image: '/images/software/crirsco.jpg' },
      ]
    },
  ],
  
  steps: [
    {
      image: '/images/work-stage-illustrations/signal.webp',
      titleRu: 'Анализ данных',
      titleEn: 'Data Analysis',
      descRu: 'Сбор и верификация геологических данных, оценка качества',
      descEn: 'Collection and verification of geological data, quality assessment',
    },
    {
      image: '/images/work-stage-illustrations/analysis.webp',
      titleRu: 'Геологическая модель',
      titleEn: 'Geological Model',
      descRu: 'Построение 3D геологической модели месторождения',
      descEn: '3D geological model construction',
    },
    {
      image: '/images/work-stage-illustrations/block.webp',
      titleRu: 'Блочная модель',
      titleEn: 'Block Model',
      descRu: 'Интерполяция содержаний, оценка ресурсов',
      descEn: 'Grade interpolation, resource estimation',
    },
    {
      image: '/images/work-stage-illustrations/planning.webp',
      titleRu: 'Экономическая оценка',
      titleEn: 'Economic Assessment',
      descRu: 'ТЭО кондиций, оптимизация карьера/подземки',
      descEn: 'Feasibility study, pit/underground optimization',
    },
    {
      image: '/images/work-stage-illustrations/reporting.webp',
      titleRu: 'Защита запасов',
      titleEn: 'Resource Approval',
      descRu: 'Подготовка материалов ГКЗ, сопровождение защиты',
      descEn: 'GKZ documentation, approval support',
    },
  ],
  results: [
    {
      titleRu: "Проект геологоразведочных работ",
      titleEn: "Exploration project design",
      descRu: "Программа работ с обоснованием методов, объёмами, этапами и графиком.",
      descEn: "A work program with the rationale for methods, quantities, stages, and schedule.",
    },
    {
      titleRu: "Проверенная база исходных данных",
      titleEn: "Validated source database",
      descRu: "Сверенные материалы бурения и опробования с учётом пригодности данных для моделирования.",
      descEn: "Reviewed drilling and sampling data, including checks for suitability for modeling.",
    },
    {
      titleRu: "Геологическая и блочная модели",
      titleEn: "Geological and block models",
      descRu: "Трёхмерные контуры тел и модель распределения содержаний в согласованном цифровом формате.",
      descEn: "Three-dimensional body outlines and a grade distribution model in the agreed digital format.",
    },
    {
      titleRu: "Подсчёт запасов",
      titleEn: "Reserve estimate",
      descRu: "Таблицы объёмов, тоннажа и содержаний с пояснением исходных допущений и методики.",
      descEn: "Volume, tonnage, and grade tables with the underlying assumptions and methodology.",
    },
    {
      titleRu: "Технико-экономическая оценка",
      titleEn: "Techno-economic assessment",
      descRu: "ТЭО кондиций, сравнение сценариев освоения и основные параметры проекта по заданию.",
      descEn: "Cut-off criteria, development scenarios, and key project parameters as specified.",
    },
    {
      titleRu: "Материалы для экспертизы запасов",
      titleEn: "Materials for reserve review",
      descRu: "Отчёт, графика и приложения для представления на экспертизу в согласованном объёме.",
      descEn: "Report, drawings, and appendices for submission to review within the agreed scope.",
    },
    {
      titleRu: "Международная техническая отчётность",
      titleEn: "International technical reporting",
      descRu: "Материалы по согласованному стандарту, например JORC, если это входит в задачу.",
      descEn: "Materials to the agreed reporting standard, such as JORC, where commissioned.",
    },
    {
      titleRu: "Рекомендации и сопровождение",
      titleEn: "Recommendations and review support",
      descRu: "Перечень дальнейших работ, замечания по данным и материалы для ответов экспертам.",
      descEn: "Follow-up work, data observations, and materials for responding to reviewers.",
    },
  ],
  
  
  projectExample: {
    id: 10,
    workRu: "Перед началом работ на участке ПЭК проанализировала и переинтерпретировала архивные геологические, геофизические и геохимические данные и подготовила проект геологоразведочных работ в соответствии с техническим заданием.",
    workEn: "Before work began on site, PEC reviewed and reinterpreted archival geological, geophysical, and geochemical data and prepared an exploration work plan in accordance with the terms of reference.",
  },

  regions: [
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Магаданская область', en: 'Magadan Region' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
    { ru: 'Таймыр', en: 'Taimyr' },
  ],
}

export function ConsultingContent() {
  return <ServicePageTemplate data={data} />
}
