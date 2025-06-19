# Bio-Bäckerei Website

Eine moderne, responsive Website für eine traditionelle Bio-Bäckerei, erstellt mit Next.js und Tailwind CSS.

## 🎯 Features

- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Moderne, rustikale Gestaltung mit warmen Farben
- ✅ Navigationsmenü mit 4 Hauptseiten
- ✅ Hero-Sektion mit Call-to-Action
- ✅ Produktübersicht mit 3 Kategorien
- ✅ USP-Bereiche (Bio-Zutaten, Regional, Authentisch)
- ✅ Kontaktformular mit Validierung
- ✅ Barrierefreie Gestaltung (Alt-Texte, gute Kontraste)
- ✅ SEO-optimiert

## 🎨 Design

### Farbschema
- **Hintergrund:** Creme (#FAF7F0)
- **Text:** Dunkelbraun (#4B3B2A)
- **Akzent:** Warmes Gelb (#FBE8A6)
- **Gold:** Warmes Gold (#D4AF37)

### Typografie
- **Überschriften:** Merriweather (Serif)
- **Fließtext:** Inter (Sans-Serif)

### Bildsprache
- Warme, sepia-getönte Farben
- Rustikale Atmosphäre
- Handwerk und Tradition im Fokus

## 🚀 Installation & Start

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm oder yarn

### Installation

1. Dependencies installieren:
\`\`\`bash
npm install
\`\`\`

2. Entwicklungsserver starten:
\`\`\`bash
npm run dev
\`\`\`

3. Website öffnen: [http://localhost:3000](http://localhost:3000)

### Produktions-Build

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Projektstruktur

\`\`\`
├── app/
│   ├── globals.css          # Globale Styles
│   ├── layout.tsx          # Root Layout
│   ├── page.tsx            # Startseite
│   ├── produkte/
│   │   └── page.tsx        # Produktseite
│   ├── ueber-uns/
│   │   └── page.tsx        # Über uns Seite
│   └── kontakt/
│       └── page.tsx        # Kontaktseite
├── components/
│   ├── Header.tsx          # Navigation
│   └── Footer.tsx          # Footer
├── public/                 # Statische Dateien
├── tailwind.config.js      # Tailwind Konfiguration
└── next.config.js          # Next.js Konfiguration
\`\`\`

## 🔧 Konfiguration

### Tailwind CSS
Die Tailwind-Konfiguration ist in `tailwind.config.js` definiert und enthält:
- Benutzerdefinierte Farben für das Bäckerei-Theme
- Schriftarten (Merriweather, Inter)
- Responsive Breakpoints

### Next.js
- App Router (Next.js 14)
- TypeScript Support
- Optimierte Bilder und Performance

## 📱 Responsive Design

Die Website ist vollständig responsive und optimiert für:
- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+

## ♿ Barrierefreiheit

- Semantische HTML-Struktur
- Alt-Texte für alle Bilder
- Gute Farbkontraste (WCAG konform)
- Keyboard-Navigation möglich
- Screen-Reader freundlich

## 🛠 Technologien

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Sprache:** TypeScript
- **Fonts:** Google Fonts (Merriweather, Inter)
- **Icons:** Heroicons (embedded SVG)

## 📄 Seiten

1. **Startseite (/)** - Hero, Produktvorschau, USPs
2. **Produkte (/produkte)** - Vollständige Produktübersicht
3. **Über uns (/ueber-uns)** - Geschichte und Team
4. **Kontakt (/kontakt)** - Kontaktformular und Informationen

## 🔄 Weitere Entwicklung

### Mögliche Erweiterungen:
- CMS-Integration für Produktpflege
- Online-Bestellsystem
- Blog/News-Bereich
- Mehrsprachigkeit
- E-Commerce-Funktionen
- Google Maps Integration
- Newsletter-Anmeldung

### Bilder ersetzen:
Die Platzhalter-Bilder (`/api/placeholder/...`) sollten durch echte Bilder ersetzt werden:
- Hero-Bild: Bäcker mit Brot
- Produktbilder: Professionelle Fotos der Backwaren
- Team-Fotos: Porträts der Mitarbeiter
- Bäckerei-Fotos: Innen- und Außenaufnahmen

## 📝 Lizenz

Dieses Projekt wurde für Demonstrationszwecke erstellt.

## 📞 Support

Bei Fragen zur Implementierung oder Anpassungen können Sie sich gerne melden. 