import { motion } from 'framer-motion';
import { Search, Lightbulb, FlaskConical, Presentation, Target } from 'lucide-react';

interface TimelineSectionProps {
  activeSection: number;
}

export default function TimelineSection({ activeSection }: TimelineSectionProps) {
  const milestones = [
    { icon: Target, label: 'Identify', description: 'Understanding the challenge', color: '#00A1DE' },
    { icon: Search, label: 'Research', description: 'Digging into data', color: '#1FA774' },
    { icon: Lightbulb, label: 'Prototype', description: 'Creating solutions', color: '#FFD23F' },
    { icon: FlaskConical, label: 'Test', description: 'Refining ideas', color: '#00A1DE' },
    { icon: Presentation, label: 'Present', description: 'Sharing our vision', color: '#1FA774' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-[#FFD23F] via-[#00A1DE] to-[#1FA774] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10" />
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#00A1DE] via-[#1FA774] to-[#FFD23F]"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          <div className="relative flex justify-between items-center">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isActive = activeSection >= 2 + index;

              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  {/* Milestone Circle */}
                  <motion.div
                    className="relative group cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => {
                      const element = document.getElementById(`challenge-${index + 1}`);
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <motion.div
                      className="w-24 h-24 rounded-full backdrop-blur-lg bg-white/5 border-2 flex items-center justify-center relative z-10"
                      style={{
                        borderColor: isActive ? milestone.color : 'rgba(255,255,255,0.1)',
                      }}
                      animate={{
                        borderColor: isActive ? milestone.color : 'rgba(255,255,255,0.1)',
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon
                        className="w-10 h-10"
                        style={{ color: isActive ? milestone.color : '#ffffff50' }}
                      />
                    </motion.div>

                    {/* Glow Effect */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full blur-xl"
                        style={{ backgroundColor: `${milestone.color}40` }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    )}

                    {/* Hover Card */}
                    <motion.div
                      className="absolute top-full mt-6 left-1/2 transform -translate-x-1/2 w-40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      initial={{ y: -10 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4 text-center">
                        <p className="text-sm text-[#F5F5F7]/80">{milestone.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    className="mt-8 text-center"
                    style={{
                      color: isActive ? milestone.color : '#ffffff80',
                    }}
                  >
                    {milestone.label}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="w-16 h-16 rounded-full backdrop-blur-lg bg-white/5 border-2 flex items-center justify-center shrink-0"
                  style={{ borderColor: milestone.color }}
                >
                  <Icon className="w-8 h-8" style={{ color: milestone.color }} />
                </div>
                <div>
                  <p className="text-xl" style={{ color: milestone.color }}>
                    {milestone.label}
                  </p>
                  <p className="text-sm text-[#F5F5F7]/70">{milestone.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
