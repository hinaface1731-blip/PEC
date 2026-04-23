// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'], // запрещаем индексировать API и системные файлы
    },
    sitemap: 'https://polar-ec.ru/sitemap.xml', // замените на ваш домен
  }
}