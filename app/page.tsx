import Image from 'next/image'
import Link from 'next/link'
import ContactCta from '../components/ContactCta'
import CourseTeaser from '../components/CourseTeaser'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ArrowIcon, GrainIcon, HandsIcon, LeafIcon } from '../components/Icons'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import { businessInfo, featuredProducts, values } from '../lib/content'

const trustItems = [
  { icon: LeafIcon, label: '100% Bio zertifiziert' },
  { icon: GrainIcon, label: 'Natürliche Zutaten' },
  { icon: HandsIcon, label: 'Handwerk mit Herz' },
  { icon: GrainIcon, label: 'Regionale Partner' },
]

export default function Home() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="relative min-h-[calc(100dvh-132px)] overflow-hidden border-b border-primary/20 bg-surface lg:min-h-[690px]">
          <Image
            src="/images/sections/hero-bread.jpg"
            alt="Rustikales Bio-Brot auf Leinen"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_50%]"
          />
          <div className="absolute inset-y-0 left-0 w-full border-r border-primary/15 bg-background/90 sm:w-[78%] lg:w-[54%]" aria-hidden="true" />

          <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-132px)] max-w-7xl items-center px-6 pb-36 pt-12 md:px-8 lg:min-h-[690px] lg:px-10">
            <div className="max-w-[39rem]">
              <p className="section-label">Bio. Echt. Handgemacht.</p>
              <h1 className="mt-4 max-w-[42rem] font-serif text-[2.35rem] font-normal leading-[0.98] text-charcoal sm:text-[3.35rem] md:text-[3.8rem] lg:text-[4.25rem] xl:text-[4.6rem]">
                <span className="block whitespace-nowrap">Echte Handarbeit.</span>
                <span className="block whitespace-nowrap">Echte Backwaren.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
                Seit Generationen wird in der Ravenéstraße mit Zeit, Erfahrung und besten Bio-Zutaten
                gebacken - für Geschmack, der bleibt.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/produkte" className="btn-primary w-full gap-2 sm:w-auto">
                  Unsere Backwaren entdecken
                  <ArrowIcon />
                </Link>
                <Link href="/kontakt" className="btn-secondary w-full sm:w-auto">
                  Laden besuchen
                </Link>
              </div>
              <p className="mt-7 text-xs font-extrabold uppercase text-primary">
                Berlin-Wedding · Ravenéstraße 1
              </p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-20 border-t border-primary/15 bg-surface">
            <div className="mx-auto grid max-w-7xl gap-3 px-6 py-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-10">
              {trustItems.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.label} className="flex items-center gap-3 border-l border-primary/20 pl-4">
                    <Icon className="h-6 w-6 text-primary" />
                    <p className="text-xs font-bold leading-snug text-muted">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-t-[10px] border-yellow bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Aus unserem Sortiment"
              title="Backwaren mit eigener Handschrift."
              description="Eine kleine Auswahl aus unserem umfangreichen Sortiment - täglich frisch aus unserer Produktion."
              align="left"
            />
            <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product, index) => (
                <ProductCard key={product.slug} product={product} priority={index < 4} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/produkte" className="btn-secondary">
                Alle Backwaren ansehen
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
          <SectionHeading eyebrow="Was Bucco ausmacht" title="Beste Zutaten. Ehrliches Handwerk." tone="inverse" align="left" />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="border-l border-yellow/60 pl-5">
                <GrainIcon className="h-9 w-9 text-yellow" />
                <h3 className="mt-5 font-serif text-2xl font-normal text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/76">{value.description}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        <CourseTeaser />

        <section className="border-y border-primary/20 bg-surface">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <p className="section-label">Wedding</p>
                <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-charcoal md:text-5xl">
                  Schon vor der Tür riecht man, was im Ofen liegt.
                </h2>
                <p className="mt-5 text-base leading-8 text-muted">
                  Die Bäckerei in der {businessInfo.address[0]} ist klein, warm und ehrlich: gelbes Licht,
                  Brote in der Auslage und Backwaren, die nicht nach Schaufenster aussehen, sondern nach
                  sofort probieren.
                </p>
                <Link href="/ueber-uns" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-[4px] border border-primary/35 px-4 py-2 text-sm font-extrabold text-primary transition hover:bg-primary hover:text-white active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 motion-reduce:transition-none">
                  Mehr über uns
                  <ArrowIcon />
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <div className="border-l-2 border-yellow bg-background p-4">
                  <p className="font-bold text-charcoal">Adresse</p>
                  <p className="mt-1 text-muted">{businessInfo.address.join(', ')}</p>
                </div>
                <div className="border-l-2 border-yellow bg-background p-4">
                  <p className="font-bold text-charcoal">Samstag</p>
                  <p className="mt-1 text-muted">08:00 - 12:00 Uhr</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[420px] lg:min-h-[520px]">
              <Image
                src="/images/sections/laden-aussen.jpg"
                alt="Echter Laden der Bio-Bäckerei Bucco mit gelber Fassade und Auslage"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_45%]"
              />
            </div>
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </div>
  )
}
