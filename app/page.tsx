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
        <section className="mx-auto grid min-h-[calc(100vh-98px)] max-w-7xl items-center gap-8 px-6 pb-14 pt-8 md:px-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-20 lg:px-10 xl:gap-24">
          <div className="relative z-10 min-w-0">
            <p className="section-label">Bio. Echt. Handgemacht.</p>
            <h1 className="mt-4 max-w-full whitespace-normal font-serif text-[2.45rem] font-black leading-[1.08] text-charcoal sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.25rem]">
              <span className="whitespace-nowrap">Echte Handarbeit.</span>
              <br />
              <span className="whitespace-nowrap">Echte Backwaren.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-muted sm:max-w-xl">
              Unsere Backwaren entstehen mit Zeit, Erfahrung und besten Bio-Zutaten - für Geschmack, der bleibt.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/produkte" className="btn-primary w-full gap-2 sm:w-auto">
                Unsere Backwaren entdecken
                <ArrowIcon />
              </Link>
              <Link href="/backkurs" className="btn-secondary w-full sm:w-auto">
                Backkurs ansehen
              </Link>
            </div>
          </div>

          <div className="relative min-h-[280px] min-w-0 overflow-hidden rounded-[42px] border border-line bg-surface-container shadow-soft md:min-h-[420px] lg:min-h-[650px]">
            <Image
              src="/images/sections/hero-bread.jpg"
              alt="Rustikales Bio-Brot auf Leinen"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 overflow-hidden rounded-[28px] bg-surface/92 p-5 shadow-soft backdrop-blur md:left-6 md:right-auto md:min-w-[330px]">
              <p className="text-xs font-extrabold uppercase text-primary">Heute aus dem Ofen</p>
              <p className="mt-1 font-serif text-lg font-black leading-snug text-charcoal md:text-xl">Roggenbrot, Obstzungen, Bierknoten</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon

              return (
                <div key={item.label} className="flex items-center gap-3 border-l border-line pl-4">
                  <Icon className="h-7 w-7 text-primary" />
                  <p className="text-sm font-semibold leading-snug text-muted">{item.label}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="bg-yellow py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Aus unserem Sortiment"
              title="Backwaren mit eigener Handschrift."
              description="Eine kleine Auswahl aus unserem umfangreichen Sortiment - täglich frisch aus unserer Produktion."
            />
            <div className="mt-12 grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
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
          <SectionHeading eyebrow="Was Bucco ausmacht" title="Beste Zutaten. Ehrliches Handwerk." tone="inverse" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-[30px] border border-white/20 bg-white/10 p-6">
                <GrainIcon className="h-9 w-9 text-yellow" />
                <h3 className="mt-5 font-serif text-xl font-black text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/76">{value.description}</p>
              </div>
            ))}
          </div>
          </div>
        </section>

        <CourseTeaser />

        <section className="mx-auto max-w-7xl px-6 pb-16 pt-4 md:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[42px] border border-line bg-surface shadow-soft lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex flex-col justify-between p-8 md:p-10">
              <div>
                <p className="section-label">Wedding</p>
                <h2 className="mt-3 font-serif text-3xl font-black leading-tight text-charcoal md:text-5xl">
                  Schon vor der Tür riecht man, was im Ofen liegt.
                </h2>
                <p className="mt-5 text-base leading-8 text-muted">
                  Die Bäckerei in der {businessInfo.address[0]} ist klein, warm und ehrlich: gelbes Licht,
                  Brote in der Auslage und Backwaren, die nicht nach Schaufenster aussehen, sondern nach
                  sofort probieren.
                </p>
                <Link href="/ueber-uns" className="mt-7 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold text-primary transition hover:bg-primary hover:text-white">
                  Mehr über uns
                  <ArrowIcon />
                </Link>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-[24px] bg-background p-4">
                  <p className="font-bold text-charcoal">Adresse</p>
                  <p className="mt-1 text-muted">{businessInfo.address.join(', ')}</p>
                </div>
                <div className="rounded-[24px] bg-background p-4">
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
