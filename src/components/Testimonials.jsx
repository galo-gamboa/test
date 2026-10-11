import React from 'react';
import { MessageCircle, CheckCheck, Star, Heart } from 'lucide-react';

export default function Testimonials({ sucursal }) {
  const { colores } = sucursal;

  // Testimonios (mismos para ambas sucursales)
  const reviews = [
    {
      name: "Martín",
      country: "Argentina 🇦🇷",
      time: "11:33",
      avatarBg: "bg-amber-500",
      avatarLetter: "M",
      text: "Una experiencia inolvidable. Atención de 10, súper recomendado!"
    },
    {
      name: "Valentina",
      country: "Uruguay 🇺🇾",
      time: "20:44",
      avatarBg: "bg-teal-500",
      avatarLetter: "V",
      text: "Nos fue súper bien, lo pasamos increíble. Gracias por todo!"
    },
    {
      name: "Joaquín",
      country: "Chile 🇨🇱",
      time: "19:04",
      avatarBg: "bg-sky-500",
      avatarLetter: "J",
      text: "Todo impecable, desde la reserva hasta el paseo. Muy profesionales."
    },
    {
      name: "Camila",
      country: "Perú 🇵🇪",
      time: "12:22",
      avatarBg: "bg-rose-500",
      avatarLetter: "C",
      text: "Una experiencia re linda! Nos encantó, quedamos felices."
    },
  ];

  // Textos según sucursal
  const textos = {
    floripa: {
      badge: 'Experiencia Floripa',
      titulo: 'Lo que dicen nuestros viajeros',
      subtitulo: 'Mensajes reales de nuestros clientes recibidos directo desde WhatsApp tras sus excursiones en Florianópolis.',
      cta: 'Sumate a nuestros viajeros satisfechos',
    },
    galinhas: {
      badge: 'Experiencia Galinhas',
      titulo: 'Lo que dicen nuestros viajeros',
      subtitulo: 'Mensajes reales de nuestros clientes recibidos directo desde WhatsApp tras sus excursiones en Porto de Galinhas.',
      cta: 'Sumate a nuestros viajeros satisfechos',
    },
  };

  const t = textos[sucursal.id] || textos.floripa;

  return (
    <section id="opiniones" className={`py-20 ${colores.bgPrimario} text-white relative overflow-hidden scroll-mt-12`}>
      {/* WhatsApp Chat Wall Background Theme */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/20 border border-white/20 rounded-full text-xs font-bold text-white">
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            {t.titulo}
          </h2>
          <p className="text-white/90 text-base sm:text-lg">
            {t.subtitulo}
          </p>
        </div>

        {/* WhatsApp Chat Bubbles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-xl flex flex-col justify-between hover:border-white/30 transition-all transform hover:-translate-y-1"
            >
              {/* WhatsApp Message Bubble Header */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${rev.avatarBg} rounded-full flex items-center justify-center font-black text-white text-lg shadow-inner`}>
                      {rev.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white leading-none">{rev.name}</h4>
                      <span className="text-[11px] text-white/70 font-medium">{rev.country}</span>
                    </div>
                  </div>
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Message Box */}
                <div className="bg-black/40 rounded-2xl p-3.5 border border-white/10 text-white/95 text-sm leading-relaxed relative">
                  <p>"{rev.text}"</p>

                  <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-white/60 font-mono">
                    <span>{rev.time}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 pt-2 text-right">
                <span className="text-[10px] text-white/70 font-medium uppercase tracking-wider">
                  Verificado via WhatsApp
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link to WhatsApp */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(`¡Hola ${sucursal.nombre}! Quiero ver más opiniones y consultar disponibilidad.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white font-bold rounded-xl text-sm shadow-md transition-all`}
          >
            <Heart className="w-4 h-4 fill-current text-rose-300" />
            <span>{t.cta}</span>
          </a>
        </div>

      </div>
    </section>
  );
}