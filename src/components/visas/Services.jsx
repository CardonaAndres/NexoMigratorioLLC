import { FileCheck, Clock,  Users, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const Services = ({ fadeIn, staggerContainer }) => {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-4">NUESTRO SERVICIO INCLUYE</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Maximice el Valor de su Inversión. Consulte con auténticos expertos y realice un análisis detallado de su perfil con nosotros.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Análisis de perfil</h3>
              <p className="text-gray-600">Evaluamos detalladamente su caso para maximizar sus posibilidades de aprobación.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Creación de la cuenta en la sección consular</h3>
              <p className="text-gray-600">Gestionamos su registro oficial en el sistema consular americano.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Solicitud de las dos citas consulares</h3>
              <p className="text-gray-600">Coordinamos y agendamos sus citas con la embajada americana.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Diligenciamiento del formulario DS160</h3>
              <p className="text-gray-600">Completamos correctamente su formulario oficial para evitar errores y retrasos.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Acompañamiento en todo el proceso</h3>
              <p className="text-gray-600">Le guiamos durante cada etapa del proceso de solicitud de visa.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Preparación para la entrevista consular</h3>
              <p className="text-gray-600">Le preparamos para responder adecuadamente durante su entrevista oficial.</p>
            </motion.div>
          </motion.div>
        </div>
    </section>
  )
}
