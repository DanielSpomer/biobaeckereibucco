import Link from 'next/link'
import { businessInfo } from '../lib/content'
import { ArrowIcon } from './Icons'

export default function ContactCta() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:px-8 lg:px-10">
        <div>
          <p className="section-label text-yellow">Vor Ort</p>
          <h2 className="mt-3 font-serif text-3xl font-normal leading-tight md:text-5xl">
            Besuchen Sie uns in Wedding.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
            Erleben Sie den Duft frischer Backwaren direkt in unserer Backstube und nehmen Sie mit, was der Ofen gerade hergibt.
          </p>
          <Link href="/kontakt" className="btn-yellow mt-7 gap-2 focus:ring-offset-primary">
            Filiale & Öffnungszeiten
            <ArrowIcon />
          </Link>
        </div>

        <div className="border-t border-white/25 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <p className="section-label text-yellow">Vorbestellen</p>
          <h3 className="mt-3 font-serif text-3xl font-normal text-white">Online oder telefonisch.</h3>
          <p className="mt-4 text-sm leading-7 text-white/78">
            Für Reservierungen und größere Mengen erreichen Sie uns direkt per Telefon oder E-Mail.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className="btn-yellow" href={businessInfo.phoneHref}>
              {businessInfo.phone}
            </a>
            <a className="inline-flex min-h-11 items-center justify-center rounded-[4px] border border-white/60 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary" href={`mailto:${businessInfo.email}`}>
              E-Mail senden
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
