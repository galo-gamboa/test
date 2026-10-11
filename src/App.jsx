import Header from './components/Header';
import Hero from './components/Hero';
import ToursSection from './components/ToursSection';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import { getSucursal } from './config/sucursales';

export default function App({ sucursalId = 'floripa' }) {
  const sucursal = getSucursal(sucursalId);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Top Header Navigation */}
      <Header sucursal={sucursal} />

      {/* Hero Banner */}
      <main>
        <Hero sucursal={sucursal} />

        {/* Featured Tours Catalog */}
        <ToursSection sucursal={sucursal} />

        {/* Travelers WhatsApp Testimonials */}
        <Testimonials sucursal={sucursal} />

        {/* Why Choose Us Core Value Props */}
        <WhyChooseUs sucursal={sucursal} />

        {/* Instant WhatsApp Reservation Form */}
        <BookingForm sucursal={sucursal} />
      </main>

      {/* Footer */}
      <Footer sucursal={sucursal} />

      {/* Floating Action WhatsApp Button */}
      <WhatsAppFloat sucursal={sucursal} />
    </div>
  );
}