import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  {
    label: 'Menu',
    children: [
      { label: 'Karyawan', path: '/karyawan' },
      { label: 'Staff', path: '/staff' },
      { label: 'Siswa', path: '/siswa' },
      { label: 'OSIS SMP & SMA', path: '/osis' },
      { label: 'Alumni', path: '/alumni' },
    ],
  },
  { label: 'Karier', path: '/karier' },
  { label: 'Moodle', path: 'https://moodle.igs.my.id', external: true },
  {
    label: 'PPDB',
    children: [
      { label: 'Daftar', path: '/ppdb' },
      { label: 'Cek Kelulusan', path: '/ppdb' },
    ],
  },
  { label: 'Administrasi', path: '/administrasi' },
  { label: 'Profil', path: '/profil' },
  { label: 'Berita', path: '/berita' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (path?: string) => path && location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-red-900/20 border-b border-red-900/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/40 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-white tracking-tight">IGS</span>
              <span className="hidden md:inline ml-2 text-xs text-blue-300">Ignatius Global School</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-white/80 hover:text-blue-400 transition-colors rounded-lg hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ) : item.children ? (
                  <>
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-blue-400 transition-colors rounded-lg hover:bg-white/5">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-gray-900/95 backdrop-blur-xl border border-red-900/30 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path || child.label}
                              to={child.path || '/'}
                              className={`block px-4 py-3 text-sm transition-colors hover:bg-red-600/20 hover:text-blue-300 ${
                                isActive(child.path) ? 'text-blue-400 bg-red-600/10' : 'text-white/70'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={item.path || '/'}
                    className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                      isActive(item.path)
                        ? 'text-blue-400 bg-red-600/10'
                        : 'text-white/80 hover:text-blue-400 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-red-900/30 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm font-medium text-white/80 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : item.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white/80 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 border-l-2 border-red-600/30 pl-4 space-y-1"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.path || child.label}
                                to={child.path || '/'}
                                className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                                  isActive(child.path) ? 'text-blue-400 bg-red-600/10' : 'text-white/60 hover:text-blue-300'
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path || '/'}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'text-blue-400 bg-red-600/10'
                          : 'text-white/80 hover:text-blue-400 hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}