'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { ProductImage } from '../lib/content'

type ProductImageStageProps = {
  images: ProductImage[]
  priority?: boolean
}

export default function ProductImageStage({
  images,
  priority = false,
}: ProductImageStageProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const didSwipe = useRef(false)
  const swipeResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hasMultipleImages = images.length > 1

  useEffect(() => {
    if (!isHovered || !hasMultipleImages || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length)
    }, 1500)

    return () => window.clearInterval(interval)
  }, [hasMultipleImages, images.length, isHovered])

  useEffect(() => () => {
    if (swipeResetTimer.current) clearTimeout(swipeResetTimer.current)
  }, [])

  const handleTouchEnd = (endX: number) => {
    if (touchStartX.current === null || !hasMultipleImages) return

    const distance = endX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) < 36) return

    didSwipe.current = true
    setActiveIndex((current) => {
      if (distance < 0) return (current + 1) % images.length
      return (current - 1 + images.length) % images.length
    })

    if (swipeResetTimer.current) clearTimeout(swipeResetTimer.current)
    swipeResetTimer.current = setTimeout(() => {
      didSwipe.current = false
    }, 500)
  }

  return (
    <div
      className="product-image-stage relative aspect-[4/3] shrink-0 touch-pan-y overflow-hidden bg-white"
      onMouseEnter={() => {
        if (!hasMultipleImages || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        setActiveIndex(1)
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setActiveIndex(0)
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
      onTouchCancel={() => {
        touchStartX.current = null
      }}
      onClickCapture={(event) => {
        if (!didSwipe.current) return
        event.preventDefault()
        event.stopPropagation()
        didSwipe.current = false
      }}
    >
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={index === activeIndex ? image.alt : ''}
          aria-hidden={index !== activeIndex}
          fill
          priority={priority && index === 0}
          draggable={false}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={[
            'select-none object-contain p-4 transition duration-500 ease-out motion-reduce:transition-none md:p-5',
            index === activeIndex ? 'scale-100 opacity-100' : 'scale-[1.025] opacity-0',
          ].join(' ')}
        />
      ))}
    </div>
  )
}
