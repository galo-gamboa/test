import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sucursales } from '../config/sucursales';
import { ArrowRight } from 'lucide-react';

// Imágenes de fondo para cada destino
import imgFloripa from '../assets/seleccion-floripa.jpg';
import imgGalinhas from '../assets/seleccion-galinhas.jpg';

// Logos
import logoFloripa from '../assets/logo-floripa.png';
import logoGalinhas from '../assets/logo-galinhas.png';

export default function SeleccionSucursal() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(null);

  const imagenes = {
    floripa: imgFloripa,
    galinhas: imgGalinhas,
  };

  const logos = {
    floripa: logoFloripa,
    galinhas: logoGalinhas,
  };

  const destinos = [
    {
      id: 'floripa',
      nombre: sucursales.floripa.nombre,
      subtitulo: 'Florianópolis, Santa Catarina',
      descripcion: 'Playas paradisíacas, catamarán y naturaleza única',
      color: 'from-slate-950/40 via-transparent to-transparent',
      accent: 'bg-sky-400',
      hoverColor: 'from-sky-500/5 to-transparent',
    },
    {
      id: 'galinhas',
      nombre: sucursales.galinhas.nombre,
      subtitulo: 'Porto de Galinhas, Pernambuco',
      descripcion: 'Piscinas naturales, Maragogi y el Caribe brasileño',
      color: 'from-slate-950/40 via-transparent to-transparent',
      accent: 'bg-orange-400',
      hoverColor: 'from-orange-500/5 to-transparent',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row overflow-hidden">

      {destinos.map((destino) => (
        <button
          key={destino.id}
          onClick={() => navigate(`/${destino.id}`)}
          onMouseEnter={() => setHover(destino.id)}
          onMouseLeave={() => setHover(null)}
          className={`relative overflow-hidden group transition-all duration-700 ease-out
            h-[50vh] min-h-[400px] md:min-h-0 md:h-screen
            ${hover === destino.id ? 'md:flex-[1.4]' : hover ? 'md:flex-[0.6]' : 'md:flex-1'}
            flex-1
          `}
        >
          {/* Imagen de fondo */}
          <img
            src={imagenes[destino.id]}
            alt={destino.nombre}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out ${
              hover === destino.id ? 'scale-110' : 'scale-100'
            }`}
          />

          {/* Overlay oscuro con gradiente */}
          <div className={`absolute inset-0 bg-gradient-to-t ${destino.color}`}></div>

          {/* Overlay adicional al hover */}
          <div className={`absolute inset-0 bg-gradient-to-t ${destino.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

          {/* Contenido */}
          <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16 text-left">

            {/* Logo */}
            <div className="mb-4 sm:mb-6">
              <img
                src={logos[destino.id]}
                alt={destino.nombre}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Subtítulo (ubicación) */}
            <p className="text-white/70 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] font-bold mb-2 sm:mb-3">
              {destino.subtitulo}
            </p>

            {/* Título grande */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 sm:mb-4 leading-[1.05] drop-shadow-2xl">
              {destino.nombre}
            </h2>

            {/* Descripción */}
            <p className="text-white/90 text-xs sm:text-sm md:text-lg mb-4 sm:mb-8 max-w-md drop-shadow-lg">
              {destino.descripcion}
            </p>

            {/* Botón "Explorar" */}
            <div className={`inline-flex items-center gap-2 sm:gap-3 bg-white text-gray-900 px-4 py-3 sm:px-6 sm:py-4 rounded-2xl font-bold text-xs sm:text-sm md:text-base shadow-2xl transition-all duration-500 self-start group-hover:gap-5 animate-pulse-subtle`}>
              <span>Explorar experiencias</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </div>

          </div>

          {/* Barra de color inferior */}
          <div className={`absolute bottom-0 left-0 h-1 ${destino.accent} transition-all duration-700 ${
            hover === destino.id ? 'w-full' : 'w-0'
          }`}></div>

        </button>
      ))}

    </div>
  );
}