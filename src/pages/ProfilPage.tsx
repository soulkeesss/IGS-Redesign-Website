import { profilSekolah } from '@/data';
import PageHeader from '@/components/PageHeader';
import { BookOpen, Users, History, Target, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProfilPage() {
  return (
    <>
      <PageHeader
        title="Profil Sekolah"
        subtitle="Mengenal lebih dekat Ignatius Global School."
        icon={<BookOpen className="w-6 h-6 text-red-500" />}
      />
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sejarah */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card-igs p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center">
                <History className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-xl font-bold text-white">Sejarah Pengembangan</h2>
            </div>
            <p className="text-white/60 leading-relaxed">{profilSekolah.sejarah}</p>
          </motion.div>

          {/* Pembuat, Kepala, Wakil */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Users, label: 'Pendiri', value: profilSekolah.pembuat },
              { icon: Target, label: 'Kepala Sekolah', value: profilSekolah.kepalaSekolah },
              { icon: Award, label: 'Wakil Kepala Sekolah', value: profilSekolah.wakilKepala },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-igs p-6"
              >
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="text-sm font-medium text-white/40 mb-2">{item.label}</h4>
                <p className="text-white font-medium text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Visi Misi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="card-igs p-6">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-semibold text-white">Visi</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Menjadi institusi pendidikan unggulan yang menghasilkan generasi pemimpin global, berakhlak mulia, dan berwawasan internasional.
              </p>
            </div>
            <div className="card-igs p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-red-500" />
                <h3 className="text-lg font-semibold text-white">Misi</h3>
              </div>
              <ul className="text-white/60 text-sm space-y-2">
                <li>1. Menyelenggarakan pendidikan berkualitas internasional</li>
                <li>2. Mengembangkan potensi siswa secara holistik</li>
                <li>3. Membangun karakter kebangsaan dan kepemimpinan</li>
                <li>4. Menciptakan lingkungan belajar yang inovatif</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
