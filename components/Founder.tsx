// This component provides a preview and link to the dedicated Founder page.

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FounderPreview: React.FC = () => {
  const founderImageUrl = "https://storage.googleapis.com/ai-studio-bucket-855833086157-us-west1/media/image%20(7).png";

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
             <div className="mb-6">
               <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-2">Iroshan Kulatunga</h2>
               <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">MBA (London Met), MBCS</p>
             </div>
             <h3 className="font-space text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8 leading-tight">
               Turning Vision into<br/>Lasting Value.
             </h3>
             <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10 max-w-lg">
               I help businesses in complex industries grow. By combining strategy with technical execution, I build brands that people trust.
             </p>
             <Link to="/founder" className="inline-flex items-center space-x-4 text-white font-space font-bold uppercase tracking-widest border-b border-cyan-500 pb-2 hover:text-cyan-500 transition-colors group">
               <span>Read my story</span>
               <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
             </Link>
          </div>
          <div className="order-1 lg:order-2 aspect-[4/3] bg-zinc-900 border border-white/10 overflow-hidden relative group">
             <img 
               src={founderImageUrl} 
               alt="Iroshan Kulatunga - Founder" 
               className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderPreview;