import Image from 'next/image'
import type { ProductImage } from '../lib/content'

type ProductImageStageProps = {
  images: ProductImage[]
  priority?: boolean
}

export default function ProductImageStage({
  images,
  priority = false,
}: ProductImageStageProps) {
  const image = images[0]

  return (
    <div className="product-image-stage relative aspect-[4/3] shrink-0 overflow-hidden bg-white">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-contain p-4 transition duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none md:p-5"
      />
    </div>
  )
}
