"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Calendar, ArrowRight, Filter, ChevronDown, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTAForm } from "@/components/cta-form"
import { FadeIn } from "@/components/fade-in"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"

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
  license?: string
  description: string
  descriptionEn: string
  results: string[]
  resultsEn: string[]
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Северо-Широкинская",
    titleEn: "Severo-Shirokinskaya",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2024-2025",
    category: "junior",
    categoryLabel: "Юниорные проекты",
    categoryLabelEn: "Junior Project",
    mineral: "Медь",
    mineralEn: "Copper",
    client: "Собственный проект",
    clientEn: "Own project",
    license: "КРР03707БП",
    description: "Поисково-оценочные работы на медное оруденение в пределах Норильского рудного района. Выполнен комплекс геофизических исследований и поисковое бурение.",
    descriptionEn: "Exploration works for copper mineralization within the Norilsk ore district. A complex of geophysical surveys and exploration drilling has been completed.",
    results: ["Геофизика: АМТЗ, ЗСБ, магнитометрия", "Площадь: 45 км²", "Выявлены перспективные аномалии"],
    resultsEn: ["Geophysics: AMT, TEM, magnetometry", "Area: 45 km²", "Prospective anomalies identified"],
    image: "images/3.jpg"
  },
  {
    id: 2,
    title: "Центрально-Широкинская",
    titleEn: "Tsentralno-Shirokinskaya",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2024-2025",
    category: "junior",
    categoryLabel: "Юниорные проекты",
    categoryLabelEn: "Junior Project",
    mineral: "Медь",
    mineralEn: "Copper",
    client: "Собственный проект",
    clientEn: "Own project",
    license: "КРР03708БП",
    description: "Геологоразведочные работы на медно-никелевое оруденение. Применен комплекс электроразведочных методов для выделения рудоконтролирующих структур.",
    descriptionEn: "Exploration for copper-nickel mineralization. A complex of electrical methods was applied to identify ore-controlling structures.",
    results: ["Электроразведка: ВП, АМТЗ", "Профилей: 120 км", "3D модель рудных тел"],
    resultsEn: ["Electrical survey: IP, AMT", "Profiles: 120 km", "3D ore body model"],
    image: "images/3.jpg"
  },
  {
    id: 3,
    title: "Трехсестренская",
    titleEn: "Trekhsestrenskaya",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2024-2025",
    category: "junior",
    categoryLabel: "Юниорные проекты",
    categoryLabelEn: "Junior Project",
    mineral: "Медь",
    mineralEn: "Copper",
    client: "Собственный проект",
    clientEn: "Own project",
    license: "КРР03709БП",
    description: "Поисковые работы на сульфидное медно-никелевое оруденение с применением современных геофизических методов.",
    descriptionEn: "Exploration for sulfide copper-nickel mineralization using modern geophysical methods.",
    results: ["Комплекс ЗСБ-АМТЗ", "Магнитная съемка", "Рекомендации по бурению"],
    resultsEn: ["TEM-AMT complex", "Magnetic survey", "Drilling recommendations"],
    image: "images/3.jpg"
  },
  {
    id: 4,
    title: "Дорожнинская",
    titleEn: "Dorozhninskaya",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2024-2025",
    category: "junior",
    categoryLabel: "Юниорные проекты",
    categoryLabelEn: "Junior Project",
    mineral: "Медь",
    mineralEn: "Copper",
    client: "Собственный проект",
    clientEn: "Own project",
    license: "КРР03710БП",
    description: "Поисково-оценочные работы на медное оруденение норильского типа. Детальная геофизика и структурное картирование.",
    descriptionEn: "Exploration for Norilsk-type copper mineralization. Detailed geophysics and structural mapping.",
    results: ["Детальная электроразведка", "Структурный анализ", "Перспективные участки выделены"],
    resultsEn: ["Detailed electrical survey", "Structural analysis", "Prospective areas identified"],
    image: "images/3.jpg"
  },
  {
    id: 5,
    title: "Симсовская",
    titleEn: "Simsovskaya",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2024-2025",
    category: "junior",
    categoryLabel: "Юниорные проекты",
    categoryLabelEn: "Junior Project",
    mineral: "Медь",
    mineralEn: "Copper",
    client: "Собственный проект",
    clientEn: "Own project",
    license: "КРР03711БП",
    description: "Геологоразведка на медно-никелевое оруденение в Норильском рудном районе. Комплексные геофизические исследования.",
    descriptionEn: "Copper-nickel exploration in the Norilsk ore district. Comprehensive geophysical surveys.",
    results: ["Комплекс АМТЗ/ЗСБ/ВП", "Площадь: 38 км²", "Бурение по аномалиям"],
    resultsEn: ["AMT/TEM/IP complex", "Area: 38 km²", "Anomaly drilling"],
    image: "images/3.jpg"
  },
  {
    id: 6,
    title: "Пекинская",
    titleEn: "Pekinskaya",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2024",
    category: "junior",
    categoryLabel: "Юниорные проекты",
    categoryLabelEn: "Junior Project",
    mineral: "Медь",
    mineralEn: "Copper",
    client: "Собственный проект",
    clientEn: "Own project",
    description: "Поисковые работы на сульфидную медно-никелевую минерализацию. Региональные геофизические исследования.",
    descriptionEn: "Exploration for sulfide copper-nickel mineralization. Regional geophysical surveys.",
    results: ["Региональная геофизика", "Геохимический опробования", "Выделены аномалии"],
    resultsEn: ["Regional geophysics", "Geochemical sampling", "Anomalies identified"],
    image: "images/3.jpg"
  },
  {
    id: 7,
    title: "Челюскин",
    titleEn: "Chelyuskin",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2024",
    category: "junior",
    categoryLabel: "Юниорные проекты",
    categoryLabelEn: "Junior Project",
    mineral: "Медь",
    mineralEn: "Copper",
    client: "Собственный проект",
    clientEn: "Own project",
    description: "Поисково-оценочные работы на крайнем севере Таймыра. Сложные логистические условия, арктическая экспедиция.",
    descriptionEn: "Exploration in the extreme north of Taimyr. Complex logistics, Arctic expedition.",
    results: ["Арктическая экспедиция", "Геофизический комплекс", "Первичная оценка"],
    resultsEn: ["Arctic expedition", "Geophysical complex", "Primary assessment"],
    image: "images/3.jpg"
  },
  {
    id: 8,
    title: "Быстринское",
    titleEn: "Bystrinskoe",
    location: "Таймыр",
    locationEn: "Taimyr",
    year: "2023-2024",
    category: "junior",
    categoryLabel: "Юниорный проект",
    categoryLabelEn: "Junior Project",
    mineral: "Золото",
    mineralEn: "Gold",
    client: "Собственный проект",
    clientEn: "Own project",
    description: "Поисковые работы на золоторудное оруденение. Комплекс геохимических и геофизических методов.",
    descriptionEn: "Exploration for gold mineralization. Complex of geochemical and geophysical methods.",
    results: ["Геохимия по вторичным ореолам", "Шлиховое опробование", "Выделены перспективные зоны"],
    resultsEn: ["Secondary halo geochemistry", "Heavy mineral sampling", "Prospective zones identified"],
    image: "images/3.jpg"
  },
  {
    id: 9,
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
    image: "images/3.jpg"
  },
  {
    id: 10,
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
    image: "images/3.jpg"
  }
]

const categories = [
  { value: "all", label: "Все проекты", labelEn: "All Projects" },
  { value: "junior", label: "Юниорные проекты", labelEn: "Junior Projects" },
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
          <img 
        src="/images/projects3.jpg" 
        alt="Контакты ПЭК"
        className="w-full h-f object-cover object-[center_80%]"
        style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 53%'  // ← Здесь точно сработает
  }}
            />
         
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Link href="/" className="hover:text-primary text-black/90">{t('Главная', 'Home')}</Link>
                <span>/</span>
                <span className="text-black/90">{t('Проекты', 'Projects')}</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black/90 mb-6">
                {t('Реализованные проекты', 'Completed Projects')}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {t(
                  'Более 30 проектов геологоразведки в Арктике и Субарктике России. Собственные юниорные проекты с лицензиями на медно-никелевое оруденение.',
                  'Over 30 exploration projects in the Arctic and Subarctic Russia. Own junior projects with copper-nickel mineralization licenses.'
                )}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Junior Projects License Banner */}
      <section className="py-8 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-accent">
                  <FileText className="w-6 h-6" style={{ color: '#F97316' }} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    {t('Лицензии на юниорные проекты', 'Junior Project Licenses')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('5 лицензий на разведку медно-никелевого оруденения на Таймыре', '5 licenses for copper-nickel exploration in Taimyr')}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/documents/documents.rar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  {t('Уведомление о лицензиях', 'License Notification')}
                </a>
                <a
                  href="/documents/license-extract.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-foreground rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  {t('Выписка из реестра', 'Registry Extract')}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "30+", label: t('Проектов выполнено', 'Projects completed') },
              { value: "5", label: t('Собственных лицензий', 'Own licenses') },
              { value: "8", label: t('Регионов работы', 'Working regions') },
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
            {/* Desktop Filter */}
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
                  {cat.value === "junior" && (
                    <span className="ml-2 px-1.5 py-0.5 bg-accent/20 text-accent text-xs rounded">
                     
                    </span>
                  )}
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
              
              <AnimatePresence >
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
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group card-enhanced p-6 rounded-2xl"
                >
                  <div className="relative h-48 overflow-hidden mb-4 rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2  ">
                    {t(project.title, project.titleEn)}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {t(project.location, project.locationEn)}
                    </span>
                    
                  </div>
                  
                  {project.client && (
                    <p className="text-sm text-muted-foreground mb-3">
                      <span className="font-medium">{t('Заказчик', 'Client')}:</span> {t(project.client, project.clientEn || project.client)}
                    </p>
                  )}
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {t(project.description, project.descriptionEn)}
                  </p>
                  
                  <div className="space-y-2">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
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

      {/* CTA Section */}
      <CTAForm />
    </div>
  )
}
