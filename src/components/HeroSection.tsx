import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const heroContentRef = useRef<HTMLDivElement>(null);
  
  // Transform scroll progress into animation values
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Main content */}
      <motion.div 
        ref={heroContentRef}
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ y, opacity, scale }}
      >
        <motion.h1 
          className="hero-title text-4xl sm:text-6xl md:text-8xl font-display text-white mb-6 sm:mb-8 tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          BIOCOMPUTING
        </motion.h1>
        <motion.p 
          className="hero-subtitle text-lg sm:text-xl md:text-2xl font-body text-gray-300 max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          The next evolutionary leap for AI
        </motion.p>
        
        {/* Neural Network Image - Main Center */}
        <motion.div 
          className="mt-8 sm:mt-12 flex justify-center px-4"
          initial={{ opacity: 0, scale: 0.1, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
        >
          <motion.img 
            src="/neural-3.webp" 
            alt="Neural Network Visualization"
            className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl w-full h-auto opacity-90"
            initial={{ filter: "blur(5px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.1)",
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        {/* Scattered Neural Network Images - Background */}
        {/* Top Left */}
        <motion.div 
          className="absolute top-10 left-4 md:left-8"
          initial={{ 
            opacity: 0, 
            scale: 0.1, 
            x: "calc(50vw - 2rem)", 
            y: "calc(50vh - 2.5rem)" 
          }}
          animate={{ 
            opacity: 0.6, 
            scale: 0.6, 
            x: 0, 
            y: 0 
          }}
          transition={{ 
            duration: 2.5, 
            delay: 1.5, 
            ease: "easeOut" 
          }}
        >
          <motion.img 
            src="/neural-3.webp" 
            alt="Neural Network Background"
            className="w-32 md:w-40 h-auto"
            initial={{ filter: "blur(8px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 1.7, ease: "easeOut" }}
          />
        </motion.div>

        {/* Bottom Right */}
        <motion.div 
          className="absolute bottom-10 right-4 md:right-8"
          initial={{ 
            opacity: 0, 
            scale: 0.1, 
            x: "calc(-50vw + 2rem)", 
            y: "calc(-50vh + 2.5rem)" 
          }}
          animate={{ 
            opacity: 0.6, 
            scale: 0.5, 
            x: 0, 
            y: 0 
          }}
          transition={{ 
            duration: 2.8, 
            delay: 1.8, 
            ease: "easeOut" 
          }}
        >
          <motion.img 
            src="/neural-3.webp" 
            alt="Neural Network Background"
            className="w-28 md:w-36 h-auto"
            initial={{ filter: "blur(8px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 2, ease: "easeOut" }}
          />
        </motion.div>
        
        {/* Glowing orbs */}
        <motion.div 
          className="relative mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          <motion.div 
            className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-blue-400/30 bg-blue-500/10 backdrop-blur-sm"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          ></motion.div>
          <motion.div 
            className="absolute -bottom-20 -right-20 w-32 h-32 rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-sm"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;