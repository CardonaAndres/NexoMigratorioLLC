import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="bg-blue-950 text-white py-12 px-6"
  >
    <div className="max-w-6xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        ¿Necesitas ayuda con tus trámites migratorios?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl text-blue-100 max-w-3xl mx-auto"
      >
        Nuestro equipo de expertos está listo para brindarte la mejor
        asesoría. Contáctanos y comienza tu proceso migratorio hoy mismo.
      </motion.p>
    </div>
  </motion.div>
  )
}
