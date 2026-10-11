import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat({ sucursal }) {
  const { colores } = sucursal;

  // Destino y mensaje según sucursal
  const destino = sucursal.id === 'floripa' ? 'Florianópolis' : 'Porto de Galinhas';

  const whatsappUrl = `https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(
    `¡Hola ${sucursal.nombre}! Quiero consultar por las excursiones disponibles en ${destino}.`
  )}`;

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
        className={`w-14 h-14 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-whatsapp`}
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}