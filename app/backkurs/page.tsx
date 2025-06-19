'use client'

import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Backkurs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    kurs: '',
    nachricht: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Vielen Dank für Ihre Anmeldung! Wir melden uns bald bei Ihnen mit allen Details.')
    setFormData({ name: '', email: '', telefon: '', kurs: '', nachricht: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const kurse = [
    {
      titel: 'Monatlicher Backkurs',
      datum: 'Jeden ersten Samstag im Monat',
      zeit: '13:00 - 17:00 Uhr',
      preis: '95 €',
      preisErmaessigt: '80 €',
      beschreibung: 'Lernen Sie im Stil "Learning by doing", wie tolle Gebäcke wie Ciabatta, Franzbrötchen oder geflochtene Brötchen hergestellt werden - und wie Sie alles ganz einfach zu Hause nachmachen können!',
      inbegriffen: [
        'Alle Zutaten für Ciabatta, Franzbrötchen & geflochtene Brötchen', 
        'Rezepte angepasst für die Heimküche', 
        'Getränke inklusive', 
        'Baumwolltasche mit allen hergestellten Produkten zum Mitnehmen',
        'Pause mit Verkostung'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brown sm:text-5xl mb-4">
            Backkurs – Bio Bäckerei Bucco
          </h1>
          <p className="text-xl text-brown max-w-4xl mx-auto mb-6">
            Sie wollen lernen, wie tolle Gebäcke wie Ciabatta, Franzbrötchen oder geflochtene Brötchen hergestellt werden? 
            Dann haben wir was für Sie!
          </p>
          <p className="text-lg text-brown max-w-3xl mx-auto">
            Ab sofort, an jedem ersten Samstag im Monat, geben wir einen Backkurs im Stil "Learning by doing" - 
            lernen Sie nicht nur die Herstellung, sondern auch, wie Sie alles ganz einfach zu Hause nachmachen können!
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div 
            className="w-full h-64 md:h-80 bg-cover bg-center rounded-lg shadow-lg hero-image"
            style={{
              backgroundImage: "url('/Backkurs.png')",
            }}
            role="img"
            aria-label="Backkurs bei Bio Bäckerei Bucco - Ciabatta, Franzbrötchen und geflochtene Brötchen"
          />
        </div>

        {/* Kurse Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif font-bold text-brown text-center mb-12">
            Unser Backkurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kurse.map((kurs, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-brown mb-2">
                    {kurs.titel}
                  </h3>
                                     <div className="text-brown/80 text-sm mb-4 space-y-1">
                     <p><strong>Datum:</strong> {kurs.datum}</p>
                     <p><strong>Zeit:</strong> {kurs.zeit}</p>
                     <div>
                       <p><strong>Preis:</strong> <span className="text-lg font-bold text-brown">{kurs.preis}</span> pro Person</p>
                       {kurs.preisErmaessigt && (
                         <p className="text-sm"><strong>Ermäßigt:</strong> <span className="font-bold text-brown">{kurs.preisErmaessigt}</span> (Azubis/Schüler/Studenten mit Ausweis)</p>
                       )}
                     </div>
                   </div>
                  <p className="text-brown/80 text-sm mb-4">
                    {kurs.beschreibung}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-brown mb-2">Im Preis inbegriffen:</h4>
                    <ul className="text-brown/80 text-sm space-y-1">
                      {kurs.inbegriffen.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-4 h-4 text-brown mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anmeldung */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Anmeldeformular */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-serif font-bold text-brown mb-6">
              Jetzt anmelden
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
                <label htmlFor="kurs" className="block text-sm font-medium text-brown mb-2">
                  Gewünschter Kurs *
                </label>
                <select
                  id="kurs"
                  name="kurs"
                  required
                  value={formData.kurs}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-brown/20 focus:border-brown transition-colors duration-200"
                >
                  <option value="">Bitte wählen Sie einen Kurs</option>
                  {kurse.map((kurs, index) => (
                    <option key={index} value={kurs.titel}>
                      {kurs.titel} - {kurs.datum}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="nachricht" className="block text-sm font-medium text-brown mb-2">
                  Nachricht
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={4}
                  value={formData.nachricht}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brown/20 rounded-lg focus:ring-2 focus:ring-brown/20 focus:border-brown transition-colors duration-200 resize-vertical"
                  placeholder="Haben Sie spezielle Wünsche oder Fragen?"
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary text-center"
              >
                Verbindlich anmelden
              </button>
            </form>
          </div>

          {/* Informationen */}
          <div className="space-y-8">
            {/* Allgemeine Infos */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-serif font-bold text-brown mb-6">
                Kurs-Informationen
              </h2>
              <div className="space-y-4 text-brown">
                <div>
                  <h3 className="font-semibold mb-2">Wo finden die Kurse statt?</h3>
                  <p className="text-brown/80 text-sm">
                    Ravenstr. 1, 13347 Berlin<br />
                    In unserer Bio-Bäckerei Bucco
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Wann?</h3>
                  <p className="text-brown/80 text-sm">
                    Jeden ersten Samstag im Monat<br />
                    Start: 13:00 Uhr
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Dauer</h3>
                  <p className="text-brown/80 text-sm">
                    Ca. 4 Stunden inklusive Pause
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Kosten</h3>
                  <p className="text-brown/80 text-sm">
                    95 € pro Person<br />
                    80 € für Azubis/Schüler/Studenten (mit gültigem Ausweis)<br />
                    <strong>Vorkasse erbeten</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Direkter Kontakt */}
            <div className="bg-brown text-cream rounded-lg p-8">
              <h3 className="text-xl font-serif font-bold mb-4">
                Anmeldung & Kontakt
              </h3>
              <p className="text-cream/90 mb-4">
                Sie können sich auf verschiedene Weise anmelden:
              </p>
              <div className="space-y-2">
                <p className="font-medium">Im Laden vorbeikommen</p>
                <p className="font-medium">Telefon: 030 4617 370</p>
                <p className="font-medium">E-Mail: biobaeckereibucco@gmail.com</p>
                <p className="font-medium">Instagram: @biobaeckereibucco</p>
                <hr className="border-cream/30 my-4" />
                <p className="text-sm text-cream/80">
                  Adresse: Ravenstr. 1, 13347 Berlin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 