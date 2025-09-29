import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, X, Laptop, Cloud, Database, Cpu, Droplets, Github, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NeuroplatformPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />

      {/* Main Content */}
      <div className="pt-20 min-h-screen">
        {/* Hero Section */}
        <motion.section 
          className="py-20 px-4 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Scroll-based Background Elements */}
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
            
            {/* Scroll-based moving elements */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
              animate={{
                x: [0, 100, -50, 0],
                y: [0, -50, 100, 0],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.3, 0.6, 0.4, 0.3],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
              animate={{
                x: [0, -80, 60, 0],
                y: [0, 80, -40, 0],
                scale: [0.8, 1.3, 0.9, 0.8],
                opacity: [0.4, 0.7, 0.5, 0.4],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            
            <motion.div
              className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-lg"
              animate={{
                x: [0, 120, -30, 0],
                y: [0, -60, 90, 0],
                scale: [1, 0.7, 1.4, 1],
                opacity: [0.5, 0.8, 0.3, 0.5],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />
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

            {/* Visual Section - FinalSpark Style */}
            <div className="flex items-center justify-center space-x-8 max-w-8xl mx-auto">
              {/* Researcher Icon */}
              <motion.div
                className="w-96 h-96 flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img 
                  src="/researcher.svg" 
                  alt="Researcher" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {/* DataSwitch Icon */}
              <motion.div
                className="w-96 h-96 flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img 
                  src="/data-switch.svg" 
                  alt="DataSwitch" 
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Right Side - Organoid Image */}
              <motion.div
                className="w-96 h-96 flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <img 
                  src="/organoid-5.webp" 
                  alt="Organoid" 
                  className="w-full h-full object-contain"
                />
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
              className="text-4xl md:text-5xl font-display text-white mb-12 tracking-tight text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              INCLUDED IN ORGANASYS ACCESS
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Complete research laboratory environment for biological computing",
                "Round-the-clock access to neural organoid systems",
                "Live neural activity monitoring and stimulation capabilities",
                "Python development interface for custom programming",
                "Integrated documentation and research journal system",
                "Secure data management and automated backups",
                "Dedicated technical assistance and support"
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
              className="text-4xl md:text-6xl font-display text-white mb-12 tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              MORE ABOUT OUR ORGANASYS™ NEUROPLATFORM
            </motion.h2>
            
            <div className="flex justify-center">
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


