import { useEffect } from "react";
import { motion } from "framer-motion";
import { FileCheck, Award, Clock, Check, Users, Phone, MapPin, MessageSquare } from "lucide-react";
import { Hero } from "../components/visas/Hero";
import { Steps } from "../components/visas/Steps";
import { Services } from "../components/visas/Services";
import { ChooseUs } from "../components/visas/ChooseUs";
import { Contact } from "../components/visas/Contact";

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
};

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
};

export const VisasPage = () => {
    useEffect(() => { document.title = 'Expertos En Visas' }, []);

    return (
        <div className="font-sans bg-white text-gray-800">
            <Hero fadeIn={fadeIn} />
            <Steps fadeIn={fadeIn} staggerContainer={staggerContainer} />
            <Services fadeIn={fadeIn} staggerContainer={staggerContainer} />
            <ChooseUs fadeIn={fadeIn} staggerContainer={staggerContainer} /> 
            <Contact fadeIn={fadeIn} />

        </div>
    )
}