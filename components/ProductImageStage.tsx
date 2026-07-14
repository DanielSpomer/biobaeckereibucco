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
      className="product-image-stage relative aspect-[4/3] shrink-0 overflow-hidden bg-white"
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
            'object-contain p-4 transition duration-500 ease-out motion-reduce:transition-none md:p-5',
            index === activeIndex
              ? 'scale-100 opacity-100'
              : 'scale-[1.018] opacity-0',
            index === 0 ? 'group-hover:scale-[1.025]' : '',
          ].join(' ')}
        />
      ))}

      {hasSecondPerspective ? (
        <>
          <div className="pointer-events-none absolute left-3 top-3 rounded-[3px] border border-primary/15 bg-white/94 px-2.5 py-1 text-[0.64rem] font-extrabold uppercase text-primary opacity-0 transition duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none">
            {images[activeIndex].label}
          </div>
          <div className="absolute bottom-3 right-3 flex gap-1.5 rounded-[5px] border border-primary/15 bg-white/94 p-1.5 shadow-[0_8px_22px_rgba(0,53,127,0.10)] backdrop-blur">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className={[
                  'relative h-11 w-14 overflow-hidden rounded-[3px] border bg-white transition active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white motion-reduce:transition-none',
                  index === activeIndex
                    ? 'border-primary shadow-[inset_0_-3px_0_#ffca50]'
                    : 'border-line hover:border-primary/55',
                ].join(' ')}
                aria-label={`${productName}: ${image.label} anzeigen`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  )
}
