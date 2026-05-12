import Image from 'next/image'
import type { Product } from '../lib/content'
import { ArrowIcon, GrainIcon } from './Icons'

type ProductCardProps = {
  product: Product
  priority?: boolean
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group flex h-full min-h-[540px] flex-col overflow-hidden rounded-[30px] border border-line bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift">
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-surface-container">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        {product.vegan || product.badges?.[0] ? (
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {product.vegan ? (
              <span className="rounded-full bg-yellow px-3 py-1 text-xs font-bold text-charcoal">
                vegan
              </span>
            ) : null}
            {product.badges?.[0] ? (
              <span className="rounded-full bg-surface/92 px-3 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur">
                {product.badges[0]}
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-black leading-snug text-charcoal">
            {product.name}
          </h3>
          <GrainIcon className="mt-1 h-5 w-5 shrink-0 text-primary" />
        </div>
        <p className="product-description text-sm leading-7 text-muted">{product.description}</p>
        <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-4">
          <span className="text-sm font-semibold text-charcoal">
            {product.price ?? product.category}
          </span>
          <a href={`/produkte#${product.slug}`} className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold text-primary transition hover:bg-primary hover:text-white">
            Mehr erfahren
            <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  )
}
