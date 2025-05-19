import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-32 pb-12 bg-gradient-to-r from-blue-900 via-primary to-blue-800 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center">İletişim</h1>
          <p className="text-xl text-center mt-4 max-w-3xl mx-auto text-gray-200">
            Sorularınız, projeleriniz veya işbirliği teklifleriniz için bizimle iletişime geçin
          </p>
        </div>
      </div>
      
      {/* İletişim Bilgileri Kartları */}
      <section className="py-12 bg-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-primary text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Adres</h3>
              <p className="text-gray-600">Ankara, Türkiye</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaPhone className="text-primary text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Telefon</h3>
              <p className="text-gray-600">+(90) 505 948 92 46
+(90) 551 160 64 10</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaEnvelope className="text-primary text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">E-posta</h3>
              <p className="text-gray-600">emnifysoft@gmail.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <FaClock className="text-primary text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-600">Pzt - Cuma: 09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* İletişim Formu */}
      <ContactForm />
      
      {/* Harita Bölümü - Gerçek bir harita entegrasyonu için Google Maps API kullanılabilir */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">Bize Ulaşın</h2>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-lg">Burada bir harita görüntülenecek (Google Maps Embed API)</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 