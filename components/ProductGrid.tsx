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
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {productCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelected(category)}
            className={
              selected === category
                ? 'rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-white shadow-soft'
                : 'rounded-full border border-line bg-surface px-6 py-3 text-sm font-extrabold text-primary transition hover:border-primary hover:bg-white'
            }
          >
            {category === 'Alle' ? 'Alle Backwaren' : category}
          </button>
        ))}
      </div>

      <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product, index) => (
          <div key={product.slug} id={product.slug} className="h-full scroll-mt-28">
            <ProductCard product={product} priority={index < 4} />
          </div>
        ))}
      </div>
    </div>
  )
}
