import PageHeader from '@/components/PageHeader';
import { ClipboardList, FileText, CreditCard, Calendar, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const layanan = [
  { icon: FileText, title: 'Surat Keterangan', desc: 'Pengajuan surat keterangan siswa aktif, izin, dan lainnya.' },
  { icon: CreditCard, title: 'Pembayaran SPP', desc: 'Informasi dan kanal pembayaran SPP serta biaya sekolah.' },
  { icon: Calendar, title: 'Kalender Akademik', desc: 'Jadwal kegiatan, ujian, libur, dan event sekolah.' },
  { icon: Download, title: 'Download Formulir', desc: 'Unduh berbagai formulir administrasi sekolah.' },
];

export default function AdministrasiPage() {
  return (
    <>
      <PageHeader
        title="Administrasi"
        subtitle="Layanan administrasi dan informasi akademik IGS."
        icon={<ClipboardList className="w-6 h-6 text-red-500" />}
      />
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {layanan.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-igs p-6 group hover:border-red-500/50 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-colors">
                    <item.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-white/50 text-sm mb-3">{item.desc}</p>
                    <div className="flex items-center gap-1 text-red-400 text-sm font-medium">
                      <span>Selengkapnya</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 card-igs p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Rekening Pembayaran</h3>
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6 max-w-md mx-auto">
              <p className="text-white/50 text-sm mb-2">Bank Central Asia (BCA)</p>
              <p className="text-2xl font-bold text-white mb-1">123-456-7890</p>
              <p className="text-white/40 text-sm">a.n. Yayasan Ignatius Global School</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
