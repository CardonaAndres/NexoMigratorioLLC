import { motion } from "framer-motion";
import { Phone, MapPin, MessageSquare } from "lucide-react";
import { useContactHook } from '../../hooks/useContactHook';

export const Contact = ({ fadeIn }) => {
    const { register, handleSubmit, errors, sendEmail } = useContactHook();
    
  return (
    <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
            >
                <div className="grid md:grid-cols-2">
                <div className="p-8 bg-blue-800 text-white">
                    <h2 className="text-2xl font-bold mb-6">Contáctenos</h2>
                    <p className="mb-6">Estamos disponibles para responder todas sus consultas sobre visas y servicios migratorios.</p>
                    
                    <div className="space-y-4">
                    <div className="flex items-center">
                        <Phone size={20} className="mr-3" />
                        <span>+57 3019049338</span>
                    </div>
                    <div className="flex items-center">
                        <MessageSquare size={20} className="mr-3" />
                        <span>info@nexomigratorio.com</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin size={20} className="mr-3" />
                        <span>3650 Davie RD # 62 Davie,Fl 33314</span>
                    </div>
                    </div>

                    <div className="mt-8">
                    <a href="https://wa.me/573019049338" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                    </a>
                    </div>
                </div>
                
                <div className="p-8">
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Solicite una Consulta</h3>
                    <form onSubmit={handleSubmit(sendEmail)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre Completo
                        </label>
                        <input 
                        {...register("name", {
                            required: "El nombre es obligatorio",
                            minLength: {
                                value: 2,
                                message: "El nombre debe tener al menos 2 caracteres",
                            },
                        })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text" placeholder="Nombre y Apellido"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                        )}
                    </div>
             
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Teléfono
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="tel" placeholder="+57 3019049338"
                        {...register("phone", {
                            required: "El celular es obligatorio",
                            pattern: {
                              value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
                              message: "Por favor ingresa un número de teléfono válido",
                            },
                        })}
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Mensaje
                        </label>
                        <textarea 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                        id="message" 
                        rows="4"
                        placeholder="Describa brevemente su consulta..."
                        {...register("message", { required: "El mensaje es obligatorio",
                            minLength: {
                              value: 8,
                              message: "El mensaje debe tener al menos 8 caracteres",
                            }
                        })}
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
                        )}
                    </div>
                    <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="submit">
                        Enviar Consulta
                    </button>
                    </form>
                </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

