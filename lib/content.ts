export type ProductCategory = 'Brot' | 'Brötchen' | 'Süßes'

export type Product = {
  slug: string
  name: string
  category: ProductCategory
  description: string
  price?: string
  image: string
  badges?: string[]
  vegan?: boolean
  featured?: boolean
}

export type Course = {
  title: string
  cadence: string
  time: string
  price: string
  reducedPrice: string
  description: string
  included: string[]
}

export type BusinessInfo = {
  name: string
  address: string[]
  phone: string
  phoneHref: string
  email: string
  instagram: string
  openingHours: Array<{ label: string; value: string }>
}

export const businessInfo: BusinessInfo = {
  name: 'Bio-Bäckerei Bucco',
  address: ['Ravenéstraße 1', '13347 Berlin-Wedding'],
  phone: '030 4617370',
  phoneHref: 'tel:+49304617370',
  email: 'biobaeckereibucco@gmail.com',
  instagram: 'https://www.instagram.com/biobaeckereibucco/',
  openingHours: [
    { label: 'Mo-Fr', value: '08:00 - 18:00 Uhr' },
    { label: 'Sa', value: '08:00 - 12:00 Uhr' },
    { label: 'So', value: 'Geschlossen' },
  ],
}

export const products: Product[] = [
  {
    slug: 'roggenbrot',
    name: 'Roggenbrot',
    category: 'Brot',
    description:
      'Als Klassiker unter den Kastenbroten ist unser Roggenvollkornbrot ein echter Allrounder. Herzhaft, süß, zum Dippen oder einfach pur - auch mit Röstzwiebeln oder Kümmel erhältlich.',
    image: '/images/products/roggenbrot.jpg',
    badges: ['Klassiker'],
    vegan: true,
    featured: true,
  },
  {
    slug: 'sonnenblumenkernbrot',
    name: 'Sonnenblumenkernbrot',
    category: 'Brot',
    description:
      'Mit knusprigen Sonnenblumenkernen und toller Frischhaltung ist dieses Roggen-Weizenvollkornmischbrot besonders gut für herzhafte Beläge geeignet.',
    image: '/images/products/sonnenblumenkernbrot.jpg',
    badges: ['Saaten'],
    vegan: true,
  },
  {
    slug: 'walnussbrot',
    name: 'Walnussbrot',
    category: 'Brot',
    description:
      'Direkt frei auf unserer Steinplatte gebacken: rustikale Kruste, knusprige Walnusskerne im Inneren und ein Geschmack, der lange hängen bleibt.',
    image: '/images/products/walnussbrot.jpg',
    badges: ['Steinplatte'],
  },
  {
    slug: 'bauernbrot',
    name: 'Bauernbrot',
    category: 'Brot',
    description:
      'Unsere Version des klassischen Berliner Landbrots. Rustikal, leicht bemehlt, mild säuerlich und genau richtig für eine gute Stulle.',
    image: '/images/products/bauernbrot.jpg',
    badges: ['Berliner Landbrot'],
    featured: true,
  },
  {
    slug: 'dinkelvollkornbrot',
    name: 'Dinkelvollkornbrot',
    category: 'Brot',
    description:
      'Die ganz einfache Variante unserer Dinkelvollkornbrote. Im Laden gibt es je nach Tag auch Dinkel-Saaten oder unsere langzeitgeführte Dinkel-Bauernkruste.',
    image: '/images/products/dinkelvollkornbrot.jpg',
    badges: ['Dinkel'],
  },
  {
    slug: 'buccos-kraeuter-ritter',
    name: 'Buccos Kräuter Ritter',
    category: 'Brot',
    description:
      'Unser Hausbrot und täglich mit dabei: Kürbiskerne, Leinsaat und Sonnenblumenkerne, gewürzt mit Kümmel, Anis und Fenchel.',
    image: '/images/products/buccos-kraeuter-ritter.jpg',
    badges: ['Hausbrot'],
    featured: true,
  },
  {
    slug: 'weizenvollkornbroetchen-saaten',
    name: 'Weizenvollkornbrötchen m. Saaten',
    category: 'Brötchen',
    description:
      'Die volle Wahlfreiheit bei unserem Klassiker: mit Sonnenblumenkernen, Kürbis, Leinsaat, Käse oder Mohn findet sich für jeden Geschmack etwas.',
    image: '/images/products/weizenvollkornbroetchen-saaten.jpg',
    badges: ['Auswahl'],
  },
  {
    slug: 'schrippen-sternbroetchen',
    name: 'Schrippen/Sternbrötchen',
    category: 'Brötchen',
    description:
      'Der Klassiker, der nicht fehlen darf. Schrippen, Sternbrötchen und Laugengebäcke werden schonend aufgearbeitet - für natürlichen Geschmack und gute Bekömmlichkeit.',
    image: '/images/products/schrippen-sternbroetchen.jpg',
    badges: ['Klassiker'],
  },
  {
    slug: 'bierknoten',
    name: 'Bierknoten',
    category: 'Brötchen',
    description:
      'Herzhaft, luftig und aromatisch - perfekt zu Bier oder als deftige Begleitung. Außen rustikal, innen locker.',
    price: '2,80 €',
    image: '/images/products/bierknoten.jpg',
    badges: ['Herzhaft'],
  },
  {
    slug: 'suesse-broetchen',
    name: 'Süße Brötchen',
    category: 'Süßes',
    description:
      'Für den süßen Zahn haben wir vom klassischen Rosinenbrötchen über Splitter- bis Franzbrötchen alles dabei - sogar in Vollkorn.',
    image: '/images/products/suesse-broetchen.jpg',
    badges: ['Süß'],
  },
  {
    slug: 'croissant-hoernchen',
    name: 'Croissant/Hörnchen',
    category: 'Süßes',
    description:
      'Unsere Croissants nach klassischer französischer Herstellungsart: zart buttrig oder komplett vegan als Vollkornvariante.',
    image: '/images/products/croissant-hoernchen.jpg',
    badges: ['Französisch'],
  },
  {
    slug: 'obstzungen',
    name: 'Obstzungen',
    category: 'Süßes',
    description:
      'Zarter Mürbeteig mit fruchtiger Füllung und feiner Glasur. Klassisch, aber immer besonders.',
    price: '3,90 €',
    image: '/images/products/obstzungen.jpg',
    badges: ['Fruchtig'],
    featured: true,
  },
  {
    slug: 'mohnzopfen',
    name: 'Mohnzopfen',
    category: 'Süßes',
    description:
      'Saftiger Hefeteig mit aromatischer Mohnfüllung - traditionell, geflochten und einfach unverwechselbar.',
    price: '5,50 €',
    image: '/images/products/mohnzopfen.jpg',
    badges: ['Geflochten'],
  },
]

export const productCategories: Array<ProductCategory | 'Alle'> = [
  'Alle',
  'Brot',
  'Brötchen',
  'Süßes',
]

export const featuredProducts = products.filter((product) => product.featured)

export const course: Course = {
  title: 'Backkurs - Bio-Bäckerei Bucco',
  cadence: 'Jeden ersten Samstag im Monat',
  time: '13:00 - 17:00 Uhr',
  price: '95 €',
  reducedPrice: '80 € ermäßigt',
  description:
    'Learning by doing: Ciabatta, Franzbrötchen und geflochtene Brötchen herstellen - und lernen, wie die Rezepte auch zuhause funktionieren.',
  included: [
    'Alle Zutaten für Ciabatta, Franzbrötchen und geflochtene Brötchen',
    'Rezepte, angepasst für die Heimküche',
    'Getränke und Pause mit Verkostung',
    'Baumwolltasche mit allen hergestellten Produkten zum Mitnehmen',
  ],
}

export const values = [
  {
    title: '100% Bio-Zutaten',
    description:
      'Wir verwenden ausschließlich biologische Zutaten - ohne Kompromisse bei Qualität und Geschmack.',
  },
  {
    title: 'Handwerk mit Zeit',
    description:
      'Unsere Teige dürfen lange ruhen. So entstehen Aroma, Bekömmlichkeit und eine Kruste mit Charakter.',
  },
  {
    title: 'Qualität statt Masse',
    description:
      'Bei Bucco gilt: Wenn alles ausverkauft ist, ist alles ausverkauft. Frische und Handwerk gehen vor Überproduktion.',
  },
  {
    title: 'Regionale Partner',
    description:
      'Bio-Mehl kommt unter anderem von der Paulicks-Mühle - transparent, partnerschaftlich und nah am Produkt.',
  },
]

export const aboutFacts = [
  'Daniela und Thorsten Bucco prägen die Bio-Bäckerei in der Ravenéstraße mit echter Handwerksnähe.',
  'Mike Bucco steht als Bäckermeister für die nächste Generation und verbindet moderne Backstube mit klassischem Können.',
  'Das Sortiment entsteht bewusst in kleinen Mengen - frisch, bio und ohne den Anspruch, alles jederzeit unbegrenzt verfügbar zu machen.',
]
