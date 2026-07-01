import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PriceTicker from './components/PriceTicker';
import TradingLoader from './components/TradingLoader';

// Pages
import Home from './pages/Home';
import Markets from './pages/Markets';
import AISignal from './pages/AISignal';
import Journal from './pages/Journal';
import News from './pages/News';
import Education from './pages/Education';
import SignalTransparentReport from './pages/SignalTransparentReport';
import Login from './pages/Login';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  // Scroll animations
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

  // Global Page Loading State
  useEffect(() => {
    setIsLoading(true);
    // Simulate network/AI analysis delay on route change
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0); // Scroll to top on route change
    }, 1500); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-white overflow-x-hidden">
      {isLoading && <TradingLoader fullScreen={true} />}
      
      {/* Hide Navbar & Footer on Login page if desired, but we'll keep them for consistency or remove them if it conflicts. Actually, login pages usually don't have the main navbar. Since it's inside App, we can conditionally hide it, but the user didn't specify. I'll just leave it. */}
      {location.pathname !== '/login' && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/ai-signal" element={<AISignal />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/news" element={<News />} />
        <Route path="/education" element={<Education />} />
        <Route path="/signal-report" element={<SignalTransparentReport />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      {location.pathname !== '/login' && <Footer />}
      {location.pathname !== '/login' && <PriceTicker />}
    </div>
  );
}

export default App;
