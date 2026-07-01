import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { logout } from '../store/authSlice';
import Logo from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    closeMenu();
    navigate('/');
    
    // Defer the state change slightly so the UI doesn't flash the logged-out 
    // buttons before the menu fully closes and navigation occurs.
    setTimeout(() => {
      dispatch(logout());
    }, 50);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-8 py-4 bg-background/80 dark:bg-background/80 backdrop-blur-lg border-b border-outline-variant/20">
        <div onClick={closeMenu} className="cursor-pointer">
          <Logo />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" to="/markets">Markets</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" to="/ai-signal">AI Signal</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" to="/signal-report">Transparency</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" to="/journal">Journal</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" to="/news">News</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" to="/education">Education</Link>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="hidden md:flex items-center gap-4">
              <Link className="text-on-surface font-bold hover:text-primary transition-colors duration-200 flex items-center gap-2" to="/ai-signal">
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                Dashboard
              </Link>
              <button onClick={handleLogout} className="bg-surface-container hover:bg-surface-variant text-error px-5 py-2 rounded-full font-bold transition-all text-sm border border-outline-variant/20">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link className="hidden md:block text-on-surface hover:text-primary transition-colors duration-200 font-bold" to="/login">Login</Link>
              <Link to="/register" className="hidden md:block bg-[#032EA1] text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all hover:brightness-110">
                  Start for free
              </Link>
            </>
          )}
          
          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-on-surface flex items-center justify-center p-2 hover:bg-surface-variant/50 rounded-full transition-colors" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-28 px-8 flex flex-col gap-6 h-screen overflow-y-auto">
          <Link onClick={closeMenu} className="text-2xl font-bold text-on-surface hover:text-primary transition-colors" to="/markets">Markets</Link>
          <Link onClick={closeMenu} className="text-2xl font-bold text-on-surface hover:text-primary transition-colors" to="/ai-signal">AI Signal</Link>
          <Link onClick={closeMenu} className="text-2xl font-bold text-on-surface hover:text-primary transition-colors" to="/signal-report">Transparency</Link>
          <Link onClick={closeMenu} className="text-2xl font-bold text-on-surface hover:text-primary transition-colors" to="/journal">Journal</Link>
          <Link onClick={closeMenu} className="text-2xl font-bold text-on-surface hover:text-primary transition-colors" to="/news">News</Link>
          <Link onClick={closeMenu} className="text-2xl font-bold text-on-surface hover:text-primary transition-colors" to="/education">Education</Link>
          
          <div className="mt-8 flex flex-col gap-4 pb-12">
            {isAuthenticated ? (
              <>
                <Link to="/ai-signal" onClick={closeMenu} className="bg-[#032EA1] text-white px-6 py-4 rounded-full font-bold text-lg text-center w-full block">
                  Go to Dashboard
                </Link>
                <button onClick={handleLogout} className="text-center text-error border border-outline-variant/30 font-bold text-lg hover:bg-surface-container py-4 rounded-full transition-colors">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link onClick={closeMenu} className="text-center text-on-surface font-bold text-lg hover:text-primary transition-colors" to="/login">
                  Login
                </Link>
                <Link to="/register" onClick={closeMenu} className="bg-[#032EA1] text-white px-6 py-4 rounded-full font-bold text-lg text-center w-full block">
                  Start for free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
