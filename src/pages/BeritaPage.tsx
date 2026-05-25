import { useState } from 'react';
import { newsList } from '@/data';
import PageHeader from '@/components/PageHeader';
import { Newspaper, Clock, ArrowRight, X, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BeritaPage() {
  const [selected, setSelected] = useState<typeof newsList[0] | null>(null);

  return (
    <>
      <PageHeader
        title="Berita Utama"
        subtitle="Berita, foto, video, dan informasi terbaru dari IGS."
        icon={<Newspaper className="w-6 h-6 text-red-500" />}
      />
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden mb-12 border border-red-900/20 group cursor-pointer"
          >
            <img src="/images/banner/banner3.jpg" alt="Featured" className="w-full h-[300px] md:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full mb-3 inline-block">Featured Video</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Highlight Kegiatan IGS Tahun 2025</h2>
            </div>
          </motion.div>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsList.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelected(item)}
                className="card-igs cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={item.foto} alt={item.judul} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-red-600/90 text-white text-xs font-medium rounded-full">{item.tanggal}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors text-sm line-clamp-2">{item.judul}</h4>
                  <p className="text-white/50 text-xs line-clamp-2 mb-3">{item.ringkasan}</p>
                  <div className="flex items-center gap-1 text-red-400 text-xs font-medium">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
