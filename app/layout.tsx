import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bio-Bäckerei - Echte Handarbeit. Echter Geschmack.',
  description: 'Traditionelle Bio-Bäckerei mit drei Generationen Erfahrung. Natürliche Zutaten, handwerkliche Tradition und regionaler Bezug.',
  keywords: 'Bio-Bäckerei, Handwerk, natürliche Zutaten, regional, Brot, Backwaren',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-cream text-brown min-h-screen">
        {children}
      </body>
    </html>
  )
} 