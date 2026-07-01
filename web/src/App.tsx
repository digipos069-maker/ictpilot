import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PriceTicker from './components/PriceTicker';

// Pages
import Home from './pages/Home';
import Markets from './pages/Markets';
import AISignal from './pages/AISignal';
import Journal from './pages/Journal';
import News from './pages/News';
import Education from './pages/Education';
import SignalTransparentReport from './pages/SignalTransparentReport';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/ai-signal" element={<AISignal />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/news" element={<News />} />
        <Route path="/education" element={<Education />} />
        <Route path="/signal-report" element={<SignalTransparentReport />} />
      </Routes>
      <Footer />
      <PriceTicker />
    </div>
  );
}

export default App;
