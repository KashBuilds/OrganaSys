import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, ArrowRight } from 'lucide-react';

const DigitalToBioSection = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress into animation values
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <section id="digital-bio-section" className="py-20 px-4 relative">
      <motion.div 
        className="max-w-7xl mx-auto"
        style={{ y, opacity, scale }}
      >
        <motion.h2 
          className="digital-bio-title text-5xl md:text-6xl font-display text-white text-center mb-20 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          FROM DIGITAL TO BIO
        </motion.h2>
        
        {/* Brain Statistics */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            <p className="text-lg font-body text-gray-300 leading-relaxed">
              The human brain is a powerhouse, boasting <span className="text-blue-400 font-semibold">86 billion neurons</span> and using only <span className="text-green-400 font-semibold">20 watts</span> of power for efficient computing. Replicating this kind of efficiency with silicon would require a whopping <span className="text-red-400 font-semibold">10 megawatts</span> of power, according to Stanford University's Kwabena Boahen.
            </p>
            <p className="font-body text-gray-300 mt-4 leading-relaxed">
              We're creating the solution with biological neural networks. We're growing neurons in cell cultures and making great progress in their use as computing power. Creating large networks is challenging and yet, our bio lab is actively working towards replicating and surpassing nature's success with limitless potential for enhancing life on earth. The possibilities are very exciting.
            </p>
            <motion.button 
              className="mt-6 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Read more about our vision.
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="digital-bio-content grid md:grid-cols-3 gap-8 items-center">
          {/* Digital Processor */}
          <motion.div 
            className="text-center processor"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="relative mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-32 h-32 mx-auto border-2 border-gray-400 rounded-lg bg-gray-800/50 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Cpu className="w-16 h-16 text-gray-400" />
                </motion.div>
              </div>
              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 w-32 h-32 mx-auto rounded-lg border border-gray-500/30">
                <div className="grid grid-cols-4 gap-1 p-2 h-full">
                  {[...Array(16)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className="w-1 h-1 rounded-full bg-gray-500/40"
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.1,
                        ease: "easeInOut" 
                      }}
                    ></motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="bg-gray-700 text-white px-6 py-3 rounded-lg mb-4 inline-block">
              Digital Processor
            </div>
            <p className="digital-bio-caption text-gray-300 max-w-xs mx-auto leading-relaxed">
              Today, AI growth is limited by high energy use required
            </p>
          </motion.div>
          
          {/* Arrow */}
          <motion.div 
            className="text-center digital-bio-arrow"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="relative">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-16 h-16 text-cyan-400 mx-auto" />
              </motion.div>
              <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-cyan-400/20 blur-xl"></div>
            </div>
          </motion.div>
          
          {/* Bioprocessor */}
          <motion.div 
            className="text-center bio-processor"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div 
              className="relative mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-cyan-400/20 border border-cyan-400/50"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  ></motion.div>
                </motion.div>
                </div>
              {/* Glowing effect */}
              <motion.div 
                className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-cyan-400/10 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              ></motion.div>
            </motion.div>
            <div className="bg-orange-500 text-white px-6 py-3 rounded-lg mb-4 inline-block">
              Bioprocessor
            </div>
            <p className="text-gray-300 max-w-xs mx-auto leading-relaxed">
              AI growth will be enhanced with no energy restrictions
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DigitalToBioSection;