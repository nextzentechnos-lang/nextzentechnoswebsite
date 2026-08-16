import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Events from './components/Events';
import Join from './components/Join';
import WhatsAppWidget from './components/WhatsAppWidget';
import ZenLounge from './components/ZenLounge';
import Footer from './components/Footer';

// Premium Visual Enhancements
import RouteProgressBar from './components/RouteProgressBar';
import GlowBlobs from './components/GlowBlobs';

// Dedicated Pages
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import Courses from './components/Courses';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change helper component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Home Page Layout
function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="fade-in-up">
      <Hero onExploreCourses={() => navigate('/courses')} />
      <Services />
      <Events />
      <Join />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Glowing backdrop meshes */}
        <GlowBlobs />

        {/* SPA Page loading indicator */}
        <RouteProgressBar />

        {/* Scroll Restorer */}
        <ScrollToTop />

        {/* Global Navigation Header & Mobile bottom bar */}
        <Navbar />

        {/* Routing Panels */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Global Developer Refreshment Lounge Modal & Floating Button */}
        <ZenLounge />

        {/* Global Sticky Callbox */}
        <WhatsAppWidget />

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
