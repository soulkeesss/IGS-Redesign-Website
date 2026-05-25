import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}

export default function PageHeader({ title, subtitle, icon }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 to-blue-950/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <Home className="w-4 h-4" />
              <span>Beranda</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-red-400">{title}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center">
              {icon}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          </div>
          {subtitle && <p className="text-white/60 max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
