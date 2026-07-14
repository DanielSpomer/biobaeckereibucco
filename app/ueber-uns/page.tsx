import Image from 'next/image'
import ContactCta from '../../components/ContactCta'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { GrainIcon, HandsIcon, LeafIcon } from '../../components/Icons'
import SectionHeading from '../../components/SectionHeading'
import { aboutFacts, values } from '../../lib/content'

const teamFacts = [
  {
    name: 'Daniela und Thorsten Bucco',
    role: 'Bio-Bäckerei Bucco',
    text: 'Sie prägen die Bäckerei mit handwerklicher Haltung, Bio-Qualität und Nähe zum Kiez.',
  },
  {
    name: 'Mike Bucco',
    role: 'Bäckermeister',
    text: 'Er steht für die nächste Generation in der Backstube und verbindet klassisches Können mit moderner Verantwortung.',
  },
]

export default function UeberUns() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="section-label">Über uns</p>
            <h1 className="mt-4 font-serif text-5xl font-normal leading-[1.02] text-charcoal md:text-7xl">
              Eine Bio-Bäckerei mit Haltung.
            </h1>
            <div className="mt-7 space-y-5 text-base leading-8 text-muted">
              {aboutFacts.map((fact) => (
                <p key={fact}>{fact}</p>
              ))}
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-[6px] border border-primary/20">
            <Image
              src="/images/sections/laden-team-service.jpg"
              alt="Mitarbeiterin der Bio-Bäckerei Bucco im Laden an der Theke"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover object-[46%_52%]"
            />
          </div>
        </section>

        <section className="bg-surface py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
            <SectionHeading
              eyebrow="Familie & Handwerk"
              title="Backen, wenn Zeit noch eine Zutat ist."
              description="Daniela, Thorsten und Mike Bucco stehen in der Ravenéstraße für Bio-Handwerk, kleine Mengen und Backwaren mit Charakter."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {teamFacts.map((person) => (
                <article key={person.name} className="rounded-[6px] border border-primary/20 bg-background p-7">
                  <p className="section-label">{person.role}</p>
                  <h2 className="mt-3 font-serif text-3xl font-normal text-charcoal">{person.name}</h2>
                  <p className="mt-4 text-sm leading-7 text-muted">{person.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[6px] border border-primary/20 bg-surface p-7 md:col-span-2">
              <LeafIcon className="h-9 w-9 text-primary" />
              <h2 className="mt-5 font-serif text-2xl font-normal text-charcoal">Bio aus Überzeugung</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Bio ist hier kein Deko-Wort, sondern die Grundlage der Zutatenwahl.
              </p>
            </div>
            <div className="rounded-[6px] border border-primary/20 bg-surface p-7">
              <HandsIcon className="h-9 w-9 text-primary" />
              <h2 className="mt-5 font-serif text-2xl font-normal text-charcoal">Handwerk vor Masse</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Frische wird nicht endlos simuliert. Was ausverkauft ist, ist ausverkauft.
              </p>
            </div>
            <div className="rounded-[6px] border border-primary/20 bg-surface p-7">
              <GrainIcon className="h-9 w-9 text-primary" />
              <h2 className="mt-5 font-serif text-2xl font-normal text-charcoal">Paulicks-Mühle</h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Das Bio-Mehl kommt unter anderem von der Paulicks-Mühle.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="border-l border-line pl-5">
                <h3 className="font-serif text-xl font-black text-charcoal">{value.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </div>
  )
}
