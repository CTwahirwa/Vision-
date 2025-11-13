import { motion } from 'framer-motion';
import { Sparkles, Rocket, Target } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ChallengeFive() {
  const visionPoints = [
    {
      icon: Target,
      title: '10,000+ Students',
      description: 'Reach within first year',
      color: '#00A1DE',
    },
    {
      icon: Sparkles,
      title: '50+ Teachers',
      description: 'Trained on digital tools',
      color: '#1FA774',
    },
    {
      icon: Rocket,
      title: 'National Scale',
      description: 'Expansion by 2026',
      color: '#FFD23F',
    },
  ];

  return (
    <section id="challenge-5" className="relative min-h-screen flex items-center py-20 px-6">
      {/* Background with City Skyline */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1609587871253-275adaed4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaWdhbGklMjBSd2FuZGElMjBza3lsaW5lJTIwbmlnaHR8ZW58MXx8fHwxNzYzMDI1ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Kigali skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/60" />
        
        {/* Glowing Effect on Skyline */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1FA774]/30 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-[#1FA774]/20 border border-[#1FA774]/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#1FA774]">Challenge 05 • Present</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white via-[#FFD23F] to-[#1FA774] bg-clip-text text-transparent">
            Our Vision for Rwanda's Future
          </h2>

          <p className="text-lg text-[#F5F5F7]/80 max-w-3xl mx-auto">
            From challenge to solution — we've created a roadmap for sustainable, 
            tech-powered education that can transform Rwanda's learning landscape.
          </p>
        </motion.div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ backgroundColor: `${point.color}40` }}
                />

                <div className="relative">
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: `${point.color}20` }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Icon className="w-10 h-10" style={{ color: point.color }} />
                  </motion.div>

                  <h3 className="text-2xl mb-2" style={{ color: point.color }}>
                    {point.title}
                  </h3>
                  <p className="text-[#F5F5F7]/70">{point.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-[#F5F5F7]/80 mb-8">
            Join us in transforming education for Rwanda's next generation
          </p>
          
          <Button
            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative px-12 py-6 text-lg bg-gradient-to-r from-[#FFD23F] to-[#1FA774] hover:shadow-[0_0_40px_rgba(255,210,63,0.5)] transition-all duration-300 group overflow-hidden"
          >
            <motion.span
              className="relative z-10"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Join Our Mission
            </motion.span>
            
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
