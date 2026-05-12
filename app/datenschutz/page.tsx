import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { businessInfo } from '../../lib/content'

export default function Datenschutz() {
  return (
    <div className="page-shell">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-14 md:px-8 lg:px-10">
        <h1 className="font-serif text-5xl font-black text-charcoal">Datenschutzerklärung</h1>

        <div className="mt-8 space-y-8 rounded-[34px] border border-line bg-surface p-8 text-muted shadow-soft">
          <section>
            <h2 className="font-serif text-2xl font-black text-charcoal">1. Datenschutz auf einen Blick</h2>
            <p className="mt-4 text-sm leading-7">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-black text-charcoal">2. Verantwortliche Stelle</h2>
            <p className="mt-4 text-sm leading-7">
              {businessInfo.name}
              <br />
              Mike Bucco
              <br />
              {businessInfo.address[0]}
              <br />
              {businessInfo.address[1]}
              <br />
              E-Mail: {businessInfo.email}
              <br />
              Telefon: {businessInfo.phone}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-black text-charcoal">3. Direkte Kontaktaufnahme</h2>
            <p className="mt-4 text-sm leading-7">
              Wenn Sie uns per Telefon, E-Mail oder Instagram kontaktieren, verarbeiten wir die übermittelten Angaben zur Bearbeitung Ihrer Anfrage und für mögliche Anschlussfragen.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-black text-charcoal">4. Server-Log-Dateien</h2>
            <p className="mt-4 text-sm leading-7">
              Der Provider der Seiten kann automatisch technische Informationen in Server-Log-Dateien erheben, etwa Browsertyp, Betriebssystem, Referrer URL, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-black text-charcoal">5. Ihre Rechte</h2>
            <p className="mt-4 text-sm leading-7">
              Sie haben im Rahmen der gesetzlichen Bestimmungen Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
