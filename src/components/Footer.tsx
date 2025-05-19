'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo ve Kısa Açıklama */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Emnify</span>
              <span className="text-2xl font-bold text-accent">Soft</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Profesyonel web tasarım ve yazılım çözümleri ile işletmenizi dijital dünyada öne çıkarıyoruz.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/emnifysoft/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/905059489246" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <FaPhone size={20} />
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-300 hover:text-white transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/referanslar" className="text-gray-300 hover:text-white transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler/web-tasarim" className="text-gray-300 hover:text-white transition-colors">
                  Web Tasarım
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/yazilim-gelistirme" className="text-gray-300 hover:text-white transition-colors">
                  Yazılım Geliştirme
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/mobil-uygulama" className="text-gray-300 hover:text-white transition-colors">
                  Mobil Uygulama
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/seo" className="text-gray-300 hover:text-white transition-colors">
                  SEO Hizmetleri
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/dijital-pazarlama" className="text-gray-300 hover:text-white transition-colors">
                  Dijital Pazarlama
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-accent" />
                <span className="text-gray-300">İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-accent" />
                <span className="text-gray-300 flex flex-col">
                  <span>+(90) 505 948 92 46</span>
                  <span>+(90) 551 160 64 10</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent" />
                <span className="text-gray-300">emnifysoft@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Emnify Software. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/gizlilik-politikasi" className="text-gray-400 text-sm hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="text-gray-400 text-sm hover:text-white transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 