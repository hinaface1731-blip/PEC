import type { Metadata, Viewport } from 'next'
import { Unbounded, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/language-provider'
import { YandexMapScript } from '@/components/yandex-map-script'  // ← импортируем API 3.0
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

export const metadata: Metadata = {
  title: 'Полярная Экспедиционная Компания',
  description: 'Геологоразведочная компания полного цикла. 17 лет работы в Арктике и Сибири. Геология, геофизика, бурение, лаборатория.',
  keywords: 'геологоразведка, ГРР, бурение, геофизика, Арктика, Сибирь, геологические работы',
  openGraph: {
    title: 'Полярная Экспедиционная Компания',
    description: 'Геологоразведочная компания полного цикла. 17 лет работы в Арктике и Сибири.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Полярная Экспедиционная Компания',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Полярная Экспедиционная Компания',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Полярная Экспедиционная Компания',
    description: 'Геологоразведочная компания полного цикла. 17 лет работы в Арктике и Сибири.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo3.png',
    apple: '/logo3.png',
    shortcut: '/logo3.png',
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
            <YandexMapScript />  {/* ← заменено на API 3.0 */}
            {children}
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}