import { motion } from 'framer-motion';
import { Calendar, Award, Heart } from 'lucide-react';

interface PersonCardProps {
  foto: string;
  nama: string;
  detail1: string;
  detail2: string;
  detail3?: string;
  index: number;
}

export default function PersonCard({ foto, nama, detail1, detail2, detail3, index }: PersonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-igs group"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={foto}
          alt={nama}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{nama}</h3>
        <div className="flex items-center gap-2 text-white/50 text-sm">
          <Award className="w-4 h-4 text-red-500" />
          <span>{detail1}</span>
        </div>
        <div className="flex items-center gap-2 text-white/50 text-sm">
          <Calendar className="w-4 h-4 text-blue-500" />
          <span>{detail2}</span>
        </div>
        {detail3 && (
          <div className="flex items-center gap-2 text-white/50 text-sm">
            <Heart className="w-4 h-4 text-pink-500" />
            <span>{detail3}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
