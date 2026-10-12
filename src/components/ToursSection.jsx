import React, { useState, useEffect } from 'react';
import { MessageCircle, Check, Info, Sparkles, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// Imports de imágenes - Floripa
import floripaCatamaran1 from '../assets/excursiones/floripa-catamaran-1.jpg';
import floripaCatamaran2 from '../assets/excursiones/floripa-catamaran-2.jpg';
import floripaCatamaran3 from '../assets/excursiones/floripa-catamaran-3.jpg';
import floripaCatamaran4 from '../assets/excursiones/floripa-catamaran-4.jpg';
import floripaCatamaran5 from '../assets/excursiones/floripa-catamaran-5.jpg';

import floripaBarco1 from '../assets/excursiones/floripa-barco-1.jpg';
import floripaBarco2 from '../assets/excursiones/floripa-barco-2.jpg';
import floripaBarco3 from '../assets/excursiones/floripa-barco-3.jpg';
import floripaBarco4 from '../assets/excursiones/floripa-barco-4.jpg';
import floripaBarco5 from '../assets/excursiones/floripa-barco-5.jpg';
import floripaBarco6 from '../assets/excursiones/floripa-barco-6.jpg';

import floripaCampeche1 from '../assets/excursiones/floripa-campeche-1.jpg';
import floripaCampeche2 from '../assets/excursiones/floripa-campeche-2.jpg';

import floripaFrances1 from '../assets/excursiones/floripa-frances-1.jpg';
import floripaFrances2 from '../assets/excursiones/floripa-frances-2.jpg';

import floripaPirata1 from '../assets/excursiones/floripa-pirata-1.jpg';

// Imports de imágenes - Galinhas
import galinhasMaragogi1 from '../assets/excursiones/galinhas-maragogi-1.jpg';
import galinhasMaragogi2 from '../assets/excursiones/galinhas-maragogi-2.jpg';
import galinhasMaragogi3 from '../assets/excursiones/galinhas-maragogi-3.jpg';

import galinhasCarneiros1 from '../assets/excursiones/galinhas-carneiros-1.jpg';
import galinhasCarneiros2 from '../assets/excursiones/galinhas-carneiros-2.jpg';
import galinhasCarneiros3 from '../assets/excursiones/galinhas-carneiros-3.jpg';

import galinhasSantoAleixo1 from '../assets/excursiones/galinhas-santo-aleixo-1.jpg';
import galinhasSantoAleixo2 from '../assets/excursiones/galinhas-santo-aleixo-2.jpg';
import galinhasSantoAleixo3 from '../assets/excursiones/galinhas-santo-aleixo-3.jpg';

import galinhasBuggy1 from '../assets/excursiones/galinhas-buggy-1.jpg';
import galinhasBuggy2 from '../assets/excursiones/galinhas-buggy-2.jpg';
import galinhasBuggy3 from '../assets/excursiones/galinhas-buggy-3.jpg';

import galinhasSnorkel1 from '../assets/excursiones/galinhas-snorkel-1.jpg';
import galinhasSnorkel2 from '../assets/excursiones/galinhas-snorkel-2.jpg';
import galinhasSnorkel3 from '../assets/excursiones/galinhas-snorkel-3.jpg';

export default function ToursSection({ sucursal, onOpenWhatsApp }) {
  const [selectedModalTour, setSelectedModalTour] = useState(null);
  const { colores } = sucursal;

  const toursPorSucursal = {
    floripa: [
      {
        id: 'catamaran',
        title: 'Paseo en Catamarán',
        badge: 'Paseo Principal ⭐',
        isFeatured: true,
        images: [floripaCatamaran1, floripaCatamaran2, floripaCatamaran3, floripaCatamaran4, floripaCatamaran5].filter(Boolean),
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
        images: [floripaBarco1, floripaBarco2, floripaBarco3, floripaBarco4, floripaBarco5, floripaBarco6].filter(Boolean),
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
        images: [floripaCampeche1, floripaCampeche2].filter(Boolean),
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
        images: [floripaFrances1, floripaFrances2].filter(Boolean),
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
        images: [floripaPirata1].filter(Boolean),
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
        images: [galinhasMaragogi1, galinhasMaragogi2, galinhasMaragogi3].filter(Boolean),
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
        isFeatured: true,
        images: [galinhasCarneiros1, galinhasCarneiros2, galinhasCarneiros3].filter(Boolean),
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
        images: [galinhasSantoAleixo1, galinhasSantoAleixo2, galinhasSantoAleixo3].filter(Boolean),
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
        images: [galinhasBuggy1, galinhasBuggy2, galinhasBuggy3].filter(Boolean),
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
        images: [galinhasSnorkel1, galinhasSnorkel2, galinhasSnorkel3].filter(Boolean),
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

  const getWhatsAppTourLink = (tourName) => {
    const destino = sucursal.id === 'floripa' ? 'Florianópolis' : 'Porto de Galinhas';
    const text = `¡Hola ${sucursal.nombre}! Quiero consultar por la excursión: ${tourName} en ${destino}. ¿Me brindas más información y disponibilidad?`;
    return `https://wa.me/${sucursal.whatsapp}?text=${encodeURIComponent(text)}`;
  };

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
            <TourCard
              key={tour.id}
              tour={tour}
              colores={colores}
              t={t}
              onOpenModal={() => setSelectedModalTour(tour)}
              onOpenWhatsApp={onOpenWhatsApp}
            />
          ))}

          <div className={`bg-gradient-to-br ${colores.gradienteHero} rounded-3xl overflow-hidden shadow-md flex flex-col items-center justify-center p-8 text-white text-center min-h-[400px]`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-black leading-tight">
                {t.bannerTitulo}
              </h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {t.bannerTexto}
              </p>
              <button
                onClick={() => onOpenWhatsApp()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-2xl shadow-lg hover:bg-gray-100 transition-all text-sm mt-2"
              >
                <MessageCircle className={`w-4 h-4 ${colores.textSecundario} fill-current`} />
                <span>{t.bannerBoton}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {selectedModalTour && (
        <TourModal
          tour={selectedModalTour}
          colores={colores}
          onClose={() => setSelectedModalTour(null)}
          onOpenWhatsApp={onOpenWhatsApp}
        />
      )}
    </section>
  );
}

// ============================================
// COMPONENTE DE TARJETA CON CARRUSEL
// ============================================
function TourCard({ tour, colores, t, onOpenModal, onOpenWhatsApp }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const images = tour.images || [];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [hasMultipleImages, isPaused, images.length]);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border ${tour.isFeatured ? `${colores.borderPrimario} ring-2 ${colores.borderPrimario}/20` : 'border-gray-200/80'
        }`}
    >
      <div
        className="relative h-60 overflow-hidden bg-gray-100 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${tour.title} - Foto ${idx + 1}`}
            loading="lazy"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${idx === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              } group-hover:scale-110`}
            onError={(e) => {
              e.target.src = tour.fallbackImage;
            }}
          />
        ))}

        <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
          {tour.badge}
        </div>

        {tour.isFeatured && (
          <div className={`absolute top-4 right-4 ${colores.bgSecundario} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1 z-10 animate-pulse-badge`}>
            <Sparkles className="w-3.5 h-3.5" />
            Destacado
          </div>
        )}

        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-gray-900 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 hover:bg-white backdrop-blur-md text-gray-900 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`rounded-full transition-all duration-300 ${idx === currentIndex
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                  }`}
                aria-label={`Ir a foto ${idx + 1}`}
              />
            ))}
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
            onClick={onOpenModal}
            className={`flex-1 px-4 py-3 ${colores.bgSuave} ${colores.textPrimarioOscuro} font-bold rounded-xl text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5`}
          >
            <Info className="w-4 h-4" />
            <span>Info & Fotos</span>
          </button>

          <button
            onClick={() => onOpenWhatsApp(tour.title)}
            className={`flex-1 px-4 py-3 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-sm flex items-center justify-center gap-1.5`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Consultar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MODAL DE TOUR CON CARRUSEL MANUAL
// ============================================
function TourModal({ tour, colores, onClose, onOpenWhatsApp }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = tour.images || [];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative border border-gray-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 shrink-0 group">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${tour.title} - Foto ${idx + 1}`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              onError={(e) => {
                e.target.src = tour.fallbackImage;
              }}
            />
          ))}

          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg z-20"
            aria-label="Cerrar"
          >
            ✕
          </button>

          <div className={`absolute bottom-4 left-4 ${colores.bgSecundario} text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1 z-10 animate-pulse-badge`}>
            <Sparkles className="w-3.5 h-3.5" />
            {tour.badge}
          </div>

          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-gray-900 flex items-center justify-center shadow-lg z-10 transition-transform hover:scale-110"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-md text-gray-900 flex items-center justify-center shadow-lg z-10 transition-transform hover:scale-110"
                aria-label="Foto siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {hasMultipleImages && (
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-full z-10">
              {currentIndex + 1} / {images.length}
            </div>
          )}

          {hasMultipleImages && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${idx === currentIndex
                    ? 'w-6 h-2 bg-white'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                    }`}
                  aria-label={`Ir a foto ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6 space-y-4 overflow-y-auto">
          <h3 className="text-2xl font-black text-gray-900">{tour.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{tour.description}</p>

          <div className={`${colores.bgSuave} rounded-2xl p-4 space-y-2 border ${colores.borderPrimario}/20`}>
            <p className={`text-xs font-bold ${colores.textPrimarioOscuro} uppercase tracking-wide`}>Incluye en este paseo:</p>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-gray-700 font-medium">
              {tour.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className={`w-4 h-4 ${colores.textSecundario} shrink-0 mt-0.5`} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenWhatsApp(tour.title);
              }}
              className={`flex-1 py-3.5 ${colores.bgSecundario} ${colores.bgSecundarioHover} text-white font-bold rounded-xl text-center text-sm shadow-md transition-colors flex items-center justify-center gap-2`}
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Reservar este paseo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}