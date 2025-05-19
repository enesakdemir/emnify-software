import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SeoPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">SEO Hizmetleri</h1>
          <p className="text-lg text-gray-200 mb-8 text-center">
            Arama motorlarında üst sıralara çıkmanız ve daha fazla ziyaretçi çekmeniz için profesyonel SEO çözümleri sunuyoruz. Sitenizin görünürlüğünü ve organik trafiğini artırıyoruz.
          </p>
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">SEO Kapsamımız</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Teknik SEO analizi ve optimizasyonu</li>
              <li>İçerik stratejisi ve anahtar kelime analizi</li>
              <li>Backlink ve otorite çalışmaları</li>
              <li>Yerel SEO ve Google My Business yönetimi</li>
              <li>Düzenli raporlama ve takip</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-primary">Neden Bizi Seçmelisiniz?</h2>
            <ul className="list-disc pl-6">
              <li>Güncel SEO teknikleri ve uzman ekip</li>
              <li>Şeffaf ve ölçülebilir sonuçlar</li>
              <li>Uzun vadeli başarı odaklı yaklaşım</li>
              <li>Her sektöre özel strateji</li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <Link href="/hizmetler" className="btn btn-primary">Geri Dön</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 