import Link from 'next/link'
import { businessInfo } from '../lib/content'
import { ArrowIcon } from './Icons'

export default function ContactCta() {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-[1.1fr_auto_1.1fr] md:items-center md:px-8 lg:px-10">
        <div>
          <p className="section-label text-yellow">Vor Ort</p>
          <h2 className="mt-3 font-serif text-3xl font-black leading-tight md:text-5xl">
            Besuchen Sie uns in Wedding.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
            Erleben Sie den Duft frischer Backwaren direkt in unserer Backstube und nehmen Sie mit, was der Ofen gerade hergibt.
          </p>
          <Link href="/kontakt" className="mt-7 inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-extrabold text-charcoal transition hover:-translate-y-0.5">
            Filiale & Öffnungszeiten
            <ArrowIcon />
          </Link>
        </div>

        <div className="hidden h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-extrabold uppercase md:flex">
          oder
        </div>

        <div className="rounded-[34px] bg-surface p-6 text-charcoal shadow-soft md:p-8">
          <p className="section-label">Vorbestellen</p>
          <h3 className="mt-3 font-serif text-3xl font-black">Online oder telefonisch.</h3>
          <p className="mt-4 text-sm leading-7 text-muted">
            Für Reservierungen und größere Mengen erreichen Sie uns direkt per Telefon oder E-Mail.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href={businessInfo.phoneHref}>
              {businessInfo.phone}
            </a>
            <a className="btn-secondary" href={`mailto:${businessInfo.email}`}>
              E-Mail senden
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
