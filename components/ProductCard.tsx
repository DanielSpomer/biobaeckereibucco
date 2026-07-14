import Link from 'next/link'
import type { Product } from '../lib/content'
import { ArrowIcon } from './Icons'
import ProductImageStage from './ProductImageStage'

type ProductCardProps = {
  product: Product
  priority?: boolean
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const images = product.images ?? [
    {
      src: product.image,
      alt: product.name,
      label: 'Ansicht',
    },
  ]

  return (
    <Link
      href={`/produkte/${product.slug}`}
      className="group block h-full cursor-pointer rounded-[6px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`${product.name} ansehen`}
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-[6px] border border-primary/20 bg-white transition duration-300 group-hover:-translate-y-1 group-hover:border-primary group-hover:shadow-[0_20px_48px_rgba(0,53,127,0.13)] group-focus-visible:border-primary motion-reduce:transform-none motion-reduce:transition-none">
        <div className="relative shrink-0">
          <ProductImageStage images={images} priority={priority} />
          {product.vegan || product.badges?.[0] ? (
            <div className="pointer-events-none absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-1.5">
              {product.vegan ? (
                <span className="rounded-[3px] bg-yellow px-2.5 py-1 text-[0.68rem] font-extrabold uppercase text-primary">
                  vegan
                </span>
              ) : null}
              {product.badges?.[0] ? (
                <span className="rounded-[3px] border border-primary/15 bg-white/95 px-2.5 py-1 text-[0.68rem] font-extrabold uppercase text-primary">
                  {product.badges[0]}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col border-t border-primary/12 p-5">
          <div className="mb-3">
            <h3 className="min-w-0 hyphens-auto font-serif text-[1.28rem] font-normal leading-[1.2] text-charcoal transition-colors duration-200 group-hover:text-primary motion-reduce:transition-none">
              {product.name}
            </h3>
          </div>
          <p className="product-description text-sm leading-6 text-muted">{product.description}</p>
          <div className="mt-auto flex min-h-12 items-center justify-between gap-3 border-t border-primary/15 pt-4 text-[0.7rem] font-extrabold uppercase text-primary">
            <span>{product.price ?? product.category}</span>
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow ring-1 ring-primary/20" aria-hidden="true" />
                Im Laden
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-[3px] border border-primary/20 bg-surface transition duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-white motion-reduce:transition-none" aria-hidden="true">
                <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </span>
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
