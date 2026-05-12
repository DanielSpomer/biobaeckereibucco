'use client'

import { FormEvent, useMemo, useState } from 'react'
import { COURSE_OPTIONS, COURSE_TIME_SLOTS } from '../lib/booking.mjs'
import { ArrowIcon } from './Icons'

type FieldErrors = Record<string, string>

type SubmitState =
  | { status: 'idle'; message: '' }
  | { status: 'loading'; message: 'Buchung wird gespeichert ...' }
  | { status: 'success'; message: string; bookingId?: string | null }
  | { status: 'error'; message: string }

function defaultDate() {
  const date = new Date()
  date.setDate(date.getDate() + 14)
  return date.toISOString().slice(0, 10)
}

export default function BookingForm() {
  const [state, setState] = useState<SubmitState>({ status: 'idle', message: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const initialDate = useMemo(() => defaultDate(), [])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)

    setState({ status: 'loading', message: 'Buchung wird gespeichert ...' })
    setErrors({})

    const payload = {
      courseSlug: data.get('courseSlug'),
      date: data.get('date'),
      time: data.get('time'),
      participants: data.get('participants'),
      name: data.get('name'),
      email: data.get('email'),
      phone: data.get('phone'),
      message: data.get('message'),
      privacy: data.get('privacy') === 'on',
      website: data.get('website'),
    }

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok) {
        setErrors(result.errors ?? {})
        setState({ status: 'error', message: result.message ?? 'Die Buchung konnte nicht gespeichert werden.' })
        return
      }

      form.reset()
      setState({
        status: 'success',
        message: result.message ?? 'Vielen Dank. Ihre Buchungsanfrage wurde gespeichert.',
        bookingId: result.bookingId ?? null,
      })
    } catch {
      setState({
        status: 'error',
        message: 'Die Verbindung ist gerade unterbrochen. Bitte versuchen Sie es erneut oder rufen Sie uns an.',
      })
    }
  }

  const isLoading = state.status === 'loading'

  return (
    <form onSubmit={onSubmit} className="rounded-[34px] border border-line bg-surface p-5 text-charcoal shadow-lift md:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="courseSlug" className="text-sm font-bold text-charcoal">
            Kurs
          </label>
          <select
            id="courseSlug"
            name="courseSlug"
            className="mt-2 h-12 w-full rounded-full border border-line bg-white px-4 text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            defaultValue={COURSE_OPTIONS[0].slug}
          >
            {COURSE_OPTIONS.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.title}
              </option>
            ))}
          </select>
          {errors.courseSlug ? <p className="mt-2 text-sm text-red-700">{errors.courseSlug}</p> : null}
        </div>

        <div>
          <label htmlFor="date" className="text-sm font-bold text-charcoal">
            Datum
          </label>
          <input
            id="date"
            name="date"
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            defaultValue={initialDate}
            className="mt-2 h-12 w-full rounded-full border border-line bg-white px-4 text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.date ? <p className="mt-2 text-sm text-red-700">{errors.date}</p> : null}
        </div>

        <div>
          <label htmlFor="time" className="text-sm font-bold text-charcoal">
            Uhrzeit
          </label>
          <select
            id="time"
            name="time"
            className="mt-2 h-12 w-full rounded-full border border-line bg-white px-4 text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            defaultValue={COURSE_TIME_SLOTS[0]}
          >
            {COURSE_TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>
                {slot.replace('-', ' - ')} Uhr
              </option>
            ))}
          </select>
          {errors.time ? <p className="mt-2 text-sm text-red-700">{errors.time}</p> : null}
        </div>

        <div>
          <label htmlFor="participants" className="text-sm font-bold text-charcoal">
            Personen
          </label>
          <select
            id="participants"
            name="participants"
            className="mt-2 h-12 w-full rounded-full border border-line bg-white px-4 text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            defaultValue="1"
          >
            {Array.from({ length: 8 }, (_, index) => String(index + 1)).map((count) => (
              <option key={count} value={count}>
                {count} {count === '1' ? 'Person' : 'Personen'}
              </option>
            ))}
          </select>
          {errors.participants ? <p className="mt-2 text-sm text-red-700">{errors.participants}</p> : null}
        </div>

        <div>
          <label htmlFor="name" className="text-sm font-bold text-charcoal">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            className="mt-2 h-12 w-full rounded-full border border-line bg-white px-4 text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.name ? <p className="mt-2 text-sm text-red-700">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-bold text-charcoal">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="text"
            inputMode="email"
            autoComplete="email"
            className="mt-2 h-12 w-full rounded-full border border-line bg-white px-4 text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.email ? <p className="mt-2 text-sm text-red-700">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-bold text-charcoal">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 h-12 w-full rounded-full border border-line bg-white px-4 text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.phone ? <p className="mt-2 text-sm text-red-700">{errors.phone}</p> : null}
        </div>

        <div className="hidden">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="text-sm font-bold text-charcoal">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="mt-2 w-full rounded-[24px] border border-line bg-white px-4 py-3 text-sm text-charcoal focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          {errors.message ? <p className="mt-2 text-sm text-red-700">{errors.message}</p> : null}
        </div>

        <div className="md:col-span-2">
          <label className="flex gap-3 text-sm leading-6 text-muted">
            <input name="privacy" type="checkbox" className="mt-1 h-4 w-4 rounded border-line text-primary" />
            <span>Ich bin einverstanden, dass meine Angaben zur Bearbeitung der Kursbuchung gespeichert werden.</span>
          </label>
          {errors.privacy ? <p className="mt-2 text-sm text-red-700">{errors.privacy}</p> : null}
        </div>
      </div>

      <button type="submit" disabled={isLoading} className="btn-yellow mt-5 w-full gap-2 disabled:cursor-not-allowed disabled:opacity-60">
        {isLoading ? 'Wird gespeichert ...' : 'Jetzt Backkurs buchen'}
        <ArrowIcon />
      </button>

      {state.message ? (
        <p
          role={state.status === 'error' ? 'alert' : undefined}
          aria-live="polite"
          className={state.status === 'success' ? 'mt-4 rounded-lg bg-green-50 p-3 text-sm font-semibold text-green-800' : 'mt-4 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-800'}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  )
}
