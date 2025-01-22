import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, FileText, Scale, Briefcase } from 'lucide-react';
import { useState, useEffect, createElement } from 'react';

export const ServicesCarousel = () => {
  const services = [
    { title: "Peticiones Familiares", icon: Users },
    { title: "Asilo", icon: FileText },
    { title: "Permisos De Trabajo", icon: Scale },
    { title: "Residencia Permanente", icon: Briefcase },
    { title: "Ciudadanía", icon: Briefcase },
    { title: "TPS", icon: Users },
    { title: "Parole Humanitario", icon: FileText },
    { title: "⁠Visas", icon: Scale },
    { title: "⁠Aplicación Por Bajos Recursos", icon: Briefcase },
    { title: "Parole Con ICE", icon: Briefcase },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <div className="w-full bg-white shadow-md py-2">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-4">
        {/* Botón Izquierda */}
        <button
          onClick={handlePrevious}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Servicio Actual */}
        <div className="flex-1 mx-4 overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2"
            >
              {createElement(services[currentIndex].icon, {
                className: "w-5 h-5 text-blue-600"
              })}
              <h2 className="text-sm font-medium text-gray-800">
                {services[currentIndex].title}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botón Derecha */}
        <button
          onClick={handleNext}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Next service"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};
