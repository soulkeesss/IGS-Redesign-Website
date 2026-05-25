import { karyawanList } from '@/data';
import PageHeader from '@/components/PageHeader';
import PersonCard from '@/components/PersonCard';
import { Users } from 'lucide-react';

export default function KaryawanPage() {
  return (
    <>
      <PageHeader
        title="Karyawan"
        subtitle="Tenaga kerja profesional yang mendukung operasional IGS."
        icon={<Users className="w-6 h-6 text-red-500" />}
      />
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {karyawanList.map((item, index) => (
              <PersonCard
                key={item.id}
                foto={item.foto}
                nama={item.nama}
                detail1={item.jabatan}
                detail2={`Bekerja sejak ${item.tahun}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
