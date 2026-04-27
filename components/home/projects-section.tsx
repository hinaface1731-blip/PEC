'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react'

const projects = [
  {
    image: '/images/Mars.jpg',
    titleRu: 'Марсианская площадь',
    titleEn: 'Marsian Site',
    clientRu: 'Полюс',
    clientEn: 'Polyus',
    year: '2024-2026',
    regionRu: 'Чукотка',
    regionEn: 'Chukotka',
    resultRu: 'Геологическое доизучение на 850 км², выявлено 7 перспективных участков',
    resultEn: 'Geological study of 850 km², 7 prospective areas identified',
  },
  {
    image: '/images/neven.JPG',
    titleRu: 'Месторождение Невенрекан',
    titleEn: 'Nevenrekan Site',
    clientRu: 'Полиметалл',
    clientEn: 'Polymetall',
    year: '2023-2025',
    regionRu: 'Магадан',
    regionEn: 'Magadan',
    resultRu: 'Геофизические исследования на 120 км²',
    resultEn: 'Geophysical surveys on 120 km²',
  },
  {
    image: '/images/oper.JPG',
    titleRu: 'Участок Оперативный',
    titleEn: 'Operativniy Site',
    clientRu: 'Полюс',
    clientEn: 'Polyus',
    year: '2024',
    regionRu: 'Таймыр',
    regionEn: 'Tayimyr',
    resultRu: 'Доразведка флангов, 12 500 м бурения с выходом керна 96%',
    resultEn: 'Flank exploration, 12,500m drilling with 96% core recovery',
  },
  {
    image: '/images/vankor.jpg',
    titleRu: 'Ванкорское месторождение',
    titleEn: 'Vankor Field',
    clientRu: 'Роснефть',
    clientEn: 'Rosneft',
    year: '2023-2024',
    regionRu: 'Красноярский край',
    regionEn: 'Krasnoyarsk Region',
    resultRu: 'Рекультивация 45 га буровых площадок, восстановлено 38 га тундры',
    resultEn: 'Reclamation of 45 ha drilling sites, 38 ha of tundra restored',
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section className="section bg-[var(--bg2)]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              {t('Избранные проекты', 'Featured Projects')}
            </h2>
            <p className="text-[var(--muted)] max-w-2xl">
              {t(
                'Реализованные проекты для крупнейших компаний отрасли',
                'Completed projects for leading industry companies'
              )}
            </p>
          </div>
          <Link 
  href="/services" 
  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f97316] text-white font-medium transition-all hover:bg-[#ea580c] shrink-0"
>
  {t('Все проекты', 'All Projects')}
  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</Link>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.titleRu} className="card overflow-hidden group">
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(project.titleRu, project.titleEn)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg1)] to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-white text-xs font-medium">
                    {t(project.clientRu, project.clientEn)}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)] mb-2">
                {t(project.titleRu, project.titleEn)}
              </h3>
              <div className="flex items-center gap-4 text-sm text-[var(--muted2)] mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {t(project.regionRu, project.regionEn)}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.year}
                </span>
              </div>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {t(project.resultRu, project.resultEn)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
