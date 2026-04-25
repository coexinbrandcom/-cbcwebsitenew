
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Target, Compass, BarChart, ShieldCheck } from 'lucide-react';
import { useSEO } from '@/src/hooks/useSEO';

const StrategyPage: React.FC = () => {
  useSEO({
    title: 'Brand Strategy & Market Intelligence',
    description: 'We map out your market and brand positioning to create a clear growth strategy based on data, not guesses. Intelligence before execution.'
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
          <h1 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-8">Pillar 01: Strategy</h1>
          <h2 className="font-space text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-12">
            Intelligence <br />
            <span className="text-zinc-800 italic">Before</span> Execution.
          </h2>
          <p className="text-zinc-400 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
            We stop the guessing by mapping out your market and how your brand fits in. This isn't just a basic plan. It's a clear set of instructions for how to grow.
          </p>
        </motion.div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: Brain,
              title: "Market Intelligence",
              desc: "We map out your competitors and look at how the market is moving. This helps us find the space where your brand can stand out."
            },
            {
              icon: Target,
              title: "Strategic Positioning",
              desc: "Defining your unique value proposition to make sure people understand what you offer right away."
            },
            {
              icon: Compass,
              title: "Brand Architecture",
              desc: "We organize how your products and services work together. This makes it easier for customers to understand and buy from you."
            },
            {
              icon: BarChart,
              title: "Growth Opportunity Ops",
              desc: "Identifying new ways to grow online by looking closely at your data."
            },
            {
              icon: ShieldCheck,
              title: "Value Proposition Audits",
              desc: "Testing your current market offering against what customers are actually doing and what your competitors are up to."
            }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 bg-zinc-950 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group"
            >
              <div className="mb-8 text-cyan-500 group-hover:scale-110 transition-transform duration-500">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              <h3 className="font-space text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-light">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Methodology Section */}
        <section className="py-32 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="font-space text-4xl md:text-6xl font-bold tracking-tight mb-8">The Coexin Process</h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed mb-12">
                We work based on facts, not guesses. We don't rely on gut feelings. We look at the data to see what's actually happening.
              </p>
              <div className="space-y-12">
                {[
                  { step: "01", title: "Discovery & Audit", desc: "We look at your current data, where you stand in the market, and what your competitors are doing." },
                  { step: "02", title: "Hypothesis Testing", desc: "We look at different ways you could grow and test them against what's happening in the market." },
                  { step: "03", title: "Strategic Blueprint", desc: "A clear plan that shows you exactly what steps to take to grow your business." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8">
                    <span className="font-space text-4xl font-bold text-cyan-500/20">{item.step}</span>
                    <div>
                      <h4 className="font-space text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-zinc-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-zinc-900 border border-white/5 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Strategy Session" 
                  className="w-full h-full object-cover opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-cyan-500 p-12 hidden md:block">
                <p className="font-space text-6xl font-bold text-black leading-none mb-2">100%</p>
                <p className="text-black font-bold text-xs uppercase tracking-widest">Data-Driven Insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-zinc-950 border border-cyan-500/20 p-16 text-center"
        >
          <h3 className="font-space text-4xl font-bold mb-8">Ready to grow your business?</h3>
          <Link to="/contact" className="inline-block bg-cyan-500 text-black font-space font-bold py-6 px-16 uppercase tracking-widest hover:bg-white transition-all duration-300">
            Request a Strategic Audit
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default StrategyPage;
