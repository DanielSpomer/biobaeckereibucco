import Image from 'next/image'
import Link from 'next/link'
import { course } from '../lib/content'
import BookingForm from './BookingForm'
import { ArrowIcon, ClockIcon, LeafIcon } from './Icons'

export default function CourseTeaser() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="section-label text-yellow">Backkurs</p>
          <h2 className="mt-3 font-serif text-4xl font-black leading-tight md:text-6xl">
            Backen lernen - mit Liebe zum Detail.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/78">{course.description}</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div>
              <ClockIcon className="mb-3 h-7 w-7 text-yellow" />
              <p className="text-sm font-semibold text-white">{course.cadence}</p>
              <p className="mt-1 text-sm text-white/70">{course.time}</p>
            </div>
            <div>
              <LeafIcon className="mb-3 h-7 w-7 text-yellow" />
              <p className="text-sm font-semibold text-white">Kleine Gruppen</p>
              <p className="mt-1 text-sm text-white/70">Maximal 8 Personen</p>
            </div>
            <div>
              <p className="mb-3 font-serif text-3xl font-black text-yellow">{course.price}</p>
              <p className="text-sm font-semibold text-white">inkl. Produkte</p>
              <p className="mt-1 text-sm text-white/70">{course.reducedPrice}</p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[34px] border border-white/18">
            <Image
              src="/images/sections/backkurs-table.jpg"
              alt="Vorbereitete Teige und Backzutaten für den Backkurs"
              width={900}
              height={506}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-auto w-full object-cover"
            />
          </div>

          <Link href="/backkurs" className="mt-7 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold text-yellow transition hover:bg-yellow hover:text-charcoal">
            Kursdetails ansehen
            <ArrowIcon />
          </Link>
        </div>

        <div className="lg:pt-3">
          <BookingForm />
          <p className="mt-4 text-sm leading-6 text-white/70">
            Sichere Anfrage. Keine Vorkasse erforderlich. Wir melden uns zur Bestätigung direkt zurück.
          </p>
        </div>
      </div>
    </section>
  )
}
