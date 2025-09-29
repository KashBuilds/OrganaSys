import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Mail, Globe, Linkedin, Twitter } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      // On homepage, scroll to contact section
      e.preventDefault();
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // On other pages, let the Link handle navigation to /contact
  };

  return (
    <motion.footer 
      className="bg-slate-900/90 border-t border-slate-700/50 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brain className="h-8 w-8 text-blue-400" />
              </motion.div>
              <span className="text-white text-xl font-bold tracking-wider">ORGANASYS</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Pioneering the future of AI through revolutionary biocomputing technologies.
            </p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/live"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Live
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/neuroplatform"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Neuroplatform
                </Link>
              </motion.div>
              <motion.a 
                href="/OrganaSysDocumentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Docs
              </motion.a>
            </div>
          </motion.div>
          
          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/articles"
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Articles
                </Link>
              </motion.div>
              <motion.a 
                href="#" 
                className="block text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Media
              </motion.a>
              <motion.a 
                href="#" 
                className="block text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Team
              </motion.a>
            </div>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to="/contact"
                  onClick={handleContactClick}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </motion.div>
              <div className="flex space-x-3 mt-4">
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Globe className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-slate-700/50 mt-8 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center">
            © 2024 OrganaSys. All rights reserved. Advancing the future of biocomputing.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;