import { X, Home, Briefcase, Phone, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { router } from '../../configs/config.js';

export const MainMenu = ({ isMenuOpen, setIsMenuOpen }) => {

  const menuItems = [
    { name: 'Inicio', to: router.welcome, icon: <Home size={24} /> },  
    { name: 'Servicios', to: router.ourServices, icon: <Briefcase size={24} /> },
    { name: 'Contacto', to: router.contact, icon: <Phone size={24} /> },
    { name: 'Sobre Nosotros', to: router.aboutUs, icon: <Info size={24} /> }
  ];

  return (
    <motion.div 
      className={`fixed inset-y-0 right-0 bg-white w-full md:w-1/2 shadow-xl z-50`} 
      initial={{ x: '100%' }} 
      animate={{ x: isMenuOpen ? '0' : '100%' }} 
      exit={{ x: '100%' }} 
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 flex justify-end">
          <motion.button aria-label="Close Menu" onClick={() => setIsMenuOpen(false)} 
            className="p-2 rounded-md text-gray-700 hover:text-white hover:bg-red-800 transition-all duration-300" whileHover={{ scale: 1.1 }}
          >
            <X size={24} />
          </motion.button>
        </div>
        <div className="px-4 py-6 space-y-6">
          {menuItems.map((item) => (
            <motion.div key={item.name}>
              <Link to={item.to} onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-white hover:bg-red-600 rounded-md border-2 border-transparent hover:border-red-800 transition-all duration-300">
                
                <div className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
