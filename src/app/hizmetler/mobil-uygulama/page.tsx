import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MobilUygulamaPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Mobil Uygulama</h1>
          <p className="text-lg text-gray-200 mb-8 text-center">
            Android ve iOS platformları için kullanıcı odaklı, modern ve performanslı mobil uygulamalar geliştiriyoruz. Markanızı cebinize taşıyoruz!
          </p>
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Neler Sunuyoruz?</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Native ve cross-platform uygulama geliştirme</li>
              <li>Kullanıcı dostu arayüzler</li>
              <li>App Store ve Google Play danışmanlığı</li>
              <li>Push bildirim ve entegrasyonlar</li>
              <li>Bakım ve güncelleme desteği</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-primary">Neden Bizi Seçmelisiniz?</h2>
            <ul className="list-disc pl-6">
              <li>Deneyimli mobil geliştirme ekibi</li>
              <li>Hızlı ve güvenli uygulama teslimi</li>
              <li>Kapsamlı test ve kalite kontrol</li>
              <li>Proje sonrası destek</li>
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