import { router } from '../configs/config';
import { HeroSection } from '../components/common/HeroSection';
import { useServices } from '../hooks/useServices';
import { ServiceList } from '../components/services/ServiceList';
import { AboutUs } from './AboutUs';

export const HomePage = () => {
  const { services } = useServices();

  return (
    <>
      <HeroSection />
      <div id={router.ourServices}>
       <ServiceList services={services} />
      </div>
      <AboutUs />
      
   
    
    </>
  )
}


