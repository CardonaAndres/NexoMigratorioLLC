import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const Background = () => {
  const [particles, setParticles] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Lista de imágenes de fondo
  const backgroundImages = [
    "https://media.viajando.travel/p/b48638cdfef102ecbe71175f288ded53/adjuntos/236/imagenes/000/796/0000796917/1200x675/smart/disneyland-resort-california-70-aniversario-2jpg.jpg",
    "https://live.staticflickr.com/2860/11814678723_9a4860991e_b.jpg",
    "https://www.benoitproperties.com/wp-content/uploads/2024/01/miami-living.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
   
  ];

  // Generar partículas
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      const particleCount = window.innerWidth < 768 ? 30 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 5 + 1,
          duration: Math.random() * 20 + 10
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    
    const handleResize = () => {
      generateParticles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cambiar imagen de fondo cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Slider de imágenes de fondo */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImageIndex === index ? 1 : 0 
            }}
            transition={{ duration: 1 }}
          >
            <img 
              src={image} 
              alt={`Background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Partículas animadas */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-10"
          style={{
            left: `${particle.x}%`, 
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            zIndex: 1
          }}
          animate={{
            top: [`${particle.y}%`, `${(particle.y + 20) % 100}%`, `${particle.y}%`],
            left: [`${particle.x}%`, `${(particle.x + 15) % 100}%`, `${particle.x}%`],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </>
  );
};