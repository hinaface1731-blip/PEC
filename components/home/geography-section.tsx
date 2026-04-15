'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'

const regions = [
  { ru: 'Таймыр', en: 'Taimyr', coordinates: [74.0, 98.0], type: 'exploration', projects: 7 },
  { ru: 'Якутия', en: 'Yakutia', coordinates: [66.0, 130.0], type: 'exploration', projects: 2 },
  { ru: 'Чукотка', en: 'Chukotka', coordinates: [66.0, -170.0], type: 'exploration', projects: 5 },
  { ru: 'Алтай', en: 'Altay', coordinates: [51.0, 86.0], type: 'exploration', projects: 1 },
  { ru: 'Забайкалье', en: 'Transbaikal', coordinates: [52.0, 115.0], type: 'exploration', projects: 1 },
  { ru: 'Кольский полуостров', en: 'Kola Peninsula', coordinates: [68.0, 36.0], type: 'exploration', projects: 4 },
  { ru: 'Камчатка', en: 'Kamchatka', coordinates: [56.0, 160.0], type: 'exploration', projects: 2, description: 'Геологоразведка на полуострове' },
]

const bases = [
  { ru: 'Красноярск', en: 'Krasnoyarsk', coordinates: [56.0084, 92.8524], type: 'headquarters', address: 'ул. Ленина, 84', phone: '+7 (391) 123-45-67' },
  { ru: 'Хатанга', en: 'Khatanga', coordinates: [71.9806, 102.4722], type: 'base', address: 'ул. Полярная, 8', phone: '+7 (391) 123-45-68' },
]

export function GeographySection() {
  const { t } = useLanguage()
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Если карта уже инициализирована — выходим
    if (mapInstanceRef.current) return

    const initMap = () => {
      if (!mapRef.current || !window.ymaps) return

      try {
        const map = new window.ymaps.Map(mapRef.current, {
          center: [65.0, 100.0],
          zoom: 4,
          controls: ['zoomControl', 'fullscreenControl']
        })

        mapInstanceRef.current = map

        // Маркеры регионов
        regions.forEach(region => {
          const placemark = new window.ymaps.Placemark(
            region.coordinates,
            {
              hintContent: t(region.ru, region.en),
              balloonContent: `
                <div style="padding: 10px; font-family: sans-serif;">
                  <strong style="color: #e74c3c;">${t(region.ru, region.en)}</strong><br/>
                  🎯 Активные геологоразведочные работы<br/>
                  📊 Проектов: ${region.projects}
                  ${region.description ? `<br/>📝 ${region.description}` : ''}
                </div>
              `
            },
            {
              preset: 'islands#redIcon',
              iconColor: '#e74c3c'
            }
          )
          map.geoObjects.add(placemark)
        })

        // Маркеры баз
        bases.forEach(base => {
          const placemark = new window.ymaps.Placemark(
            base.coordinates,
            {
              hintContent: t(base.ru, base.en),
              balloonContent: `
                <div style="padding: 10px; font-family: sans-serif;">
                  <strong style="color: #3498db;">🏭 ${t(base.ru, base.en)}</strong><br/>
                  📍 ${base.address}<br/>
                  📞 ${base.phone}<br/>
                  🏢 ${base.type === 'headquarters' ? 'Головной офис' : 'Производственная база'}
                </div>
              `
            },
            {
              preset: base.type === 'headquarters' ? 'islands#blueIcon' : 'islands#darkBlueIcon',
              iconColor: '#3498db'
            }
          )
          map.geoObjects.add(placemark)
        })

        setIsLoading(false)
      } catch (err) {
        console.error('Map init error:', err)
      }
    }

    // Если API уже загружен — сразу инициализируем
    if (window.ymaps) {
      window.ymaps.ready(initMap)
      return
    }

    // Если скрипт уже грузится — ждём
    const existingScript = document.querySelector('script[src*="api-maps.yandex.ru"]')
    if (existingScript) {
      const interval = setInterval(() => {
        if (window.ymaps) {
          clearInterval(interval)
          window.ymaps.ready(initMap)
        }
      }, 100)
      
      setTimeout(() => clearInterval(interval), 10000)
      return () => clearInterval(interval)
    }

    // Загружаем API
    const script = document.createElement('script')
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=b14c1be4-5b7c-444a-b7b4-05a0bfc3ab10&lang=ru_RU'
    script.async = true
    script.onload = () => {
      if (window.ymaps) {
        window.ymaps.ready(initMap)
      }
    }

    document.head.appendChild(script)

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy()
        mapInstanceRef.current = null
      }
    }
  }, [t])

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
          className="rounded-2xl overflow-hidden mb-8 shadow-xl bg-gray-100 relative"
          style={{ width: '100%', height: '550px' }}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="text-[var(--muted)]">Загрузка карты...</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <span className="text-sm text-[var(--text)]">{t('Регионы геологоразведки', 'Exploration regions')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
            <span className="text-sm text-[var(--text)]">{t('Производственная база', 'Production base')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700" />
            <span className="text-sm text-[var(--text)]">{t('Головной офис', 'Headquarters')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

declare global {
  interface Window {
    ymaps: any
  }
}