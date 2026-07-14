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
