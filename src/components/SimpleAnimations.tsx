import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SimpleAnimations = () => {
  const heroAtomsRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<HTMLDivElement>(null);
  const midsparksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero atoms - always visible
    if (heroAtomsRef.current) {
      gsap.set(heroAtomsRef.current, { opacity: 1 });
    }

    // Sparks animation - starts when digital bio section is in view
    if (sparksRef.current) {
      gsap.set(sparksRef.current, { opacity: 0, x: 100, y: -100 });
      
      gsap.timeline({
        scrollTrigger: {
          trigger: "#digital-bio-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      }).to(sparksRef.current, { 
        opacity: 1,
        x: -50,
        y: "100%",
        duration: 1 
      });
    }

    // Midsparks animation - behind 1 million section
    if (midsparksRef.current) {
      gsap.set(midsparksRef.current, { opacity: 0, scale: 0.5 });
      
      gsap.timeline({
        scrollTrigger: {
          trigger: "#energy-efficiency-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        }
      }).to(midsparksRef.current, { 
        opacity: 0.8,
        scale: [1, 1.5, 1],
        duration: 2,
        ease: "power2.inOut"
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Hero Section - Always visible atoms */}
      <div 
        ref={heroAtomsRef}
        className="absolute inset-0"
      >
        {/* Floating atoms - more visible */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`
            }}
          />
        ))}
        
        {/* Neural network lines - more visible */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-blue-400/70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              height: `${Math.random() * 400 + 200}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Sparks - moves down from right */}
      <div 
        ref={sparksRef}
        className="absolute top-0 right-0 w-96 h-96"
        style={{
          background: 'radial-gradient(circle, rgba(251, 146, 60, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, rgba(236, 72, 153, 0.5) 100%)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}
      />

      {/* Midsparks - behind 1 Million section */}
      <div 
        ref={midsparksRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(251, 146, 60, 0.4) 30%, rgba(236, 72, 153, 0.3) 60%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}
      />
    </div>
  );
};

export default SimpleAnimations;



