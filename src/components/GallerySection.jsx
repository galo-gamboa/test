import React, { useState } from 'react';
import { Camera, AtSign, ExternalLink, MessageCircle } from 'lucide-react';

export default function GallerySection() {
  const images = [
    {
      src: "https://www.toniturismo.com/assets/hero-catamaran-ClRjo0ot.jpg",
      title: "Catamarán navegando en aguas turquesa",
      fallback: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://www.toniturismo.com/__l5e/assets-v1/bbb4cf39-1c09-4444-aabf-3fc27a946088/tour-catamaran-official.jpg",
      title: "Cascada y paseos náuticos",
      fallback: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://www.toniturismo.com/__l5e/assets-v1/c43ef9fd-e544-4910-8b80-7660affd9403/tour-campeche-official.jpg",
      title: "Playa de arena blanca en Ilha do Campeche",
      fallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://www.toniturismo.com/assets/tour-campeche-premium-DA2J0UFM.jpg",
      title: "Snorkel en aguas cristalinas",
      fallback: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://www.toniturismo.com/assets/tour-camboriu-DjC-Bp-8.jpg",
      title: "Vista aérea de Balneário Camboriú",
      fallback: "https://images.unsplash.com/photo-1476514525535-ce74f45814e0?auto=format&fit=crop&w=800&q=80"
    },
    {
      src: "https://www.toniturismo.com/__l5e/assets-v1/fad5723c-c632-4bc6-bf17-f6855b401347/tour-buceo.jpg",
      title: "Buceo con tortugas marinas",
      fallback: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <section id="galeria" className="py-20 bg-gray-900 text-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-900/60 border border-sky-700 text-sky-300 rounded-full text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4" />
            <span>Galería de Fotos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Momentos que vas a vivir con nosotros
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Fotos reales tomadas durante nuestros tours por las paradisíacas costas de Florianópolis.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxImg(item)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer bg-gray-800 border border-gray-800 shadow-lg hover:shadow-sky-500/10 transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = item.fallback;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-bold tracking-wide">{item.title}</p>
                <p className="text-xs text-sky-400 flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Haz clic para ampliar</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Widget Box */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-amber-900/40 border border-pink-500/30 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-5 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-16 h-16 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
              <AtSign className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-block bg-pink-500 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded mb-1">
                NEW
              </div>
              <h3 className="text-2xl font-black">📸 ¡Seguinos en Instagram!</h3>
              <p className="text-gray-300 text-sm mt-1">
                <span className="text-pink-400 font-bold">@toni.turismo.floripa</span> - fotos y videos reales actualizados de cada paseo.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://instagram.com/toni.turismo.floripa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-6 py-3.5 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Ver Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-gray-800"
              onError={(e) => {
                e.target.src = lightboxImg.fallback;
              }}
            />
            <p className="mt-4 text-white font-bold text-base text-center">{lightboxImg.title}</p>
            <p className="text-xs text-gray-400 mt-1">Haz clic en cualquier lugar para cerrar</p>
          </div>
        </div>
      )}
    </section>
  );
}