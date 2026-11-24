'use client'

import Image from 'next/image'
import { ArrowRight, AudioLines, Compass, Drill, Layers3, MoveDownRight } from 'lucide-react'
import Link from '@/components/localized-link'
import { useLanguage } from '@/components/language-provider'
import { geophysicsMethods, geophysicsMethodIds, geophysicsPath, type GeophysicsMethod } from '@/lib/geophysics-methods'
import { GeophysicsSectionViewer } from './geophysics-section-viewer'

const icons = { electrical: AudioLines, magnetic: Compass, logging: Drill, software: Layers3 }

const cardDescriptions = {
  electrical: ['АМТЗ, ЗСБ, ВП и электротомография', 'AMT, TEM, IP and resistivity imaging'],
  magnetic: ['Наземная и аэромагнитная съёмка с БПЛА', 'Ground and drone magnetic surveys'],
  logging: ['Каротажные кривые и траектории скважин', 'Borehole logs and deviation surveys'],
  software: ['Проверка, инверсия и интерпретация', 'Quality control, inversion and interpretation'],
} as const

export function GeophysicsMethodLinks({ current }: { current?: GeophysicsMethod }) {
  const { t } = useLanguage()

  return (
    <section id="methods" aria-labelledby="geophysics-method-links"
      className="scroll-mt-24 border-y border-border bg-card px-4 py-12 sm:px-8 sm:py-16">
      <div className="container">
        <h2 id="geophysics-method-links" className="mb-6 text-2xl font-bold sm:text-3xl">
          {current ? t('Другие направления геофизики', 'Related geophysical services') : t('Направления геофизики', 'Geophysical services')}
        </h2>
        <div className={`grid gap-3 sm:grid-cols-2 ${current ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
          {geophysicsMethodIds.filter((id) => id !== current).map((id) => {
            const Icon = icons[id]
            return (
              <Link key={id} href={`${geophysicsPath}/${id}`}
                className="group flex min-w-0 flex-col rounded-2xl border border-border bg-background p-5 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2">
                <div className="mb-5 flex items-center justify-between">
                  <Icon aria-hidden="true" className="size-6 text-accent-foreground" />
                  <ArrowRight aria-hidden="true" className="size-5 text-muted-foreground transition-transform motion-safe:group-hover:translate-x-1" />
                </div>
                <h3 className="font-bold leading-snug">{t(...geophysicsMethods[id].title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(cardDescriptions[id][0], cardDescriptions[id][1])}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function GeophysicsMethodContent({ method }: { method: GeophysicsMethod }) {
  const { t } = useLanguage()
  const { title, summary, image, imageAlt, techniques, delivery, note } = geophysicsMethods[method]

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#101a23] text-white">
        <div className="hero-media">
          <Image src={image} alt={t(...imageAlt)} fill preload sizes="100vw" className="object-cover object-center" />
        </div>
        <div className="container relative z-10 px-4 py-16 sm:px-8 sm:py-24">
          <nav aria-label={t('Путь к странице', 'Breadcrumb')} className="mb-7 flex flex-wrap gap-2 text-sm text-slate-200">
            <Link href="/services" className="underline-offset-4 hover:underline">{t('Услуги', 'Services')}</Link>
            <span aria-hidden="true">/</span>
            <Link href={geophysicsPath} className="underline-offset-4 hover:underline">{t('Геофизика', 'Geophysics')}</Link>
          </nav>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">{t(...title)}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100 sm:text-xl">{t(...summary)}</p>
        </div>
      </section>

      <div className="container grid gap-10 px-4 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)] lg:items-start lg:gap-12">
        <div className="min-w-0 lg:col-start-2 lg:row-start-1">
          <GeophysicsSectionViewer key={method} method={method} />
        </div>
        <section aria-labelledby="geophysics-techniques" className="lg:col-start-1 lg:row-start-1">
          <h2 id="geophysics-techniques" className="mb-4 text-2xl font-bold sm:text-3xl">
            {method === 'software' ? t('Этапы обработки', 'Processing steps') : t('Методы измерений', 'Survey techniques')}
          </h2>
          <dl className="divide-y divide-border">
            {techniques.map(({ name, detail }) => (
              <div key={name[1]} className="py-4">
                <dt className="font-bold">{t(...name)}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{t(...detail)}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <section className="container px-4 pb-12 sm:px-8 sm:pb-16" aria-labelledby="geophysics-delivery">
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-5 sm:p-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div>
            <h2 id="geophysics-delivery" className="mb-4 text-2xl font-bold">{t('Что получает заказчик', 'What the client receives')}</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {delivery.map((item) => <li key={item[1]}>{t(...item)}</li>)}
            </ul>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-muted p-4 text-sm leading-relaxed text-foreground sm:p-5">
            <MoveDownRight aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
            <p>{t(...note)}</p>
          </div>
        </div>
      </section>
      <GeophysicsMethodLinks current={method} />
    </>
  )
}
