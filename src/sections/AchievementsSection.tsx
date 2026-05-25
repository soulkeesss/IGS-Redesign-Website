import { useState, useRef } from 'react';
import { achievements } from '@/data';
import { Trophy, ArrowRight, X, Star, Calendar } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function AchievementsSection() {
  const [selected, setSelected] = useState<typeof achievements[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-black relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Prestasi
          </div>
          <h2 className="section-title">Prestasi <span className="text-gradient-blue">IGS</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">Berbagai pencapaian gemilang yang telah diraih oleh siswa dan sekolah kami.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              onClick={() => setSelected(item)}
              className="card-igs cursor-pointer group"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.foto} alt={item.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-3 right-3">
                  <div className="bg-red-600 p-2 rounded-full">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">{item.judul}</h4>
                <p className="text-white/50 text-sm line-clamp-2 mb-3">{item.keterangan}</p>
                <div className="flex items-center gap-1 text-red-400 text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Selengkapnya</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="relative h-64 sm:h-80">
                <img src={selected.foto} alt={selected.judul} className="w-full h-full object-cover rounded-t-2xl" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-red-500" />
                  <span className="text-red-400 text-sm font-medium">Prestasi Unggulan</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{selected.judul}</h3>
                <p className="text-white/70 leading-relaxed mb-4">{selected.detail}</p>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>IGS Achievement Record</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
