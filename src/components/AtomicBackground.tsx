import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AtomicBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > scrollY ? 'down' : 'up');
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dynamic gradient background that changes with scroll */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(6, 78, 59, 0.05) 50%, rgba(0, 0, 0, 0.8) 100%)",
            "radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(0, 0, 0, 0.8) 100%)",
            "radial-gradient(circle at 50% 80%, rgba(34, 197, 94, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(0, 0, 0, 0.8) 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Central energy burst that responds to scroll */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: scrollDirection === 'down' ? [1, 1.2, 1] : [1, 0.8, 1],
          rotate: scrollY * 0.1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-96 h-96">
          {/* Central nucleus with scroll-based pulsing */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Dynamic electron orbits */}
          <motion.div 
            className="absolute inset-0 border border-blue-300/30 rounded-full"
            animate={{
              rotate: scrollY * 0.5,
              scale: scrollDirection === 'down' ? [1, 1.1, 1] : [1, 0.9, 1]
            }}
            transition={{
              duration: 1,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400/80 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.div 
            className="absolute inset-8 border border-cyan-300/30 rounded-full"
            animate={{
              rotate: -scrollY * 0.3,
              scale: scrollDirection === 'down' ? [1, 1.2, 1] : [1, 0.8, 1]
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut"
            }}
          >
            <motion.div 
              className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400/80 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles that move with scroll */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: scrollDirection === 'down' ? [0, -50, 0] : [0, 50, 0],
            x: scrollY * 0.1,
            scale: scrollDirection === 'down' ? [1, 1.5, 1] : [1, 0.5, 1],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1
          }}
        />
      ))}

      {/* Neural network lines that animate with scroll */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          opacity: scrollY > 100 ? [0.3, 0.8, 0.3] : [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Horizontal lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
            style={{
              top: `${(i + 1) * 12.5}%`,
              left: '0%',
              width: '100%'
            }}
            animate={{
              scaleX: scrollDirection === 'down' ? [0, 1, 0] : [1, 0.5, 1],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 2 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
        
        {/* Vertical lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent"
            style={{
              left: `${(i + 1) * 16.66}%`,
              top: '0%',
              height: '100%'
            }}
            animate={{
              scaleY: scrollDirection === 'down' ? [0, 1, 0] : [1, 0.5, 1],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 2.5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </motion.div>

      {/* Energy sparks that zoom in/out with scroll */}
      <motion.div 
        className="absolute top-1/4 right-1/4"
        animate={{
          scale: scrollDirection === 'down' ? [1, 1.5, 1] : [1, 0.7, 1],
          rotate: scrollY * 0.2
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-32 h-32">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/80 rounded-full"
              style={{
                left: `${50 + Math.cos(i * 30 * Math.PI / 180) * 40}%`,
                top: `${50 + Math.sin(i * 30 * Math.PI / 180) * 40}%`
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Bottom energy burst */}
      <motion.div 
        className="absolute bottom-1/4 left-1/4"
        animate={{
          scale: scrollDirection === 'down' ? [1, 1.3, 1] : [1, 0.8, 1],
          y: scrollDirection === 'down' ? [0, -20, 0] : [0, 20, 0]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-48 h-48">
          <motion.div 
            className="absolute inset-0 border border-orange-400/30 rounded-full"
            animate={{
              rotate: scrollY * 0.3,
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute inset-8 border border-yellow-400/30 rounded-full"
            animate={{
              rotate: -scrollY * 0.2,
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AtomicBackground;