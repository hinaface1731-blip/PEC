'use client'

import { useEffect, useRef } from 'react'
import { useYandexMapsContext } from '@/components/yandex-map-loader'

export function YandexMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const { isReady, ymaps } = useYandexMapsContext()

  useEffect(() => {
    if (!isReady || !ymaps || !mapRef.current) return

    let map: any = null

    try {
      map = new ymaps.Map(mapRef.current, {
        center: [55.751574, 37.573856], // Москва, можно заменить на свой адрес
        zoom: 10,
        controls: ['zoomControl', 'fullscreenControl'],
      })

      // Добавляем метку
      const placemark = new ymaps.Placemark(
        [55.751574, 37.573856],
        {
          hintContent: 'Полярная Экспедиционная Компания',
          balloonContent: 'Полярная Экспедиционная Компания',
        },
        {
          preset: 'islands#redIcon',
        }
      )

      map.geoObjects.add(placemark)
    } catch (err) {
      console.error('Ошибка инициализации карты:', err)
    }

    return () => {
      if (map) {
        map.destroy()
        map = null
      }
    }
  }, [isReady, ymaps])

  return (
    <div
      ref={mapRef}
      className="w-full h-full min-h-[400px] rounded-xl"
    />
  )
}