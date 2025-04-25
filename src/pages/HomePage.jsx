import { HeroSection } from '../components/common/HeroSection';
import { LocationComponent } from '../components/common/LocationComponent';
import { ServicesCarousel } from '../components/services/ServicesCarousel';
import { ServiceList } from '../components/services/ServiceList';
import { AboutUs } from './AboutUs';
import { useEffect, useState } from 'react';
import { ModalOptions } from '../components/modales/ModalOptions';

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    document.title = "Bienvenido a Nexo Migratorio LLC";
    
    // Verificar si es la primera visita en esta sesión
    const hasVisitedBefore = sessionStorage.getItem('hasVisitedHomePage');
    
    if (!hasVisitedBefore) {
      setShowModal(true);
      sessionStorage.setItem('hasVisitedHomePage', 'true');
    }

  }, []);

  return (
    <>
      {showModal && <ModalOptions open={showModal} onClose={handleCloseModal} />}
      <ServicesCarousel />
      <HeroSection />
      <AboutUs />
      <div id="Servicios">
       <ServiceList />
      </div>
      <LocationComponent />
    </>
  );
};