import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContactCta from '../../../components/ContactCta'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { ArrowIcon, GrainIcon } from '../../../components/Icons'
import { getProductBySlug, products } from '../../../lib/content'

type ProductPageProps = {
  params: { slug: string }
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {}
  }

  return {
    title: `${product.name} | Bio-Bäckerei Bucco`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const images = product.images ?? [
    { src: product.image, alt: product.name, label: 'Produktfoto' },
  ]

  return (
    <div className="page-shell">
      <Header />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-12 lg:px-10">
          <Link
            href="/produkte"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-primary underline decoration-primary/25 underline-offset-4 transition hover:decoration-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <ArrowIcon className="h-4 w-4 rotate-180" />
            Alle Backwaren
          </Link>

          <div className="mt-5 grid grid-cols-[minmax(0,1fr)] overflow-hidden border-y border-primary/20 bg-surface lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
            <div className="flex min-w-0 flex-col justify-center px-0 py-9 sm:px-8 lg:px-10 lg:py-14">
              <div className="flex flex-wrap items-center gap-2 text-[0.7rem] font-extrabold uppercase text-primary">
                <span>{product.category}</span>
                {product.vegan ? <span className="rounded-[3px] bg-yellow px-2.5 py-1">Vegan</span> : null}
                {product.badges?.map((badge) => (
                  <span key={badge} className="rounded-[3px] border border-primary/20 bg-white px-2.5 py-1">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex min-w-0 items-start gap-4">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] bg-yellow/50 text-primary" aria-hidden="true">
                  <GrainIcon className="h-5 w-5" />
                </span>
                <h1 className="min-w-0 max-w-full hyphens-auto [overflow-wrap:anywhere] font-serif text-[2.35rem] font-normal leading-[1.02] text-charcoal sm:text-5xl lg:text-[3.8rem]">
                  {product.name}
                </h1>
              </div>

              <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
                {product.description}
              </p>

              <div className="mt-8 grid gap-3 border-t border-primary/18 pt-6 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-[0.68rem] font-extrabold uppercase text-primary">Sortiment</p>
                  <p className="mt-1 font-semibold text-charcoal">{product.category}</p>
                </div>
                <div>
                  <p className="text-[0.68rem] font-extrabold uppercase text-primary">Verfügbarkeit</p>
                  <p className="mt-1 font-semibold text-charcoal">Frisch in unserer Ladentheke</p>
                </div>
              </div>

              <Link href="/kontakt" className="btn-primary mt-8 w-full gap-2 sm:w-fit">
                Laden & Öffnungszeiten
                <ArrowIcon />
              </Link>
            </div>

            <div className="relative aspect-[4/3] min-h-[320px] border-t border-primary/15 bg-white lg:aspect-auto lg:min-h-[620px] lg:border-l lg:border-t-0">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-contain p-6 sm:p-10"
              />
            </div>
          </div>
        </section>

        {images.length > 1 ? (
          <section className="border-y border-primary/15 bg-background py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-10">
              <div className="grid gap-5 sm:grid-cols-2">
                {images.slice(1).map((image) => (
                  <figure key={image.src} className="overflow-hidden border border-primary/18 bg-white">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-contain p-6 sm:p-8"
                      />
                    </div>
                    <figcaption className="border-t border-primary/12 px-5 py-3 text-sm font-semibold text-muted">
                      {product.name} · {image.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <ContactCta />
      </main>

      <Footer />
    </div>
  )
}
