'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Dijital Dünyada <span className="text-accent">Fark Yaratın</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto lg:mx-0">
              Emnify Software ile işletmeniz için profesyonel web tasarım, yazılım geliştirme ve dijital pazarlama çözümleri
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/iletisim" className="btn bg-accent hover:bg-accent/90 text-white">
                Ücretsiz Teklif Al
              </Link>
              <Link href="/hizmetler" className="btn bg-white/10 hover:bg-white/20 text-white border border-white/30">
                Hizmetlerimizi Keşfet
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative w-full h-[400px] lg:h-[500px]">
              {/* Hero görseli için placeholder. Gerçek bir görsel eklemek için Image bileşenini kullanacağız */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4">
                    <span className="text-white">Emnify</span>
                    <span className="text-accent">Soft</span>
                  </div>
                  <div className="text-xl text-gray-200">Web Tasarım & Yazılım</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Güven Faktörleri */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent mb-2">7+</div>
            <h3 className="text-xl font-semibold mb-2">Yıllık Deneyim</h3>
            <p className="text-gray-300">Sektördeki uzun yıllara dayanan tecrübemizle kaliteli çözümler sunuyoruz.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent mb-2">200+</div>
            <h3 className="text-xl font-semibold mb-2">Tamamlanan Proje</h3>
            <p className="text-gray-300">Farklı sektörlerde birçok başarılı projeye imza attık.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-3xl font-bold text-accent mb-2">150+</div>
            <h3 className="text-xl font-semibold mb-2">Mutlu Müşteri</h3>
            <p className="text-gray-300">Müşteri memnuniyeti odaklı çalışarak uzun süreli iş birlikleri kuruyoruz.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 