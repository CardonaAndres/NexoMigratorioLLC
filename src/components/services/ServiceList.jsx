import { ServiceCard } from './ServiceCard';
import { HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServiceList = ({ services = [] }) => {

  return (
    <div className="py-20 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} className="text-4xl font-bold text-gray-900 mb-4"
            >
                Áreas de acompañamiento
            </motion.h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full" />
          <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }} className="max-w-2xl mx-auto text-gray-600 text-lg"
          >
            Deja que nuestra experiencia sea tu guía en el proceso migratorio
          </motion.p>
            
        </div>
        <div className="max-w-7xl mx-auto px-4 my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {services.map((service, index) => (
                <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    index={index}
                />
                ))}
            </div>

                      {/* Botón de contacto con asesor */}
          <div className="text-center mt-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => window.open(`https://wa.me/19549552933`, '_blank')}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium text-lg hover:bg-blue-700 transition-all duration-300"
            >
              <HelpCircle className="mr-3 h-6 w-6" />
              Tengo dudas, ¡Contáctame con un asesor!
            </motion.button>
          </div>
         </div>

      </div>
    </div>
  )
}
