import { useState } from 'react';
import { LogoCommponent } from '../navbar/LogoCommponent';
import { MainMenu } from '../navbar/MainMenu';
import { MainButtons } from '../navbar/MainButtons';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      {/* Navbar principal */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between h-20">
          {/* Logo y nombre de empresa */}
         <LogoCommponent />
         <MainButtons setIsMenuOpen={setIsMenuOpen}/>
        </div>
      </div>

      {/* Menú desplegable */}
      <MainMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {/* Overlay para cerrar el menú */}
        {isMenuOpen && (
            <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setIsMenuOpen(false)}
            />
        )}
    </nav>
  );
};