'use client'

import { useMemo, useState } from 'react'
import { productCategories, products } from '../lib/content'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [selected, setSelected] = useState<(typeof productCategories)[number]>('Alle')

  const visibleProducts = useMemo(() => {
    if (selected === 'Alle') {
      return products
    }

    return products.filter((product) => product.category === selected)
  }, [selected])

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 border-y border-primary/18 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-muted" aria-live="polite">
          <span className="font-extrabold text-primary">{visibleProducts.length}</span>{' '}
          {visibleProducts.length === 1 ? 'Backware' : 'Backwaren'} in der Auswahl
        </p>
        <div className="flex flex-wrap gap-2" aria-label="Backwaren filtern">
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              className={
                selected === category
                  ? 'min-h-11 rounded-[4px] bg-primary px-4 py-2.5 text-sm font-extrabold text-white transition active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 motion-reduce:transition-none'
                  : 'min-h-11 rounded-[4px] border border-primary/25 bg-white px-4 py-2.5 text-sm font-extrabold text-primary transition hover:border-primary hover:bg-yellow/35 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 motion-reduce:transition-none'
              }
            >
              {category === 'Alle' ? 'Alle Backwaren' : category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product, index) => (
          <div key={product.slug} id={product.slug} className="h-full scroll-mt-28">
            <ProductCard product={product} priority={index < 4} />
          </div>
        ))}
      </div>
    </div>
  )
}
