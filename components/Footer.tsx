
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 opacity-5 font-space text-[15vw] font-black leading-none pointer-events-none select-none">
        COEXIN
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-4">
            <Link to="/" onClick={scrollToTop} className="inline-flex items-center space-x-2 font-space font-bold text-3xl tracking-tighter mb-8 group">
              <span className="text-white">COEXIN</span>
              <span className="text-cyan-500 group-hover:text-white transition-colors">BRANDCOM</span>
            </Link>
            <p className="text-zinc-500 text-lg mb-8 max-w-sm leading-relaxed font-light">
              We handle the strategy and technical work that businesses need to grow. Our team builds systems and brands that actually work.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/50 transition-all"><Twitter size={18} /></a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/50 transition-all"><Linkedin size={18} /></a>
              <a href="#" className="p-3 bg-white/5 border border-white/10 text-white hover:text-cyan-400 hover:border-cyan-400/50 transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h5 className="font-space text-xs uppercase tracking-[0.3em] font-bold text-white mb-8">Layers</h5>
              <ul className="space-y-4">
                <li><Link to="/strategy" onClick={scrollToTop} className="text-zinc-500 hover:text-cyan-400 transition-colors">Strategy</Link></li>
                <li><Link to="/technology" onClick={scrollToTop} className="text-zinc-500 hover:text-cyan-400 transition-colors">Technology</Link></li>
                <li><Link to="/creative" onClick={scrollToTop} className="text-zinc-500 hover:text-cyan-400 transition-colors">Creative</Link></li>
                <li><Link to="/industries" onClick={scrollToTop} className="text-zinc-500 hover:text-cyan-400 transition-colors">Verticals</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-space text-xs uppercase tracking-[0.3em] font-bold text-white mb-8">Intelligence</h5>
              <ul className="space-y-4">
                <li><a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors">AI Engineering</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors">Experiential Production</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors">Growth Audits</a></li>
                <li><a href="#" className="text-zinc-500 hover:text-cyan-400 transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h5 className="font-space text-xs uppercase tracking-[0.3em] font-bold text-white mb-8">Intelligence HQ</h5>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-zinc-500">
                  <MapPin size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">Beach Road, Polhena, Matara,<br/>Sri Lanka, 81000</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-500">
                  <Phone size={18} className="text-cyan-500 flex-shrink-0" />
                  <span className="text-sm">+94 76 3707013</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-500">
                  <Mail size={18} className="text-cyan-500 flex-shrink-0" />
                  <span className="text-sm">iroshan@coexinbrand.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
            © 2025 COEXIN BRANDCOM.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
