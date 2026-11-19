'use client'

import { useState } from 'react'
import { FallbackImage } from '@/components/ui/fallback-image'

interface Step {
  image: string
  titleRu: string
  titleEn: string
  descRu: string
  descEn: string
}

interface StepsCarouselProps {
  steps: Step[]
  t: (ru: string, en: string) => string
}

export function StepsCarousel({ steps, t }: StepsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentStep = steps[currentIndex]
  const image = currentStep.image
  const isIllustration = image.startsWith('/images/work-stage-illustrations/')
  const isTechnical = /^\/images\/(results|methods|stages)\//.test(image)

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1fr)]">
      <ol className="flex flex-col gap-2">
        {steps.map((step, index) => (
          <li key={step.titleRu}>
            <button
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-current={index === currentIndex ? 'step' : undefined}
              className="flex w-full items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-start font-medium text-[var(--text)] transition-colors hover:border-primary aria-[current=step]:border-primary aria-[current=step]:bg-accent"
            >
              <span aria-hidden="true" className="shrink-0 text-sm tabular-nums">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{t(step.titleRu, step.titleEn)}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="self-start overflow-hidden rounded-2xl border border-border bg-card">
        <div aria-live="polite" className="p-5 sm:p-6">
          <h3 className="text-xl font-semibold text-[var(--text)]">{t(currentStep.titleRu, currentStep.titleEn)}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{t(currentStep.descRu, currentStep.descEn)}</p>
        </div>
        <figure className="border-t border-border">
          <div className={`relative aspect-[16/10] ${isTechnical ? 'bg-white' : 'bg-muted'}`}>
            <FallbackImage
              src={image}
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 60vw"
              className={isTechnical ? 'object-contain p-3' : 'object-cover'}
            />
          </div>
          {isIllustration && (
            <figcaption className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
              {t('Иллюстрация', 'Illustration')}
            </figcaption>
          )}
        </figure>
      </div>
    </div>
  )
}
