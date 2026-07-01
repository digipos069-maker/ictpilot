import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoreStats from './components/CoreStats';
import FeaturesSection from './components/FeaturesSection';
import HowItWorks from './components/HowItWorks';
import SecuritySection from './components/SecuritySection';
import Ecosystem from './components/Ecosystem';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PriceTicker from './components/PriceTicker';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.remove('opacity-0');
          card.classList.add('opacity-100');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CoreStats />
      <FeaturesSection />
      <HowItWorks />
      <SecuritySection />
      <Ecosystem />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <PriceTicker />
    </div>
  );
}

export default App;
