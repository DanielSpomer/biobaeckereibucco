import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bio-Bäckerei Bucco - Bio. Echt. Handgemacht.',
  description: 'Bio-Bäckerei Bucco in Berlin-Wedding: handwerkliche Backwaren, Bio-Zutaten, Backkurse und echte Qualität aus der Ravenéstraße.',
  keywords: 'Bio-Bäckerei Bucco, Berlin Wedding, Bio Brot, Backkurs, Handwerk, Backwaren',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen bg-background text-charcoal">
        {children}
      </body>
    </html>
  )
}
