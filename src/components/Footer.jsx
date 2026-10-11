import React from 'react';
import { MessageCircle, Compass, Instagram, Heart } from 'lucide-react';

// Imports de logos
import logoFloripa from '../assets/logo-floripa.png';
import logoGalinhas from '../assets/logo-galinhas.png';

export default function Footer({ sucursal }) {
  const currentYear = new Date().getFullYear();
  const { colores } = sucursal;

  const logos = {
    floripa: logoFloripa,
    galinhas: logoGalinhas,
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
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

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
              <span className="text-2xl font-black text-white tracking-tight">
                {sucursal.nombre.split(' ')[0]}
                <span className={colores.textPrimario}>{sucursal.nombre.split(' ')[1]}</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {descripcion}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={sucursal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${sucursal.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:${colores.bgSecundario} hover:text-white transition-colors`}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Nuestros Paseos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {toursFooter.map((tour) => (
                <li key={tour}>
                  <a href="#paseos" className={`hover:${colores.textPrimario} transition-colors`}>
                    {tour}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contacto Directo</h4>
            <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className={`w-8 h-8 rounded-lg ${colores.bgSecundario}/20 ${colores.textSecundario} flex items-center justify-center shrink-0`}>
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">WhatsApp Oficial</div>
                  <a
                    href={`https://wa.me/${sucursal.whatsapp}`}
                    className={`text-white font-bold hover:${colores.textSecundario} transition-colors`}
                  >
                    {whatsappFormateado}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className={`w-8 h-8 rounded-lg ${colores.bgPrimario}/20 ${colores.textPrimario} flex items-center justify-center shrink-0`}>
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Ubicación principal</div>
                  <div className="text-white font-medium text-xs">{ubicacion}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-900 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {sucursal.nombre}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Diseñado con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>para turistas en {destino}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}