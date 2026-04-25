
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Cpu, BarChart3 } from 'lucide-react';

const CapabilityBlock = ({ icon: Icon, title, items, id, link }: { icon: any, title: string, items: string[], id: string, link: string }) => (
  <Link to={link} id={id} className="group p-10 border border-white/5 hover:border-cyan-500/50 transition-all duration-500 bg-white/[0.02] flex flex-col justify-between scroll-mt-24">
    <div>
      <div className="mb-8 inline-flex p-5 bg-white/5 text-cyan-500 transition-transform duration-500 group-hover:scale-110 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <h4 className="font-space text-2xl font-bold mb-8 tracking-tight">{title}</h4>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start space-x-3 text-[13px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
            <div className="w-1.5 h-1.5 bg-cyan-500/40 rounded-full group-hover:bg-cyan-500 transition-colors mt-1.5 flex-shrink-0"></div>
            <span className="font-light tracking-wide">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </Link>
);

const Capabilities: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-6">Capabilities Deep Dive</h2>
            <h3 className="font-space text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-4">Precision Mastery.</h3>
            <p className="text-zinc-500 text-lg font-light tracking-tight">We build the tools and strategies that help your brand grow.</p>
          </div>
          <div className="max-w-xl">
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              We don't just build websites or run ads. We look at your business data and use our technical skills to get you better results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CapabilityBlock 
            id="strat-deep"
            icon={Brain}
            title="Intelligence"
            link="/strategy"
            items={[
              "Market Competitor Mapping",
              "Brand Architecture Design",
              "Value Proposition Audits",
              "Growth Opportunity Ops",
              "Strategic Positioning"
            ]}
          />
          <CapabilityBlock 
            id="tact-deep"
            icon={Zap}
            title="Tactics"
            link="/creative"
            items={[
              "Omnichannel Execution",
              "Performance Marketing",
              "Content Strategy",
              "Social Media Authority",
              "Tactical Funnel Design"
            ]}
          />
          <CapabilityBlock 
            id="soft-deep"
            icon={Cpu}
            title="Software"
            link="/technology"
            items={[
              "Custom Platform Dev",
              "Enterprise Architecture",
              "High-Performance UI/UX",
              "Headless Integrations",
              "System Interconnectivity"
            ]}
          />
          <CapabilityBlock 
            id="anal-deep"
            icon={BarChart3}
            title="Analytics"
            link="/strategy"
            items={[
              "Full-Funnel Attribution",
              "User Behavior Mapping",
              "Predictive ROI Modeling",
              "Custom BI Dashboards",
              "Data-Driven Decisions"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
