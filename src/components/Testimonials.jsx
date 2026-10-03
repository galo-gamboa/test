import React from 'react';
import { MessageCircle, CheckCheck, Star, Heart } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Nacho",
      country: "Argentina 🇦🇷",
      time: "11:33",
      avatarBg: "bg-amber-500",
      avatarLetter: "N",
      text: "Buenísimo, una experiencia inolvidable. Gracias por tu atención."
    },
    {
      name: "Lili",
      country: "Argentina 🇦🇷",
      time: "20:44",
      avatarBg: "bg-teal-500",
      avatarLetter: "L",
      text: "Nos fue súper bien, lo pasamos increíble. Buenísimo el paseo!"
    },
    {
      name: "Nestor",
      country: "Argentina 🇦🇷",
      time: "19:04",
      avatarBg: "bg-sky-500",
      avatarLetter: "N",
      text: "Todo un éxito, la verdad que muy bueno! Súper recomendado!"
    },
    {
      name: "Caro",
      country: "Argentina 🇦🇷",
      time: "12:22",
      avatarBg: "bg-rose-500",
      avatarLetter: "C",
      text: "La verdad una experiencia re linda! Nos encantó, quedamos felices."
    }
  ];

  return (
    <section id="opiniones" className="py-20 bg-emerald-900 text-white relative overflow-hidden scroll-mt-12">
      {/* WhatsApp Chat Wall Background Theme */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-800/80 border border-emerald-700 rounded-full text-xs font-bold text-emerald-300">
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Toni Turismo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Lo que dicen nuestros viajeros
          </h2>
          <p className="text-emerald-100 text-base sm:text-lg">
            Mensajes reales de nuestros clientes recibidos directo desde WhatsApp tras sus excursiones.
          </p>
        </div>

        {/* WhatsApp Chat Bubbles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-emerald-950/80 backdrop-blur-md rounded-2xl p-5 border border-emerald-800/80 shadow-xl flex flex-col justify-between hover:border-emerald-500/50 transition-all transform hover:-translate-y-1"
            >
              {/* WhatsApp Message Bubble Header */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-800/60">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${rev.avatarBg} rounded-full flex items-center justify-center font-black text-white text-lg shadow-inner`}>
                      {rev.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white leading-none">{rev.name}</h4>
                      <span className="text-[11px] text-emerald-300/80 font-medium">{rev.country}</span>
                    </div>
                  </div>
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Message Box */}
                <div className="bg-emerald-900/60 rounded-2xl p-3.5 border border-emerald-800/40 text-emerald-50 text-sm leading-relaxed relative">
                  <p>"{rev.text}"</p>
                  
                  <div className="flex items-center justify-end gap-1 mt-2 text-[10px] text-emerald-300/70 font-mono">
                    <span>{rev.time}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-4 pt-2 text-right">
                <span className="text-[10px] text-emerald-400 font-medium uppercase tracking-wider">
                  Verificado via WhatsApp
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link to WhatsApp */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5548991462022?text=%C2%A1Hola%20Toni%20Turismo!%20Quiero%20ver%20m%C3%A1s%20opiniones%20y%20consultar%20disponibilidad."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-xl text-sm shadow-md transition-all"
          >
            <Heart className="w-4 h-4 fill-current text-rose-600" />
            <span>Sumate a nuestros viajeros satisfechos</span>
          </a>
        </div>

      </div>
    </section>
  );
}