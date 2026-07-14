import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Hand,
  MapPin,
  Sprout,
  Wheat,
} from 'lucide-react'

type IconProps = {
  className?: string
}

export function GrainIcon({ className = 'h-5 w-5' }: IconProps) {
  return <Wheat className={className} strokeWidth={1.8} aria-hidden="true" />
}

export function LeafIcon({ className = 'h-5 w-5' }: IconProps) {
  return <Sprout className={className} strokeWidth={1.8} aria-hidden="true" />
}

export function HandsIcon({ className = 'h-5 w-5' }: IconProps) {
  return <Hand className={className} strokeWidth={1.8} aria-hidden="true" />
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return <ArrowRight className={className} strokeWidth={1.8} aria-hidden="true" />
}

export function ClockIcon({ className = 'h-5 w-5' }: IconProps) {
  return <Clock3 className={className} strokeWidth={1.8} aria-hidden="true" />
}

export function QualityIcon({ className = 'h-5 w-5' }: IconProps) {
  return <BadgeCheck className={className} strokeWidth={1.8} aria-hidden="true" />
}

export function RegionIcon({ className = 'h-5 w-5' }: IconProps) {
  return <MapPin className={className} strokeWidth={1.8} aria-hidden="true" />
}
