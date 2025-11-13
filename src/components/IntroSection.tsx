import { motion } from 'framer-motion';
import { Lightbulb, BookOpen, Laptop } from 'lucide-react';

export default function IntroSection() {
  const icons = [
    { Icon: Lightbulb, color: '#FFD23F', delay: 0 },
    { Icon: BookOpen, color: '#00A1DE', delay: 0.2 },
    { Icon: Laptop, color: '#1FA774', delay: 0.4 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
      {/* Blurred Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1FA774]/10 to-[#0A0A0A]" />
      
      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Glassmorphic Card */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A1DE] via-[#1FA774] to-[#FFD23F] rounded-3xl opacity-20 blur-xl" />
          
          <div className="relative">
            <motion.h2
              className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-[#00A1DE] to-[#1FA774] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Story
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-[#F5F5F7]/90 leading-relaxed text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              We joined the E-Lab program to tackle one of Rwanda's most vital challenges — education. 
              From discovering the problem to creating tech-powered solutions, this is our story of 
              teamwork, creativity, and purpose.
            </motion.p>

            {/* Orbiting Icons */}
            <div className="flex justify-center items-center gap-8 md:gap-16">
              {icons.map(({ Icon, color, delay }, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + delay, type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className="p-6 rounded-full backdrop-blur-lg bg-white/5 border border-white/10"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: delay,
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: `0 0 30px ${color}50`,
                    }}
                  >
                    <Icon 
                      className="w-8 h-8" 
                      style={{ color }}
                    />
                  </motion.div>
                  
                  {/* Icon Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl"
                    style={{ backgroundColor: `${color}30` }}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: delay,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
