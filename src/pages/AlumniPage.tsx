import { alumniList } from '@/data';
import PageHeader from '@/components/PageHeader';
import PersonCard from '@/components/PersonCard';
import { Building2 } from 'lucide-react';

export default function AlumniPage() {
  return (
    <>
      <PageHeader
        title="Alumni"
        subtitle="Para alumni IGS yang telah meraih kesuksesan di berbagai universitas ternama."
        icon={<Building2 className="w-6 h-6 text-red-500" />}
      />
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumniList.map((item, index) => (
              <PersonCard
                key={item.id}
                foto={item.foto}
                nama={item.nama}
                detail1={`Angkatan masuk ${item.tahunMasuk}`}
                detail2={`Kuliah di ${item.universitas}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
