import type { Metadata } from 'next'
import { localizedPath, type Language } from '@/lib/site-language'

export const siteUrl = 'https://polar-ec.ru'

const brands = {
  ru: 'Полярная Экспедиционная Компания',
  en: 'Polar Expedition Company',
}

const copy = {
  "/": { ru: ["Полярная Экспедиционная Компания","Геологоразведочная компания полного цикла. Геология, геофизика, бурение и лабораторные исследования в Арктике и Сибири."], en: ["Polar Expedition Company","Full-cycle mineral exploration in the Arctic and Siberia, including geology, geophysics, drilling and laboratory testing."] },
  "/about": { ru: ["О компании","Полярная Экспедиционная Компания — геологоразведка полного цикла в Арктике и Сибири с 2008 года. 18+ лет опыта, 20+ проектов, 200+ сотрудников."], en: ["About the Company","Polar Expedition Company has provided mineral exploration services in the Arctic and Siberia since 2008."] },
  "/contacts": { ru: ["Карьера и контакты","Контакты Полярной Экспедиционной Компании. Телефон, email, адрес в Красноярске."], en: ["Careers and Contacts","Career opportunities and contact details for Polar Expedition Company in Krasnoyarsk."] },
  "/equipment": { ru: ["Оборудование","Парк бурового, геофизического, маркшейдерского и лабораторного оборудования. GNSS-приёмники, тахеометры и сканеры."], en: ["Equipment","Drilling, geophysical, mine surveying and laboratory equipment, including GNSS receivers, total stations and scanners."] },
  "/investors": { ru: ["Инвесторам — медь Таймыра","Инвестиционное предложение: три лицензионные площади Широкинского узла на Таймыре. Прогнозные ресурсы 6,5 млн т меди и 170 т золота, инвестиции 1,1 млрд ₽, дорожная карта 2026–2027."], en: ["Investors – Taimyr Copper","Mineral exploration investment proposal covering three licence areas in the Shirokinsky cluster on the Taimyr Peninsula."] },
  "/privacy": { ru: ["Политика конфиденциальности","Политика обработки персональных данных ООО «Полярная Экспедиционная Компания»."], en: ["Privacy Policy","Personal data processing policy of Polar Expedition Company LLC."] },
  "/privacy/consent": { ru: ["Согласие на обработку персональных данных соискателя","Согласие на обработку персональных данных при отправке резюме."], en: ["Consent to Process Applicant Personal Data","Consent to the processing of personal data submitted with a job application."] },
  "/projects": { ru: ["Проекты для заказчиков","Избранные проекты геологоразведки на золото и медь, выполненные для заказчиков в России."], en: ["Client Projects","Selected gold and copper exploration projects carried out for clients in Russia."] },
  "/services": { ru: ["Услуги","Геологические, геофизические, буровые, горные и маркшейдерские работы, логистика, лабораторные исследования, проектирование и экология."], en: ["Services","Geology, geophysics, drilling, mining, surveying, logistics, laboratory testing, consulting and environmental services."] },
  "/services/consulting": { ru: ["Проектирование и консалтинг","ТЭО кондиций, подсчёт запасов ГКЗ/ТКЗ, проектирование ГРР, оценка ресурсов JORC."], en: ["Exploration Design and Consulting","Exploration planning, reserve estimation and technical consulting for mineral projects."] },
  "/services/drilling": { ru: ["Буровые работы","Колонковое бурение, шарошечное бурение, гидрогеологические скважины."], en: ["Drilling Services","Core drilling, rotary drilling and hydrogeological wells."] },
  "/services/ecology": { ru: ["Экология и рекультивация","ОВОС, экологический мониторинг, проекты рекультивации, прохождение ГЭЭ."], en: ["Environmental Services and Reclamation","Environmental assessment, monitoring, reclamation planning and regulatory review."] },
  "/services/geological": { ru: ["Геологические работы","Геологическое картирование, поисковые маршруты, шлиховое опробование, документация горных выработок."], en: ["Geological Services","Geological mapping, prospecting traverses, pan-concentrate sampling and documentation of workings."] },
  "/services/geophysics": { ru: ["Геофизические работы","Электроразведка, наземная и аэромагнитная съёмка с БПЛА, каротаж скважин и обработка геофизических данных."], en: ["Geophysical Services","Electrical and electromagnetic surveys, ground and drone magnetic surveys, borehole logging and geophysical data processing."] },
  "/services/geophysics/electrical": { ru: ["Электроразведка","АМТЗ, ЗСБ, вызванная поляризация, электротомография и ВЭЗ. Интерактивная схема геоэлектрического разреза."], en: ["Electrical and Electromagnetic Surveys","AMT, TEM, induced polarization and resistivity imaging for mineral exploration. Explore a schematic electrical section."] },
  "/services/geophysics/logging": { ru: ["Каротаж скважин","Электрический, гамма- и акустический каротаж, кавернометрия и инклинометрия."], en: ["Borehole Geophysical Logging","Electrical, gamma and acoustic borehole logs, caliper measurements and deviation surveys."] },
  "/services/geophysics/magnetic": { ru: ["Магниторазведка","Наземная и аэромагнитная съёмка с БПЛА. Сравнение магнитных профилей на двух условных высотах."], en: ["Magnetic Surveys","Ground and drone magnetic surveys. Compare how sensor height changes a schematic magnetic profile."] },
  "/services/geophysics/software": { ru: ["Обработка геофизических данных","Контроль качества, картирование, инверсия и интерпретация полевых данных."], en: ["Geophysical Data Processing","Quality control, geophysical mapping, inversion and interpretation of field data."] },
  "/services/lab": { ru: ["Лабораторные исследования","Пробоподготовка, минералогические исследования и определение золота в полевой аналитической лаборатории «Золотинка»."], en: ["Laboratory Testing","Sample preparation, mineralogical studies and gold determination using the Zolotinka field laboratory."] },
  "/services/logistics": { ru: ["Логистика и снабжение","Северный завоз, доставка грузов в Арктику и Сибирь, снабжение удалённых объектов, экспедиционное сопровождение. Надёжная логистика для ГРР."], en: ["Logistics and Supply","Seasonal supplies, cargo delivery and expedition support for remote sites in the Arctic and Siberia."] },
  "/services/mining": { ru: ["Горные работы","Полный комплекс горных работ: вскрышные работы, добычные работы, буровзрывные работы, отработка россыпей. Опыт работы в Арктике и Сибири."], en: ["Mining Services","Overburden removal, extraction and placer operations in the Arctic and Siberia."] },
  "/services/survey": { ru: ["Маркшейдерские работы","GNSS-съёмка RTK, тахеометрия, лазерное сканирование, аэрофотосъёмка с БПЛА."], en: ["Mine Surveying","GNSS RTK, total station surveys, laser scanning and drone photogrammetry."] },
} satisfies Record<string, Record<Language, [title: string, description: string]>>

export type SitePath = keyof typeof copy
export const sitePaths = Object.keys(copy) as SitePath[]

export function localizedMetadata(path: SitePath, language: Language): Metadata {
  const [label, description] = copy[path][language]
  const brand = brands[language]
  const title = path === '/' ? brand : `${label} — ${brand}`
  const canonical = localizedPath(path, language)
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: { ru: path, en: localizedPath(path, 'en'), 'x-default': path },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      siteName: brand,
      locale: language === 'en' ? 'en_GB' : 'ru_RU',
      alternateLocale: language === 'en' ? 'ru_RU' : 'en_GB',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: brand }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
  }
}
