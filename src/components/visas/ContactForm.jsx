import emailjs from 'emailjs-com';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { errorAlert } from "../common/Alerts";

export const ContactForm = ({ showForm, setShowForm }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
  
    // Form submission handler
    const onSubmit = async (data) => {
      setIsSubmitting(true);
      try {
        const sent = Cookies.get('sent');
        if (sent) throw new Error('Ya has enviado un mensaje, debes esperar una hora para enviar otro.');
        
        const { name, phone, message } = data;
  
        setTimeout(async () => {
          try {
            await emailjs.send(
              'service_kn9s4ad', 
              'template_86cv7no', 
              { name, phone, message }, 
              'gXVD13EmkWvBgwp1-'
            );
  
            Cookies.set('sent', 'true', { expires: 1/24 });
          
            setIsSubmitted(true);
  
            setTimeout(() => {
              reset();
              setIsSubmitted(false);
              setShowForm(false);
            }, 3000);
  
          } catch (error) {
            errorAlert(error.message || 'Error al enviar el mensaje');
            setIsSubmitting(false);
          }
        }, 1500);
      } catch (err) {
        errorAlert(err.message);
        setIsSubmitting(false);
      }
    };
  
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showForm ? 1 : 0,
          y: showForm ? 0 : 20,
          height: showForm ? 'auto' : 0
        }}
        transition={{ duration: 0.5 }}
        className="bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden relative"
      >
        {showForm && (
          <div className="p-6">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Solicite Información</h3>
                <p className="text-gray-600 mb-6">Complete el formulario y nos pondremos en contacto con usted a la brevedad</p>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Name Field */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Nombre Completo*
                    </label>
                    <input 
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : ''}`}
                      id="name"
                      type="text"
                      placeholder="Ingrese su nombre y apellido"
                      {...register("name", { 
                        required: "Este campo es obligatorio" 
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  {/* Phone Field */}
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                      Teléfono/WhatsApp*
                    </label>
                    <input 
                      className={`shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                      id="phone"
                      type="tel"
                      placeholder="+57 301 9049338"
                      {...register("phone", { 
                        required: "Este campo es obligatorio",
                        pattern: {
                          value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
                          message: "Por favor ingrese un número de teléfono válido"
                        }
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs italic mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  {/* Message Field */}
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                      Mensaje
                    </label>
                    <textarea 
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                      id="message"
                      rows="4"
                      placeholder="Describa brevemente su consulta..."
                      {...register("message")}
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  <motion.button 
                    className="w-full flex items-center justify-center font-bold py-3 px-6 rounded-lg text-white transition-colors duration-300 bg-blue-800 hover:bg-blue-900"
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Solicitud
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            ) : (
              <motion.div 
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">¡Solicitud Enviada!</h3>
                <p className="text-gray-600">Nos pondremos en contacto con usted pronto.</p>
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
    );
  };