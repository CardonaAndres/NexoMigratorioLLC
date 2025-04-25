import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from '../../assets/imgs/LogoNexoMigratorio.webp';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export const Options = ({ onClose }) => {
  const [hoverVisa, setHoverVisa] = useState(false);
  const [hoverProcess, setHoverProcess] = useState(false);


  return (
    <section className="bg-white py-10 px-4 relative rounded-xl overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      
      {/* Logo area */}
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 rounded-full shadow-lg"
        >
          <img 
            src={Logo} 
            alt="Logo" 
            className="h-16 w-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = {Logo};
            }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-8"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-3"
          >
            ¿Qué servicio necesita?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Seleccione una de nuestras opciones especializadas para ayudarle con su trámite
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Option 1: Visa Americana */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl"
            onMouseEnter={() => setHoverVisa(true)}
            onMouseLeave={() => setHoverVisa(false)}
          >
            <Link to="/visas" className="block" onClick={onClose}>
              <div 
                className={`${
                  hoverVisa 
                    ? "bg-gradient-to-r from-blue-800 to-blue-600" 
                    : "bg-gradient-to-r from-blue-700 to-blue-900"
                } text-white rounded-xl shadow-xl p-8 transition-all duration-300 h-full flex flex-col relative z-10`}
              >
                {/* Animated circle decorations */}
                <motion.div 
                  className="absolute -bottom-16 -right-16 w-48 h-48 bg-blue-500 rounded-full opacity-20"
                  animate={{
                    scale: hoverVisa ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
                <motion.div 
                  className="absolute -top-16 -left-16 w-48 h-48 bg-blue-600 rounded-full opacity-20"
                  animate={{
                    scale: hoverVisa ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                ></motion.div>

                <div className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-6 mx-auto shadow-inner">
                  <ArrowRight size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-center">Visa Americana</h3>
                <p className="text-blue-100 mb-6 text-center">
                  Obtén asesoría especializada para tu trámite de visa americana con nuestros expertos
                </p>
                
                <ul className="mb-6 text-blue-100">
                  <li className="mb-2 flex items-start">
                    <div className="mr-2 mt-1">✓</div>
                    <div>15 años de experiencia en trámites exitosos</div>
                  </li>
                  <li className="mb-2 flex items-start">
                    <div className="mr-2 mt-1">✓</div>
                    <div>Asesoría en formularios DS-160</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1">✓</div>
                    <div>Preparación para entrevistas consulares</div>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${
                      hoverVisa 
                        ? "bg-white text-blue-800" 
                        : "bg-blue-600 text-white border border-blue-400"
                    } font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center`}
                  >
                    Solicitar Asesoría
                    <ArrowRight className="ml-2" size={18} />
                  </motion.button>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Option 2: Procesos Migratorios */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl"
            onMouseEnter={() => setHoverProcess(true)}
            onMouseLeave={() => setHoverProcess(false)}
          >
            <div onClick={onClose} className="block">
              <div 
                className={`${
                  hoverProcess 
                    ? "bg-gradient-to-r from-gray-200 to-gray-100 border-blue-400" 
                    : "bg-white border-gray-200"
                } border-2 rounded-xl shadow-lg p-8 transition-all duration-300 h-full flex flex-col relative z-10`}
              >
                <div className={`flex items-center justify-center w-20 h-20 rounded-full mb-6 mx-auto shadow-inner ${
                  hoverProcess ? "bg-blue-100" : "bg-gray-100"
                }`}>
                  <FileText size={30} className={`${hoverProcess ? "text-blue-700" : "text-gray-600"}`} />
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 text-center ${hoverProcess ? "text-blue-800" : "text-gray-800"}`}>
                  Procesos Migratorios en EE.UU.
                </h3>
                
                <p className="text-gray-600 mb-6 text-center">
                  Asesoría legal para residencia permanente, ciudadanía y otros trámites migratorios
                </p>
                
                <ul className="mb-6 text-gray-700">
                  <li className="mb-2 flex items-start">
                    <div className={`mr-2 mt-1 ${hoverProcess ? "text-blue-600" : "text-gray-500"}`}>✓</div>
                    <div>Residencia permanente (Green Card)</div>
                  </li>
                  <li className="mb-2 flex items-start">
                    <div className={`mr-2 mt-1 ${hoverProcess ? "text-blue-600" : "text-gray-500"}`}>✓</div>
                    <div>Ciudadanía americana</div>
                  </li>
                  <li className="flex items-start">
                    <div className={`mr-2 mt-1 ${hoverProcess ? "text-blue-600" : "text-gray-500"}`}>✓</div>
                    <div>Permisos de trabajo y Asilos</div>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <motion.button onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${
                      hoverProcess 
                        ? "bg-blue-700 text-white" 
                        : "bg-gray-100 text-gray-800"
                    } font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center`}
                  >
                    Conocer Más
                    <ArrowRight className="ml-2" size={18} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* WhatsApp Button */}
        <motion.div
          variants={itemVariants}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">¿Tiene preguntas? Contáctenos directamente</p>
          <motion.a
            href="https://wa.me/19549017771"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consulta por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};