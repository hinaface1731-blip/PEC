'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'

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

export function GeographySection() {
  const { t } = useLanguage()
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    let mapInstance: any = null

    const initMap = async () => {
      if (!mapRef.current) return

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
        
        // ✅ Используем as any для обхода TypeScript
        const ymaps = window.ymaps3 as any
        const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps

        const map = new YMap(mapRef.current, {
          location: { center: [100.0, 65.0], zoom: 4 },
          mode: 'vector',
        })
        mapInstance = map

        const schemeLayer = new YMapDefaultSchemeLayer({
          customization: CUSTOM_MAP_STYLE
        })
        map.addChild(schemeLayer)

        const featuresLayer = new YMapDefaultFeaturesLayer()
        map.addChild(featuresLayer)

        regions.forEach(region => {
          const markerElement = document.createElement('div')
          markerElement.style.width = '32px'
          markerElement.style.height = '32px'
          markerElement.style.backgroundColor = '#e74c3c'
          markerElement.style.borderRadius = '50%'
          markerElement.style.border = '3px solid white'
          markerElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)'
          markerElement.style.cursor = 'pointer'
          markerElement.style.display = 'flex'
          markerElement.style.alignItems = 'center'
          markerElement.style.justifyContent = 'center'
          markerElement.style.color = 'white'
          markerElement.style.fontSize = '12px'
          markerElement.style.fontWeight = 'bold'
          markerElement.textContent = String(region.projects)
          markerElement.title = t(region.ru, region.en)
          
          const marker = new YMapMarker(
            { coordinates: region.coordinates },
            markerElement
          )
          map.addChild(marker)
        })

        bases.forEach(base => {
          const isHeadquarters = base.type === 'headquarters'
          const markerElement = document.createElement('div')
          markerElement.style.width = '24px'
          markerElement.style.height = '24px'
          markerElement.style.backgroundColor = isHeadquarters ? '#2980b9' : '#3498db'
          markerElement.style.borderRadius = '50%'
          markerElement.style.border = '2px solid white'
          markerElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)'
          markerElement.style.cursor = 'pointer'
          markerElement.title = t(base.ru, base.en)
          
          const marker = new YMapMarker(
            { coordinates: base.coordinates },
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
  }, [t])

  if (error) {
    return (
      <section className="section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)] mb-4">
              {t('География работ', 'Work Geography')}
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden bg-red-50 dark:bg-red-950/20 p-8 text-center">
            <p className="text-red-600 dark:text-red-400">
              Ошибка загрузки карты: {error}
            </p>
            <p className="text-sm text-[var(--muted)] mt-2">
              Проверьте API ключ в .env.local
            </p>
          </div>
        </div>
      </section>
    )
  }

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

        <div
          ref={mapRef}
          className="rounded-2xl overflow-hidden mb-8 shadow-xl bg-[var(--bg3)]"
          style={{ width: '100%', height: '550px', position: 'relative', zIndex: 1 }}
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