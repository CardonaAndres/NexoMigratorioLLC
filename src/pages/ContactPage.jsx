import { useEffect } from 'react';
import { LocationComponent } from '../components/common/LocationComponent';
import { ContactForm } from '../components/common/ContactForm';

export const ContactPage = () => {
    useEffect(() => {
        document.title = "Contactanos - Nexo Migratorio LLC";
    },[]);

  return (
    <>
      <ContactForm />
      <LocationComponent />
    </>
  )
}
