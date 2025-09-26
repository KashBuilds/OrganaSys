import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, X, Laptop, Cloud, Database, Cpu, Droplets, Github, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeuroplatformPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Brain className="h-8 w-8 text-blue-400" />
                </motion.div>
                <span className="text-white text-xl font-display tracking-tight">ORGANASYS</span>
              </Link>
            </motion.div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/live"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-body"
                >
                  Live
                </Link>
              </motion.div>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-body"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Team
              </motion.a>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/neuroplatform"
                  className="text-orange-400 hover:text-orange-300 transition-colors duration-300 font-body"
                >
                  Neuroplatform
                </Link>
              </motion.div>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-body"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Articles
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-body"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Media
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-body"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-body"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Docs
              </motion.a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm" />
              <motion.div
                className="relative z-50 flex flex-col items-center justify-center h-full px-4"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <nav className="flex flex-col items-center space-y-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link
                      to="/live"
                      className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      Live
                    </Link>
                  </motion.div>
                  <motion.a 
                    href="#" 
                    className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Team
                  </motion.a>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Link
                      to="/neuroplatform"
                      className="text-2xl text-orange-400 hover:text-orange-300 transition-colors duration-300"
                    >
                      Neuroplatform
                    </Link>
                  </motion.div>
                  <motion.a 
                    href="#" 
                    className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Articles
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Media
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </motion.a>
                  <motion.a 
                    href="#" 
                    className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Docs
                  </motion.a>
                </nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <div className="pt-20 min-h-screen">
        {/* Hero Section */}
        <motion.section 
          className="py-20 px-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background elements */}
          <div className="absolute inset-0">
            {/* Floating particles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                animate={{
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: Math.random() * 8 + 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Main Title */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-display text-white mb-6 tracking-tight">
                INSTANT ACCESS TO HUMAN NEURONS
              </h1>
              <p className="text-xl md:text-2xl font-body text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Get instant access to Organasys™ Neuroplatform and run your remote biocomputing research from your own desk.
              </p>
            </motion.div>

            {/* Visual Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Researcher */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative mb-8">
                  {/* Researcher Icon */}
                  <motion.div
                    className="w-32 h-32 mx-auto lg:mx-0 mb-4 relative"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full border-2 border-blue-400/50 flex items-center justify-center">
                      <Laptop className="w-16 h-16 text-blue-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
                  </motion.div>
                  
                  <p className="text-white font-body text-lg">Researcher</p>
                </div>

                {/* Data Flow */}
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <span className="text-white font-body">Experiments</span>
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-body">Data</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Neuroplatform Diagram */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="relative w-80 h-80 mx-auto mb-8">
                  {/* Main Circle */}
                  <motion.div
                    className="w-full h-full border-2 border-white/30 rounded-full flex items-center justify-center relative"
                    animate={{
                      scale: [1, 1.02, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Center */}
                    <div className="w-24 h-24 bg-blue-500/20 rounded-full border border-blue-400/50 flex items-center justify-center">
                      <Brain className="w-8 h-8 text-blue-400" />
                    </div>
                    
                    {/* Surrounding Elements */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white text-xs mt-2 font-body">Biology</p>
                    </div>
                    
                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <Cpu className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white text-xs mt-2 font-body">Computing</p>
                    </div>
                    
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <Droplets className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white text-xs mt-2 font-body">Fluidics</p>
                    </div>
                    
                    <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-white text-xs mt-2 font-body">Electronics</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="text-center">
                  <p className="text-3xl font-display text-white mb-2">24/7</p>
                  <p className="text-lg font-body text-gray-300">Fully Managed Remote Neuroplatform</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Included in Your Access Section */}
        <motion.section 
          className="py-20 px-4 bg-slate-800/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-4xl md:text-5xl font-display text-white mb-12 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              INCLUDED IN YOUR ACCESS
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Integrated R&D environment for biocomputing research",
                "24/7 remote access to brain organoid",
                "Realtime neural stimulation and reading",
                "Programming API for Python",
                "Digital notebook for documentation and research",
                "Data storage and backup",
                "Technical support"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white font-body leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* More About Section */}
        <motion.section 
          className="py-20 px-4 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-6xl font-display text-gray-500/50 mb-12 tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              MORE ABOUT OUR ORGANASYS™ NEUROPLATFORM
            </motion.h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-body font-medium flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FileText className="w-5 h-5" />
                <span>Documentation</span>
              </motion.button>
              
              <motion.button
                className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg transition-colors duration-300 font-body font-medium flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Publication Section */}
        <motion.section 
          className="py-16 px-4 bg-slate-800/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-300 font-body mb-4">
              More information available in our publication:
            </p>
            <p className="text-xl font-body text-white">
              "Open and remotely accessible Neuroplatform for research in wetware computing"
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default NeuroplatformPage;

