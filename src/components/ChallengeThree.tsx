import { motion } from 'motion/react';
import { Smartphone, GraduationCap, Network } from 'lucide-react';

export default function ChallengeThree() {
  const solutions = [
    {
      icon: Network,
      title: 'Digital Learning Hub',
      description: 'A centralized platform connecting students with educational resources, virtual tutors, and peer collaboration tools.',
      features: ['Offline-first design', 'Multi-language support', 'Progress tracking'],
      color: '#00A1DE',
    },
    {
      icon: GraduationCap,
      title: 'Teacher Training Portal',
      description: 'Empowering educators with modern teaching methodologies, digital literacy, and classroom management tools.',
      features: ['Video tutorials', 'Certification programs', 'Community forums'],
      color: '#1FA774',
    },
    {
      icon: Smartphone,
      title: 'Student Mobile App',
      description: 'A mobile-first learning companion that works with limited connectivity and adapts to individual learning pace.',
      features: ['Gamified learning', 'SMS fallback', 'Parent dashboard'],
      color: '#FFD23F',
    },
  ];

  return (
    <section id="challenge-3" className="relative min-h-screen flex items-center py-20 px-6">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1FA774]/5 to-[#0A0A0A]" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00A1DE]/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
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
            className="inline-block px-4 py-2 rounded-full bg-[#FFD23F]/20 border border-[#FFD23F]/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FFD23F]">Challenge 03 • Prototype</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#FFD23F] bg-clip-text text-transparent">
            Tech-Driven Solutions
          </h2>

          <p className="text-lg text-[#F5F5F7]/80 max-w-3xl mx-auto">
            Turning insights into action, we prototyped three interconnected solutions designed 
            to transform education delivery in Rwanda.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Floating Card */}
                <motion.div
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 h-full"
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px ${solution.color}30`,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: `${solution.color}40` }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                      style={{ backgroundColor: `${solution.color}20` }}
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: solution.color }} />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="text-2xl mb-4 text-center"
                      style={{ color: solution.color }}
                    >
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#F5F5F7]/80 mb-6 text-center leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-[#F5F5F7]/70"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * featureIndex }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: solution.color }}
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Mockup Link Placeholder */}
                    <motion.div
                      className="mt-6 pt-6 border-t border-white/10 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span
                        className="text-sm cursor-pointer hover:underline"
                        style={{ color: solution.color }}
                      >
                        View Prototype →
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
