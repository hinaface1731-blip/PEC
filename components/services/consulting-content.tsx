'use client'

import { ServicePageTemplate } from './service-page-template'
import { FileText, BarChart3, ClipboardCheck, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'


const data = {
  icon: FileText,
  titleRu: 'Проектирование и консалтинг',
  titleEn: 'Design & Consulting',
  descRu: 'Полный комплекс проектных работ и консультационных услуг: от ТЭО кондиций до защиты запасов в ГКЗ. Опыт работы с российскими и международными стандартами.',
  descEn: 'Full range of design and consulting services: from feasibility studies to resource approval at GKZ. Experience with Russian and international standards.',
  heroImage: '/images/project.jpg',
  reverse: true,
  methodsGroups: [
    {
      titleRu: 'Проектирование ГРР',
      titleEn: 'GRR Design',
      icon: FileText,
      methods: [
        { ru: 'Проектирование ГРР (геологическое задание)', en: 'GRR project design (geological assignment)' },
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
  methodsImage: '/api/placeholder/500/350',
  equipment: [
    {
      titleRu: 'ПО для моделирования',
      titleEn: 'Modeling Software',
      items: ['Micromine', 'Surpac (GEOVIA)', 'Datamine', 'Leapfrog'],
    },
    {
      titleRu: 'ГИС-системы',
      titleEn: 'GIS Systems',
      items: ['ArcGIS Pro', 'QGIS', 'MapInfo', 'Global Mapper'],
    },
    {
      titleRu: 'Расчётное ПО',
      titleEn: 'Calculation Software',
      items: ['Whittle', 'NPV Scheduler', 'MineSched'],
    },
    {
      titleRu: 'Нормативная база',
      titleEn: 'Regulatory Framework',
      items: ['Классификация ГКЗ 2022', 'JORC Code 2012', 'NI 43-101', 'CRIRSCO'],
    },
  ],
  steps: [
    {
      numRu: '01',
      numEn: '01',
      titleRu: 'Анализ данных',
      titleEn: 'Data Analysis',
      descRu: 'Сбор и верификация геологических данных, оценка качества',
      descEn: 'Collection and verification of geological data, quality assessment',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Геологическая модель',
      titleEn: 'Geological Model',
      descRu: 'Построение 3D геологической модели месторождения',
      descEn: '3D geological model construction',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Блочная модель',
      titleEn: 'Block Model',
      descRu: 'Интерполяция содержаний, оценка ресурсов',
      descEn: 'Grade interpolation, resource estimation',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Экономическая оценка',
      titleEn: 'Economic Assessment',
      descRu: 'ТЭО кондиций, оптимизация карьера/подземки',
      descEn: 'Feasibility study, pit/underground optimization',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Защита запасов',
      titleEn: 'Resource Approval',
      descRu: 'Подготовка материалов ГКЗ, сопровождение защиты',
      descEn: 'GKZ documentation, approval support',
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
      titleRu: 'Отчёт ГКЗ',
      titleEn: 'GKZ Report',
      descRu: 'Полный комплект материалов для защиты запасов',
      descEn: 'Complete documentation for resource approval',
    },
    {
      titleRu: 'JORC-отчёт',
      titleEn: 'JORC Report',
      descRu: 'Технический отчёт по международным стандартам',
      descEn: 'Technical report per international standards',
    },
    {
      titleRu: '3D-модели',
      titleEn: '3D Models',
      descRu: 'Геологические и блочные модели в Micromine/Surpac',
      descEn: 'Geological and block models in Micromine/Surpac',
    },
    {
      titleRu: 'ТЭО',
      titleEn: 'Feasibility Study',
      descRu: 'Технико-экономическое обоснование проекта',
      descEn: 'Project feasibility study',
    },
  ],
  caseStudy: {
    titleRu: 'Подготовка ТЭО и защита запасов в ГКЗ',
    titleEn: 'Feasibility Study and GKZ Resource Approval',
    clientRu: 'Полиметалл',
    clientEn: 'Polymetal',
    year: '2023',
    volumeRu: 'Месторождение золота, 250 скважин, 45 000 м керна, 12 000 анализов',
    volumeEn: 'Gold deposit, 250 wells, 45,000m core, 12,000 analyses',
    resultRu: 'Защищены запасы категорий С1+С2 в объёме 15 тонн золота. Утверждены кондиции для открытой отработки.',
    resultEn: 'Approved C1+C2 resources of 15 tonnes gold. Cutoff grades approved for open-pit mining.',
  },
  caseImage: '/api/placeholder/500/300',
  regions: [
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Магаданская область', en: 'Magadan Region' },
    { ru: 'Иркутская область', en: 'Irkutsk Region' },
    { ru: 'Забайкалье', en: 'Transbaikal' },
    { ru: 'Таймыр', en: 'Taimyr' },
  ],
  stats: [
    { value: '15+', labelRu: 'проектов ГКЗ', labelEn: 'GKZ projects' },
    { value: '30+', labelRu: 'ТЭО', labelEn: 'feasibility studies' },
    { value: '10+', labelRu: 'JORC-отчётов', labelEn: 'JORC reports' },
    { value: '15 т', labelRu: 'защищено Au', labelEn: 'Au approved' },
  ],
}

export function ConsultingContent() {
  return <ServicePageTemplate data={data} />
}
