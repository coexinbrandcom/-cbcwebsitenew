
import React from 'react';
import { Layers, Globe, MousePointer2, TrendingUp } from 'lucide-react';

const CapabilityBlock = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <div className="group p-8 border border-white/5 hover:border-cyan-500/50 transition-all duration-500 bg-white/[0.02]">
    <div className="mb-6 inline-flex p-4 bg-white/5 text-cyan-500 transition-transform duration-500 group-hover:scale-110">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h4 className="font-space text-2xl font-bold mb-6 tracking-tight">{title}</h4>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center space-x-3 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
          <div className="w-1.5 h-1.5 bg-cyan-500/40 rounded-full"></div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Capabilities: React.FC = () => {
  return (
    <section id="software" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-20">
          <div>
            <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-4">Integrated Solutions</h2>
            <h3 className="font-space text-4xl md:text-6xl font-bold tracking-tight">Full-Spectrum Growth.</h3>
          </div>
          <div className="max-w-xl">
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              We work at the intersection of business logic and creative vision. Our solutions span the entire customer journey, ensuring every touchpoint is optimized for results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CapabilityBlock 
            icon={Layers}
            title="Brand Strategy"
            items={["Market Research", "Competitor Analysis", "Positioning Strategy", "Brand Architecture"]}
          />
          <CapabilityBlock 
            icon={Globe}
            title="Digital Product"
            items={["Modern Web Apps", "User Experience Design", "Mobile Development", "System Integration"]}
          />
          <CapabilityBlock 
            icon={TrendingUp}
            title="Growth Velocity"
            items={["Search Optimization", "Paid Media Strategy", "Content Ecosystems", "Conversion Ops"]}
          />
          <CapabilityBlock 
            icon={MousePointer2}
            title="Business Intelligence"
            items={["Custom Dashboards", "User Behavior Insights", "Predictive Modeling", "ROI Attribution"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Capabilities;