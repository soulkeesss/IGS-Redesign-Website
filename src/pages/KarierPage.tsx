import { lowonganKerja } from '@/data';
import PageHeader from '@/components/PageHeader';
import { Briefcase, Building, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function KarierPage() {
  return (
    <>
      <PageHeader
        title="Karier"
        subtitle="Bergabunglah dengan tim IGS dan kembangkan karier Anda di dunia pendidikan."
        icon={<Briefcase className="w-6 h-6 text-red-500" />}
      />
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {lowonganKerja.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-igs p-6 group hover:border-red-500/50 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                        <Building className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{item.posisi}</h3>
                        <span className="text-sm text-white/40">{item.departemen}</span>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm">{item.deskripsi}</p>
                    <div className="flex items-center gap-2 mt-3 text-white/30 text-xs">
                      <Calendar className="w-3 h-3" />
                      <span>Deadline: {item.deadline}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-red-400 font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Lamar</span>
                    <ArrowRight className="w-4 h-4" />
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
