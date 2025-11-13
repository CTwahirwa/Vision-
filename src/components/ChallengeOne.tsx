import { motion } from 'framer-motion';
import { TrendingDown, Users, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ChallengeOne() {
  const stats = [
    { icon: Users, value: '68%', label: 'Students lack digital access', color: '#00A1DE' },
    { icon: BookOpen, value: '42%', label: 'Teacher-student ratio gap', color: '#1FA774' },
    { icon: TrendingDown, value: '35%', label: 'Rural dropout rate', color: '#FFD23F' },
  ];

  return (
    <section id="challenge-1" className="relative min-h-screen flex items-center py-20 px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1553777907-f5dbbbb44d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjMwMjU4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Rwanda classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-[#00A1DE]/20 border border-[#00A1DE]/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00A1DE]">Challenge 01 • Identify</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#00A1DE] bg-clip-text text-transparent">
            Understanding Rwanda's Education Gap
          </h2>

          <p className="text-lg text-[#F5F5F7]/80 mb-8 leading-relaxed">
            Our journey began with a critical question: What are the barriers preventing quality 
            education in Rwanda? Through community engagement and research, we uncovered systemic 
            challenges affecting thousands of students across urban and rural areas.
          </p>

          <p className="text-lg text-[#F5F5F7]/80 mb-8 leading-relaxed">
            Limited digital infrastructure, overcrowded classrooms, and lack of teacher training 
            emerged as key issues. These aren't just statistics — they represent real students 
            with untapped potential.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                  style={{ backgroundColor: `${stat.color}30` }}
                />

                <div className="relative flex items-center gap-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p
                      className="text-4xl mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[#F5F5F7]/70">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
