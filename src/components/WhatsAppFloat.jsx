import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/5548991462022?text=" + encodeURIComponent("¡Hola Toni Turismo! Quiero consultar por las excursiones disponibles en Florianópolis.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      
      {/* Tooltip hint on hover */}
      <div className="hidden sm:block bg-gray-900 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl border border-gray-800 animate-pulse">
        ¡Consultá en español!
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacto por WhatsApp"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all animate-whatsapp"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}