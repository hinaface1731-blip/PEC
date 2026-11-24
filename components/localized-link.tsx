'use client'

import NextLink from 'next/link'
import { forwardRef, type ComponentPropsWithoutRef } from 'react'
import { useLanguage } from '@/components/language-provider'
import { localizedPath } from '@/lib/site-language'

type Props = ComponentPropsWithoutRef<typeof NextLink>

const LocalizedLink = forwardRef<HTMLAnchorElement, Props>(function LocalizedLink({ href, ...props }, ref) {
  const { language } = useLanguage()
  const target = typeof href === 'string' ? localizedPath(href, language) : href
  return <NextLink href={target} ref={ref} {...props} />
})

export default LocalizedLink
