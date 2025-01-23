import ContactIMG from "../../assets/imgs/ContactIMG.webp";
import { motion } from "framer-motion";

export const ImgCard = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-xl"
  >
    <img
      src={ContactIMG}
      loading="lazy"
      alt="Asesoría migratoria"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex flex-col justify-end p-8">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-white text-2xl font-bold mb-2"
      >
        Nexo Migratorio
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-blue-50"
      >
        Más de 15 años de experiencia ayudando a personas a cumplir sus
        sueños migratorios
      </motion.p>
    </div>
  </motion.div>
  )
}


