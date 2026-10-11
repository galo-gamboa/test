import { useNavigate } from 'react-router-dom';
import { sucursales } from '../config/sucursales';
import { MapPin, ArrowRight, Waves, Sun } from 'lucide-react';

// Imágenes de fondo para cada tarjeta
import heroFloripa from '../assets/excursiones/floripa-catamaran.jpg';
import heroGalinhas from '../assets/excursiones/galinhas-maragogi.jpg';

export default function SeleccionSucursal() {
  const navigate = useNavigate();
  const listaSucursales = Object.values(sucursales);

  const imagenes = {
    floripa: heroFloripa,
    galinhas: heroGalinhas,
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 flex items-center justify-center p-4">

      {/* Fondo decorativo con gradientes */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-slate-900 to-orange-950"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      {/* Iconos flotantes decorativos */}
      <Waves className="absolute top-20 left-20 w-8 h-8 text-sky-400/30 animate-pulse hidden lg:block" />
      <Sun className="absolute bottom-20 right-20 w-8 h-8 text-orange-400/30 animate-pulse hidden lg:block" />
      <MapPin className="absolute top-1/3 right-32 w-6 h-6 text-purple-400/20 animate-pulse hidden lg:block" />

      <div className="max-w-6xl w-full relative z-10">

        {/* Título */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-white/80 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Experiencias en Brasil 🇧🇷
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
            ¿Dónde te gustaría vivir
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 via-amber-400 to-orange-400">
              las mejores experiencias?
            </span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Elegí tu destino y descubrí todo lo que tenemos preparado para vos
          </p>
        </div>

        {/* Tarjetas de selección */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {listaSucursales.map((sucursal) => (
            <button
              key={sucursal.id}
              onClick={() => navigate(`/${sucursal.id}`)}
              className="group relative overflow-hidden rounded-3xl h-[450px] text-left transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-xl"
            >
              {/* Imagen de fondo */}
              <img
                src={imagenes[sucursal.id]}
                alt={sucursal.nombre}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay con gradiente de color */}
              <div className={`absolute inset-0 ${
                sucursal.id === 'floripa'
                  ? 'bg-gradient-to-t from-sky-950 via-sky-900/70 to-transparent'
                  : 'bg-gradient-to-t from-orange-950 via-orange-900/70 to-transparent'
              }`}></div>

              {/* Overlay adicional al hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                sucursal.id === 'floripa'
                  ? 'bg-gradient-to-t from-sky-600/40 to-transparent'
                  : 'bg-gradient-to-t from-orange-600/40 to-transparent'
              }`}></div>

              {/* Contenido */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">

                {/* Logo arriba */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md p-2 shadow-lg group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                    <img
                      src={sucursal.logo}
                      alt={sucursal.nombre}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerText = sucursal.id === 'floripa' ? 'EF' : 'EG';
                        e.target.parentElement.className = 'w-14 h-14 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-center font-black text-xl text-gray-900';
                      }}
                    />
                  </div>
                  <div className="text-4xl drop-shadow-lg">{sucursal.emoji}</div>
                </div>

                {/* Texto abajo */}
                <div>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 drop-shadow-lg">
                    {sucursal.nombre}
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base mb-6 max-w-sm drop-shadow">
                    {sucursal.descripcion}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-2xl font-bold text-sm shadow-xl group-hover:bg-gray-100 group-hover:gap-3 transition-all">
                    <span>Explorar experiencias</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>

              {/* Borde de color decorativo */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                sucursal.id === 'floripa' ? 'bg-sky-400' : 'bg-orange-400'
              }`}></div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            <span>Atención personalizada en español</span>
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            <span>Reservas por WhatsApp</span>
          </p>
        </div>

      </div>
    </div>
  );
}