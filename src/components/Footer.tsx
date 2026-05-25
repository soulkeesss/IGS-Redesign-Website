import { Link } from 'react-router-dom';
import { GraduationCap, Instagram, Youtube, BookOpen, Mail, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white block">IGS</span>
                <span className="text-xs text-blue-300">Ignatius Global School</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Membentuk generasi pemimpin global dengan pendidikan berkualitas, inovasi, dan nilai-nilai luhur sejak 2005.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {[
                { label: 'Profil', path: '/profil' },
                { label: 'PPDB', path: '/ppdb' },
                { label: 'Berita', path: '/berita' },
                { label: 'Karier', path: '/karier' },
                { label: 'Administrasi', path: '/administrasi' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/50 hover:text-blue-400 transition-colors text-sm">{item.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Media Sosial</h4>
            <div className="space-y-4">
              <a href="https://www.instagram.com/ignatiusglobal.sch/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-pink-400 transition-colors group">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">ignatiusglobal.sch</span>
              </a>
              <a href="https://www.youtube.com/@IgnatiusGlobalSchool" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-red-400 transition-colors group">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Youtube className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">@IgnatiusGlobalSchool</span>
              </a>
              <a href="https://moodle.igs.my.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm">Moodle IGS</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">highschool.igs@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">Jl. Mayor Ruslan, Sumatera Selatan, Palembang </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">(0711)377159</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <div className="text-white/50 text-sm">
                  <p>Senin - Jumat: 05.00 - 18.00</p>
                  <p>Sabtu: 05.00 - 20.00</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            Copyright &copy; soulkeess @2026. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white/40 text-sm">Ignatius Global School</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
