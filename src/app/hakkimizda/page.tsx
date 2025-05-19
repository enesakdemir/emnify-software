import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import CTA from '@/components/CTA';

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Hakkımızda</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto text-gray-200">
            Emnify Software olarak dijital dünyada fark yaratan çözümler sunuyoruz
          </p>
        </div>
      </div>
      <AboutSection />
      
      {/* Ekip Bölümü */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Ekibimiz</h2>
          <p className="section-subtitle">
            Uzman ve deneyimli ekibimizle her projenizi profesyonelce hayata geçiriyoruz
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Ekip Üyesi 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-gray-500">MS</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Mehmet Şimşek</h3>
              <p className="text-primary font-medium mb-4">Kurucu & CEO</p>
              <p className="text-gray-600">
                10+ yıllık sektör deneyimi ile işletmelerin dijital dönüşümüne liderlik ediyor.
              </p>
            </div>
            
            {/* Ekip Üyesi 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-gray-500">AY</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Ayşe Yılmaz</h3>
              <p className="text-primary font-medium mb-4">Kreatif Direktör</p>
              <p className="text-gray-600">
                Yaratıcı tasarım yaklaşımı ile projelere estetik ve fonksiyonel çözümler getiriyor.
              </p>
            </div>
            
            {/* Ekip Üyesi 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-4xl font-bold text-gray-500">ED</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Emre Demir</h3>
              <p className="text-primary font-medium mb-4">Baş Yazılım Mühendisi</p>
              <p className="text-gray-600">
                Güncel teknolojilere hakim, yenilikçi ve güvenilir yazılım çözümleri geliştiriyor.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vizyon & Misyon */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Vizyonumuz</h3>
              <p className="text-gray-700">
                Dijital dünyada dönüşüm sağlayan, yenilikçi ve kaliteli çözümler sunarak müşterilerimizin başarısına katkıda bulunmak ve sektörde öncü bir konumda yer almak.
              </p>
            </div>
            
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Misyonumuz</h3>
              <p className="text-gray-700">
                Müşterilerimizin ihtiyaçlarını en iyi şekilde anlayarak, en güncel teknolojiler ve yaratıcı çözümlerle dijital varlıklarını güçlendirmek ve kullanıcı dostu platformlar oluşturmak.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </main>
  );
} 