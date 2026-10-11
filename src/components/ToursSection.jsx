import React, { useState } from 'react';
import { MessageCircle, Check, Info, Sparkles, MapPin } from 'lucide-react';

// Imports de imágenes - Floripa
import floripaCatamaran from '../assets/excursiones/floripa-catamaran.jpg';
import floripaBarco from '../assets/excursiones/floripa-barco.jpg';
import floripaCampeche from '../assets/excursiones/floripa-campeche.jpg';
import floripaFrances from '../assets/excursiones/floripa-frances.jpg';
import floripaPirata from '../assets/excursiones/floripa-pirata.jpg';

// Imports de imágenes - Galinhas
import galinhasMaragogi from '../assets/excursiones/galinhas-maragogi.jpg';
import galinhasCarneiros from '../assets/excursiones/galinhas-carneiros.jpg';
import galinhasSantoAleixo from '../assets/excursiones/galinhas-santo-aleixo.jpg';
import galinhasBuggy from '../assets/excursiones/galinhas-buggy.jpg';
import galinhasSnorkel from '../assets/excursiones/galinhas-snorkel.jpg';

export default function ToursSection({ sucursal }) {
  const [selectedModalTour, setSelectedModalTour] = useState(null);
  const { colores } = sucursal;

  const toursPorSucursal = {
    floripa: [
      {
        id: 'catamaran',
        title: 'Paseo en Catamarán',
        badge: 'Paseo Principal ⭐',
        isFeatured: true,
        image: floripaCatamaran,
        fallbackImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
        description: 'TODO INCLUIDO. Caipirinha de cortesía, frutas libres, trilha hasta una cascada escondida, almuerzo buffet libre y navegación hasta una playa privada con banana boat, kayak, trampolín, stand up paddle y snorkel.',
        duration: 'Día completo',
        highlights: [
          'Caipirinha de cortesía y frutas libres',
          'Trilha en la naturaleza hasta cascada escondida',
          'Almuerzo buffet libre con vista al lago',
          'Navegación por aguas cristalinas',
          'Playa privada con actividades incluidas',
          'Banana boat, kayak, trampolín, SUP y snorkel',
        ],
      },
      {
        id: 'barco',
        title: 'Paseo en Barco',
        badge: 'Clásico Imperdible 🚤',
        isFeatured: true,
        image: floripaBarco,
        fallbackImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Almuerzo libre, 1 hora de caipirinha FREE, snorkel, animador a bordo, música durante todo el paseo, dos toboganes de 4 metros, kayak, piscina flotante, stand up paddle, flotadores, bar a bordo y Wi-Fi.',
        duration: '5 horas',
        highlights: [
          'Almuerzo libre (comé todo lo que quieras)',
          '1 hora de caipirinha FREE',
          'Snorkel y kayak',
          'Animador a bordo y música todo el paseo',
          'Dos toboganes de 4 metros',
          'Piscina flotante y stand up paddle',
          'Flotadores tipo espagueti',
          'Servicio de bar a bordo',
          'Wi-Fi',
        ],
      },
      {
        id: 'campeche',
        title: 'Isla de Campeche',
        badge: 'Paraíso Natural 🏖️',
        isFeatured: false,
        image: floripaCampeche,
        fallbackImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
        description: 'Reserva natural con acceso controlado de 800 visitantes por día. Aguas cristalinas, arena blanca y naturaleza preservada. Caipirinha libre y agua durante la navegación.',
        duration: 'Día completo',
        highlights: [
          'Reserva natural con acceso controlado',
          'Aguas transparentes y arena blanca',
          'Caipirinha libre y agua durante la navegación',
          'Ideal para relajarse y nadar',
          'Uno de los tesoros naturales de Florianópolis',
        ],
      },
      {
        id: 'frances',
        title: 'Isla de Francés Plus',
        badge: 'Relax & Naturaleza 🌴',
        isFeatured: false,
        image: floripaFrances,
        fallbackImage: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80',
        description: 'Navegá en una goleta cómoda y exclusiva con recorrido panorámico por las playas del norte de Floripa, con parada para nadar en las aguas cristalinas de Isla do Francés.',
        duration: '6 horas',
        highlights: [
          'Choripán gourmet',
          'Frutas de estación',
          'Stand Up Paddle',
          'Flotadores y snorkel',
          'Música y ambiente relajado',
          'Goleta exclusiva (máx. 25 personas)',
        ],
      },
      {
        id: 'pirata',
        title: 'Barco Pirata',
        badge: 'Aventura Familiar 🏴‍☠️',
        isFeatured: false,
        image: floripaPirata,
        fallbackImage: 'https://images.unsplash.com/photo-1476514525535-ce74f45814e0?auto=format&fit=crop&w=800&q=80',
        description: 'Navegá por el norte de Florianópolis descubriendo playas paradisíacas, fortalezas históricas y paisajes increíbles. 3 opciones de paseo con diferentes duraciones.',
        duration: '3 opciones',
        highlights: [
          '3 opciones de paseo (diferentes duraciones)',
          'Vistas de Canasvieiras, Canajurê, Jurerê y Daniela',
          'Parada para baño frente a Ilha do Francês',
          'Visita a Fortaleza de Santa Cruz (opciones completas)',
          'Historia de las fortalezas de la región',
        ],
      },
    ],
    galinhas: [
      {
        id: 'maragogi',
        title: 'Maragogi',
        badge: 'Paraíso Caribeño ⭐',
        isFeatured: true,
        image: galinhasMaragogi,
        fallbackImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
        description: 'Descubrí el famoso "Caribe Brasileño" y sus aguas cristalinas. Paseo en catamarán por las piscinas naturales y el Camino de Moisés.',
        duration: 'Día completo',
        highlights: [
          'Transporte ida y vuelta desde tu hotel',
          'Paseo en catamarán (2:30 hs aprox.)',
          'Piscinas naturales y Camino de Moisés',
          'Day Use en restaurante',
          'Salida solo en días de marea baja',
        ],
      },
      {
        id: 'carneiros',
        title: 'Playa de Carneiros',
        badge: 'La más bella 🏖️',
        isFeatured: false,
        image: galinhasCarneiros,
        fallbackImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80',
        description: 'Una de las playas más lindas de Pernambuco, con aguas cristalinas y paisajes increíbles. Paseo en catamarán visitando la Capilla de San Benito, bancos de arena, baño de arcilla y piscinas naturales.',
        duration: 'Día completo (08 a 15 hs)',
        highlights: [
          'Transporte ida y vuelta',
          'Day Use en Parador Rota dos Carneiros',
          'Paseo en catamarán (2 hs aprox.)',
          'Capilla de San Benito',
          'Bancos de arena y baño de arcilla',
          'Piscinas naturales',
        ],
      },
      {
        id: 'santo-aleixo',
        title: 'Ilha de Santo Aleixo',
        badge: 'Isla Paradisíaca 🌴',
        isFeatured: false,
        image: galinhasSantoAleixo,
        fallbackImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        description: 'Un paraíso de piscinas naturales, playas tranquilas y paisajes de origen volcánico. Travesía en lancha + ruta ecológica guiada.',
        duration: 'Día completo (08 a 15 hs)',
        highlights: [
          'Transporte ida y vuelta',
          'Travesía en lancha (15 minutos)',
          'Day Use con sombrilla y reposeras',
          'Tiempo libre',
          'Recorrido ecológico con guía local',
        ],
      },
      {
        id: 'buggy',
        title: 'Paseo en Buggy',
        badge: 'Aventura 4x4 🏎️',
        isFeatured: false,
        image: galinhasBuggy,
        fallbackImage: 'https://images.unsplash.com/photo-1476514525535-ce74f45814e0?auto=format&fit=crop&w=800&q=80',
        description: 'Recorré Porto de Galinhas de punta a punta: Muro Alto, Cupé, Porto de Galinhas, Maracaípe y Pontal de Maracaípe.',
        duration: '2, 4, 6 u 8 horas',
        highlights: [
          'Muro Alto',
          'Cupé',
          'Porto de Galinhas',
          'Maracaípe',
          'Pontal de Maracaípe',
          'Paradas en playas paradisíacas y lugares para fotos',
          'Capacidad hasta 4 personas',
        ],
      },
      {
        id: 'snorkel',
        title: 'Buceo o Snorkel en las Piscinas Naturales',
        badge: 'Mundo Submarino 🐠',
        isFeatured: false,
        image: galinhasSnorkel,
        fallbackImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
        description: 'Viví una experiencia única dentro de las aguas cristalinas de Porto de Galinhas. Paseo en jangada hasta las piscinas naturales + snorkel entre peces.',
        duration: '50 minutos',
        highlights: [
          'Paseo en jangada hasta las piscinas naturales',
          'Experiencia de snorkel entre peces',
          'Aguas transparentes',
          'Fotos subacuáticas incluidas',
        ],
      },
    ],
  };

  const tours = toursPorSucursal[sucursal.id] || toursPorSucursal.floripa;

  const getWhatsAppTourLink = (tourName) => {
    const destino = sucursal.id === 'floripa' ? 'Florianópolis' : 'Porto de Galinhas';
    const text = `¡Hola ${sucursal.nombre}! Quiero consultar por la excursión: ${tourName} en ${destino}. ¿Me brindas más información y disponibilidad?`;
    return `https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const textos = {
    floripa: {
      catalogo: 'Catálogo Exclusivo',
      titulo: 'Excursiones seleccionadas para vivir lo mejor de la isla',
      subtitulo: 'Garantizamos la máxima seguridad, atención 100% en español y los mejores itinerarios costeros de Florianópolis.',
      ubicacion: 'Florianópolis & Alrededores',
      bannerTitulo: '¿Buscás otra excursión personalizada?',
      bannerTexto: 'Contamos con más paseos en barco, traslados privados y actividades acuáticas según tus necesidades.',
      bannerBoton: 'Consultar por otros paseos',
    },
    galinhas: {
      catalogo: 'Catálogo Exclusivo',
      titulo: 'Paseos únicos para vivir lo mejor de Porto de Galinhas',
      subtitulo: 'Atención 100% en español, guías locales y las mejores experiencias del nordeste brasileño.',
      ubicacion: 'Porto de Galinhas & Alrededores',
      bannerTitulo: '¿Buscás otra experiencia personalizada?',
      bannerTexto: 'Contamos con más paseos, traslados privados y actividades acuáticas según tus necesidades.',
      bannerBoton: 'Consultar por otros paseos',
    },
  };

  const t = textos[sucursal.id] || textos.floripa;

  return (
    <section id="paseos" className="py-20 bg-gray-50/80 relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className={`${colores.textPrimario} font-bold text-sm tracking-wider uppercase ${colores.bgSuave} px-4 py-1.5 rounded-full`}>
            {t.catalogo}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            {t.titulo}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {t.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border ${
                tour.isFeatured ? `${colores.borderPrimario} ring-2 ${colores.borderPrimario}/20` : 'border-gray-200/80'
              }`}
            >
              <div className="relative h-60 overflow-hidden bg-gray-100 group">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = tour.fallbackImage;
                  }}
                />

                <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {tour.badge}
                </div>

                {tour.isFeatured && (
                  <div className={`absolute top-4 right-4 ${colores.bgSecundario} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    Destacado
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className={`flex items-center gap-2 text-xs ${colores.textPrimario} font-semibold mb-2`}>
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{t.ubicacion}</span>
                    <span className="text-gray-300">•</span>
                    <span>{tour.duration}</span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 leading-snug hover:text-gray-700 transition-colors">
                    {tour.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2 line-clamp-3 leading-relaxed">
                    {tour.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    {tour.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                        <Check className={`w-4 h-4 ${colores.textSecundario} shrink-0 mt-0.5`} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                    {tour.highlights.length > 3 && (
                      <p className={`text-xs ${colores.textPrimario} font-bold pt-1`}>
                        +{tour.highlights.length - 3} beneficios más...
                      </p>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedModalTour(tour)}
                    className={`flex-1 px-4 py-3 ${colores.bgSuave} ${colores.textPrimarioOscuro} font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5`}
                  >
                    <Info className="w-4 h-4" />
                    <span>Info & Fotos</span>
                  </button>

                  <a
                    href={getWhatsAppTourLink(tour.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-4 py-3 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-sm flex items-center justify-center gap-1.5`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Consultar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className={`bg-gradient-to-br ${colores.gradienteHero} rounded-3xl overflow-hidden shadow-md flex flex-col items-center justify-center p-8 text-white text-center min-h-[400px]`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-black leading-tight">
                {t.bannerTitulo}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {t.bannerTexto}
              </p>
              <a
                href={`https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(`¡Hola ${sucursal.nombre}! 👋 Quiero consultar por otros paseos que no vi en la web. ¿Me podés pasar opciones y disponibilidad? ¡Gracias!`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-2xl shadow-lg hover:bg-gray-100 transition-all text-sm mt-2"
              >
                <MessageCircle className={`w-4 h-4 ${colores.textSecundario} fill-current`} />
                <span>{t.bannerBoton}</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {selectedModalTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100 max-h-[90vh] flex flex-col">
            <div className="relative h-64 shrink-0">
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

            <div className="p-6 space-y-4 overflow-y-auto">
              <h3 className="text-2xl font-black text-gray-900">{selectedModalTour.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{selectedModalTour.description}</p>

              <div className={`${colores.bgSuave} rounded-2xl p-4 space-y-2 border ${colores.borderPrimario}/20`}>
                <p className={`text-xs font-bold ${colores.textPrimarioOscuro} uppercase tracking-wide`}>Incluye en este paseo:</p>
                <div className="grid grid-cols-1 gap-1.5 text-xs text-gray-700 font-medium">
                  {selectedModalTour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 ${colores.textSecundario} shrink-0 mt-0.5`} />
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
                  className={`flex-1 py-3.5 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white font-bold rounded-xl text-center text-sm shadow-md transition-colors flex items-center justify-center gap-2`}
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