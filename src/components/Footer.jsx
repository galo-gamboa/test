import React from 'react';
import { MessageCircle, Compass, Instagram, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-sky-500 to-teal-400 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-md">
                TT
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Toni<span className="text-sky-400">Turismo</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Excursiones seleccionadas en Florianópolis: Catamarán Porto Madero, Ilha do Campeche, Buceo de Bautismo y más. Atención personalizada 100% en español.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/toni.turismo.floripa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5548991462022"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Nuestros Paseos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#paseos" className="hover:text-sky-400 transition-colors">Catamarán Porto Madero</a></li>
              <li><a href="#paseos" className="hover:text-sky-400 transition-colors">Isla de Campeche Desembarque</a></li>
              <li><a href="#paseos" className="hover:text-sky-400 transition-colors">Isla de Campeche Panorámico</a></li>
              <li><a href="#paseos" className="hover:text-sky-400 transition-colors">Balneário Camboriú + Unipraias</a></li>
              <li><a href="#paseos" className="hover:text-sky-400 transition-colors">Buceo de Bautismo</a></li>
              <li><a href="#paseos" className="hover:text-sky-400 transition-colors">Isla do Francês</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contacto Directo</h4>
            <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">WhatsApp Oficial</div>
                  <a href="https://wa.me/5548991462022" className="text-white font-bold hover:text-emerald-400 transition-colors">
                    +55 48 99146-2022
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Ubicación principal</div>
                  <div className="text-white font-medium text-xs">Florianópolis, Santa Catarina, Brasil</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-8 border-t border-gray-900 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Toni Turismo. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>Diseñado con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>para turistas en Florianópolis</span>
          </div>
        </div>

      </div>
    </footer>
  );
}