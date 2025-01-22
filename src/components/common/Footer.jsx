import {  Phone, Mail,  Globe, ChevronRight } from 'lucide-react';
import { useServices } from '../../hooks/useServices';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { services } = useServices();
    
    return (
       <footer className="bg-blue-950 text-white">            
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Columna de información de la empresa */}
            <div className="space-y-6">
                <div className="flex items-center space-x-3">              
                    <div>
                        <h3 className="text-xl font-bold"> Nexo Migratorio LLC </h3>
                        <p className="text-blue-300 text-sm">Tu puente hacia el futuro</p>
                    </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                Brindamos servicios migratorios profesionales y personalizados, 
                facilitando tu proceso de migración con experticia y dedicación.
                </p>
            </div>

            <div>
                <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
                <ul className="space-y-4">
                {services.map((service) => (
                    <li key={service.title}>
                    <span aria-label={service.title} 
                        className="inline-flex items-center text-gray-300 hover:text-blue-300 transition-colors">
                        <ChevronRight size={16} className="mr-2" />
                        {service.title}
                    </span>
                    </li>
                ))}
                </ul>
            </div>

            {/* Columna de contacto */}
            <div>
                <h4 className="text-lg font-semibold mb-6">Contacto</h4>
                <ul className="space-y-4">
                <li className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-blue-300" />
                    <span className="text-gray-300">+1(954) 9552933</span>
                </li>
                <li className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-blue-300" />
                    <a href="mailto:info@nexomigra.com" className="text-gray-300 hover:text-blue-300 transition-colors">
                    info@nexomigratorio.com
                    </a>
                </li>
                </ul>
            </div>

            <div>
                <h4 className="text-lg font-semibold mb-6">¿Por qué nosotros?</h4>
                <div className="space-y-6">
                <div className="p-4 bg-blue-900/30 rounded-lg">
                    <Globe className="h-6 w-6 text-blue-300 mb-2" />
                    <h5 className="font-medium mb-1">Asesoría en migración</h5>
                    <p className="text-sm text-gray-300">
                    Somos una empresa especializada en la preparación profesional de documentos para su proceso migratorio, cumpliendo con todas las normativas vigentes del USCIS, el Departamento de Estado, el Sistema Judicial y el Gobierno Federal. 
                    </p>
                </div>
                <div className="p-4 bg-blue-900/30 rounded-lg">
                    <p className="text-sm text-gray-300">
                        Deja que nuestra experiencia sea tu guía en el proceso migratorio
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>

        <div className="border-t border-blue-900">
            <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-sm text-gray-400">
                © {currentYear} NexoMigra. Todos los derechos reservados.
                </p>
                <div className="flex space-x-6">    
                </div>
            </div>
            </div>
        </div>
       </footer> 
    )
}
