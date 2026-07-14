import type { Product } from '../lib/content'
import { GrainIcon } from './Icons'
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
    <article className="group flex h-full min-h-[510px] flex-col overflow-hidden rounded-[6px] border border-primary/20 bg-white transition duration-300 hover:border-primary/55 hover:shadow-[0_18px_44px_rgba(0,53,127,0.10)] focus-within:border-primary/60 focus-within:shadow-[0_18px_44px_rgba(0,53,127,0.10)] motion-reduce:transition-none">
      <div className="relative shrink-0">
        <ProductImageStage images={images} priority={priority} productName={product.name} />
        {product.vegan || product.badges?.[0] ? (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {product.vegan ? (
              <span className="rounded-[3px] bg-yellow px-2.5 py-1 text-[0.68rem] font-extrabold uppercase text-primary">
                vegan
              </span>
            ) : null}
            {product.badges?.[0] ? (
              <span className="rounded-[3px] border border-primary/15 bg-white/94 px-2.5 py-1 text-[0.68rem] font-extrabold uppercase text-primary backdrop-blur">
                {product.badges[0]}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col border-t border-primary/12 p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="font-serif text-[1.35rem] font-normal leading-[1.18] text-charcoal">
            {product.name}
          </h3>
          <GrainIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
        </div>
        <p className="product-description text-sm leading-6 text-muted">{product.description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-primary/15 pt-4 text-[0.7rem] font-extrabold uppercase text-primary">
          <span>{product.price ?? product.category}</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow ring-1 ring-primary/20" aria-hidden="true" />
            Im Laden
          </span>
        </div>
      </div>
    </article>
  )
}
