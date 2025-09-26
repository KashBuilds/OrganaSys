import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimations = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress into different animation values
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.3, 0.6, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Section-specific background overlays */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{ opacity: backgroundOpacity }}
      >
        {/* Hero section overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0])
          }}
        />
        
        {/* Digital to Bio section overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-orange-900/30"
          style={{
            opacity: useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0])
          }}
        />
        
        {/* Key Benefits section overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-pink-900/20 to-green-900/20"
          style={{
            opacity: useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0])
          }}
        />
        
        {/* Newsletter section overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-slate-800/40"
          style={{
            opacity: useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 0])
          }}
        />
      </motion.div>

      {/* Floating geometric shapes that respond to scroll */}
      <motion.div 
        className="fixed top-1/4 right-1/4 w-32 h-32 pointer-events-none z-5"
        style={{
          scale,
          rotate
        }}
      >
        <motion.div 
          className="w-full h-full border border-blue-400/30 rounded-lg"
          animate={{
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1, 0.9, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-4 border border-cyan-400/20 rounded-lg"
          animate={{
            rotate: [360, 270, 180, 90, 0],
            scale: [1, 0.9, 1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Bottom-left energy burst */}
      <motion.div 
        className="fixed bottom-1/4 left-1/4 w-48 h-48 pointer-events-none z-5"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.3, 0.8]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.8, 0.5, 0.2])
        }}
      >
        <motion.div 
          className="w-full h-full border border-orange-400/40 rounded-full"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-8 border border-yellow-400/30 rounded-full"
          animate={{
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Neural network particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-blue-400/60 rounded-full pointer-events-none z-5"
          style={{
            left: `${20 + (i * 5)}%`,
            top: `${30 + (i * 3)}%`
          }}
          animate={{
            y: scrollY * 0.1 + Math.sin(scrollY * 0.01 + i) * 20,
            x: Math.cos(scrollY * 0.005 + i) * 10,
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Energy lines that appear on scroll */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-5"
        style={{
          opacity: useTransform(scrollYProgress, [0.2, 0.4, 0.8], [0, 1, 0])
        }}
      >
        {/* Diagonal energy lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: '0%',
              height: '100%',
              transform: `rotate(${15 + i * 10}deg)`
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

export default ScrollAnimations;

