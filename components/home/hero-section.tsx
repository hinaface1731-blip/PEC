'use client'

import Link from '@/components/localized-link'
import { useLanguage } from '@/components/language-provider'
import { ArrowRight, Briefcase, Pause, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function HeroSection() {
  const { t } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Видео могло успеть загрузиться до гидрации — тогда onCanPlay уже не сработает
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (video.readyState >= 3) setIsVideoReady(true)
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncPlayback = () => {
      if (motionPreference.matches) video.pause()
      else void video.play().catch(() => {})
    }
    syncPlayback()
    motionPreference.addEventListener('change', syncPlayback)
    return () => motionPreference.removeEventListener('change', syncPlayback)
  }, [])

  const toggleVideo = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) void video.play().catch(() => {})
    else video.pause()
  }

  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden bg-black">
      {/* Тёмный фон, пока видео не готово, затем плавное появление ролика */}
      <div className="hero-media">
        <video
          ref={videoRef}
          muted 
          loop 
          playsInline
          preload="none"
          aria-hidden="true"
          onCanPlay={() => setIsVideoReady(true)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
            isVideoReady ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Веб-версия ролика (H.264/VP9, 720p, без звука). Исходник: public/promo2.mp4 */}
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
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
              'Full-cycle geological exploration across Russia'
            )}
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-sm md:text-base text-white/90 leading-relaxed mb-10 max-w-2xl"
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
      <button
        type="button"
        onClick={toggleVideo}
        aria-label={isPlaying ? t('Поставить видео на паузу', 'Pause background video') : t('Воспроизвести видео', 'Play background video')}
        className="absolute right-4 bottom-4 z-10 grid size-10 place-items-center rounded-full border border-white/50 bg-black/70 text-white hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-8 sm:bottom-8"
      >
        {isPlaying ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
      </button>
    </section>
  )
}
