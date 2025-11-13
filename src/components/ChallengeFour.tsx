import { motion } from 'framer-motion';
import { ThumbsUp, MessageSquare, RefreshCw } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ChallengeFour() {
  const feedbackItems = [
    {
      icon: ThumbsUp,
      feedback: '"The offline mode is a game-changer for rural areas."',
      response: 'Enhanced offline capabilities with 3-day cache',
      color: '#1FA774',
    },
    {
      icon: MessageSquare,
      feedback: '"UI needs to be more intuitive for younger students."',
      response: 'Redesigned interface with larger buttons and icons',
      color: '#00A1DE',
    },
    {
      icon: RefreshCw,
      feedback: '"Load times need improvement on low-end devices."',
      response: 'Optimized code, reduced app size by 40%',
      color: '#FFD23F',
    },
  ];

  return (
    <section id="challenge-4" className="relative min-h-screen flex items-center py-20 px-6">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1562577309-87b9a3f86d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlc3Rpbmd8ZW58MXx8fHwxNjczMDI1ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Team collaboration"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1FA774]/20 to-[#00A1DE]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-[#00A1DE]/20 border border-[#00A1DE]/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#00A1DE]">Challenge 04 • Test</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#00A1DE] bg-clip-text text-transparent">
            Refining Through Feedback
          </h2>

          <p className="text-lg text-[#F5F5F7]/80 max-w-3xl mx-auto">
            We piloted our solutions with 100 students and 20 teachers across three schools, 
            collecting real-world feedback to iterate and improve.
          </p>
        </motion.div>

        {/* Before/After Concept */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl mb-6 text-[#FFD23F]">Initial Prototype</h3>
                <div className="space-y-3 text-[#F5F5F7]/70">
                  <p>• Basic offline functionality</p>
                  <p>• Complex navigation structure</p>
                  <p>• 15MB app size</p>
                  <p>• 5-second load time</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-6 text-[#1FA774]">After Testing & Iteration</h3>
                <div className="space-y-3 text-[#F5F5F7]/70">
                  <p>• 3-day offline cache</p>
                  <p>• Simplified, intuitive UI</p>
                  <p>• 9MB app size (-40%)</p>
                  <p>• 2-second load time</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feedback Cards */}
        <div className="space-y-6">
          <h3 className="text-2xl text-center mb-8 text-[#FFD23F]">Key Feedback & Responses</h3>
          
          {feedbackItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: item.color }}
                />

                <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>

                  <div className="flex-1 grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-[#F5F5F7]/50 mb-2">Feedback</p>
                      <p className="text-[#F5F5F7]/90 italic">{item.feedback}</p>
                    </div>
                    <div>
                      <p className="text-sm mb-2" style={{ color: item.color }}>
                        Our Response
                      </p>
                      <p className="text-[#F5F5F7]/90">{item.response}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testing Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { value: '100+', label: 'Students Tested', color: '#00A1DE' },
            { value: '20+', label: 'Teachers Involved', color: '#1FA774' },
            { value: '3', label: 'Schools Piloted', color: '#FFD23F' },
            { value: '250+', label: 'Feedback Points', color: '#00A1DE' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-4xl mb-2" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-sm text-[#F5F5F7]/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
