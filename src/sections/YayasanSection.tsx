import { useRef } from 'react';
import { yayasan } from '@/data';
import { Crown, Award, Heart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function YayasanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/10 to-blue-950/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            Yayasan
          </div>
          <h2 className="section-title">Ketua <span className="text-gradient-blue">Yayasan</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-900/20 border border-red-900/20">
              <img src={yayasan.foto} alt={yayasan.ketua} className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-1">{yayasan.ketua}</h3>
                <p className="text-blue-300">Ketua {yayasan.nama}</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold text-white">Visi & Misi</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-lg mb-8">{yayasan.deskripsi}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: '🎓', label: '20+', desc: 'Tahun Berdiri' },
                { icon: '👨‍🎓', label: '2000+', desc: 'Siswa Aktif' },
                { icon: '🏆', label: '150+', desc: 'Prestasi' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-red-900/20 rounded-xl p-4 text-center hover:border-red-500/30 transition-colors"
                >
                  <div className="text-2xl mb-2">{stat.label}</div>
                  <div className="text-sm text-white/60">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
