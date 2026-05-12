import Link from 'next/link'
import { businessInfo } from '../lib/content'
import Logo from './Logo'

const serviceLinks = [
  { name: 'Unsere Backwaren', href: '/produkte' },
  { name: 'Backkurs', href: '/backkurs' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Kontakt', href: '/kontakt' },
]

const legalLinks = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutz' },
]

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="border-y border-white/10 bg-yellow py-4 text-primary">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 text-sm font-semibold md:grid-cols-4 md:px-8 lg:px-10">
          <span>Bio-Qualität zertifiziert</span>
          <span>Natürliche Zutaten</span>
          <span>Handwerk mit Herz</span>
          <span>Nachhaltig gebacken</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] md:px-8 lg:px-10">
        <div>
          <Logo variant="footer" className="h-auto w-48" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">
            Natürliche Zutaten, handwerkliches Können und echte Leidenschaft - für Brot, das gut tut.
          </p>
          <a
            href={businessInfo.instagram}
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white"
            aria-label="Bio-Bäckerei Bucco auf Instagram"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M16.7 7.5h.1" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-yellow">Service</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-yellow">Öffnungszeiten</h3>
          <dl className="mt-5 space-y-3 text-sm text-white/75">
            {businessInfo.openingHours.map((row) => (
              <div key={row.label} className="flex justify-between gap-4">
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-yellow">Kontakt</h3>
          <div className="mt-5 space-y-2 text-sm leading-7 text-white/75">
            {businessInfo.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>Telefon: {businessInfo.phone}</p>
            <p>E-Mail: {businessInfo.email}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p>© 2026 Bio-Bäckerei Bucco. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
