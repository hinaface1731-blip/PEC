import { MetadataRoute } from 'next'

const baseUrl = 'https://polar-ec.ru'

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>

const pages: Array<{ path: string; priority: number; changeFrequency: ChangeFrequency }> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/projects', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/equipment', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/investors', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contacts', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },

  // Услуги
  { path: '/services/geological', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/geophysics', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/drilling', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/mining', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/survey', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/logistics', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/lab', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/consulting', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services/ecology', priority: 0.8, changeFrequency: 'monthly' },

  // Методы геофизики
  { path: '/services/geophysics/electrical', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/services/geophysics/magnetic', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/services/geophysics/logging', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/services/geophysics/software', priority: 0.5, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
