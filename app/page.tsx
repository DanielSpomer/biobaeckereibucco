import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Obstzungen',
      description: 'Traditionelle Obstzungen mit saftigen Früchten der Saison. Handgeformt und mit viel Liebe gebacken für einen unvergleichlichen Geschmack.',
      image: '/Obstzungen.png',
      alt: 'Frische Obstzungen mit saisonalen Früchten'
    },
    {
      id: 2,
      name: 'Mohnzopfen',
      description: 'Fluffiger Hefezopf gefüllt mit aromatischem Mohn aus biologischem Anbau. Ein süßer Klassiker nach traditionellem Familienrezept.',
      image: '/Mohnzopfen.png',
      alt: 'Goldbrauner Mohnzopf mit Bio-Mohnfüllung'
    },
    {
      id: 3,
      name: 'Bierknoten',
      description: 'Herzhafte Bierknoten mit regionalen Zutaten gebacken. Knusprig außen, saftig innen - perfekt zu einem frischen Bier oder als deftiger Snack.',
      image: '/Bierknoten.png',
      alt: 'Traditionelle Bierknoten mit herzhaftem Geschmack'
    }
  ]

  const usps = [
    {
      icon: (
        <svg className="w-12 h-12 text-brown" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: 'Bio-Zutaten',
      description: 'Wir verwenden ausschließlich biologische Zutaten'
    },
    {
      icon: (
        <svg className="w-12 h-12 text-brown" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: 'Aus der Region',
      description: 'Getreide von ausgewählten Landwirten aus der Region'
    },
    {
      icon: (
        <img
          src="/icon_tradition.svg"
          alt="Tradition Icon"
          className="w-12 h-12 text-brown"
        />
      ),
      title: 'Rezepte mit Tradition',
      description: 'Unsere Brote und Brötchen werden allesamt nach traditionellen Rezepten gebacken.'
    }
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cream overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center hero-image"
          style={{
            backgroundImage: `url('/hero-image.jpg')`,
          }}
          role="img"
          aria-label="Bäcker hält frisch gebackenes Brot in den Händen"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-start lg:justify-start">
              
              {/* Text Box - Both texts in one container */}
              <div className="bg-cream/95 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-lg">
                <h1 className="text-4xl tracking-tight font-serif font-bold text-brown sm:text-5xl md:text-6xl leading-tight">
                  <span className="block">Echte</span>
                  <span className="block">Handarbeit.</span>
                  <span className="block">Echter</span>
                  <span className="block">Geschmack.</span>
                </h1>
                <p className="mt-6 text-base text-brown sm:text-lg md:text-xl leading-relaxed"> 
                  Entdecken Sie die Tradition echter Handwerkskunst.
                </p>
                <div className="mt-8">
                  <Link
                    href="/produkte"
                    className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Unsere Backwaren entdecken
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Produkte Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-serif font-bold text-brown sm:text-4xl">
              Seit zwei Generationen backen wir mit Herz
            </h2>
            <p className="mt-4 text-xl text-brown">
              und natürlichen Zutaten.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-2">
                  <div 
                    className="w-full h-48 product-image bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: `url('${product.image}')`,
                    }}
                    role="img"
                    aria-label={product.alt}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-semibold text-brown mb-2">
                    {product.name}
                  </h3>
                  <p className="text-brown/80 text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {usps.map((usp, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold text-brown mb-2">
                  {usp.title}
                </h3>
                <p className="text-brown/80">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Backkurs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-brown sm:text-4xl mb-6">
                Backkurs – Bio Bäckerei Bucco
              </h2>
              <p className="text-xl text-brown mb-6">
                Lernen Sie Ciabatta, Franzbrötchen & geflochtene Brötchen!
              </p>
              <div className="space-y-4 text-brown mb-8">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brown mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Learning by doing - Theorie und Praxis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brown mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Rezepte für die Heimküche angepasst</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brown mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Getränke inklusive, ca. 4 Stunden</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brown mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Baumwolltasche mit allen Produkten zum Mitnehmen</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-accent/30 rounded-lg p-4">
                  <h3 className="font-serif font-semibold text-brown mb-2">Jeden ersten Samstag im Monat:</h3>
                  <p className="text-brown"><strong>Ciabatta, Franzbrötchen & geflochtene Brötchen</strong></p>
                  <p className="text-brown/80 text-sm">Start: 13:00 Uhr • ca. 4 Stunden • 95 € (80 € ermäßigt)</p>
                  <p className="text-brown/80 text-sm">Ort: Ravenstr. 1, 13347 Berlin</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/backkurs"
                    className="btn-primary text-center"
                  >
                    Alle Kurse & Anmeldung
                  </Link>
                  <a
                    href="tel:+4930-4617370"
                    className="btn-secondary text-center"
                  >
                    Jetzt anrufen: 030 4617 370
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-first lg:order-last">
              <div 
                className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg hero-image"
                style={{
                  backgroundImage: "url('/Backkurs.png')",
                }}
                role="img"
                aria-label="Backkurs bei Bio Bäckerei Bucco - Ciabatta, Franzbrötchen und geflochtene Brötchen"
              />
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 