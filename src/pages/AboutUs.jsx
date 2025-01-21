import { Award, Clock, Users, Shield, Globe, CheckCircle,Building, Briefcase, FileCheck} from 'lucide-react';
import { useEffect } from 'react';

export const AboutUs = () => {

    useEffect(() => {
        document.title = 'Quienes Somos - Nexo Migratorio LLC'
    }, []);

    const qualities = [
        {
          icon: Shield,
          title: "Confidencialidad Total",
          description: "Protegemos tu información personal y documentos con los más altos estándares de seguridad."
        },
        {
          icon: Clock,
          title: "Atención 24/7",
          description: "Disponibles para asistirte en cualquier momento, respetando diferentes zonas horarias."
        },
        {
          icon: Users,
          title: "Equipo Multilingüe",
          description: "Nuestro personal domina múltiples idiomas para una comunicación efectiva."
        },
      ];
    
      const advantages = [
        {
          icon: Building,
          title: "Simplificamos y facilitamos el proceso",
          description: "Los procesos migratorios pueden ser complejos y estresantes. Nosotros los simplificamos, brindándote explicaciones claras y pasos detallados para que no queden dudas."
        },
        {
          icon: FileCheck,
          title: "Efectivo y Eficiente",
          description: "Ofrecemos un servicio ágil, claro y completo, para que obtenga los resultados que merece de manera sencilla."
        },
        {
          icon: Briefcase,
          title: "Económico",
          description: "Contamos con precios accesibles y garantizamos los resultados. Al contratar nuestros servicios, siempre podrá contar con nuestra disponibilidad, asegurando la máxima calidad."
        }
      ];

      return (
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Nexus Migratorio LLC
            </h1>
            <div className="w-24 h-1 bg-red-400 mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa especializada en la preparación profesional de documentos para su proceso migratorio, cumpliendo con todas las normativas vigentes del USCIS, el Departamento de Estado, el Sistema Judicial y el Gobierno Federal. Si está interesado en regularizar su estatus migratorio, obtener un permiso de trabajo o traer a un familiar de manera legal a los Estados Unidos, estamos aquí para ayudarle. Contáctenos sin compromiso y le atenderemos por teléfono o agendaremos una cita según su disponibilidad y preferencia.
            </p>
          </div>
    
          {/* Qualities Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">Nuestras Cualidades</h2>
            <div className='flex justify-center items-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {qualities.map((quality, index) => (
                    <div 
                    key={quality.title}
                    className={`p-6 rounded-xl ${
                        index % 2 === 0 ? 'bg-blue-900 text-white' : 'bg-red-400 text-red-900'
                    } transition-transform hover:scale-105 duration-300`}
                    >
                    <quality.icon className={`w-12 h-12 mb-4 ${
                        index % 2 === 0 ? 'text-blue-300' : 'text-red-100'
                    }`} />
                    <h3 className="text-xl font-bold mb-2">{quality.title}</h3>
                    <p className={index % 2 === 0 ? 'text-blue-100' : 'text-red-900'}>
                        {quality.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>
          </div>
    
          {/* Advantages Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8">¿Por qué Elegirnos?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={advantage.title}
                  className={`p-6 rounded-xl ${
                    index % 2 === 0 ? 'bg-blue-900 text-white' : 'bg-red-400 text-red-900'
                  } transition-transform hover:scale-105 duration-300`}
                >
                  <advantage.icon className={`w-12 h-12 mb-4 ${
                    index % 2 === 0 ? 'text-blue-300' : 'text-red-100'
                  }`} />
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className={index % 2 === 0 ? 'text-blue-100' : 'text-red-900'}>
                    {advantage.description}
                  </p>

                </div>
              ))}
            </div>
          </div>
    
          {/* Estadísticas */}
            <div className="mt-20 flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
                        <div className="text-gray-600">Años de Experiencia</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-blue-900 mb-2">5000+</div>
                        <div className="text-gray-600">Casos Exitosos</div>
                    </div>
                    <div className="p-6">
                        <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
                        <div className="text-gray-600">Tasa de Éxito</div>
                    </div>
                </div>
            </div>
        </div>
      );
}
