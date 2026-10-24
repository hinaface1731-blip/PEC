'use client'

import { useLanguage } from '@/components/language-provider'
import { YandexMap } from '@/components/yandex-map-v3'
import type { MapPoint } from '@/lib/ymaps3'

const regions = [
  { ru: 'Таймыр', en: 'Taimyr', coordinates: [109.921747, 76.143144], projects: 7 },
  { ru: 'Якутия', en: 'Yakutia', coordinates: [130.0, 66.0], projects: 2 },
  { ru: 'Чукотка', en: 'Chukotka', coordinates: [170.0, 66.0], projects: 5 },
  { ru: 'Алтай', en: 'Altay', coordinates: [86.0, 51.0], projects: 1 },
  { ru: 'Забайкалье', en: 'Transbaikal', coordinates: [115.0, 52.0], projects: 1 },
  { ru: 'Камчатка', en: 'Kamchatka', coordinates: [160.0, 56.0], projects: 2 },
  { ru: 'Магадан', en: 'Magadan', coordinates: [159.740413, 62.374036], projects: 2 },
  { ru: 'Красноярский Край', en: 'Krasnoyarsk Kray', coordinates: [86.799120, 67.746315], projects: 2 },
]

const bases = [
  { 
    ru: 'Красноярск', 
    en: 'Krasnoyarsk', 
    coordinates: [92.8524, 56.0084], 
    type: 'headquarters', 
    address: 'ул. Ленина, 84', 
    phone: '+7 (391) 205-15-84' 
  },
  { 
    ru: 'Хатанга', 
    en: 'Khatanga', 
    coordinates: [102.4722, 71.9806], 
    type: 'base', 
    address: 'ул. Полярная, 8', 
    phone: '+7 (391) 205-15-85' 
  },
]

export function GeographySection() {
  const { t } = useLanguage()

  const points: MapPoint[] = [
    ...regions.map((region) => ({
      coordinates: region.coordinates as [number, number],
      title: t(region.ru, region.en),
      color: '#e74c3c',
      size: 32,
      label: String(region.projects),
    })),
    ...bases.map((base) => ({
      coordinates: base.coordinates as [number, number],
      title: t(base.ru, base.en),
      color: base.type === 'headquarters' ? '#2980b9' : '#3498db',
    })),
  ]

  return (
    <section className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
            {t('География работ', 'Work Geography')}
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            {t('Проекты в ключевых горнодобывающих регионах России', 'Projects in key mining regions of Russia')}
          </p>
        </div>

        <YandexMap points={points} center={[100.0, 65.0]} zoom={4} height={550} className="mb-8" />

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#e74c3c]" />
            <span className="text-sm text-[var(--text)]">{t('Регионы геологоразведки', 'Exploration regions')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#2980b9]" />
            <span className="text-sm text-[var(--text)]">{t('Головной офис', 'Headquarters')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#3498db]" />
            <span className="text-sm text-[var(--text)]">{t('Производственная база', 'Production base')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}