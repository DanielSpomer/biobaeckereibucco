type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'inverse'
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'default',
}: SectionHeadingProps) {
  const inverse = tone === 'inverse'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'}>
      {eyebrow ? <p className={inverse ? 'section-label text-yellow' : 'section-label'}>{eyebrow}</p> : null}
      <h2 className={inverse ? 'mt-3 font-serif text-4xl font-normal leading-[1.05] text-white md:text-6xl' : 'mt-3 font-serif text-4xl font-normal leading-[1.05] text-charcoal md:text-6xl'}>
        {title}
      </h2>
      {description ? (
        <p className={inverse ? 'mt-5 text-base leading-8 text-white/76 md:text-lg' : 'mt-5 text-base leading-8 text-muted md:text-lg'}>{description}</p>
      ) : null}
    </div>
  )
}
