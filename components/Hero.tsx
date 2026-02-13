
import React, { useEffect, useState } from 'react';
import { ArrowRight, Code } from 'lucide-react';

const Hero: React.FC = () => {
  const [loadTime, setLoadTime] = useState('0.14s');

  useEffect(() => {
    if (window.performance) {
      const timing = window.performance.timing;
      const lt = ((timing.loadEventEnd - timing.navigationStart) / 1000).toFixed(2);
      if (parseFloat(lt) > 0) setLoadTime(`${lt}s`);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a192f_0%,#050505_100%)]"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          {/* Decisive Frame UI */}
          <div className="absolute -inset-4 md:-inset-10 border border-cyan-500/20 pointer-events-none hidden md:block">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/40"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/40"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40"></div>
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span>Your Integrated Growth Partner</span>
          </div>
          
          <h1 className="font-space text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Precision Strategy.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-white">Powerful Software.</span><br />
            Provocative Creative.
          </h1>
          
          <p className="text-zinc-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light">
            We build brands that don’t just compete, they dominate. Coexin is an integrated communications powerhouse that aligns business intelligence with technical mastery.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#tactics" className="group relative flex items-center justify-center space-x-3 bg-white text-black font-bold py-5 px-10 rounded-none transition-all duration-300 transform hover:bg-cyan-500 active:scale-95 font-space text-sm uppercase tracking-widest overflow-hidden">
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-cyan-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a href="#strategy" className="flex items-center justify-center space-x-3 border border-white/20 hover:border-cyan-500 text-white font-bold py-5 px-10 rounded-none transition-all duration-300 font-space text-sm uppercase tracking-widest backdrop-blur-sm">
              Our Capabilities
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Response Speed</p>
              <p className="font-space font-bold text-xl text-cyan-400">{loadTime}</p>
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Platform Reliability</p>
              <p className="font-space font-bold text-xl text-cyan-400">99.9%</p>
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1">Growth Multiplier</p>
              <p className="font-space font-bold text-xl text-cyan-400">4.8x</p>
            </div>
          </div>
        </div>

        {/* Technical Visualization Layer */}
        <div className="hidden lg:flex justify-center relative">
          <div className="w-[550px] h-[550px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border border-cyan-500/10 rounded-full animate-[spin_40s_linear_infinite] p-12">
                <div className="w-full h-full border border-cyan-500/20 rounded-full animate-[spin_25s_linear_infinite_reverse] p-12">
                  <div className="w-full h-full border border-cyan-400/30 rounded-full flex items-center justify-center bg-[#0a192f]/20 backdrop-blur-sm">
                     <div className="text-center">
                        <Code className="w-20 h-20 text-cyan-400 mx-auto mb-4 opacity-70" strokeWidth={1} />
                        <p className="font-space font-bold text-[10px] tracking-[0.4em] text-cyan-400 uppercase">Architecture</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 right-0 p-4 border-l-2 border-cyan-500 bg-black/40 backdrop-blur-md">
              <p className="font-mono text-[10px] text-cyan-500 uppercase tracking-widest">Optimized Performance</p>
              <div className="w-24 h-1 bg-white/5 mt-1">
                <div className="w-[88%] h-full bg-cyan-500"></div>
              </div>
            </div>
            <div className="absolute bottom-20 left-0 p-4 border-r-2 border-white/20 bg-black/40 backdrop-blur-md font-mono text-[9px] text-zinc-500">
              [PROCESS] Synchronizing Strategy<br/>
              [STATUS] Growth Engine Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;