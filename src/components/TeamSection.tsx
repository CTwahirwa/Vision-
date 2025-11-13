import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import LoicImage from '../ Images/ Image 2025.jpeg';
import HomereImage from '../ Images/DSC_0106.jpg';
import OpportuneImage from '../ Images/IMG_7533.png';
import SheillaImage from '../ Images/IMG_7533.png';
import JoyImage from '../ Images/Joy.jpeg';

export default function TeamSection() {
  const team = [
    {
      name: 'Loic NSENGIYUMVA',
      role: 'VISIONARIES TEAM LEADER',
      quote: 'Innovation begins where challenges meet courage.',
      image: LoicImage,
      color: '#00A1DE',
    },
    {
      name: 'Homere Fidelite Christophe Twahirwa',
      role: 'Lead Developer',
      quote: 'Code is our tool; impact is our measure.',
      image: HomereImage,
      color: '#1FA774',
    },
    {
      name: 'Opportune Byiringiro',
      role: 'Research & Data Analyst',
      quote: 'Data tells the story; we give it meaning.',
      image: OpportuneImage,
      color: '#FFD23F',
    },
    {
      name: 'Sheilla Uwishimwe',
      role: 'Community Liaison',
      quote: 'Real solutions come from listening first.',
      image: SheillaImage,
      color: '#00A1DE',
    },
    {
      name: 'Joy Kendi',
      role: 'Content & Communication',
      quote: 'Stories inspire action; we tell the right ones.',
      image: JoyImage,
      color: '#1FA774',
    },
  ];

  return (
    <section id="team-section" className="relative min-h-screen flex items-center py-20 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#00A1DE]/5 to-[#0A0A0A]" />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-[#00A1DE] via-[#FFD23F] to-[#1FA774] bg-clip-text text-transparent">
            Meet the Innovators
          </h2>
          <p className="text-lg text-[#F5F5F7]/80 max-w-3xl mx-auto">
            Five passionate individuals united by one vision: transforming education in Rwanda.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 text-center h-full"
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 40px ${member.color}30`,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative">
                  <div className="relative mb-6">
                    <motion.div
                      className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border-4 border-white/10"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>

                  <h3
                    className="text-xl mb-2"
                    style={{ color: member.color }}
                  >
                    {member.name}
                  </h3>

                  <p className="text-sm text-[#F5F5F7]/70 mb-4">
                    {member.role}
                  </p>

                  <div className="relative pt-4 border-t border-white/10">
                    <p className="text-xs text-[#F5F5F7]/60 italic">
                      "{member.quote}"
                    </p>
                  </div>

                  <div className="flex justify-center gap-3 mt-4">
                    <motion.a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Linkedin className="w-4 h-4" style={{ color: member.color }} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Mail className="w-4 h-4" style={{ color: member.color }} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
