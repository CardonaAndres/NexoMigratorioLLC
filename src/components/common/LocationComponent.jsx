import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';

export const LocationComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
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
          <iframe
            aria-label="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.6755546985432!2d-80.23400952554239!3d26.07685769551255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a9d2ba793c4b%3A0x99bd63515dc10968!2s3650%20Davie%20Rd%20%2362%2C%20Davie%2C%20FL%2033314%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1737575537704!5m2!1ses-419!2sco"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Información de contacto */}
        <div className="flex flex-col justify-between p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white h-[400px] md:h-[500px]">
          <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}>
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <MapPin className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Dirección</h3>
                <p className="text-gray-600">3650 Davie RD # 62 Davie,Fl 33314</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Phone className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Teléfono</h3>
                <p className="text-gray-600">+1(954) 9017771</p>
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
          </motion.div>

          {/* Botón al final */}
          <motion.button onClick={() => window.open(`https://wa.me/19549017771`, '_blank')}
            className="mt-auto w-full bg-red-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-red-700 transition-all duration-300"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} >
            <Navigation className="w-5 h-5" />
            <span>¿Necesitas ayuda para llegar?</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
