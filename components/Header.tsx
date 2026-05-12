'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Logo from './Logo'
import { ArrowIcon } from './Icons'

const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Unsere Backwaren', href: '/produkte' },
  { name: 'Backkurs', href: '/backkurs' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-2 md:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Zur Startseite">
          <Logo
            variant="headerBlue"
            priority
            className="h-[70px] w-[83px] object-contain md:h-[82px] md:w-[97px]"
          />
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-line/80 bg-surface/80 p-1.5 md:flex">
          {navigation.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? 'rounded-full bg-yellow px-4 py-2 text-sm font-extrabold text-charcoal'
                    : 'rounded-full px-4 py-2 text-sm font-bold text-muted transition hover:bg-white/70 hover:text-primary'
                }
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <Link href="/backkurs" className="hidden items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(0,53,127,0.18)] transition hover:-translate-y-0.5 hover:bg-primary-bright md:inline-flex">
          Backkurs buchen
          <ArrowIcon className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-primary md:hidden"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMenuOpen}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={isMenuOpen ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="border-t border-line bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full px-4 py-3 text-sm font-semibold text-charcoal transition hover:bg-surface"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
