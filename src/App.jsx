import { router } from './configs/config.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './assets/css/index.css';
import { Navbar } from './components/common/Navbar.jsx';
import { WhatsAppButton } from './components/common/WhatsAppButton.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutUs } from './pages/AboutUs.jsx';
import { ServiceList } from './components/services/ServiceList.jsx';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={router.welcome} element={<HomePage />} />
        <Route path={router.aboutUs} element={<AboutUs />} />
        <Route path={router.contact} element={<div> Contacto </div>} />
        <Route path={router.ourServices} element={<ServiceList />} />


      </Routes>

      <WhatsAppButton />
    </Router>
  )
}



