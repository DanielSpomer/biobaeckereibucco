'use client'

import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    nachricht: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hier würde normalerweise die Formular-Übermittlung stattfinden
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.')
    setFormData({ name: '', email: '', telefon: '', nachricht: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brown sm:text-5xl mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-brown max-w-3xl mx-auto">
            Haben Sie Fragen zu unseren Backwaren oder möchten Sie eine Bestellung aufgeben? 
            Wir freuen uns auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kontaktformular */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-serif font-bold text-brown mb-6">
              Schreiben Sie uns
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brown mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-brown/20 focus:border-brown transition-colors duration-200"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brown mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-brown/20 focus:border-brown transition-colors duration-200"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>
              
              <div>
                <label htmlFor="telefon" className="block text-sm font-medium text-brown mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-brown/20 focus:border-brown transition-colors duration-200"
                  placeholder="+49 (0) 123 456 789"
                />
              </div>
              
              <div>
                <label htmlFor="nachricht" className="block text-sm font-medium text-brown mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  required
                  rows={6}
                  value={formData.nachricht}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-brown/20 focus:border-brown transition-colors duration-200 resize-vertical"
                  placeholder="Ihre Nachricht an uns..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary text-center"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          {/* Kontaktinformationen */}
          <div className="space-y-8">
            {/* Adresse */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brown mb-6">
                Unsere Bäckerei
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brown mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brown">Adresse</h3>
                    <p className="text-brown/80">
                      Ravenstraße 1<br />
                      13347 Berlin
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brown mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brown">Telefon</h3>
                    <p className="text-brown/80">030 4617370</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-brown mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brown">E-Mail</h3>
                    <p className="text-brown/80">biobaeckereibucco@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Öffnungszeiten */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brown mb-6">
                Öffnungszeiten
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-brown font-medium">Dienstag</span>
                  <span className="text-brown/80">08:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brown font-medium">Mittwoch</span>
                  <span className="text-brown/80">08:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brown font-medium">Donnerstag</span>
                  <span className="text-brown/80">08:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brown font-medium">Freitag</span>
                  <span className="text-brown/80">08:00 - 18:00 Uhr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brown font-medium">Samstag</span>
                  <span className="text-brown/80">08:00 - 12:00 Uhr</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brown font-medium">Sonntag</span>
                  <span className="text-brown/80">Geschlossen</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brown font-medium">Montag</span>
                  <span className="text-brown/80">08:00 - 18:00 Uhr</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/30 rounded-lg">
                <p className="text-sm text-brown">
                  <strong>Hinweis:</strong> An Feiertagen können abweichende Öffnungszeiten gelten. 
                  Bitte rufen Sie uns an oder besuchen Sie unsere Website für aktuelle Informationen.
                </p>
              </div>
            </div>

            {/* Anfahrt */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brown mb-6">
                Anfahrt
              </h2>
              <div className="space-y-4">
                <p className="text-brown/80">
                  Unsere Bäckerei befindet sich im Herzen von Musterstadt, nur 2 Minuten 
                  vom Marktplatz entfernt.
                </p>
                <div className="space-y-2">
                  <p className="text-brown font-medium">Parkmöglichkeiten:</p>
                  <ul className="text-brown/80 text-sm space-y-1">
                    <li>• Kostenlose Parkplätze direkt vor der Bäckerei</li>
                    <li>• Marktplatz-Parkhaus (5 Min. Fußweg)</li>
                    <li>• Bushaltestelle "Bäckerstraße" (Linie 12, 34)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 