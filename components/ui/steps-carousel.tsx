'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface Step {
  titleRu: string
  titleEn: string
  descRu: string
  descEn: string
}

interface StepsCarouselProps {
  steps: Step[]
  stepImages: string[]
  t: (ru: string, en: string) => string
}

export function StepsCarousel({ steps, stepImages, t }: StepsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const totalSteps = steps.length

  const next = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSteps)
      setIsFading(false)
    }, 200)
  }

  const prev = () => {
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalSteps) % totalSteps)
      setIsFading(false)
    }, 200)
  }

  const goTo = (index: number) => {
    if (index === currentIndex) return
    setIsFading(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsFading(false)
    }, 200)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const currentStep = steps[currentIndex]
  const currentImage = stepImages[currentIndex] || stepImages[0]

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Левая колонка - текст с фиксированной высотой */}
        <div className="space-y-6">
          {/* Прогресс-бар */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-[var(--muted)]">
              <span>{t('Этап', 'Step')} {currentIndex + 1}</span>
              <span>{currentIndex + 1} / {totalSteps}</span>
            </div>
            <div className="h-1 bg-[var(--bg3)] rounded-full overflow-hidden">
              <div 
                className="h-full bg-[var(--accent)] rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentIndex + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Текстовый блок с фиксированной высотой и плавным fade-in */}
          <div 
            className="space-y-4 transition-opacity duration-200"
            style={{ opacity: isFading ? 0 : 1 }}
          >
            {/* Номер шага */}
            <div className="flex items-center gap-3">
             
              
            </div>

            {/* Заголовок - фиксированная высота (2 строки) */}
            <div className="min-h-[4rem]">
              <h3 className="text-2xl font-bold text-[var(--text)] leading-tight">
                {t(currentStep.titleRu, currentStep.titleEn)}
              </h3>
            </div>

            {/* Описание - фиксированная высота (3 строки) */}
            <div className="min-h-[4.5rem]">
              <p className="text-[var(--muted)] leading-relaxed">
                {t(currentStep.descRu, currentStep.descEn)}
              </p>
            </div>
          </div>

          {/* Dots навигация под текстом */}
          <div className="flex gap-2 pt-4">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-8 bg-[var(--accent)]'
                    : 'w-1.5 bg-[var(--border)] hover:bg-[var(--muted)]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Правая колонка - изображение с кнопками на нём */}
        <div className="relative group">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg3)]">
            <Image
              src={currentImage}
              alt={t(currentStep.titleRu, currentStep.titleEn)}
              fill
              className="object-cover transition-opacity duration-200"
              style={{ opacity: isFading ? 0.8 : 1 }}
            />
            
            {/* Номер шага на картинке */}
            <div className="absolute top-4 left-4">
              <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white font-bold">
                {currentIndex + 1}
              </div>
            </div>

            {/* Кнопки навигации НА КАРТИНКЕ */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}