import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00A1DE] via-[#1FA774] to-[#0A0A0A]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Glow Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00A1DE]/30 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1FA774]/30 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-8xl md:text-9xl mb-6 bg-gradient-to-r from-white via-[#FFD23F] to-white bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            VISIONARIES
          </motion.h1>
          
          <motion.h2
            className="text-3xl md:text-5xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Transforming Education Through Innovation
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-[#F5F5F7]/80 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Five innovators. One mission — to reimagine education for Rwanda's next generation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
          >
            <Button
              onClick={scrollToContent}
              className="relative px-8 py-6 text-lg bg-gradient-to-r from-[#00A1DE] to-[#1FA774] hover:shadow-[0_0_30px_rgba(0,161,222,0.5)] transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Start the Journey</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </Button>

            <Button
              onClick={() => document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' })}
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-[#FFD23F] text-[#FFD23F] hover:bg-[#FFD23F]/10 hover:shadow-[0_0_30px_rgba(255,210,63,0.3)] transition-all duration-300"
            >
              Meet the Team
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        onClick={scrollToContent}
      >
        <ChevronDown className="w-8 h-8 text-[#FFD23F]" />
      </motion.div>
    </section>
  );
}
