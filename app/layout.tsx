import type { Metadata, Viewport } from 'next'
import { Unbounded, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { YandexMapLoader } from '@/components/yandex-map-loader'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

// ✅ Добавляем og:image
export const metadata: Metadata = {
  title: 'ПЭК — Полярная Экспедиционная Компания',
  description: 'Геологоразведочная компания полного цикла. 17 лет работы в Арктике и Сибири. Геология, геофизика, бурение, лаборатория.',
  keywords: 'геологоразведка, ГРР, бурение, геофизика, Арктика, Сибирь, геологические работы',
  openGraph: {
    title: 'ПЭК — Полярная Экспедиционная Компания',
    description: 'Геологоразведочная компания полного цикла. 17 лет работы в Арктике и Сибири.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ПЭК',
    images: [
      {
        url: '/logo.png',           // ← путь к картинке
        width: 1200,                    // ← рекомендуемый размер
        height: 630,                    // ← стандарт для соцсетей
        alt: 'ПЭК — Полярная Экспедиционная Компания',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ПЭК — Полярная Экспедиционная Компания',
    description: 'Геологоразведочная компания полного цикла. 17 лет работы в Арктике и Сибири.',
    images: ['/logo.png'],          // ← добавляем картинку для Twitter
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0c0f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${unbounded.variable} ${manrope.variable} font-sans antialiased`}>
        <ThemeProvider>
          <LanguageProvider>
            <YandexMapLoader>
              {children}
            </YandexMapLoader>
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}