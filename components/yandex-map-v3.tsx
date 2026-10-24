'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { createMarkerElement, loadYmaps3, type MapPoint } from '@/lib/ymaps3'

// Координаты регионов (Яндекс: [долгота, широта])
const REGIONS_COORDS: Record<string, [number, number]> = {
  'Таймыр': [98.0, 74.0],
  'Якутия': [130.0, 66.0],
  'Чукотка': [170.0, 66.0],
  'Алтай': [86.0, 51.0],
  'ХМАО': [70.0, 61.0],
  'Забайкалье': [115.0, 52.0],
  'Кольский полуостров': [36.0, 68.0],
  'Камчатка': [160.0, 56.0],
  'Иркутская область': [103.0, 53.0],
  'Магаданская область': [153.0, 63.0],
  'Красноярский край': [96.0, 64.0],
  'Эвенкия': [101.0, 62.0],
  'Крайний Север': [102.0, 72.0],
  'Ямал': [73.0, 68.0],
}

// Кастомный стиль карты (сепия)
export const CUSTOM_MAP_STYLE = [
  { tags: { any: ['country'] }, elements: 'geometry.fill', stylers: [{ color: '#ad9585' }, { opacity: 0.8 }] },
  { tags: { any: ['country'] }, elements: 'geometry.outline', stylers: [{ color: '#ceccca' }, { opacity: 0.15 }] },
  { tags: { any: ['region'] }, elements: 'geometry.fill', stylers: [{ color: '#c2afa3' }, { opacity: 0.8 }] },
  { tags: { any: ['water'] }, elements: 'geometry', stylers: [{ color: '#bab7b5' }] },
  { tags: { any: ['vegetation'] }, elements: 'geometry', stylers: [{ color: '#d2d1d0' }, { opacity: 0.8 }] },
  { tags: { any: ['road'] }, elements: 'geometry.fill', stylers: [{ color: '#ffffff' }] },
  { tags: { any: ['building'] }, elements: 'geometry.fill', stylers: [{ color: '#dddbda' }, { opacity: 0.7 }] },
  { tags: { any: ['locality'] }, elements: 'label.text.fill', stylers: [{ color: '#433f3d' }] },
  { tags: { any: ['locality'] }, elements: 'label.text.outline', stylers: [{ color: '#ffffff' }, { opacity: 0.5 }] },
  { tags: { any: ['poi'] }, elements: 'label.text.fill', stylers: [{ color: '#504c49' }] },
]

interface YandexMapProps {
  points: MapPoint[]
  center: [number, number]
  zoom: number
  height?: number
  styled?: boolean
  className?: string
}

/** Универсальная карта на API 3.0: сама загружает скрипт, показывает лоадер и аккуратную заглушку при ошибке. */
export function YandexMap({ points, center, zoom, height = 500, styled = true, className = '' }: YandexMapProps) {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  // Перерисовываем карту только при реальном изменении данных, а не при каждом рендере родителя
  const pointsKey = JSON.stringify(points)
  const centerKey = center.join(',')

  useEffect(() => {
    let cancelled = false
    let map: { destroy: () => void } | null = null

    loadYmaps3()
      .then((ymaps3) => {
        if (cancelled || !containerRef.current) return
        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3 as any

        const instance = new YMap(containerRef.current, {
          location: { center, zoom },
          mode: 'vector',
        })
        instance.addChild(new YMapDefaultSchemeLayer(styled ? { customization: CUSTOM_MAP_STYLE } : {}))
        instance.addChild(new YMapDefaultFeaturesLayer())
        points.forEach((point) => {
          instance.addChild(new YMapMarker({ coordinates: point.coordinates }, createMarkerElement(point)))
        })
        map = instance
        setStatus('ready')
      })
      .catch((err) => {
        if (cancelled) return
        console.error('Ошибка инициализации карты:', err)
        setStatus('error')
      })

    return () => {
      cancelled = true
      map?.destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pointsKey, centerKey, zoom, styled])

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-xl bg-[var(--bg3)] ${className}`}
      style={{ width: '100%', height }}
    >
      <div ref={containerRef} className="absolute inset-0" />
      {status !== 'ready' && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg2)] p-6 text-center">
          {status === 'loading' ? (
            <div>
              <div className="w-10 h-10 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <span className="text-[var(--muted)]">{t('Загрузка карты...', 'Loading map...')}</span>
            </div>
          ) : (
            <span className="text-[var(--muted)]">{t('Карта временно недоступна', 'Map is temporarily unavailable')}</span>
          )}
        </div>
      )}
    </div>
  )
}

interface YandexMapV3Props {
  regions: Array<{ ru: string; en: string }>
}

export function YandexMapV3({ regions }: YandexMapV3Props) {
  const { t } = useLanguage()

  const points: MapPoint[] = regions.flatMap((region) => {
    const coords = REGIONS_COORDS[region.ru]
    if (!coords) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Координаты не найдены для региона: ${region.ru}`)
      }
      return []
    }
    return [{ coordinates: coords, title: t(region.ru, region.en), color: '#e74c3c' }]
  })

  return <YandexMap points={points} center={[100.0, 65.0]} zoom={4} />
}
