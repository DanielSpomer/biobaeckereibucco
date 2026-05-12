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
    'Roggenbrot',
    'Sonnenblumenkernbrot',
    'Walnussbrot',
    'Bauernbrot',
    'Dinkelvollkornbrot',
    'Buccos Kräuter Ritter',
    'Weizenvollkornbrötchen m. Saaten',
    'Schrippen/Sternbrötchen',
    'Süße Brötchen',
    'Croissant/Hörnchen',
    'Obstzungen',
    'Mohnzopfen',
    'Bierknoten',
  ]) {
    assert.match(content, new RegExp(product.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
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
