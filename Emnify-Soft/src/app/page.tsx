import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <AboutSection />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
} 