import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FinalSparkAnimations = () => {
  const heroAtomsRef = useRef<HTMLDivElement>(null);
  const gradientSquareRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<HTMLDivElement>(null);
  const midsparksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section - atoms in background behind BIOCOMPUTING
    if (heroAtomsRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      }).to(heroAtomsRef.current, { 
        y: "-100%", 
        scale: 1.2,
        opacity: 0,
        duration: 1 
      });
    }

    // Gradient square that fades in on scroll
    if (gradientSquareRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#digital-bio-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      }).fromTo(gradientSquareRef.current, 
        { 
          opacity: 0,
          scale: 0.8,
          y: 100
        },
        { 
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1 
        }
      );
    }

    // Sparks.png that moves down from right side
    if (sparksRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#digital-bio-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      }).to(sparksRef.current, { 
        y: "100%", 
        x: "-20%",
        scale: 1.1,
        duration: 1 
      });
    }

    // Midsparks behind 1 Million section that zooms in/out
    if (midsparksRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#energy-efficiency-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      }).to(midsparksRef.current, { 
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.8, 0.3],
        rotate: [0, 10, 0],
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
      {/* Hero Section - Atoms in background */}
      <div 
        ref={heroAtomsRef}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(6, 78, 59, 0.1) 0%, transparent 70%)
          `
        }}
      >
        {/* Floating atoms */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-blue-400/80 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`
            }}
          />
        ))}
        
        {/* Neural network lines */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/60 to-transparent animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              height: `${Math.random() * 300 + 150}px`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Square - appears on scroll */}
      <div 
        ref={gradientSquareRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(251, 146, 60, 0.3) 0%, transparent 60%),
            linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(51, 65, 85, 0.4) 100%)
          `
        }}
      />

      {/* Sparks - moves down from right */}
      <div 
        ref={sparksRef}
        className="absolute top-0 right-0 w-96 h-96 opacity-80"
        style={{
          background: 'linear-gradient(45deg, rgba(251, 146, 60, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(236, 72, 153, 0.4) 100%)',
          borderRadius: '50%',
          filter: 'blur(20px)'
        }}
      />

      {/* Midsparks - behind 1 Million section */}
      <div 
        ref={midsparksRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(251, 146, 60, 0.3) 30%, rgba(236, 72, 153, 0.2) 60%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(30px)'
        }}
      />
    </div>
  );
};

export default FinalSparkAnimations;
