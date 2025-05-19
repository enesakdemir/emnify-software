import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { FaDesktop, FaCode, FaMobileAlt, FaSearch, FaShoppingCart, FaBullhorn, FaChartLine, FaLaptopCode } from 'react-icons/fa';

const detailedServices = [
  {
    icon: <FaDesktop className="text-4xl text-primary" />,
    title: 'Web Tasarım',
    description: 'Kullanıcı dostu, modern ve responsive web tasarımları ile markanızı dijitalde öne çıkarın.',
    features: [
      'Mobil uyumlu responsive tasarım',
      'Modern kullanıcı arayüzü (UI)',
      'Kullanıcı deneyimi (UX) odaklı çözümler',
      'Marka kimliğine uyumlu web sitesi',
      'SEO dostu kod yapısı'
    ],
    link: '/hizmetler/web-tasarim'
  },
  {
    icon: <FaCode className="text-4xl text-primary" />,
    title: 'Yazılım Geliştirme',
    description: 'İşletmenize özel yazılım çözümleri ile iş süreçlerinizi optimize edin.',
    features: [
      'Özel yazılım geliştirme',
      'Kurumsal iç/dış yazılımlar',
      'Entegrasyon çözümleri',
      'Web uygulamaları',
      'Güvenli ve ölçeklenebilir sistemler'
    ],
    link: '/hizmetler/yazilim-gelistirme'
  },
  {
    icon: <FaMobileAlt className="text-4xl text-primary" />,
    title: 'Mobil Uygulama',
    description: 'Android ve iOS platformlarında kullanıcı odaklı mobil uygulamalar geliştiriyoruz.',
    features: [
      'iOS ve Android uygulamaları',
      'Cross-platform çözümler',
      'Kullanıcı dostu arayüzler',
      'Performans odaklı geliştirme',
      'API entegrasyonları'
    ],
    link: '/hizmetler/mobil-uygulama'
  },
  {
    icon: <FaSearch className="text-4xl text-primary" />,
    title: 'SEO Hizmetleri',
    description: 'Arama motorlarında üst sıralarda yer alarak organik trafiğinizi artırın.',
    features: [
      'Teknik SEO optimizasyonu',
      'Anahtar kelime araştırması',
      'İçerik stratejisi',
      'Rakip analizi',
      'Performans raporlama'
    ],
    link: '/hizmetler/seo'
  },
  {
    icon: <FaShoppingCart className="text-4xl text-primary" />,
    title: 'E-Ticaret Çözümleri',
    description: 'Satışlarınızı artıracak özelleştirilebilir e-ticaret sistemleri kuruyoruz.',
    features: [
      'Özelleştirilmiş e-ticaret siteleri',
      'Ödeme sistemi entegrasyonları',
      'Ürün yönetim sistemleri',
      'Stok ve sipariş takibi',
      'Mobil uyumlu tasarım'
    ],
    link: '/hizmetler/e-ticaret'
  },
  {
    icon: <FaBullhorn className="text-4xl text-primary" />,
    title: 'Dijital Pazarlama',
    description: 'Sosyal medya, Google Ads ve içerik pazarlaması ile online varlığınızı güçlendirin.',
    features: [
      'Sosyal medya yönetimi',
      'Google Ads kampanyaları',
      'İçerik pazarlaması',
      'E-posta pazarlama',
      'Dönüşüm optimizasyonu'
    ],
    link: '/hizmetler/dijital-pazarlama'
  },
  {
    icon: <FaChartLine className="text-4xl text-primary" />,
    title: 'Dijital Danışmanlık',
    description: 'İşletmenizin dijital stratejisini belirlemek ve uygulamak için profesyonel destek.',
    features: [
      'Dijital dönüşüm stratejisi',
      'İş süreçleri analizi',
      'Teknoloji seçimi danışmanlığı',
      'Proje yönetimi',
      'Eğitim ve mentorluk'
    ],
    link: '/hizmetler/dijital-danismanlik'
  },
  {
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    title: 'Bakım & Destek',
    description: 'Mevcut dijital varlıklarınız için teknik destek ve sürekli bakım hizmetleri.',
    features: [
      '7/24 teknik destek',
      'Güvenlik güncellemeleri',
      'Performans iyileştirmeleri',
      'İçerik yönetimi',
      'Yedekleme ve kurtarma'
    ],
    link: '/hizmetler/bakim-destek'
  }
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Hizmetlerimiz</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto text-gray-200">
            İşletmenizin dijital dönüşümü için sunduğumuz profesyonel çözümler
          </p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          {detailedServices.map((service, index) => (
            <div key={index} className={`py-16 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="bg-primary/5 p-12 rounded-lg flex items-center justify-center">
                    <div className="text-7xl text-primary">{service.icon}</div>
                  </div>
                </div>
                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Ne Sunuyoruz?</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={service.link} className="btn btn-primary">
                    Detaylı Bilgi
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <CTA />
      <Footer />
    </main>
  );
} 