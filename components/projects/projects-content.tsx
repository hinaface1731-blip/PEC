'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Calendar, ArrowRight, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTAForm } from "@/components/cta-form"
import { FadeIn } from "@/components/fade-in"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: number
  title: string
  titleEn: string
  location: string
  locationEn: string
  year: string
  category: string
  categoryLabel: string
  categoryLabelEn: string
  mineral: string
  mineralEn: string
  client?: string
  clientEn?: string
  description: string
  descriptionEn: string
  results: string[]
  resultsEn: string[]
  image: string
}

// Только проекты для заказчиков (без юниорных) — исправленные ID
const projects: Project[] = [
  {
    id: 1,
    title: "Марсианская",
    titleEn: "Marsianskaya",
    location: "Чукотка",
    locationEn: "Chukotka",
    year: "2023",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    mineral: "Золото",
    mineralEn: "Gold",
    client: "Полюс",
    clientEn: "Polyus",
    description: "Детальная разведка золоторудного месторождения. Бурение, геофизика, лабораторные исследования.",
    descriptionEn: "Detailed exploration of gold deposit. Drilling, geophysics, laboratory studies.",
    results: ["Бурение: 8 000 п.м.", "Каротаж скважин", "Подсчет запасов"],
    resultsEn: ["Drilling: 8,000 m", "Well logging", "Reserve estimation"],
    image: "/images/Mars.jpg"
  },
  {
    id: 2,
    title: "Оперативный",
    titleEn: "Operativny",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2023",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    mineral: "Золото",
    mineralEn: "Gold",
    client: "Highland Gold",
    clientEn: "Highland Gold",
    description: "Геологоразведочные работы на золоторудном объекте. Комплексные исследования керна и геофизика.",
    descriptionEn: "Exploration at gold prospect. Comprehensive core studies and geophysics.",
    results: ["Геофизика: ВП, магнитометрия", "Керновое опробование", "3D моделирование"],
    resultsEn: ["Geophysics: IP, magnetometry", "Core sampling", "3D modeling"],
    image: "/images/oper.JPG"
  },
  {
    id: 3,
    title: "Невенрекан",
    titleEn: "Nevenrekan",
    location: "Магадан",
    locationEn: "Magadan",
    year: "2023",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    mineral: "Золото",
    mineralEn: "Gold",
    client: "Полиметалл",
    clientEn: "Polymetal",
    description: "Оценочные поисковые работы на золоторудном объекте. Канавы и колонковое бурение.",
    descriptionEn: "Exploration at gold prospect. Comprehensive core studies and geophysics.",
    results: ["Горнопроходческие работы", "Керновое опробование", ">25 000 пробуренных метров"],
    resultsEn: ["Mine workings", "Core sampling", ">25,000 drilled meters"],
    image: "/images/neven.JPG"
  },
  {
    id: 4,
    title: "Зеркальный",
    titleEn: "Zerkalnyi",
    location: "Чукотка",
    locationEn: "Chukotka",
    year: "2025",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    mineral: "Золото",
    mineralEn: "Gold",
    client: "Полюс",
    clientEn: "Polyus",
    description: "Оценочные поисковые работы на золоторудном объекте. Канавы и колонковое бурение.",
    descriptionEn: "Exploration at gold prospect. Comprehensive core studies and geophysics.",
    results: ["Горнопроходческие работы", "Керновое опробование", "Перспективные зоны выделены"],
    resultsEn: ["Mine workings", "Core sampling", "Prospective zones identified"],
    image: "/images/zerk.JPG"
  },
  {
    id: 5,
    title: "Быстринское",
    titleEn: "Bystrinskoe",
    location: "Забайкальский край",
    locationEn: "Zabaykalsky Krai",
    year: "2023-2024",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    mineral: "Золото",
    mineralEn: "Gold",
    client: "Норникель",
    clientEn: "Nornickel",
    description: "Поисковые работы на золоторудное оруденение. Комплекс геохимических и геофизических методов.",
    descriptionEn: "Exploration for gold mineralization. Complex of geochemical and geophysical methods.",
    results: ["Геохимия по вторичным ореолам", "Шлиховое опробование", "Выделены перспективные зоны"],
    resultsEn: ["Secondary halo geochemistry", "Heavy mineral sampling", "Prospective zones identified"],
    image: "/images/bistr.JPG"
  },
  {
    id: 6,
    title: "Встречный",
    titleEn: "Vstrechnyi",
    location: "Забайкальский край",
    locationEn: "Zabaykalsky Krai",
    year: "2023-2024",
    category: "gold",
    categoryLabel: "Золото",
    categoryLabelEn: "Gold",
    mineral: "Золото",
    mineralEn: "Gold",
    client: "Норникель",
    clientEn: "Nornickel",
    description: "Поисковые работы на золоторудное оруденение. Комплекс геохимических и геофизических методов.",
    descriptionEn: "Exploration for gold mineralization. Complex of geochemical and geophysical methods.",
    results: ["Геохимия по вторичным ореолам", "Шлиховое опробование", "Выделены перспективные зоны"],
    resultsEn: ["Secondary halo geochemistry", "Heavy mineral sampling", "Prospective zones identified"],
    image: "/images/vsterch.JPG"
  },
 

]

const categories = [
  { value: "all", label: "Все проекты", labelEn: "All Projects" },
  { value: "gold", label: "Золото", labelEn: "Gold" },
  { value: "copper", label: "Медь", labelEn: "Copper" },
]

export function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { t } = useLanguage()

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-card overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/projects3.jpg"
            alt="Проекты Полярной Экспедиционной Компании"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: 'center 53%' }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Link href="/" className="hover:text-primary text-white/90">{t('Главная', 'Home')}</Link>
                <span>/</span>
                <span className="text-white/90">{t('Проекты', 'Projects')}</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t('Проекты для заказчиков', 'Client Projects')}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {t(
                  'Успешно реализованные проекты геологоразведки для ведущих горнодобывающих компаний России.',
                  'Successfully completed exploration projects for leading mining companies in Russia.'
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
              { value: "20+", label: t('Проектов выполнено', 'Projects completed') },
              { value: "8", label: t('Регионов работы', 'Working regions') },
              { value: "6", label: t('Крупных заказчиков', 'Major clients') },
              { value: "100%", label: t('Выполнение в срок', 'On-time delivery') }
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
                    categories.find(c => c.value === activeCategory)?.label || '',
                    categories.find(c => c.value === activeCategory)?.labelEn || ''
                  )}
                </span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
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
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {t(project.categoryLabel, project.categoryLabelEn)}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {t(project.title, project.titleEn)}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {t(project.location, project.locationEn)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                  
                  {project.client && (
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-medium text-foreground">{t('Заказчик', 'Client')}:</span>{' '}
                      {t(project.client, project.clientEn || project.client)}
                    </p>
                  )}
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {t(project.description, project.descriptionEn)}
                  </p>
                  
                  <div className="space-y-2 mt-auto">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {t(result, project.resultsEn[idx] ?? result)}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CTAForm />
    </div>
  )
}