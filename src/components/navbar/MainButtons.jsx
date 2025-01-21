import { Menu, Home, Phone, Info } from 'lucide-react'; 
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import { router } from '../../configs/config.js'; 

export const MainButtons = ({ setIsMenuOpen }) => {
  const mainButtons = [
    { name: 'Inicio', to: router.welcome, icon: <Home size={20} /> },  
    { name: 'Contacto', to: router.contact , icon: <Phone size={20} /> },
    { name: 'Sobre Nosotros', to: router.aboutUs, icon: <Info size={20} /> }
  ];

  return (
    <>
      {/* Botones desktop */}
      <div className="hidden md:flex items-center space-x-4">
        {mainButtons.map((button, index) => (
          <motion.div key={button.name} whileHover={{ scale: 1.1 }} >
            <Link to={button.to} 
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-red-600 text-white border-2 border-transparent hover:bg-red-700 hover:border-red-600'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {button.icon} 
              <span>{button.name}</span> 
            </Link>
          </motion.div>
        ))}
        <motion.button
          aria-label="Wacht Button"
          onClick={() => setIsMenuOpen(true)}
          className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.1 }} 
        >
          <Menu size={24} />
        </motion.button>
      </div>

      {/* Botón menú móvil */}
      <div className="md:hidden flex items-center">
        <motion.button
          aria-label="Wacht Button"
          onClick={() => setIsMenuOpen(true)}
          className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          whileHover={{ scale: 1.1 }} // Animación de escala en el botón de menú móvil
        >
          <Menu size={24} />
        </motion.button>
      </div>
    </>
  );
};
