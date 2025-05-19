'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="hakkimizda" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Görsel Kısmı */}
          <div className="relative">
            <div className="bg-primary/10 w-full h-[400px] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold mb-4">
                  <span className="text-primary">Emnify</span>
                  <span className="text-accent">Soft</span>
                </div>
                <div className="text-xl text-gray-500">Web Tasarım & Yazılım</div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-accent text-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">7+ Yıl</div>
              <div className="text-sm">Sektör Deneyimi</div>
            </div>
          </div>
          
          {/* İçerik Kısmı */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Dijital Çözüm Ortağınız: <span className="text-primary">Emnify Software</span></h2>
            <p className="text-gray-600 mb-6">
              Emnify Software olarak, işletmelerin dijital varlıklarını güçlendirmek için inovatif çözümler sunuyoruz. Müşteri odaklı yaklaşımımız, teknik uzmanlığımız ve yaratıcı bakış açımızla projelerinize değer katıyoruz.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <FaCheck className="text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-600">Kullanıcı deneyimini ön planda tutan modern tasarımlar</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-600">Güncel teknolojiler ve güvenli yazılım çözümleri</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-600">Arama motorlarına uyumlu, SEO dostu web siteleri</p>
              </div>
              <div className="flex items-start gap-3">
                <FaCheck className="text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-600">Sürdürülebilir ve ölçeklenebilir yazılım geliştirme</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/hakkimizda" className="btn btn-primary">
                Daha Fazla Bilgi
              </Link>
              <Link href="/iletisim" className="btn btn-outline">
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 