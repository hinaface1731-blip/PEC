import Image from 'next/image'

interface LogoProps {
  alt: string
  priority?: boolean
}

/** Логотип в двух вариантах: тёмный текст для светлой темы и белый — для тёмной */
export function Logo({ alt, priority }: LogoProps) {
  return (
    <>
      <Image src="/images/logo-on-light.png" alt={alt} width={196} height={48} priority={priority} unoptimized className="dark:hidden" />
      <Image src="/images/logo-on-dark.png" alt={alt} width={196} height={48} priority={priority} unoptimized className="hidden dark:block" />
    </>
  )
}
