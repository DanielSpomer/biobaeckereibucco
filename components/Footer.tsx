import Link from 'next/link'
import { Camera } from 'lucide-react'
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
    <footer className="bg-yellow text-primary">
      <div className="border-y border-primary/15 bg-primary/5 py-4 text-primary">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 text-sm font-semibold md:grid-cols-4 md:px-8 lg:px-10">
          <span>Bio-Qualität zertifiziert</span>
          <span>Natürliche Zutaten</span>
          <span>Handwerk mit Herz</span>
          <span>Nachhaltig gebacken</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr] md:px-8 lg:px-10">
        <div>
          <Logo variant="footer" className="h-auto w-44" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-primary/80">
            Natürliche Zutaten, handwerkliches Können und echte Leidenschaft - für Brot, das gut tut.
          </p>
          <a
            href={businessInfo.instagram}
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition hover:bg-primary hover:text-yellow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-yellow"
            aria-label="Bio-Bäckerei Bucco auf Instagram"
          >
            <Camera className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-primary">Service</h3>
          <ul className="mt-5 space-y-3 text-sm text-primary/80">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-primary hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-yellow">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-primary">Öffnungszeiten</h3>
          <dl className="mt-5 space-y-3 text-sm text-primary/80">
            {businessInfo.openingHours.map((row) => (
              <div key={row.label} className="flex justify-between gap-4">
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase text-primary">Kontakt</h3>
          <div className="mt-5 space-y-2 text-sm leading-7 text-primary/80">
            {businessInfo.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p>Telefon: {businessInfo.phone}</p>
            <p>E-Mail: {businessInfo.email}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-primary/70 md:flex-row md:items-center md:justify-between md:px-8 lg:px-10">
          <p>© 2026 Bio-Bäckerei Bucco. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-primary hover:underline hover:underline-offset-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-yellow">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
