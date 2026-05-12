import { timingSafeEqual } from 'crypto'
import { NextResponse } from 'next/server'
import { getSupabaseConfig } from '../../../../lib/booking.mjs'
import { listCourseBookings } from '../../../../lib/supabase-bookings.mjs'

export const runtime = 'nodejs'

function matchesAdminPassword(input: string, expected: string) {
  const inputBuffer = Buffer.from(input)
  const expectedBuffer = Buffer.from(expected)

  if (inputBuffer.length !== expectedBuffer.length) return false

  return timingSafeEqual(inputBuffer, expectedBuffer)
}

export async function POST(request: Request) {
  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json(
      { ok: false, message: 'Die Anfrage konnte nicht gelesen werden.' },
      { status: 400 },
    )
  }

  const password = process.env.ADMIN_PASSWORD
  const payloadRecord = payload && typeof payload === 'object' ? payload as Record<string, unknown> : {}
  const providedPassword = typeof payloadRecord.password === 'string' ? payloadRecord.password : ''

  if (!password) {
    return NextResponse.json(
      { ok: false, message: 'Der Admin-Zugang ist noch nicht konfiguriert.' },
      { status: 503 },
    )
  }

  if (!matchesAdminPassword(providedPassword, password)) {
    return NextResponse.json(
      { ok: false, message: 'Das Admin-Passwort ist nicht korrekt.' },
      { status: 401 },
    )
  }

  const supabase = getSupabaseConfig()

  if (!supabase) {
    return NextResponse.json(
      { ok: false, message: 'Die Datenbankverbindung ist nicht konfiguriert.' },
      { status: 503 },
    )
  }

  try {
    const bookings = await listCourseBookings(supabase)
    return NextResponse.json({ ok: true, bookings })
  } catch (error) {
    console.error('Supabase booking list failed', error)
    return NextResponse.json(
      { ok: false, message: 'Die Buchungen konnten gerade nicht geladen werden.' },
      { status: 502 },
    )
  }
}
