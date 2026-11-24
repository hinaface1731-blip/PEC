import { notFound } from 'next/navigation'
import { localizedMetadata, sitePaths, type SitePath } from '@/lib/site-metadata'

const pages = {
  '/': () => import('@/app/page'),
  '/about': () => import('@/app/about/page'),
  '/contacts': () => import('@/app/contacts/page'),
  '/equipment': () => import('@/app/equipment/page'),
  '/investors': () => import('@/app/investors/page'),
  '/privacy': () => import('@/app/privacy/page'),
  '/privacy/consent': () => import('@/app/privacy/consent/page'),
  '/projects': () => import('@/app/projects/page'),
  '/services': () => import('@/app/services/page'),
  '/services/consulting': () => import('@/app/services/consulting/page'),
  '/services/drilling': () => import('@/app/services/drilling/page'),
  '/services/ecology': () => import('@/app/services/ecology/page'),
  '/services/geological': () => import('@/app/services/geological/page'),
  '/services/geophysics': () => import('@/app/services/geophysics/page'),
  '/services/geophysics/electrical': () => import('@/app/services/geophysics/electrical/page'),
  '/services/geophysics/logging': () => import('@/app/services/geophysics/logging/page'),
  '/services/geophysics/magnetic': () => import('@/app/services/geophysics/magnetic/page'),
  '/services/geophysics/software': () => import('@/app/services/geophysics/software/page'),
  '/services/lab': () => import('@/app/services/lab/page'),
  '/services/logistics': () => import('@/app/services/logistics/page'),
  '/services/mining': () => import('@/app/services/mining/page'),
  '/services/survey': () => import('@/app/services/survey/page'),
} satisfies Record<SitePath, () => Promise<{ default: React.ComponentType }>>

type Params = { params: Promise<{ slug?: string[] }> }

function getPath(slug: string[] = []): SitePath {
  const path = '/' + slug.join('/')
  if (!Object.hasOwn(pages, path)) notFound()
  return path as SitePath
}

export function generateStaticParams() {
  return sitePaths.map((path) => ({ slug: path === '/' ? [] : path.slice(1).split('/') }))
}

export async function generateMetadata({ params }: Params) {
  return localizedMetadata(getPath((await params).slug), 'en')
}

export default async function EnglishPage({ params }: Params) {
  const { default: Page } = await pages[getPath((await params).slug)]()
  return <Page />
}
