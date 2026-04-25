import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Stethoscope, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { useSEO } from '@/src/hooks/useSEO';

const ExpertiseItem = ({ icon: Icon, title, focus, value }: { icon: any, title: string, focus: string, value: string }) => (
  <div className="group border-b border-white/10 py-10 first:border-t hover:bg-white/[0.02] transition-all duration-300">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center px-4">
      <div className="flex items-center space-x-6">
        <div className="p-3 bg-white/5 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-500">
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <h4 className="font-space text-sm font-bold uppercase tracking-widest text-white leading-tight">{title}</h4>
      </div>
      <div className="text-cyan-400 text-[11px] font-space font-bold uppercase tracking-[0.2em] md:text-center">
        {focus}
      </div>
      <div className="md:col-span-2 text-zinc-400 text-base leading-relaxed font-light group-hover:text-zinc-200 transition-colors">
        {value}
      </div>
    </div>
  </div>
);

const FounderPage: React.FC = () => {
  useSEO({
    title: 'Iroshan Kulatunga | Founder & Strategy Lead',
    description: 'I help businesses in complex industries—like high-end tea or healthcare—grow by combining business strategy with technical engineering.'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const founderImageUrl = "https://storage.googleapis.com/ai-studio-bucket-855833086157-us-west1/media/image%20(7).png";

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-zinc-900 overflow-hidden border border-white/10 relative group shadow-2xl">
               <img 
                src={founderImageUrl} 
                alt="Iroshan Kulatunga" 
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40"></div>
            </div>
            
            <div className="mt-8 flex flex-col space-y-2">
                <div className="flex flex-col">
                  <span className="text-white font-space text-2xl font-bold tracking-tight">Iroshan Kulatunga</span>
                  <div className="flex flex-col mt-2 space-y-1">
                    <span className="text-cyan-500 font-space text-[12px] font-bold uppercase tracking-widest">MBA from London Metropolitan University UK</span>
                    <span className="text-zinc-500 font-space text-[11px] font-bold uppercase tracking-[0.2em]">MBCS (BCS qualified)</span>
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                   <div className="h-px w-8 bg-cyan-500/50"></div>
                   <div className="text-[10px] font-space font-bold uppercase tracking-[0.3em] text-zinc-600">Founder & Strategy Lead</div>
                </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-10">Strategic Intent</h2>
            <h1 className="font-space text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-12 text-white">
              Turning Insight into<br/>Real Impact.
            </h1>
            
            <div className="p-8 bg-white/[0.02] border-l-4 border-cyan-500 mb-12 backdrop-blur-sm">
               <p className="text-white text-2xl font-space font-light italic leading-relaxed">
                 "I help businesses find their voice and use it to build something that lasts. It's not just about quick growth. It's about building a reputation."
               </p>
            </div>

            <div className="space-y-8 text-zinc-400 text-xl font-light leading-relaxed">
              <p>
                I focus on one thing: taking a big idea and making it work technically. I help businesses in specific industries—like high-end tea or healthcare—grow by looking at the people behind the numbers.
              </p>
              <p>
                I combine business strategy with technical engineering. This means I know what's possible and how to build it. I create the systems that help a brand grow and stay relevant for years.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="font-space text-xs uppercase tracking-[0.5em] text-cyan-500 font-bold mb-6">Expertise Matrix</h2>
              <h3 className="font-space text-4xl font-bold tracking-tighter text-white">Focus Areas.</h3>
            </div>
            <p className="max-w-md text-zinc-500 text-sm font-light leading-relaxed">
              How I partner with organizations to build trust, authority, and measurable success.
            </p>
          </div>

          <div className="border border-white/5 bg-zinc-950/40 backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-6 border-b border-white/5 text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-600">
              <div>Domain</div>
              <div className="md:text-center">Specialization</div>
              <div className="md:col-span-2">Our Shared Goal</div>
            </div>
            <ExpertiseItem 
              icon={Zap}
              title="Elevating Brands"
              focus="Export & Agro-Industry"
              value="I guide local producers in transforming their commodities into premium, world-class brands. It’s about using authentic storytelling to build a reputation that lasts."
            />
            <ExpertiseItem 
              icon={Stethoscope}
              title="Healthcare Strategy"
              focus="Patient Trust"
              value="I work with medical providers to communicate with clarity and heart, building the trust that is essential for long-term patient care."
            />
            <ExpertiseItem 
              icon={ShieldCheck}
              title="Digital Systems"
              focus="Foundations for Growth"
              value="I design and implement the systems that empower your team to operate with confidence and scale without losing their personal touch."
            />
            <ExpertiseItem 
              icon={Sparkles}
              title="Premium Experiences"
              focus="Events & Hospitality"
              value="I use my background in production to create moments that people actually remember."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pt-24 border-t border-white/10">
          <div className="group">
            <div className="text-cyan-500 mb-8 transition-transform duration-500 group-hover:-translate-y-2">
               <Zap size={40} strokeWidth={1} />
            </div>
            <h5 className="font-space text-xl font-bold text-white mb-6 uppercase tracking-widest">Agricultural Growth</h5>
            <p className="text-zinc-500 text-base font-light leading-relaxed">
              Modernizing traditional excellence. We help heritage tea and spice brands reach a global audience while staying true to their roots.
            </p>
          </div>
          <div className="group">
            <div className="text-cyan-500 mb-8 transition-transform duration-500 group-hover:-translate-y-2">
               <Stethoscope size={40} strokeWidth={1} />
            </div>
            <h5 className="font-space text-xl font-bold text-white mb-6 uppercase tracking-widest">Healthcare Trust</h5>
            <p className="text-zinc-500 text-base font-light leading-relaxed">
              Clear communication is vital in complex care. We help providers build a presence that is both authoritative and puts the patient at the center of everything.
            </p>
          </div>
          <div className="group">
            <div className="text-cyan-500 mb-8 transition-transform duration-500 group-hover:-translate-y-2">
               <Sparkles size={40} strokeWidth={1} />
            </div>
            <h5 className="font-space text-xl font-bold text-white mb-6 uppercase tracking-widest">Sensory Impact</h5>
            <p className="text-zinc-500 text-base font-light leading-relaxed">
              Designing experiences that leave a mark. We connect your digital presence with how people experience your brand in person.
            </p>
          </div>
        </div>

        <div className="mt-32 p-12 bg-white text-black flex flex-col md:flex-row items-center justify-between gap-12 group">
          <div className="max-w-xl">
             <h4 className="font-space text-4xl font-bold tracking-tighter mb-4">Let's build something meaningful.</h4>
             <p className="text-zinc-600 text-lg">I'm here to listen to your goals and help you find the best way forward.</p>
          </div>
          <Link to="/contact" className="flex items-center space-x-4 bg-black text-white px-10 py-5 font-space font-bold uppercase tracking-widest hover:bg-cyan-600 transition-all duration-300">
            <span>Start a Conversation</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FounderPage;