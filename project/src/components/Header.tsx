import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
  language: 'en' | 'es';
  setLanguage: (lang: 'en' | 'es') => void;
}

export function Header({ isMenuOpen, setIsMenuOpen, scrollToSection, language, setLanguage }: HeaderProps) {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="fixed w-full bg-[#FDFCE8]/90 backdrop-blur-sm z-50 border-b border-[#003366]/10">
      <nav className="container mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold">AICompany</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {['Home', 'Features', 'Pricing', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-[#003366]/70 transition-colors"
            >
              {item}
            </button>
          ))}
          <button className="bg-[#003366] text-white px-6 py-2 rounded-full hover:bg-[#003366]/90 transition-colors">
            Get Started
          </button>
          <button
            onClick={toggleLanguage}
            className="bg-[#003366]/10 text-[#003366] px-4 py-2 rounded-full hover:bg-[#003366]/20 transition-colors font-medium"
          >
            {language.toUpperCase()}
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#FDFCE8] border-b border-[#003366]/10">
          <div className="container mx-auto px-8 py-4 flex flex-col space-y-4">
            {['Home', 'Features', 'Pricing', 'About'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-[#003366]/70 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="bg-[#003366] text-white px-6 py-2 rounded-full hover:bg-[#003366]/90 transition-colors">
              Get Started
            </button>
            <button
              onClick={toggleLanguage}
              className="bg-[#003366]/10 text-[#003366] px-4 py-2 rounded-full hover:bg-[#003366]/20 transition-colors font-medium"
            >
              {language.toUpperCase()}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}