import { NextResponse } from 'next/server'
import { getSupabaseConfig, validateBookingRequest } from '../../../lib/booking.mjs'
import { insertCourseBooking } from '../../../lib/supabase-bookings.mjs'

export const runtime = 'nodejs'

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

  const validation = validateBookingRequest(payload)

  if (!validation.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Bitte prüfen Sie die markierten Felder.',
        errors: validation.errors,
      },
      { status: 400 },
    )
  }

  const supabase = getSupabaseConfig()

  if (!supabase) {
    return NextResponse.json(
      {
        ok: false,
        message:
          'Die Online-Buchung ist gerade noch nicht verbunden. Bitte rufen Sie uns an oder schreiben Sie uns eine E-Mail.',
      },
      { status: 503 },
    )
  }

  let booking

  try {
    booking = await insertCourseBooking(supabase, validation.data)
  } catch (error) {
    console.error('Supabase booking insert failed', error)
    return NextResponse.json(
      {
        ok: false,
        message:
          'Die Buchung konnte gerade nicht gespeichert werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.',
      },
      { status: 502 },
    )
  }

  return NextResponse.json(
    {
      ok: true,
      message: 'Vielen Dank. Ihre Buchungsanfrage wurde gespeichert.',
      bookingId: booking?.id ?? null,
    },
    { status: 201 },
  )
}
