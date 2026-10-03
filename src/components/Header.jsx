import React, { useState } from 'react';
import { MessageCircle, Menu, X, Compass, Calendar, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/5548991462022?text=" + encodeURIComponent("¡Hola Toni Turismo! Quiero consultar por las excursiones en Florianópolis.");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-tr from-sky-500 to-teal-400 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-sky-200 transform group-hover:scale-105 transition-transform">
              TT
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-gray-900 leading-none">
                Toni<span className="text-sky-600">Turismo</span>
              </div>
              <div className="text-xs text-emerald-600 font-semibold tracking-wider uppercase mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Florianópolis 🇧🇷
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#paseos" className="hover:text-sky-600 transition-colors flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-sky-500" />
              Nuestros Paseos
            </a>
            <a href="#por-que-nosotros" className="hover:text-sky-600 transition-colors">
              ¿Por qué elegirnos?
            </a>
            <a href="#opiniones" className="hover:text-sky-600 transition-colors">
              Opiniones
            </a>
            <a href="#galeria" className="hover:text-sky-600 transition-colors">
              Galería
            </a>
            <a href="#reserva" className="hover:text-sky-600 transition-colors flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-teal-500" />
              Reservar
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-full shadow-md shadow-emerald-200 hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 animate-fade-in">
          <a
            href="#paseos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600"
          >
            Nuestros Paseos
          </a>
          <a
            href="#por-que-nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600"
          >
            ¿Por qué elegirnos?
          </a>
          <a
            href="#opiniones"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600"
          >
            Opiniones de Viajeros
          </a>
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-gray-700 font-medium hover:bg-sky-50 hover:text-sky-600"
          >
            Galería
          </a>
          <a
            href="#reserva"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 rounded-lg text-sky-700 font-semibold bg-sky-50"
          >
            Consultar Disponibilidad
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 flex items-center justify-center gap-2 px-5 py-3 bg-emerald-500 text-white font-bold rounded-xl shadow-md text-sm"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            Contactar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}