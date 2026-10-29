import Image from 'next/image'

interface LogoProps {
  alt: string
  priority?: boolean
  /** navbar — компактный логотип для шапки; full — горизонтальный с русской подписью */
  variant?: 'navbar' | 'full'
}

const LOGOS = {
  navbar: { light: '/images/brand/logo-on-light.png', dark: '/images/brand/logo-on-dark.png', width: 190, height: 48 },
  full: { light: '/images/brand/logo-horizontal-light.png', dark: '/images/brand/logo-horizontal-dark.png', width: 230, height: 68 },
}

/** Логотип в двух вариантах: тёмный текст для светлой темы и белый — для тёмной */
export function Logo({ alt, priority, variant = 'navbar' }: LogoProps) {
  const { light, dark, width, height } = LOGOS[variant]
  return (
    <>
      <Image src={light} alt={alt} width={width} height={height} priority={priority} className="dark:hidden" />
      <Image src={dark} alt={alt} width={width} height={height} priority={priority} className="hidden dark:block" />
    </>
  )
}
