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
          className="hero-title text-6xl md:text-8xl font-display text-white mb-8 tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          BIOCOMPUTING
        </motion.h1>
        <motion.p 
          className="hero-subtitle text-xl md:text-2xl font-body text-gray-300 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          The next evolutionary leap for AI
        </motion.p>
        
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