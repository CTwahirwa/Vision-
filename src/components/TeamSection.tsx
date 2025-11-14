import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import LoicImage from '../ Images/ Image 2025.jpeg';
import HomereImage from '../ Images/DSC_0106.jpg';
import OpportuneImage from '../ Images/IMG_7533.png';
import SheillaImage from '../ Images/Sheilla.jpeg';
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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#00A1DE]/5 to-[#0A0A0A]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-[#00A1DE] via-[#FFD23F] to-[#1FA774] bg-clip-text text-transparent">
            Meet the Innovators
          </h2>
          <p className="text-xl md:text-2xl text-[#F5F5F7]/80 max-w-3xl mx-auto">
            Five passionate individuals united by one vision: transforming education in Rwanda.
          </p>
        </motion.div>

        {/* Team Grid with Connection Lines */}
        <div className="relative">
          {/* Connection Lines SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
            <motion.line
              x1="20%" y1="50%" x2="40%" y2="30%"
              stroke="#00A1DE"
              strokeWidth="1"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.line
              x1="40%" y1="30%" x2="60%" y2="30%"
              stroke="#1FA774"
              strokeWidth="1"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
            <motion.line
              x1="60%" y1="30%" x2="80%" y2="50%"
              stroke="#FFD23F"
              strokeWidth="1"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.9 }}
            />
          </svg>

          {/* Team Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8" style={{ zIndex: 1 }}>
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Card */}
                <motion.div
                  className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 text-center h-full"
                  whileHover={{
                    y: -10,
                    boxShadow: `0 20px 40px ${member.color}30`,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: `${member.color}40` }}
                  />

                  <div className="relative">
                    {/* Photo */}
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

                      {/* Glow Ring */}
                      <motion.div
                        className="absolute inset-0 w-32 h-32 mx-auto rounded-2xl"
                        style={{
                          border: `2px solid ${member.color}`,
                          opacity: 0,
                        }}
                        whileHover={{
                          opacity: 1,
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Name */}
                    <h3
                      className="text-xl mb-2"
                      style={{ color: member.color }}
                    >
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className="text-sm text-[#F5F5F7]/70 mb-4">
                      {member.role}
                    </p>

                    {/* Quote */}
                    <div className="relative pt-4 border-t border-white/10">
                      <p className="text-xs text-[#F5F5F7]/60 italic">
                        "{member.quote}"
                      </p>
                    </div>

                    {/* Social Links */}
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

                {/* Connection Node */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full hidden lg:block"
                  style={{ backgroundColor: member.color }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.6 }}
                  viewport={{ once: true }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Statement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-[#F5F5F7]/80 italic">
              "Together, we represent the spirit of innovation that Rwanda embodies. 
              Our diverse backgrounds in technology, education, and community development 
              unite us in a common mission: making quality education accessible to all."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}