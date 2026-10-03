import React, { useState } from 'react';
import { MessageCircle, Check, Info, Sparkles, MapPin, Eye, Star } from 'lucide-react';

export default function ToursSection({ onSelectTourForBooking }) {
  const [selectedModalTour, setSelectedModalTour] = useState(null);

  const tours = [
    {
      id: "catamaran",
      title: "Catamarán Porto Madero",
      badge: "Paseo Principal ⭐",
      isFeatured: true,
      image: "https://www.toniturismo.com/__l5e/assets-v1/bbb4cf39-1c09-4444-aabf-3fc27a946088/tour-catamaran-official.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
      description: "Navegación inolvidable bordo de un catamarán de primer nivel con paradas en playas e islas paradisíacas. Incluye música, guías y paradas para baño.",
      duration: "Día completo",
      highlights: ["Navegación premium", "Atención a bordo", "Fotografías memorables", "Parada para nadar"],
    },
    {
      id: "campeche-desembarque",
      title: "Isla de Campeche Desembarque",
      badge: "El más solicitado 🏖️",
      isFeatured: false,
      image: "https://www.toniturismo.com/__l5e/assets-v1/c43ef9fd-e544-4910-8b80-7660affd9403/tour-campeche-official.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "Llegada directa a la joya del Caribe Brasileño. Caminatas guiadas, aguas cristalinas para snorkel y tiempo libre en la isla.",
      duration: "6 a 7 horas",
      highlights: ["Desembarque en la playa", "Aguas ultra cristalinas", "Senderos arqueológicos", "Cupos limitados"],
    },
    {
      id: "campeche-panoramico",
      title: "Isla de Campeche Panorámico",
      badge: "Vista Espectacular 🌅",
      isFeatured: false,
      image: "https://www.toniturismo.com/assets/tour-campeche-premium-DA2J0UFM.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
      description: "Recorrido náutico costero rodeando la mística Isla de Campeche con vistas panorámicas únicas de acantilados e islotes.",
      duration: "4 horas",
      highlights: ["Recorrido náutico guiado", "Música a bordo", "Fotos desde el agua", "Apto para toda la familia"],
    },
    {
      id: "camboriu-unipraias",
      title: "Balneário Camboriú + Parque Unipraias",
      badge: "Ciudad + Naturaleza 🚠",
      isFeatured: false,
      image: "https://www.toniturismo.com/assets/tour-camboriu-DjC-Bp-8.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1476514525535-ce74f45814e0?auto=format&fit=crop&w=800&q=80",
      description: "Un paseo imperdible hacia la 'Dubai de Brasil'. Incluye paseo costero, teleférico Parque Unipraias y parada en Playa Laranjeiras.",
      duration: "Excursión Día Entero",
      highlights: ["Teleférico Unipraias", "Miradores panorámicos", "Tiempo libre de compras", "Traslado con aire acondicionado"],
    },
    {
      id: "buceo-bautismo",
      title: "Buceo de Bautismo",
      badge: "Experiencia Única 🥽",
      isFeatured: false,
      image: "https://www.toniturismo.com/__l5e/assets-v1/fad5723c-c632-4bc6-bf17-f6855b401347/tour-buceo.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      description: "Iniciación al mundo submarino sin experiencia previa requerida. Equipamiento completo, instructor personalizado 1 a 1 y peces exóticos.",
      duration: "3 a 4 horas",
      highlights: ["Instructor individual", "Equipo técnico completo", "No requiere saber nadar", "Fotografías submarinas"],
    },
    {
      id: "isla-frances",
      title: "Isla do Francês",
      badge: "Relax & Naturaleza 🌴",
      isFeatured: false,
      image: "https://www.toniturismo.com/assets/tour-frances-xRpBFnq5.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
      description: "Tranquila escapada en barco hacia una encantadora isla privada al norte de Florianópolis. Aguas mansas ideales para kayak y stand up paddle.",
      duration: "Media jornada",
      highlights: ["Aguas muy calmas", "Ambiente familiar", "Snorkel en rocas", "Fácil acceso"],
    }
  ];

  const getWhatsAppTourLink = (tourName) => {
    const text = `¡Hola Toni Turismo! Quiero consultar por la excursión: ${tourName}. ¿Me brindas más información y disponibilidad?`;
    return `https://wa.me/5548991462022?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="paseos" className="py-20 bg-gray-50/80 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sky-600 font-bold text-sm tracking-wider uppercase bg-sky-100/80 px-4 py-1.5 rounded-full">
            Catálogo Exclusivo
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Excursiones seleccionadas para vivir lo mejor de la isla
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Garantizamos la máxima seguridad, atención 100% en español y los mejores itinerarios costeros de Florianópolis.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border ${
                tour.isFeatured ? 'border-sky-400 ring-2 ring-sky-400/20' : 'border-gray-200/80'
              }`}
            >
              {/* Tour Image Header */}
              <div className="relative h-60 overflow-hidden bg-gray-100 group">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = tour.fallbackImage;
                  }}
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {tour.badge}
                </div>

                {tour.isFeatured && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Destacado
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-sky-600 font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Florianópolis & Alrededores</span>
                    <span className="text-gray-300">•</span>
                    <span>{tour.duration}</span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 leading-snug hover:text-sky-600 transition-colors">
                    {tour.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 line-clamp-3 leading-relaxed">
                    {tour.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    {tour.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedModalTour(tour)}
                    className="flex-1 px-4 py-3 bg-sky-50 hover:bg-sky-100 text-sky-800 font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-4 h-4" />
                    <span>Info & Fotos</span>
                  </button>

                  <a
                    href={getWhatsAppTourLink(tour.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Consultar</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-sky-600 via-teal-600 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">¿Buscás otra excursión personalizada?</h3>
            <p className="text-sky-100 text-sm sm:text-base max-w-xl">
              Contamos con más paseos en barco, traslados privados y actividades acuáticas según tus necesidades.
            </p>
          </div>
          <a
            href="https://wa.me/5548991462022?text=%C2%A1Hola%20Toni%20Turismo!%20%F0%9F%91%8B%20Quiero%20consultar%20por%20otros%20paseos%20que%20no%20vi%20en%20la%20web.%20%C2%BFMe%20pod%C3%A9s%20pasar%20opciones%20y%20disponibilidad%3F%20%C2%A1Gracias!"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-4 bg-white text-gray-900 font-bold rounded-2xl shadow-lg hover:bg-gray-100 transition-all flex items-center gap-2 text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5 text-emerald-500 fill-current" />
            <span>Consultar por otros paseos</span>
          </a>
        </div>

      </div>

      {/* Tour Detail Modal */}
      {selectedModalTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100">
            <div className="relative h-64">
              <img
                src={selectedModalTour.image}
                alt={selectedModalTour.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = selectedModalTour.fallbackImage;
                }}
              />
              <button
                onClick={() => setSelectedModalTour(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-900">
                {selectedModalTour.badge}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-black text-gray-900">{selectedModalTour.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{selectedModalTour.description}</p>
              
              <div className="bg-sky-50 rounded-2xl p-4 space-y-2 border border-sky-100">
                <p className="text-xs font-bold text-sky-900 uppercase tracking-wide">Incluye en este paseo:</p>
                <div className="grid grid-cols-1 gap-1.5 text-xs text-sky-800 font-medium">
                  {selectedModalTour.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={getWhatsAppTourLink(selectedModalTour.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-center text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Reservar este paseo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}