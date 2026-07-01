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
import NewsDetail from './pages/NewsDetail';
import Education from './pages/Education';
import SignalTransparentReport from './pages/SignalTransparentReport';
import Login from './pages/Login';
import Register from './pages/Register';
import MyProfile from './pages/MyProfile';
import FloatingTelegram from './components/FloatingTelegram';
import ProtectedRoute from './components/ProtectedRoute';

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
    }, 800); 

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-white overflow-x-hidden">
      {isLoading && <TradingLoader fullScreen={true} />}
      
      {!isAuthPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/ai-signal" element={<AISignal />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/journal" element={<Journal />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>
        
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/education" element={<Education />} />
        <Route path="/signal-report" element={<SignalTransparentReport />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
      {!isAuthPage && <Footer />}
      {!isAuthPage && <PriceTicker />}
      {!isAuthPage && <FloatingTelegram />}
    </div>
  );
}

export default App;
