import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SectionBackgrounds = () => {
  const heroBgRef = useRef<HTMLDivElement>(null);
  const digitalBioBgRef = useRef<HTMLDivElement>(null);
  const neuronsBgRef = useRef<HTMLDivElement>(null);
  const benefitsBgRef = useRef<HTMLDivElement>(null);
  const newsletterBgRef = useRef<HTMLDivElement>(null);
  const contactBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section background animation
    if (heroBgRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+35%",
          scrub: 1.5,
        }
      }).to(heroBgRef.current, { 
        y: "-100%", 
        scale: 1.2,
        duration: 1 
      });
    }

    // Digital to Bio section background
    if (digitalBioBgRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#digital-bio-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      }).to(digitalBioBgRef.current, { 
        y: "-50%", 
        scale: 1.1,
        duration: 1 
      });
    }

    // Neurons section background
    if (neuronsBgRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#neurons-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      }).to(neuronsBgRef.current, { 
        y: "-30%", 
        scale: 1.15,
        duration: 1 
      });
    }

    // Benefits section background
    if (benefitsBgRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#benefits-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      }).to(benefitsBgRef.current, { 
        y: "-40%", 
        scale: 1.1,
        duration: 1 
      });
    }

    // Newsletter section background
    if (newsletterBgRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#newsletter-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      }).to(newsletterBgRef.current, { 
        y: "-25%", 
        scale: 1.05,
        duration: 1 
      });
    }

    // Contact section background
    if (contactBgRef.current) {
      gsap.timeline({
        scrollTrigger: {
          trigger: "#contact-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        }
      }).to(contactBgRef.current, { 
        y: "-35%", 
        scale: 1.08,
        duration: 1 
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Hero Section Background */}
      <div 
        ref={heroBgRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(6, 78, 59, 0.1) 0%, transparent 70%)
          `
        }}
      />

      {/* Digital to Bio Section Background */}
      <div 
        ref={digitalBioBgRef}
        className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900 to-orange-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 70% 60%, rgba(251, 146, 60, 0.15) 0%, transparent 60%)
          `
        }}
      />

      {/* Neurons Section Background */}
      <div 
        ref={neuronsBgRef}
        className="absolute inset-0 bg-gradient-to-b from-purple-900 via-pink-900 to-cyan-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 40% 20%, rgba(168, 85, 247, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 40%, rgba(34, 197, 94, 0.15) 0%, transparent 60%)
          `
        }}
      />

      {/* Benefits Section Background */}
      <div 
        ref={benefitsBgRef}
        className="absolute inset-0 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)
          `
        }}
      />

      {/* Newsletter Section Background */}
      <div 
        ref={newsletterBgRef}
        className="absolute inset-0 bg-gradient-to-t from-slate-900 via-blue-900 to-slate-800"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
            radial-gradient(circle at 30% 70%, rgba(71, 85, 105, 0.1) 0%, transparent 60%)
          `
        }}
      />

      {/* Contact Section Background */}
      <div 
        ref={contactBgRef}
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 40%, rgba(99, 102, 241, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 80% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 60%)
          `
        }}
      />
    </div>
  );
};

export default SectionBackgrounds;

