import { siswaList } from '@/data';
import PageHeader from '@/components/PageHeader';
import PersonCard from '@/components/PersonCard';
import { GraduationCap } from 'lucide-react';

export default function SiswaPage() {
  return (
    <>
      <PageHeader
        title="Siswa"
        subtitle="Para siswa berprestasi dari jenjang SMP dan SMA IGS."
        icon={<GraduationCap className="w-6 h-6 text-red-500" />}
      />
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {siswaList.map((item, index) => (
              <PersonCard
                key={item.id}
                foto={item.foto}
                nama={item.nama}
                detail1={`Masuk tahun ${item.tahunMasuk}`}
                detail2={`Hobi: ${item.hobi}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
