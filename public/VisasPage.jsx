import { useEffect } from "react";
import { motion } from "framer-motion";
import { FileCheck, Award, Clock, Check, Users, Phone, MapPin, MessageSquare } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
};

export const VisasPage = () => {
    useEffect(() => { document.title = 'Expertos En Visas' }, []);

    return (
        <div className="font-sans bg-white text-gray-800">
            <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Servicios de Visa Americana</h1>
            <p className="text-xl mb-8">15 Años de Experiencia ayudando a nuestros clientes a obtener su visa de manera exitosa</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#consulta" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300">
                Solicitar Consulta
              </a>
              <a href="#servicios" className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-lg text-center transition-colors duration-300">
                Nuestros Servicios
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white w-full h-8">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,50,50,100,50S321.39,56.44,321.39,56.44z"></path>
          </svg>
        </div>
      </section>

      
        
        </div>
    )
}
