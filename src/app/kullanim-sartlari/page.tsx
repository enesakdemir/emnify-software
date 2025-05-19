import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function KullanimSartlariPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Kullanım Şartları</h1>
          <p className="text-lg text-gray-200 mb-8 text-center">
            Bu sayfada, web sitemizi ve hizmetlerimizi kullanırken uymanız gereken kurallar ve şartlar hakkında bilgi bulabilirsiniz.
          </p>
          <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">1. Hizmetin Kapsamı</h2>
            <p className="mb-4">Emnify Software, web tasarım, yazılım geliştirme ve dijital pazarlama hizmetleri sunar. Hizmetlerimizden faydalanan kullanıcılar, bu şartları kabul etmiş sayılır.</p>
            <h2 className="text-2xl font-bold mb-4">2. Kullanıcı Yükümlülükleri</h2>
            <p className="mb-4">Kullanıcılar, web sitemizi yasalara uygun şekilde kullanmakla yükümlüdür. Yanıltıcı, zararlı veya yasa dışı içerik paylaşmak yasaktır.</p>
            <h2 className="text-2xl font-bold mb-4">3. Fikri Mülkiyet Hakları</h2>
            <p className="mb-4">Sitedeki tüm içerik, tasarım ve görseller Emnify Software'e aittir. İzinsiz kopyalanamaz veya kullanılamaz.</p>
            <h2 className="text-2xl font-bold mb-4">4. Sorumluluk Reddi</h2>
            <p className="mb-4">Web sitemizde yer alan bilgiler genel bilgilendirme amaçlıdır. Hizmetlerimizle ilgili detaylı bilgi için bizimle iletişime geçebilirsiniz.</p>
            <h2 className="text-2xl font-bold mb-4">5. Değişiklikler</h2>
            <p>Emnify Software, kullanım şartlarını önceden haber vermeksizin değiştirme hakkını saklı tutar. Güncel şartlar bu sayfada yayınlanır.</p>
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