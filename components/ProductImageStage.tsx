'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { ProductImage } from '../lib/content'

type ProductImageStageProps = {
  images: ProductImage[]
  priority?: boolean
  productName: string
}

export default function ProductImageStage({
  images,
  priority = false,
  productName,
}: ProductImageStageProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const hasSecondPerspective = images.length > 1

  return (
    <div
      className="product-image-stage relative aspect-[4/3] shrink-0 overflow-hidden bg-[#f7f3ec]"
      onMouseEnter={() => {
        if (hasSecondPerspective) setActiveIndex(1)
      }}
      onMouseLeave={() => setActiveIndex(0)}
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={priority && index === 0}
          loading={priority && index > 0 ? 'eager' : undefined}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={[
            'object-cover transition duration-500 ease-out motion-reduce:transition-none',
            index === activeIndex
              ? 'scale-100 opacity-100'
              : 'scale-[1.025] opacity-0',
            index === 0 ? 'group-hover:scale-[1.035]' : '',
          ].join(' ')}
        />
      ))}

      {hasSecondPerspective ? (
        <>
          <div className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-surface/90 px-3 py-1 text-[0.68rem] font-extrabold uppercase text-primary opacity-0 shadow-sm backdrop-blur transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
            zweite Ansicht
          </div>
          <div className="absolute bottom-3 right-3 flex gap-1 rounded-full bg-surface/92 p-1 shadow-soft backdrop-blur">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={[
                  'flex h-11 w-11 items-center justify-center rounded-full transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface motion-reduce:transition-none',
                  index === activeIndex ? 'bg-primary/10' : 'hover:bg-primary/8',
                ].join(' ')}
                aria-label={`${productName}: ${image.label} anzeigen`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <span
                  className={[
                    'h-2.5 w-2.5 rounded-full transition motion-reduce:transition-none',
                    index === activeIndex ? 'bg-primary' : 'bg-line',
                  ].join(' ')}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
