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
    year: "2023",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Полюс",
    clientEn: "Polyus",
    task: "Детальная разведка золоторудного месторождения",
    taskEn: "Detailed exploration of a gold deposit",
    works: ["Бурение", "Каротаж скважин", "Геофизика", "Лабораторные исследования"],
    worksEn: ["Drilling", "Well logging", "Geophysics", "Laboratory studies"],
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
    year: "2023",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Highland Gold",
    clientEn: "Highland Gold",
    task: "Геологоразведочные работы на золоторудном объекте",
    taskEn: "Exploration at a gold prospect",
    works: ["Бурение", "Геофизика: ВП, магнитометрия", "Керновое опробование"],
    worksEn: ["Drilling", "Geophysics: IP, magnetometry", "Core sampling"],
    todo: "метраж бурения; км профилей ВП и площадь магнитки; итог (аномалии, зоны, рекомендации)",
    image: "/images/oper.JPG",
  },
  {
    id: 3,
    title: "Невенрекан",
    titleEn: "Nevenrekan",
    location: "Магадан",
    locationEn: "Magadan",
    year: "2023 – 2026",
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
    titleEn: "Zerkalnyi",
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
    titleEn: "Bystrinskoe",
    location: "Забайкальский край",
    locationEn: "Zabaykalsky Krai",
    year: "2023 – 2024",
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
    year: "2024 – 2026",
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
    titleEn: "Agyndja",
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
    titleEn: "Mainickaya",
    location: "Чукотка",
    locationEn: "Chukotka",
    year: "2024",
    status: "completed",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    client: "Майское",
    clientEn: "Mayskoe",
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
    titleEn: "Vilyuiskaya",
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
    year: "2024 – 2026",
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
    titleEn: "Valunniy",
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
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[55vh] pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t("Проекты", "Projects")}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {t(
            "Подборка проектов обновляется. Информация появится после проверки данных и согласования публикации.",
            "The project portfolio is being updated. Information will be published after the data has been reviewed and publication approved."
          )}
        </p>
      </div>
    </section>
  )
}
