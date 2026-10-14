import React, { useState } from 'react';
import { Send, Phone, User, Calendar, Users, CheckCircle2 } from 'lucide-react';

export default function BookingForm({ sucursal }) {
  const { colores } = sucursal;

  // Excursiones según sucursal
  const excursionesPorSucursal = {
    floripa: [
      "Paseo en Catamarán",
      "Paseo en Barco",
      "Isla de Campeche",
      "Isla de Francés Plus",
      "Barco Pirata",
      "Otra experiencia (consultar)"
    ],
    galinhas: [
      "Maragogi",
      "Playa de Carneiros",
      "Ilha de Santo Aleixo",
      "Paseo en Buggy",
      "Snorkel en las Piscinas Naturales",
      "Otra experiencia (consultar)"
    ],
  };

  const excursiones = excursionesPorSucursal[sucursal.id] || excursionesPorSucursal.floripa;

  const [formData, setFormData] = useState({
    fullName: '',
    countryCode: '+54',
    phone: '',
    excursion: excursiones[0],
    date: '',
    people: '2'
  });

  const countryCodes = [
    { label: "🇦🇷 Argentina (+54)", value: "+54" },
    { label: "🇧🇷 Brasil (+55)", value: "+55" },
    { label: "🇨🇱 Chile (+56)", value: "+56" },
    { label: "🇺🇾 Uruguay (+598)", value: "+598" },
    { label: "🇵🇾 Paraguay (+595)", value: "+595" },
    { label: "🌎 Otro (+)", value: "+" }
  ];

  const destino = sucursal.id === 'floripa' ? 'Florianópolis' : 'Porto de Galinhas';

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageText = `¡Hola ${sucursal.nombre}! 
Quiero consultar disponibilidad para la siguiente reserva en ${destino}:

*Excursión:* ${formData.excursion}
*Nombre:* ${formData.fullName}
*WhatsApp:* ${formData.countryCode} ${formData.phone}
*Fecha Deseada:* ${formData.date || 'A confirmar'}
*Cantidad de Personas:* ${formData.people}

¿Me podrías confirmar disponibilidad y detalles? ¡Muchas gracias!`;

    const targetUrl = `https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(messageText)}`;
    window.open(targetUrl, '_blank');
  };

  // Textos según sucursal
  const textos = {
    floripa: {
      badge: 'Reservá tu lugar',
      titulo: 'Consultá disponibilidad en segundos',
      subtitulo: 'Completá el formulario y te enviamos toda la información directo a tu WhatsApp. Sin demoras, atención en español.',
    },
    galinhas: {
      badge: 'Reservá tu lugar',
      titulo: 'Consultá disponibilidad en segundos',
      subtitulo: 'Completá el formulario y te enviamos toda la información directo a tu WhatsApp. Sin demoras, atención en español.',
    },
  };

  const t = textos[sucursal.id] || textos.floripa;

  return (
    <section id="reserva" className={`py-20 bg-gradient-to-b ${colores.gradienteFondo} scroll-mt-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Card Wrapper */}
        <div className={`bg-white rounded-3xl shadow-2xl border ${colores.borderPrimario}/20 overflow-hidden`}>

          {/* Form Header Banner */}
          <div className={`bg-gradient-to-r ${colores.gradienteHero} p-8 sm:p-10 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6`}>
            <div className="space-y-2">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                {t.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                {t.titulo}
              </h2>
              <p className="text-white/90 text-sm max-w-lg">
                {t.subtitulo}
              </p>
            </div>

            <div className="shrink-0 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center">
              <div className="text-xs text-white/80 uppercase font-semibold">Atención Telefónica</div>
              <div className="text-lg font-black tracking-wider text-white mt-1">+{sucursal.whatsapp}</div>
            </div>
          </div>

          {/* Actual Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">

            {/* Step 1: Tus Datos */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                <span className={`w-6 h-6 rounded-full ${colores.bgSuave} ${colores.textPrimarioOscuro} text-xs font-black flex items-center justify-center`}>1</span>
                <h3 className="text-lg font-bold text-gray-900">Tus datos personales</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                    Nombre y Apellido *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej: Juan Pérez"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* WhatsApp Phone */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                    WhatsApp con Código de País *
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-2/5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold px-2 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.value} value={c.value}>{c.label}</option>
                      ))}
                    </select>

                    <div className="relative flex-1">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="11 1234 5678"
                        className="w-full pl-9 pr-3 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Step 2: Tu Reserva */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                <span className={`w-6 h-6 rounded-full ${colores.bgSuaveSecundario} ${colores.textSecundario} text-xs font-black flex items-center justify-center`}>2</span>
                <h3 className="text-lg font-bold text-gray-900">Detalles de tu excursión</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                {/* Excursión Dropdown */}
                <div className="sm:col-span-3">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                    Excursión deseada *
                  </label>
                  <select
                    value={formData.excursion}
                    onChange={(e) => setFormData({ ...formData, excursion: e.target.value })}
                    className="w-full py-3.5 px-4 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  >
                    {excursiones.map((exc) => (
                      <option key={exc} value={exc}>{exc}</option>
                    ))}
                  </select>
                </div>

                {/* Fecha deseada */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                    Fecha deseada
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Personas */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                    Personas *
                  </label>
                  <div className="relative">
                    <Users className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.people}
                      onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"].map((num) => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Persona' : 'Personas'}</option>
                      ))}
                    </select>
                  </div>
                </div>

              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className={`w-full py-4 px-8 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white font-black text-base rounded-2xl shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3`}
              >
                <Send className="w-5 h-5" />
                <span>Enviar por WhatsApp</span>
              </button>

              <div className="mt-3 text-center flex items-center justify-center gap-1.5 text-xs text-gray-500">
                <CheckCircle2 className={`w-4 h-4 ${colores.textSecundario}`} />
                <span>Sin cargos por consulta • Respuesta rápida garantizada</span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}