export async function insertCourseBooking(supabase, booking, fetchImpl = fetch) {
  const response = await fetchImpl(`${supabase.url}/rest/v1/course_bookings`, {
    method: 'POST',
    headers: {
      apikey: supabase.key,
      Authorization: `Bearer ${supabase.key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
    },
    body: JSON.stringify(booking),
  })

  if (!response.ok) {
    const detail = await response.text()
    const error = new Error('Supabase booking insert failed')
    error.status = response.status
    error.detail = detail
    throw error
  }

  const rows = await response.json()
  return Array.isArray(rows) ? rows[0] ?? null : null
}
