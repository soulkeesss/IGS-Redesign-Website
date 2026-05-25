import { useState, useEffect, useCallback } from 'react';
import { bannerSlides } from '@/data';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % bannerSlides.length);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  useEffect(() => {
    if (!isPlaying || showVideo) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, showVideo, next]);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {!showVideo && (
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={bannerSlides[current].image}
              alt={bannerSlides[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          </motion.div>
        )}
      </AnimatePresence>

      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black flex items-center justify-center"
        >
          <div className="text-center text-white/60">
            <p className="text-xl mb-2">Video Promosi IGS</p>
            <p className="text-sm">Klik tombol Slide untuk kembali ke banner</p>
          </div>
        </motion.div>
      )}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatePresence mode="wait">
            {!showVideo && (
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                  <span className="text-gradient-blue">{bannerSlides[current].title}</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8">
                  {bannerSlides[current].subtitle}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#bahasa" className="btn-primary">Explore</a>
                  <button
                    onClick={() => setShowVideo(true)}
                    className="px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Watch Video
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex gap-2">
          {bannerSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrent(idx); setShowVideo(false); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === current ? 'w-8 bg-red-500' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
          <button
            onClick={() => { setShowVideo(!showVideo); }}
            className={`h-2 rounded-full transition-all duration-300 w-2 ${
              showVideo ? 'bg-blue-500 w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 text-sm text-white/50 font-medium">
        {showVideo ? 'Video' : `${current + 1} / ${bannerSlides.length}`}
      </div>
    </section>
  );
}
