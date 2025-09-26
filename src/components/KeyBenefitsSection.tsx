import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp } from 'lucide-react';

const KeyBenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: 'evolutionary',
      description: 'Wetware based biocomputing is self-organizing and incorporates continuous learning. In contrast to traditional AI, wetware based AI is inherently "one for many" rather than one system for one single task.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'energy efficient',
      description: 'The human brain uses just 20 Watts for 86 Billion Neurons. Biocomputing unleashes unparalleled computing power and efficiency outperforming by far the capacities of any human-made computing devices to date.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'scalable',
      description: 'Growing and scaling biocomputers is straightforward as it is just the result of natural expansion. This process is significantly simpler than scaling silicon based CPUs and GPUs.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="benefits-section" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="benefits-title text-4xl md:text-5xl font-display text-white text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          KEY BENEFITS
        </motion.h2>
        <motion.p 
          className="benefits-desc text-xl font-body text-gray-300 text-center mb-20 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Upgrading to bio-processors has many advantages
        </motion.p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.title}
              className="text-center group benefits-circle"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="relative mb-8"
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${benefit.color} p-0.5`}>
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <benefit.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  className={`absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${benefit.color} opacity-20 blur-xl`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                ></motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-display text-white mb-4 capitalize"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {benefit.title}
              </motion.h3>
              
              <motion.p 
                className="font-body text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {benefit.description}
              </motion.p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefitsSection;
