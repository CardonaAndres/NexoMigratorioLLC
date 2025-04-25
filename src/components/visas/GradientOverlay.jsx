import { motion } from "framer-motion";

export const GradientOverlay = () => {
  return (
    <motion.div 
      className="absolute inset-0 bg-gradient-to-tr from-blue-800 via-transparent to-blue-900 opacity-30"
      animate={{
        background: [
          "linear-gradient(135deg, rgba(30,64,175,0.3) 0%, rgba(0,0,0,0) 50%, rgba(30,64,175,0.3) 100%)",
          "linear-gradient(225deg, rgba(30,64,175,0.3) 0%, rgba(0,0,0,0) 50%, rgba(30,64,175,0.3) 100%)",
          "linear-gradient(315deg, rgba(30,64,175,0.3) 0%, rgba(0,0,0,0) 50%, rgba(30,64,175,0.3) 100%)",
          "linear-gradient(45deg, rgba(30,64,175,0.3) 0%, rgba(0,0,0,0) 50%, rgba(30,64,175,0.3) 100%)",
          "linear-gradient(135deg, rgba(30,64,175,0.3) 0%, rgba(0,0,0,0) 50%, rgba(30,64,175,0.3) 100%)",
        ]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};