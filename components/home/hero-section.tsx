'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/language-provider'
import { ArrowRight, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const { t } = useLanguage()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // Небольшая задержка перед началом фейда видео
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true)
    }, 200)
    
    return () => clearTimeout(fadeTimer)
  }, [])

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Чёрный фон до загрузки видео */}
      <div className="absolute inset-0 z-0 bg-black" />
      
      {/* Видео с плавным появлением */}
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
          isFadingOut ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
        >
          <source src="/promo.mp4" type="video/mp4" />
          <source src="/promo.webm" type="video/webm" />
          Ваш браузер не поддерживает видео
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