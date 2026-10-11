import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToursSection from './components/ToursSection';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import WhatsAppModal from './components/WhatsAppModal';
import { getSucursal } from './config/sucursales';

export default function App({ sucursalId = 'floripa' }) {
  const sucursal = getSucursal(sucursalId);
  const [modalOpen, setModalOpen] = useState(false);
  const [tourSeleccionado, setTourSeleccionado] = useState(null);

  // Función para abrir el modal (puede recibir un nombre de tour opcional)
  const abrirModal = (tourNombre = null) => {
    setTourSeleccionado(tourNombre);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header sucursal={sucursal} onOpenWhatsApp={() => abrirModal()} />

      <main>
        <Hero sucursal={sucursal} onOpenWhatsApp={() => abrirModal()} />
        <ToursSection sucursal={sucursal} onOpenWhatsApp={abrirModal} />
        <Testimonials sucursal={sucursal} />
        <WhyChooseUs sucursal={sucursal} />
        <BookingForm sucursal={sucursal} />
      </main>

      <Footer sucursal={sucursal} />
      <WhatsAppFloat sucursal={sucursal} onOpenWhatsApp={() => abrirModal()} />

      {/* Modal de WhatsApp */}
      <WhatsAppModal
        sucursal={sucursal}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        tourNombre={tourSeleccionado}
      />
    </div>
  );
}