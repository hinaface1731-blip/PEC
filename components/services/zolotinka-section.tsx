'use client'

import Image from 'next/image'
import { MapPin, ScanLine, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export function ZolotinkaSection() {
  const { t } = useLanguage()

  const highlights = [
    {
      icon: ScanLine,
      title: t('Методика НСАМ № 392-Х/РС', 'NSAM Method No. 392-Kh/RS'),
      text: t(
        'Энергодисперсионная рентгенофлуоресцентная спектрометрия после предварительного концентрирования золота.',
        'Energy-dispersive X-ray fluorescence spectrometry after gold preconcentration.',
      ),
    },
    {
      icon: ShieldCheck,
      title: t('Внутрилабораторный контроль', 'Internal quality control'),
      text: t(
        'Параллельные определения помогают проверять воспроизводимость результатов.',
        'Parallel determinations help verify the reproducibility of results.',
      ),
    },
    {
      icon: MapPin,
      title: t('Марсианская площадь · 2025', 'Mars Field · 2025'),
      text: t(
        'Был успешно проанализирован весь объем проб с октября по декабрь.',
        'Analyzed 2,714 samples from October through December.',
      ),
    },
  ]

  return (
    <section id="zolotinka" aria-labelledby="zolotinka-title" className="scroll-mt-28 px-4 pb-4 sm:px-8">
      <div className="container overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg2)]">
        <div className="grid bg-[#191715] text-white lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center bg-[radial-gradient(ellipse_at_top_left,#3a2920,transparent_65%)] p-6 sm:p-10 lg:p-12 xl:p-14">
            <p className="max-w-sm text-xs font-semibold leading-relaxed tracking-[0.12em] text-orange-200 uppercase">
              {t('Полевая аналитическая лаборатория', 'Field analytical laboratory')}
            </p>
            <h2 id="zolotinka-title" className="mt-3 text-4xl leading-none font-bold sm:text-6xl">
              {t('«Золотинка»', 'Zolotinka')}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-stone-200 sm:text-lg">
              {t(
                'Определяем содержание золота в пробах горных пород и руд прямо в полевых условиях.',
                'We determine gold content in rock and ore samples directly in the field.',
              )}
            </p>
            <dl className="mt-7 max-w-md border-t border-white/15 pt-5 sm:mt-8 sm:pt-6">
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-stone-300">
                  {t('Диапазон определения золота по методике', 'Gold determination range under the method')}
                </dt>
                <dd className="text-3xl font-bold tracking-tight text-orange-200 tabular-nums sm:text-4xl">
                  {t('0,3–50 г/т', '0.3–50 g/t')}
                </dd>
              </div>
            </dl>
          </div>

          <figure className="flex min-w-0 flex-col bg-[#272420]">
            <div className="relative aspect-[4/3] w-full flex-1">
              <Image
                src="/images/zolotinka-gold-micrograph.webp"
                alt={t(
                  'Золотистые зёрна на микрофотографии полированного образца',
                  'Gold-colored grains in a micrograph of a polished specimen',
                )}
                fill
                sizes="(min-width: 1344px) 640px, (min-width: 1024px) 50vw, 100vw"
                className="object-cover object-bottom"
              />
            </div>
            <figcaption className="border-t border-white/10 px-6 py-3 text-sm text-stone-200 sm:px-8">
              {t('Золото с халькопиритом · микрофотография, ×50', 'Gold with chalcopyrite · micrograph, ×50')}
            </figcaption>
          </figure>
        </div>

        <ul className="grid divide-y divide-[var(--border)] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 p-6 sm:px-8 sm:py-7">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-glow)] text-[var(--accent)]">
                <Icon aria-hidden="true" className="size-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-[var(--text)]">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
