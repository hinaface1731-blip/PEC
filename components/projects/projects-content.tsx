'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Calendar, Filter, ChevronDown, Pencil } from "lucide-react"
import { FadeIn } from "@/components/fade-in"
import { useLanguage } from "@/components/language-provider"
import Link from '@/components/localized-link'
import Image from "next/image"
import { ProjectPhotoCredit } from "@/components/projects/project-photo-credit"

import { projectRegions, projects } from "@/lib/projects"

const IS_DEV = process.env.NODE_ENV !== "production"
const clientCount = new Set(projects.map((project) => project.clientEn)).size
const commodityCount = new Set(projects.map((project) => project.category)).size

const categories = [
  { value: "all", label: "Все проекты", labelEn: "All Projects" },
  { value: "gold", label: "Золото", labelEn: "Gold" },
  { value: "copper", label: "Медь", labelEn: "Copper" },
]

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[minmax(0,5rem)_minmax(0,1fr)] gap-3 border-t border-border py-2.5 first:border-t-0 sm:grid-cols-[6.5rem_minmax(0,1fr)]">
      <dt className="text-xs text-muted-foreground pt-0.5">{label}</dt>
      <dd className="min-w-0 wrap-anywhere text-sm text-foreground">{children}</dd>
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
            alt={t('Проекты Полярной Экспедиционной Компании', 'Polar Expedition Company projects')}
            fill
            priority
            className="object-cover"
            sizes="100vw"
            style={{ objectPosition: "center 53%" }}
          />
          <ProjectPhotoCredit />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="project-hero-copy hero-text-shadow max-w-3xl">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-white/95">
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
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4">
            {[
              { value: String(projects.length), label: t("Проектов в портфолио", "Projects in the portfolio") },
              { value: String(projectRegions.length), label: t("Территорий работ", "Project areas") },
              { value: String(clientCount), label: t("Заказчиков в портфолио", "Clients in the portfolio") },
              { value: String(commodityCount), label: t("Вида сырья", "Commodities") },
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
                <div className="text-primary-foreground text-sm">{stat.label}</div>
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  id={`project-${project.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group card-enhanced flex h-full min-w-0 scroll-mt-28 flex-col rounded-2xl p-4 sm:p-6"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg mb-4 flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={t(project.title, project.titleEn)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <ProjectPhotoCredit />
                    <div className="absolute top-3 left-3 z-10 flex">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                        {t(project.categoryLabel, project.categoryLabelEn)}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {t(project.title, project.titleEn)}
                  </h3>

                  <div className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-4 shrink-0" />
                      {t(project.location, project.locationEn)}
                    </span>
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      <Calendar className="size-4 shrink-0" />
                      {project.year}
                    </span>
                  </div>

                  <dl>
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
                        <span>{t('Дополнить', 'Editorial note')}: {t(project.todo, project.todoEn ?? '')}</span>
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
