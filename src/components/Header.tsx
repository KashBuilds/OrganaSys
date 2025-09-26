import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
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
                className="text-white hover:text-blue-400 transition-colors duration-300 font-body"
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
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-body"
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
            <motion.button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-body font-medium"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Docs
            </motion.button>
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
                    className="text-2xl text-white hover:text-blue-400 transition-colors duration-300"
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
                    className="text-2xl text-gray-300 hover:text-blue-400 transition-colors duration-300"
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
                <motion.button 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-medium text-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Docs
                </motion.button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;