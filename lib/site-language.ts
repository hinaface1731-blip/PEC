export type Language = 'ru' | 'en'

export function languageFromPath(path: string): Language {
  return path === '/en' || path.startsWith('/en/') ? 'en' : 'ru'
}

export function withoutLanguage(path: string): string {
  if (path === '/en' || path.startsWith('/en#') || path.startsWith('/en?')) {
    return '/' + path.slice(3)
  }
  return path.startsWith('/en/') ? path.slice(3) : path
}

export function localizedPath(path: string, language: Language): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  const base = withoutLanguage(path)
  if (language === 'ru') return base
  return '/en' + (base === '/' || base.startsWith('/#') || base.startsWith('/?') ? base.slice(1) : base)
}
