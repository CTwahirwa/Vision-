import { motion } from 'framer-motion';
import { useState } from 'react';
import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1553777907-f5dbbbb44d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjMwMjU4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Engaging with students at pilot school',
      tall: true,
    },
    {
      src: 'https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjMwMjU5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Team collaboration session',
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1562577309-87b9a3f86d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHRlc3Rpbmd8ZW58MXx8fHwxNjczMDI1ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Testing prototypes with teachers',
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2MjkwNzk0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Analyzing research data',
      tall: true,
    },
    {
      src: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGlubm92YXRpb258ZW58MXx8fHwxNzYyOTkwOTI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Digital innovation workshop',
      tall: false,
    },
    {
      src: 'https://images.unsplash.com/photo-1609587871253-275adaed4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaWdhbGklMjBSd2FuZGElMjBza3lsaW5lJTIwbmlnaHR8ZW58MXx8fHwxNzYzMDI1ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Building Rwanda\'s future together',
      tall: true,
    },
  ];

  return (
    <section className="relative min-h-screen py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#1FA774]/5 to-[#0A0A0A]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-[#FFD23F] to-[#1FA774] bg-clip-text text-transparent">
            Our Journey in Pictures
          </h2>
          <p className="text-lg text-[#F5F5F7]/80 max-w-3xl mx-auto">
            Moments captured throughout our E-Lab experience — from research to implementation.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <Masonry columnsCount={3} gutter="1.5rem">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedImage(index)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <ImageWithFallback
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ height: image.tall ? '400px' : '250px' }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Caption */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                >
                  <p className="text-sm">{image.caption}</p>
                </motion.div>

                {/* Glow Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-[#00A1DE] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 161, 222, 0.5)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </Masonry>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.div
              className="max-w-5xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].caption}
                className="w-full h-auto rounded-2xl"
              />
              <p className="text-center text-white mt-4 text-lg">
                {galleryImages[selectedImage].caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
