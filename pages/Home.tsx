import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PillarGrid from '../components/PillarGrid';
import Capabilities from '../components/Capabilities';
import Industries from '../components/Industries';
import FounderPreview from '../components/Founder';
import { useSEO } from '@/src/hooks/useSEO';

const Home: React.FC = () => {
  useSEO({
    title: 'Strategic Insight, Digital Engineering & Brand Authority',
    description: 'Coexin Brandcom provides high-performance brand strategy, custom software engineering, and creative production. We build the growth engines that power market leaders.'
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty('--scroll-p', scrollPercent.toString());
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-1 h-full bg-white/5 z-50">
        <div 
          className="w-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-100 ease-out" 
          style={{ height: 'calc(var(--scroll-p, 0) * 100%)' }}
        ></div>
      </div>

      <Hero />
      
      {/* The "Core Four" Interconnected Pillars */}
      <PillarGrid />
      
      {/* Deep Dive Capabilities */}
      <Capabilities />
      
      {/* Industry Verticals */}
      <Industries />

      {/* The Specialist Section */}
      <FounderPreview />

      {/* Call to Action Segment */}
      <div id="tactics" className="relative scroll-mt-20">
        <section className="py-32 bg-cyan-500">
           <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 text-black">
              <div className="max-w-2xl">
                <h3 className="font-space text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
                  Ready to Dominant Your Market?
                </h3>
                <p className="text-black/80 text-lg font-medium leading-relaxed">
                  Precision strategy. Powerful software. Provocative creative. Our team is ready to engineer your next outcomes.
                </p>
              </div>
              <Link to="/contact" className="whitespace-nowrap bg-black text-white font-space font-bold py-6 px-16 text-xl uppercase tracking-widest hover:bg-zinc-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl">
                Request a Briefing
              </Link>
           </div>
        </section>
      </div>

      <section className="py-32 bg-black overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="flex flex-col justify-center">
                <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-6">Our Philosophy</h2>
                <h3 className="font-space text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-12 text-white">
                  Beyond Aesthetics.<br />
                  Built for Impact.
                </h3>
                <div className="space-y-8 text-zinc-400 text-lg font-light leading-relaxed max-w-lg">
                  <p>
                    In a fragmented digital economy, a brand cannot survive on "creative flair" alone. True market dominance requires the intersection of four distinct disciplines: deep-data strategy, omnichannel tactics, robust software architecture, and verifiable analytics.
                  </p>
                  <p>
                    At Coexin Brandcom, we don't just design interfaces; we engineer digital ecosystems and consult on the strategic implementation required to turn vision into measurable legacy.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-white/[0.02] border border-white/5 p-1 flex items-center justify-center overflow-hidden">
                   <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                    alt="Strategic Vision" 
                    className="w-full h-full object-cover opacity-30 grayscale hover:opacity-50 transition-opacity duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-black border border-white/10 p-8 hidden md:block backdrop-blur-xl">
                  <p className="font-space text-5xl font-bold text-cyan-500 mb-2">94%</p>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Project Success Rate</p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;