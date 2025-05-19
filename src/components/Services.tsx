'use client';

import { FaDesktop, FaCode, FaMobileAlt, FaSearch, FaShoppingCart, FaBullhorn } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  {
    icon: <FaDesktop className="text-4xl text-primary" />,
    title: 'Web Tasarım',
    description: 'Kullanıcı dostu, modern ve responsive web tasarımları ile markanızı dijitalde öne çıkarın.',
    link: '/hizmetler/web-tasarim'
  },
  {
    icon: <FaCode className="text-4xl text-primary" />,
    title: 'Yazılım Geliştirme',
    description: 'İşletmenize özel yazılım çözümleri ile iş süreçlerinizi optimize edin.',
    link: '/hizmetler/yazilim-gelistirme'
  },
  {
    icon: <FaMobileAlt className="text-4xl text-primary" />,
    title: 'Mobil Uygulama',
    description: 'Android ve iOS platformlarında kullanıcı odaklı mobil uygulamalar geliştiriyoruz.',
    link: '/hizmetler/mobil-uygulama'
  },
  {
    icon: <FaSearch className="text-4xl text-primary" />,
    title: 'SEO Hizmetleri',
    description: 'Arama motorlarında üst sıralarda yer alarak organik trafiğinizi artırın.',
    link: '/hizmetler/seo'
  },
  {
    icon: <FaShoppingCart className="text-4xl text-primary" />,
    title: 'E-Ticaret Çözümleri',
    description: 'Satışlarınızı artıracak özelleştirilebilir e-ticaret sistemleri kuruyoruz.',
    link: '/hizmetler/e-ticaret'
  },
  {
    icon: <FaBullhorn className="text-4xl text-primary" />,
    title: 'Dijital Pazarlama',
    description: 'Sosyal medya, Google Ads ve içerik pazarlaması ile online varlığınızı güçlendirin.',
    link: '/hizmetler/dijital-pazarlama'
  }
];

export default function Services() {
  return (
    <section id="hizmetler" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Hizmetlerimiz</h2>
        <p className="section-subtitle">
          İşletmenizin dijital dönüşümünü sağlamak için sunduğumuz kapsamlı hizmetlerimiz
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href={service.link} className="text-primary font-medium hover:text-primary/80 inline-flex items-center">
                Detaylı Bilgi 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/hizmetler" className="btn btn-primary">
            Tüm Hizmetlerimizi Görüntüle
          </Link>
        </div>
      </div>
    </section>
  );
} 