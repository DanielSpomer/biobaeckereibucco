'use client'

import { FormEvent, useState } from 'react'

type Booking = {
  id: string
  course_slug: string
  course_title: string
  course_date: string
  time_slot: string
  participants: number
  customer_name: string
  email: string
  phone: string | null
  message: string | null
  source: string
  status: string
  created_at: string
}

type AdminState =
  | { status: 'idle'; message: ''; bookings: Booking[] }
  | { status: 'loading'; message: 'Buchungen werden geladen ...'; bookings: Booking[] }
  | { status: 'success'; message: string; bookings: Booking[] }
  | { status: 'error'; message: string; bookings: Booking[] }

function formatDate(value: string) {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(`${value}T00:00:00`))
}

function formatDateTime(value: string) {
  return new Intl.DateTimeFormat('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}

export default function AdminBookings() {
  const [state, setState] = useState<AdminState>({ status: 'idle', message: '', bookings: [] })
  const [password, setPassword] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState({ status: 'loading', message: 'Buchungen werden geladen ...', bookings: state.bookings })

    try {
      const response = await fetch('/api/admin/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const result = await response.json()

      if (!response.ok) {
        setState({
          status: 'error',
          message: result.message ?? 'Die Buchungen konnten nicht geladen werden.',
          bookings: [],
        })
        return
      }

      setState({
        status: 'success',
        message: `${result.bookings.length} Buchungsanfragen geladen.`,
        bookings: result.bookings,
      })
    } catch {
      setState({
        status: 'error',
        message: 'Die Verbindung ist gerade unterbrochen. Bitte versuchen Sie es erneut.',
        bookings: [],
      })
    }
  }

  return (
    <div className="space-y-8">
      <form onSubmit={onSubmit} className="grid gap-4 rounded-[34px] border border-line bg-surface p-5 shadow-soft md:grid-cols-[1fr_auto] md:items-end md:p-6">
        <div>
          <label htmlFor="admin-password" className="text-sm font-extrabold text-charcoal">
            Admin-Passwort
          </label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 h-12 w-full rounded-full border border-line bg-white px-4 text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className="btn-primary h-12" disabled={state.status === 'loading'}>
          {state.status === 'loading' ? 'Lädt ...' : 'Einträge laden'}
        </button>
        {state.message ? (
          <p
            className={
              state.status === 'error'
                ? 'rounded-[20px] bg-red-50 p-3 text-sm font-bold text-red-800 md:col-span-2'
                : 'rounded-[20px] bg-green-50 p-3 text-sm font-bold text-green-800 md:col-span-2'
            }
            role={state.status === 'error' ? 'alert' : undefined}
          >
            {state.message}
          </p>
        ) : null}
      </form>

      <div className="overflow-hidden rounded-[34px] border border-line bg-surface shadow-soft">
        <div className="border-b border-line px-5 py-4 md:px-6">
          <p className="section-label">Datenbank</p>
          <h2 className="mt-2 font-serif text-2xl font-black text-charcoal">Kursbuchungen</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-[1180px] w-full border-collapse text-left text-sm">
            <thead className="bg-background text-xs font-extrabold uppercase text-primary">
              <tr>
                <th className="px-4 py-3">Eingang</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Kurs</th>
                <th className="px-4 py-3">Termin</th>
                <th className="px-4 py-3">Personen</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">E-Mail</th>
                <th className="px-4 py-3">Telefon</th>
                <th className="px-4 py-3">Nachricht</th>
                <th className="px-4 py-3">Quelle</th>
                <th className="px-4 py-3">ID</th>
              </tr>
            </thead>
            <tbody>
              {state.bookings.length > 0 ? (
                state.bookings.map((booking) => (
                  <tr key={booking.id} className="border-t border-line align-top">
                    <td className="px-4 py-4 text-muted">{formatDateTime(booking.created_at)}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-yellow px-3 py-1 text-xs font-extrabold text-charcoal">
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-bold text-charcoal">{booking.course_title}</p>
                      <p className="mt-1 text-xs text-muted">{booking.course_slug}</p>
                    </td>
                    <td className="px-4 py-4 text-muted">
                      {formatDate(booking.course_date)}
                      <br />
                      {booking.time_slot.replace('-', ' - ')} Uhr
                    </td>
                    <td className="px-4 py-4 text-muted">{booking.participants}</td>
                    <td className="px-4 py-4 font-bold text-charcoal">{booking.customer_name}</td>
                    <td className="px-4 py-4 text-muted">{booking.email}</td>
                    <td className="px-4 py-4 text-muted">{booking.phone || '-'}</td>
                    <td className="max-w-[260px] px-4 py-4 text-muted">{booking.message || '-'}</td>
                    <td className="px-4 py-4 text-muted">{booking.source}</td>
                    <td className="max-w-[190px] break-all px-4 py-4 font-mono text-xs text-muted">{booking.id}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-8 text-center text-muted" colSpan={11}>
                    Noch keine Einträge geladen.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
