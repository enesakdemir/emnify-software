import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function DijitalPazarlamaPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Dijital Pazarlama</h1>
          <p className="text-lg text-gray-200 mb-8 text-center">
            Markanızı dijitalde büyütmek ve hedef kitlenize ulaşmak için kapsamlı dijital pazarlama çözümleri sunuyoruz. Sosyal medya, Google Ads ve içerik pazarlaması ile online varlığınızı güçlendiriyoruz.
          </p>
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Hizmetlerimiz</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Sosyal medya yönetimi ve reklamları</li>
              <li>Google Ads ve arama ağı reklamları</li>
              <li>İçerik pazarlama ve blog yönetimi</li>
              <li>E-posta pazarlama kampanyaları</li>
              <li>Performans analizi ve raporlama</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-primary">Neden Bizi Seçmelisiniz?</h2>
            <ul className="list-disc pl-6">
              <li>Deneyimli dijital pazarlama ekibi</li>
              <li>Hedef odaklı ve ölçülebilir kampanyalar</li>
              <li>Yaratıcı ve yenilikçi stratejiler</li>
              <li>Her bütçeye uygun çözümler</li>
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