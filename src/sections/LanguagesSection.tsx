import { useRef } from 'react';
import { bahasaAsing } from '@/data';
import { Globe, BookOpen, MessageCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function LanguagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="bahasa" className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            Program Bahasa
          </div>
          <h2 className="section-title">Bahasa <span className="text-gradient-blue">Asing</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Kami menyediakan program bahasa internasional dengan guru-guru profesional untuk mempersiapkan siswa menghadapi era globalisasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bahasaAsing.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-igs group hover:shadow-2xl hover:shadow-red-900/20 transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.guru}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-blue-300 text-sm mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span>Pengajar</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.guru}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="w-5 h-5 text-red-500" />
                  <h4 className="text-lg font-semibold text-white">{item.bahasa}</h4>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{item.deskripsi}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
