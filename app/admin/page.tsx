import AdminBookings from '../../components/AdminBookings'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata = {
  title: 'Admin - Bio-Bäckerei Bucco',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return (
    <div className="page-shell">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-14 md:px-8 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <p className="section-label">Admin</p>
          <h1 className="mt-4 font-serif text-4xl font-black leading-tight text-charcoal md:text-6xl">
            Buchungsanfragen aus der Datenbank.
          </h1>
          <p className="mt-5 text-base leading-8 text-muted">
            Geschützte Übersicht aller gespeicherten Backkurs-Anfragen inklusive Kontakt, Termin,
            Status, Nachricht und technischer ID.
          </p>
        </div>

        <AdminBookings />
      </main>

      <Footer />
    </div>
  )
}
