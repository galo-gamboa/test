import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat({ sucursal, onOpenWhatsApp }) {
  const { colores } = sucursal;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">

      {/* Tooltip con color de la sucursal */}
      <div className={`hidden sm:block ${colores.bgPrimario} text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xl animate-pulse`}>
        ¡Consultá en español!
      </div>

      <button
        onClick={() => onOpenWhatsApp()}
        aria-label="Contacto por WhatsApp"
        className={`w-14 h-14 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-whatsapp`}
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </button>
    </div>
  );
}