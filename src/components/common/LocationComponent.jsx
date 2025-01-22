import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin,  Clock, Phone, Mail, Navigation } from 'lucide-react';

export const LocationComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div className="w-full max-w-6xl mx-auto p-4 md:p-8"
      initial="hidden" animate="visible" variants={containerVariants}>
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Nuestra Ubicación
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Visítenos en nuestras oficinas principales donde nuestro equipo de expertos
          está listo para ayudarte con todos tus trámites migratorios.
        </p>
      </div>

      <motion.div className="grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden"
        variants={cardVariants} whileHover="hover" onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}>
        {/* Mapa */}
        <div className="w-full h-[400px] md:h-[500px] relative">
          <iframe  aria-label='Mapa'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6866654864893!2d-58.438559024715726!3d-34.58922465669151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f12e398ecd%3A0x98abf435fbfab70!2sNEXO%20MIGRATORIO!5e0!3m2!1ses-419!2sar!4v1705882206693!5m2!1ses-419!2sar"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Información de contacto */}
        <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <MapPin className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                <p className="text-gray-600">Av. Corrientes 3169</p>
                <p className="text-gray-600">Piso 7, Oficina 741</p>
                <p className="text-gray-600">Buenos Aires, Argentina</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Clock className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Horario</h3>
                <p className="text-gray-600">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sábado: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Domingo: Cerrado</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                <p className="text-gray-600">+1(954) 9552933</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Mail className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600">info@nexomigratorio.com</p>
              </div>
            </div>

            <motion.button onClick={() => window.open(`https://wa.me/19549552933`, '_blank')}  className="mt-6 w-full bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-700 transition-all duration-300"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Navigation className="w-5 h-5" />
              <span> ¿Necesitas ayuda para llegar?</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
