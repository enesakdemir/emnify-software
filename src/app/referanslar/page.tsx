import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import Link from 'next/link';
import Image from 'next/image';

// Referans projeleri için mock veri
const projects = [
  {
    id: 1,
    title: 'E-Ticaret Web Sitesi',
    category: 'E-Ticaret',
    client: 'ABC Elektronik',
    image: '/placeholder.jpg', // Bu kısımlara gerçek görseller eklenecek
    description: 'Elektronik ürünler satan bir firma için geliştirilen, ödeme sistemi entegrasyonu ve stok yönetimi ile tam donanımlı e-ticaret sitesi.',
  },
  {
    id: 2,
    title: 'Kurumsal Web Sitesi',
    category: 'Kurumsal',
    client: 'XYZ İnşaat',
    image: '/placeholder.jpg',
    description: 'İnşaat sektöründe faaliyet gösteren firmanın kurumsal kimliğini yansıtan ve projelerini sergileyen modern bir web sitesi.',
  },
  {
    id: 3,
    title: 'Mobil Uygulama',
    category: 'Mobil',
    client: 'LMN Fitness',
    image: '/placeholder.jpg',
    description: 'Fitness merkezi üyelerinin antrenmanlarını, beslenme programlarını ve randevularını yönetebileceği kapsamlı bir mobil uygulama.',
  },
  {
    id: 4,
    title: 'CRM Yazılımı',
    category: 'Yazılım',
    client: 'PQR Danışmanlık',
    image: '/placeholder.jpg',
    description: 'Danışmanlık firmasının müşteri ilişkilerini, projelerini ve finansal verilerini yönetebileceği özelleştirilmiş bir CRM sistemi.',
  },
  {
    id: 5,
    title: 'Blog & Haber Sitesi',
    category: 'İçerik',
    client: 'DEF Medya',
    image: '/placeholder.jpg',
    description: 'Medya şirketi için geliştirilen, içerik yönetimi kolay ve SEO dostu, modern bir blog ve haber sitesi.',
  },
  {
    id: 6,
    title: 'Rezervasyon Sistemi',
    category: 'Yazılım',
    client: 'GHI Restoran',
    image: '/placeholder.jpg',
    description: 'Restoran zinciri için geliştirilen online rezervasyon sistemi ve yönetim paneli.',
  }
];

// Kategoriler
const categories = [
  'Tümü',
  'E-Ticaret',
  'Kurumsal',
  'Mobil',
  'Yazılım',
  'İçerik'
];

export default function ReferencesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Referanslarımız</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto text-gray-200">
            Başarıyla tamamladığımız projeler ve mutlu müşterilerimiz
          </p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          {/* Kategori Filtreleri - Bu kısım client component olarak ayrılabilir */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full border ${
                  index === 0 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Proje Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Proje Görseli Placeholder */}
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-lg">
                    Proje Görseli
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      ID: {project.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500">
                      Müşteri: {project.client}
                    </span>
                    <Link 
                      href={`/referanslar/${project.id}`} 
                      className="text-primary font-medium hover:text-primary/80 inline-flex items-center"
                    >
                      Detaylar
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Müşteri Görüşleri */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Müşteri Görüşleri</h2>
          <p className="section-subtitle">
            Müşterilerimizin bizimle çalışma deneyimleri hakkında ne söyledikleri
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Görüş 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <span className="font-bold text-gray-600">AK</span>
                </div>
                <div>
                  <h4 className="font-bold">Ali Kaya</h4>
                  <p className="text-gray-600 text-sm">ABC Elektronik - Genel Müdür</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "E-ticaret sitemizin tasarımı ve geliştirilmesi sürecinde göstermiş oldukları profesyonellik ve müşteri odaklı yaklaşım için Emnify Software ekibine teşekkür ederiz. Satışlarımızda %30 artış yaşadık."
              </p>
            </div>
            
            {/* Görüş 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <span className="font-bold text-gray-600">MY</span>
                </div>
                <div>
                  <h4 className="font-bold">Merve Yıldız</h4>
                  <p className="text-gray-600 text-sm">XYZ İnşaat - Pazarlama Direktörü</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Kurumsal web sitemiz için harika bir iş çıkardılar. Marka kimliğimizi dijital ortama tam anlamıyla yansıtmayı başardılar. İşbirliğimizden çok memnunuz."
              </p>
            </div>
            
            {/* Görüş 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                  <span className="font-bold text-gray-600">EC</span>
                </div>
                <div>
                  <h4 className="font-bold">Emre Can</h4>
                  <p className="text-gray-600 text-sm">LMN Fitness - Kurucu</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Mobil uygulamamız üyelerimiz tarafından büyük beğeni topladı. Emnify Software ekibi kullanıcı deneyimini en üst seviyede tutarak harika bir iş çıkardı. Teşekkürler!"
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