import React from 'react';
import { MessageCircle, ShieldCheck, Star, Sparkles, Anchor } from 'lucide-react';

// Imports de imágenes destacadas
import heroFloripa from '../assets/excursiones/floripa-catamaran.jpg';
import heroGalinhas from '../assets/excursiones/galinhas-maragogi.jpg';

export default function Hero({ sucursal }) {
  const { colores } = sucursal;

  const whatsappUrl = `https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(
    `¡Hola ${sucursal.nombre}! Quiero consultar por las excursiones en ${sucursal.id === 'floripa' ? 'Florianópolis' : 'Porto de Galinhas'}.`
  )}`;

  const textos = {
    floripa: {
      badge: 'Excursiones en Florianópolis 🇧🇷',
      tituloParte1: 'Descubrí las mejores',
      tituloParte2: 'experiencias de Florianópolis',
      subtitulo: 'Excursiones seleccionadas, atención en español y reservas rápidas directo por WhatsApp. Disfrutá de playas paradisíacas, paseos en catamarán y buceo con guía personalizado.',
      imagenDestacada: heroFloripa,
      imagenAlt: 'Catamarán navegando en aguas turquesa de Florianópolis',
      etiquetaDestacada: 'Catamarán Porto Madero',
      tituloImagen: 'Paseo Principal de la Isla',
      descripcionImagen: 'Aguas turquesa, playas vírgenes y diversión garantizada',
    },
    galinhas: {
      badge: 'Excursiones en Porto de Galinhas 🇧🇷',
      tituloParte1: 'Viví las mejores',
      tituloParte2: 'experiencias de Porto de Galinhas',
      subtitulo: 'Paseos únicos por las playas más paradisíacas de Brasil. Atención en español y reservas rápidas por WhatsApp. Descubrí Maragogi, Carneiros y las piscinas naturales.',
      imagenDestacada: heroGalinhas,
      imagenAlt: 'Piscinas naturales de Maragogi',
      etiquetaDestacada: 'Maragogi',
      tituloImagen: 'Paraíso Caribeño en Brasil',
      descripcionImagen: 'Piscinas naturales, aguas cristalinas y arena blanca',
    },
  };

  const t = textos[sucursal.id] || textos.floripa;

  return (
    <section className={`relative overflow-hidden bg-gradient-to-b ${colores.gradienteFondo} via-white to-white pt-8 pb-16 md:pt-16 md:pb-24`}>
      <div className={`absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full ${colores.bgSuave} opacity-50 blur-3xl pointer-events-none`}></div>
      <div className={`absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full ${colores.bgSuaveSecundario} opacity-40 blur-3xl pointer-events-none`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

            <div className={`inline-flex items-center gap-2 px-4 py-2 ${colores.bgSuaveSecundario} border ${colores.borderPrimario}/30 ${colores.textPrimarioOscuro} rounded-full text-xs sm:text-sm font-semibold shadow-sm`}>
              <span className={`flex h-2 w-2 rounded-full ${colores.bgSecundario} animate-ping`}></span>
              {t.badge}
              <span className="hidden sm:inline font-normal opacity-80">| Atención 100% en Español</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              {t.tituloParte1} <br className="hidden sm:inline" />
              <span className={`bg-gradient-to-r ${colores.gradienteHero} bg-clip-text text-transparent`}>
                {t.tituloParte2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t.subtitulo}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white font-bold text-base rounded-2xl shadow-lg transform hover:-translate-y-0.5 transition-all`}
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href="#paseos"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 ${colores.textPrimarioOscuro} border-2 ${colores.borderPrimario}/20 font-bold text-base rounded-2xl shadow-sm hover:border-current transition-all`}
              >
                <span>Ver paseos</span>
              </a>
            </div>

            <div className={`pt-6 border-t ${colores.borderPrimario}/20 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center sm:text-left`}>
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
                <div className={`flex items-center ${colores.textPrimario} gap-1 mb-1`}>
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-bold text-gray-800">Atención Directa</span>
                </div>
                <span className="text-[11px] text-gray-500">En tu idioma original</span>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <div className={`flex items-center ${colores.textSecundario} gap-1 mb-1`}>
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold text-gray-800">Check-in Rápido</span>
                </div>
                <span className="text-[11px] text-gray-500">Sin filas ni trámites</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative">

            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src={t.imagenDestacada}
                alt={t.imagenAlt}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <Anchor className={`w-4 h-4 ${colores.textPrimario}`} />
                <span className="text-xs font-bold text-gray-900">{t.etiquetaDestacada}</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className={`text-xs uppercase tracking-widest ${colores.textPrimario} font-semibold`}>Excursión Destacada</p>
                <h3 className="text-2xl font-black">{t.tituloImagen}</h3>
                <p className="text-xs text-gray-200">{t.descripcionImagen}</p>
              </div>
            </div>

            <div className={`mt-6 flex bg-white rounded-2xl p-4 shadow-xl border ${colores.borderPrimario}/20 items-center gap-3 animate-whatsapp max-w-md mx-auto lg:mx-0`}>
              <div className={`w-12 h-12 ${colores.bgSecundario} rounded-xl flex items-center justify-center text-white shrink-0 shadow-md`}>
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