import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Impressum() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-brown mb-8">
          Impressum
        </h1>
        
        <div className="bg-white rounded-lg p-8 shadow-lg space-y-6">
          <div>
            <h2 className="text-xl font-serif font-semibold text-brown mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-brown">
              Bio-Bäckerei Bucco<br />
              Mike Bucco<br />
              Ravenstraße 1<br />
              13347 Berlin
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-brown mb-3">
              Kontakt
            </h2>
            <p className="text-brown">
              Telefon: 030 4617370<br />
              E-Mail: biobaeckereibucco@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-brown mb-3">
              Umsatzsteuer-ID
            </h2>
            <p className="text-brown">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-brown mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-brown">
              Mike Bucco<br />
              Ravenstraße 1<br />
              13347 Berlin
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold text-brown mb-3">
              Haftungsausschluss
            </h2>
            <div className="space-y-4 text-brown text-sm">
              <div>
                <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Haftung für Links</h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Urheberrecht</h3>
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 