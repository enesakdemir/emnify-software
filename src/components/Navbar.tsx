'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Emnify</span>
          <span className="text-2xl font-bold text-accent">Soft</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="font-medium hover:text-primary transition-colors">
            Ana Sayfa
          </Link>
          <Link href="/hakkimizda" className="font-medium hover:text-primary transition-colors">
            Hakkımızda
          </Link>
          <Link href="/hizmetler" className="font-medium hover:text-primary transition-colors">
            Hizmetler
          </Link>
          <Link href="/referanslar" className="font-medium hover:text-primary transition-colors">
            Referanslar
          </Link>
          <Link href="/iletisim" className="font-medium hover:text-primary transition-colors">
            İletişim
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link href="/iletisim" className="btn btn-primary">
            Teklif Al
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-inner">
          <nav className="container flex flex-col gap-4">
            <Link 
              href="/" 
              className="font-medium hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Ana Sayfa
            </Link>
            <Link 
              href="/hakkimizda" 
              className="font-medium hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link 
              href="/hizmetler" 
              className="font-medium hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Hizmetler
            </Link>
            <Link 
              href="/referanslar" 
              className="font-medium hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Referanslar
            </Link>
            <Link 
              href="/iletisim" 
              className="font-medium hover:text-primary transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
            <Link 
              href="/iletisim" 
              className="btn btn-primary mt-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Teklif Al
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 