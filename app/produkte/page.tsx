import ContactCta from '../../components/ContactCta'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductGrid from '../../components/ProductGrid'

export default function Produkte() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:px-10">
          <div className="grid gap-7 border-b border-primary/25 pb-10 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
            <h1 className="max-w-3xl font-serif text-5xl font-normal leading-[0.98] text-charcoal md:text-[3.8rem]">
              Echte Backwaren. Jeden Morgen neu.
            </h1>
            <p className="max-w-lg text-base leading-8 text-muted lg:pb-1">
              Die gezeigten Backwaren sind eine Auswahl aus unserer Theke. Wir backen täglich frisch,
              saisonal und in kleinen Mengen - deshalb kann das Angebot im Laden variieren.
            </p>
          </div>
          <div className="mt-8">
            <ProductGrid />
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </div>
  )
}
