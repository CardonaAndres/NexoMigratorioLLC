import HeroIMG from '../../assets/imgs/HeroIMG.webp';
import { Form } from '../heroSection/Form.jsx';
import { Card } from '../heroSection/Card.jsx';

export const HeroSection = () => {

  return (
    <div className="relative w-full min-h-screen overflow-hidden p-8">
      
      <img loading="lazy" 
        src={HeroIMG} 
        alt="Hero background" 
        className="w-full h-full object-cover object-center sm:object-top absolute inset-0 
          scale-105 transition-transform duration-300 hover:scale-100" 
      />
    
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
  
        <div className="relative inset-0 flex items-center justify-center  sm:px-8 md:px-12 ">
          <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 items-stretch">
            <Card />
            <Form />
          </div>
        </div>
      
    </div>
  );
};