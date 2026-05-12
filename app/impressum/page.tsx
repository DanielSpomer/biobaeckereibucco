import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { businessInfo } from '../../lib/content'

export default function Impressum() {
  return (
    <div className="page-shell">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-14 md:px-8 lg:px-10">
        <h1 className="font-serif text-5xl font-black text-charcoal">Impressum</h1>

        <div className="mt-8 space-y-8 rounded-[34px] border border-line bg-surface p-8 shadow-soft">
          <section>
            <h2 className="font-serif text-2xl font-black text-charcoal">Angaben gemäß § 5 TMG</h2>
            <p className="mt-4 leading-8 text-muted">
              {businessInfo.name}
              <br />
              Mike Bucco
              <br />
              {businessInfo.address[0]}
              <br />
              {businessInfo.address[1]}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-black text-charcoal">Kontakt</h2>
            <p className="mt-4 leading-8 text-muted">
              Telefon: {businessInfo.phone}
              <br />
              E-Mail: {businessInfo.email}
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-black text-charcoal">Verantwortlich für den Inhalt</h2>
            <p className="mt-4 leading-8 text-muted">
              Mike Bucco
              <br />
              {businessInfo.address[0]}
              <br />
              {businessInfo.address[1]}
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
