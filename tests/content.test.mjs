import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'

const root = process.cwd()

function read(path) {
  return readFileSync(join(root, path), 'utf8')
}

function sourceFiles() {
  const files = []
  const stack = ['app', 'components', 'lib'].filter((dir) => existsSync(join(root, dir)))

  while (stack.length > 0) {
    const current = stack.pop()
    const full = join(root, current)

    for (const entry of readdirSync(full)) {
      const relative = join(current, entry)
      const absolute = join(root, relative)
      const stats = statSync(absolute)

      if (stats.isDirectory()) {
        stack.push(relative)
      } else if (/\.(ts|tsx)$/.test(entry)) {
        files.push(relative)
      }
    }
  }

  return files
}

test('central product content exists with the approved Bucco catalog', () => {
  const contentPath = join(root, 'lib/content.ts')

  assert.equal(existsSync(contentPath), true)

  const content = read('lib/content.ts')
  for (const product of [
    'Bauernbrot',
    'Sonnenblumenkernbrot',
    'Dinkelvollkornbrot mit Saaten',
    'Walnussbrot',
    'Landbrot',
    'Haselnussbrot',
    'Kürbiskernbrot',
    'Quarkbrot',
    'Zwiebelbrot',
    'Weißbrot',
    'Schrippe',
    'Dinkelbaguettebrötchen',
    'Dinkelvollkornbrötchen',
    'Dinkelvollkornseele',
    'Dinkelkraftbrötchen',
    'Croissant',
    'Vollkorncroissant',
    'Franzbrötchen',
    'Rosinenbrötchen',
  ]) {
    assert.match(content, new RegExp(product.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
  }
})

test('product perspective assets exist for the complete catalog', () => {
  const perspectives = {
    bauernbrot: 2,
    sonnenblumenkernbrot: 3,
    dinkelvollkornbrot: 1,
    walnussbrot: 2,
    landbrot: 2,
    haselnussbrot: 2,
    kuerbiskernbrot: 2,
    quarkbrot: 2,
    zwiebelbrot: 2,
    weissbrot: 1,
    'schrippen-sternbroetchen': 2,
    dinkelbaguettebroetchen: 2,
    dinkelvollkornbroetchen: 1,
    dinkelvollkornseele: 1,
    dinkelkraftbroetchen: 1,
    'croissant-hoernchen': 2,
    vollkorncroissant: 1,
    franzbroetchen: 1,
    rosinenbroetchen: 1,
  }

  for (const [slug, count] of Object.entries(perspectives)) {
    for (let index = 1; index <= count; index += 1) {
      const suffix = String(index).padStart(2, '0')
      assert.equal(existsSync(join(root, `public/images/products/${slug}-${suffix}.jpg`)), true)
    }
  }
})

test('real product photos can be regenerated with the approved normalization pipeline', () => {
  assert.equal(existsSync(join(root, 'scripts/prepare_product_photos.py')), true)
})

test('real bakery section photos from approved image set are present', () => {
  for (const image of [
    'backstube-weizenteig.jpg',
    'laden-team-service.jpg',
    'laden-alltag-theke.jpg',
  ]) {
    assert.equal(existsSync(join(root, `public/images/sections/${image}`)), true)
  }
})

test('site source does not use placeholder images or invented bakery story names', () => {
  const haystack = sourceFiles().map((file) => read(file)).join('\n')

  assert.doesNotMatch(haystack, /\/api\/placeholder/)
  assert.doesNotMatch(haystack, /Klaus Müller|Anna Müller|Thomas Schmidt|Heinrich Müller/)
})

test('footer and contact source use the approved opening hours', () => {
  const haystack = `${read('components/Footer.tsx')}\n${read('app/kontakt/page.tsx')}\n${read('lib/content.ts')}`

  assert.match(haystack, /Mo-Fr.*08:00.*18:00/s)
  assert.match(haystack, /Sa.*08:00.*12:00/s)
  assert.match(haystack, /So.*Geschlossen/s)
})

test('product cards link to detail pages without perspective controls or text clamping', () => {
  const card = read('components/ProductCard.tsx')
  const stage = read('components/ProductImageStage.tsx')
  const styles = read('app/globals.css')

  assert.match(card, /href={`\/produkte\/\$\{product\.slug\}`}/)
  assert.doesNotMatch(card, /Produkt ansehen/)
  assert.match(stage, /onMouseEnter/)
  assert.match(stage, /onTouchStart/)
  assert.match(stage, /handleTouchEnd/)
  assert.doesNotMatch(stage, /aria-pressed|<button/)
  assert.doesNotMatch(styles, /-webkit-line-clamp/)
})

test('every approved product is statically addressable on an individual page', () => {
  const productPage = read('app/produkte/[slug]/page.tsx')

  assert.match(productPage, /generateStaticParams/)
  assert.match(productPage, /getProductBySlug/)
  assert.match(productPage, /notFound/)
  assert.match(productPage, /Frisch in unserer Ladentheke/)
})

test('product overview does not show the internal assortment index', () => {
  assert.doesNotMatch(read('app/produkte/page.tsx'), /01 \/ Sortiment/)
})

test('favicon is the isolated yellow Bucco bread mark', () => {
  const favicon = read('public/favicon.svg')

  assert.match(favicon, /M66 119c5-17/)
  assert.match(favicon, /#ffca50/g)
  assert.match(favicon, /#00357f/)
  assert.equal(existsSync(join(root, 'app/icon.svg')), true)
  assert.equal(existsSync(join(root, 'app/favicon.ico')), true)
  assert.equal(existsSync(join(root, 'app/apple-icon.png')), true)
})

test('shared interface icons use the consistent Lucide icon set', () => {
  const icons = read('components/Icons.tsx')
  const header = read('components/Header.tsx')
  const footer = read('components/Footer.tsx')

  assert.match(icons, /from 'lucide-react'/)
  assert.match(icons, /<Hand /)
  assert.match(icons, /<Sprout /)
  assert.doesNotMatch(icons, /<path /)
  assert.match(header, /<Menu /)
  assert.match(header, /<X /)
  assert.match(footer, /<Camera /)
  assert.doesNotMatch(`${header}\n${footer}`, /<svg /)
})
