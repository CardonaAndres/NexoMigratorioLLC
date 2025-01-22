import { HeroSection } from '../components/common/HeroSection';
import { LocationComponent } from '../components/common/LocationComponent';
import { ServicesCarousel } from '../components/services/ServicesCarousel';
import { ServiceList } from '../components/services/ServiceList';
import { AboutUs } from './AboutUs';
import { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    document.title = "Bienvenido a Nexo Migratorio LLC";
  }, [])

  return (
    <>
      <ServicesCarousel />
      <HeroSection />
      <AboutUs />
      <div id="Servicios">
       <ServiceList />
      </div>
      <LocationComponent />
    </>
  )
}


