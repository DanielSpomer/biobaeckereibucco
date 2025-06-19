import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brown sm:text-5xl mb-4">
            Über uns
          </h1>
          <p className="text-xl text-brown max-w-3xl mx-auto">
            Seit drei Generationen vereinen wir Tradition und Leidenschaft für das Bäckerhandwerk. 
            Erfahren Sie mehr über unsere Geschichte und unsere Werte.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-serif font-bold text-brown mb-6">
              Unsere Geschichte
            </h2>
            <div className="space-y-4 text-brown">
              <p>
                1952 gründete Heinrich Müller unsere kleine Dorfbäckerei mit einem einfachen Traum: 
                ehrliches Brot für ehrliche Menschen zu backen. Mit traditionellen Rezepten und 
                viel Handarbeit legte er den Grundstein für das, was heute zu unserer Leidenschaft geworden ist.
              </p>
              <p>
                Sein Sohn Klaus übernahm 1978 den Betrieb und erweiterte das Sortiment um regionale 
                Spezialitäten. Er war einer der ersten in der Region, der auf Bio-Zutaten setzte und 
                enge Partnerschaften mit lokalen Landwirten aufbaute.
              </p>
              <p>
                Heute führt die dritte Generation die Bäckerei mit der gleichen Leidenschaft weiter. 
                Wir verbinden traditionelle Backkunst mit modernen Ansprüchen an Qualität und Nachhaltigkeit.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <div 
              className="w-full h-96 bg-cover bg-center rounded-lg shadow-lg hero-image"
              style={{
                backgroundImage: "url('/api/placeholder/600/400')",
              }}
              role="img"
              aria-label="Historische Aufnahme der Bäckerei von 1952"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-serif font-bold text-brown text-center mb-12">
            Unsere Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown mb-2">
                Tradition
              </h3>
              <p className="text-brown/80">
                Über 70 Jahre Erfahrung und bewährte Rezepte, die von Generation zu Generation weitergegeben werden.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2a1 1 0 0 0-2 0v2H8V2a1 1 0 0 0-2 0v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown mb-2">
                Frische
              </h3>
              <p className="text-brown/80">
                Täglich frisch gebacken - jeden Morgen ab 4 Uhr stehen wir in der Backstube für Sie.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold text-brown mb-2">
                Qualität
              </h3>
              <p className="text-brown/80">
                Nur die besten Bio-Zutaten von ausgewählten regionalen Partnern finden den Weg in unsere Backwaren.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-brown mb-8">
            Unser Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div 
                className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-4 hero-image"
                style={{
                  backgroundImage: "url('/api/placeholder/150/150')",
                }}
                role="img"
                aria-label="Porträt von Meisterbäcker Klaus Müller"
              />
              <h3 className="text-xl font-serif font-semibold text-brown mb-2">
                Klaus Müller
              </h3>
              <p className="text-brown/80 text-sm mb-2">Meisterbäcker, 2. Generation</p>
              <p className="text-brown/70 text-sm">
                Mit über 40 Jahren Erfahrung ist Klaus das Herz unserer Bäckerei und Hüter der traditionellen Rezepte.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div 
                className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-4 hero-image"
                style={{
                  backgroundImage: "url('/api/placeholder/150/150')",
                }}
                role="img"
                aria-label="Porträt von Anna Müller"
              />
              <h3 className="text-xl font-serif font-semibold text-brown mb-2">
                Anna Müller
              </h3>
              <p className="text-brown/80 text-sm mb-2">Bäckermeisterin, 3. Generation</p>
              <p className="text-brown/70 text-sm">
                Anna bringt frische Ideen in die Bäckerei und ist verantwortlich für unser Bio-Sortiment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div 
                className="w-32 h-32 bg-cover bg-center rounded-full mx-auto mb-4 hero-image"
                style={{
                  backgroundImage: "url('/api/placeholder/150/150')",
                }}
                role="img"
                aria-label="Porträt von Thomas Schmidt"
              />
              <h3 className="text-xl font-serif font-semibold text-brown mb-2">
                Thomas Schmidt
              </h3>
              <p className="text-brown/80 text-sm mb-2">Konditormeister</p>
              <p className="text-brown/70 text-sm">
                Thomas zaubert unsere süßen Leckereien und ist Spezialist für Torten und feine Backwaren.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brown text-cream rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Besuchen Sie uns
          </h3>
          <p className="text-cream/90 mb-6">
            Lernen Sie uns persönlich kennen und überzeugen Sie sich von der Qualität 
            unserer handwerklich hergestellten Backwaren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontakt"
              className="bg-accent text-brown px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300"
            >
              Kontakt & Öffnungszeiten
            </a>
            <a
              href="/produkte"
              className="bg-cream/20 text-cream px-6 py-3 rounded-lg font-medium hover:bg-cream/30 transition-colors duration-300"
            >
              Unsere Backwaren
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 