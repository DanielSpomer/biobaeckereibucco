import Image from 'next/image'

type LogoProps = {
  variant?: 'badge' | 'mark' | 'headerBlue' | 'horizontal' | 'footer'
  className?: string
  priority?: boolean
}

const sources = {
  badge: '/images/brand/bucco_header_logo.svg',
  mark: '/images/brand/logo-mark.svg',
  headerBlue: '/images/brand/bucco-header-blue-top.png',
  horizontal: '/images/brand/logo-horizontal.svg',
  footer: '/images/brand/bucco-header-blue-top.png',
}

const sizes = {
  badge: { width: 94, height: 70 },
  mark: { width: 54, height: 54 },
  headerBlue: { width: 770, height: 650 },
  horizontal: { width: 210, height: 68 },
  footer: { width: 770, height: 650 },
}

export default function Logo({ variant = 'badge', className = '', priority = false }: LogoProps) {
  const size = sizes[variant]

  return (
    <Image
      src={sources[variant]}
      alt="Bio-Bäckerei Bucco"
      width={size.width}
      height={size.height}
      priority={priority}
      className={className}
    />
  )
}
