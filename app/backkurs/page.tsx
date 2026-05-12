import Image from 'next/image'
import BookingForm from '../../components/BookingForm'
import ContactCta from '../../components/ContactCta'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { ClockIcon, HandsIcon } from '../../components/Icons'
import SectionHeading from '../../components/SectionHeading'
import { course } from '../../lib/content'

export default function Backkurs() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="section-label">Backkurs</p>
            <h1 className="mt-4 font-serif text-5xl font-black leading-tight text-charcoal md:text-7xl">
              Lernen, was guter Teig braucht.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">{course.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[30px] border border-line bg-surface p-5 shadow-soft">
                <ClockIcon className="h-7 w-7 text-primary" />
                <p className="mt-4 font-semibold text-charcoal">{course.cadence}</p>
                <p className="mt-1 text-sm text-muted">{course.time}</p>
              </div>
              <div className="rounded-[30px] border border-line bg-surface p-5 shadow-soft">
                <p className="section-label">Kosten</p>
                <p className="mt-3 font-serif text-4xl font-black text-charcoal">{course.price}</p>
                <p className="mt-1 text-sm text-muted">{course.reducedPrice}</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[42px] border border-line shadow-soft">
            <Image
              src="/images/sections/backkurs-table.jpg"
              alt="Vorbereitete Teige und Backzutaten in der Backstube"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Ablauf"
              title="Ciabatta, Franzbrötchen und geflochtene Brötchen."
              description="Der Kurs ist praxisnah aufgebaut. Sie arbeiten mit, stellen Produkte selbst her und nehmen am Ende Ihre Backwaren mit."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {course.included.map((item) => (
                <div key={item} className="flex gap-4 rounded-[30px] border border-line bg-background p-6">
                  <HandsIcon className="mt-1 h-7 w-7 shrink-0 text-primary" />
                  <p className="text-base leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
            <div>
              <p className="section-label text-yellow">Terminbuchung</p>
              <h2 className="mt-3 font-serif text-4xl font-black leading-tight md:text-5xl">
                Platz sichern, Details abstimmen.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78">
                Wählen Sie Kurs, Datum und Gruppengröße. Die Anfrage wird gespeichert und anschließend persönlich bestätigt.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-white/78">
                <p className="border-l border-yellow pl-4">Maximal 8 Personen pro Kurs.</p>
                <p className="border-l border-yellow pl-4">Keine Vorkasse im Formular.</p>
                <p className="border-l border-yellow pl-4">Rückmeldung direkt aus der Backstube.</p>
              </div>
            </div>
            <BookingForm />
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </div>
  )
}
