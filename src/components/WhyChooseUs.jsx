import React from 'react';
import { Languages, Zap, UserCheck, Award } from 'lucide-react';

export default function WhyChooseUs({ sucursal }) {
  const { colores } = sucursal;

  const benefits = [
    {
      icon: Languages,
      title: "Atención en español",
      description: "Te acompañamos y guiamos en tu propio idioma de principio a fin, evitando confusiones o malentendidos.",
    },
    {
      icon: Zap,
      title: "Reservas rápidas",
      description: "Sin formularios complejos. Confirmá tu lugar en pocos minutos con comunicación directa por WhatsApp.",
    },
    {
      icon: UserCheck,
      title: "Atención personalizada",
      description: "Te ayudamos a elegir la mejor experiencia según tus gustos, clima de la semana y grupo familiar.",
    },
    {
      icon: Award,
      title: "Experiencias seleccionadas",
      description: "Filtramos la oferta turística para ofrecerte únicamente los paseos más seguros y mejor valorados de la región.",
    }
  ];

  // Textos según sucursal
  const textos = {
    floripa: {
      badge: 'Confianza y Seguridad',
      titulo: `¿Por qué elegir ${sucursal.nombre}?`,
      subtitulo: 'Marcamos la diferencia cuidando cada detalle para que tus vacaciones en Florianópolis sean inolvidables.',
    },
    galinhas: {
      badge: 'Confianza y Seguridad',
      titulo: `¿Por qué elegir ${sucursal.nombre}?`,
      subtitulo: 'Marcamos la diferencia cuidando cada detalle para que tus vacaciones en Porto de Galinhas sean inolvidables.',
    },
  };

  const t = textos[sucursal.id] || textos.floripa;

  // Colores rotativos para los íconos (usando los del tema + uno de acento)
  const iconColors = [
    colores.bgPrimario,
    colores.bgSecundario,
    colores.bgPrimario,
    colores.bgSecundario,
  ];

  return (
    <section id="por-que-nosotros" className="py-20 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className={`${colores.textPrimario} font-bold text-sm tracking-wider uppercase ${colores.bgSuave} px-4 py-1.5 rounded-full border ${colores.borderPrimario}/20`}>
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {t.titulo}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {t.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className={`bg-gray-50/80 rounded-3xl p-8 border border-gray-100 ${colores.borderPrimario}/30 ${colores.bgSuave}/40 hover:shadow-xl transition-all duration-300 text-center sm:text-left flex flex-col items-center sm:items-start group`}
              >
                <div className={`w-14 h-14 ${iconColors[i]} text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-gray-200 group-hover:scale-110 transition-transform`}>
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