import React, { useState } from 'react';
import { X, MessageCircle, Users, Calendar, Send } from 'lucide-react';

export default function WhatsAppModal({ sucursal, isOpen, onClose, tourNombre = null }) {
  const [personas, setPersonas] = useState('2');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const { colores } = sucursal;

  const destino = sucursal.id === 'floripa' ? 'Florianópolis' : 'Porto de Galinhas';

  const meses = [
    { value: '01', label: 'Enero' },
    { value: '02', label: 'Febrero' },
    { value: '03', label: 'Marzo' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Mayo' },
    { value: '06', label: 'Junio' },
    { value: '07', label: 'Julio' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Septiembre' },
    { value: '10', label: 'Octubre' },
    { value: '11', label: 'Noviembre' },
    { value: '12', label: 'Diciembre' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatear fecha como DD/MM
    const fechaFormateada = (dia && mes)
      ? `${dia}/${mes}`
      : '[día/mes]';

    // Si hay un tour específico, lo mencionamos
    const mensajeTour = tourNombre
      ? `*Excursión:* ${tourNombre}\n`
      : '';

    const messageText = `¡Hola, ${sucursal.nombre}!

Quiero consultar por las excursiones disponibles en ${destino}.

${mensajeTour}*Cantidad de personas:* ${personas}
*Fechas del viaje:* ${fechaFormateada}

¡Gracias!`;

    const whatsappUrl = `https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(messageText)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header con gradiente */}
        <div className={`bg-gradient-to-r ${colores.gradienteHero} p-6 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h3 className="text-xl font-black">Consultá por WhatsApp</h3>
              <p className="text-white/80 text-xs">{sucursal.nombre}</p>
            </div>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">

          <p className="text-gray-600 text-sm text-center">
            Completá los datos y te enviamos toda la info directo a tu WhatsApp 💬
          </p>

          {/* Cantidad de personas */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2 flex items-center gap-1.5">
              <Users className={`w-4 h-4 ${colores.textPrimario}`} />
              Cantidad de personas
            </label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, "7+"].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setPersonas(num.toString())}
                  className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${personas === num.toString()
                      ? `${colores.bgSecundario} text-white shadow-md`
                      : `bg-gray-100 text-gray-700 hover:bg-gray-200`
                    }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Fecha del viaje: día + mes */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2 flex items-center gap-1.5">
              <Calendar className={`w-4 h-4 ${colores.textPrimario}`} />
              Fecha del viaje
            </label>
            <div className="grid grid-cols-2 gap-3">

              {/* Día */}
              <select
                value={dia}
                onChange={(e) => setDia(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
              >
                <option value="">Día</option>
                {Array.from({ length: 31 }, (_, i) => {
                  const num = String(i + 1).padStart(2, '0');
                  return <option key={num} value={num}>{num}</option>;
                })}
              </select>

              {/* Mes */}
              <select
                value={mes}
                onChange={(e) => setMes(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
              >
                <option value="">Mes</option>
                {meses.map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>

            </div>
            <p className="text-[11px] text-gray-500 mt-1.5">
              Podés ajustar los detalles exactos por WhatsApp
            </p>
          </div>

          {/* Botón enviar */}
          <button
            type="submit"
            className={`w-full py-4 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white font-black text-base rounded-2xl shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2`}
          >
            <Send className="w-5 h-5" />
            <span>Enviar por WhatsApp</span>
          </button>

          <p className="text-[11px] text-gray-500 text-center">
            Se abrirá WhatsApp con el mensaje listo para enviar
          </p>

        </form>

      </div>
    </div>
  );
}