import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import DigitalToBioSection from './components/DigitalToBioSection';
import EnergyEfficiencySection from './components/EnergyEfficiencySection';
import KeyBenefitsSection from './components/KeyBenefitsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SimpleAnimations from './components/SimpleAnimations';
import LivePage from './components/LivePage';
import NeuroplatformPage from './components/NeuroplatformPage';
import ContactPage from './components/ContactPage';
import ArticlesPage from './components/ArticlesPage';
import NeuroplasticityArticle from './components/NeuroplasticityArticle';

function HomePage() {
  return (
    <>
      <SimpleAnimations />
      <Header />
      <HeroSection />
      <DigitalToBioSection />
      <EnergyEfficiencySection />
      <KeyBenefitsSection />
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
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/neuroplasticity" element={<NeuroplasticityArticle />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;