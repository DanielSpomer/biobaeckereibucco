import ContactCta from '../../components/ContactCta'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductGrid from '../../components/ProductGrid'
import SectionHeading from '../../components/SectionHeading'

export default function Produkte() {
  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Unsere Backwaren"
            title="Eine kleine Auswahl aus unserem Sortiment."
            description="Tagesfrisch gebacken, saisonal ergänzt und im Laden immer so verfügbar, wie der Ofen es hergibt."
          />
          <div className="mt-12">
            <ProductGrid />
          </div>
        </section>

        <ContactCta />
      </main>

      <Footer />
    </div>
  )
}
