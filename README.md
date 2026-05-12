# Bio-Bäckerei Bucco

Premium-Website für die Bio-Bäckerei Bucco in Berlin-Wedding. Die Seite nutzt Next.js, Tailwind CSS, zentrale Content-Daten, eigene Markenassets und ein echtes Backkurs-Buchungsformular mit Supabase-Anbindung über eine serverseitige API-Route.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Noto Serif + Inter
- Supabase REST API über `app/api/bookings/route.ts`

## Start

```bash
npm install
npm run dev
```

Lokale URL: `http://localhost:3000`

## Prüfung

```bash
npm test
npm run lint
npm run build
```

## Supabase Booking

Die Kursbuchung speichert Anfragen in `public.course_bookings`. Das Schema liegt in:

```text
supabase/schema.sql
```

Benötigte Umgebungsvariablen:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Die Service-Role darf nur serverseitig in Vercel gesetzt werden. Der Browser erhält keine Supabase-Schreibrechte.

## Inhalte

- Produktdaten: `lib/content.ts`
- Booking-Validierung: `lib/booking.mjs`
- Business-Informationen: `lib/content.ts`
- Produktbilder: `public/images/products/`
- Markenbilder: `public/images/sections/`
- Logo-Varianten: `public/images/brand/`

## Bildsprache

Die Website nutzt helle, natürliche Food-Fotografie und menschenfreie Backstuben-/Ladenmotive. Keine KI-Schrift, keine Wasserzeichen, keine austauschbaren Stock-Fotos.
