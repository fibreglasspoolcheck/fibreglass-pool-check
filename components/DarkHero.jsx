import Link from 'next/link'

export default function DarkHero({
  label,
  title,
  description,
  price,
  priceNote,
  ctaText,
  ctaHref,
  guarantee,
}) {
  return (
    <section className="bg-deep text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none" style={{ background: 'radial-gradient(circle at top right, rgba(212,98,43,0.06) 0%, transparent 60%)' }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          {label && (
            <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent font-sans mb-4">
              {label}
            </span>
          )}
          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.15] tracking-[-0.01em] text-white mb-5">
            {title}
          </h1>
          {description && (
            <div className="text-warm-grey text-lg leading-relaxed mb-6">
              {description}
            </div>
          )}
          {price && (
            <div className="text-3xl font-bold text-white mb-6">
              {price} <span className="text-warm-grey text-lg font-normal">AUD</span>
            </div>
          )}
          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-block bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold font-sans transition-colors"
            >
              {ctaText}
            </Link>
          )}
          {guarantee && (
            <p className="text-warm-grey text-xs mt-3 italic">{guarantee}</p>
          )}
          {priceNote && (
            <p className="text-warm-grey text-xs mt-3">{priceNote}</p>
          )}
        </div>
      </div>
    </section>
  )
}
