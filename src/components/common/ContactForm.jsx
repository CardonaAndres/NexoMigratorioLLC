import { motion } from "framer-motion";
import { User, Phone, MessageSquare } from "lucide-react";
import { Header } from "../contactSection/Header";
import { ImgCard } from "../contactSection/ImgCard";
import { useContactHook } from "../../hooks/useContactHook";

export const ContactForm = () => {
  const { register, handleSubmit, errors, sendEmail } = useContactHook();

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }} className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Escríbenos</h2>
            <form className="space-y-6" onSubmit={handleSubmit(sendEmail)}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre completo
                </label>
                <div className="relative">
                  <input type="text" className={`w-full px-5 py-4 rounded-xl border-2 ${ 
                    errors.name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-blue-500"} pl-12`}
                    {...register("name", {
                      required: "El nombre es obligatorio",
                      minLength: {
                        value: 2,
                        message: "El nombre debe tener al menos 2 caracteres",
                      },
                    })}
                    placeholder="Ingresa tu nombre"
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-900" />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Celular
                </label>
                <div className="relative">
                  <input type="tel"
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      errors.phone
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    } pl-12`}
                    placeholder="+1 XX XXXX XXXX"
                    {...register("phone", {
                      required: "El celular es obligatorio",
                      pattern: {
                        value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
                        message: "Por favor ingresa un número de teléfono válido",
                      },
                    })}
                  />
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-900" />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mensaje
                </label>
                <div className="relative">
                  <textarea
                    rows="4"
                    className={`w-full px-5 py-4 rounded-xl border-2 ${
                      errors.message
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-200 focus:border-blue-500"
                    } pl-12 resize-none`}
                    placeholder="¿En qué podemos ayudarte?"
                    {...register("message", { required: "El mensaje es obligatorio",
                      minLength: {
                        value: 8,
                        message: "El mensaje debe tener al menos 8 caracteres",
                      }
                     })}
                  />
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-blue-900" />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
                )}
              </div>

              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                type="submit" className="w-full bg-blue-900 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-colors duration-300" >
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Image Section */}
          <ImgCard />
        </motion.div>
      </div>
    </div>
  );
};
