import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Brain, Cpu } from 'lucide-react';

const EnergyEfficiencySection = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress into animation values
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.2]);

  return (
      <motion.section 
        id="energy-efficiency-section"
        className="py-32 px-4 relative overflow-hidden"
        style={{ y, opacity, scale }}
      >
      {/* Background energy burst */}
      <motion.div 
        className="absolute inset-0 bg-gradient-radial from-orange-500/20 via-transparent to-transparent"
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.6, 0.8, 0])
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Central energy display */}
        <motion.div 
          className="relative mb-16"
          style={{ scale }}
        >
          {/* Main energy circle */}
          <motion.div 
            className="w-64 h-64 mx-auto rounded-full border-4 border-orange-400/50 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 flex items-center justify-center relative"
            animate={{
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Central content */}
            <div className="flex flex-col items-center justify-center h-full">
              <motion.div 
                className="text-4xl md:text-6xl font-display text-white mb-2 flex flex-col items-center"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div>1</div>
                <div>Million</div>
              </motion.div>
              
              <motion.div 
                className="text-xs md:text-sm font-body text-orange-400 font-medium text-center px-4"
                animate={{
                  y: [0, -2, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                times more energy efficient
              </motion.div>
            </div>

            {/* Energy rings */}
            <motion.div 
              className="absolute inset-0 border border-cyan-400/30 rounded-full"
            >
              <motion.div 
                className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400/80 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.div 
              className="absolute inset-8 border border-blue-400/30 rounded-full"
            >
              <motion.div 
                className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400/80 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Energy sparks around the circle */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400/80 rounded-full"
              style={{
                left: `${50 + Math.cos(i * 45 * Math.PI / 180) * 140}%`,
                top: `${50 + Math.sin(i * 45 * Math.PI / 180) * 140}%`
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.4, 1, 0.4],
                y: [0, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Comparison stats */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Silicon processors */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-6 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-600/50"
              animate={{
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Cpu className="w-12 h-12 text-gray-400" />
            </motion.div>
            <h3 className="text-2xl font-display text-white mb-4">Silicon Processors</h3>
            <div className="text-4xl font-display text-red-400 mb-2">10 MW</div>
            <p className="font-body text-gray-300">Power consumption for equivalent processing</p>
          </motion.div>

          {/* Biological processors */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-blue-400/50"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Brain className="w-12 h-12 text-blue-400" />
            </motion.div>
            <h3 className="text-2xl font-display text-white mb-4">Biological Processors</h3>
            <div className="text-4xl font-display text-green-400 mb-2">20 W</div>
            <p className="font-body text-gray-300">Power consumption for 86 billion neurons</p>
          </motion.div>
        </motion.div>

        {/* Efficiency ratio */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center space-x-4 bg-slate-800/50 rounded-2xl px-8 py-6 border border-slate-700/50"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Zap className="w-8 h-8 text-yellow-400" />
            <div>
              <div className="text-3xl font-display text-white">500,000x</div>
              <div className="font-body text-gray-300">More efficient than silicon</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default EnergyEfficiencySection;
