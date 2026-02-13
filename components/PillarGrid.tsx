
import React, { useState } from 'react';
import { PILLARS, PILLAR_ICONS } from '../constants';

const PillarGrid: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string | null>(null);

  return (
    <section id="pillars" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-4">The Growth Machine</h2>
            <h3 className="font-space text-4xl md:text-6xl font-bold tracking-tight">Coexin Ecosystem.</h3>
          </div>
          <div>
            <p className="text-zinc-500 text-lg leading-relaxed font-light">
              We align four critical pillars to create a seamless growth engine. Strategy defines the vision, Tactics drive the momentum, Software builds the machine, and Analytics provides the proof.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
          {PILLARS.map((pillar) => (
            <div 
              key={pillar.id}
              className={`relative group p-12 h-[520px] flex flex-col justify-between transition-all duration-700 cursor-pointer overflow-hidden border-r border-b lg:border-b-0 border-white/10 ${activePillar === pillar.id ? 'bg-cyan-500' : 'bg-zinc-950'}`}
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
                
                <p className={`text-xs uppercase tracking-widest font-bold mb-6 transition-colors duration-500 ${activePillar === pillar.id ? 'text-black/80' : 'text-cyan-500'}`}>
                  {pillar.focus}
                </p>
                
                <p className={`text-sm leading-relaxed transition-colors duration-500 ${activePillar === pillar.id ? 'text-black font-medium' : 'text-zinc-400'}`}>
                  {pillar.description}
                </p>
              </div>

              <div className="relative z-10">
                <div className={`pt-8 border-t transition-colors duration-500 ${activePillar === pillar.id ? 'border-black/10' : 'border-white/10'}`}>
                  <p className={`text-[10px] uppercase font-bold tracking-wider mb-2 transition-colors duration-500 ${activePillar === pillar.id ? 'text-black' : 'text-zinc-500'}`}>
                    Technical Flex:
                  </p>
                  <p className={`text-xs transition-colors duration-500 ${activePillar === pillar.id ? 'text-black font-semibold' : 'text-zinc-300 italic'}`}>
                    {pillar.techFlex}
                  </p>
                </div>
              </div>

              {/* Reveal effect for Software */}
              {pillar.id === 'software' && activePillar === 'software' && (
                <div className="absolute inset-0 opacity-10 font-mono text-[7px] overflow-hidden whitespace-pre pointer-events-none p-4 select-none leading-tight">
                  {`function deploySystem() {\n  const engine = new GrowthEngine();\n  engine.align(Strategy);\n  engine.optimize(Tactics);\n  engine.validate(Analytics);\n  return engine.dominate();\n}`}
                </div>
              )}

              <div className={`absolute bottom-0 right-0 w-32 h-32 transform translate-x-1/4 translate-y-1/4 rounded-full blur-3xl transition-all duration-700 ${activePillar === pillar.id ? 'bg-white/20' : 'bg-cyan-500/5'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarGrid;
