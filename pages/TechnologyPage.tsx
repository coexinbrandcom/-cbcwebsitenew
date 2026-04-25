
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Cpu, Code2, Layers, Globe, Zap, Database } from 'lucide-react';
import { useSEO } from '@/src/hooks/useSEO';

const TechnologyPage: React.FC = () => {
  useSEO({
    title: 'Custom Software Engineering & Digital Infrastructure',
    description: 'We build high-performance custom platforms, enterprise architecture, and headless integrations. Scalable, secure, and built for the long game.'
  });

  return (
    <div className="pt-32 pb-20 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h1 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-8">Pillar 03: Technology</h1>
          <h2 className="font-space text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
            The Machine <br />
            <span className="text-zinc-800 italic">Powers</span> The Brand.
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            We build the systems that keep a company running. Whether it's a custom platform for your whole business or a new way to sell online, we make sure it's fast, secure, and ready to grow.
          </p>
        </motion.div>

        {/* Tech Stack Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          <div className="md:col-span-2 p-12 bg-zinc-950 border border-white/5 flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-500">
            <div>
              <Code2 className="text-cyan-500 mb-8" size={48} />
              <h3 className="font-space text-3xl font-bold mb-4">Custom Platform Development</h3>
              <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-xl">
                We build custom software from scratch to solve your specific problems. We don't use generic templates. You get exactly what your business needs to work better.
              </p>
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'].map(tech => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-12 bg-zinc-950 border border-white/5 group hover:border-cyan-500/30 transition-all duration-500">
            <Layers className="text-cyan-500 mb-8" size={48} />
            <h3 className="font-space text-2xl font-bold mb-4">Enterprise Architecture</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              We design the technical foundation for your business. It's built to handle more work as your company grows.
            </p>
          </div>

          <div className="p-12 bg-zinc-950 border border-white/5 group hover:border-cyan-500/30 transition-all duration-500">
            <Globe className="text-cyan-500 mb-8" size={48} />
            <h3 className="font-space text-2xl font-bold mb-4">Headless Integrations</h3>
            <p className="text-zinc-500 font-light leading-relaxed">
              We separate your website's content from the technical back-end. This makes your site faster and gives you more control over how it looks.
            </p>
          </div>

          <div className="md:col-span-2 p-12 bg-cyan-500 text-black flex flex-col justify-between group">
            <div>
              <Zap className="mb-8" size={48} />
              <h3 className="font-space text-3xl font-bold mb-4">High-Performance UI/UX</h3>
              <p className="text-black/80 text-lg font-medium leading-relaxed max-w-xl">
                We build websites that are easy for people to use. Our focus is on making things fast and simple so your customers can find what they need and buy from you without any trouble.
              </p>
            </div>
            <div className="mt-12 font-space font-bold text-sm uppercase tracking-widest">
              Engineered for <span className="underline decoration-2 underline-offset-4">Conversion</span>
            </div>
          </div>
        </div>

        {/* Technical Philosophy */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-4xl">
            <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-8">Our Philosophy</h2>
            <h3 className="font-space text-4xl md:text-6xl font-bold tracking-tight mb-12">Built for the Long Game.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-space text-xl font-bold mb-4 flex items-center gap-3">
                  <Database size={20} className="text-cyan-500" />
                  Data Integrity
                </h4>
                <p className="text-zinc-500 font-light leading-relaxed">
                  We make sure every system we build handles your data correctly. You'll have accurate information that you can actually use to make decisions.
                </p>
              </div>
              <div>
                <h4 className="font-space text-xl font-bold mb-4 flex items-center gap-3">
                  <Cpu size={20} className="text-cyan-500" />
                  Scalable Logic
                </h4>
                <p className="text-zinc-500 font-light leading-relaxed">
                  We don't just build for what you need right now. We build for where you'll be in a few years. Our systems are easy to expand when you're ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-zinc-950 border border-white/5"></div>
          <div className="relative z-10 text-center px-6">
            <h3 className="font-space text-4xl font-bold mb-8">Need a technical partner?</h3>
            <Link to="/contact" className="inline-block bg-white text-black font-space font-bold py-6 px-16 uppercase tracking-widest hover:bg-cyan-500 transition-all duration-300">
              Start Technical Briefing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
