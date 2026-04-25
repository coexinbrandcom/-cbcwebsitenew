
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Strategy', href: '/strategy' },
    { name: 'Creative', href: '/creative' },
    { name: 'Technology', href: '/technology' },
    { name: 'Industries', href: '/industries' },
    { name: 'Founder', href: '/founder' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="group flex items-center space-x-2">
          <span className="font-space font-bold text-2xl tracking-tighter text-white">COEXIN</span>
          <span className="font-space font-light text-2xl text-cyan-500 group-hover:text-white transition-colors duration-300">BRANDCOM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-space font-bold text-zinc-400 hover:text-cyan-500 transition-colors uppercase tracking-[0.2em]"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[11px] font-space font-bold transition-colors uppercase tracking-[0.2em] ${location.pathname === link.href ? 'text-cyan-500' : 'text-zinc-400 hover:text-cyan-500'}`}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link 
            to="/contact"
            className="bg-cyan-500 hover:bg-white text-black font-bold py-2.5 px-6 rounded-none transition-all duration-300 transform hover:scale-105 active:scale-95 font-space text-[11px] uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-50 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-6">
          <button 
            className="absolute top-8 right-8 text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
               <a 
                key={link.name} 
                href={link.href}
                onClick={handleLinkClick}
                className="text-3xl font-space font-bold text-white hover:text-cyan-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
                className="text-3xl font-space font-bold text-white hover:text-cyan-500 transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link 
            to="/contact"
            onClick={handleLinkClick}
            className="mt-8 bg-cyan-500 text-black font-bold py-4 px-12 rounded-none font-space text-lg uppercase tracking-widest"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;