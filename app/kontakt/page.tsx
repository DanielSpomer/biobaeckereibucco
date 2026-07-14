import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ArrowIcon, ClockIcon } from '../../components/Icons'
import SectionHeading from '../../components/SectionHeading'
import { businessInfo } from '../../lib/content'

export default function Kontakt() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-14 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Kontakt"
            title="Besuchen, anrufen, vorbestellen."
            description="Für Reservierungen, größere Mengen und Backkursfragen erreichen Sie uns direkt in der Ravenéstraße, per Telefon oder per E-Mail."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[6px] border border-primary/20 bg-surface p-8">
              <p className="section-label">Bio-Bäckerei Bucco</p>
              <h2 className="mt-3 font-serif text-3xl font-normal text-charcoal md:text-4xl">Ravenéstraße 1</h2>
              <div className="mt-6 space-y-3 text-base leading-7 text-muted">
                {businessInfo.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p>Telefon: {businessInfo.phone}</p>
                <p>E-Mail: {businessInfo.email}</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={businessInfo.phoneHref} className="btn-primary">
                  Jetzt anrufen
                </a>
                <a href={`mailto:${businessInfo.email}`} className="btn-secondary">
                  E-Mail senden
                </a>
              </div>
            </div>

            <div className="rounded-[6px] border border-primary/20 bg-surface p-8">
              <ClockIcon className="h-8 w-8 text-primary" />
              <h2 className="mt-4 font-serif text-4xl font-normal text-charcoal">Öffnungszeiten</h2>
              <dl className="mt-7 space-y-4">
                {businessInfo.openingHours.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4 border-b border-line pb-4">
                    <dt className="font-semibold text-charcoal">{row.label}</dt>
                    <dd className="text-muted">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 border-l-2 border-yellow bg-background p-4 text-sm leading-7 text-muted">
                An Feiertagen können abweichende Öffnungszeiten gelten. Bitte rufen Sie uns an.
              </p>
            </div>
          </div>

          <div className="mt-6 grid overflow-hidden rounded-[6px] bg-primary text-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8">
              <p className="section-label text-yellow">Instagram</p>
              <h2 className="mt-3 font-serif text-3xl font-normal">Aktuelles aus der Backstube.</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">
                Dort zeigen wir, was gerade aus dem Ofen kommt, welche Kurse geplant sind und wann sich ein Besuch besonders lohnt.
              </p>
              <a href={businessInfo.instagram} className="btn-yellow mt-6 gap-2 focus:ring-offset-primary">
                Instagram öffnen
                <ArrowIcon />
              </a>
            </div>
            <div className="relative min-h-[260px]">
              <Image
                src="/images/sections/laden-alltag-theke.jpg"
                alt="Ladenalltag in der Bio-Bäckerei Bucco mit Brotregal und Theke"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover object-[42%_50%]"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
