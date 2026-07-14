'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
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
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-surface/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[82px] w-full max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Zur Startseite">
          <Logo
            variant="headerBlue"
            priority
            className="h-[66px] w-[79px] object-contain md:h-[72px] md:w-[86px]"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? 'rounded-[3px] bg-yellow px-4 py-2.5 text-sm font-extrabold text-primary'
                    : 'rounded-[3px] px-4 py-2.5 text-sm font-bold text-muted transition hover:bg-primary/6 hover:text-primary active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface motion-reduce:transition-none'
                }
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <Link href="/backkurs" className="hidden min-h-11 items-center gap-2 rounded-[4px] bg-primary px-5 py-3 text-sm font-extrabold text-white transition duration-200 hover:bg-primary-bright active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 motion-reduce:transition-none lg:inline-flex">
          Backkurs buchen
          <ArrowIcon className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[4px] border border-primary/25 bg-white text-primary transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 lg:hidden"
          aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="border-t border-primary/15 bg-surface px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-[4px] px-4 py-3 text-sm font-semibold text-charcoal transition hover:bg-yellow/35 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
