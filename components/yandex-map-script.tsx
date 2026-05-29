'use client'

import { useEffect } from 'react'

export function YandexMapScript() {
  useEffect(() => {
    // Загружаем API Яндекс Карт 3.0
    if (typeof window !== 'undefined' && !window.ymaps3) {
      const script = document.createElement('script')
      script.src = `https://api-maps.yandex.ru/v3/?apikey=${process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY}&lang=ru_RU`
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  return null
}