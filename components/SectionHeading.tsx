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
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className={inverse ? 'section-label text-yellow' : 'section-label'}>{eyebrow}</p> : null}
      <h2 className={inverse ? 'mt-3 font-serif text-3xl font-black leading-tight text-white md:text-5xl' : 'mt-3 font-serif text-3xl font-black leading-tight text-charcoal md:text-5xl'}>
        {title}
      </h2>
      {description ? (
        <p className={inverse ? 'mt-5 text-base leading-8 text-white/76 md:text-lg' : 'mt-5 text-base leading-8 text-muted md:text-lg'}>{description}</p>
      ) : null}
    </div>
  )
}
