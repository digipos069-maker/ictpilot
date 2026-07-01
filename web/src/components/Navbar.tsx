import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
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
          <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" to="/journal">Journal</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" to="/news">News</Link>
          <Link className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-body-md text-body-md" to="/education">Education</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link className="hidden md:block text-on-surface hover:text-primary transition-colors duration-200 font-bold" to="/login">Login</Link>
          <button className="hidden md:block bg-[#032EA1] text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-all hover:brightness-110">
              Start for free
          </button>
          
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
          <Link onClick={closeMenu} className="text-2xl font-bold text-on-surface hover:text-primary transition-colors" to="/journal">Journal</Link>
          <Link onClick={closeMenu} className="text-2xl font-bold text-on-surface hover:text-primary transition-colors" to="/news">News</Link>
          <Link onClick={closeMenu} className="text-2xl font-bold text-on-surface hover:text-primary transition-colors" to="/education">Education</Link>
          
          <div className="mt-8 flex flex-col gap-4">
            <Link onClick={closeMenu} className="text-center text-on-surface font-bold text-lg hover:text-primary transition-colors" to="/login">
              Login
            </Link>
            <button onClick={closeMenu} className="bg-[#032EA1] text-white px-6 py-4 rounded-full font-bold text-lg text-center w-full">
              Start for free
            </button>
          </div>
        </div>
      )}
    </>
  );
}
