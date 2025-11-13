import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import TeamSection from './components/TeamSection';
import ChallengeOne from './components/ChallengeOne';
import ChallengeTwo from './components/ChallengeTwo';
import ChallengeThree from './components/ChallengeThree';
import ChallengeFour from './components/ChallengeFour';
import ChallengeFive from './components/ChallengeFive';
import GallerySection from './components/GallerySection';
import TimelineSection from './components/TimelineSection';
import ContactSection from './components/ContactSection';
import './styles/globals.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00A1DE] via-[#FFD23F] to-[#1FA774] origin-left"
        style={{ scaleX }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
      />
      <HeroSection />
      <IntroSection />
      <TeamSection />
      <ChallengeOne />
      <ChallengeTwo />
      <ChallengeThree />
      <ChallengeFour />
      <ChallengeFive />
      <GallerySection />
      <TimelineSection />
      <ContactSection />
    </>
  );
}

export default App;
