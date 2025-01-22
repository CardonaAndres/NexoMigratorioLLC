import { ArrowRight, Phone, User, MessageSquare } from 'lucide-react';
import { useContactHook } from '../../hooks/useContactHook'; 

export const Form = () => {
  const { register, handleSubmit, errors, sendEmail } = useContactHook();

  return (
    <div className="w-full md:w-5/12 backdrop-blur-md rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 shadow-2xl transform transition-all duration-300 
    hover:scale-[1.02] ">
    
    <div className="p-6 sm:p-8">
      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-white leading-tight">
            Solicita tu Consulta Gratuita
          </h3>
          <div className="w-16 h-1 bg-blue-500/80 rounded-full" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(sendEmail)}>
          <div className="space-y-4">
            <div className="relative group">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 
                text-white/60 group-hover:text-blue-400 transition-colors duration-300" />
              <input type="text" placeholder="Nombre completo"
                className="w-full px-10 py-3 bg-white/10 border border-white/20 rounded-lg
                  text-white placeholder-white/60 outline-none focus:border-blue-500
                  transition-all duration-300 focus:bg-white/20"
                  {...register('name',{ required : true })} required  
              />
              
            </div>
            <div className="relative group">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 
                text-white/60 group-hover:text-blue-400 transition-colors duration-300" />
              <input type="tel" placeholder="Teléfono" 
                className="w-full px-10 py-3 bg-white/10 border border-white/20 rounded-lg
                  text-white placeholder-white/60 outline-none focus:border-blue-500
                  transition-all duration-300 focus:bg-white/20"
                  {...register('phone',{ required : true })} required  
              />
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-white/60 group-hover:text-blue-400 transition-colors duration-300" />
                  <textarea name="message" placeholder="Tu mensaje" rows={3} className="w-full px-9 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 outline-none focus:border-blue-500 transition-all duration-300 focus:bg-white/20 resize-none text-sm" {...register('message',{ required : true })} required  
                  />
            </div>

          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 
              hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-medium
              transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg
              flex items-center justify-center group"
          >
            <span>Enviar Solicitud</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 
              group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}


