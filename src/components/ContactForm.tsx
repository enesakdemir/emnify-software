'use client';

import { useForm, ValidationError } from '@formspree/react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xldbvrbj"); // Formspree için güncel form ID

  return (
    <section id="iletisim" className="section bg-light">
      <div className="container">
        <h2 className="section-title">İletişim</h2>
        <p className="section-subtitle">
          Projeleriniz, fikirleriniz veya sorularınız için bizimle iletişime geçin
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* İletişim Formu */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Bize Mesaj Gönderin</h3>
            
            {state.succeeded ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                <p className="font-medium">Teşekkürler! Mesajınız başarıyla gönderildi.</p>
                <p className="text-sm">En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Ad Soyad
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    E-posta Adresi
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Konu
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary w-full"
                >
                  {state.submitting ? 'Gönderiliyor...' : 'Mesajı Gönder'}
                </button>
                <ValidationError errors={state.errors} />
              </form>
            )}
          </div>
          
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Adres</h4>
                  <p className="text-gray-600">
                    İstanbul, Türkiye
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Telefon</h4>
                  <p className="text-gray-600 flex flex-col items-center">
                    <span>+(90) 505 948 92 46</span>
                    <span>+(90) 551 160 64 10</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">E-posta</h4>
                  <p className="text-gray-600">
                    emnifysoft@gmail.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Çalışma Saatleri</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pazartesi - Cuma</span>
                  <span className="font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cumartesi</span>
                  <span className="font-medium">Kapalı</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pazar</span>
                  <span className="font-medium">Kapalı</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-gray-700">
                Hizmetlerimiz hakkında detaylı bilgi almak veya projeniz için teklif talep etmek için bize ulaşın. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 