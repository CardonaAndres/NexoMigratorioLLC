import { Link } from 'react-router-dom';
import { router } from '../../configs/config.js';
import { ArrowRight, Globe2 } from 'lucide-react';

export const Card = () => {
  return (
    <div className="w-full md:w-7/12 backdrop-blur-md rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 shadow-2xl transform transition-all 
    duration-300 hover:scale-[1.02] ">
        <div className="p-6 sm:p-8">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full 
                bg-blue-500/20 border border-blue-500/30 text-white/90 text-sm">
                <Globe2 className="w-4 h-4 mr-2" />
                Servicios Migratorios
            </div>

            <div className="space-y-6">
                <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white 
                        leading-tight animate-fade-in">
                        Asesoría Completa y Personalizada para tu Proceso Migratorio en EE.UU.
                    </h2>
                    <div className="w-20 h-1 bg-blue-500/80 rounded-full transform origin-left transition-all duration-300 hover:scale-x-150" />
                </div>
                
                <p className="text-white sm:text-lg leading-relaxed">
                Contamos con un equipo especializado que te guiará en cada paso del proceso 
                migratorio a los Estados Unidos. Desde la solicitud de visas hasta el 
                acompañamiento en entrevistas consulares, te brindamos asesoría para que tu 
                trámite sea lo más sencillo y seguro posible.
                </p>
                
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
  )
}


