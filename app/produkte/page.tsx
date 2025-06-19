import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Produkte() {
  const categories = [
    {
      name: 'Brote',
      products: [
        {
          id: 1,
          name: 'Obstzungen',
          description: 'Traditionelle Obstzungen mit saftigen Früchten der Saison. Handgeformt und mit viel Liebe gebacken für einen unvergleichlichen Geschmack.',
          price: '3,90 €',
          image: '/Obstzungen.png'
        },
        {
          id: 2,
          name: 'Mohnzopfen',
          description: 'Fluffiger Hefezopf gefüllt mit aromatischem Mohn aus biologischem Anbau. Ein süßer Klassiker nach traditionellem Familienrezept.',
          price: '5,50 €',
          image: '/Mohnzopfen.png'
        },
        {
          id: 3,
          name: 'Bierknoten',
          description: 'Herzhafte Bierknoten mit regionalen Zutaten gebacken. Knusprig außen, saftig innen - perfekt zu einem frischen Bier oder als deftiger Snack.',
          price: '2,80 €',
          image: '/Bierknoten.png'
        }
      ]
    },
    {
      name: 'Brötchen',
      products: [
        {
          id: 4,
          name: 'Bio-Dinkelbrötchen',
          description: 'Goldbraune Dinkelbrötchen mit zartem Kern und knuspriger Kruste. Aus 100% Bio-Dinkelmehl.',
          price: '0,85 €',
          image: '/api/placeholder/300/200'
        },
        {
          id: 5,
          name: 'Mohnbrötchen',
          description: 'Klassische Brötchen mit aromatischem Mohn. Ein traditioneller Geschmack aus der Kindheit.',
          price: '0,90 €',
          image: '/api/placeholder/300/200'
        },
        {
          id: 6,
          name: 'Körnerbrötchen',
          description: 'Herzhafte Brötchen mit Sonnenblumenkernen, Sesam und Kürbiskernen für den gesunden Start in den Tag.',
          price: '1,10 €',
          image: '/api/placeholder/300/200'
        }
      ]
    },
    {
      name: 'Süßes',
      products: [
        {
          id: 7,
          name: 'Apfelstrudel',
          description: 'Hausgemachter Apfelstrudel mit saftigen Äpfeln aus der Region und dünnem, knusprigem Teig.',
          price: '12,50 €',
          image: '/api/placeholder/300/200'
        },
        {
          id: 8,
          name: 'Croissants',
          description: 'Buttrige, fluffige Croissants nach französischer Tradition. Perfekt zum Frühstück.',
          price: '1,50 €',
          image: '/api/placeholder/300/200'
        },
        {
          id: 9,
          name: 'Bienenstich',
          description: 'Traditioneller Bienenstich mit cremiger Vanillefüllung und karamellisierten Mandeln.',
          price: '18,90 €',
          image: '/api/placeholder/300/200'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brown sm:text-5xl mb-4">
            Unsere Backwaren
          </h1>
          <p className="text-xl text-brown max-w-3xl mx-auto">
            Entdecken Sie unser vielfältiges Sortiment an handwerklich hergestellten Backwaren. 
            Alle Produkte werden täglich frisch gebacken mit natürlichen Bio-Zutaten.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-brown mb-8 text-center">
              {category.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div 
                    className="w-full h-48 product-image bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${product.image}')`,
                    }}
                    role="img"
                    aria-label={`${product.name} - ${product.description}`}
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-semibold text-brown">
                        {product.name}
                      </h3>
                      <span className="text-lg font-bold text-brown">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-brown/80 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="bg-brown text-cream rounded-lg p-8 text-center mt-16">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Bestellungen und Reservierungen
          </h3>
          <p className="text-cream/90 mb-6">
            Möchten Sie größere Mengen bestellen oder haben spezielle Wünsche? 
            Kontaktieren Sie uns gerne telefonisch oder besuchen Sie uns direkt in der Bäckerei.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:030-4617370"
              className="bg-accent text-brown px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-300"
            >
              Jetzt anrufen
            </a>
            <a
              href="/kontakt"
              className="bg-cream/20 text-cream px-6 py-3 rounded-lg font-medium hover:bg-cream/30 transition-colors duration-300"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 