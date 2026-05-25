import { useState, useRef } from 'react';
import { newsList } from '@/data';
import { Newspaper, ArrowRight, X, Clock, User } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function NewsSection() {
  const [selected, setSelected] = useState<typeof newsList[0] | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
            <Newspaper className="w-4 h-4" />
            Berita
          </div>
          <h2 className="section-title">Berita <span className="text-gradient-blue">Utama</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">Ikuti perkembangan terbaru dari kegiatan dan prestasi IGS.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsList.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onClick={() => setSelected(item)}
              className="card-igs cursor-pointer group"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={item.foto} alt={item.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-red-600/90 text-white text-xs font-medium rounded-full">{item.tanggal}</span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors text-sm">{item.judul}</h4>
                <p className="text-white/50 text-xs line-clamp-2 mb-3">{item.ringkasan}</p>
                <div className="flex items-center gap-1 text-red-400 text-xs font-medium group-hover:gap-2 transition-all">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3 h-3" />
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
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">{selected.tanggal}</span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{selected.judul}</h3>
                <p className="text-white/70 leading-relaxed">{selected.isi}</p>
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/10 text-white/40 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{selected.tanggal}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>IGS Editorial</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
