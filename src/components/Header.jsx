import React, { useState } from 'react';
import { MessageCircle, Menu, X, Compass, Calendar, ArrowLeft, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

// Imports de logos
import logoFloripa from '../assets/logo-floripa.jpg';
import logoGalinhas from '../assets/logo-galinhas.jpg';

export default function Header({ sucursal, onOpenWhatsApp }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { colores } = sucursal;

  const logos = {
    floripa: logoFloripa,
    galinhas: logoGalinhas,
  };

  const tiktoks = {
    floripa: 'https://www.tiktok.com/@experiencia.floripa',
    galinhas: 'https://www.tiktok.com/@experiencia.floripa',
  };

  const whatsappUrl = `https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(
    `¡Hola ${sucursal.nombre}! Quiero consultar por las excursiones en ${sucursal.id === 'floripa' ? 'Florianópolis' : 'Porto de Galinhas'}.`
  )}`;

  const destino = sucursal.id === 'floripa' ? 'Florianópolis 🇧🇷' : 'Porto de Galinhas 🇧🇷';

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo + Volver */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className={`hidden sm:flex items-center justify-center w-9 h-9 rounded-full ${colores.bgSuave} ${colores.textPrimario} hover:scale-110 transition-transform`}
              title="Cambiar destino"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <a href="#" className="flex items-center gap-3 group">
              <div className={`w-12 h-12 bg-gradient-to-tr ${colores.gradienteHero} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-md transform group-hover:scale-105 transition-transform overflow-hidden`}>
                <img
                  src={logos[sucursal.id]}
                  alt={sucursal.nombre}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerText = sucursal.id === 'floripa' ? 'EF' : 'EG';
                  }}
                />
              </div>
              <div>
                <div className="text-xl font-black tracking-tight text-gray-900 leading-none">
                  {sucursal.nombre.split(' ')[0]}
                  <span className={colores.textPrimario}>{sucursal.nombre.split(' ')[1]}</span>
                </div>
                <div className={`text-xs ${colores.textSecundario} font-semibold tracking-wider uppercase mt-1 flex items-center gap-1`}>
                  <span className={`w-2 h-2 rounded-full ${colores.bgSecundario} animate-pulse`}></span>
                  {destino}
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#paseos" className={`hover:${colores.textPrimario} transition-colors flex items-center gap-1.5`}>
              <Compass className={`w-4 h-4 ${colores.textPrimario}`} />
              Nuestros Paseos
            </a>
            <a href="#por-que-nosotros" className={`hover:${colores.textPrimario} transition-colors`}>
              ¿Por qué elegirnos?
            </a>
            <a href="#opiniones" className={`hover:${colores.textPrimario} transition-colors`}>
              Opiniones
            </a>
            <a href="#reserva" className={`hover:${colores.textPrimario} transition-colors flex items-center gap-1.5`}>
              <Calendar className={`w-4 h-4 ${colores.textSecundario}`} />
              Reservar
            </a>
          </nav>

          {/* CTA Buttons - TikTok (icono) + Instagram (icono) + WhatsApp (con texto) */}
          <div className="hidden md:flex items-center gap-2">

            {/* TikTok - solo icono */}
            <a
              href={tiktoks[sucursal.id]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-black hover:bg-gray-900 text-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              aria-label="TikTok"
              title="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>

            {/* Instagram - solo icono */}
            <a
              href={sucursal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            {/* WhatsApp - con texto (protagonista) */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className={`inline-flex items-center gap-2 px-5 py-2.5 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white font-bold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all text-sm`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
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
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg ${colores.bgSuave} ${colores.textPrimario} font-semibold`}
          >
            <ArrowLeft className="w-4 h-4" />
            Cambiar destino
          </Link>

          <a
            href="#paseos"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-gray-700 font-medium hover:${colores.bgSuave} hover:${colores.textPrimario}`}
          >
            Nuestros Paseos
          </a>
          <a
            href="#por-que-nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-gray-700 font-medium hover:${colores.bgSuave} hover:${colores.textPrimario}`}
          >
            ¿Por qué elegirnos?
          </a>
          <a
            href="#opiniones"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg text-gray-700 font-medium hover:${colores.bgSuave} hover:${colores.textPrimario}`}
          >
            Opiniones de Viajeros
          </a>
          <a
            href="#reserva"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-lg ${colores.textPrimarioOscuro} font-semibold ${colores.bgSuave}`}
          >
            Consultar Disponibilidad
          </a>

          {/* Redes sociales mobile: TikTok + Instagram (iconos chicos) + WhatsApp (grande) */}
          <div className="flex gap-2 pt-2">
            <a
              href={tiktoks[sucursal.id]}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-xl shadow-md shrink-0"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href={sucursal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-xl shadow-md shrink-0"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 ${colores.bgSecundario} text-white font-bold rounded-xl shadow-md text-sm`}
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}