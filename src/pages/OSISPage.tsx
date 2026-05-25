import { osisList } from '@/data';
import PageHeader from '@/components/PageHeader';
import { Calendar, FileText, PartyPopper, School } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OSISPage() {
  return (
    <>
      <PageHeader
        title="OSIS SMP & SMA"
        subtitle="Organisasi Siswa Intra Sekolah yang aktif membangun kepemimpinan dan kreativitas."
        icon={<School className="w-6 h-6 text-red-500" />}
      />
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {osisList.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card-igs overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={item.foto} alt={item.nama} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">OSIS {item.sekolah}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{item.nama}</h3>
                    <div className="flex items-center gap-2 text-blue-300 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Periode {item.periode}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Tentang OSIS</h4>
                      <p className="text-white/50 text-sm">{item.berita}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <PartyPopper className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Event Terdekat</h4>
                      <p className="text-white/50 text-sm">{item.event}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
