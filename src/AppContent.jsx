import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { router } from './configs/config.js';

import { Navbar } from './components/common/Navbar.jsx';
import { WhatsAppButton } from './components/common/WhatsAppButton.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutUs } from './pages/AboutUs.jsx';
import { ServiceList } from './components/services/ServiceList.jsx';
import { Footer } from './components/common/Footer.jsx';
import { LocationComponent } from './components/common/LocationComponent.jsx';
import { ContactPage } from './pages/ContactPage.jsx';
import { MetaTags } from './components/common/MetaTags.jsx';
import { VisasPage } from './pages/VisasPage.jsx';

export const AppContent = () => {
  const location = useLocation();
  const [isVisaPage, setIsVisaPage] = useState(false);

  useEffect(() => {
    setIsVisaPage(location.pathname === router.visasPage);
  }, [location.pathname]);

  return (
    <>
      <MetaTags />
      <Navbar />
      <Routes>
        <Route path={router.welcome} element={<HomePage />} />
        <Route path={router.aboutUs} element={<AboutUs />} />
        <Route path={router.contact} element={<ContactPage />} />
        <Route path={router.ourServices} element={<ServiceList />} />
        <Route path={router.location} element={<LocationComponent />} />
        <Route path={router.visasPage} element={<VisasPage />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
      <WhatsAppButton IsVisaPage={isVisaPage} />
      <Footer IsVisasPage={isVisaPage} />
    </>
  );
};
