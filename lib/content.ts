export type ProductCategory = 'Brot' | 'Brötchen' | 'Süßes'

export type ProductImage = {
  src: string
  alt: string
  label: string
}

export type Product = {
  slug: string
  name: string
  category: ProductCategory
  description: string
  price?: string
  image: string
  images?: ProductImage[]
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

const productImages = (slug: string, name: string, labels: string[]): ProductImage[] =>
  labels.map((label, index) => ({
    src: `/images/products/${slug}-${String(index + 1).padStart(2, '0')}.jpg`,
    alt: `${name}, ${label.toLowerCase()}`,
    label,
  }))

export const products: Product[] = [
  {
    slug: 'bauernbrot',
    name: 'Bauernbrot',
    category: 'Brot',
    description:
      'Unsere Version des klassischen Berliner Landbrots. Rustikal, leicht bemehlt, mild säuerlich und genau richtig für eine gute Stulle.',
    image: '/images/products/bauernbrot-01.jpg',
    images: productImages('bauernbrot', 'Bauernbrot', ['Schrägansicht', 'Nahansicht']),
    badges: ['Berliner Klassiker'],
    featured: true,
  },
  {
    slug: 'sonnenblumenkernbrot',
    name: 'Sonnenblumenkernbrot',
    category: 'Brot',
    description:
      'Mit knusprigen Sonnenblumenkernen und toller Frischhaltung ist dieses Roggen-Weizenvollkornmischbrot besonders gut für herzhafte Beläge geeignet.',
    image: '/images/products/sonnenblumenkernbrot-01.jpg',
    images: productImages('sonnenblumenkernbrot', 'Sonnenblumenkernbrot', [
      'Vorderansicht',
      'Schrägansicht',
      'Seitenansicht',
    ]),
    vegan: true,
    featured: true,
  },
  {
    slug: 'dinkelvollkornbrot',
    name: 'Dinkelvollkornbrot mit Saaten',
    category: 'Brot',
    description:
      'Saftiges Dinkelvollkornbrot mit kräftiger Saatenkruste. Kernig im Biss und ein verlässliches Brot für jeden Tag.',
    image: '/images/products/dinkelvollkornbrot-01.jpg',
    images: productImages('dinkelvollkornbrot', 'Dinkelvollkornbrot mit Saaten', ['Schrägansicht']),
  },
  {
    slug: 'walnussbrot',
    name: 'Walnussbrot',
    category: 'Brot',
    description:
      'Direkt frei auf unserer Steinplatte gebacken: rustikale Kruste, knusprige Walnusskerne im Inneren und ein Geschmack, der lange bleibt.',
    image: '/images/products/walnussbrot-01.jpg',
    images: productImages('walnussbrot', 'Walnussbrot', ['Draufsicht', 'Vorderansicht']),
    featured: true,
  },
  {
    slug: 'landbrot',
    name: 'Landbrot',
    category: 'Brot',
    description:
      'Kräftig ausgebacken, bemehlt und mit einer saftigen Krume. Ein ehrliches Alltagsbrot mit rustikalem Charakter.',
    image: '/images/products/landbrot-01.jpg',
    images: productImages('landbrot', 'Landbrot', ['Schrägansicht', 'Draufsicht']),
  },
  {
    slug: 'haselnussbrot',
    name: 'Haselnussbrot',
    category: 'Brot',
    description:
      'Dunkel gebacken, nussig und angenehm saftig. Ein kerniges Brot mit kräftigem Aroma und langem Nachhall.',
    image: '/images/products/haselnussbrot-01.jpg',
    images: productImages('haselnussbrot', 'Haselnussbrot', ['Schrägansicht', 'Seitenansicht']),
  },
  {
    slug: 'kuerbiskernbrot',
    name: 'Kürbiskernbrot',
    category: 'Brot',
    description:
      'Kräftige Kruste, reichlich Kürbiskerne und ein herzhafter, nussiger Geschmack. Besonders gut zu Käse und Aufstrichen.',
    image: '/images/products/kuerbiskernbrot-01.jpg',
    images: productImages('kuerbiskernbrot', 'Kürbiskernbrot', ['Schrägansicht', 'Seitenansicht']),
  },
  {
    slug: 'quarkbrot',
    name: 'Quarkbrot',
    category: 'Brot',
    description:
      'Fein saftig durch Quark und rundum mit Mohn veredelt. Mild im Geschmack, weich in der Krume und lange frisch.',
    image: '/images/products/quarkbrot-01.jpg',
    images: productImages('quarkbrot', 'Quarkbrot', ['Schrägansicht', 'Seitenansicht']),
  },
  {
    slug: 'zwiebelbrot',
    name: 'Zwiebelbrot',
    category: 'Brot',
    description:
      'Herzhaftes Kastenbrot mit würziger Zwiebelnote. Kräftig, saftig und wie gemacht für eine deftige Berliner Stulle.',
    image: '/images/products/zwiebelbrot-01.jpg',
    images: productImages('zwiebelbrot', 'Zwiebelbrot', ['Seitenansicht', 'Schrägansicht']),
  },
  {
    slug: 'weissbrot',
    name: 'Weißbrot',
    category: 'Brot',
    description:
      'Mild, locker und fein ausgebacken. Ein unkompliziertes Weißbrot für Frühstück, Toast und alles dazwischen.',
    image: '/images/products/weissbrot-01.jpg',
    images: productImages('weissbrot', 'Weißbrot', ['Schrägansicht']),
  },
  {
    slug: 'schrippen-sternbroetchen',
    name: 'Schrippe',
    category: 'Brötchen',
    description:
      'Der Berliner Klassiker, der nicht fehlen darf. Schonend aufgearbeitet, knusprig ausgebacken und innen locker.',
    image: '/images/products/schrippen-sternbroetchen-01.jpg',
    images: productImages('schrippen-sternbroetchen', 'Schrippe', ['Vorderansicht', 'Draufsicht']),
    badges: ['Berliner Klassiker'],
  },
  {
    slug: 'dinkelbaguettebroetchen',
    name: 'Dinkelbaguettebrötchen',
    category: 'Brötchen',
    description:
      'Rustikal bemehlt, aromatisch und mit einer kräftigen Kruste. Die kleine Dinkelvariante für Frühstück und Stulle.',
    image: '/images/products/dinkelbaguettebroetchen-01.jpg',
    images: productImages('dinkelbaguettebroetchen', 'Dinkelbaguettebrötchen', [
      'Draufsicht',
      'Schrägansicht',
    ]),
  },
  {
    slug: 'dinkelvollkornbroetchen',
    name: 'Dinkelvollkornbrötchen',
    category: 'Brötchen',
    description:
      'Ein rundes Vollkornbrötchen mit Saaten, kräftigem Biss und saftiger Krume. Sättigend, ohne schwer zu wirken.',
    image: '/images/products/dinkelvollkornbroetchen-01.jpg',
    images: productImages('dinkelvollkornbroetchen', 'Dinkelvollkornbrötchen', ['Draufsicht']),
  },
  {
    slug: 'dinkelvollkornseele',
    name: 'Dinkelvollkornseele',
    category: 'Brötchen',
    description:
      'Länglich, rustikal und mit einer fein würzigen Kruste. Eine kräftige Dinkelvollkornseele für unterwegs.',
    image: '/images/products/dinkelvollkornseele-01.jpg',
    images: productImages('dinkelvollkornseele', 'Dinkelvollkornseele', ['Draufsicht']),
  },
  {
    slug: 'dinkelkraftbroetchen',
    name: 'Dinkelkraftbrötchen',
    category: 'Brötchen',
    description:
      'Kompakt, saftig und rundum mit Saaten bestreut. Ein kräftiges Brötchen für einen langen Berliner Tag.',
    image: '/images/products/dinkelkraftbroetchen-01.jpg',
    images: productImages('dinkelkraftbroetchen', 'Dinkelkraftbrötchen', ['Schrägansicht']),
  },
  {
    slug: 'croissant-hoernchen',
    name: 'Croissant',
    category: 'Süßes',
    description:
      'Nach klassischer französischer Art touriert: außen goldbraun und knusprig, innen zart und blättrig.',
    image: '/images/products/croissant-hoernchen-01.jpg',
    images: productImages('croissant-hoernchen', 'Croissant', ['Vorderansicht', 'Draufsicht']),
    featured: true,
  },
  {
    slug: 'vollkorncroissant',
    name: 'Vollkorncroissant',
    category: 'Süßes',
    description:
      'Die kernige Vollkornvariante unseres Croissants: feinblättrig, aromatisch und vollständig vegan.',
    image: '/images/products/vollkorncroissant-01.jpg',
    images: productImages('vollkorncroissant', 'Vollkorncroissant', ['Schrägansicht']),
    vegan: true,
  },
  {
    slug: 'franzbroetchen',
    name: 'Franzbrötchen',
    category: 'Süßes',
    description:
      'Saftig gewickelt, fein karamellisiert und mit der typischen Zimtspirale. Ein norddeutscher Klassiker aus unserer Backstube.',
    image: '/images/products/franzbroetchen-01.jpg',
    images: productImages('franzbroetchen', 'Franzbrötchen', ['Vorderansicht']),
  },
  {
    slug: 'rosinenbroetchen',
    name: 'Rosinenbrötchen',
    category: 'Süßes',
    description:
      'Weich, goldbraun und mit saftigen Rosinen. Schmeckt pur, mit Butter oder direkt auf dem Weg nach Hause.',
    image: '/images/products/rosinenbroetchen-01.jpg',
    images: productImages('rosinenbroetchen', 'Rosinenbrötchen', ['Draufsicht']),
  },
]

export const productCategories: Array<ProductCategory | 'Alle'> = [
  'Alle',
  'Brot',
  'Brötchen',
  'Süßes',
]

export const featuredProducts = products.filter((product) => product.featured)

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug)

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
