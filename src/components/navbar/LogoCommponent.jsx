import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/LogoNexoMigratorio.webp';

export const LogoCommponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getImageDimensions = () => {
    if (windowWidth < 660) { // móvil
      return 'h-9 w-auto';
    } else if (windowWidth < 1024) { // tablet
      return 'h-16 w-auto';
    }
    return 'h-20 w-auto'; // desktop
  };

  return (
    <Link to="/" className="flex items-center">
      <div className="flex-shrink-0 flex items-center">
        <img className={`${getImageDimensions()} object-contain`} src={Logo} 
          alt="Logo Nexo Migratorio" loading="lazy" decoding="async"draggable="false"
        />
        <div className="ml-3">
          <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
            Nexo Migratorio LCC
          </h1>
        </div>
      </div>
    </Link>
  )
}
