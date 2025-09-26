import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GSAPAnimations = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const digitalBioRef = useRef<HTMLDivElement>(null);
  const neuronsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animations
    if (heroContentRef.current) {
      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "expo.out",
          duration: 2,
        }
      });

      heroTimeline
        .from(".hero-title", {
          y: 30,
          scale: 0.5,
          autoAlpha: 0,
          duration: 1.5
        })
        .from(".hero-subtitle", {
          y: 50,
          scale: 1.5,
          autoAlpha: 0,
          duration: 1.5
        }, "<");

      // Hero scroll out animation
      gsap.timeline({
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      }).to(heroContentRef.current, {
        y: -300,
        scale: 0.8,
        autoAlpha: 0,
        duration: 1
      });
    }

    // Digital to Bio section animations
    if (digitalBioRef.current) {
      const digitalBioTimeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "expo",
          duration: 2.5,
        }
      });

      digitalBioTimeline
        .from(".digital-bio-title", {
          y: -150,
          autoAlpha: 0,
          scale: 0,
          duration: 2,
          delay: 1
        })
        .from(".digital-bio-content", {
          scale: 0.5,
          y: 150,
          autoAlpha: 0,
          duration: 3,
        })
        .from(".digital-bio-caption", {
          y: 50,
          autoAlpha: 0,
          duration: 2
        }, "<")
        .to(".digital-bio-arrow", {
          autoAlpha: 1,
          duration: 2
        }, "<50%");

      ScrollTrigger.create({
        trigger: "#digital-bio-section",
        start: "top bottom",
        end: "bottom bottom",
        animation: digitalBioTimeline,
        scrub: 1.5,
      });
    }

    // Neurons section animations
    if (neuronsRef.current) {
      const neuronsTimeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "expo",
          duration: 2.5,
        }
      });

      neuronsTimeline
        .from(".neurons-bg", {
          backgroundPosition: "0% 0%",
          backgroundSize: "150%",
          ease: "power4",
        })
        .from(".neurons-content", {
          autoAlpha: 0,
          y: 250,
          scale: 0.1
        }, "<")
        .from(".neurons-text", {
          y: -150,
          autoAlpha: 0,
        }, "<");

      ScrollTrigger.create({
        trigger: "#neurons-section",
        start: "top 85%",
        end: "+=150%",
        animation: neuronsTimeline,
        scrub: 1.5,
      });
    }

    // Benefits section animations
    if (benefitsRef.current) {
      const benefitsTimeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power4",
          duration: 1.5,
        }
      });

      const benefitsTitle = benefitsRef.current.querySelector(".benefits-title");
      const benefitsDesc = benefitsRef.current.querySelector(".benefits-desc");
      const benefitsCircles = benefitsRef.current.querySelectorAll(".benefits-circle");

      benefitsTimeline
        .from(benefitsTitle, {
          autoAlpha: 0,
          y: -500,
          scale: 3,
          duration: 1.5,
        })
        .from(benefitsDesc, {
          autoAlpha: 0,
          y: -500,
          duration: 1.5,
        }, "<")
        .from(benefitsCircles, {
          y: 100,
          autoAlpha: 0,
          stagger: 0.5,
          duration: 1.5
        }, "<50%");

      ScrollTrigger.create({
        trigger: "#benefits-section",
        start: "top 85%",
        end: "bottom bottom",
        animation: benefitsTimeline,
        scrub: 1.5,
        once: true,
      });
    }

    // Newsletter section animations
    if (newsletterRef.current) {
      const newsletterTimeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "expo",
          duration: 1.5,
        }
      });

      newsletterTimeline
        .from(".newsletter-content", {
          autoAlpha: 0,
          y: 250,
        })
        .from(".newsletter-form", {
          autoAlpha: 0,
          y: 250,
          duration: 2,
        }, "<");

      ScrollTrigger.create({
        trigger: "#newsletter-section",
        start: "top 85%",
        end: "+=150%",
        animation: newsletterTimeline,
        toggleActions: "play none none reset",
      });
    }

    // Contact section animations
    if (contactRef.current) {
      const contactTimeline = gsap.timeline({
        paused: true,
        defaults: {
          ease: "power4",
          duration: 2.5,
        }
      });

      const contactTitle = contactRef.current.querySelector(".contact-title");
      const contactDesc = contactRef.current.querySelector(".contact-desc");
      const contactCircles = contactRef.current.querySelectorAll(".contact-circle");

      contactTimeline
        .from(contactTitle, {
          autoAlpha: 0,
          y: -500,
          scale: 3,
          duration: 1.5,
        })
        .from(contactDesc, {
          autoAlpha: 0,
          y: -500,
          duration: 1.5,
        }, "<")
        .from(contactCircles, {
          y: 100,
          autoAlpha: 0,
          stagger: 0.5,
          duration: 1.5
        }, "<50%");

      ScrollTrigger.create({
        trigger: "#contact-section",
        start: "top 80%",
        end: "bottom bottom",
        animation: contactTimeline,
        scrub: 1.5,
      });
    }

    // Global scroll animations for background elements
    const parallaxElements = document.querySelectorAll(".parallax-element");
    parallaxElements.forEach((el, index) => {
      let st_end = "+25%";
      switch (index) {
        case 0:
          st_end = "+35%";
          break;
        case 1:
          st_end = "+45%";
          break;
        case 2:
          st_end = "+75%";
          break;
        default:
          st_end = "+75%";
          break;
      }
      
      gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          scrub: 1.5,
          start: "top top",
          end: st_end,
        }
      }).to(el, { y: "-100%", duration: 1 });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null; // This component only handles animations
};

export default GSAPAnimations;

