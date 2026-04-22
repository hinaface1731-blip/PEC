'use client'

import { ServicePageTemplate } from './service-page-template'
import { Download, Shield, Award } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'
import { FadeIn } from '@/components/fade-in'
import { Compass, Map, Ruler, Crosshair, LineChart, Globe, FileText } from 'lucide-react'
import type { ServicePageData } from '@/components/services/service-page-template'

const data: ServicePageData = {
  icon: Compass,
  titleRu: 'Маркшейдерские работы',
  titleEn: 'Survey Works',
  descRu: 'Маркшейдерское обеспечение горных работ на основании лицензии Ростехнадзора. Высокоточные ГНСС-приемники, электронные тахеометры, лицензионное ПО. Полный цикл от планирования до сдачи документации.',
  descEn: 'Mining surveying services licensed by Rostechnadzor. High-precision GNSS receivers, electronic total stations, licensed software. Full cycle from planning to documentation delivery.',
  heroImage: '/images/mark.jpg',
  reverse: true,
  methods: [],  // пустой массив, так как методы разбиты по группам
  methodsGroups: [
    {
      titleRu: 'Геодезические измерения',
      titleEn: 'Geodetic Measurements',
      icon: Globe,
      methods: [
        { ru: 'Статические спутниковые измерения от пунктов ГГС', en: 'Static satellite measurements from state geodetic network' },
        { ru: 'Развитие опорной маркшейдерской сети (ОМС)', en: 'Mine surveying control network development' },
        { ru: 'Топографическая съемка исходной поверхности', en: 'Initial surface topographic survey' },
        { ru: 'Вынос проектируемых горных выработок', en: 'Project mine workings staking' },
      ]
    },
    {
      titleRu: 'Контроль и съёмка',
      titleEn: 'Control & Surveying',
      icon: Crosshair,
      methods: [
        { ru: 'Контроль проходки буровых скважин', en: 'Drilling operations control' },
        { ru: 'Инклинометрический контроль скважин', en: 'Borehole inclinometry control' },
        { ru: 'Маркшейдерская съемка после производства работ', en: 'Post-work surveying' },
        { ru: 'Съемка рекультивируемых территорий', en: 'Reclamation area surveying' },
      ]
    },
    {
      titleRu: 'Обработка и отчётность',
      titleEn: 'Processing & Reporting',
      icon: LineChart,
      methods: [
        { ru: 'Подготовка 2D и 3D маркшейдерских планов', en: '2D and 3D survey plan preparation' },
        { ru: 'Составление картограмм объёмов горных работ', en: 'Mining volume cartogram preparation' },
        { ru: 'Подсчёт объёмов горной массы', en: 'Rock mass volume calculation' },
        { ru: '3D-моделирование горных выработок', en: '3D mine workings modeling' },
      ]
    },
  ],
  methodsImage: '/images/mark_obor.jpg',
  equipment: [
    {
      titleRu: 'ГНСС-оборудование',
      titleEn: 'GNSS Equipment',
      items: ['Высокоточные ГНСС-приемники', 'RTK-системы сантиметровой точности', 'Базовые станции'],
    },
    {
      titleRu: 'Геодезические приборы',
      titleEn: 'Geodetic Instruments',
      items: ['Электронные тахеометры', 'Нивелиры', 'Отражатели и вешки'],
    },
    {
      titleRu: 'Метрология',
      titleEn: 'Metrology',
      items: ['Все СИ проходят поверку', 'Сертификаты калибровки', 'Метрологический контроль'],
    },
    {
      titleRu: 'Программное обеспечение',
      titleEn: 'Software',
      items: ['Nanosoft (лицензия)', 'КРЕДО-Диалог (лицензия)', 'AutoCAD Civil 3D'],
    },
  ],
  steps: [
    {
      numRu: '01',
      numEn: '01',
      titleRu: 'Планирование работ',
      titleEn: 'Work Planning',
      descRu: 'Изучение ТЗ, заказ выписок из ФФПД с координатами пунктов ГГС, планирование ОМС',
      descEn: 'TOR study, FFPD extracts ordering with GGS coordinates, OMS planning',
    },
    {
      numRu: '02',
      numEn: '02',
      titleRu: 'Подготовительные работы',
      titleEn: 'Preparatory Work',
      descRu: 'Рекогносцировка пунктов ГГС, закладка пунктов ОМС, статические измерения',
      descEn: 'GGS reconnaissance, OMS establishment, static measurements',
    },
    {
      numRu: '03',
      numEn: '03',
      titleRu: 'Выполнение работ',
      titleEn: 'Field Work',
      descRu: 'Топосъемка, вынос выработок, сопровождение буровых и горных работ',
      descEn: 'Topographic survey, workings staking, drilling and mining support',
    },
    {
      numRu: '04',
      numEn: '04',
      titleRu: 'Камеральная обработка',
      titleEn: 'Office Processing',
      descRu: 'Вычисление координат, оценка точности, построение планов в Nanosoft/КРЕДО',
      descEn: 'Coordinate calculation, accuracy assessment, plan creation in Nanosoft/CREDO',
    },
    {
      numRu: '05',
      numEn: '05',
      titleRu: 'Сдача документации',
      titleEn: 'Documentation Delivery',
      descRu: 'Маркшейдерские планы, акты замеров, картограммы объемов, часть отчета ГРР',
      descEn: 'Survey plans, measurement acts, volume cartograms, GRR report section',
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
      titleRu: 'Маркшейдерские планы',
      titleEn: 'Survey Plans',
      descRu: '2D и 3D форматы участков работ',
      descEn: '2D and 3D work area formats',
    },
    {
      titleRu: 'Акты замеров',
      titleEn: 'Measurement Acts',
      descRu: 'Координатная привязка и объемы горных работ',
      descEn: 'Coordinate referencing and mining volumes',
    },
    {
      titleRu: 'Картограммы объемов',
      titleEn: 'Volume Cartograms',
      descRu: 'Сравнение проектных и фактических показателей',
      descEn: 'Project vs actual comparison',
    },
    {
      titleRu: 'Часть отчета ГРР',
      titleEn: 'GRR Report Section',
      descRu: 'Маркшейдерская документация для отчета',
      descEn: 'Survey documentation for report',
    },
  ],
  caseStudy: {
    titleRu: 'Маркшейдерское сопровождение геологоразведочных работ',
    titleEn: 'Survey Support for Geological Exploration',
    clientRu: 'Крупная горнодобывающая компания',
    clientEn: 'Major mining company',
    year: '2024',
    volumeRu: 'Полный цикл маркшейдерского обеспечения: от создания ОМС до сдачи документации',
    volumeEn: 'Full survey support cycle: from OMS creation to documentation delivery',
    resultRu: 'Высокоточная привязка всех горных выработок. Оперативный контроль буровых работ. Полный комплект исполнительной документации.',
    resultEn: 'High-precision referencing of all workings. Prompt drilling control. Complete executive documentation package.',
  },
  caseImage: '/images/mark-case.jpg',
  regions: [
    { ru: 'Красноярский край', en: 'Krasnoyarsk Region' },
    { ru: 'Якутия', en: 'Yakutia' },
    { ru: 'Таймыр', en: 'Taimyr' },
    { ru: 'Иркутская область', en: 'Irkutsk Region' },
    { ru: 'Крайний Север', en: 'Far North' },
  ],
  stats: [
    { value: '50+', labelRu: 'проектов', labelEn: 'projects' },
    { value: '2005', labelRu: 'год основания', labelEn: 'founded' },
    { value: '3 см', labelRu: 'точность съёмки', labelEn: 'survey accuracy' },
    { value: '∞', labelRu: 'срок лицензии', labelEn: 'license term' },
  ],
}

// License data
const licenseInfo = {
  numberRu: 'Л037-00109-24/03737982',
  numberEn: 'L037-00109-24/03737982',
  dateRu: '13 ноября 2025 г.',
  dateEn: 'November 13, 2025',
  authorityRu: 'Енисейское управление Ростехнадзора',
  authorityEn: 'Yenisei Office of Rostechnadzor',
  termRu: 'Бессрочно',
  termEn: 'Unlimited',
  activityRu: 'Производство маркшейдерских работ',
  activityEn: 'Mining surveying operations',
  documents: [
    {
      titleRu: 'Уведомление о предоставлении лицензии',
      titleEn: 'License Grant Notification',
      url: '/docs/license-marksheyderskie-raboty.pdf',
    },
    {
      titleRu: 'Выписка из реестра лицензий',
      titleEn: 'License Registry Extract',
      url: '/docs/vypiska-reestr-license.pdf',
    },
  ],
  works: [
    { ru: 'Пространственно-геометрические измерения горных разработок', en: 'Spatial-geometric measurements of mining operations' },
    { ru: 'Учет и обоснование объемов горных разработок', en: 'Accounting and justification of mining volumes' },
    { ru: 'Создание маркшейдерских опорных и съемочных сетей', en: 'Mine survey control and shooting networks creation' },
    { ru: 'Обоснование границ горных отводов', en: 'Mining allotment boundaries justification' },
    { ru: 'Определение опасных зон горных разработок', en: 'Mining hazardous zones identification' },
    { ru: 'Проектирование маркшейдерских работ', en: 'Mine surveying design' },
    { ru: 'Ведение горной графической документации', en: 'Mining graphic documentation maintenance' },
    { ru: 'Наблюдения за сдвижением земной поверхности', en: 'Earth surface displacement monitoring' },
  ],
}

function LicenseSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-[var(--bg2)]">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="section-eyebrow">
              <Shield className="w-4 h-4" />
              {t('Лицензия', 'License')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4">
              {t('Лицензия Ростехнадзора', 'Rostechnadzor License')}
            </h2>
            <p className="text-[var(--fg2)] max-w-2xl mx-auto">
              {t(
                'Маркшейдерское обеспечение выполняемых работ осуществляется на основании лицензии Федеральной службы по экологическому, технологическому и атомному надзору',
                'Mining surveying support is provided under the license of the Federal Service for Ecological, Technological and Nuclear Supervision'
              )}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="card-enhanced p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* License Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--fg)]">
                      {t(licenseInfo.activityRu, licenseInfo.activityEn)}
                    </h3>
                    <p className="text-sm text-[var(--fg2)]">
                      {t(licenseInfo.authorityRu, licenseInfo.authorityEn)}
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-[var(--bg)]">
                    <p className="text-xs text-[var(--fg2)] mb-1">{t('Регистрационный номер', 'Registration Number')}</p>
                    <p className="font-mono text-sm font-semibold text-[var(--fg)]">{t(licenseInfo.numberRu, licenseInfo.numberEn)}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg)]">
                    <p className="text-xs text-[var(--fg2)] mb-1">{t('Дата выдачи', 'Issue Date')}</p>
                    <p className="font-semibold text-[var(--fg)]">{t(licenseInfo.dateRu, licenseInfo.dateEn)}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg)]">
                    <p className="text-xs text-[var(--fg2)] mb-1">{t('Срок действия', 'Validity')}</p>
                    <p className="font-semibold text-[var(--accent)]">{t(licenseInfo.termRu, licenseInfo.termEn)}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--bg)]">
                    <p className="text-xs text-[var(--fg2)] mb-1">{t('Статус', 'Status')}</p>
                    <p className="font-semibold text-green-500">{t('Действующая', 'Active')}</p>
                  </div>
                </div>

                {/* Download Documents */}
                <div className="flex flex-wrap gap-3">
                  {licenseInfo.documents.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)]/10 hover:bg-[var(--accent)]/20 text-[var(--accent)] text-sm font-medium transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {t(doc.titleRu, doc.titleEn)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Licensed Works */}
              <div className="flex-1">
                <h4 className="font-semibold text-[var(--fg)] mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[var(--accent)]" />
                  {t('Лицензируемые виды работ', 'Licensed Work Types')}
                </h4>
                <ul className="space-y-2">
                  {licenseInfo.works.map((work, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--fg2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                      {t(work.ru, work.en)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Team Info */}
        <FadeIn delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-enhanced p-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h4 className="font-semibold text-[var(--fg)] mb-2">
                {t('Квалификация', 'Qualification')}
              </h4>
              <p className="text-sm text-[var(--fg2)]">
                {t(
                  'Сотрудники имеют профильное образование, регулярно проходят повышение квалификации и аттестации по промышленной безопасности',
                  'Employees have specialized education, regularly undergo advanced training and industrial safety certifications'
                )}
              </p>
            </div>

            <div className="card-enhanced p-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h4 className="font-semibold text-[var(--fg)] mb-2">
                {t('Соответствие требованиям', 'Compliance')}
              </h4>
              <p className="text-sm text-[var(--fg2)]">
                {t(
                  'Работы выполняются в соответствии с требованиями законодательства РФ и локальными нормативными актами компании',
                  'Work is performed in accordance with Russian legislation and company regulatory documents'
                )}
              </p>
            </div>

            <div className="card-enhanced p-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <h4 className="font-semibold text-[var(--fg)] mb-2">
                {t('Метрология', 'Metrology')}
              </h4>
              <p className="text-sm text-[var(--fg2)]">
                {t(
                  'Все средства измерения проходят обязательные метрологические поверки для обеспечения высокой точности',
                  'All measuring instruments undergo mandatory metrological verification to ensure high accuracy'
                )}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export function SurveyContent() {
  return (
    <>
      <ServicePageTemplate data={data} />
      <LicenseSection />
    </>
  )
}