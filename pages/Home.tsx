
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import PillarGrid from '../components/PillarGrid';
import Capabilities from '../components/Capabilities';

const Home: React.FC = () => {
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
      <div id="strategy" className="relative">
        <PillarGrid />
      </div>
      <Capabilities />
      <div id="tactics" className="relative">
        <section className="py-24 bg-cyan-500">
           <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 text-black">
              <div className="max-w-2xl">
                <h3 className="font-space text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
                  Ready to Grow?
                </h3>
                <p className="text-black/80 text-lg font-medium leading-relaxed">
                  We are now accepting new partnerships for the coming quarter. Start a conversation today and find out how we can help your brand dominate.
                </p>
              </div>
              <button className="whitespace-nowrap bg-black text-white font-space font-bold py-6 px-16 text-xl uppercase tracking-widest hover:bg-zinc-900 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl">
                Request Growth Audit
              </button>
           </div>
        </section>
      </div>

      <section className="py-32 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="flex flex-col justify-center">
                <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-6">Our Philosophy</h2>
                <h3 className="font-space text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-12 text-white">
                  Strategy with Vision.<br />
                  Data with Purpose.
                </h3>
                <div className="space-y-8 text-zinc-400 text-lg font-light leading-relaxed max-w-lg">
                  <p>
                    Success isn't accidental; it’s designed. We believe that every strategic move and every line of code should result in a clear, measurable outcome for your business.
                  </p>
                  <p>
                    We value long-term results over short-term trends. By combining logic with creativity, we build brands that don’t just survive—they lead the way.
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
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Client Success Rate</p>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
