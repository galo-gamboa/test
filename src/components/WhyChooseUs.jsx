import React from 'react';
import { Languages, Zap, UserCheck, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Languages,
      title: "Atención en español",
      description: "Te acompañamos y guiamos en tu propio idioma de principio a fin, evitando confusiones o malentendidos.",
      color: "bg-sky-500"
    },
    {
      icon: Zap,
      title: "Reservas rápidas",
      description: "Sin formularios complejos. Confirmá tu lugar en pocos minutos con comunicación directa por WhatsApp.",
      color: "bg-amber-500"
    },
    {
      icon: UserCheck,
      title: "Atención personalizada",
      description: "Te ayudamos a elegir la mejor experiencia según tus gustos, clima de la semana y grupo familiar.",
      color: "bg-teal-500"
    },
    {
      icon: Award,
      title: "Experiencias seleccionadas",
      description: "Filtramos la oferta turística para ofrecerte únicamente los paseos más seguros y mejor valorados de la isla.",
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="por-que-nosotros" className="py-20 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase bg-sky-50 px-4 py-1.5 rounded-full border border-sky-100">
            Confianza y Seguridad
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            ¿Por qué elegir Toni Turismo?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Marcamos la diferencia cuidando cada detalle para que tus vacaciones en Florianópolis sean inolvidables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-gray-50/80 rounded-3xl p-8 border border-gray-100 hover:border-sky-200 hover:bg-sky-50/40 hover:shadow-xl transition-all duration-300 text-center sm:text-left flex flex-col items-center sm:items-start group"
              >
                <div className={`w-14 h-14 ${b.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-gray-200 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}