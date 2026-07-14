type IconProps = {
  className?: string
}

export function GrainIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 8c-3.2 0-5.4-1.5-6.5-4.5C8.7 3.5 10.9 5 12 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 13c-3.5 0-6-1.7-7.4-5.2 3.5.1 6 1.8 7.4 5.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 18c-3.8 0-6.6-1.9-8.1-5.7 3.8.1 6.6 2 8.1 5.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 8c3.2 0 5.4-1.5 6.5-4.5C15.3 3.5 13.1 5 12 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 13c3.5 0 6-1.7 7.4-5.2-3.5.1-6 1.8-7.4 5.2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 18c3.8 0 6.6-1.9 8.1-5.7-3.8.1-6.6 2-8.1 5.7Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

export function LeafIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.5 3.5C12 3.9 6.1 8.2 4 16.5c5.9 1.4 12.4-2.4 16.5-13Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4 20c2.6-5.2 6.6-8.7 12-10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function HandsIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7.5 12.5V6.8a1.4 1.4 0 1 1 2.8 0v4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10.3 11.5V5.7a1.4 1.4 0 1 1 2.8 0v5.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13.1 12V7a1.4 1.4 0 1 1 2.8 0v7.1c0 3-2.2 5.4-5.2 5.4h-.4A5.2 5.2 0 0 1 5.1 14v-1.3c0-.8.6-1.4 1.4-1.4.7 0 1.2.5 1.4 1.2l.3 1.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.6 11.8 18.3 10a1.4 1.4 0 0 1 2 2l-4.2 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ClockIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function QualityIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 2.8 2.2 1.5 2.7-.2 1.1 2.5 2.3 1.5-.6 2.7 1.2 2.4-1.8 2-.2 2.7-2.6.7-1.6 2.2-2.7-1-2.7 1-1.6-2.2-2.6-.7-.2-2.7-1.8-2 1.2-2.4-.6-2.7L6 6.6l1.1-2.5 2.7.2L12 2.8Z" stroke="currentColor" strokeWidth="1.65" strokeLinejoin="round" />
      <path d="m8.6 12.2 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function RegionIcon({ className = 'h-5 w-5' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s6.5-5.4 6.5-11.2a6.5 6.5 0 1 0-13 0C5.5 15.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M12 13.1V7.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 9.3c-1.7 0-2.9-.8-3.5-2.4 1.7 0 2.9.8 3.5 2.4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 11.8c1.8 0 3-.9 3.7-2.6-1.8 0-3.1.9-3.7 2.6Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}
