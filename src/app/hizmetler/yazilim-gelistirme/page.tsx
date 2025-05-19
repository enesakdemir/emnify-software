import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function YazilimGelistirmePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Yazılım Geliştirme</h1>
          <p className="text-lg text-gray-200 mb-8 text-center">
            İşletmenize özel, tamamen ihtiyaçlarınıza göre şekillenen yazılım çözümleri sunuyoruz. Süreçlerinizi dijitalleştirerek verimliliğinizi artırıyoruz.
          </p>
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4 text-primary">Hizmetlerimiz</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Web ve mobil uygulama geliştirme</li>
              <li>Kurumsal yazılım çözümleri</li>
              <li>API ve entegrasyon hizmetleri</li>
              <li>Veri tabanı ve otomasyon sistemleri</li>
              <li>Bakım ve teknik destek</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4 text-primary">Neden Bizi Tercih Etmelisiniz?</h2>
            <ul className="list-disc pl-6">
              <li>Uzman ve deneyimli yazılım ekibi</li>
              <li>Güvenli ve ölçeklenebilir altyapı</li>
              <li>Proje sonrası destek ve eğitim</li>
              <li>Hızlı teslimat ve şeffaf süreç yönetimi</li>
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