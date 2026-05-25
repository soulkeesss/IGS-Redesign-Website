import { useState, useRef } from 'react';
import { Send, MessageSquare, Mail, MapPin, User } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function FeedbackSection() {
  const [form, setForm] = useState({ nama: '', email: '', pesan: '' });
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ nama: '', email: '', pesan: '' }); }, 3000);
  };

  return (
    <section className="py-20 bg-black relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full text-red-400 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            Kritik & Saran
          </div>
          <h2 className="section-title">Kritik & <span className="text-gradient-blue">Saran</span></h2>
          <p className="section-subtitle max-w-2xl mx-auto">Kami menghargai setiap masukan untuk kemajuan IGS.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">Hubungi Kami</h3>
            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'info@igs.sch.id' },
                { icon: MapPin, label: 'Alamat', value: 'Jl. Pendidikan No. 123, Jakarta Selatan' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-900/50 border border-red-900/20 rounded-xl">
                  <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-gradient-to-br from-red-950/20 to-black border border-red-900/20 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-2">Jam Operasional</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <div className="flex justify-between"><span>Senin - Jumat</span><span>07.00 - 16.00</span></div>
                <div className="flex justify-between"><span>Sabtu</span><span>07.00 - 12.00</span></div>
                <div className="flex justify-between"><span>Minggu</span><span>Tutup</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Terima Kasih!</h3>
                  <p className="text-white/60">Pesan Anda telah terkirim. Kami akan segera menindaklanjuti.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Nama</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <input
                      type="text"
                      required
                      value={form.nama}
                      onChange={(e) => setForm({ ...form, nama: e.target.value })}
                      className="input-igs pl-10"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-igs pl-10"
                      placeholder="Masukkan email Anda"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Pesan</label>
                  <textarea
                    required
                    rows={5}
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    className="input-igs resize-none"
                    placeholder="Tulis kritik atau saran Anda"
                  />
                </div>
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Kirim Pesan
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
