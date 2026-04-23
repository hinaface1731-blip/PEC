// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://polar-ec.ru' // Замените на ваш реальный домен
  
  // Статические страницы
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/equipment`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]
  
  // Страницы услуг
  const servicePages = [
    { path: '/services/geological', priority: 0.8 },
    { path: '/services/geophysics', priority: 0.9 },
    { path: '/services/drilling', priority: 0.8 },
    { path: '/services/survey', priority: 0.8 },
    { path: '/services/lab', priority: 0.8 },
    { path: '/services/consulting', priority: 0.8 },
    { path: '/services/ecology', priority: 0.8 },
  ].map(service => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: service.priority,
  }))
  
  // Методы геофизики
  const geophysicsMethods = [
    { path: '/services/geophysics/electrical', priority: 0.7 },
    { path: '/services/geophysics/magnetic', priority: 0.7 },
    { path: '/services/geophysics/gravity', priority: 0.7 },
    { path: '/services/geophysics/seismic', priority: 0.7 },
    { path: '/services/geophysics/logging', priority: 0.7 },
    { path: '/services/geophysics/software', priority: 0.6 },
  ].map(method => ({
    url: `${baseUrl}${method.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: method.priority,
  }))
  
  
  return [
    ...staticPages,
    ...servicePages,
    ...geophysicsMethods,
  ]
}