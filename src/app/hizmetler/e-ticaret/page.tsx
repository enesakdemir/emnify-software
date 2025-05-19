import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ETicaretPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">E-Ticaret Çözümleri</h1>
          <p className="text-lg text-gray-200 mb-8 text-center">
            Satışlarınızı artıracak, güvenli ve ölçeklenebilir e-ticaret sistemleri kuruyoruz. Müşterilerinize kusursuz bir alışveriş deneyimi sunmak için buradayız.
          </p>
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Neler Sunuyoruz?</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Özelleştirilebilir e-ticaret altyapısı</li>
              <li>Güvenli ödeme sistemleri entegrasyonu</li>
              <li>Stok ve sipariş yönetimi</li>
              <li>Kampanya ve indirim modülleri</li>
              <li>Mobil uyumlu alışveriş deneyimi</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-primary">Neden Bizi Seçmelisiniz?</h2>
            <ul className="list-disc pl-6">
              <li>Başarılı e-ticaret projeleri ve referanslar</li>
              <li>Güçlü teknik destek ve eğitim</li>
              <li>Hızlı kurulum ve devreye alma</li>
              <li>Satış odaklı ve kullanıcı dostu çözümler</li>
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