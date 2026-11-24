import type { MetadataRoute } from 'next'
import { sitePaths, siteUrl } from '@/lib/site-metadata'
import { localizedPath, type Language } from '@/lib/site-language'

const languages: Language[] = ['ru', 'en']

export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.flatMap((path) => {
    const ru = siteUrl + path
    const en = siteUrl + localizedPath(path, 'en')
    return languages.map((language) => ({
      url: language === 'ru' ? ru : en,
      alternates: { languages: { ru, en, 'x-default': ru } },
    }))
  })
}
