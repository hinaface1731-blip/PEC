'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { PageLayout } from '@/components/page-layout'
import Image from 'next/image'
import Link from 'next/link'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Генерация массива фотографий от 1 до 86 с разными высотами для Masonry эффекта
const generateGalleryImages = () => {
  const images = []
  for (let i = 1; i <= 86; i++) {
    // Случайная высота для Masonry эффекта (от 250 до 450px)
    const randomHeight = 280 + Math.floor(Math.random() * 200)
    images.push({
      id: i,
      src: `/images/gallery/1 (${i}).jpg`,
      title: `Экспедиция ПЭК`,
      year: '2024-2025',
      height: randomHeight,
    })
  }
  return images
}

const allImages = generateGalleryImages()

export default function GalleryPage() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [visibleCount, setVisibleCount] = useState(30)

  // Предзагрузка первых 12 изображений
  useEffect(() => {
    const preloadImages = allImages.slice(0, 12)
    preloadImages.forEach((image) => {
      const img = new window.Image()
      img.src = image.src
    })
  }, [])

  const openModal = (index: number) => {
    setSelectedImage(index)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < allImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 30, allImages.length))
  }

  const visibleImages = allImages.slice(0, visibleCount)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen, selectedImage])

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-br from-card to-background overflow-hidden">
          <div className="absolute inset-0">
            <Image
                        src="/images/gallery/1 (25).jpg"
                        alt="Фотогаллерея"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                        style={{ objectPosition: 'center 50%' }}
                      />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-white/80 mb-4 text-sm flex-wrap">
                <Link href="/" className="hover:text-white transition-colors">
                  {t('Главная', 'Home')}
                </Link>
                <span>/</span>
                <span className="text-white">{t('Фотогалерея', 'Gallery')}</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
                  {t('Фотогалерея', 'Photo Gallery')}
                </h1>
              </div>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {t(
                  '86 фотографий из экспедиций: работа оборудования, команда ПЭК и уникальная природа Таймыра',
                  '86 photos from expeditions: equipment, PEC team and the unique nature of Taimyr'
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Masonry Gallery — на всю ширину */}
        <section className="py-8">
          {/* Masonry Grid с разными высотами */}
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-4 space-y-4 px-4">
            {visibleImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 20) * 0.02 }}
                onClick={() => openModal(index)}
                className="break-inside-avoid cursor-pointer group relative rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all"
              >
                <div style={{ position: 'relative', width: '100%', height: image.height }}>
                  <Image
                    src={image.src}
                    alt={`Фото ${image.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    onLoad={() => setLoadedImages(prev => new Set(prev).add(image.id))}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white text-sm font-medium">Фото {image.id}</p>
                    <p className="text-white/70 text-xs">{image.year}</p>
                  </div>
                </div>
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < allImages.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-card border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors"
              >
                {t('Загрузить ещё', 'Load more')} ({allImages.length - visibleCount} {t('осталось', 'remaining')})
              </button>
            </div>
          )}

          {/* Counter */}
          {visibleCount === allImages.length && (
            <p className="text-center text-muted-foreground text-sm mt-8">
              {t('Все 86 фотографий загружены', 'All 86 photos loaded')}
            </p>
          )}

          {/* Note */}
          <p className="text-center text-muted-foreground text-xs mt-8 pt-4 border-t border-border max-w-2xl mx-auto px-4">
            {t(
              'Фотографии из экспедиций Полярной Экспедиционной Компании. Работы наших геологов, геофизиков, буровиков и маркшейдеров.',
              'Photos from Polar Expedition Company expeditions. Works of our geologists, geophysicists, drillers and surveyors.'
            )}
          </p>
        </section>

        {/* Modal */}
        {isModalOpen && selectedImage !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors disabled:opacity-30"
              disabled={selectedImage === 0}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div 
              className="relative max-w-6xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[selectedImage].src}
                alt={`Фото ${selectedImage + 1}`}
                width={1200}
                height={800}
                className="object-contain rounded-lg w-full h-auto max-h-[85vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <p className="text-white text-lg font-semibold">
                  Фото {selectedImage + 1} из {allImages.length}
                </p>
              </div>
            </div>
            
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors disabled:opacity-30"
              disabled={selectedImage === allImages.length - 1}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <span className="text-white/60 text-sm">
                {selectedImage + 1} / {allImages.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}