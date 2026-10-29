'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Calendar, Filter, ChevronDown, Pencil } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"

/**
 * Структура карточки проекта: Задача → Виды работ → Объём → Результат.
 *
 * КАК ДОПОЛНЯТЬ:
 *  - Пустые поля (volume / result) на сайте НЕ показываются — в продакшене строки просто скрыты.
 *  - В режиме разработки (npm run dev) вместо них виден пунктирный блок с подсказкой из `todo`.
 *  - Когда появились данные: впиши volume + volumeEn (и/или result + resultEn) и удали `todo`.
 *  - Поиск всех незаполненных мест: Ctrl+F по "todo:".
 */
interface Project {
  id: number
  title: string
  titleEn: string
  location: string
  locationEn: string
  year: string
  status: "completed" | "inProgress"
  category: "gold" | "copper"
  categoryLabel: string
  categoryLabelEn: string
  client: string
  clientEn: string
  task: string
  taskEn: string
  works: string[]
  worksEn: string[]
  volume?: string        // метраж, площадь, кол-во проб и т.п.
  volumeEn?: string
  result?: string        // итог работ, по возможности с цифрой
  resultEn?: string
  todo?: string          // подсказка себе: что дописать (видна только в dev)
  image: string
}

const IS_DEV = process.env.NODE_ENV !== "production"

// Только проекты для заказчиков (без юниорных)
const projects: Project[] = [
  {
    id: 1,
    title: "Марсианская",
    titleEn: "Marsianskaya",
    location: "Чукотка",
    locationEn: "Chukotka",
    year: "2024–2026",
    status: "inProgress",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Полюс",
    clientEn: "Polyus",
    task: "Детальная разведка золоторудного месторождения",
    taskEn: "Detailed exploration of a gold deposit",
    works: ["Бурение", "Каротаж скважин", "Лабораторные исследования"],
    worksEn: ["Drilling", "Well logging", "Laboratory studies"],
    result: "Выполнен подсчёт запасов",
    resultEn: "Reserve estimation completed",
    todo: "метраж бурения / кол-во скважин; прирост запасов (т Au), категория",
    image: "/images/Mars.jpg",
  },
  {
    id: 2,
    title: "Оперативный",
    titleEn: "Operativny",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2023–2026",
    status: "inProgress",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Highland Gold",
    clientEn: "Highland Gold",
    task: "Геологоразведочные работы на золоторудном объекте",
    taskEn: "Exploration at a gold prospect",
    works: ["Бурение", "Керновое опробование"],
    worksEn: ["Drilling", "Core sampling"],
    todo: "метраж бурения; итог (аномалии, зоны, рекомендации)",
    image: "/images/oper.JPG",
  },
  {
    id: 3,
    title: "Невенрекан",
    titleEn: "Nevenrekan",
    location: "Магадан",
    locationEn: "Magadan",
    year: "2023–2026",
    status: "inProgress",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Полиметалл",
    clientEn: "Polymetal",
    task: "Оценочные поисковые работы на золоторудном объекте",
    taskEn: "Evaluation and prospecting works at a gold ore site",
    works: ["Горнопроходческие работы (канавы)", "Колонковое бурение", "Керновое опробование"],
    worksEn: ["Mine workings (trenches)", "Core drilling", "Core sampling"],
    result: "Прирост 350 тыс. тонн руды, запасы 5,4 т условного золота",
    resultEn: "Increase of 350 thousand tons of ore, reserves of 5.4 tons of conventional gold",
    todo: "метраж бурения и объём канав",
    image: "/images/neven.JPG",
  },
  {
    id: 4,
    title: "Зеркальный",
    titleEn: "Zerkalny",
    location: "Чукотка",
    locationEn: "Chukotka",
    year: "2025",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Полюс",
    clientEn: "Polyus",
    task: "Оценочные поисковые работы на золоторудном объекте",
    taskEn: "Evaluation and prospecting works at a gold ore site",
    works: ["Горнопроходческие работы (канавы)", "Колонковое бурение", "Керновое опробование"],
    worksEn: ["Mine workings (trenches)", "Core drilling", "Core sampling"],
    todo: "метраж бурения, объём канав, кол-во проб; итог (рудные интервалы, прирост)",
    image: "/images/zerk.JPG",
  },
  {
    id: 5,
    title: "Быстринское",
    titleEn: "Bystrinskoye",
    location: "Забайкальский край",
    locationEn: "Zabaykalsky Krai",
    year: "2023–2024",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Норникель",
    clientEn: "Nornickel",
    task: "Поисковые работы на золоторудное оруденение",
    taskEn: "Exploration for gold mineralization",
    works: ["Геохимия по вторичным ореолам", "Шлиховое опробование", "Геофизика"],
    worksEn: ["Secondary halo geochemistry", "Heavy mineral sampling", "Geophysics"],
    result: "Выделены перспективные зоны",
    resultEn: "Prospective zones identified",
    todo: "площадь работ, кол-во проб, сколько зон выделено",
    image: "/images/bistr.JPG",
  },
  {
    id: 6,
    title: "Встречная",
    titleEn: "Vstrechnaya",
    location: "Забайкальский край",
    locationEn: "Zabaykalsky Krai",
    year: "2024–2026",
    status: "inProgress",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Норникель",
    clientEn: "Nornickel",
    task: "Поисковые работы на золоторудное оруденение",
    taskEn: "Exploration for gold mineralization",
    works: ["Геохимия по вторичным ореолам", "Шлиховое опробование", "Геофизика"],
    worksEn: ["Secondary halo geochemistry", "Heavy mineral sampling", "Geophysics"],
    result: "Выделены перспективные зоны",
    resultEn: "Prospective zones identified",
    todo: "площадь работ, кол-во проб, сколько зон выделено",
    image: "/images/vsterch.JPG",
  },
  {
    id: 7,
    title: "Агынджа",
    titleEn: "Agyndzha",
    location: "Якутия",
    locationEn: "Yakutia",
    year: "2022",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Норникель",
    clientEn: "Nornickel",
    task: "Поисковые работы на золоторудное оруденение",
    taskEn: "Exploration for gold mineralization",
    works: ["Геохимия по вторичным ореолам", "Шлиховое опробование"],
    worksEn: ["Secondary halo geochemistry", "Heavy mineral sampling"],
    result: "Выделены перспективные зоны",
    resultEn: "Prospective zones identified",
    todo: "площадь работ, кол-во проб, сколько зон выделено",
    image: "/images/agyndzha-overview.webp",
  },
  {
    id: 8,
    title: "Майницкая",
    titleEn: "Maynitskaya",
    location: "Чукотка",
    locationEn: "Chukotka",
    year: "2024",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Майское",
    clientEn: "Mayskoye",
    task: "Площадные геохимические работы",
    taskEn: "Area geochemical survey",
    works: ["Литогеохимическое опробование по вторичным ореолам рассеяния"],
    worksEn: ["Lithogeochemical sampling over secondary dispersion halos"],
    result: "Выделены перспективные зоны",
    resultEn: "Prospective zones identified",
    todo: "площадь (км²), кол-во проб, сколько зон выделено",
    image: "/images/maynickaya.jpg",
  },
  {
    id: 9,
    title: "Вилюйская",
    titleEn: "Vilyuyskaya",
    location: "Чукотка",
    locationEn: "Chukotka",
    year: "2024",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Полюс",
    clientEn: "Polyus",
    task: "Буровые работы и геохимическое опробование",
    taskEn: "Drilling and geochemical sampling",
    works: ["Бурение", "Литогеохимическое опробование по вторичным ореолам рассеяния"],
    worksEn: ["Drilling", "Lithogeochemical sampling over secondary dispersion halos"],
    result: "Выделены перспективные зоны",
    resultEn: "Prospective zones identified",
    todo: "метраж бурения, кол-во проб, сколько зон выделено",
    image: "/images/vilyui.jpg",
  },
  {
    id: 10,
    title: "Озерная",
    titleEn: "Ozernaya",
    location: "Камчатка",
    locationEn: "Kamchatka",
    year: "2024",
    status: "completed",
    category: "copper",
    categoryLabel: "Медь",
    categoryLabelEn: "Copper",
    client: "Полиметалл",
    clientEn: "Polymetal",
    task: "Литогеохимические поиски медного оруденения",
    taskEn: "Lithogeochemical exploration for copper mineralization",
    works: ["Литогеохимическое опробование по вторичным ореолам рассеяния"],
    worksEn: ["Lithogeochemical sampling over secondary dispersion halos"],
    result: "Выделены перспективные зоны",
    resultEn: "Prospective zones identified",
    todo: "площадь (км²), кол-во проб, сколько зон выделено",
    image: "/images/ozer.jpg",
  },
  {
    id: 11,
    title: "Прогнозное",
    titleEn: "Prognoznoye",
    location: "Магадан",
    locationEn: "Magadan",
    year: "2024",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Полиметалл",
    clientEn: "Polymetal",
    task: "Буровые и горнопроходческие работы",
    taskEn: "Drilling and mine workings",
    works: ["Буровые работы", "Горнопроходческие работы", "Геохимия по вторичным ореолам"],
    worksEn: ["Drilling", "Mine workings", "Secondary halo geochemistry"],
    result: "Выделены перспективные зоны",
    resultEn: "Prospective zones identified",
    todo: "метраж бурения, объём выработок; проверить, что геохимия реально входила в объём",
    image: "/images/prognoz.jpg",
  },
  {
    id: 12,
    title: "Игарка",
    titleEn: "Igarka",
    location: "Красноярский край",
    locationEn: "Krasnoyarsk Krai",
    year: "2024–2026",
    status: "inProgress",
    category: "copper",
    categoryLabel: "Медь",
    categoryLabelEn: "Copper",
    client: "Полиметалл",
    clientEn: "Polymetal",
    task: "Буровые работы на медном объекте",
    taskEn: "Drilling at a copper site",
    works: ["Буровые работы"],
    worksEn: ["Drilling"],
    result: "Выделены перспективные зоны",
    resultEn: "Prospective zones identified",
    todo: "метраж бурения, кол-во скважин, промежуточные результаты",
    image: "/images/igarka.jpg",
  },
  {
    id: 13,
    title: "Валунный",
    titleEn: "Valunny",
    location: "Чукотка",
    locationEn: "Chukotka",
    year: "2025",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Полюс",
    clientEn: "Polyus",
    task: "Буровые работы на золоторудном объекте",
    taskEn: "Drilling at a gold site",
    works: ["Буровые работы", "Геохимия по вторичным ореолам"],
    worksEn: ["Drilling", "Secondary halo geochemistry"],
    result: "Выделены перспективные зоны",
    resultEn: "Prospective zones identified",
    todo: "метраж бурения, кол-во скважин, сколько зон выделено",
    image: "/images/kekura.jpg",
  },
]

const categories = [
  { value: "all", label: "Все проекты", labelEn: "All Projects" },
  { value: "gold", label: "Золото", labelEn: "Gold" },
  { value: "copper", label: "Медь", labelEn: "Copper" },
]

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-2.5 border-t border-border first:border-t-0">
      <dt className="text-xs text-muted-foreground pt-0.5">{label}</dt>
      <dd className="text-sm text-foreground">{children}</dd>
    </div>
  )
}

export function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { t } = useLanguage()

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/DSC09137.jpg"
            alt="Проекты Полярной Экспедиционной Компании"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: "center 53%" }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-white/80 mb-4">
                <Link href="/" className="hover:text-white transition-colors">
                  {t("Главная", "Home")}
                </Link>
                <span>/</span>
                <span className="text-white">{t("Проекты", "Projects")}</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t("Проекты для заказчиков", "Client Projects")}
              </h1>

              <p className="text-xl text-white/90 leading-relaxed">
                {t(
                  "Проекты геологоразведки для ведущих горнодобывающих компаний России.",
                  "Exploration projects for leading mining companies in Russia."
                )}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "20+", label: t("Проектов выполнено", "Projects completed") },
              { value: "7", label: t("Регионов работы", "Working regions") },
              { value: "5", label: t("Крупных заказчиков", "Major clients") },
              { value: "100%", label: t("Выполнение в срок", "On-time delivery") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="mb-12">
            <div className="hidden md:flex items-center gap-3 flex-wrap">
              <Filter className="w-5 h-5 text-muted-foreground" />
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {t(cat.label, cat.labelEn)}
                </button>
              ))}
            </div>

            {/* Mobile Filter */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-between px-4 py-3 bg-card rounded-lg"
              >
                <span className="flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  {t(
                    categories.find((c) => c.value === activeCategory)?.label || "",
                    categories.find((c) => c.value === activeCategory)?.labelEn || ""
                  )}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-card rounded-lg shadow-lg z-20 overflow-hidden"
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => {
                          setActiveCategory(cat.value)
                          setIsFilterOpen(false)
                        }}
                        className={`w-full px-4 py-3 text-left transition-colors ${
                          activeCategory === cat.value
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        }`}
                      >
                        {t(cat.label, cat.labelEn)}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group card-enhanced p-6 rounded-2xl flex flex-col h-full"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg mb-4 flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 z-10 flex gap-2">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {t(project.categoryLabel, project.categoryLabelEn)}
                      </span>
                      {project.status === "inProgress" && (
                        <span className="px-3 py-1 bg-black/60 backdrop-blur text-white text-xs font-medium rounded-full">
                          {t("В работе", "In progress")}
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {t(project.title, project.titleEn)}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {t(project.location, project.locationEn)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>

                  <dl className="mt-auto">
                    <Row label={t("Заказчик", "Client")}>
                      {t(project.client, project.clientEn)}
                    </Row>
                    <Row label={t("Задача", "Task")}>
                      {t(project.task, project.taskEn)}
                    </Row>
                    <Row label={t("Виды работ", "Scope")}>
                      <ul className="space-y-1.5">
                        {project.works.map((work, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0 mt-1.5" />
                            <span className="text-muted-foreground">
                              {t(work, project.worksEn[idx] ?? work)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Row>
                    {project.volume && (
                      <Row label={t("Объём", "Volume")}>
                        {t(project.volume, project.volumeEn ?? project.volume)}
                      </Row>
                    )}
                    {project.result && (
                      <Row label={t("Результат", "Result")}>
                        <span className="font-medium">
                          {t(project.result, project.resultEn ?? project.result)}
                        </span>
                      </Row>
                    )}
                    {IS_DEV && project.todo && (
                      <div className="mt-2 flex items-start gap-2 rounded-lg border border-dashed border-orange-500/50 px-3 py-2 text-xs text-orange-500">
                        <Pencil className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span>Дополнить: {project.todo}</span>
                      </div>
                    )}
                  </dl>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  )
}