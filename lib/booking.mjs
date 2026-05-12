export const COURSE_OPTIONS = [
  {
    slug: 'sauerteig-brot',
    title: 'Sauerteig Brot',
    description: 'Grundlagen, Teigruhe, Formen und Backen eines aromatischen Brots.',
  },
  {
    slug: 'ciabatta-franzbroetchen',
    title: 'Ciabatta & Franzbrötchen',
    description: 'Luftige Teige, Tourieren, Formen und Gebäck für zuhause.',
  },
  {
    slug: 'geflecht-und-suesses',
    title: 'Geflecht & Süßes',
    description: 'Geflochtene Brötchen, Füllungen und handwerkliche Details.',
  },
]

export const COURSE_TIME_SLOTS = ['10:00-14:00', '15:00-19:00']

const courseSlugs = new Set(COURSE_OPTIONS.map((course) => course.slug))
const timeSlots = new Set(COURSE_TIME_SLOTS)

function valueOf(input, key) {
  if (!input || typeof input !== 'object') return ''
  const value = input[key]
  if (typeof value === 'string') return value.trim()
  if (typeof value === 'number') return String(value)
  return ''
}

function booleanValue(input, key) {
  if (!input || typeof input !== 'object') return false
  const value = input[key]
  return value === true || value === 'true' || value === 'on' || value === '1'
}

function todayAtUtcMidnight(now = new Date()) {
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()))
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validateBookingRequest(input, now = new Date()) {
  const errors = {}
  const courseSlug = valueOf(input, 'courseSlug')
  const date = valueOf(input, 'date')
  const time = valueOf(input, 'time')
  const name = valueOf(input, 'name')
  const email = valueOf(input, 'email').toLowerCase()
  const phone = valueOf(input, 'phone')
  const message = valueOf(input, 'message')
  const website = valueOf(input, 'website')
  const participants = Number.parseInt(valueOf(input, 'participants'), 10)
  const privacy = booleanValue(input, 'privacy')

  if (website) {
    errors.website = 'Diese Anfrage wurde nicht verarbeitet.'
  }

  if (!courseSlugs.has(courseSlug)) {
    errors.courseSlug = 'Bitte wählen Sie einen gültigen Backkurs.'
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    errors.date = 'Bitte wählen Sie ein gültiges Datum.'
  } else {
    const bookingDate = new Date(`${date}T00:00:00.000Z`)
    if (Number.isNaN(bookingDate.getTime()) || bookingDate < todayAtUtcMidnight(now)) {
      errors.date = 'Bitte wählen Sie ein zukünftiges Datum.'
    }
  }

  if (!timeSlots.has(time)) {
    errors.time = 'Bitte wählen Sie eine gültige Uhrzeit.'
  }

  if (!Number.isInteger(participants) || participants < 1 || participants > 8) {
    errors.participants = 'Bitte wählen Sie 1 bis maximal 8 Personen.'
  }

  if (name.length < 2) {
    errors.name = 'Bitte geben Sie Ihren Namen ein.'
  }

  if (!isValidEmail(email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
  }

  if (phone && phone.length < 5) {
    errors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein.'
  }

  if (message.length > 600) {
    errors.message = 'Bitte kürzen Sie die Nachricht auf maximal 600 Zeichen.'
  }

  if (!privacy) {
    errors.privacy = 'Bitte stimmen Sie der Datenschutz-Verarbeitung Ihrer Daten zu.'
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors }
  }

  const selectedCourse = COURSE_OPTIONS.find((course) => course.slug === courseSlug)

  return {
    ok: true,
    data: {
      course_slug: courseSlug,
      course_title: selectedCourse.title,
      course_date: date,
      time_slot: time,
      participants,
      customer_name: name,
      email,
      phone,
      message,
      source: 'website',
    },
  }
}

export function getSupabaseConfig(env = process.env) {
  const rawUrl = env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL
  const key = env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_KEY

  if (!rawUrl || !key) return null

  return {
    url: rawUrl.replace(/\/+$/, ''),
    key,
  }
}
