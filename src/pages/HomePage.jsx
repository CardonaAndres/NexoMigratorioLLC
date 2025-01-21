import { router } from '../configs/config';
import { HeroSection } from '../components/common/HeroSection';
import { ServiceList } from '../components/services/ServiceList';
import { AboutUs } from './AboutUs';

export const HomePage = () => {

  return (
    <>
      <HeroSection />
      <div id="Servicios">
       <ServiceList />
      </div>
      <AboutUs />
      
   
    
    </>
  )
}


