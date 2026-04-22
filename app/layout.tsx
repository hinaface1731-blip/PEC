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

export function generateMetadata(): Metadata {
  return {
    title: 'ПЭК — Полярная Экспедиционная Компания',
    description: 'Геологоразведочная компания полного цикла. 17 лет работы в Арктике и Сибири. Геология, геофизика, бурение, лаборатория.',
    keywords: 'геологоразведка, ГРР, бурение, геофизика, Арктика, Сибирь, геологические работы',
    openGraph: {
      title: 'ПЭК — Полярная Экспедиционная Компания',
      description: 'Геологоразведочная компания полного цикла. 17 лет работы в Арктике и Сибири.',
      type: 'website',
      locale: 'ru_RU',
      siteName: 'ПЭК',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'ПЭК — Полярная Экспедиционная Компания',
      description: 'Геологоразведочная компания полного цикла. 17 лет работы в Арктике и Сибири.',
    },
    icons: {
      icon: '/icon.svg',
      apple: '/apple-icon.png',
    },
  }
}

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
      { media: '(prefers-color-scheme: dark)', color: '#0a0c0f' },
    ],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://api-maps.yandex.ru https://*.yandex.ru; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://api.telegram.org https://api-maps.yandex.ru; frame-src https://api-maps.yandex.ru;" />
      </head>
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
