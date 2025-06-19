import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif font-bold text-brown mb-8">
          Datenschutzerklärung
        </h1>
        
        <div className="bg-white rounded-lg p-8 shadow-lg space-y-6 text-brown">
          <div>
            <h2 className="text-xl font-serif font-semibold mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <div className="space-y-3 text-sm">
              <h3 className="font-semibold">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold mb-3">
              2. Datenerfassung auf dieser Website
            </h2>
            <div className="space-y-3 text-sm">
              <h3 className="font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              
              <h3 className="font-semibold">Wie erfassen wir Ihre Daten?</h3>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold mb-3">
              3. Kontaktformular
            </h2>
            <div className="space-y-3 text-sm">
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold mb-3">
              4. Server-Log-Dateien
            </h2>
            <div className="space-y-3 text-sm">
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold mb-3">
              5. Ihre Rechte
            </h2>
            <div className="space-y-3 text-sm">
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>der Datenverarbeitung zu widersprechen</li>
                <li>die Datenübertragbarkeit zu verlangen</li>
              </ul>
              <p>
                Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-serif font-semibold mb-3">
              6. Kontakt
            </h2>
            <div className="text-sm">
              <p>
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:
              </p>
              <p className="mt-2">
                Bio-Bäckerei Bucco<br />
                Mike Bucco<br />
                Ravenstraße 1<br />
                13347 Berlin<br />
                E-Mail: biobaeckereibucco@gmail.com<br />
                Telefon: 030 4617370
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 