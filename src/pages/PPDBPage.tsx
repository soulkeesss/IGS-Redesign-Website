import PageHeader from '@/components/PageHeader';
import { FileText, Search, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PPDBPage() {
  const [nomor, setNomor] = useState('');
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  return (
    <>
      <PageHeader
        title="PPDB"
        subtitle="Penerimaan Peserta Didik Baru Tahun Ajaran 2025/2026."
        icon={<FileText className="w-6 h-6 text-red-500" />}
      />
      <section className="py-16 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pendaftaran */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-igs p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-500" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Daftar PPDB</h2>
                </div>
                <div className="space-y-4 mb-8">
                  {[
                    'Mengisi formulir pendaftaran online',
                    'Upload dokumen persyaratan',
                    'Pembayaran biaya pendaftaran',
                    'Tes seleksi & wawancara',
                    'Pengumuman kelulusan',
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-600/10 rounded-full flex items-center justify-center text-red-500 text-sm font-bold">{idx + 1}</div>
                      <span className="text-white/70 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  <span>Daftar Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Cek Kelulusan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-igs p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600/10 border border-blue-600/20 rounded-xl flex items-center justify-center">
                    <Search className="w-6 h-6 text-blue-500" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Cek Kelulusan</h2>
                </div>
                {!checked ? (
                  <form onSubmit={handleCheck}>
                    <p className="text-white/50 text-sm mb-6">Masukkan nomor pendaftaran Anda untuk memeriksa status kelulusan.</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Nomor Pendaftaran</label>
                        <input
                          type="text"
                          required
                          value={nomor}
                          onChange={(e) => setNomor(e.target.value)}
                          className="input-igs"
                          placeholder="Contoh: PPDB-2025-001"
                        />
                      </div>
                      <button type="submit" className="w-full btn-secondary flex items-center justify-center gap-2">
                        <Search className="w-4 h-4" />
                        Cek Status
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                    <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Selamat, Anda Diterima!</h3>
                    <p className="text-white/50 text-sm mb-6">Nomor pendaftaran {nomor} dinyatakan lulus seleksi PPDB IGS 2025/2026.</p>
                    <div className="bg-gray-900/50 border border-green-600/20 rounded-xl p-4">
                      <p className="text-green-400 text-sm font-medium">Silakan lakukan daftar ulang di kantor sekolah.</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 card-igs p-6 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h4 className="text-white font-medium mb-1">Butuh Bantuan?</h4>
              <p className="text-white/50 text-sm">Hubungi tim PPDB kami di <span className="text-blue-400">(021) 1234-5678</span> atau email ke <span className="text-blue-400">ppdb@igs.sch.id</span></p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
