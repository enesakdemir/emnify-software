import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function GizlilikPolitikasiPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Gizlilik Politikası</h1>
          <p className="text-lg text-gray-200 mb-8 text-center">
            Kişisel verilerinizin gizliliği ve güvenliği bizim için önemlidir. Bu sayfada, bilgilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi bulabilirsiniz.
          </p>
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">1. Toplanan Bilgiler</h2>
            <p className="mb-4">Web sitemizi ziyaret ettiğinizde, iletişim formlarını doldurduğunuzda veya hizmetlerimizden faydalandığınızda bazı kişisel bilgileriniz (ad, e-posta, telefon vb.) toplanabilir.</p>
            <h2 className="text-2xl font-bold mb-4">2. Bilgilerin Kullanımı</h2>
            <p className="mb-4">Toplanan bilgiler yalnızca hizmet sunmak, sizinle iletişime geçmek ve yasal yükümlülüklerimizi yerine getirmek amacıyla kullanılır.</p>
            <h2 className="text-2xl font-bold mb-4">3. Bilgilerin Korunması</h2>
            <p className="mb-4">Kişisel bilgilerinizin güvenliği için gerekli tüm teknik ve idari önlemler alınmaktadır. Bilgileriniz üçüncü kişilerle paylaşılmaz.</p>
            <h2 className="text-2xl font-bold mb-4">4. Çerezler (Cookies)</h2>
            <p className="mb-4">Web sitemizde kullanıcı deneyimini geliştirmek için çerezler kullanılabilir. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.</p>
            <h2 className="text-2xl font-bold mb-4">5. İletişim</h2>
            <p>Gizlilik politikamızla ilgili sorularınız için <a href="mailto:emnifysoft@gmail.com" className="text-primary underline">emnifysoft@gmail.com</a> adresinden bize ulaşabilirsiniz.</p>
          </div>
          <div className="text-center mt-8">
            <Link href="/" className="btn btn-primary">Ana Sayfa</Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 