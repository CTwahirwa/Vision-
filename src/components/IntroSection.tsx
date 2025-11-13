import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">Introduction</h2>
        <p className="text-lg text-gray-300">Welcome to our innovation lab</p>
      </motion.div>
    </section>
  );
}
