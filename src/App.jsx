import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToursSection from './components/ToursSection';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import GallerySection from './components/GallerySection';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-sky-500 selection:text-white">
      {/* Top Header Navigation */}
      <Header />

      {/* Hero Banner */}
      <main>
        <Hero />

        {/* Featured Tours Catalog */}
        <ToursSection />

        {/* Travelers WhatsApp Testimonials */}
        <Testimonials />

        {/* Why Choose Us Core Value Props */}
        <WhyChooseUs />

        {/* Photo Gallery & Instagram Widget */}
        <GallerySection />

        {/* Instant WhatsApp Reservation Form */}
        <BookingForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
}