import { motion } from 'framer-motion';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ChallengeTwo() {
  const insights = [
    {
      title: 'Student Feedback',
      quote: '"We want to learn, but sometimes the resources just aren\'t there."',
      author: 'Student, Kigali Secondary School',
    },
    {
      title: 'Teacher Perspective',
      quote: '"With 60 students per class, personalized learning becomes nearly impossible."',
      author: 'Teacher, Rural Rwanda',
    },
    {
      title: 'Community Voice',
      quote: '"Technology could bridge the gap, but we need sustainable solutions."',
      author: 'Parent & Community Leader',
    },
  ];

  return (
    <section id="challenge-2" className="relative min-h-screen flex items-center py-20 px-6">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#00A1DE]/10 to-[#0A0A0A]" />
      
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
            <span className="text-[#1FA774]">Challenge 02 • Research</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#1FA774] bg-clip-text text-transparent">
            Digging into the Data
          </h2>

          <p className="text-lg text-[#F5F5F7]/80 max-w-3xl mx-auto">
            We collected quantitative and qualitative data from 500+ students, 50+ teachers, 
            and community stakeholders to understand the full scope of the challenge.
          </p>
        </motion.div>

        {/* Data Visualization Area */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { icon: BarChart3, label: 'Survey Analysis', color: '#00A1DE' },
            { icon: PieChart, label: 'Resource Distribution', color: '#1FA774' },
            { icon: TrendingUp, label: 'Impact Projection', color: '#FFD23F' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 group hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
                  style={{ backgroundColor: `${item.color}30` }}
                />

                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: item.color }} />
                  </div>
                  <p className="text-center text-lg" style={{ color: item.color }}>
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="space-y-6">
          <h3 className="text-2xl text-center mb-8 text-[#FFD23F]">Voices from the Community</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-4 left-4 text-6xl text-[#00A1DE]/20">"</div>
                <div className="relative pt-8">
                  <p className="text-[#F5F5F7]/90 mb-4 italic">{insight.quote}</p>
                  <p className="text-sm text-[#FFD23F]">— {insight.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
