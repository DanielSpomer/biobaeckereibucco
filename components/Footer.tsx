import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-brown text-cream mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Unternehmen */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Bio-Bäckerei Bucco</h3>
            <p className="text-sm text-cream/80 mb-4">
              Seit zwei Generationen backen wir mit Herz und natürlichen Zutaten. 
              Echte Handarbeit für echten Geschmack.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/biobaeckereibucco/" className="text-cream/80 hover:text-cream transition-colors duration-200" aria-label="Instagram">
                <img
                  src="/instagram_icon_creme.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm text-cream/80">
              <p>Ravenstraße 1</p>
              <p>13347 Berlin</p>
              <p>Telefon: 030 4617370</p>
              <p>E-Mail: biobaeckereibucco@gmail.com</p>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Öffnungszeiten</h4>
              <div className="space-y-1 text-sm text-cream/80">
                <p>Di-Fr: 08:00 - 18:00 Uhr</p>
                <p>Sa: 08:00 - 12:00 Uhr</p>
                <p>So-Mo: 08:00 - 18:00 Uhr</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ueber-uns" className="text-cream/80 hover:text-cream transition-colors duration-200">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/produkte" className="text-cream/80 hover:text-cream transition-colors duration-200">
                  Unsere Backwaren
                </Link>
              </li>
              <li>
                <Link href="/backkurs" className="text-cream/80 hover:text-cream transition-colors duration-200">
                  Backkurse
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-cream/80 hover:text-cream transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-cream/80 hover:text-cream transition-colors duration-200">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-cream/80 hover:text-cream transition-colors duration-200">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center">
          <p className="text-sm text-cream/60">
            © 2025 Bio-Bäckerei. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 