import { FileCheck, Check } from "lucide-react";
import { motion } from "framer-motion";

export const Steps = ({ fadeIn, staggerContainer }) => {
  return (
    <section id="proceso" className="py-16 bg-white">
        <div className="container mx-auto px-6">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center mb-12"
            >
                <h2 className="text-3xl font-bold text-blue-800 mb-4">PASOS PARA UNA SOLICITUD O RENOVACIÓN DE VISA EXITOSA</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Nuestro proceso garantiza un acompañamiento completo durante todo el trámite</p>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
            >
                <motion.div variants={fadeIn} className="bg-blue-50 rounded-lg p-8 border-t-4 border-blue-600 shadow-md">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <FileCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">REÚNA LOS REQUISITOS</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Documentos: Pasaporte vigente, fotografía, formulario DS160 y documentos adicionales según su perfil.</span>
                        </li>
                        <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Optimice su perfil: Identifique sus vínculos con el país de origen.</span>
                        </li>
                        <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Pague los derechos consulares: Costo de la Visa Americana: 185 dólares.</span>
                        </li>
                        <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Obtenga las citas.</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-blue-50 rounded-lg p-8 border-t-4 border-blue-600 shadow-md">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <FileCheck size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">REALICE LA APLICACIÓN CORRECTAMENTE</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>El formulario DS160 debe ser diligenciado acertadamente.</span>
                        </li>
                        <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Utilice las plataformas correctas para la aplicación, evite sitios fraudulentos.</span>
                        </li>
                        <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Evite omitir información relevante de su solicitud.</span>
                        </li>
                        <li className="flex items-start">
                        <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span>Categorice su solicitud correctamente.</span>
                        </li>
                    </ul>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-blue-50 rounded-lg p-8 border-t-4 border-blue-600 shadow-md">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <FileCheck size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">PREPÁRESE PARA LA ENTREVISTA</h3>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Presente los documentos correctos.</span>
                    </li>
                    <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Cuando se llega a la entrevista ya se tiene el 90% del proceso culminado.</span>
                    </li>
                    <li className="flex items-start">
                    <Check size={18} className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Dé las respuestas correctas, no pretenda ser más listo que el oficial consular.</span>
                    </li>
                </ul>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

