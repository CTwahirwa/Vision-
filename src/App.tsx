import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import TimelineSection from './components/TimelineSection';
import ChallengeOne from './components/ChallengeOne';
import ChallengeTwo from './components/ChallengeTwo';
import ChallengeThree from './components/ChallengeThree';
import ChallengeFour from './components/ChallengeFour';
import ChallengeFive from './components/ChallengeFive';
import TeamSection from './components/TeamSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A1DE] via-[#1FA774] to-[#FFD23F] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#00A1DE]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <HeroSection />
      <IntroSection />
      <TimelineSection activeSection={activeSection} />
      <ChallengeOne />
      <ChallengeTwo />
      <ChallengeThree />
      <ChallengeFour />
      <ChallengeFive />
      <TeamSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
