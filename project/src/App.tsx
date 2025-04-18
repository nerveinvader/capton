import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Tutorial } from './components/Tutorial';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setFile(null);
    setPrompt('');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#E2CEB1] text-[#003366]">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={setLanguage}
      />
      <Hero />
      <Features
        prompt={prompt}
        setPrompt={setPrompt}
        file={file}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      <Tutorial />
      <Pricing
        isAnnualBilling={isAnnualBilling}
        setIsAnnualBilling={setIsAnnualBilling}
      />
      <About />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;