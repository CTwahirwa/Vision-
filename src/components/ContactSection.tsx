import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Linkedin, Instagram, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your interest! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: '#00A1DE' },
    { icon: Instagram, label: 'Instagram', href: '#', color: '#FFD23F' },
    { icon: Mail, label: 'Email', href: 'mailto:info@elabrwanda.org', color: '#1FA774' },
  ];

  return (
    <section id="contact-section" className="relative min-h-screen flex items-center py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#00A1DE]/10 to-[#0A0A0A]" />
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#1FA774]/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-[#00A1DE] to-[#1FA774] bg-clip-text text-transparent">
            Let's Collaborate
          </h2>
          <p className="text-lg text-[#F5F5F7]/80 max-w-2xl mx-auto">
            Whether you're an educator, developer, investor, or simply share our passion for 
            transforming education — we'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm text-[#F5F5F7]/70 mb-2">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-white/5 border-white/10 text-white placeholder:text-[#F5F5F7]/30 focus:border-[#00A1DE] focus:ring-[#00A1DE]/20 rounded-xl transition-all"
                placeholder="Enter your name"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <label htmlFor="email" className="block text-sm text-[#F5F5F7]/70 mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-white/5 border-white/10 text-white placeholder:text-[#F5F5F7]/30 focus:border-[#00A1DE] focus:ring-[#00A1DE]/20 rounded-xl transition-all"
                placeholder="your.email@gmail.com"
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="message" className="block text-sm text-[#F5F5F7]/70 mb-2">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full bg-white/5 border-white/10 text-white placeholder:text-[#F5F5F7]/30 focus:border-[#00A1DE] focus:ring-[#00A1DE]/20 rounded-xl transition-all resize-none"
                placeholder="Tell us about your interest, ideas, or how you'd like to collaborate..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-12 py-6 text-lg bg-gradient-to-r from-[#00A1DE] to-[#1FA774] hover:shadow-[0_0_40px_rgba(0,161,222,0.5)] transition-all duration-300 relative overflow-hidden group"
              >
                <motion.span
                  className="relative z-10 flex items-center gap-2 justify-center"
                  animate={isSubmitting ? { scale: [1, 1.05, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isSubmitting ? Infinity : 0 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </motion.span>

                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                className="flex items-center gap-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 10px 30px ${social.color}40`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: social.color }} />
                </div>
                <span className="text-[#F5F5F7]/80 group-hover:text-white transition-colors">
                  {social.label}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Footer Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
            <p className="text-lg text-[#F5F5F7]/80 italic mb-2">
              "Education fuels innovation — and innovation builds the Rwanda we dream of."
            </p>
            <p className="text-sm text-[#FFD23F]">— VISIONARIES Rwanda Team</p>
          </div>
          <p className="text-sm text-[#F5F5F7]/50 mt-8">
            © 2025 VISIONARIES Rwanda. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
