import { motion } from "framer-motion";
import { FileCheck, Award, Clock, Users } from "lucide-react";

export const ChooseUs = ({ fadeIn, staggerContainer }) => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
        >
            <h2 className="text-3xl font-bold text-blue-800 mb-4">¿POR QUÉ ASESORARSE CON NOSOTROS?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cuente con un equipo de expertos legales en migración para maximizar sus posibilidades de éxito
            </p>
        </motion.div>

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
        >
            <motion.div variants={fadeIn} className="flex gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                <Award size={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Experiencia y Certificación</h3>
                <p className="text-gray-600">Somos Abogados Migratorios y contamos con capacitación directa de la Embajada Americana.</p>
            </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                <Users size={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Acompañamiento Completo</h3>
                <p className="text-gray-600">Nuestra asesoría ofrece un acompañamiento hasta presentar la entrevista consular.</p>
            </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                <FileCheck size={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Seguridad Garantizada</h3>
                <p className="text-gray-600">Ofrecemos total seguridad ya que el solicitante paga directamente el costo de la visa a la Embajada Americana, no pedimos documentos financieros ni su información de pago.</p>
            </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock size={24} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Pago por Resultados</h3>
                <p className="text-gray-600">La asesoría no se paga por adelantado, se cancela cuando se agendan las citas consulares y llega el correo de confirmación.</p>
            </div>
            </motion.div>
        </motion.div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mt-12 p-6 bg-blue-800 text-white rounded-lg shadow-lg"
        >
            <h3 className="text-2xl font-bold mb-4">ATENDEMOS A TODO COLOMBIA Y AMÉRICA LATINA</h3>
            <p className="text-lg mb-6">Nuestros servicios están disponibles sin importar su ubicación</p>
            <a href="https://wa.me/573019049338" target="_blank" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Contáctenos Ahora
            </a>
        </motion.div>
        </div>
    </section>
  )
}
