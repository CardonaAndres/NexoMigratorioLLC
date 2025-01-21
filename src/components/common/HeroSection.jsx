import HeroIMG from '../../assets/imgs/HeroIMG.webp';
import { Link } from 'react-router-dom';
import { router } from '../../configs/config.js';
import { ArrowRight, Globe2 } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Imagen de fondo con efecto parallax */}
      <img 
        loading="lazy" 
        src={HeroIMG} 
        alt="Hero background" 
        className="w-full h-full object-cover object-center sm:object-top absolute inset-0 
          scale-105 transition-transform duration-300 hover:scale-100" 
      />
    
      {/* Overlays mejorados para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent opacity-60" />

      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />

      {/* Contenedor principal con mejor estructura */}
      <div className="absolute inset-0 flex items-end sm:items-center justify-start px-4 sm:px-8 md:px-12 pb-8 sm:pb-0">
        <div className="w-full max-w-2xl backdrop-blur-md rounded-xl 
          bg-gradient-to-r from-white/10 to-white/5 
          border border-white/10 shadow-2xl
          transform transition-all duration-300 hover:scale-[1.02]">
          
          <div className="p-6 sm:p-8">
            {/* Badge superior */}
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full 
              bg-blue-500/20 border border-blue-500/30 text-white/90 text-sm">
              <Globe2 className="w-4 h-4 mr-2" />
              Servicios Migratorios
            </div>

            <div className="space-y-6">
              {/* Encabezado con animación */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white 
                  leading-tight animate-fade-in">
                  Asesoría Completa y Personalizada para tu Proceso Migratorio en EE.UU.
                </h2>
                <div className="w-20 h-1 bg-blue-500/80 rounded-full 
                  transform origin-left transition-all duration-300 hover:scale-x-150" />
              </div>
              
              {/* Descripción limpia */}
              <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                Contamos con un equipo especializado que te guiará en cada paso del proceso 
                migratorio a los Estados Unidos. Desde la solicitud de visas hasta el 
                acompañamiento en entrevistas consulares, te brindamos asesoría para que tu 
                trámite sea lo más sencillo y seguro posible.
              </p>
              
              {/* Botones con mejores efectos */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link 
                  to={router.contact} 
                  className="group inline-flex items-center justify-center px-6 py-3 
                    bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 
                    text-white rounded-lg font-medium 
                    transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span>Comenzar Ahora</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 
                    group-hover:translate-x-1" />
                </Link>
                <a 
                  href="#Servicios"
                  className="px-6 py-3 text-white text-center font-medium 
                    border border-white/20 rounded-lg
                    backdrop-blur-sm hover:bg-white/10 
                    transition-all duration-300 hover:-translate-y-0.5"
                >
                  Explorar Servicios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};