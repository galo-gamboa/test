import React from 'react';
import { MessageCircle, Compass, Instagram, Heart } from 'lucide-react';

// Imports de logos
import logoFloripa from '../assets/logo-floripa.jpg';
import logoGalinhas from '../assets/logo-galinhas.jpg';

export default function Footer({ sucursal }) {
  const currentYear = new Date().getFullYear();
  const { colores } = sucursal;

  const logos = {
    floripa: logoFloripa,
    galinhas: logoGalinhas,
  };

  const tiktoks = {
    floripa: 'https://www.tiktok.com/@experiencia.floripa',
    galinhas: 'https://www.tiktok.com/@experiencia.floripa',
  };

  const destino = sucursal.id === 'floripa' ? 'Florianópolis' : 'Porto de Galinhas';
  const ubicacion = sucursal.id === 'floripa'
    ? 'Florianópolis, Santa Catarina, Brasil'
    : 'Porto de Galinhas, Pernambuco, Brasil';

  const descripcion = sucursal.id === 'floripa'
    ? 'Excursiones seleccionadas en Florianópolis: Catamarán, Isla de Campeche, Barco Pirata y más. Atención personalizada 100% en español.'
    : 'Experiencias únicas en Porto de Galinhas: Maragogi, Playa de Carneiros, Snorkel y más. Atención personalizada 100% en español.';

  const toursFooter = sucursal.id === 'floripa'
    ? [
        'Paseo en Catamarán',
        'Paseo en Barco',
        'Isla de Campeche',
        'Isla de Francés Plus',
        'Barco Pirata',
      ]
    : [
        'Maragogi',
        'Playa de Carneiros',
        'Ilha de Santo Aleixo',
        'Paseo en Buggy',
        'Snorkel en Piscinas Naturales',
      ];

  const whatsappFormateado = sucursal.whatsapp.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, '+$1 $2 $3-$4');

  return (
    <footer className={`bg-white border-t-4 ${colores.borderPrimario}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-tr ${colores.gradienteHero} rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md overflow-hidden`}>
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
              <span className="text-2xl font-black text-gray-900 tracking-tight">
                {sucursal.nombre.split(' ')[0]}
                <span className={colores.textPrimario}>{sucursal.nombre.split(' ')[1]}</span>
              </span>
            </div>

            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              {descripcion}
            </p>

            {/* Redes sociales: TikTok + Instagram + WhatsApp */}
            <div className="flex items-center gap-3 pt-2">

              {/* TikTok */}
              <a
                href={tiktoks[sucursal.id]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:bg-black hover:text-white hover:border-black transition-colors shadow-sm"
                aria-label="TikTok"
                title="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={sucursal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-colors shadow-sm"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${sucursal.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-gray-700 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors shadow-sm"
                aria-label="WhatsApp"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Nuestros Paseos</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {toursFooter.map((tour) => (
                <li key={tour}>
                  <a href="#paseos" className={`hover:${colores.textPrimario} transition-colors`}>
                    {tour}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Contacto Directo</h4>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className={`w-8 h-8 rounded-lg ${colores.bgSuave} ${colores.textPrimarioOscuro} flex items-center justify-center shrink-0`}>
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">WhatsApp Oficial</div>
                  <a
                    href={`https://wa.me/${sucursal.whatsapp}`}
                    className={`text-gray-900 font-bold hover:${colores.textPrimario} transition-colors`}
                  >
                    {whatsappFormateado}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className={`w-8 h-8 rounded-lg ${colores.bgSuave} ${colores.textPrimarioOscuro} flex items-center justify-center shrink-0`}>
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Ubicación principal</div>
                  <div className="text-gray-900 font-medium text-xs">{ubicacion}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {sucursal.nombre}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-gray-600">
            <span>Diseñado con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>para turistas en {destino}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}