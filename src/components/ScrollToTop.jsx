import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop({ sucursal }) {
  const [isVisible, setIsVisible] = useState(false);
  const { colores } = sucursal;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-24 right-6 z-40 w-11 h-11 ${colores.bgPrimario} ${colores.bgPrimarioHover} text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all`}
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}