import { motion } from "framer-motion";

export const HeroCards = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
        <motion.span 
        className="bg-blue-800 px-3 py-1 rounded-full text-sm font-medium"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        >
        Visa de Turista
        </motion.span>

        <motion.span 
        className="bg-blue-800 px-3 py-1 rounded-full text-sm font-medium"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        >
        Visa de Trabajo
        </motion.span>

        <motion.span 
        className="bg-blue-800 px-3 py-1 rounded-full text-sm font-medium"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        >
        Visa de Estudiante
        </motion.span>

        <motion.span 
        className="bg-blue-800 px-3 py-1 rounded-full text-sm font-medium"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        >
        Renovaciones
        </motion.span>
    </div>
  )
}

