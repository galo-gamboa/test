import React from 'react';
import { MessageCircle, ShieldCheck, Star, Sparkles, MapPin, Anchor } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/5548991462022?text=" + encodeURIComponent("¡Hola Toni Turismo! Quiero consultar por las excursiones en Florianópolis.");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-teal-50/30 to-white pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-sky-200/50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-200/40 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100/80 border border-emerald-200 text-emerald-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              Excursiones en Florianópolis 🇧🇷
              <span className="hidden sm:inline font-normal text-emerald-700">| Atención 100% en Español</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Descubrí las mejores <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                experiencias de Florianópolis
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Excursiones seleccionadas, atención en español y reservas rápidas directo por WhatsApp. Disfrutá de playas paradisíacas, passeios en catamarán y buceo con guía personalizado.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transform hover:-translate-y-0.5 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href="#paseos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-sky-800 border-2 border-sky-100 font-bold text-base rounded-2xl shadow-sm hover:border-sky-300 transition-all"
              >
                <span>Ver paseos</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-sky-100/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center text-amber-400 gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-800">100% Recomendado</span>
                <span className="text-[11px] text-gray-500">Por viajeros latinos</span>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center text-sky-600 gap-1 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold text-gray-800">Atención Directa</span>
                </div>
                <span className="text-[11px] text-gray-500">En tu idioma original</span>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center text-emerald-600 gap-1 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold text-gray-800">Check-in Rápido</span>
                </div>
                <span className="text-[11px] text-gray-500">Sin filas ni trámites</span>
              </div>
            </div>

          </div>

          {/* Right Visual Image Card Stack */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Featured Image */}
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="https://www.toniturismo.com/assets/hero-catamaran-ClRjo0ot.jpg"
                alt="Catamarán navegando en aguas turquesa de Florianópolis"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80";
                }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Floating Highlight Tag */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <Anchor className="w-4 h-4 text-sky-600" />
                <span className="text-xs font-bold text-gray-900">Catamarán Porto Madero</span>
              </div>

              {/* Floating Bottom Info */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold">Excursión Destacada</p>
                <h3 className="text-2xl font-black">Paseo Principal de la Isla</h3>
                <p className="text-xs text-gray-200">Aguas turquesa, playas vírgenes y diversión garantizada</p>
              </div>
            </div>

            {/* Overlapping Floating WhatsApp Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-sky-100 items-center gap-3 animate-whatsapp">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">¿Dudas antes de reservar?</p>
                <p className="text-sm font-bold text-gray-900">Respuesta inmediata en minutos</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}