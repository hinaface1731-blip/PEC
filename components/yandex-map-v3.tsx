'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'

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
  'Крайний Север': [102.0, 72.0],
  'Ямал': [73.0, 68.0],
}

// Кастомный стиль карты (сепия)
const CUSTOM_MAP_STYLE = [
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

interface YandexMapV3Props {
  regions: Array<{ ru: string; en: string }>
}

export function YandexMapV3({ regions }: YandexMapV3Props) {
  const { t } = useLanguage()
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    let mapInstance: any = null

    const initMap = async () => {
      if (!mapRef.current) return

      // Ждём загрузки ymaps3
      const waitForYmaps = () => {
        return new Promise((resolve) => {
          if (window.ymaps3) {
            resolve(window.ymaps3)
            return
          }
          const interval = setInterval(() => {
            if (window.ymaps3) {
              clearInterval(interval)
              resolve(window.ymaps3)
            }
          }, 100)
        })
      }

      try {
        await waitForYmaps()
        await window.ymaps3.ready
        
        const ymaps = window.ymaps3 as any
        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps

        // Создаём карту (zoom control добавляется автоматически)
        const map = new YMap(mapRef.current, {
          location: { center: [100.0, 65.0], zoom: 4 },
          mode: 'vector',
        })
        mapInstance = map

        // Добавляем слой с кастомным стилем
        const schemeLayer = new YMapDefaultSchemeLayer({
          customization: CUSTOM_MAP_STYLE
        })
        map.addChild(schemeLayer)

        // Добавляем слой для маркеров
        const featuresLayer = new YMapDefaultFeaturesLayer()
        map.addChild(featuresLayer)

        // Добавляем маркеры для регионов
        regions.forEach(region => {
          const coords = REGIONS_COORDS[region.ru]
          if (!coords) {
            console.warn(`Координаты не найдены для региона: ${region.ru}`)
            return
          }

          const markerElement = document.createElement('div')
          markerElement.style.width = '24px'
          markerElement.style.height = '24px'
          markerElement.style.backgroundColor = '#e74c3c'
          markerElement.style.borderRadius = '50%'
          markerElement.style.border = '2px solid white'
          markerElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)'
          markerElement.style.cursor = 'pointer'
          markerElement.title = t(region.ru, region.en)
          
          const marker = new YMapMarker(
            { coordinates: coords },
            markerElement
          )
          map.addChild(marker)
        })

        if (isMounted) {
          setIsLoading(false)
        }
      } catch (err) {
        console.error('Ошибка инициализации карты:', err)
        if (isMounted) {
          setError(String(err))
          setIsLoading(false)
        }
      }
    }

    initMap()

    return () => {
      isMounted = false
      if (mapInstance) {
        mapInstance.destroy()
      }
    }
  }, [regions, t])

  if (error) {
    return (
      <div className="rounded-2xl overflow-hidden bg-red-50 dark:bg-red-950/20 p-8 text-center">
        <p className="text-red-600 dark:text-red-400">
          Ошибка загрузки карты: {error}
        </p>
        <p className="text-sm text-[var(--muted)] mt-2">
          Проверьте API ключ в .env.local
        </p>
      </div>
    )
  }

  return (
    <div 
      ref={mapRef} 
      className="rounded-2xl overflow-hidden shadow-xl bg-[var(--bg3)]"
      style={{ width: '100%', height: '500px', position: 'relative', zIndex: 1 }}
    >
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center bg-[var(--bg2)]">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <span className="text-[var(--muted)]">Загрузка карты...</span>
          </div>
        </div>
      )}
    </div>
  )
}