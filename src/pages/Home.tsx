import HeroBanner from '@/sections/HeroBanner';
import LanguagesSection from '@/sections/LanguagesSection';
import YayasanSection from '@/sections/YayasanSection';
import AchievementsSection from '@/sections/AchievementsSection';
import NewsSection from '@/sections/NewsSection';
import FeedbackSection from '@/sections/FeedbackSection';
import GallerySection from '@/sections/GallerySection';

export default function Home() {
  return (
    <>
      <HeroBanner />
      <LanguagesSection />
      <YayasanSection />
      <AchievementsSection />
      <NewsSection />
      <FeedbackSection />
      <GallerySection />
    </>
  );
}
