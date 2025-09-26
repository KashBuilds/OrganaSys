import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DigitalToBioSection from './components/DigitalToBioSection';
import EnergyEfficiencySection from './components/EnergyEfficiencySection';
import KeyBenefitsSection from './components/KeyBenefitsSection';
import NewsletterSection from './components/NewsletterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SimpleAnimations from './components/SimpleAnimations';
import LivePage from './components/LivePage';
import NeuroplatformPage from './components/NeuroplatformPage';

function HomePage() {
  return (
    <>
      <SimpleAnimations />
      <Header />
      <HeroSection />
      <DigitalToBioSection />
      <EnergyEfficiencySection />
      <KeyBenefitsSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/live" element={<LivePage />} />
          <Route path="/neuroplatform" element={<NeuroplatformPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;