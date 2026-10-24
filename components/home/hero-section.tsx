'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { ArrowRight, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Видео; до его загрузки показывается постер (первый кадр ролика) */}
      <div className="absolute inset-0 z-0 bg-black">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
          className="w-full h-full object-cover"
        >
          {/* Веб-версия ролика (H.264/VP9, 720p, без звука). Исходник: public/promo2.mp4 */}
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
          >
            {t(
              'Полярная Экспедиционная Компания',
              'Polar Expedition Company'
            )}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-4"
          >
            {t(
              'Полный цикл геологоразведочных работ по всей России',
              'Full-cycle geological exploration in the Arctic and Siberia'
            )}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm md:text-base text-white/60 leading-relaxed mb-10 max-w-2xl"
          >
            {t(
              'Собственная геологоразведка: от проектирования до защиты запасов в ГКЗ',
              'In-house exploration: from design to reserves approval at GKZ'
            )}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#services" 
              onClick={scrollToServices}
              className="btn btn-primary"
            >
              {t('Наши услуги', 'Our Services')}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link href="/projects" className="btn btn-ghost">
              <Briefcase className="w-4 h-4" />
              {t('Проекты', 'Projects')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}