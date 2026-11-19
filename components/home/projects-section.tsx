'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react'
import { projects } from '@/lib/projects'

const featuredProjects = projects.slice(0, 4)

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section className="section bg-[var(--bg2)]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)]">
            {t('Избранные проекты', 'Featured Projects')}
          </h2>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-medium transition-all hover:bg-[var(--accent-h)] shrink-0"
          >
            {t('Все проекты', 'All Projects')}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Link key={project.id} href={`/projects#project-${project.id}`} className="card overflow-hidden group block">
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(project.title, project.titleEn)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-medium">
                    {t(project.client, project.clientEn)}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                {t(project.title, project.titleEn)}
              </h3>
              <div className="flex items-center gap-4 text-sm text-[var(--muted2)] mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {t(project.location, project.locationEn)}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {t(project.result ?? project.task, project.resultEn ?? project.taskEn)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
