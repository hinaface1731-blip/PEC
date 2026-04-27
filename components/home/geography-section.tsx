'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/components/language-provider'
import { useYandexMapsContext } from '@/components/yandex-map-loader'

const regions = [
  { ru: 'Таймыр', en: 'Taimyr', coordinates: [76.143144, 109.921747] as [number, number], projects: 7 },
  { ru: 'Якутия', en: 'Yakutia', coordinates: [66.0, 130.0] as [number, number], projects: 2 },
  { ru: 'Чукотка', en: 'Chukotka', coordinates: [66.0, 170.0] as [number, number], projects: 5 },
  { ru: 'Алтай', en: 'Altay', coordinates: [51.0, 86.0] as [number, number], projects: 1 },
  { ru: 'Забайкалье', en: 'Transbaikal', coordinates: [52.0, 115.0] as [number, number], projects: 1 },
  { ru: 'Камчатка', en: 'Kamchatka', coordinates: [56.0, 160.0] as [number, number], projects: 2 },
  { ru: 'Магадан', en: 'Magadan', coordinates: [62.374036, 159.740413] as [number, number], projects: 2 },
  { ru: 'Красноярский Край', en: 'Krasnoyarsk Kray', coordinates: [67.746315, 86.799120] as [number, number], projects: 2 },
]

const bases = [
  { 
    ru: 'Красноярск', 
    en: 'Krasnoyarsk', 
    coordinates: [56.0084, 92.8524] as [number, number], 
    type: 'headquarters', 
    address: 'ул. Ленина, 84', 
    phone: '+7 (391) 205-15-84' 
  },
  { 
    ru: 'Хатанга', 
    en: 'Khatanga', 
    coordinates: [71.9806, 102.4722] as [number, number], 
    type: 'base', 
    address: 'ул. Полярная, 8', 
    phone: '+7 (391) 205-15-85' 
  },
]

export function GeographySection() {
  const { t } = useLanguage()
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const { isReady, ymaps } = useYandexMapsContext()

  useEffect(() => {
    if (!isReady || !ymaps || !mapRef.current || mapInstanceRef.current) return

    try {
      // Карта с более тёмным/светлым стилем в зависимости от темы
      const map = new ymaps.Map(mapRef.current, {
        center: [65.0, 100.0],
        zoom: 4,
        controls: ['zoomControl', 'fullscreenControl'],
      })
      
      // ✅ Настройка внешнего вида карты
      // Убираем лишние элементы управления, делаем минималистичный стиль
      map.behaviors.disable(['scrollZoom']) // можно раскомментировать, если нужно отключить скролл
      
      // Настройка карты: убираем логотип Яндекса (опционально)
      // map.container.fitToViewport()

      mapInstanceRef.current = map

      // Маркеры регионов (красные с кружком)
      regions.forEach(region => {
        const placemark = new ymaps.Placemark(
          region.coordinates,
          {
            hintContent: t(region.ru, region.en),
            balloonContent: `
              <div style="padding: 12px; font-family: 'Manrope', sans-serif; min-width: 200px;">
                <strong style="color: #e74c3c; font-size: 16px;">🗺️ ${t(region.ru, region.en)}</strong><br/>
                <hr style="margin: 8px 0; border-color: #eee;" />
                🎯 Активные геологоразведочные работы<br/>
                📊 Проектов: <strong>${region.projects}</strong>
              </div>
            `,
          },
          { 
            preset: 'islands#redCircleIcon',
            iconColor: '#e74c3c'
          }
        )
        map.geoObjects.add(placemark)
      })

      // Маркеры баз — разные стили для головного офиса и производственной базы
      bases.forEach(base => {
        // Определяем цвет и иконку в зависимости от типа
        const isHeadquarters = base.type === 'headquarters'
        const iconPreset = isHeadquarters ? 'islands#blueGovernmentIcon' : 'islands#blueFactoryIcon'
        const iconColor = isHeadquarters ? '#2980b9' : '#3498db'
        const balloonColor = isHeadquarters ? '#2980b9' : '#3498db'
        
        const placemark = new ymaps.Placemark(
          base.coordinates,
          {
            hintContent: t(base.ru, base.en),
            balloonContent: `
              <div style="padding: 12px; font-family: 'Manrope', sans-serif; min-width: 220px;">
                <strong style="color: ${balloonColor}; font-size: 16px;">
                  ${isHeadquarters ? '🏢' : '🏭'} ${t(base.ru, base.en)}
                </strong><br/>
                <hr style="margin: 8px 0; border-color: #eee;" />
                📍 ${base.address}<br/>
                📞 ${base.phone}<br/>
                ${isHeadquarters ? '⭐ Головной офис' : '⚙️ Производственная база'}
              </div>
            `,
          },
          { 
            preset: iconPreset,
            iconColor: iconColor
          }
        )
        
        // Добавляем метку
        map.geoObjects.add(placemark)
      })
      
      // Опционально: добавляем выделение границ регионов (если нужно)
      // map.geoObjects.add(regionsLayer)
      
    } catch (err) {
      console.error('Ошибка инициализации карты:', err)
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy()
        mapInstanceRef.current = null
      }
    }
  }, [isReady, ymaps, t])

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
          className="rounded-2xl overflow-hidden mb-8 shadow-xl bg-[var(--bg3)] relative"
          style={{ width: '100%', height: '550px' }}
        >
          {/* Плейсхолдер пока карта загружается */}
          {!isReady && (
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg3)] z-10">
              <div className="text-center">
                <div className="w-10 h-10 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <span className="text-[var(--muted)]">Загрузка карты...</span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500" />
            <span className="text-sm text-[var(--text)]">{t('Регионы геологоразведки', 'Exploration regions')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-700" />
            <span className="text-sm text-[var(--text)]">{t('Головной офис', 'Headquarters')}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-sm" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
            <span className="text-sm text-[var(--text)]">{t('Производственная база', 'Production base')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}