import { useState } from "react";
import { HeroContent } from "./HeroContent";
import { Background } from "./Background";
import { GradientOverlay } from "./GradientOverlay";
import { WaveDecoration } from "./WaveDecoration";
import { ContactForm } from './ContactForm';

export const Hero = ({ fadeIn }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-44  overflow-hidden">
      {/* Animated Background */}
      <Background />

      {/* Animated Gradient Overlay */}
      <GradientOverlay />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <HeroContent 
            fadeIn={fadeIn}
            showForm={showForm}
            setShowForm={setShowForm}
          />
          
          {/* Contact Form */}
          <ContactForm   
            showForm={showForm}
            setShowForm={setShowForm}
          />
        </div>
      </div>
    
      {/* Wave Decoration */}
      <WaveDecoration />
    </section>
  );
};