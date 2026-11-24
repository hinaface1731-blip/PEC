'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { createMarkerElement, loadYmaps3, type MapPoint } from '@/lib/ymaps3'

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
  fitPoints?: boolean
  height?: number
  styled?: boolean
  className?: string
}

/** Универсальная карта на API 3.0: сама загружает скрипт, показывает лоадер и аккуратную заглушку при ошибке. */
export function YandexMap({ points, center, zoom, fitPoints = false, height = 500, styled = true, className = '' }: YandexMapProps) {
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

        const longitudes = points.map(({ coordinates }) => coordinates[0])
        const latitudes = points.map(({ coordinates }) => coordinates[1])
        const fitBounds = fitPoints && points.length > 1
        const viewport = fitBounds
          ? {
              location: {
                bounds: [
                  [Math.min(...longitudes), Math.min(...latitudes)],
                  [Math.max(...longitudes), Math.max(...latitudes)],
                ],
              },
              margin: [32, 32, 32, 32],
            }
          : { location: { center, zoom } }
        const instance = new YMap(containerRef.current, {
          ...viewport,
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
  }, [pointsKey, centerKey, zoom, fitPoints, styled])

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
