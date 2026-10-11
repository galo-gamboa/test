// src/pages/SeleccionSucursal.jsx
import { useNavigate } from 'react-router-dom';
import { sucursales } from '../config/sucursales';

export default function SeleccionSucursal() {
  const navigate = useNavigate();
  const listaSucursales = Object.values(sucursales);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
            ¿Dónde te gustaría vivir
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-orange-400">
              las mejores experiencias?
            </span>
          </h1>
          <p className="text-slate-400 text-lg">
            Elegí tu destino y descubrí todo lo que tenemos para vos
          </p>
        </div>

        {/* Tarjetas de selección */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {listaSucursales.map((sucursal) => (
            <button
              key={sucursal.id}
              onClick={() => navigate(`/${sucursal.id}`)}
              className={`group relative overflow-hidden rounded-3xl p-8 sm:p-10 text-left transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-gradient-to-br ${
                sucursal.id === 'floripa'
                  ? 'from-sky-600 via-teal-600 to-emerald-600'
                  : 'from-orange-600 via-amber-600 to-teal-600'
              }`}
            >
              {/* Emoji grande de fondo */}
              <div className="absolute -top-4 -right-4 text-9xl opacity-20 group-hover:opacity-30 transition-opacity">
                {sucursal.emoji}
              </div>

              {/* Contenido */}
              <div className="relative z-10">
                <div className="text-5xl mb-4">{sucursal.emoji}</div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
                  {sucursal.nombre}
                </h2>
                <p className="text-white/90 text-sm sm:text-base mb-6">
                  {sucursal.descripcion}
                </p>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white font-bold text-sm group-hover:bg-white/30 transition-all">
                  <span>Explorar experiencias</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-12">
          Atención personalizada en español · Reservas por WhatsApp
        </p>

      </div>
    </div>
  );
}