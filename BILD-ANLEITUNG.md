# Bild-Anleitung für Hero-Sektion

## Das bereitgestellte Bäckerei-Logo/Bild verwenden

Um das von Ihnen bereitgestellte Bild in der Hero-Sektion zu verwenden:

1. **Speichern Sie das Bild** als `hero-image.jpg` im `public/` Ordner
   - Das Bild sollte im Verzeichnis `public/hero-image.jpg` liegen
   - Unterstützte Formate: .jpg, .png, .webp

2. **Bildqualität optimieren** (empfohlen):
   - Empfohlene Auflösung: 1920x1080px oder höher
   - Dateigröße unter 500KB für bessere Ladezeiten
   - Das Bild wird automatisch responsive angepasst

3. **Alternative Bildpfade** (falls anderer Name gewünscht):
   - Ändern Sie in `app/page.tsx` die Zeile:
   ```javascript
   backgroundImage: `url('/hero-image.jpg')`,
   ```
   - zu Ihrem gewünschten Dateinamen

## Aktuelles Layout

Das neue Hero-Layout zeigt:
- **Links**: "Echte Handarbeit" auf hellem Hintergrund (cream/weiß)
- **Rechts**: "Echter Geschmack" über dem Bild in heller Schrift
- **Hintergrund**: Vollbild-Bäckerei-Bild mit leichtem Overlay

## Mobile Ansicht

Auf mobilen Geräten werden beide Textteile übereinander angezeigt, wobei die Lesbarkeit durch den transparenten Hintergrund gewährleistet ist. 