
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PILLARS, PILLAR_ICONS } from '../constants';

const PillarGrid: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section id="strategy" className="py-24 relative overflow-hidden bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-4">How we work</h2>
            <h3 className="font-space text-4xl md:text-6xl font-bold tracking-tight">The Growth Engine.</h3>
          </div>
          <div>
            <p className="text-zinc-500 text-lg leading-relaxed font-light">
              We don't just offer generic services. We focus on four specific areas: strategy, tactics, software, and data. By connecting these, we make sure every project delivers a clear result.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {PILLARS.map((pillar) => (
            <Link 
              key={pillar.id}
              to={`/${pillar.id === 'analytics' ? 'strategy' : pillar.id === 'tactics' ? 'creative' : pillar.id}`}
              className={`relative group p-10 h-[580px] flex flex-col justify-between transition-all duration-700 cursor-pointer overflow-hidden border-r border-b lg:border-b-0 border-white/10 ${activePillar === pillar.id ? 'bg-cyan-500' : 'bg-zinc-950'}`}
              onMouseEnter={() => setActivePillar(pillar.id)}
              onMouseLeave={() => setActivePillar(null)}
            >
              {/* Pillar Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <span className={`font-space font-bold text-5xl transition-colors duration-500 ${activePillar === pillar.id ? 'text-black/20' : 'text-white/5'}`}>
                    {pillar.number}
                  </span>
                  <div className={`p-3 transition-colors duration-500 ${activePillar === pillar.id ? 'text-black' : 'text-cyan-500'}`}>
                    {PILLAR_ICONS[pillar.icon]}
                  </div>
                </div>
                
                <h4 className={`font-space text-2xl font-bold mb-4 transition-colors duration-500 ${activePillar === pillar.id ? 'text-black' : 'text-white'}`}>
                  {pillar.title}
                </h4>
                
                <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-6 transition-colors duration-500 ${activePillar === pillar.id ? 'text-black/80' : 'text-cyan-500'}`}>
                  {pillar.focus}
                </p>
                
                <p className={`text-sm leading-relaxed transition-colors duration-500 ${activePillar === pillar.id ? 'text-black font-medium' : 'text-zinc-400'}`}>
                  {pillar.description}
                </p>
              </div>

              <div className="relative z-10">
                <div className={`pt-8 border-t transition-colors duration-500 ${activePillar === pillar.id ? 'border-black/10' : 'border-white/10'}`}>
                  <p className={`text-[9px] uppercase font-bold tracking-widest mb-2 transition-colors duration-500 ${activePillar === pillar.id ? 'text-black' : 'text-zinc-500'}`}>
                    Technical Flex:
                  </p>
                  <p className={`text-[11px] font-space transition-colors duration-500 ${activePillar === pillar.id ? 'text-black font-bold' : 'text-zinc-300'}`}>
                    {pillar.techFlex}
                  </p>
                </div>
              </div>

              {/* Special Effects per Pillar */}
              {activePillar === pillar.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {pillar.id === 'software' && (
                    <div className="absolute inset-0 opacity-10 font-mono text-[6px] p-4 leading-none overflow-hidden select-none whitespace-pre">
                      {`export class GrowthEngine {\n  constructor(config: Config) {\n    this.strategy = config.strategy;\n    this.tactics = config.tactics;\n  }\n\n  async dominate(market: Market) {\n    const results = await this.execute();\n    return this.analyze(results);\n  }\n}`}
                    </div>
                  )}
                  {pillar.id === 'analytics' && (
                    <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                       <div className="w-full h-1/2 flex items-end justify-around px-8 space-x-1">
                          {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
                            <div key={i} className="bg-black/20 w-full rounded-t-sm animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}></div>
                          ))}
                       </div>
                    </div>
                  )}
                  {pillar.id === 'tactics' && (
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] animate-pulse"></div>
                  )}
                </div>
              )}

              <div className={`absolute bottom-0 right-0 w-32 h-32 transform translate-x-1/4 translate-y-1/4 rounded-full blur-3xl transition-all duration-700 ${activePillar === pillar.id ? 'bg-white/20' : 'bg-cyan-500/5'}`}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarGrid;
