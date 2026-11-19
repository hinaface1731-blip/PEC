import Image from 'next/image'

interface LogoProps {
  alt: string
  priority?: boolean
  variant?: 'navbar' | 'full'
}

export function Logo({ alt, priority, variant = 'navbar' }: LogoProps) {
  const isFull = variant === 'full'
  const iconSize = isFull ? 48 : 36

  return (
    <span role="img" aria-label={alt} className="inline-flex items-center gap-2.5 whitespace-nowrap">
      <Image
        src="/icon-192.png"
        alt=""
        width={iconSize}
        height={iconSize}
        priority={priority}
        className="shrink-0"
      />
      <span className="flex flex-col gap-1.5">
        <span className={`${isFull ? 'text-[26px]' : 'text-[21px]'} leading-none font-medium tracking-[0.14em] text-[var(--text)]`}>
          POLAR
        </span>
        <span className={`${isFull ? 'text-[10px]' : 'text-[9px]'} leading-none font-medium tracking-[0.08em] text-[var(--muted)]`}>
          EXPEDITION COMPANY
        </span>
      </span>
    </span>
  )
}
