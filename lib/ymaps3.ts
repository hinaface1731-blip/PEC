// Загрузка API Яндекс Карт 3.0 — один раз на всё приложение и только там, где карта реально нужна.

const SCRIPT_TIMEOUT_MS = 15000

let ymaps3Promise: Promise<typeof window.ymaps3> | null = null

export function loadYmaps3(): Promise<typeof window.ymaps3> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('ymaps3 is only available in the browser'))
  }
  if (ymaps3Promise) return ymaps3Promise

  const apiKey = process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY
  if (!apiKey) {
    return Promise.reject(new Error('NEXT_PUBLIC_YANDEX_MAPS_API_KEY is not set'))
  }

  ymaps3Promise = new Promise<typeof window.ymaps3>((resolve, reject) => {
    const onReady = () => {
      window.ymaps3.ready.then(() => resolve(window.ymaps3), reject)
    }

    if (window.ymaps3) {
      onReady()
      return
    }

    const timeoutId = setTimeout(() => reject(new Error('Yandex Maps API load timeout')), SCRIPT_TIMEOUT_MS)
    const script = document.createElement('script')
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`
    script.async = true
    script.onload = () => {
      clearTimeout(timeoutId)
      onReady()
    }
    script.onerror = () => {
      clearTimeout(timeoutId)
      reject(new Error('Failed to load Yandex Maps API'))
    }
    document.head.appendChild(script)
  }).catch((err) => {
    // Даём шанс повторной загрузке при следующем монтировании карты
    ymaps3Promise = null
    throw err
  })

  return ymaps3Promise
}

export interface MapPoint {
  coordinates: [number, number] // [долгота, широта]
  title: string
  color: string
  size?: number
  label?: string
}

export function createMarkerElement({ title, color, size = 24, label }: MapPoint): HTMLDivElement {
  const el = document.createElement('div')
  Object.assign(el.style, {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: '50%',
    border: `${size >= 32 ? 3 : 2}px solid white`,
    boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '12px',
    fontWeight: 'bold',
    transform: 'translate(-50%, -50%)',
  })
  el.title = title
  if (label) el.textContent = label
  return el
}
