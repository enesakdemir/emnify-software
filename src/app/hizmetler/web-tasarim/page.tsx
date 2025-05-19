import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WebTasarimPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Web Tasarım</h1>
          <p className="text-lg text-gray-200 mb-8 text-center">
            Markanızı dijital dünyada öne çıkaracak, modern ve kullanıcı dostu web siteleri tasarlıyoruz. Responsive (mobil uyumlu) ve hızlı açılan web siteleri ile ziyaretçilerinize en iyi deneyimi sunuyoruz.
          </p>
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Neler Sunuyoruz?</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Mobil uyumlu ve hızlı web tasarımı</li>
              <li>SEO dostu altyapı</li>
              <li>Modern ve özgün arayüzler</li>
              <li>Kolay yönetilebilir içerik sistemleri</li>
              <li>Güçlü güvenlik önlemleri</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-primary">Neden Bizi Seçmelisiniz?</h2>
            <ul className="list-disc pl-6">
              <li>7+ yıllık sektör deneyimi</li>
              <li>Yüzlerce başarılı proje</li>
              <li>Müşteri odaklı yaklaşım</li>
              <li>Hızlı teslimat ve sürekli destek</li>
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