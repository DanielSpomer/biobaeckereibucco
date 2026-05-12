import assert from 'node:assert/strict'
import test from 'node:test'

import {
  COURSE_OPTIONS,
  COURSE_TIME_SLOTS,
  getSupabaseConfig,
  validateBookingRequest,
} from '../lib/booking.mjs'
import { insertCourseBooking } from '../lib/supabase-bookings.mjs'

const validPayload = {
  courseSlug: 'sauerteig-brot',
  date: '2099-05-24',
  time: '10:00-14:00',
  participants: '2',
  name: 'Daniel Beispiel',
  email: 'daniel@example.com',
  phone: '030 123456',
  message: 'Ich freue mich auf den Kurs.',
  privacy: true,
  website: '',
}

test('booking content exposes real course options and time slots', () => {
  assert.deepEqual(
    COURSE_OPTIONS.map((course) => course.slug),
    ['sauerteig-brot', 'ciabatta-franzbroetchen', 'geflecht-und-suesses'],
  )
  assert.deepEqual(COURSE_TIME_SLOTS, ['10:00-14:00', '15:00-19:00'])
})

test('validateBookingRequest normalizes valid booking data', () => {
  const result = validateBookingRequest(validPayload, new Date('2026-05-10T10:00:00.000Z'))

  assert.equal(result.ok, true)
  assert.equal(result.data.course_slug, 'sauerteig-brot')
  assert.equal(result.data.participants, 2)
  assert.equal(result.data.email, 'daniel@example.com')
  assert.equal(result.data.message, 'Ich freue mich auf den Kurs.')
})

test('validateBookingRequest rejects invalid and bot-like submissions', () => {
  const invalid = validateBookingRequest(
    {
      ...validPayload,
      email: 'keine-mail',
      participants: '9',
      privacy: false,
      website: 'spam-link',
    },
    new Date('2026-05-10T10:00:00.000Z'),
  )

  assert.equal(invalid.ok, false)
  assert.match(invalid.errors.email, /gültige E-Mail/)
  assert.match(invalid.errors.participants, /maximal 8/)
  assert.match(invalid.errors.privacy, /Datenschutz/)
  assert.match(invalid.errors.website, /nicht verarbeitet/)
})

test('getSupabaseConfig requires server-side Supabase credentials', () => {
  assert.equal(getSupabaseConfig({}), null)
  assert.deepEqual(getSupabaseConfig({
    SUPABASE_URL: 'https://example.supabase.co',
    SUPABASE_SERVICE_ROLE_KEY: 'secret',
  }), {
    url: 'https://example.supabase.co',
    key: 'secret',
  })
})

test('insertCourseBooking sends a Supabase-compatible insert and returns booking id', async () => {
  const booking = validateBookingRequest(validPayload, new Date('2026-05-10T10:00:00.000Z')).data
  let request

  const result = await insertCourseBooking(
    { url: 'https://example.supabase.co', key: 'service-role' },
    booking,
    async (url, init) => {
      request = { url, init }
      return {
        ok: true,
        json: async () => [{ id: 'booking_123' }],
      }
    },
  )

  assert.equal(result.id, 'booking_123')
  assert.equal(request.url, 'https://example.supabase.co/rest/v1/course_bookings')
  assert.equal(request.init.method, 'POST')
  assert.equal(request.init.headers.Authorization, 'Bearer service-role')
  assert.equal(JSON.parse(request.init.body).customer_name, 'Daniel Beispiel')
})

test('insertCourseBooking surfaces Supabase insert failures', async () => {
  await assert.rejects(
    insertCourseBooking(
      { url: 'https://example.supabase.co', key: 'service-role' },
      {},
      async () => ({
        ok: false,
        status: 401,
        text: async () => 'Unauthorized',
      }),
    ),
    /Supabase booking insert failed/,
  )
})
