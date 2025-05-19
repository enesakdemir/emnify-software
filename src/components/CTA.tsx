'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projenizi Hayata Geçirmeye Hazır Mısınız?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            İşletmeniz için profesyonel web tasarım ve yazılım çözümlerimizle dijital dönüşümünüzü 
            hemen başlatın. Size özel fiyat teklifi almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/iletisim" className="btn bg-white text-primary hover:bg-gray-100">
              Ücretsiz Teklif Al
            </Link>
            <Link href="/hizmetler" className="btn bg-transparent border-2 border-white hover:bg-white/10">
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 