import './assets/css/index.css';
import { router } from './configs/config.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from './components/common/Navbar.jsx';
import { WhatsAppButton } from './components/common/WhatsAppButton.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutUs } from './pages/AboutUs.jsx';
import { ServiceList } from './components/services/ServiceList.jsx';
import { Footer } from './components/common/Footer.jsx';
import { LocationComponent } from './components/common/LocationComponent.jsx';
import { ContactPage } from './pages/ContactPage.jsx';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={router.welcome} element={<HomePage />} />
        <Route path={router.aboutUs} element={<AboutUs />} />
        <Route path={router.contact} element={<ContactPage />} />
        <Route path={router.ourServices} element={<ServiceList />} />
        <Route path={router.location} element={<LocationComponent />} />

        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>

      <WhatsAppButton />
      <Footer /> 
    </Router>
  )
}



