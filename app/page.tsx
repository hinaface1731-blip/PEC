
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { GeographySection } from '@/components/home/geography-section'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'


export const metadata: Metadata = {
  title: 'Полярная Экспедиционная Компания',
  description: 'Геологические, геофизические и буровые работы в Арктике и Сибири.',
  keywords: 'геологоразведка, ГРР, бурение, геофизика, Арктика, Сибирь, геологические работы',
  openGraph: {
    title: 'Полярная Экспедиционная Компания',
    description: 'Геологические, геофизические и буровые работы в Арктике и Сибири.',
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

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <GeographySection />
      <Footer />
    </main>
  )
}